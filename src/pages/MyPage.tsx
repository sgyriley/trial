import React from 'react';

export const MyPage = () => {
  return (
    <div className="bg-white  w-full px-5 pt-6 pb-20 overflow-y-auto">
      <div className="space-y-4">
        <div className="text-2xl font-bold">My Page</div>

        <div>
          <div className="flex flex-row">
            <img
              src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="w-32 h-32 mt-12 mb-6 mr-12 object-cover rounded-full"
            />
            <div className=" mt-16 mb-6">
              <div className="text-2xl font-semibold m-4">NAME</div>
              <div className="text- leading-normal text-gray-400 flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="mr-1"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                서대문구, 서울
              </div>
            </div>
          </div>
        </div>
        <div className="text-semibold text-gray-500">회원정보</div>
        <div className="border-t-2 border-gray-200 border-solid rounded-2xl"></div>
        <div>
          <div className="flex flex-row">
            <div className="m-4 text-gray-600 font-semibold w-14">고객명</div>
            <div className="m-4 font-semibold">000</div>
          </div>
          <div className="flex flex-row">
            <div className="m-4 text-gray-600 font-semibold w-14">비밀번호</div>
            <div className="m-4 font-semibold">*********</div>
          </div>
          <div className="flex flex-row">
            <div className="m-4 text-gray-600 font-semibold w-14">이메일</div>
            <div className="m-4 font-semibold">qawe@wse.com</div>
          </div>
          <div className="flex flex-row">
            <div className="m-4 text-gray-600 font-semibold w-14">연락처</div>
            <div className="m-4 font-semibold">010-1234-5678</div>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 border-solid rounded-2xl"></div>
        <div>
          <div className="flex flex-row">
            <div className="m-4 text-gray-600 font-semibold w-14">수령인</div>
            <div className="m-4 font-semibold">000</div>
          </div>
          <div className="flex flex-row">
            <div className="m-4 text-gray-600 font-semibold w-14">주소</div>
            <div className="m-4 mr-4 font-semibold">
              서울시 00구 00동 00-00 XX아파트 000동 0000호
            </div>
          </div>
          <div className="flex flex-row">
            <div className="m-4 text-gray-600 font-semibold w-14">연락처</div>
            <div className="m-4 font-semibold">010-1234-5678</div>
          </div>
        </div>
      </div>
    </div>
  );
};
