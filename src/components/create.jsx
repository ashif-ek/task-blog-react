import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog({ blogs, setBlogs }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { id: blogs.length + 1, title, body };
    setBlogs([...blogs, newBlog]);
    navigate("/blogs");
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder="Blog body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog