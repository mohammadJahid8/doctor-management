'use client';
import { useState } from 'react';

const ChatWidget = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState<{ sender: 'user' | 'ai'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5003/api/v1/llama/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await res.json();
      setMessages(prev => [...prev, { sender: 'ai', text: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { sender: 'ai', text: "Sorry, I couldn't respond right now." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-10 right-10 w-[420px] h-[540px] bg-white rounded-2xl shadow-2xl p-0 z-50 flex flex-col border border-gray-200">
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h2 className="font-semibold text-2xl flex items-center gap-2">
          DOCalert
        </h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-2xl font-bold">✕</button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4 bg-gray-50 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] px-4 py-3 rounded-lg text-base shadow
                ${msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-gray-200 text-gray-900 rounded-bl-none flex items-center gap-1'
                }`}
            >
              {msg.sender === 'ai'}
              <span>{msg.text}</span>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-700 px-4 py-3 rounded-lg text-base flex items-center gap-2">
              <span className="animate-spin inline-block w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full"></span>
              Thinking...
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-3 px-6 py-4 border-t bg-white">
        <input
          className="flex-1 border border-gray-300 px-4 py-3 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base font-semibold transition disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
