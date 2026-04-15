import {  useState ,useRef} from 'react'
import {Chatbot} from 'supersimpledev'

function ChatInput({ chatMessages, setChatMessages }) {
    const TimeoutRef = useRef([]);

    const [isDisabled, setIsDisabled] = useState(false);
    function sendMessage() {
            if (!inputText.trim() || isDisabled) return;
            setIsDisabled(true); 
            const userMessage = {
                                id: crypto.randomUUID(),
                                message: inputText,
                                sender: "user",
                                state: "done",
                                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                            };
                
                setChatMessages((prev) => [...prev, userMessage]);

                const response = Chatbot.getResponse(inputText);
                const TimeoutTyping =setTimeout(() => {
                    setChatMessages((prev)=>
                        [
                            ...prev, {
                                id: crypto.randomUUID(),
                                message: 'Typing...',
                                sender: "robot",
                                state: "typing",
                                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                            }
                        ]
                    )
                }, 100);
                TimeoutRef.current.push(TimeoutTyping);

                const robotMessage = {
                            id: crypto.randomUUID(),
                            message: response,
                            sender: "robot",
                            state: "done",
                            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                            };

                const TimeoutRobot = setTimeout(() => {
                    setChatMessages((prev) => {
                        const filtered = prev.filter((msg) => msg.state !== "typing");
                        return [
                            ...filtered,
                            robotMessage,
                        ];
                    });
                    
                }, 1000);

                TimeoutRef.current.push(TimeoutRobot);
                // to make input text empty after sending msg;
                setInputText("");
                setTimeout(() => {
                    setIsDisabled(false);
                }, 1000);
            }
    
    const [inputText, setInputText] = useState("");

    function saveInputText(e) {
        setInputText(e.target.value);
    }

    const input = (
        <div className="relative flex-1 bg-gray-50 flex items-center rounded-full border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all shadow-sm overflow-hidden pl-4 pr-2 py-1">
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
                className="w-full bg-transparent outline-none py-2 text-gray-700 placeholder-gray-400 text-[15px]"
            />
            <button 
                onClick={sendMessage} 
                disabled={!inputText.trim() || isDisabled}
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    !inputText.trim() || isDisabled 
                    ? "bg-gray-200 text-gray-400" 
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md cursor-pointer transform hover:scale-105 active:scale-95"
                }`}
            >
                <i className="fa-solid fa-paper-plane text-sm ml-[-2px]"></i>
            </button>
        </div>
    );

    const clearButton = (
        <button 
            onClick={() => {
                localStorage.setItem("chatMessages",JSON.stringify([]));
                setChatMessages([]);
                TimeoutRef.current.forEach(clearTimeout);
                TimeoutRef.current = [];
            }}
            className="flex-shrink-0 w-12 h-12 bg-white border border-gray-200 text-gray-500 rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all cursor-pointer shadow-sm group font-medium"
            title="Clear Chat"
        >
            <i className="fa-solid fa-trash-can group-hover:scale-110 transition-transform"></i>
        </button>
    );

    return (
        <div className="flex items-center gap-3">
            {clearButton}
            {input}
        </div>
    );
}

export default ChatInput
