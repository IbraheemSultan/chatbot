# 🤖 ChatBot - React AI Chatbot Application

A modern, responsive chatbot application built with React, Vite, and Tailwind CSS. This project features a clean user interface with real-time messaging, typing indicators, and smooth animations.

## ✨ Features

- **Real-time Chat Interface**: Interactive chat experience with instant message updates
- **Typing Indicators**: Visual feedback showing when the bot is processing a response
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and intuitive interface built with Tailwind CSS
- **Fast Performance**: Powered by Vite for lightning-fast development and build times
- **Component-Based Architecture**: Modular React components for easy maintenance

## 🚀 Technologies Used

- **React 19.2.0** - Modern JavaScript library for building user interfaces
- **Vite 7.3.1** - Next-generation frontend build tool
- **Tailwind CSS 4.2.1** - Utility-first CSS framework
- **SuperSimpleDev** - Chatbot response engine
- **ESLint** - Code quality and consistency

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/IbraheemSultan/ChatBot.git
cd ChatBot/chatbot
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
chatbot/
├── src/
│   ├── components/
│   │   ├── ChatInput.jsx       # Input component for sending messages
│   │   ├── ChatMessage.jsx     # Individual message component
│   │   └── ChatMessages.jsx    # Messages container component
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Application styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Project dependencies
└── vite.config.js             # Vite configuration
```

## 🎯 Component Overview

### App.jsx

The main component that manages the chat state and renders the chat interface.

### ChatMessages.jsx

Displays all chat messages in a scrollable container.

### ChatMessage.jsx

Renders individual messages with appropriate styling based on sender (user or bot).

### ChatInput.jsx

Handles user input and message submission with typing indicators and response handling.

## 🎨 Features in Detail

### Message Flow

1. User types a message and presses send
2. Message appears instantly in the chat
3. Bot displays a "Typing..." indicator
4. After a brief delay, the bot's response appears

### UI Elements

- User messages: Blue accent with right alignment
- Bot messages: Gray accent with left alignment
- Icons: Font Awesome icons for user and robot
- Animations: Smooth transitions and typing indicators

## 🔧 Configuration

The project uses:

- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **ESLint** for code quality enforcement

## 📝 Usage Example

Simply type your message in the input field and press Enter or click the send button. The chatbot will respond with relevant information based on your query.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ibraheem Sultan**

- GitHub: [@IbraheemSultan](https://github.com/IbraheemSultan)

## 🙏 Acknowledgments

- React Team for the amazing framework
- Vite Team for the blazing-fast build tool
- Tailwind CSS for the utility-first CSS framework
- SuperSimpleDev for the chatbot engine

---

Made with ❤️ by Ibraheem Sultan
