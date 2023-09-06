import React from 'react';
import {useEffect, useState} from 'react';
import ProductBox from '../components/ProductBox';

const productAllPage = () => {


  /* API를 받아주기 위해 useState 생성 */
  let [productList, setProductList] = useState([]);

  /* API 호출 !! */
  const getProducts = async () => {
    /* 1. url에 로컬 Json 서버 주소 입력 (지금은 로컬 json인데 나중엔 진짜 json 형식의 api 주소적으면됨)*/
    let url = "http://localhost:5000/product"


    /* 2. url을 이용하여  response라는 변수에 fetch(url) 패치 하여 넘겨주는데 받을때까지 기다려야하니까 await를 붙혀준다*/
    let response = await fetch(url);


    /* 3. response 가 json() 형식이라는 것을 알려주기위해 뒤에 .json() 을 붙히고 다 받고 넘겨줄 준비가될때 넘기기위해 await를 붙혀준다 */
    let data = await response.json();


    /* 4. useState로 전달해준다. */
    setProductList(data);

    console.log("useState",productList);

  }

  /* 여기서 불러오면 안됨!! 계~~~속 불러와서 터져 */
  // getProducts();


  return (
    
    <div className='inner'>
      <h2>ProductAllPage</h2>
    </div>
  )
}

export default productAllPage