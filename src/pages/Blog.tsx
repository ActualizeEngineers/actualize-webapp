import "../styles/blog.css";

import Navbar from "../layouts/Navbar";
import blog from "../assets/banners/blogbanner.jpg";

import blog1 from "../assets/images/electricity_grid.png";
import blog2 from "../assets/images/electricity_grid.png";
import blog3 from "../assets/images/electricity_grid.png";
import blog4 from "../assets/images/electricity_grid.png";
import blog5 from "../assets/images/electricity_grid.png";
import blog6 from "../assets/images/electricity_grid.png";

const blogs = [
  {
    id: 1,
    title: "Balancing AI Innovation with Ethical Standards",
    date: "Aug 10, 2024",
    author: "Actualize",
    image: blog1,
  },
  {
    id: 2,
    title: "Your Business Safe & Ensure High Handiness",
    date: "Aug 10, 2024",
    author: "solutek",
    image: blog2,
  },
  {
    id: 3,
    title: "UX/UI Designing the Future Web Design",
    date: "Aug 10, 2024",
    author: "solutek",
    image: blog3,
  },
  {
    id: 4,
    title: "How to Create Modern Web Site For Your Business",
    date: "Aug 10, 2024",
    author: "solutek",
    image: blog4,
  },
  {
    id: 5,
    title: "Team Collaboration Boosting Productivity",
    date: "Aug 10, 2024",
    author: "solutek",
    image: blog5,
  },
  {
    id: 6,
    title: "Leveraging Descriptive Solutions for Business Growth",
    date: "Aug 08, 2024",
    author: "solutek",
    image: blog6,
  },
];

const Blog = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section text-white text-center"
        style={{
          backgroundImage: `url(${blog})`,
        }}
      >
        <Navbar />
      </section>

      <section className="container py-5 blog-page">
        <div className="text-center mb-5">
          <h2 className="section-title">Our <span className="highlight">Latest Blogs</span></h2>
          <p className="lead text-muted">
            Stay updated with the latest insights, tips, and innovations in the
            business & technology world.
          </p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>✍ By {blog.author}</span>
                  <span>📅 {blog.date}</span>
                </div>
                <h5>{blog.title}</h5>
                <button className="read-more">READ MORE →</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
