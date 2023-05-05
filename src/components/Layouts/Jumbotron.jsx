import Blockquote from "../Fragments/Blockquote/Blockquote";
import Navbar from "../Fragments/Navbar/Navbar";

const Jumbotron = () => {
  return (
    <>
      <Navbar />
      <Blockquote />
      <div className="isolate">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-300/40 [mask-image:radial-gradient(40rem 40rem at top,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="50" height="50" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M50 100V.5M.5 .5H100" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-transparent">
              <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth="0" />
            </svg>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto sm:flex justify-center px-5 py-10 sm:p-10 mt-10 sm:divide-x-2 divide-cyan-500 font-figtree gap-x-4 text-lg tracking-tight leading-6 font-normal">
        <a href="#" className="underline decoration-wavy decoration-red-200 hover:decoration-red-400 text-cyan-500 max-sm:border-l-2 max-sm:pl-2 border-cyan-500">
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