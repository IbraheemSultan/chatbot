
   function ChatMessage({ message, sender , state,time }) {
            const isRobot = sender === "robot";
            return (
                <div className={`flex w-full ${isRobot ? "justify-start" : "justify-end"} group relative`}>
                    <div className={`flex max-w-[80%] ${isRobot ? "flex-row" : "flex-row-reverse"} items-end gap-3`}>
                        <div className="flex-shrink-0 mb-5">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm ${isRobot ? "bg-gradient-to-tr from-blue-500 to-indigo-600 text-white" : "bg-gradient-to-tr from-gray-700 to-gray-900 text-white"}`}>
                                <i className={`fa-solid fa-${isRobot ? "robot" : "user"}`}></i>
                            </div>
                        </div>
                        <div className={`flex flex-col gap-1 ${isRobot ? "items-start" : "items-end"}`}>
                            <div className={`
                                px-5 py-3.5 shadow-sm text-[15px] leading-relaxed
                                ${isRobot 
                                    ? "bg-white text-gray-800 rounded-2xl rounded-bl-sm border border-gray-100" 
                                    : "bg-blue-600 text-white rounded-2xl rounded-br-sm"
                                }
                            `}>
                                {state === "typing" ? (
                                    <div className="flex items-center gap-1.5 h-6 px-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    </div>
                                ) : (
                                    <p className="whitespace-pre-wrap">{message}</p>
                                )}
                            </div>
                            <span className="text-[11px] text-gray-400 font-medium px-1 flex items-center gap-1">
                                {time}
                                {!isRobot && state === "done" && <i className="fa-solid fa-check-double text-blue-500 text-[10px]"></i>}
                            </span>
                        </div>
                    </div>
                </div>
            );
        }

        export default ChatMessage