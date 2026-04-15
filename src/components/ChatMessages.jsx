import { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
       function ChatMessages({ chatMessages }) {
            const chatContainerRef = useRef(null);
            useEffect(() => {
                if (chatContainerRef.current) {
                    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
                }
            }, [chatMessages]);
            

            return (
                <div className="flex-1 overflow-y-auto scrollbar-hide p-6 space-y-6" ref={chatContainerRef}>
                    {chatMessages.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4 pt-10">
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center">
                                <i className="fa-solid fa-comments text-3xl text-blue-300"></i>
                            </div>
                            <p className="text-lg font-medium text-gray-500">Start a conversation</p>
                        </div>
                    ) : null}
                    {chatMessages.map((msg, index) => {
                        return (
                            <ChatMessage
                                message={msg.message}
                                sender={msg.sender}
                                state={msg.state}
                                time={msg.time}
                                key={`key_${index}`}
                            />
                        );
                    })}
                </div>
            );
        }

        export default ChatMessages
