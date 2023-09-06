import './css/App.css';

import {useState, useLocation} from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import HomePage from './page/HomePage';
import DetailPage from './page/DetailPage';
import AboutPage  from './page/AboutPage';

/* 상품 전체 페이지 */
import ProductAllPage from './page/ProductAllPage';

/* 특정 상품 Detail 페이지 */
import ProductDetailPage  from './page/ProductDetailPage';
import Header  from './page/Header';
import Footer  from './page/Footer';

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
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/AboutPage' element={<AboutPage></AboutPage>}></Route>

          {/* path의 뒤에 /:id  를 연결하여 DetailPage에서 useParam를 이용해 id를 확인할 수 있도록 한다. */}
          <Route path='/DetailPage/:id' element={<DetailPage></DetailPage>}></Route>
          <Route path='/ProductAllPage' element={<ProductAllPage></ProductAllPage>}></Route>
          <Route path='/ProductDetailPage' element={<ProductDetailPage></ProductDetailPage>}></Route>

        </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
