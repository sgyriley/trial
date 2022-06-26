import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  RouteComponentProps,
  useHistory,
  Redirect
} from 'react-router-dom';
import { ScrollToTop } from '../components/ScrollToTop';
import { TextField } from '../components/TextField';
import Axios from 'axios';
import { config } from '../global';

interface MatchParams {
  id: string;
}
export const CategoryDetailAdd = ({
  match,
}: RouteComponentProps<MatchParams>) => {
  let { id } = match.params;
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState('');
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const upload = () => {
    Axios
      .post(`${process.env.REACT_APP_SERVER_URL}/lists`, {
        data: {
          Name: title,
          'price': price,
          thumbnail: link,
          is_reserved: false,
          author: username,
          category: id,
        },
      }, config)
      .then((response) => {
        // Handle success.
        console.log(response);
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };
  if (token != null) {
    Axios
      .get(`${process.env.REACT_APP_SERVER_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        // Handle success.
        let { username, email, phoneNumber } = response.data;
        setUsername(username);
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  }
  else {
    return <Redirect to={{
      pathname: '/login',
      state: {
        from: '/addList/' + id
      }
    }} >
    </Redirect >
  }
  return (
    <div style={{ marginBottom: '60px' }}>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={Router} />
        </Switch>

        <div className="text-2xl font-bold">{id} 추가</div>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <TextField
              label="Title"
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <TextField
              label="Price"
              placeholder="가격을 입력해주세요."
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
            <TextField
              label="link"
              placeholder="링크를 복사해주세요."
              value={link}
              onChange={(event) => {
                setLink(event.target.value);
              }}
            />
          </div>
          <div
            className=" rounded-md bg-cyan-500 text-white text-center py-4"
            onClick={() => {
              upload();
            }}
          >
            업로드
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};





// import { useEffect, useState } from 'react';
// import {
//   BrowserRouter,
//   Route,
//   Router,
//   Switch,
//   RouteComponentProps,
//   useHistory,
//   Redirect
// } from 'react-router-dom';
// import { ScrollToTop } from '../components/ScrollToTop';
// import { TextField } from '../components/TextField';
// import Axios from 'axios';
// import { config } from '../global';

// interface MatchParams {
//   id: string;
// }
// export const CategoryDetailAdd = ({
//   match,
// }: RouteComponentProps<MatchParams>) => {
//   let { id } = match.params;
//   const token = localStorage.getItem("token");
//   const [username, setUsername] = useState('');
//   const [price, setPrice] = useState('');
//   const [title, setTitle] = useState('');
//   const [link, setLink] = useState('');
//   const [email, setEmails] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const upload = () => {
//     Axios
//       .post(`${process.env.REACT_APP_SERVER_URL}/lists`, {
//         data: {
//           Name: title,
//          'price': price,
//           thumbnail: link,
//           is_reserved: false,
//           author: username,
//           category: id,
//         },
//       }, config)
//       .then((response) => {
//         // Handle success.
//         console.log(response);
//       })
//       .catch((error) => {
//         // Handle error.
//         console.log('An error occurred:', error.response);
//       });
//   };
//   if (token != null) {
//     Axios
//       .get(`${process.env.REACT_APP_SERVER_URL}/users/me`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       })
//       .then((response) => {
//         // Handle success.
//         let { username, email, phoneNumber } = response.data;
//         setUsername(username);
//       })
//       .catch((error) => {
//         // Handle error.
//         console.log('An error occurred:', error.response);
//       });
//   }
//   else {
//     return <Redirect to={{
//       pathname: '/login',
//       state: {
//         from: '/addList/' + id
//       }
//     }} >
//     </Redirect >
//   }
//   return (
//     <div style={{ marginBottom: '60px' }}>
//       <BrowserRouter>
//         <ScrollToTop />
//         <Switch>
//           <Route path="/" component={Router} />
//         </Switch>

//         <div className="text-2xl font-bold">{id} 추가</div>
//         <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
//             <TextField
//               label="Title"
//               placeholder="제목을 입력해주세요."
//               value={title}
//               onChange={(event) => {
//                 setTitle(event.target.value);
//               }}
//             />
//             <TextField
//               label="Price"
//               placeholder="가격을 입력해주세요."
//               value={price}
//               onChange={(event) => {
//                 setPrice(event.target.value);
//               }}
//             />
//             <TextField
//               label="link"
//               placeholder="링크를 복사해주세요."
//               value={link}
//               onChange={(event) => {
//                 setLink(event.target.value);
//               }}
//             />
//           </div>
//           <div
//             className=" rounded-md bg-cyan-500 text-white text-center py-4"
//             onClick={() => {
//               upload();
//             }}
//           >
//             업로드
//           </div>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };