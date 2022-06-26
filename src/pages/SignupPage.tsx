import React, { useState } from 'react';
import { TextField } from '../components/TextField';
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  useHistory,
} from 'react-router-dom';
import { ScrollToTop } from '../components/ScrollToTop';
import Axios from 'axios';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const { push } = useHistory();
  const register = () => {
    Axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/local/register`, {
      username: name,
      email: email,
      password: password,
      phoneNumber: phonenumber,
      role: 'Public',
      blocked: false,
      confirmed: true,
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem('token', response.data.jwt);
        localStorage.setItem('userid', response.data.user.id);
        push('/login');
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
        alert('회원가입 실패: 아이디 중복을 확인하세요.');
      });
  };

  return (
    <div className="bg-white  w-full px-5 pt-6 pb-20 overflow-y-auto">
      <div className="m-4">
        <div className="text-3xl font-bold mb-10 text-center">Sign up</div>
        <div className="space-y-2">
          <TextField
            label="Name"
            placeholder="이름을 입력해주세요."
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
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
            value={phonenumber}
            onChange={(event) => {
              setPhonenumber(event.target.value);
            }}
          />
        </div>
        <a href="#" onClick={register}>
          <div className="mt-10">
            <div className="rounded-md bg-cyan-500 text-white text-center py-4">
              가입하기
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
