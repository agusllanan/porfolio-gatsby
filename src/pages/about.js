import React from 'react'
import Layout from '../components/Layout'

export default function about () {
    return (
        <Layout>
            <div>
                <section className="Hero">
                    <div className=" h-96 flex flex-col ">
                        <h1 className="font-mono font-black text-4xl mt-40  text-gray-50 text-center"> About Me</h1>
                        <p className="font-mono font-black text-gray-50 mt-10 text-center w-4/5 place-self-center" > As i said, i'm a really passionate person, due to my other profession. Almost 10 years as a professional basketball player helps me to growth as a leader and a person who had the comunication as the most powerful skill. I know how to work in a team for reach objetives and goals. </p>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
