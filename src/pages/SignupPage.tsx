import React from 'react';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  return (
    <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
      <div className="m-4">
        <div className="text-3xl font-bold mb-10 text-center">Sign up</div>
        <div className="space-y-2">
          <TextField label="Name" placeholder="이름을 입력해주세요." />
          <TextField
            label="Email Address"
            placeholder="이메일을 입력해주세요."
          />
          <TextField label="Password" placeholder="비밀번호를 입력해주세요." />
          <TextField
            label="Phone Number"
            placeholder="전화번호를 입력해주세요."
          />
        </div>

        <div className="mt-10">
          <div className="rounded-md bg-cyan-500 text-white text-center py-4">
            가입하기
          </div>
        </div>
      </div>
    </div>
  );
};
