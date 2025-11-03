
import React, { useState, useEffect, useRef } from 'react';
import { getChatMessages, getChatUser } from '../services/api';
import type { ChatMessage, User } from '../types';
import { useAuth } from '../hooks/useAuth';
import { PaperAirplaneIcon } from '../components/icons';

const ChatPage: React.FC = () => {
  const { user: currentUser } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [chatPartner, setChatPartner] = useState<User | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(getChatMessages());
    setChatPartner(getChatUser());
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '' || !currentUser) return;
    
    const message: ChatMessage = {
      id: String(messages.length + 1),
      sender: 'user',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatarUrl: currentUser.avatarUrl || 'https://picsum.photos/seed/user/100/100',
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Mock reply
    setTimeout(() => {
        if (chatPartner) {
            const reply: ChatMessage = {
                id: String(messages.length + 2),
                sender: 'other',
                text: "Thanks for reaching out! I'll get back to you shortly.",
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                avatarUrl: chatPartner.avatarUrl || 'https://picsum.photos/seed/partner/100/100',
            };
            setMessages(prev => [...prev, reply]);
        }
    }, 1000);
  };

  return (
    <div className="flex h-[calc(100vh-10rem)] bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
      {/* Sidebar - for future use with multiple chats */}
      <div className="w-1/4 bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4">
        <h2 className="text-xl font-bold mb-4">Conversations</h2>
        {chatPartner && (
             <div className="flex items-center p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
                <img src={chatPartner.avatarUrl} alt={chatPartner.name} className="h-10 w-10 rounded-full" />
                <div className="ml-3">
                    <p className="font-semibold">{chatPartner.name}</p>
                    <p className="text-sm text-green-500">Online</p>
                </div>
            </div>
        )}
      </div>

      {/* Main Chat Area */}
      <div className="w-3/4 flex flex-col">
        {chatPartner && (
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <h2 className="text-xl font-bold">{chatPartner.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Career Coach</p>
            </div>
        )}
        
        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50 dark:bg-gray-700/50">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-end gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'other' && <img src={msg.avatarUrl} alt="avatar" className="h-8 w-8 rounded-full" />}
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-xl ${msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white rounded-bl-none'}`}>
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'} text-right`}>{msg.timestamp}</p>
                </div>
                {msg.sender === 'user' && currentUser && <img src={currentUser.avatarUrl} alt="avatar" className="h-8 w-8 rounded-full" />}
              </div>
            ))}
             <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-full bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button type="submit" className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors disabled:bg-indigo-400">
                <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
