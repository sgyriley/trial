import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { ScrollToTop } from '../components/ScrollToTop';
import Axios from 'axios';
import { config } from '../global';

export const CategoryPage = () => {
  const [values, setValues] = useState([]);
  useEffect(() => {
    const v = Axios.get(
      `${process.env.REACT_APP_SERVER_URL}/categories?populate=*`,
      config
    )
      .then((response) => {
        setValues(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Router} />
      </Switch>
      <div className="space-y-4">
        <div className="text-3xl font-bold mb-14">Category</div>

        <a href=""></a>
        <div>
          <div className="flex">
            {values.map((value: any) => {
              console.log(value);
              return (
                <a href={'/categories/' + value.attributes.title} className="m-4 flex-auto">
                  <div>
                    <img
                      src={value.attributes.image.data.attributes.alternativeText}
                      alt=""
                      className="w-24 h-24 object-cover rounded-full"
                    />
                    <div className="font-bold mt-2 text-center">{value.attributes.title}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
