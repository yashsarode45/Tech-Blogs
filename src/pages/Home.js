import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="my-[100px]">
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
