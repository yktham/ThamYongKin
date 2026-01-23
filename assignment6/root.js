// root.js

function Header() {
  return (
    <header>
      <h1>My Blog</h1>
      <p>A blog about everything</p>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      © 2024 My Blog. All rights reserved.
    </footer>
  );
}

// BlogPost component
function BlogPost({ title, author, date, content, isPrivate }) {
  return (
    <div className={`blog-post${isPrivate ? ' private-post' : ''}`}>
      <h2>{title}</h2>
      <p className="meta">By {author} on {date}</p>
      <p>
        {isPrivate
          ? "The content of this post is private"
          : content
        }
      </p>
    </div>
  );
}

function BlogList({ posts }) {
  return (
    <div className="blog-list">
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
          isPrivate={post.isPrivate}
        />
      ))}
    </div>
  );
}

function App() {
  const blogPosts = [
    {
      title: "My First Blog Post",
      author: "John Doe",
      date: "June 1, 2023",
      content: "Welcome to my first blog post! Today, I want to share my journey into the world of blogging.",
      isPrivate: true,
    },
    {
      title: "My Second Blog Post",
      author: "Jane Smith",
      date: "June 5, 2023",
      content: "In this post, I’m discussing the importance of work-life balance. It's essential to find time for both professional and personal activites to maintain overall well-being.",
      isPrivate: false,
    },
    {
      title: "A Day in the Life",
      author: "Alice Johnson",
      date: "June 10, 2023",
      content: "Ever wondered what a day in my life looks like? Join me as I walk through my daily routine, from morning cofee to evening relaxation.",
      isPrivate: false,
    },
    {
      title: "Tips for Healthy Eating",
      author: "Bob Lee",
      date: "June 15, 2023",
      content: "Eating healthy doesn’t have to be complicated.",
      isPrivate: true,
    },
    {
      title: "Traveling on a Budget",
      author: "Susan White",
      date: "June 20, 2023",
      content: "Dreaming of traveling the world but worried about the cost? This post covers my top tips for seeing new places without breaking the bank.",
      isPrivate: false,
    },
  ];

  return (
    <div className="app">
      <Header />
      <BlogList posts={blogPosts} />
      <Footer />
    </div>
  );
}

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);