import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/shortlogo.svg';
import { IoIosArrowDown } from 'react-icons/io';
import ChatForm from './ChatForm';
import ChatMessages from './ChatMessages';
import { companyInfo } from './companyInfo';
import { MdOutlineChatBubble } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

function ChatGpt() {
  const [chatHistory, setChatHistory] = useState([{
    hideInChat: true,
    role: 'model',
    text: companyInfo,
  }]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const geenrateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Wait..."), { role: "model", text, isError }])
    }

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history })
    }

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || "Something went wrong");

      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();

      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true)
    }
  }

  const [showChat, setShowChat] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const chatContainerRef = useRef(null);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setKeyboardVisible(window.visualViewport.height < window.innerHeight);
    };

    // Detect if the keyboard is visible based on viewport height
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const adjustChatWindowHeight = () => {
    if (chatWindowRef.current) {
      const windowHeight = window.innerHeight;
      const headerHeight = 70; // height of the header
      const keyboardHeight = isKeyboardVisible ? window.innerHeight - window.visualViewport.height : 0;
      const adjustedHeight = windowHeight - headerHeight - keyboardHeight;

      chatWindowRef.current.style.height = `${adjustedHeight}px`;
    }
  };

  useEffect(() => {
    adjustChatWindowHeight();
  }, [isKeyboardVisible, chatHistory]);

  return (
    <div className={`w-full h-full`}>
      <div className={`fixed z-[30000] md:bottom-[10vw] md:right-[5vw] right-0 rounded-md h-full bottom-0 md:h-[75vh] ${showChat ? 'md:max-w-[300px] w-full' : 'w-0'}`}>
        <div className={`bg-white border border-black rounded-md overflow-hidden shadow-[0px_0px_10px_#000] origin-bottom-right transition-all duration-300 z-20 relative ${showChat ? 'scale-100' : 'scale-0'}`}>
          <div>
            <div className='h-[70px] flex justify-between items-center p-4 bg-black text-white'>
              <div className='bg-white size-10 p-2 rounded-full flex items-center justify-center'>
                <img src={logo} alt="" className='invert' />
              </div>
              <button className='pointer-cursor size-10 hover:bg-gray-600 flex items-center justify-center text-xl rounded-full' onClick={() => setShowChat(prev => !prev)}>
                <IoIosArrowDown />
              </button>
            </div>
          </div>
          <div ref={chatWindowRef} className='flex flex-col justify-between'>
            <div
              className={`p-4 flex flex-col gap-4 overflow-y-auto chat-gpt`} ref={chatContainerRef}
              style={{ overflowY: 'auto', maxHeight: 'calc(100% - 70px)' }}
            >
              <div className='flex items-end gap-2 text-sm'>
                <div className='bg-black size-8 p-2 rounded-full flex items-center justify-center'>
                  <img src={logo} alt="" className='invert-0' />
                </div>
                <p className='bg-gray-200 w-fit p-2 rounded-e-md rounded-t-md'>
                  Hey there 👋 <br /> How can I help you today?
                </p>
              </div>
              {chatHistory.map((chat, index) => (
                <ChatMessages key={index} chat={chat} />
              ))}
            </div>
            <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} geenrateBotResponse={geenrateBotResponse} />
          </div>
        </div>

        <div className='absolute md:-bottom-[3rem] md:right-0 bottom-[2rem] z-10 right-[4vw]'>
          <button className={`pointer-cursor inline-flex items-center justify-center size-10 border-2 border-black rounded-full text-2xl bg-white transition-all duration-300 ${showChat ? 'rotate-180' : 'rotate-0'}`} onClick={() => setShowChat(prev => !prev)}>
            {showChat ? (
              <IoClose />
            ) : <MdOutlineChatBubble />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatGpt;
