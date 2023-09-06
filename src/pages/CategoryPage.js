import React from 'react'
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { useLocation, useNavigate } from 'react-router-dom';

const CategoryPage = () => {
   const navigate =  useNavigate();
   const location = useLocation();
   const category = location.pathname.split('/').at(-1).replace("-", " ");
  return (
    <div>
      <Header/>
      <div className="my-[100px]">
      <div className="mt-[100px] mb-6 max-w-2xl mx-auto flex items-center space-x-2">
        <button class="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={()=> navigate(-1)} > Back </button>
        <p className="text-xl font-bold"> Blogs On {category}</p>
        </div>
        <Blogs/>
        <Pagination/>
      </div>
      
    </div>
  )
}

export default CategoryPage
