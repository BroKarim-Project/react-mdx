import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import Template from "./template";

//versi rapi nengok ccrsxx aja atau punya bawaaann boleh juga
export const Container = ({ children, meta }) => {
  const tags = meta.tags.split(",").map((tag, index) => (
    <p key={index} className="text-sm text-black p-2 bg-yellow-100 rounded-md  inline-block">
      #{tag.trim()}
    </p>
  ));
  return (
    <>
      <Template>
        <div className="container min-h-screen mx-auto px-20 py-4">
          <Link to={"/"} className="text-base font-medium py-2  px-4 rounded-md hover:bg-slate-200 hover:text-black dark:hover:bg-zinc-600">
            &larr; Back
          </Link>
          <main className="pt-8 pb-2  text-black">
            <div className="w-full ">
              <img src={meta.banner} alt="" className="rounded-md mx-auto cursor-pointer hover:brightness-75 w-full  max-h-[448px] object-cover" />
            </div>
            <section className=" px-8 mt-8 grid gap-2">
              <h1 className="text-2xl font-serif font-bold md:text-7xl">{meta.title}</h1>
              <p className="text-lg opacity-80">Written on {meta.publishedAt} by Kariim</p>
              <p className="text-lg opacity-80">{meta.description}</p>
              <div className="tags-container flex gap-2">{tags}</div>
              <hr className="mt-4 dark:border-gray-600 border-2" />
              <section className="mt-4 prose max-w-4xl ">
                <MDXProvider>{children}</MDXProvider>
              </section>
            </section>
          </main>
        </div>
      </Template>
    </>
  );
};

Container.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    banner: PropTypes.elementType,
    description: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};
