import ArticleCard from "./ArticleCard";
import { Button } from "./../ui/button";
import { ArrowUpDown } from "lucide-react";
import { useState,useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const ArticleGrid = () => {
  const featuredArticle = {
    title: "Revolutionizing Healthcare: How AI is Transforming Patient Care",
    description:
      "Artificial Intelligence is reshaping how hospitals diagnose, treat, and interact with patients. Explore real-world stories, breakthrough technologies, and what this means for the future of medicine.",
    author: {
      name: "Dr. John Evans",
      avatar: "/placeholder.svg",
      initials: "JE",
    },
    date: "May 24, 2024",
    readTime: "7 min read",
    category: "Innovation",
    categoryColor: "bg-blue-100 text-blue-800",
    image: "https://i.pinimg.com/736x/2d/77/77/2d7777979f03366e7c7043cd3bc482b6.jpg",
    imageAlt:
      "🏥 health innovation, doctors, digital devices, modern hospital, digital painting",
  };
  const [articles, setarticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://medicare-ired.onrender.com/api/tips") // Update if deployed elsewhere
      .then(res => res.json())
      .then(data => {
        setarticles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch hospitals:", err);
        setLoading(false);
      });
  }, []);
  //const query = encodeURIComponent(category); 
//const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=5PX_ng29uMxR2DIASZzfgRX67Xlz83ovTrvZ2niHHMc`;
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;
  const indexOfLastblog = currentPage * blogsPerPage;
  const indexOfFirstblog = indexOfLastblog - blogsPerPage;
  const currentblog = articles.slice(indexOfFirstblog, indexOfLastblog);
  const totalPages = Math.ceil(articles.length / blogsPerPage);
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) return <p className="text-center text-gray-600">Loading Blogs...</p>;
  return (
    <div>
      {/* Featured Article */}
      <div className="mb-12">
        <ArticleCard {...featuredArticle} featured={true} />
      </div>

      {/* All Articles Section */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <Button variant="ghost" className="text-sm">
            Newest
            <ArrowUpDown className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {currentblog.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
  <Pagination className="overflow-x-scroll" >
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
        />
      </PaginationItem>

      {[...Array(totalPages)].map((_, i) => (
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i + 1 === currentPage}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(i + 1);
            }}
          >
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem>
        <PaginationNext
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) setCurrentPage(currentPage + 1);
          }}
        />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</div>
    </div>
  );
};

export default ArticleGrid;