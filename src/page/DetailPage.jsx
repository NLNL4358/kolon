import React from 'react'

import { useParams } from 'react-router-dom'
import ProductDetailPage from './ProductDetailPage';

export const DetailPage = () => {

  const {id} = useParams();


  return (
    <div className='DetailPage inner'>
      DetailPage{id}
      
      <ProductDetailPage></ProductDetailPage>
    </div>
  )
}


export default DetailPage