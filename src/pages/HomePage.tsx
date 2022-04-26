import React, { useEffect, useState } from 'react';
import { convertCompilerOptionsFromJson } from 'typescript';
import { CategoryButton } from '../components/CategoryButton';
import { MovieCard } from '../components/MovieCard';
import popcornImg from '../assets/images/popcorn.webp';
import seatsImg from '../assets/images/seats.webp';
import tropImg from '../assets/images/trophy.jpeg';
import beingImg from '../assets/images/cinema.webp';

const API_KEY = '605314d558a35276467abf633ebcce8f';

export type Category = {
  id: number;
  label: string;
  url: string;
  image: string;
};

const CATEGORY_LIST = [
  { id: 0, label: '인기있는영화', url: '/popular', image: popcornImg , title:"Popular Movie"},
  { id: 1, label: '현재 상영작', url: '/now_playing', image: seatsImg, title:"Today's Special"},
  { id: 2, label: '영화 순위', url: '/top_rated', image: tropImg, title: "Top Rated"},
  { id: 3, label: '상영 예정작', url: '/upcoming', image: beingImg , title: "Upcoming"},
];

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
};

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const setCategory = (index: number) => {
    setCategoryIndex(index);
  };

  const getData = async (categoryIndex: number) => {
    const url = `https://api.themoviedb.org/3/movie${CATEGORY_LIST[categoryIndex].url}?api_key=${API_KEY}&language=ko-KR&page=1`;
    const response = await fetch(url);
    console.log(response);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    } else {
      throw new Error('데이터를 받아오지 못했습니다.');
    }
    console.log(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getData(categoryIndex);
  }, [categoryIndex]);

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

        <div className="flex space-x-6" style={{height: "150px",}}>
          {CATEGORY_LIST.map((data) => (
            <CategoryButton
              key={data.id}
              category={data}
              onClick={setCategory}
              isSelected={data.id === categoryIndex}
            />
          ))}
        </div>
      </div>

      {/* <div>
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
      </div> */}

      <div className="space-y-4">
        <div className="text-3xl text-black font-bold">{CATEGORY_LIST[categoryIndex].title}</div>
        {!isLoading &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
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
