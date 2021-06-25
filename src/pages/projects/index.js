import React from 'react'
import Layout from '../../components/Layout'

export default function projects () {
    return (
        <Layout>
            <div className = "h-96 rounded-b-2xl grid-cols-2">
                <h2 className = "font-mono font-black text-4xl mt-40  text-gray-50 text-center "> Portfolio </h2>
                <h3 className = "font-mono font-black text-gray-50 m-3 text-center"> Projects & Websites I've Created </h3>
            </div>
        </Layout>
    )
}