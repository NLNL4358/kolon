import React from 'react';
import {useEffect, useState} from 'react';
import ProductBox from '../components/ProductBox';

import '../css/productAllPage.css';

const productAllPage = () => {


  /* API를 받아주기 위해 useState 생성 */
  let [productList, setProductList] = useState([]);

  /* API 호출 const 함수이름 = async 화살표 함수 형태로 불러와야함 !! */
  const getProducts = async () => {
    /* 1. url에 로컬 Json 서버 주소 입력 (지금은 로컬 json인데 나중엔 진짜 json 형식의 api 주소적으면됨)*/
    let url = "http://localhost:5000/product"


    /* 2. url을 이용하여  response라는 변수에 fetch(url) 패치 하여 넘겨주는데 받을때까지 기다려야하니까 await를 붙혀준다*/
    let response = await fetch(url);


    /* 3. response 가 json() 형식이라는 것을 알려주기위해 뒤에 .json() 을 붙히고 다 받고 넘겨줄 준비가될때 넘기기위해 await를 붙혀준다 */
    let data = await response.json();


    /* 4. useState로 전달해준다. */
    setProductList(data);

    /* !!! 여기 log는 useState인 빈 배열 [] 를 보여줄것이다 why? 리액트는 비동기로 동작하기 때문에 setProductList는 비동기로 실행하면서 그대로 코드가 내려와 변하기 전인 초기값 [] 를 보여주기 때문!! */
    console.log("useState",productList);
  }

  /* 여기서 불러오면 안됨!! 계~~~속 불러와서 터져 */
  // getProducts();

  /* !!  useEffect( , [])   ,뒤에 빈괄호 [] 를 하면 마운트 됐을때 한번만 실행된다
  때문에 API를 Get불러올때는 이렇게 뒤에 빈괄호 ,[] 를 가지는 useEffect 안에서 사용한다*/
  useEffect(()=>{
    getProducts();
  },[])


  /* !! 
  위에서 getProducts 함수안의 log는 useState의 초기값인 [] 가 나올것이라 했었다
  하지만 비동기적으로 set 함수는 동작하고있고 완료도 했을것이다
  그럼 어떻게 확인해볼 수 있을까? 
  이번엔 useEffect의 뒤에 ,[] 빈괄호가아닌 대상, 즉 재렌더링이나 마운트 됐음을 감지하고싶은 타겟을 넣어준다,  그러면 set 함수가 완료되었을떄 비로소 재렌더링된 useState변수를 감지하고 log를 찍어줄 것이다!!*/
  useEffect(() => {
    console.log("useState",productList);
  }, [productList])


  
  return (
    
    <div className='inner'>
      <ul className='productBoxUl'>
        {
          productList.map((item, index) => (
            <li className={`productBoxLi ${index}`}>
              <ProductBox productItem={item} productIndex={index}></ProductBox>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default productAllPage