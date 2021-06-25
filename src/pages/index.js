import React from "react"
import Layout from "../components/Layout"

export default function Home () {
  return (
        <Layout>
          <section className="Hero">
            <div className="">
              <div className=" w-6/12 flex flex-col justify-center"> 
              <h1 className="pt-28 font-mono font-black text-4xl text-gray-50 2xl: text-center antialiased">
                Hi, lets build the <span className="text-green-200">FUTURE</span>
                </h1>
              <h2 className="font-mono p-11 font-black text-gray-50 m-3 text-center text-xl  antialiased" > A creative and passionate Full Stack developer based in Argentina. </h2>
              <button className = "flex justify-center border-2 bg-gray-50 border-green-50 rounded-xl p-2 px-8 text-purple-700  backdrop-filter backdrop-blur shadow-lg w-3/12 hover:bg-gray-200 hover:text-purple-700 transition ease-out duration-500">Let's talk!</button>
              </div>
              </div>
              <div className="w-6/12">
              <div>
                  {/* --img-- */}
              </div>
            </div>
          </section>
        </Layout>
        ) 
}
