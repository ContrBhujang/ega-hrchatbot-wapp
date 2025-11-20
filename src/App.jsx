import React, { useState, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ServicesGrid from './components/ServicesGrid'
import ChatBot from './components/Features'
import Footer from './components/Footer'
import ChatWindow from './components/ChatWindow'
import LanguageValidationError from './components/LanguageValidationError'

function App() {
  const [chatInputValue, setChatInputValue] = useState('')
  const [showChatWindow, setShowChatWindow] = useState(false)
  const [initialMessage, setInitialMessage] = useState('')
  const chatBotRef = useRef()

  const handleCardClick = (title) => {
    setChatInputValue(title)
    // Scroll to chatbot section
    if (chatBotRef.current) {
      chatBotRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSendMessage = (message) => {
    setInitialMessage(message)
    setShowChatWindow(true)
  }

  const handleBackToPortal = () => {
    setShowChatWindow(false)
    setInitialMessage('')
    setChatInputValue('')
  }

  return (
    <div className="App">
      <Header />
      {showChatWindow ? (
        <main className="main-content">
          <div className="container">
            <ChatWindow 
              initialMessage={initialMessage}
              onBack={handleBackToPortal}
            />
          </div>
        </main>
      ) : (
        <main className="main-content">
          <div className="container">
            <Hero />
            <ServicesGrid onCardClick={handleCardClick} />
            <ChatBot 
              ref={chatBotRef}
              inputValue={chatInputValue} 
              onInputChange={setChatInputValue}
              onSendMessage={handleSendMessage}
            />
          </div>
        </main>
      )}
      <Footer />
      <LanguageValidationError />      
    </div>
  )
}

export default App
