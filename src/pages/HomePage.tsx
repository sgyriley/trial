import React from 'react';

export const HomePage = () => {
  return (
    <div className="m-4 space-y-10">
      <div className="space-y-4">
        <div className="text-2xl font-bold mb-4">New</div>
        <img
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80"
          alt=""
          className="w-full h-96 object-cover rounded-2xl "
        />
      </div>

      <div className="space-y-4">
        <div className="text-2xl font-bold">Category</div>

        <div className="flex space-x-6">
          <div>
            <img
              src="https://images.unsplash.com/photo-1563612116625-3012372fccce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">일식</div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1604632910793-c0601f361b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGltc3VtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">중식</div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1600289031464-74d374b64991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmliaW1iYXB8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">한식</div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">양식</div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-2xl font-bold mb-4">List</div>
        <div className="p-4 border border-gray-300 rounded-md">
          <div>
            <img
              src="https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80"
              alt=""
              className="h-48 w-full object-cover rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <div className="mt-4 text-lg font-bold text-left">Card title</div>
            <div className="mt-2 text-base text-left font-normal text-gray-500">
              Sed vel turpis adipiscing penatibus orci neque. Erat sed fermentum
              ipsum vel quis quam. Nunc etiam dui tortor, non in aliquam
              laicinia tempor.
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <button className="rounded-md bg-slate-800  py-2.5 px-4 text-white text-sm font-normal">
                Button
              </button>
              <button className="rounded-md bg-slate-800  py-2.5 px-4 text-white text-sm font-normal">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-3xl text-black font-bold">Today's Special</div>
        <div className="flex flex-row space-x-4">
          <img
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="w-28 h-36 object-cover rounded-2xl"
          />
          <div className="space-y-1">
            <div className="text-lg font-bold">식당 이름</div>
            <div className="space-y-0">
              <div className="text-base font-normal text-gray-600">
                말이 필요 없는 서울 최고의
              </div>
              <div className="text-base font-normal text-gray-600">
                식당 중 하나
              </div>
            </div>
            <div className="text-base font-normal text-gray-300">
              서울시 강남구 청담동
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-gray-200 border-solid rounded-2xl"></div>
      <div className="space-y-6">
        <img
          src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
          alt=""
          className="w-full h-72 object-cover rounded-2xl"
        />

        <div className="space-y-1">
          <div className="text-lg font-bold mb-2">이화여대 아맛나 식당</div>
          <div className="text-base font-normal text-gray-600">
            서울특별시 서대문구 대현동 11-1
          </div>
          <div className="text-base font-normal text-gray-600">
            02-1234-5678
          </div>
          <div className="text-base font-normal text-gray-600">
            MON-SUN 12:00 PM - 9:00 PM
          </div>
        </div>
      </div>

      <div className="text-center py-4 rounded-full text-white border border-slate-900 bg-slate-900 mt-2">
        네이버 지도로 길찾기
      </div>
    </div>
  );
};
