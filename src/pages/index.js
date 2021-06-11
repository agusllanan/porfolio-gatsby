import React from "react"
import NavBar from "../components/NavBar"

export default function Home () {
  return (
        <section className="Hero">
          <NavBar />
          <div className="bg-green-100 h-96 flex flex-col rounded-b-2xl">
            <h1 className="font-mono font-black text-2xl mt-40  text-gray-700 2xl: text-center"> Hi, i'm Agustin Llanán</h1>
            <h2 className="font-mono font-black text-gray-700 m-3 text-center" > A creative and passionate Full Stack developer based in Argentina. </h2>
          </div>
        </section>
        ) 
}
