const Header = () => {
  return (
    <div className="relative isolate overflow-hidden lg:overflow-visible py-12 sm:py-14 px-5 sm:px-12 sm:rounded-t-xl bg-white sm:border border-gray-200">
      <div className="absolute inset-0 text-gray-200 overflow-hidden sm:rounded-t-xl">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect>
        </svg>
      </div>
      <div className="relative flex flex-row items-center gap-x-4 justify-between">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-figtree tracking-tighter font-bold flex justify-self-start leading-none text-indigo-500 bg-indigo-50">Little Experience</h1>
        <div className="bg-white border w-12 h-12 rounded-xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-indigo-500">
            <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
            <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
            <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;