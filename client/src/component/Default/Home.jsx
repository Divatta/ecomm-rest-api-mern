import React, { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import ProductApi from '../../API/ProductApi'
import ProductItem from '../products/ProductItem'
import { NavLink } from 'react-router-dom'

function Home() {
  const [products,setProducts] = useState([])

  const initProduct = useCallback(async () => {
      const res = await ProductApi.getAll()
        setProducts(res.data.products)
  },[])

  useEffect(() => {
    initProduct()
  },[initProduct])
  
  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="display-4 text-center"><i>The One-stop Shopping Destination. E-commerce is revolutionizing the way we all shop in India.</i></h4>
            <p className='mt-5'>Create a great place to shopping your dream product.</p>
            <button className='btn btn-outline-success text-light  float-end mt-4 me-5' style={{background:'#52796F'}}>
                  <NavLink to={`/user/register`} className="nav-link tryfree">Try it Free</NavLink>
            </button>
          </div> 
            {
                products && products.map((item,index) => {
                  return (
                      <ProductItem key={index} {...item} />
                  )
                })
            }
        </div>
    </div>
  )
}

export default Home