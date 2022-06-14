import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { ScrollToTop } from '../components/ScrollToTop';

export const MainPage = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Switch>
      <Route path="/" component={Router} />
    </Switch>
    <div>
      <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
        <div className="mb-3">
          <h1 className="text-3xl font-bold text-center">
          <p className="italic ...">rentrain</p></h1>
        </div>
        <div className="mb-5">
          <a
            href="#"
            className="block rounded-lg relative p-5 transform transition-all duration-300 scale-10 hover:scale-95"
            style={{
              background:
                'url(https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80) center',
              backgroundSize: 'cover',
            }}
          >
              <div className="absolute top-0 right-0 -mt-3 mr-3">
              <div className="rounded-full bg-cyan-500 text-white text-xs py-1 pl-2 pr-3 leading-none">
                <i className="mdi mdi-fire text-base align-middle"></i>{' '}
                <span className="align-middle">NEW</span>
              </div>
            </div>
            
            <div className="h-48"></div>
            <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
              STRETCHING BAND
            </h2>
            <div className="flex w-full items-center text-sm text-gray-300 font-medium">
              <div className="flex-1 flex items-center">
                <div
                  className="rounded-full w-8 h-8 mr-3"
                  style={{
                    background:
                      'url(https://images.unsplash.com/photo-1596229979157-38eed6fab4a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaG90byUyMHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60) center',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div>김헬스</div>
              </div>
              <div>
                <i className="mdi mdi-thumb-up"></i> 
              </div>
            </div>
           
          </a>
        </div>
        <div className="mb-5">
          <a
            href="/dumbbell"
            className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
            style={{
              background:
                'url(https://images.unsplash.com/photo-1643369283064-f9146f94c6c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGR1bWJiZWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60) center',
              backgroundSize: 'cover',
            }}
          >
              <div className="absolute top-0 right-0 -mt-3 mr-3">
              <div className="rounded-full bg-cyan-500 text-white text-xs py-1 pl-2 pr-3 leading-none">
                <i className="mdi mdi-fire text-base align-middle"></i>{' '}
                <span className="align-middle">NEW</span>
              </div>
            </div>
            <div className="h-48"></div>
            <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
              DUMB BELL
            </h2>
            <div className="flex w-full items-center text-sm text-gray-300 font-medium">
              <div className="flex-1 flex items-center">
                <div
                  className="rounded-full w-8 h-8 mr-3"
                  style={{
                    background:
                      'url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div>나근육</div>
              </div>
              <div>
                <i className="mdi mdi-thumb-up"></i> 
              </div>
            </div>
          </a>
        </div>
        <div className="mb-3">
          <h1 className="text-3xl font-bold">Recent</h1>
          <p className="text-sm text-gray-500 uppercase font-bold">
            SUNDAY 12 June
          </p>
        </div>
        <div className="flex -mx-1 mb-5">
          <div className="w-1/2 px-1">
            <a
              href="/dumbbell"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1583248839364-bd7430a3cd83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVtYiUyMGJlbGxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60) center',
                backgroundSize: 'cover',
              }}
            >
              <div className="h-24"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                DUMB BELL BLACK COLOR
              </h3>
            </a>
            <a
              href="/dumbbell"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1561729955-89357c733059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80) center',
                backgroundSize: 'cover',
              }}
            >
              <div className="h-32"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
              DUMB BELL BLACK COLOR 5kg
              </h3>
            </a>
          </div>
          <div className="w-1/2 px-1">
            <a
              href="#"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1591741535585-9c4f52b3f13f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9hbSUyMHJvbGxlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60) center',
                backgroundSize: 'cover',
              }}
            >
              <div className="h-32"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                Foam roller black color
              </h3>
            </a>
            <a
              href="/yogaball"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1522898467493-49726bf28798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80) center',
                backgroundSize: 'cover',
              }}
            >
              <div className="h-24"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                Yoga ball blue color
              </h3>
            </a>
          </div>
        </div>
        <div className="mb-3">
          <h1 className="text-3xl font-bold">Recommend</h1>
        </div>
        <div>
          <a
            href="/dumbbell"
            className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
          >
            <div
              className="block h-24 w-2/5 rounded overflow-hidden"
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVtYiUyMGJlbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60) center',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className="pl-3 w-3/5">
              <p className="text-xs text-gray-500 uppercase font-semibold mb-2">
                DUMB BELL
              </p>
              <h3 className="text-md font-semibold leading-tight mb-6">
                Dumb bell blue color
              </h3>
              <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                <div
                  className="rounded-full w-6 h-6 mr-3"
                  style={{
                    background:
                      'url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60) center',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div>최요가</div>
              </div>
            </div>
          </a>
        </div>
        <hr className="border-gray-200 my-3" />
        <div>
          <a
            href="/dumbbell"
            className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
          >
            <div
              className="block h-24 w-2/5 rounded overflow-hidden"
              style={{
                background:
                  'url(https://images.unsplash.com/photo-1562771242-a02d9090c90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80) center',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className="pl-3 w-3/5">
              <p className="text-xs text-gray-500 uppercase font-semibold mb-2">
                DUMB BELL
              </p>
              <h3 className="text-md font-semibold leading-tight mb-6">
                Dumb bell black color
              </h3>
              <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                <div
                  className="rounded-full w-6 h-6 mr-3"
                  style={{
                    background:
                      'url(https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoJTIwdHJhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60) center',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div>박헬스</div>
              </div>
            </div>
          </a>
        </div>
        <hr className="border-gray-200 my-3" />
        <div>
          <a
            href="#"
            className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
          >
            <div
              className="block h-24 w-2/5 rounded overflow-hidden"
              style={{
                background:
                  'url(https://media.istockphoto.com/photos/purple-foam-massage-roller-on-gray-background-picture-id1311491521?b=1&k=20&m=1311491521&s=170667a&w=0&h=pR71YPtJdZQGDKT4AbBFMua6J3E1ivBEKqXtn7e_gI4=) center',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className="pl-3 w-3/5">
              <p className="text-xs text-gray-500 uppercase font-semibold mb-2">
                FOAM ROLLER
              </p>
              <h3 className="text-md font-semibold leading-tight mb-6">
                Foam roller violet color
              </h3>
              <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                <div
                  className="rounded-full w-6 h-6 mr-3"
                  style={{
                    background:
                      'url(https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGlsYXRlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60) center',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div>이필라</div>
              </div>
            </div>
          </a>
        </div>
        <hr className="border-gray-200 my-3" />
        <div>
          <a
            href="#"
            className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
          >
            <div
              className="block h-24 w-2/5 rounded overflow-hidden"
              style={{
                background:
                  'url(https://media.istockphoto.com/photos/calming-yoga-picture-id847300254?b=1&k=20&m=847300254&s=170667a&w=0&h=6S6Mopo2NxQK6rLBq2hMwBKHKRzdfkPno3A1RF-R__E=) center',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className="pl-3 w-3/5">
              <p className="text-xs text-gray-500 uppercase font-semibold mb-2">
                YOGA MAT
              </p>
              <h3 className="text-md font-semibold leading-tight mb-6">
                Yoga mat blue color
              </h3>
              <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                <div
                  className="rounded-full w-6 h-6 mr-3"
                  style={{
                    background:
                      'url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60) center',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div>김건강</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
};
