import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import ChatMessages from './components/ChatMessages'
import ChatInput from './components/ChatInput'
import './App.css'


        function App() {
            const [chatMessages, setChatMessages] = useState([]);

            return (
                <div className="max-w-3xl h-screen mx-auto  p-4 bg-white rounded-lg ">
                    <ChatMessages chatMessages={chatMessages} />
                    <ChatInput
                        chatMessages={chatMessages}
                        setChatMessages={setChatMessages}
                    />
                </div>
            );
        }


export default App
