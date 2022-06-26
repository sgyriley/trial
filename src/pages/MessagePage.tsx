// import React, { useState } from 'react';
// import {
//   RouteComponentProps,
//   Redirect
// } from 'react-router-dom';
// import { Chat } from '../components/Chat';
// interface MatchParams {
//   id: string;
// }
// export const MessagePage = ({
//   match,
// }: RouteComponentProps<MatchParams>) => {
//   const [messages, setMessages] = useState([]);
//   const token = localStorage.getItem("token");
//   const id = match.params;
//   if (token != null) {
//     return <Redirect to={{
//       pathname: '/login',
//       state: {
//         from: '/chat/' + id
//       }
//     }} >
//     </Redirect >
//   }
//   return (
//     <>
//       <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
//         <Chat isMe='yes'>
//           안녕하세요!
//         </Chat>
//         <Chat>
//           안녕하세요
//         </Chat>
//         <Chat isMe='yes'>
//           혹시 이거 아직 계약 가능한가요??
//         </Chat>
//         <Chat>
//           네 가능합니다!
//         </Chat>
//         <Chat bottom='2'>
//           사용 기간은 얼마로 하실까요?
//         </Chat>

//         <div>
//           <div className="items-start px-4 py-52 text-center rounded-lg inline-block rounded-bl-none ">
//           </div>
//         </div>
//       </div>
//       <div className='absolute bottom-0 w-full px-5'>
//         <form className="w-full">
//           <label htmlFor="chat" className="sr-only">
//             Your message
//           </label>
//           <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
//             <button
//               type="button"
//               className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//             <button
//               type="button"
//               className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//             <textarea
//               id="chat"
//               rows={1}
//               className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="Your message..."
//             ></textarea>
//             <button
//               type="submit"
//               className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
//             >
//               <svg
//                 className="w-6 h-6 rotate-90"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
//               </svg>
//             </button>
//           </div>
//         </form>
//       </div>
//     </>


// );};


import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import { ScrollToTop } from '../components/ScrollToTop';
import Axios from 'axios';
import { config } from '../global';
import { Chat } from '../components/Chat';
interface MatchParams {
  id: string;
}

export const MessagePage = ({ match }: RouteComponentProps<MatchParams>) => {
  let { id } = match.params;
  const [values, setValues] = useState([]);
  const [content, setContent] = useState('');

  const sendMsg = () => {
    Axios.post(`${process.env.REACT_APP_SERVER_URL}/messages`, {
      data: {
        content: content,
        userId: localStorage.getItem('userid'),
        list: +id,
      },
    })
      .then((response) => {
        // Handle success.
        console.log('Well done!', response);
        // replace('/');
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };

  useEffect(() => {
    const v = Axios.get(
      `${process.env.REACT_APP_SERVER_URL}/lists/${'1'}?populate=*`,
      config
    )
      .then((response) => {
        const messages = response.data.data.attributes.messages.data;
        console.log(messages);
        setValues(messages);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
        {values.map((msg: any) => {
          return <Chat isMe="yes">{msg.attributes.content}</Chat>;
        })}
        <div>
          <div className="items-start px-4 py-52 text-center rounded-lg inline-block rounded-bl-none "></div>
        </div>
      </div>
      <div className="absolute bottom-16 w-full px-5">
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
          <button
            type="button"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <textarea
            id="chat"
            rows={1}
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
            onChange={(e) => setContent(e.target.value)}
          >
            {content}
          </textarea>
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            onClick={() => {
              sendMsg();
            }}
          >
            <svg
              className="w-6 h-6 rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
