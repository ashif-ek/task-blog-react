import { useParams } from "react-router-dom";

 function BlogDetails({ blogs }) {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found!</h2>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </div>
  );
}

export default BlogDetails