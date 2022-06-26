import React, { useState } from 'react';
import { TextField } from '../components/TextField';
import data from '../db/data.json';
import { useHistory, Redirect } from 'react-router-dom';

export const PartnerPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push, replace } = useHistory();
  const users = data.users;

  const checkUser = () => {
    if (email === '' || password === '') {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    for (let i = 0; i < users.length; i++) {
      if (email === users[i].email && password === users[i].password) {
        alert('로그인 성공');
        push('/main');
        return;
      } else if (email === users[i].email && password !== users[i].password) {
        alert('비밀번호가 틀립니다');
        return;
      }
    }
    alert('로그인 실패');
  };

  return (
    <div className="bg-white  w-full px-5 pt-6 pb-20 overflow-y-auto">
      <div className="m-4">
        <div className="text-3xl font-bold mb-10 text-center">Partner 신청</div>

        <div className="space-y-2">
          <TextField label="Name" placeholder="이름을 입력해주세요." />
          <TextField
            label="Email Address"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <TextField
            label="Phone Number"
            placeholder="전화번호를 입력해주세요."
          />
          <TextField
            label="유형선택"
            placeholder="대여 가능한 장비와 종류를 입력해주세요."
          />
        </div>
        <div className="mt-10">
          <div
            className=" rounded-md bg-cyan-500 text-white text-center py-4"
            onClick={() => {
              checkUser();
            }}
          >
            상담신청
          </div>
        </div>
      </div>
    </div>
  );
};







// import React, { useState } from 'react';
// import { TextField } from '../components/TextField';
// import data from '../db/data.json';
// import { useHistory } from 'react-router-dom';

// export const PartnerPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { push, replace } = useHistory();

//   const users = data.users;

//   const checkUser = () => {
//     if (email === '' || password === '') {
//       alert('아이디와 비밀번호를 입력해주세요.');
//       return;
//     }

//     for (let i = 0; i < users.length; i++) {
//       if (email === users[i].email && password === users[i].password) {
//         alert('로그인 성공');
//         push('/main');
//         return;
//       } else if (email === users[i].email && password !== users[i].password) {
//         alert('비밀번호가 틀립니다');
//         return;
//       }
//     }
//     alert('로그인 실패');
//   };

//   return (
//     <div className="bg-white  w-full px-5 pt-6 pb-20 overflow-y-auto">
//       <div className="m-4">
//         <div className="text-3xl font-bold mb-10 text-center">Partner 신청</div>

//         <div className="space-y-2">
//           <TextField label="Name" placeholder="이름을 입력해주세요." />
//           <TextField
//             label="Email Address"
//             placeholder="이메일을 입력해주세요."
//             value={email}
//             onChange={(event) => {
//               setEmail(event.target.value);
//             }}
//           />
//           <TextField
//             label="비밀번호"
//             placeholder="비밀번호를 입력해주세요."
//             type="password"
//             value={password}
//             onChange={(event) => {
//               setPassword(event.target.value);
//             }}
//           />
//           <TextField
//             label="Phone Number"
//             placeholder="전화번호를 입력해주세요."
//           />
//           <TextField
//             label="유형선택"
//             placeholder="대여 가능한 장비와 종류를 입력해주세요."
//           />
//         </div>
//         <div className="mt-10">
//           <div
//             className=" rounded-md bg-cyan-500 text-white text-center py-4"
//             onClick={() => {
//               checkUser();
//             }}
//           >
//             상담신청
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
