import React from 'react'
import investImage from '../../../assets/investImage.png'

const Diverse = () => {
  return (
    <div>
        <section className='flex  flex-col items-center mb-16 mt-44'>
            <h1 className='font-bold text-5xl text-gray-800'>Diverse ways to Invest</h1>
            <p className='text-2xl mt-4 text-gray-700'>Grow your money and invest for your future confidently.</p>
        </section>

        <div className='relative bg-purple-700 flex mx-[250px] rounded-4xl  mb-80'> 
        <main className='h-[450px] flex flex-col ' >
         <h1 className='font-bold text-3xl text-white px-12 py-12'>Earn Up to 35% returns</h1>
         <p className='text-white w-[40%] px-12 text-[18px]'>Invest securely and confidently on the go.
             Grow your money confidently by investing in pre-vetted investment opportunities.</p>
             <button className='text-white flex items-start my-30 mx-14 font-bold '>Learn about Investments</button>
             <section><img className="h-96 absolute bottom-0 left-100 ' ] " src={investImage}  /></section>
        </main>
        </div>
    </div>
  )
}

export default Diverse