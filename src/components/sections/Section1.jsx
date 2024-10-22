import React from 'react'
import Animatecard from './Animatecard';



function Section2() {
  return (
    <div className="w-full bg-slate-950 p-4 flex md:flex-row flex-col gap-4 justify-around">
      <div className="box1 w-full flex flex-col gap-10">
        <h1 className="md:text-2xl text-grey capitalize font-bold font-mono">
          Your{" "}
          <span
            style={{
              background: "linear-gradient(90deg, red, green, orange)",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>

          </span> BEAUTY {" "}
         Our PASSION
        </h1>
        <p className=" text-ellipsis text-pretty capitalize">
        Online shopping has revolutionized how people buy goods. With just a few clicks,
         you can browse and purchase items from the comfort of your home. It offers convenience, 
         saving time and effort. You can compare prices easily and find the best deals.
        </p>

        <div className="btns flex mt-10 w-96 justify-around">
          <button className="btn btn-warning capitalize hover:text-primary">
            Try yourSelf
          </button>
          <button className="btn btn-info capitalize hover:text-secondary">
            Learn More
          </button>
        </div>
      </div>
      <div className="box2 w-full border rounded-lg border-white">
      <Animatecard/>
      </div>
    </div>
  );
}

export default Section2;
