export default function Header() {
  return (
    <>
      <div className="mx-auto w-ful flex flex-col text-black items-center gap-2 px-4 py-8 md:pt-24 ">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-7xl lg:leading-[1.1]">Using MDX With Reactjs</h1>
        <p className="text-balance max-w-4xl text-center  text-lg font-light text-foreground">Combining Markdown and JSX for dynamic content creation. This project explores compiling MDX in ReactJS for more interactive and manageable content.</p>
        <div className="flex w-full items-center justify-center gap-2 py-2">
          <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">Button Text</span>
          </a>
        </div>
      </div>
    </>
  );
}
