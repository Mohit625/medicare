import BlogHero from "./../components/blog/BlogHero";
import BlogSearch from "./../components/blog/BlogSearch";
import ArticleGrid from "./../components/blog/ArticleGrid";
import Newsletter from "./../components/blog/Newsletter";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <BlogHero />
        <div className="container mx-auto px-4 py-8">
          <BlogSearch />
          <ArticleGrid />
        </div>
        <Newsletter />
      </main>
    </div>
  );
};

export default Blog;