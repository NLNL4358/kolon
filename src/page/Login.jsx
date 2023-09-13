import React from 'react'

import { useNavigate } from 'react-router-dom';

/* props로 전달받은 값 authenticate , setAuthenticate */
const Login = (props) => {

  const navigate = useNavigate();


  const loginUser = (event) =>{
    /* event를 받고 preventDefault를 해줘야하는 이유 : 이게 없으면 새로고침이 되버려서 데이터가 없어지게됨 !! 그래서 로그인할때는 preventDefault 해주는게 좋다 */
    event.preventDefault();
    props.setAuthenticate(true);
    navigate('/ProductAllPage')
  }


  return (
    <div className='Login inner'>
      {/* 제출 버튼이 눌렸을떄의 동작 onSubmit !! */}
      <form onSubmit={(event)=>loginUser(event)}>
        <label for="email"> 이메일을 입력해주세요. </label>
        <input type="email" placeholder='abc1234@gmail.com' id='email' />

        <label for="password"> 비밀번호를 입력해주세요. </label>
        <input type="password" placeholder='password' id='password' />

        {/* type이 submit인 버튼이 눌렸을때 form의 onSubmit 이 동작한다! */}
        <button type='submit' style={{cursor:'pointer'}}>로그인</button>
      </form>
    </div>
  )
}

export default Login