import React, { useState, useRef, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'
import API_Model_Call from "@/api/chat/api.model"

// Typing indicator component
const TypingIndicator = () => (
  <div className="flex space-x-2 items-center">
    <div className="w-1 h-1 rounded-full bg-current animate-[bounce_0.7s_infinite] [animation-delay:-0.3s]" />
    <div className="w-1 h-1 rounded-full bg-current animate-[bounce_0.7s_infinite] [animation-delay:-0.15s]" />
    <div className="w-1 h-1 rounded-full bg-current animate-[bounce_0.7s_infinite]" />
  </div>
)

function ChatBotUi({ onClose }) {
  const userEmail="kratos@gmail.com"
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [inputMessage, setInputMessage] = useState("")
  const [copiedIndex, setCopiedIndex] = useState(null)
  const messagesEndRef = useRef(null)

  // Function to handle overlay click without closing when clicking on chat box
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const processMessageToChatGPT = async (message) => {
    const apiRequestBody = {
      question: message,
      email: userEmail,
    }

    console.log('Processing message:', message);
    setIsTyping(true)
    
    try {
      const response = await API_Model_Call(apiRequestBody)
      console.log('Received response:', response);
      
      if (response?.status === "success" && response?.data?.answer) {
        const newMessage = {
          content: response.data.answer,
          role: 'assistant'
        };
        console.log('Adding new message:', newMessage);
        setMessages(prev => [...prev, newMessage]);
      } else {
        console.error('Invalid response format:', response);
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, {
        content: `Error: ${error.message || 'Error connecting to the server.'}`,
        role: 'assistant'
      }])
    } finally {
      setIsTyping(false)
    }
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return
    setMessages(prev => [...prev, {
      content: inputMessage,
      role: 'user'
    }])

    await processMessageToChatGPT(inputMessage)
    setInputMessage("")
  }

  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  return (
    <div 
      className='fixed inset-0 bg-black bg-opacity-50 z-20 flex items-end justify-end p-4'
      onClick={handleOverlayClick}
    >
      <div className='h-[500px] w-[350px] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden animate-slide-up'>
        <div className='bg-red-500 text-white p-3 font-semibold flex justify-between items-center'>
          <span>Chat Support</span>
          <span className='cursor-pointer text-xl hover:bg-red-600 h-7 w-7 flex items-center justify-center rounded-full' onClick={onClose}>&times;</span>
        </div>
        
        <div className='flex-1 p-3 overflow-y-auto'>
          {messages.length === 0 && (
            <div className='mb-2 text-center text-sm text-gray-500'>
              How can we help you today?
            </div>
          )}
          
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex w-full mb-3 ${
                message.role === 'assistant' ? "justify-start" : "justify-end"
              }`}
            >
              <div className={`rounded-lg px-3 py-2 text-sm max-w-[80%] relative group ${
                message.role === 'assistant' 
                  ? "bg-gray-100 text-gray-800" 
                  : "bg-red-500 text-white"
              }`}>
                {message.content}
                {message.role === 'assistant' && (
                  <button
                    className="h-6 w-6 absolute -right-7 top-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleCopy(message.content, index)}
                  >
                    {copiedIndex === index ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex w-full justify-start mb-3">
              <div className="bg-gray-100 text-gray-800 rounded-lg px-3 py-2 text-sm max-w-[80%] flex items-center gap-2">
                <span>AI is typing</span>
                <TypingIndicator />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSendMessage} className='border-t p-2 flex'>
          <input 
            type="text" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..." 
            className='flex-1 border rounded-l-lg p-2 outline-none'
            disabled={isTyping}
          />
          <button 
            type="submit"
            className='bg-red-500 text-white px-4 rounded-r-lg'
            disabled={isTyping}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatBotUi