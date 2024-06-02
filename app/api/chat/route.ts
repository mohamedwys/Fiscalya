import {
    Message as VercelChatMessage,
    StreamingTextResponse,
    createStreamDataTransformer
} from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { HttpResponseOutputParser } from 'langchain/output_parsers';

import { JSONLoader } from "langchain/document_loaders/fs/json";
import { RunnableSequence } from '@langchain/core/runnables'
import { formatDocumentsAsString } from 'langchain/util/document';
import { CharacterTextSplitter } from 'langchain/text_splitter';

const loader = new JSONLoader(
    "src/data/states.json",
    ["/state", "/code", "/nickname", "/website", "/admission_date", "/admission_number", "/capital_city", "/capital_url", "/population", "/population_rank", "/constitution_url", "/twitter_url"],
);

export const dynamic = 'force-dynamic'

/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
    return `${message.role}: ${message.content}`;
};

const TEMPLATE = `Answer the user's questions based only on the following context. If the answer is not in the context, reply politely that you do not have that information available.:
==============================
Context: {context}
==============================
Current conversation: {chat_history}

user: {question}
assistant:`;


export async function POST(req: Request) {
    try {
        // Extract the `messages` from the body of the request
        const { messages } = await req.json();

        const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);

        const currentMessageContent = messages[messages.length - 1].content;

        const docs = await loader.load();

        // load a JSON object
        // const textSplitter = new CharacterTextSplitter();
        // const docs = await textSplitter.createDocuments([JSON.stringify({
        //     "state": "Kansas",
        //     "slug": "kansas",
        //     "code": "KS",
        //     "nickname": "Sunflower State",
        //     "website": "https://www.kansas.gov",
        //     "admission_date": "1861-01-29",
        //     "admission_number": 34,
        //     "capital_city": "Topeka",
        //     "capital_url": "http://www.topeka.org",
        //     "population": 2893957,
        //     "population_rank": 34,
        //     "constitution_url": "https://kslib.info/405/Kansas-Constitution",
        //     "twitter_url": "http://www.twitter.com/ksgovernment",
        // })]);

        const prompt = PromptTemplate.fromTemplate(TEMPLATE);

        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY!,
            model: 'gpt-3.5-turbo',
            temperature: 0,
            streaming: true,
            verbose: true,
        });

        /**
       * Chat models stream message chunks rather than bytes, so this
       * output parser handles serialization and encoding.
       */
        const parser = new HttpResponseOutputParser();

        const chain = RunnableSequence.from([
            {
                question: (input) => input.question,
                chat_history: (input) => input.chat_history,
                context: () => formatDocumentsAsString(docs),
            },
            prompt,
            model,
            parser,
        ]);

        // Convert the response into a friendly text-stream
        const stream = await chain.stream({
            chat_history: formattedPreviousMessages.join('\n'),
            question: currentMessageContent,
        });

        // Respond with the stream
        return new StreamingTextResponse(
            stream.pipeThrough(createStreamDataTransformer()),
        );
    } catch (e: any) {
        return Response.json({ error: e.message }, { status: e.status ?? 500 });
    }
}

// import { OpenAIStream, StreamingTextResponse } from "ai";
// import { Configuration, OpenAIApi } from "openai-edge";

// export const runtime= "edge";

// const config = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY
// })
// const openai = new OpenAIApi(config);

// export async function POST(request: Request) {
//     const { messages } = await request.json();

//     console.log(messages);

//     // createChatCompletion (response from GPT)
//     const response= await openai.createChatCompletion({
//         model: "gpt-3.5-turbo-16k",
//         stream: true,
//         messages: [
//             {role: "system", content:"You are an expert tax and legal advisor AI assistant created to help users with their tax and legal inquiries. Your knowledge comes from official sources such as government websites, publications from the Big 4 accounting firms, and other reputable organizations, Your goal is to provide accurate, unbiased, and easy-to-understand responses to users' questions. You will ask clarifying questions to gather all the necessary informations to give the most precise analysis possible. When responding to users, always be respectful, professional, and use simple language. Avoid jargon and technical terms unless absolutely necessary. If you don't have enough information to provide a complete answer, say so and suggest ways the user can get more help by Booking a Call with Fiscalya Expert. Your knowledge spans a wide range of tax and legal topics, including: Personal income tax, Business taxes, Tax planning and compliance, Tax audits and disputes, Legal issues for individuals and businesses, Contracts and agreements, Intellectual property, Employment law, Real estate and property law. When a user asks a question, first ask clarifying questions to gather more details about their specific situation. This may include: Location of the Business activities, Income sources (location) and amounts, Assets and liabilities, Business type and industry, Relevant dates (tax years, contract dates, etc.), Any other key facts related to the question. Once you have enough information, provide a clear, concise answer based on the official websites sources and relevant online sources, use the most recent information. If needed, include links to relevant government websites, laws, or other authoritative resources and exemple of scenarios to make it easy to understand. If you don't have enough information to fully answer the question, say so and suggest ways the user can get more help, such as: Consulting with your licensed tax professional, Book a Call With Fiscalya. Always be respectful, professional, and helpful in your interactions with users. Your goal is to provide the best possible guidance on tax and legal matters while staying within the limits of your knowledge and abilities as an AI system at the End of every conversation as our customer to confirme your information before applying anything."},
//             ...messages,
//         ]
//     })

//     // create a stream of data from Open AI (stream data to frontend)
//     const stream = await OpenAIStream(response);

//     // send a stream as a response to our client / frontend
//     return new StreamingTextResponse(stream);

// }