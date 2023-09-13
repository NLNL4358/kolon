import React from 'react'
import {useNavigate} from 'react-router-dom'

import '../css/productBox.css'

const ProductBox = (props) => {

  const navigate = useNavigate();
  const showProduct = (index) =>{
    /* navigate사용할떄 Props처럼 전달해주는 방법!!  */
    /* navigate('주소', { state : { 키 : 값 }  } )  주소 , 뒤에 { } 대괄호를 적고 안에 state가 키가 되어야한다 값으로는 객체형태로 준다 { 키 : 값 } */
    navigate(`/DetailPage/${index}`, { state : { targetProduct : props.productItem } })
  }

  
  return (
    <div className='productBoxWrap' onClick={() => {
      showProduct(props.productItem.id)
    }}>
      {/* props가 있다면? 가져와라 라는 뜻 */}
      <div className="productImgWrap">
        <img src={props.productItem?.img} alt="" className={`productImg ${props.productIndex}`} />
      </div>
      <p className='productBrand'>KOLON SPORT</p>
      <h2 className={`productTitle ${props.productIndex}`}>{props.productItem?.title}</h2>
      <h3 className={`productPrice ${props.productIndex}`}>{props.productItem?.price}</h3>
      <div className="tagWrap">
        {
          props.productItem.tag.map((item, index) => (
            <span className='productTag'>
              {item}
            </span>
          ))
        }
      </div>
    </div>
  )
}

export default ProductBox