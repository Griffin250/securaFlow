import { useState, useRef } from 'react';

export default function SecurityCoach() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi! I\'m your security coach. Ask me anything about protecting your systems.' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on our security policy, you should...",
        "That's a great question! The recommended approach is...",
        "I'd suggest reviewing our documentation on...",
      ];
      const botMessage = { 
        role: 'bot', 
        content: responses[Math.floor(Math.random() * responses.length)] 
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-4 h-96 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4 space-y-3">
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`p-3 rounded-lg max-w-[80%] ${msg.role === 'bot' 
              ? 'bg-blue-900/50 text-white mr-auto' 
              : 'bg-gray-700 ml-auto'
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none"
          placeholder="Ask a security question..."
        />
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
}