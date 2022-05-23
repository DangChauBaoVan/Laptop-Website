import Banner from 'components/Banner/Banner'
import Header from 'components/Header/Header'
import React from 'react'
import { Link } from 'react-router-dom'
import ProductList from '../ProductList/ProductList'

export default function Home() {
  return ( 
    <>
        <Banner/>
        <ProductList/>
    </>
  )
}
