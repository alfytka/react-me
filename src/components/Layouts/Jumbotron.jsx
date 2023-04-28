import Blockquote from "../Fragments/Blockquote/Blockquote";
import Navbar from "../Fragments/Navbar/Navbar";

const Jumbotron = () => {
  return (
    <>
      <Navbar />
      <Blockquote />
      <div className="max-w-5xl mx-auto sm:flex justify-center px-5 py-10 sm:p-10 mt-10 sm:divide-x-2 divide-cyan-500 font-figtree gap-x-4 text-lg tracking-tight leading-6 font-normal">
        <a href="#" className="hover:underline text-cyan-500 max-sm:border-l-2 max-sm:pl-2 border-cyan-500">
          Download My CV
        </a>
        <p className="flex sm:pl-3 max-sm:pt-1 text-gray-400">
          Scroll for more something intresting
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
          </svg>
        </p>
      </div>
    </>
  );
};

export default Jumbotron;