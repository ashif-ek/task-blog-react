import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import CreateBlog from "./components/create.jsx"
import BlogList from "./components/list.jsx"
import BlogDetails from "./components/details.jsx"

export default function App() {
  const [blogs, setBlogs] = useState([]); 

  return (
    <>
          <nav>
        <Link to="/createblog">create new Blog</Link> |{" "}
        <Link to="/blogs">All Blogs</Link>
      </nav>

      <Routes>
        <Route path="/createblog" element={<CreateBlog blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/blogs" element={<BlogList blogs={blogs} />} />
        <Route path="/blogs/:id" element={<BlogDetails blogs={blogs} />} />
      </Routes>
      </>
  );
}
