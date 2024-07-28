import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

function Home() {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>
     
      <VerticalCardProduct category={"mobile"} heading={"Mobiles"}/>
      <VerticalCardProduct category={"mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera's"}/>
      <VerticalCardProduct category={"printer"} heading={"Printer's"}/>
      <VerticalCardProduct category={"trimmer"} heading={"Trimmer's"}/>
      <VerticalCardProduct category={"earphone"} heading={"Earphone's"}/>
      <VerticalCardProduct category={"processor"} heading={"Processor's"}/>
      <VerticalCardProduct category={"refigrator"} heading={"Refrigerator's"}/>
      <VerticalCardProduct category={"speakers"} heading={"Speaker's"}/>
    
    
    </div>
  )
}

export default Home