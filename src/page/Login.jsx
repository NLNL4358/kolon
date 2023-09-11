import React from 'react'

const Login = () => {
  return (
    <div className='Login inner'>
      <form>
        <label for="email"> 이메일을 입력해주세요. </label>
        <input type="email" placeholder='abc1234@gmail.com' id='email' />
      </form>

      <form> 
        <label for="password"> 비밀번호를 입력해주세요. </label>
        <input type="password" placeholder='*******' id='password' />
      </form>

      <button type='submit' style={{cursor:'pointer'}}>로그인</button>
    </div>
  )
}

export default Login