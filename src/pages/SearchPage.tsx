import React from 'react';
import { TextField } from '../components/TextField';

export const SearchPage = () => {
  return (
    <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
      <TextField placeholder="🔍  검색어를 입력해주세요." />
    </div>
  );
};
