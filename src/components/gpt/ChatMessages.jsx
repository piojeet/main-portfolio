import React from 'react'
import logo from '../../assets/shortlogo.svg'

function ChatMessages({chat}) {
  return (
    !chat.hideInChat && (
        <div className={`flex items-end gap-2 ${chat.role === 'model' ? 'justify-start' : 'justify-end'}`}>
      {chat.role === 'model' && (
        <div className='bg-black size-8 p-2 rounded-full flex items-center justify-center'>
          <img src={logo} alt="logo" className='invert-0' />
        </div>
      )}
      <p
        className={`max-w-[70%] ${
          chat.role === 'model'
            ? 'bg-gray-200 text-black rounded-e-md rounded-t-md'
            : 'bg-black text-white rounded-t-md rounded-bl-md'
        } ${chat.isError ? 'text-red-600' : ''} p-2 text-sm`}
      >
        {chat.text}
      </p>
    </div>
    )
    
  )
}

export default ChatMessages