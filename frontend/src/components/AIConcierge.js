import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';

const AIConcierge = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting message
      setMessages([{
        id: 1,
        text: "Karibu! Welcome to Rusinga Six-Star Sanctuary! I'm your personal AI travel consultant. I'm here to help you plan the perfect stay at our luxury resort on beautiful Lake Victoria. \n\nI can assist you with:\n• Accommodation recommendations based on your budget\n• Activity planning and bookings\n• Dining options and meal planning\n• Cost calculations for your stay\n\nHow can I help make your Rusinga experience unforgettable?",
        sender: 'ai',
        timestamp: new Date()
      }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getSystemPrompt = () => {
    return `You are the AI Travel Consultant for Rusinga Six-Star Sanctuary, a luxury resort on Rusinga Island, Lake Victoria, Kenya. You are knowledgeable, polite, exclusive, and professional.

RESORT INFORMATION:
- Location: Rusinga Island, Lake Victoria, Kenya
- Type: Six-star luxury sanctuary
- Specialties: East African elegance, world-class hospitality, authentic cultural experiences

ACCOMMODATION RATES (Bed & Breakfast):
High Season (Dec-Mar & Jul-Aug):
- Single Room: Kshs 3,500/night
- Double Room: Kshs 4,500/night

Low Season (Apr-Jun & Sep-Nov):
- Single Room: Kshs 2,800/night  
- Double Room: Kshs 3,600/night

BREAKFAST INCLUDED:
- Eggs (fried, boiled, scrambled as preferred)
- Sausage selection
- Fresh bread or traditional ndazi
- Tea, coffee, drinking chocolate
- Seasonal fresh fruits

DINING OPTIONS (varies by season):
High Season:
- Buffet Lunch/Dinner: Kshs 1,200/person (2 proteins, 2 carbs, vegetables, water)
- Tilapia Small: Kshs 700 (with ugali & vegetables)
- Tilapia Large: Kshs 1,200 (with ugali & vegetables)  
- Beef/Pork Plate: Kshs 800 (with rice/ugali & vegetables)

Low Season: 20% discount on all dining

LUXURY ACTIVITIES:
1. Lake Victoria Sundowner Cruise (3 hrs) - Premium drinks & snacks
2. Fossil Hunting Expedition (4 hrs) - Expert guide & equipment
3. Fly Fishing Adventure (6 hrs) - Equipment, boat, guide, lunch
4. Lakeside Spa Sanctuary (2-4 hrs) - Traditional African therapies
5. Luo Cultural Immersion (5 hrs) - Village visit, crafts, traditional meal

GUIDELINES:
- Always use Kenyan Shillings (Kshs) for pricing
- Ask clarifying questions about group size, dates, interests, and budget
- Provide personalized recommendations
- Calculate total costs when requested
- Suggest seasonal considerations
- Emphasize luxury and authenticity
- Be warm but professional
- Use occasional Swahili greetings (Karibu, Asante, etc.)

Respond helpfully and create an exclusive, premium experience through your communication.`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      
      // Create conversation history for context
      const conversationHistory = messages.map(msg => 
        `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.text}`
      ).join('\n');

      const prompt = `${getSystemPrompt()}\n\nConversation History:\n${conversationHistory}\n\nUser: ${inputValue}\n\nAssistant:`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const aiResponseText = response.text();

      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponseText,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error with Gemini AI:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Pole sana! I'm having trouble connecting right now. Please try again in a moment, or feel free to contact our resort directly for immediate assistance.",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        data-testid="ai-concierge-modal"
      >
        <motion.div
          className="bg-gradient-to-b from-emerald-900 to-emerald-950 rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col border border-amber-600/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-amber-600/20 bg-gradient-to-r from-emerald-800 to-emerald-900 rounded-t-2xl">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white" data-testid="concierge-title">AI Travel Consultant</h3>
                <p className="text-sm text-amber-400">Rusinga Six-Star Sanctuary</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2"
              data-testid="close-concierge-button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-6 space-y-4"
            data-testid="chat-messages-container"
          >
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.sender === 'user'
                      ? 'bg-amber-600 text-white'
                      : 'bg-emerald-800/50 text-gray-200 border border-emerald-700/50'
                  }`}
                  data-testid={`message-${message.sender}-${message.id}`}
                >
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {message.text}
                  </div>
                  <div className={`text-xs mt-2 opacity-70 ${
                    message.sender === 'user' ? 'text-amber-100' : 'text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isLoading && (
              <motion.div
                className="flex justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="bg-emerald-800/50 rounded-2xl p-4 border border-emerald-700/50">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-gray-300 text-sm">AI Consultant is typing...</span>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-amber-600/20 bg-gradient-to-r from-emerald-900 to-emerald-950">
            <div className="flex items-end space-x-4">
              <div className="flex-1">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about accommodations, activities, pricing, or anything about your stay..."
                  className="w-full bg-emerald-800/50 text-white placeholder-gray-400 rounded-xl px-4 py-3 border border-emerald-700/50 focus:border-amber-500/50 focus:outline-none resize-none"
                  rows="2"
                  disabled={isLoading}
                  data-testid="message-input"
                />
              </div>
              <motion.button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="send-message-button"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </motion.button>
            </div>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Calculate costs for 3 nights",
                "Recommend activities for couples", 
                "Budget-friendly options",
                "Best time to visit"
              ].map((suggestion, index) => (
                <motion.button
                  key={index}
                  onClick={() => setInputValue(suggestion)}
                  className="text-xs bg-emerald-800/30 hover:bg-emerald-700/50 text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-300 border border-emerald-700/30 hover:border-amber-500/30"
                  whileHover={{ scale: 1.02 }}
                  data-testid={`quick-action-${index}`}
                >
                  {suggestion}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AIConcierge;