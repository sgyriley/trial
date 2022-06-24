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
interface MatchParams {
  id: string;
}

export const CategoryDetailPage = ({
  match,
}: RouteComponentProps<MatchParams>) => {
  let { id } = match.params;
  const [values, setValues] = useState([]);
  useEffect(() => {
    const v = Axios.get(
      `${process.env.REACT_APP_SERVER_URL}/lists?populate=*`,
      config
    )
      .then((response) => setValues(response.data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div style={{ marginBottom: '60px' }}>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={Router} />
        </Switch>

        <div className="text-2xl font-bold">{id}</div>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {values.map((list: any) => {
            console.log(list);
            if (list.attributes.category.data.attributes.title === id) {
              return (
                <>
                  <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img
                      className="object-cover w-full rounded-md h-72 xl:h-80"
                      src={
                        list.attributes.thumbnail.data.attributes
                          .alternativeText
                      }
                      alt={list.attributes.Name}
                    />
                    <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                      {list.attributes.Name}
                    </h4>
                    <p className="text-blue-500">{list.attributes.price}원</p>

                    <button
                      className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-cyan-500 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-gray-700"
                      onClick={function () {
                        document.location.href =
                          '/chat/' + list.attributes.Name;
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mx-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      <span className="mx-1">예약하기</span>
                    </button>
                  </div>
                </>
              );
            }
          })}
        </div>
        <div style={{ height: '60px' }}></div>
      </BrowserRouter>
    </div>
  );
};
