import React, { useState, useEffect, forwardRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const ChatBot = forwardRef(({ inputValue, onInputChange, onSendMessage }, ref) => {
  const { t, validateInputLanguage } = useLanguage()
  const [localInputValue, setLocalInputValue] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: t('botWelcome'),
      sender: 'bot',
      timestamp: new Date()
    }
  ])

  // Update local input value when external value changes
  useEffect(() => {
    if (inputValue !== undefined) {
      setLocalInputValue(inputValue)
    }
  }, [inputValue])

  const handleInputChange = (e) => {
    const newValue = e.target.value
    setLocalInputValue(newValue)
    
    // Validate language when user types more than a few characters
    if (newValue.length > 3) {
      validateInputLanguage(newValue)
    }
    
    if (onInputChange) {
      onInputChange(newValue)
    }
  }

  const handleSendMessage = () => {
    if (localInputValue.trim()) {
      // Call the onSendMessage callback to navigate to ChatWindow
      if (onSendMessage) {
        onSendMessage(localInputValue)
      } else {
        // Fallback behavior if no callback provided
        const newMessage = {
          id: messages.length + 1,
          text: localInputValue,
          sender: 'user',
          timestamp: new Date()
        }
        
        setMessages([...messages, newMessage])
        setLocalInputValue('')
        if (onInputChange) {
          onInputChange('')
        }
        
        // Simulate bot response
        setTimeout(() => {
          const botResponse = {
            id: messages.length + 2,
            text: "Thank you for your question! I'm processing your request. For immediate assistance, please contact HR at hr@egamerica.com or call (555) 123-4567.",
            sender: 'bot',
            timestamp: new Date()
          }
          setMessages(prev => [...prev, botResponse])
        }, 1000)
      }
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const handleFileAttach = () => {
    // Placeholder for file attachment
    alert('File attachment feature coming soon!')
  }

  const handleVoiceInput = () => {
    // Placeholder for voice input
    alert('Voice input feature coming soon!')
  }

  return (
    <section className="chatbot-section" ref={ref}>
      
      <div className="chatbot-container">
        
        
        <div className="chat-input-container">
          <div className="chat-input-wrapper">
            <input
              type="text"
              placeholder={t('askAnything')}
              value={localInputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="chat-input"
              id="chat-input"
            />
            <div className="input-actions">
              <button
                className={`send-button ${!localInputValue.trim() ? 'disabled' : ''}`}
                onClick={handleSendMessage}
                disabled={!localInputValue.trim()}
                title={t('send')}
                type="button">
                <img src="/dist/assets/send-arrow.svg" alt={t('send')} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default ChatBot
