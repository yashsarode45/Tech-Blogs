import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Home from './pages/Home'
import TagPage from './pages/TagPage'
import CategoryPage from './pages/CategoryPage'
import BlogPage from './pages/BlogPage'
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const[searchParams, setSearchParam]= useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page");
    
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }

  }, [location.pathname, location.search]);

  return (
    <Routes>
       <Route path="/" element = {<Home/>}   />
      <Route path="/blog/:blogId" element = {<BlogPage/>}   />
      <Route path="/tags/:tag" element = {<TagPage/>}   />
      <Route path="/categories/:category" element = {<CategoryPage/>}   />
    </Routes>
  );
}
