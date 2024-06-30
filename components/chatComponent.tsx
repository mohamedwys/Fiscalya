'use client'

// import { Input } from "@/components/ui/input"
// import { useChat } from "ai/react"
import { useRef, useState, useEffect } from 'react'
import Balancer from "react-wrap-balancer"
import axios from 'axios'

export function Chat() {

    // const { messages, handleInputChange, handleSubmit } = useChat({
    //     api: 'api/ex3',
    //     onError: (e) => {
    //         console.log(e)
    //     }
    // })

    const chatParent = useRef<HTMLUListElement>(null)
    const [messageHistory, setMessageHistory] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    const askGpt = (event: React.FormEvent) => {
        event.preventDefault();
    
        // Ajoutez le message de l'utilisateur à l'historique des messages
        setMessageHistory([...messageHistory, `User: ${input}`]);
    
        // Envoyez une requête à l'API GPT-3
        axios.post('https://fiscalya-spring.onrender.com/ai/message?sessionId=665cc64bcf8921d4a4044645'
            + '&message=' + input, {})
        .then((response) => {
            // Ajoutez la réponse de l'API à l'historique des messages
            setMessageHistory([...messageHistory, `AI: ${response.data.message}`]);
        })
        .catch((error) => {
            console.error(error);
        });
        // Réinitialisez l'input
        setInput('');
    };

    useEffect(() => {
        axios.get("https://fiscalya-spring.onrender.com/ai/user-active-chat-session?userId=665cc64bcf8921d4a4044645")
        .then((response) => {
            // console.log(response.data.messages)
            setMessageHistory(response.data.messages); // Mettez à jour l'état de messageHistory avec les données reçues
        })
        .catch((error) => {
            console.error(error)
        })

        const domNode = chatParent.current
        if (domNode) {
            domNode.scrollTop = domNode.scrollHeight
        }
    })

    return (
        <main className="flex flex-col w-full h-screen max-h-dvh bg-background">

                <h1 className="text-2xl font-bold"></h1>
                <div className="flex flex-col items-center gap-6 text-center">
                <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    <Balancer>
                        <span className="bg-gradient-to-r from-[#6A82FB] to-[#CB837F] bg-clip-text text-transparent">
                            Taxpert Advisor 
                        </span>
                    </Balancer>
                </h2>
                    <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
                        <Balancer>
                            Designed to provide a clear visualization of how funds move.
                        </Balancer>
                    </h3>
                </div>


            <section className="container px-0 pb-10 pt-5 flex flex-col flex-grow gap-4 mx-auto max-w-3xl">
            <ul>
                {messageHistory.map((m, index) => {
                console.log('Test role avant'); // Ajoutez cette ligne pour vérifier les valeurs de role et content
                    const [role, content] = m.split(': ');
                    console.log('Test role : ' + role + " ; " + content); // Ajoutez cette ligne pour vérifier les valeurs de role et content
                    return (
                        <div key={index}>
                            {role === 'User' ? (
                                <li className="flex flex-row">
                                    <div className="rounded-xl p-4 bg-background shadow-md flex">
                                        <p className="text-primary">{content}</p>
                                    </div>
                                </li>
                            ) : (
                                <li className="flex flex-row-reverse">
                                    <div className="rounded-xl p-4 bg-background shadow-md flex w-3/4">
                                        <p className="text-primary">{content}</p>
                                    </div>
                                </li>
                            )}
                        </div>
                    );
                })}
            </ul>
            </section>

            <section className="p-4 mb-10">
                <form onSubmit={askGpt} className="flex w-full max-w-3xl mx-auto items-center">
                    <input className="flex-1 min-h-[40px] bg-neutral-200 rounded-xl p-3 border" 
                    placeholder="Type your question here..." 
                    type="text" 
                    value={input} 
                    onChange={event => setInput(event.target.value)} // Ajout du gestionnaire d'événements onChange
                    />
                    <button className="ml-2 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] 
                    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 " 
                    type="submit">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2C3E50_0%,#004AAD_50%,#fd746c_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-200 px-6 py-1 text-sm font-bold text-zinc-500 backdrop-blur-3xl">
                        Submit
                        </span>
                    </button>
                </form>
            </section>

            {/* <section className="container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl">
                <ul ref={chatParent} className="h-1 p-4 flex-grow bg-muted/50 rounded-lg overflow-y-auto flex flex-col gap-4">
                    {messages.map((m, index) => (
                        <div key={index}>
                            {m.role === 'user' ? (
                                <li key={m.id} className="flex flex-row">
                                    <div className="rounded-xl p-4 bg-background shadow-md flex">
                                        <p className="text-primary">{m.content}</p>
                                    </div>
                                </li>
                            ) : (
                                <li key={m.id} className="flex flex-row-reverse">
                                    <div className="rounded-xl p-4 bg-background shadow-md flex w-3/4">
                                        <p className="text-primary">{m.content}</p>
                                    </div>
                                </li>
                            )}
                        </div>
                    ))}
                </ul >
            </section> */}
        </main>
    )
}

        // <div>

        {/* //     {messages.map((message: Message)=> {
        //         return (
        //             <div key={message.id}>
        //                { message.role === "assistant"
        //                ?
        //                 <h3 className="text-2xl font-semibold text-gray-800">Fiscalya</h3>
        //                 :
        //                 <h3 className="text-2xl font-semibold text-gray-800">User</h3>
        //                }
        //                {message.content.split("\n").map((currentTextBlock: string, index: number) => {
        //                     if(currentTextBlock === "") {
        //                         return <p key={message.id + index}>&nbsp;</p> // " "
        //                     } else {
        //                         return <p key={message.id + index}>{currentTextBlock}</p> //
        //                     }
        //                })}
        //             </div>
        //         )
        //     })}

        //     <form className="mt-12" onSubmit={handleSubmit}>
        //         <   p>Get Clarifications</p>
        //         <input 
        //             className="mt-2 w-full bg-zinc-200 p-2 w-[600]"
        //             placeholder={"How do  register for VAT in Dubai?"}
        //             value={ input }
        //             onChange={handleInputChange}
        //             id="user"
        //             disabled={isLoading}
        //         /> 
        //         <div className="text-center mt-4"></div>
        //         <button className="p-[3px] relative inline-block">
        //             <div className="absolute inset-0 bg-gradient-to-r from-[#BCFD4C] to-cyan-500 rounded-lg" />
        //             <div className="px-8 py-2  bg-[#6E6E6E] rounded-[6px] relative group transition duration-200 font-semibold text-white hover:bg-transparent">
        //             Submit
        //             </div>
        //         </button>  
        //     </form>
        // </div> */}
        
     