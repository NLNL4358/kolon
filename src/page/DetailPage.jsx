import React from 'react'

import { useParams } from 'react-router-dom'
import ProductDetailPage from './ProductDetailPage';
import ProductBox from '../components/ProductBox';

export const DetailPage = () => {

  const {id} = useParams();


  return (
    <div className='DetailPage inner'>
      DetailPage{id}
      
      
    </div>
  )
}


export default DetailPage