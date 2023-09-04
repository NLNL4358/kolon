import React from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom';

export const Header = () => {

  const sideList = [
    'KOLON MALl',
    '로그인',
    '회원가입',
    '고객센터',
    <Link to="/">
      <img src="https://assets.kolonmall.com/_ui/img/pc/icn/icn-cart-3-a973183682.svg" alt="" />
    </Link>
  ]
  


  
  return (
    <div className='header'>
      <div className='headerTop'>
        <div className="logo_wrap">
          <Link to="/" className='logo'>
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
              sideList.map( (item) => (
                <li>
                  <Link>
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
          <li className='gnbList' >
            <Link to='' className='selected'>
              소개
            </Link>
          </li>
          <li className='gnbList' >
            <Link to=''>
              홈
            </Link>
          </li>
          <li className='gnbList' >
            <Link to=''>
              상품
            </Link>
          </li>
          <li className='gnbList' >
            <Link to=''>
              기획전
            </Link>
          </li>
          <li className='gnbList' >
            <Link to=''>
              컬렉션
            </Link>
          </li>
          <li className='gnbList' >
            <Link to=''>
              매장안내
            </Link>
          </li>
          <li className='gnbList' >
            <Link to=''>
              WEATHER MONSTER
            </Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Header