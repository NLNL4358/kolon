import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import '../css/header.css'


/* App.js 에서 선언한 useState를 props로 받아와 사용한다. !!  */
export const Header = (props) => {

  const sideList = [
    'KOLON MALl',
    '로그인',
    '회원가입',
    '고객센터',
    <img src="https://assets.kolonmall.com/_ui/img/pc/icn/icn-cart-3-a973183682.svg" alt="" />
  ]

  const sideListTo = [
    '/',
    '/Login',
    '/',
    '/',
    '/'
  ]

  const gnbList = [
    '소개',
    '홈',
    '상품',
    '기획전',
    '컬렉션',
    '매장안내',
    'WEATHER MONSTER'
  ]

  const gnbListTo = [
    'AboutPage',
    '/',
    'ProductAllPage',
    '',
    '',
    '',
    ''
  ]
  /* onClick 에 반응하여 setActiveLink( ) 괄호안에 nav의 index를 넣어줄 것이다. */
  
  /* 그리고 각 Link의 클래스를 비교연산자를 이용해서 클래스의 추가 혹은 제거를 해준다.*/
  /* className = { useState === 각index ? 'selected' : ''  } */

  

  return (
    <div className='header'>
      <div className='headerTop'>
        <div className="logo_wrap">
          <Link to="/" className='logo' onClick={()=>{props.setActiveLink(1)}}>
            <img src="https://blog.kakaocdn.net/dn/cE3aed/btqz8oM3Vyp/6l12KaHErTtGjh287P5TxK/img.jpg" alt="" />
          </Link>
          <button className='favorite'>
            <img src="https://www.kolonmall.com/_next/static/public/static/images/icn_wish_heart_off.15eeff5117eb053a4db68e689032ce4f.svg" alt="관심브랜드 추가" />
          </button>
        </div>
        {/* input을 감싸는 wrap역할의 form태그 */}
        <form action="">
          <input type="search" placeholder='신상품이 보고싶다면? #신상태그' />
          <button>
            {/* 서치버튼 */}
            <img src="https://assets.kolonmall.com/_ui/img/m/icn/icn-search-2-c6feaef024.png" alt="" />
          </button>
        </form>

        <div className='headerUtil'>
          {/* 반복되는 구간은 함수로 구현 */}
          <ul>
            {
              sideList.map( (item, index) => (
                <li>
                  <Link to={sideListTo[index]}>
                    {item}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>


      </div>
      <div className='headerGnb'>
        <ul className='gnbUl'>
          {
            gnbList.map((item, index)=>(
              <li className='gnbList'>
                <Link to={gnbListTo[index]}
                  onClick = {() => {props.setActiveLink(index)}}
                  className = {props.activeLink === index ? 'selected' : ''}>

                  {item}
                  
                </Link>
              </li>
            ))
          }
        </ul>

      </div>
    </div>
  )
}

export default Header