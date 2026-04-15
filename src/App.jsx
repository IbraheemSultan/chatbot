import { useState,useEffect, } from 'react'
import {Chatbot} from 'supersimpledev'
import ChatMessages from './components/ChatMessages'
import ChatInput from './components/ChatInput'
import './App.css'


        function App() {
            const [chatMessages, setChatMessages] = useState(() => {
                const savedMessages = localStorage.getItem("chatMessages");
                return savedMessages ? JSON.parse(savedMessages) : [];
            });

            useEffect(() =>{
                localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
            }, [chatMessages]);
            return (
                <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4 sm:p-8 font-sans">
                    <div className="w-full max-w-4xl h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">
                        {/* Header */}
                        <div className="bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10 shadow-sm relative">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <i className="fa-solid fa-robot text-xl"></i>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-800">Smart Assistant</h1>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        <span className="text-sm text-gray-500 font-medium">Online</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Chat Area */}
                        <div className="flex-1 bg-gray-50/50 relative overflow-hidden flex flex-col">
                            <ChatMessages chatMessages={chatMessages} />
                        </div>
            
                        {/* Input Area */}
                        <div className="bg-white border-t border-gray-100 p-4 sm:p-6 z-10">
                            <ChatInput
                                chatMessages={chatMessages}
                                setChatMessages={setChatMessages}
                            />
                        </div>
                    </div>
                </div>
            );
        }


export default App
