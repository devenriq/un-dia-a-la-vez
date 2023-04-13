import { BlogCard } from "../../Home/BlogCard/BlogCard";

export const Blog = () => {
  return (
    <section className="h-auto w-full py-14">
      <div className=" bg-dark-green h-fit w-full flex gap-8 flex-col">
        <h2 className="ml-3 text-4xl text-center text-white pt-10 pb-4">
          Descubre mi blog:
        </h2>
        <BlogCard />
      </div>
    </section>
  );
};
import React from "react";

import { posts } from "../../../data/posts";

export const BlogCard = () => {
  return (
    <div className="flex flex-col gap-8">
      {posts.map(({ title, image, date, description }) => (
        <div
          key={title}
          className="bg-gray-2 w-11/12 h-96 rounded-lg mx-auto  text-center"
        >
          <div className="h-48 w-full ">
            <img
              className="card-image w-full h-full rounded-t-lg"
              src={image}
              alt=""
            />
          </div>
          <div className="p-5">
            <p className="mb-3 text-gray-6 font-light">{date}</p>
            <h3 className="text-2xl mb-3 text-gray-10 font-medium">{title}</h3>
            <div className=" w-full h-12 overflow-hidden text-clip">
              <p className="text-clip overflow-hidden text-gray-8 font-normal">
                {description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
