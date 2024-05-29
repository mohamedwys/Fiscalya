"use client"

import { useChat, Message } from "ai/react";

export default function ChatComponent () {


   const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();

    console.log("message--->"+ messages);
    console.log('input --->' + input);

    return (
        <div>

            {messages.map((message: Message)=> {
                return (
                    <div key={message.id}>
                       { message.role === "assistant"
                       ?
                        <h3 className="text-2xl font-semibold text-gray-800">Fiscalya</h3>
                        :
                        <h3 className="text-2xl font-semibold text-gray-800">User</h3>
                       }
                       {message.content.split("\n").map((currentTextBlock: string, index: number) => {
                            if(currentTextBlock === "") {
                                return <p key={message.id + index}>&nbsp;</p> // " "
                            } else {
                                return <p key={message.id + index}>{currentTextBlock}</p> //
                            }
                       })}
                    </div>
                )
            })}

            <form className="mt-12" onSubmit={handleSubmit}>
                <   p>Get Clarifications</p>
                <textarea 
                    className="mt-2 w-full bg-zinc-200 p-2 w-[600]"
                    placeholder={"How do  register for VAT in Dubai?"}
                    value={ input }
                    onChange={handleInputChange}
                    id="user"
                /> 
                <div className="text-center mt-4"></div>
                <button className="p-[3px] relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#BCFD4C] to-cyan-500 rounded-lg" />
                    <div className="px-8 py-2  bg-[#6E6E6E] rounded-[6px] relative group transition duration-200 font-semibold text-white hover:bg-transparent">
                    Submit
                    </div>
                </button>  
            </form>
        </div>
        
    )
};