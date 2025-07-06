import React from 'react'
import investImage from '../../../assets/investImage.png'

const Diverse = () => {
  return (
    <div>
        <section>
            <h1>Diverse ways to Invest</h1>
            <p>Grow your money and invest for your future confidently.</p>
        </section>
        <main className='bg-purple-700 h-96 flex flex-col' >
         <h1>Earn Up to 35% returns</h1>
         <p>Invest securely and confidently on the go.
             Grow your money confidently by investing in pre-vetted investment opportunities.</p>
             <button>Learn about Investments</button>
             <section><img className="max-w-3xs" src={investImage}  /></section>
        </main>
    </div>
  )
}

export default Diverse