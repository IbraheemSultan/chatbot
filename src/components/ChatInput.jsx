import { useState } from 'react'
import {Chatbot} from 'supersimpledev'

function ChatInput({ chatMessages, setChatMessages }) {
    const [isDisabled, setIsDisabled] = useState(false);

    function sendMessage() {
            if (!inputText.trim() || isDisabled) return;
            setIsDisabled(true); 
            const userMessage = {
                                id: crypto.randomUUID(),
                                message: inputText,
                                sender: "user",
                                state: "done",
                            };
                
                setChatMessages((prev) => [...prev, userMessage]);

                const response = Chatbot.getResponse(inputText);


                setTimeout(() => {
                    setChatMessages((prev)=>
                        [
                            ...prev, {
                                id: crypto.randomUUID(),
                                message: 'Typing...',
                                sender: "robot",
                                state: "typing",
                            }
                        ]
                    )
                }, 100);
                setTimeout(() => {
                    setChatMessages((prev) => {
                        const filtered = prev.filter((msg) => msg.state !== "typing");
                        return [
                            ...filtered,
                            {
                            id: crypto.randomUUID(),
                            message: response,
                            sender: "robot",
                            state: "done",
                            },
                        ];
                    });
                }, 2000);

                // to make input text empty after sending msg;
                setInputText("");

                setTimeout(() => {
                    setIsDisabled(false);
                }, 2000);
            }
            
            const [inputText, setInputText] = useState("");

            const input = (
                <input 
                    type="text"
                    placeholder="Type your message here..."
                    onChange={saveInputText}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                        sendMessage();
                        }
                    }}
                    value={inputText}
                    className="border border-gray-600 w-full  rounded-lg px-4 py-2"
                />
            );

            const button = <button onClick={sendMessage} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer">Send</button>;

            function saveInputText(e) {
                setInputText(e.target.value);
            }

            return (
                <div className="flex justify-center items-center gap-2 p-4 rounded-lg ">
                    {input}
                    {button}
                </div>
            );
        }

        export default ChatInput
