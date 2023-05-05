const Blockquote = () => {
  return (
    <div className="relative z-10 px-6 sm:px-8 md:px-10 lg:px-12 py-9 mt-10 max-w-5xl flex justify-between mx-auto bg-gradient-to-r from-cyan-50/60 sm:from-cyan-50 to-transparent border-l-[6px] border-cyan-200">
      <h1 className="text-[2.50rem] max-sm:leading-10 sm:text-6xl font-figtree font-bold max-w-4xl tracking-tight text-cyan-500 lg:pr-1">seorang front-end developer yang terus <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-500">berkembang</span> disetiap harinya, <span className="font-normal line-through decoration-cyan-50">walau hanya 1%</span>.</h1>
    </div>
  );
};

export default Blockquote;