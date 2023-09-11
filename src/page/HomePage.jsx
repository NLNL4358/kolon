import React from 'react'

import {Link, useNavigate} from 'react-router-dom'

export const HomePage = (props) => {
  const navigate = useNavigate();
  const goDetailPage = () => {
    navigate('/DetailPage/0');
  }
  return (
    <div>
      <h1>홈페이지 메인

        {/* 링크로 이동하는방법 */}
        <Link to="/AboutPage" onClick={() => {props.setActiveLink(0)}}>Go About 페이지 </Link>
        
        {/* useNavigate 를 이용하여 이동하는 방법 */}
        <button onClick={()=>{
          goDetailPage();
          props.setActiveLink(2);
          }}>Go Detail 페이지</button>
      </h1>
    </div>
  )
}

export default HomePage