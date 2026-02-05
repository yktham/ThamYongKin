<<<<<<< Updated upstream
<<<<<<< Updated upstream
// root.js

=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
<<<<<<< Updated upstream
// BlogPost component
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
function BlogPost({ title, author, date, content, isPrivate }) {
  return (
    <div className={`blog-post${isPrivate ? ' private-post' : ''}`}>
      <h2>{title}</h2>
      <p className="meta">By {author} on {date}</p>
      <p>
        {isPrivate
          ? "The content of this post is private"
<<<<<<< Updated upstream
<<<<<<< Updated upstream
          : content
        }
=======
          : content}
>>>>>>> Stashed changes
=======
          : content}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      content: "Welcome to my first blog post! Today, I want to share my journey into the world of blogging.",
=======
      content: "Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and i cant't wait to see where this path leads me.",
>>>>>>> Stashed changes
=======
      content: "Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and i cant't wait to see where this path leads me.",
>>>>>>> Stashed changes
      isPrivate: true,
    },
    {
      title: "My Second Blog Post",
      author: "Jane Smith",
      date: "June 5, 2023",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      content: "In this post, I’m discussing the importance of work-life balance. It's essential to find time for both professional and personal activites to maintain overall well-being.",
=======
      content: "In this post, I’m discussing the importance of work-life balance. It's essential to find time for both professional and personal activities to maintain overall well-being.",
>>>>>>> Stashed changes
=======
      content: "In this post, I’m discussing the importance of work-life balance. It's essential to find time for both professional and personal activities to maintain overall well-being.",
>>>>>>> Stashed changes
      isPrivate: false,
    },
    {
      title: "A Day in the Life",
      author: "Alice Johnson",
      date: "June 10, 2023",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      content: "Ever wondered what a day in my life looks like? Join me as I walk through my daily routine, from morning cofee to evening relaxation.",
=======
      content: "Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation",
>>>>>>> Stashed changes
=======
      content: "Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation",
>>>>>>> Stashed changes
      isPrivate: false,
    },
    {
      title: "Tips for Healthy Eating",
      author: "Bob Lee",
      date: "June 15, 2023",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      content: "Eating healthy doesn’t have to be complicated.",
=======
      content: "Eating healthy doesn’t have to be complicated. Here are some simple and practical tips to help you make better food choices every day.",
>>>>>>> Stashed changes
=======
      content: "Eating healthy doesn’t have to be complicated. Here are some simple and practical tips to help you make better food choices every day.",
>>>>>>> Stashed changes
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