import React from 'react'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import tiktok from '../assets/tiktok.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import compliance from '../assets/compliance.jpeg'
import piggyvest from '../assets/piggyvest.svg'

const Footer = () => {
  return (
    <div className='flex flec-col justify-between items-center my-20 mx-20  '>
      <main>
     <img src={piggyvest} alt="" />
      <img className='h-30' src={compliance} alt="" />
      </main>
      <section>
       <p>Products</p>
       <p>Piggybank</p>
       <p>Invest</p>
       <p>Safelock</p>
       <p>Target Savings</p>
       <p>Flex Naira</p>
       <p>Flex Dollar</p>
        </section>
        <main>
          <p>Company</p>
          <p>About</p>
          <p>FAQs</p>
          <p>Blog</p>
        </main>
         <main>
            <p>Legal</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Security</p>
         </main>
         <div>
         <section className='flex h-3 gap-2 mx-30'>
          <img src={facebook} alt="" />
          <img src={instagram}alt="" />
          <img src={twitter} alt="" />
          <img src={tiktok} alt="" />
          <img src={youtube} alt="" />
         </section>
         <main>
         <p className='w-[50%]'>Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</p>
         <p>contact@piggyvest.com</p>
         <p>+234 700 933 9339</p>
         </main>
         </div>
    </div>
  )
}

export default Footer;