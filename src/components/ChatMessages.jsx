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
                <div className="flex flex-col gap-4 p-4 overflow-y-auto scrollbar-hide h-[88%]" ref={chatContainerRef}>
                    {chatMessages.map((msg, index) => {
                        return (
                            <ChatMessage
                                message={msg.message}
                                sender={msg.sender}
                                state={msg.state}
                                key={`key_${index}`}
                            />
                        );
                    })}
                </div>
            );
        }

        export default ChatMessages
