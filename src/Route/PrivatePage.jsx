import React from 'react'

import { useNavigate } from 'react-router-dom';

import DetailPage from '../page/DetailPage';

/* props 로 받은 요소 : authenticate 로그인 상태 */

  // const navigate = useNavigate();
  // const goNavigate = () => {
  //   navigate("/Login");
  // }

const PrivatePage = (props) => {  
  return (
    <div>
      PrivatePage
      {/* {props.authenticate == true ? <DetailPage></DetailPage> : goNavigate} */}
    </div>
  )
}

export default PrivatePage