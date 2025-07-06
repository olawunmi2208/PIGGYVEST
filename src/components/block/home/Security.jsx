import React from 'react'

const Savings = () => {
 const piggyCard = [
    {
      title: "Automated Saving",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "blue",
    },
    {
      title: "Fixed Savings",
      desc: "Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.",
      btnTitle: "Safe Lock",
      color: "lightblue",
    },
    {
      title: "Goal-oriented Savings",
      desc: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
      btnTitle: "Target Savings",
      color: "green",
    },
    {
        title: "Flex Naira",
      desc: "Save, transfer, manage, organise, and withdraw your money at any time.",
      btnTitle: "Flex Naira",
      color: "deeppink",
    },
    {
         title: "Flex Dollar",
      desc: "Save and grow your money in foreign currrencies such as Dollars.",
      btnTitle: "Flex Dollar",
      color: "Black",
    },
    {
        title: "House Money",
      desc: "Plan four your rent and household expenses.",
      btnTitle: "House Money",
      color: "orange", 
    }

       
       
  ];
    return (
        <div className=" my-20 flex flex-col items-center">
      <section className=" text-center">
        <h1 className=" font-bold text-5xl">Many ways to build your savings</h1>
        <p className=" text-2xl">
          Earn 12%-20% when you save with any of these Piggyvest plans.
        </p>
      </section>
      <section className=" flex justify-center max-w-[1200px] flex-wrap">
        {piggyCard?.map((data, i) => (
          <main className=" bg-white h-[400px] w-[400px] m-9 p-5" key={i} >
            <h1
              style={{ color: `${data.color}` }}
              className=" font-bold text-3xl"
            >
              {" "}
              {data.title}{" "}
            </h1>
            <p>{data.desc}</p>
            <button> {data.btnTitle} </button>
          </main>
        ))}
      </section>
    </div>
  );
};

export default Savings;