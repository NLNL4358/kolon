import React from 'react'

export const ProductDetailPage = (props) => {
  return (
    <div>
      {/* 변?수.값 의미 -> 받아온 값이 있다면?  값을 가져와라 라는뜻 */}
      <img src={props.img?.img} alt="" />
      <h4>{props.title?.title}</h4>
      <h2>{props.price?.price}</h2>
      <p>{props.tag?.tag}</p>
    </div>
  )
}

export default ProductDetailPage