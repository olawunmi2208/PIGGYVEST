import React from 'react'
import { Link } from 'react-router-dom'
import { LuChevronDown } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";
import Button from "../components/reusable/Button"
import {RxCross1 } from "react-icons/rx";
import {useState} from "react"
import Sidebar from'./Sidebar';
const Header = () => {
  const [toggle, SetToggle] = React.useState(false)
  
  const handleToggle = () => {
    SetToggle(!toggle);
  };
  return (
    <>
    <header className='h-24 '>
        <div className='max-w-[1280px] px-16  mx-auto flex h-full items-center justify-between'>
            <section className='flex'>
                <Link to="/">
                <main>
                    <img src="./logo.svg" alt="" />
                </main>
                </Link>
             <main className='flex  mx-12 gap-9 items-center font-medium max-tablet:hidden'>
           <Link to="/save">
            <nav className='flex items-center gap-0.5' >
              <span>Save</span>
              <span>
                <LuChevronDown  size={20} />
              </span>
            </nav>
           </Link>
            <Link to="/invest">
              <nav>Invest</nav>
            </Link>
            <Link to="/stories">
              <nav>Stories</nav>
            </Link>
            <Link to="/faqs">
            <nav>FAQs</nav>
            </Link>
            <Link to="/resources">
              <nav className=" flex items-center gap-0.5">
              {" "}
              <span>Resources</span>
              <span>
                {" "}
                <LuChevronDown />{" "}
              </span>
            </nav>
            </Link>
          
          </main>
            </section>
            <section className=" flex gap-2 max-tablet:hidden">
          <Button title="Sign In" borderColor="#122231" />
          <Button
            title="Create free Account"
            bgColor="#122231"
            textColor="#fff"
          />
            </section>
            <section className=" hidden max-tablet:block">
              { toggle? (<RxCross1 size={35} onClick={handleToggle}/>) :
               <LuMenu size={35} onClick={handleToggle} />
              }
            </section>
        </div>
    </header>
      <div>{toggle && <Sidebar handleToggle={handleToggle} />}</div>
      </>

  )
}

export default Header