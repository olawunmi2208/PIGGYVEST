import React from 'react'
import fallbackImg from '../../../assets/fallbackImg.png'
import Button from '../../reusable/Button'
import { FaApple , FaGooglePlay } from "react-icons/fa";
import techabal from '../../../assets/techabal.png'
import CNBCImg from '../../../assets/CNBCImg.png'
import techBranch from '../../../assets/techBranch.png'
import pymts from '../../../assets/pymts.svg'
import fastImg from '../../../assets/fastImg.svg'
import Cio from '../../../assets/Cio.svg'

const Saver = () => {
  return (
    <div>
        <section className='flex flex-col items-center my-20'>
            <h1 className='font-bold text-5xl'>Meet Our Saver of the Month</h1>
            <p className='text-2xl w-3xl'>Every month, we shine a spotlight on one saver, 
            asking them about their savings culture and how Piggyvest has helped them.</p>
             <iframe className='w-2/4 h-96 my-20 rounded-2xl mb-32 'src="https://www.youtube.com/embed/2EnGMGxKuII?autoplay=1&amp;mute=1"></iframe>
        </section>
        <div className='flex justify-between mx-36 mb-20'>
            <img className='h-120' src={fallbackImg} alt="" />
            <section className='flex flex-col items-center py-52'>
                <h1 className='font-bold text-3xl w-dvh'>Join 5+ million people who save and invest with us</h1>
                  <main className='flex gap-3 my-3 '>
                <Button
                 title="Get on iPhone"
                  borderColor="grey"
                  textColor="black"
                 iconTitle={<FaApple/>}
    
               />
               <Button
                   
               title="Get on Android"
               borderColor="grey"
               textColor="black"                  
                iconTitle={<FaGooglePlay/>}
               />
               </main>
            </section>
        </div>
        <div className='flex flex-col mb-30'>
            <h1 className='font-bold text-4xl mx-auto my-3'>As featured in</h1>
            <main className='flex mx-50 gap-20'>
       <img className='w-[100px]' src={techabal} alt="" />
         <img className='w-[100px]' src={CNBCImg} alt="" />
         <img  className='w-[100px]'src={techBranch} alt="" />
           <img src={pymts} alt="" />
          <img src={fastImg} alt="" />
           <img src={Cio} alt="" />
      </main>
        </div>
    </div>
  )
}

export default Saver