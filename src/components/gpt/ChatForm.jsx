import React, { useState, useEffect, useRef } from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';

function ChatForm({ chatHistory, setChatHistory, geenrateBotResponse }) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const handleFocus = () => {
      inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    const inputElement = inputRef.current;
    inputElement.addEventListener('focus', handleFocus);

    return () => {
      inputElement.removeEventListener('focus', handleFocus);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputValue.trim();
    if (!userMessage) return;
    setInputValue(''); // Clear input

    setChatHistory((history) => [...history, { role: 'user', text: userMessage }]);
    setTimeout(() => {
      setChatHistory((history) => [...history, { role: 'model', text: 'Wait...' }]);
    }, 600);

    geenrateBotResponse([...chatHistory, { role: 'user', text: `${userMessage}` }]);
  };

  return (
    <div>
      <form className="p-4" onSubmit={handleSubmit}>
        <div className="flex items-center outline-[1px] outline rounded-md px-2 focus-within:outline-[2px]">
          <input
            ref={inputRef}
            type="text"
            className="w-full p-2 pl-0 outline-none"
            placeholder="Message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <button
            type="submit"
            className={`p-2 bg-black transition-all duration-200 ${inputValue.trim() ? 'scale-100 rounded-md text-white pointer-events-auto' : 'scale-50 rounded-full text-black pointer-events-none rotate-180'}`}
          >
            <IoMdArrowRoundUp />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatForm;
