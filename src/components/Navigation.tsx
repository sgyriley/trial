import React, { FC, HTMLAttributes } from 'react';
import { ReactComponent as CategoryIcon } from '../navbar img/category.svg';
import { ReactComponent as HomeIcon } from '../navbar img/home.svg';
import { ReactComponent as MyInfoIcon } from '../navbar img/myinfo.svg';
import { ReactComponent as SearchIcon } from '../navbar img/search.svg';

export interface NaviProps extends HTMLAttributes<HTMLDivElement> { }

export const Navigation: FC<NaviProps> = ({ children, className = '', ...props }) => {
  return (
    <>
      {children}
      <div className="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
        <a
          href="/main"
          className="flex flex-grow items-center justify-center p-2 text-indigo-500 hover:text-indigo-500"
        >
          <div className="text-center">
            <span className="block h-8 text-3xl leading-8">
              <i className="mdi mdi-newspaper-variant-outline">
                <HomeIcon />
              </i>
            </span>
            <span className="block text-xs leading-none">Home</span>
          </div>
        </a>
        <a
          href="/category"
          className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
        >
          <div className="text-center">
            <span className="block h-8 text-3xl leading-8">
              <i className="mdi mdi-apps ">
                <CategoryIcon className="mx-auto" />
              </i>
            </span>
            <span className="block text-xs leading-none">Categories</span>
          </div>
        </a>
        <a
          href="/search"
          className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
        >
          <div className="text-center">
            <span className="block h-8 text-3xl leading-8">
              <i className="mdi mdi-star-outline ">
                <SearchIcon className="mx-auto" />
              </i>
            </span>
            <span className="block text-xs leading-none">Search</span>
          </div>
        </a>
        <a
          href="/mypage"
          className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
        >
          <div className="text-center">
            <span className="block h-8 text-3xl leading-8">
              <i className="mdi mdi-magnify">
                <MyInfoIcon />
              </i>
            </span>
            <span className="block text-xs leading-none">MyPage</span>
          </div>
        </a>
      </div>
    </>
  );
};
