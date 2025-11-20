import React, { useState, useEffect } from "react";
import { useLanguage } from '../contexts/LanguageContext';

const ChatWindow = ({ initialMessage, onBack }) => {
  const { t, validateInputLanguage } = useLanguage()
  const [messages, setMessages] = useState([
    { sender: "bot-message", text: t('botWelcome') }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    const newValue = e.target.value
    setInput(newValue)
    
    // Validate language when user types more than a few characters
    if (newValue.length > 3) {
      validateInputLanguage(newValue)
    }
  }

  // Add initial message when component mounts
  useEffect(() => {
    if (initialMessage) {
      setMessages(prev => [
        ...prev,
        { sender: "user-message", text: initialMessage }
      ]);
      
      // Simulate bot response to initial message
      setIsTyping(true);
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { sender: "bot-message", text: getBotResponse(initialMessage) }
        ]);
        setIsTyping(false);
      }, 1500);
    }
  }, [initialMessage, t]);

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('referral') || message.includes('bonus') || message.includes('referencia') || message.includes('bono')) {
      return t('referralBonusResponse');
    } else if (message.includes('leave') || message.includes('time off') || message.includes('licencia') || message.includes('vacaciones')) {
      return t('leaveTypesResponse');
    } else if (message.includes('refer') || message.includes('referral process') || message.includes('referir')) {
      return t('referralProcessResponse');
    } else if (message.includes('harassment') || message.includes('report') || message.includes('acoso') || message.includes('reportar')) {
      return t('harassmentResponse');
    } else {
      return t('processingRequest');
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user-message", text: input }];
    setMessages(newMessages);
    setInput("");

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot-message", text: getBotResponse(input) },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <button className="back-button" onClick={onBack}>
          ← {t('backToPortal')}
        </button>
        <h2>{t('hrAssistantChat')}</h2>
      </div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user-message" ? "user-message" : "bot-message"}`}
          >
            <div
            key={index}
            className={`bubble ${msg.sender === "user-message" ? "user-bubble" : "bot-bubble"}`}
          >
            {msg.text}
          </div>
          </div>
        ))}
        {isTyping && <div className="typing-indicator">Bot is typing...</div>}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder={t('typeMessage')}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className='send-btn' onClick={handleSend} title={t('send')}>➤</button>
      </div>
    </div>
  );
};

export default ChatWindow;