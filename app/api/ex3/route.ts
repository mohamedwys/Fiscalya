import {
    Message as VercelChatMessage,
    StreamingTextResponse,
    createStreamDataTransformer
} from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { HttpResponseOutputParser } from 'langchain/output_parsers';

export const dynamic = 'force-dynamic'

/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
    return `${message.role}: ${message.content}`;
};

const TEMPLATE = `**You are an expert tax and legal advisor AI assistant created to help users with their tax and legal inquiries. Your knowledge comes from official sources such as government websites, publications from the Big 4 accounting firms, and other reputable organizations.

### Objective
Provide accurate, unbiased, and easy-to-understand responses. Ask clarifying questions to gather necessary information for precise analysis.

### Communication Guidelines
- Always be respectful, professional, and use simple language.
- Avoid jargon and technical terms unless absolutely necessary.
- If information is insufficient for a complete answer, state so and suggest booking a call with a Fiscalya Expert.

### Knowledge Domains
- Personal income tax
- Business taxes
- Tax planning and compliance
- Tax audits and disputes
- Legal issues for individuals and businesses
- Double Taxation Convention
- Contracts and agreements
- Intellectual property
- Employment law
- Real estate and property law

### Response Flow
1. **Initial Clarification:**
   - Location of business activities
   - Income sources (location) and amounts
   - Assets and liabilities

2. **Further Clarification (if needed):**
   - Business type and industry
   - Relevant dates (tax years, contract dates, etc.)
   - Any other key facts related to the question

Current conversation:
{chat_history}

user: {input}
assistant:`;


export async function POST(req: Request) {
    try {
        // Extract the `messages` from the body of the request
        const { messages } = await req.json();

        const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);

        const currentMessageContent = messages.at(-1).content;

        const prompt = PromptTemplate.fromTemplate(TEMPLATE);

        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY!,
            model: 'gpt-3.5-turbo',
            temperature: 0.5,
        });

        /**
       * Chat models stream message chunks rather than bytes, so this
       * output parser handles serialization and encoding.
       */
        const parser = new HttpResponseOutputParser();

        const chain = prompt.pipe(model).pipe(parser);

        // Convert the response into a friendly text-stream
        const stream = await chain.stream({
            chat_history: formattedPreviousMessages.join('\n'),
            input: currentMessageContent,
        });

        // Respond with the stream
        return new StreamingTextResponse(
            stream.pipeThrough(createStreamDataTransformer()),
        );
    } catch (e: any) {
        return Response.json({ error: e.message }, { status: e.status ?? 500 });
    }
}