
   function ChatMessage({ message, sender , state }) {
            return (
                <div className={` flex items-center gap-2 p-4  rounded-lg  ${sender === "robot" ? "justify-start" : "justify-end"}`}>
                    <div className={`p-3 py-${sender === "robot" ? "3.5" : "3"}!  rounded-full flex items-center justify-center ${sender === "robot" ? "bg-gray-600" : "bg-blue-500"} bg-green-600! ${sender === "robot" ? "order-first" : "order-last"} `}>
                        <i
                            className={`fa-solid fa-${sender === "robot" ? "robot" : "user"}  text-white `}
                        ></i>
                    </div>
                    <p className={`bg-gray-200 p-2 rounded-lg ${sender === "robot" ? "ml-2" : "mr-2"} flex items-center gap-2 ${state === "typing" ? "italic text-gray-500" : ""}`}> 
                        <p className={`${state === "typing" ? "text-blue-300/20 animate-spin border-3 border-b-blue-300 w-4 h-4  rounded-full " : ""}`}></p>
                        {message}</p>
                </div>
            );
        }

        export default ChatMessage