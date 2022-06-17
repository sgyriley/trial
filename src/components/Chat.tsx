import React, { FC, HTMLAttributes } from 'react';

export interface Chat extends HTMLAttributes<HTMLDivElement> {
  isMe?: string;
  bottom?: string;
}

export const Chat: FC<Chat> = ({ children, bottom=0, isMe = 'no' }) => {
  
  if (isMe === 'yes') {
    return (
      <div className="w-full grid justify-items-end">
        <div className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-cyan-500 text-white ">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="mt-2 mb-{bottom} items-start px-4 py-2 text-center rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
        {children}
      </div>
    </div>
  )
};
