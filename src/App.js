import './css/App.css';

import {useState, useLocation} from 'react'
import {Routes, Route, Link, Navigate} from 'react-router-dom'

import HomePage from './page/HomePage';
import DetailPage from './page/DetailPage';
import AboutPage  from './page/AboutPage';

/* 상품 전체 페이지 */
import ProductAllPage from './page/ProductAllPage';

/* 특정 상품 Detail 페이지 */
import Header  from './page/Header';
import Footer  from './page/Footer';


/* 로그인 !! 경로 이동 처리방법을 사용할 것임 */
import Login from './page/Login';
import User from './page/User';

/* 컴포넌트 */
import ProductBox from './components/ProductBox';

/* 
  유저스토리
  1. 헤더, 푸터 html, css 작성 미디어쿼리작성
  2. DetailPage를 누르면 전체 상품이 나온다
  3. 상단: 상품개수, 높은금액, 낮은금액, 할인률, 신상품 버튼이 있어서 클릭하면 해당 데이터만 나온다.
  4. 5열로 배열됨 780px 이하는 2열로 바뀌게 변경
*/


/* restful routes

url 디자인 패턴
get 데이터를 가져올 때 쓴다.

post 는 데이터를 생성할 때 쓴다
put 은 데이터를 수정할 때 사용한다
delete 는 데이터를 삭제할 때 사용한다

이걸 왜 쓰는가? 
  1. 트랜드 이기 때문에
  2. url 이 길어지고 복잡해지는것을 방지하기위함 

item + get 명령어 = 아이템 읽어오기
item + post 명령어 = 아이템 생성
item + put 명령어 = 아이템 수정
item + delete 명령어 = 아이템 삭제
*/


function App() {

  /*==================================== header 용 useState ===================================*/
  
                /* 클래스 추가제거를위해 리액트에서는 useState를 이용해야함 */
    let [activeLink, setActiveLink] = useState(1);

  /* ============================ header 용 useState ===============================*/


  /* ================================ 로그인 =========================================== */
  const [authenticate, setAuthenticate] = useState(false);  /* 로그인 상태 인가? */
  const Private = () => {
    return authenticate == true ? <User></User> : <Navigate to='/Login'></Navigate>;
  }
  /* ================================ 로그인 =========================================== */


  return (
    <div className="App">
      {/* 중요!! 부모의 useState를 자식의 useState에게 주는법! useState와 setUseState를 아래와 같이 준다. */}
      <Header activeLink={activeLink} setActiveLink={(index) => {setActiveLink(index)}}></Header>
        <Routes>
          <Route path='/' element={<HomePage activeLink={activeLink} setActiveLink={(index) => {setActiveLink(index)}}></HomePage>}></Route>
          <Route path='/AboutPage' element={<AboutPage></AboutPage>}></Route>

          {/* path의 뒤에 /:id  를 연결하여 DetailPage에서 useParam를 이용해 id를 확인할 수 있도록 한다. */}
          <Route path='/DetailPage/:id' element={<DetailPage></DetailPage>}></Route>
          <Route path='/ProductAllPage' element={<ProductAllPage></ProductAllPage>}></Route>


          {/* 로그인  */}
          <Route path='/Login' element={<Login></Login>}></Route>
          <Route path='/User' element={<User></User>}></Route>
        </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
