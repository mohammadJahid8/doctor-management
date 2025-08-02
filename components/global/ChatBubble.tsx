'use client';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import ChatWidget from './ChatWidget';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg cursor-pointer z-50"
      >
        <MessageCircle size={24} />
      </div>
      {isOpen && <ChatWidget onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatBubble;
