import React from 'react'

import '../css/footer.css'

import {Link} from 'react-router-dom'


export const Footer = () => {

  let familySiteBoolean = true;
  function familySiteOpen(bool){
    if(bool){
      document.querySelector(".familySiteUl").classList.add("open");
      familySiteBoolean = false;
    }
    else{
      document.querySelector(".familySiteUl").classList.remove("open");
      familySiteBoolean = true;
    }
  }

  return (
    <div className='footer'>
      <div className="footerTop">
        <Link>
          <img src="https://www.kolonmall.com/_next/static/public/static/images/joykolon/bi_pc_footer.eb186353e5193fe440ed8f808a0cc2e8.svg" alt="" />
        </Link>
      </div>

      <div className="footerMiddle">
        <div className="footerMiddleLeft">
          <p>코오롱인더스트리㈜ FnC부문</p>
          <span>대표이사 : 유석진 | 서울특별시 강남구 삼성로 518</span>
          <br/>
          <span>TEL : 1588-7667 (유료) | Mail : kolonmall@kolon.com</span>
          <br/>
          <span>통신판매업신고 : 제2017-서울강남-02297호 | 사업자등록번호 : 138-85-19612 <button>사업자정보 확인</button> </span>
          
        </div>
        <div className="footerMiddleRight">
          <div className="footerColumn">
            <Link to='/'>로그인</Link>
            <Link to='/'>실시간 채팅상담</Link>
            <Link to='/'>비회원 주문조회</Link>
          </div>
          <div className="footerColumn">
            <Link to='/'>매장안내</Link>
            <Link to='/'>입점/제휴문의</Link>
            <Link to='/'>이용약관</Link>
            <Link to='/'><bold>개인정보 처리방침</bold></Link>
          </div>
          <div className="footerColumn">
            <Link to='/' className='helpService'>{"고객센터 >"}</Link>
            <h5>1588-7667(유료)</h5>
            <span><small>(09:30~18:00, 주말/공휴일 휴무)</small></span>
          </div>
        </div>
      </div>


      <div className="footerBottom">
        <div className="footerBottomLeft">
          <p>고객님은 안전거래를 위해 결제 시 저희 사이트에서 가입한 구매안전 서비스를 이용하실 수 있습니다.</p>
          <Link to=''>토스페이먼츠 가입확인</Link>
          <span className='copyRight'>&copy; KOLON MALL all rights reserved</span>
        </div>
        <div className="footerBottomRight">
          <button onClick={()=>{
              familySiteOpen(familySiteBoolean);
            }}>
            FAMILY SITE
            <ul className='familySiteUl'>
              <li className='familySiteList'>
                <Link>
                  KOLON SPORT
                </Link>
              </li>
              <li className='familySiteList'>
                <Link>
                  THE CART GOLF
                </Link>
              </li>
              <li className='familySiteList'>
                <Link>
                    byseries
                  </Link>
              </li>
              <li className='familySiteList'>
                <Link>
                    247series
                  </Link>
              </li>
              <li className='familySiteList'>
                <Link>
                    Archivepke
                  </Link>
              </li>
            </ul>
          </button>

          <div className="columnWrap">
            <div className="footerColumn">
              <img src="https://www.kolonmall.com/_next/static/public/static/images/ISMS-P.1caabee0d420fdde4d2e5de1f70e251c.png"></img>
              <div className="footer_two_line_text_wrap">
                <span><small>인증범위 : 인터넷 쇼핑물 운영(코오롱 패션샵)</small></span>
                <span><small>유효기간 : 2020.11.04 ~ 2023.11.03</small></span>
              </div>
            </div>
            <div className="footerColumn">
              <div className="sns_wrap">
                <Link to="/">
                  <img src="https://www.kolonmall.com/_next/static/public/static/images/footer-sns-pc-app.bd2b8f2db7fe3ce3124d6e0b2841b358.svg" alt="" />
                  </Link>
                <Link to="/">
                  <img src="https://www.kolonmall.com/_next/static/public/static/images/footer-sns-pc-facebook.4c4ac8360865d8ce60f0781feae2834d.svg" alt="" />
                </Link>
                <Link to="/">
                  <img src="https://www.kolonmall.com/_next/static/public/static/images/footer-sns-pc-instagram.6219c2b096bc94b067f2d3c1663d5eb9.svg" alt="" />
                </Link>
                <Link to="/">
                  <img src="https://www.kolonmall.com/_next/static/public/static/images/footer-sns-pc-youtube.df7563b80208345deebfc862744e417c.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer