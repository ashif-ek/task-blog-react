import { Link } from "react-router-dom";

function BlogList({ blogs }) {
  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs yet. Create one!</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} style={{ marginBottom: "10px" }}>
            <h3>{blog.title}</h3>
            <Link to={`/blogs/${blog.id}`}>Read More</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default BlogList