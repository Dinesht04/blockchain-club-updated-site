"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import blogData from "./data/blogData";
import parse from "html-react-parser";

function BlogPost() {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    blogData.map((blg) => {
      if (blg.id == id) {
        setBlog(blg);
      }
    });
  }, [id]);

  useEffect(() => {
    const parallaxHeight = () => {
      const scrollTop = document.documentElement.scrollTop;
      const header = document.querySelector(".sample-header-section");
      const section = document.querySelector(".sample-section");
      const headerElement = document.querySelector(".sample-header");

      if (header && section && headerElement) {
        const headerHeight = header.offsetHeight;
        section.style.marginTop = `${headerHeight}px`;
        headerElement.style.height = `${headerHeight - scrollTop}px`;
      }
    };

    parallaxHeight();
    window.addEventListener("scroll", parallaxHeight);
    window.addEventListener("resize", parallaxHeight);

    return () => {
      window.removeEventListener("scroll", parallaxHeight);
      window.removeEventListener("resize", parallaxHeight);
    };
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <article className="article max-w-8xl mx-auto text-black dark:text-white p-0 m-0">
      <div
        className="sample-header h-full relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${blog.cover})` }}
      >
        <div
          className="sample-header-section h-full relative py-36 max-w-4xl  mx-auto text-center text-white"
          style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="text-4xl font-semibold">{blog.title}</h1>
          <h2 className="text-2xl font-normal">{blog.subtitle}</h2>
        </div>
      </div>
      <div className="sample-section-wrap relative bg-white dark:bg-black">
        <div className="sample-section relative max-w-2xl md:max-w-6xl mx-auto py-10 px-4">
          <h2 className="text-3xl uppercase my-3">{blog.title}</h2>
          <div className="mb-8 text-gray-700 dark:text-gray-300">
            <p>
              <span className="font-bold text-black dark:text-white">
                Written by{" "}
                <a href="#" className="text-blue-500 dark:text-blue-400">
                  {blog.author}
                </a>
              </span>{" "}
              <span className="ml-1">Monday, July 9, 2018</span>
            </p>
          </div>
          <img src={blog.thumbnail} alt="" className="w-full mb-8" />
          <div className="mb-8">{parse(blog.body)}</div>
          <footer className="text-right border-t mt-4 pt-4">
            <p className="flex justify-center">
              Credit:&nbsp;
              <a href="/about" className="text-blue-500 dark:text-blue-400">
                BlockChain Club Content Team
              </a>
            </p>
          </footer>
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
