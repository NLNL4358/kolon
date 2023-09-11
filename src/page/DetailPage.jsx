import React from 'react'

import { useParams , useLocation} from 'react-router-dom'
import ProductBox from '../components/ProductBox';

export const DetailPage = () => {

  /* id값을 가져오는법 !! const {id} = useParams() !! */
  const {id} = useParams();
  console.log("params : ", id)


  /* navigate로 전달받은 props 값 받는 법! useLocation을 사용! */
  const location = useLocation();  
  // 아래의 location.state을  props 처럼 사용하면됨
  const targetProduct = location.state.targetProduct;
  console.log("타겟 : ",targetProduct);

  return (
    <div className='DetailPage inner'>
      <div className='product_detail_img'>
        <img src={targetProduct.img} alt="" />
      </div>
      <div className='product_info'>
        <p className='productBrand'>KOLON SPORT</p>
        <h2 className={`productTitle ${targetProduct.index}`}>{targetProduct.title}</h2>
        <h3 className={`productPrice ${targetProduct.index}`}>{targetProduct.price}</h3>
        <div className="tagWrap">
        {
          targetProduct.tag.map((item, index) => (
            <span className='productTag'>
              {item}
            </span>
          ))
        }
      </div>
        <form action="">
          <select name="" id="">
            <option value=""></option>
          </select>
        </form>
      </div>

    </div>
  )
}


export default DetailPage