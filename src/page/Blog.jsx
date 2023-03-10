import React from "react";
import Iframe from "react-iframe";
import LineGradient from "../component/LineGradient"
const BlogItem = () => {
  return (
    <div className="flex flex-col  shadow-xl ">
      <div>
        <h1 className="font-medium ">Week 1 </h1>
        <h2 className="text-sm">My Introduction </h2>
      </div>
      <Iframe
        url="https://www.youtube.com/embed/xNRJwmlRBNU"
        id=""
        className="w-full sm:w-[100%] h-[260px] sm:h-[320px]  py-[3%] "
        display="block"
        position="relative"
      />
    </div>
  );
};

const Blog = () => {
  return (
    <section id="blogs" className="flex flex-col  w-5/6 mx-auto  sm:py-24 py-10">
      <div className="mb-5 px-10 ">
          <h1 className="w-full text-center text-2xl sm:text-3xl font-semibold font-serif ">
           <u> Blogs{" "}</u>
          </h1>
         
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2   gap-5 ">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </section>
  );
};

export default Blog;
