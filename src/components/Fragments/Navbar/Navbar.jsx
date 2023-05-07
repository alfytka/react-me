const Navbar = () => {
  return (
    <div className="relative z-10 mt-12 sm:mt-[5.5rem] px-6 sm:px-8 py-5 max-w-5xl flex justify-between mx-auto bg-gradient-to-r from-cyan-50">
      <h5 className="flex items-center gap-2 text-lg sm:text-xl font-semibold font-figtree tracking-tight text-cyan-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        </svg>
        Portfolio
      </h5>
      <h5 className="max-sm:hidden text-lg sm:text-xl font-semibold font-figtree tracking-tight text-cyan-500">
        Alfitka Haerul Kurniawan
      </h5>
      <div className="max-sm:hidden absolute right-3 top-14 flex flex-col gap-y-2 items-center">
        <svg className="rotate-[210deg]" width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path id="curve" d="M7.5 21C8.5 19 12.5 14.5 19.5 14.5C26.5 14.5 31.5 18 32.5 21C33.5 24 32.5 28 28.5 28C24.5 28 21.5 24 19.5 24C17.5 24 13.5 26 10.5 27.5C7.5 29 5.5 29.5 3.5 28C1.5 26.5 0.5 23.5 1 21.5C1.5 19.5 4.5 22 7.5 21Z"/>
            <clipPath id="clip-path">
              <rect width="24" height="32" fill="white" transform="matrix(0.428577 -0.903505 -0.903505 -0.428577 28.9122 36.3566)"/>
            </clipPath>
          </defs>
          <g clipPath="url(#clip-path)">
            <path d="M27.916 31.4568C20.0191 25.1909 13.7896 18.0721 10.031 8.49523M10.031 8.49523C12.5436 8.84916 15.2028 8.99688 17.7457 8.92371M10.031 8.49523C8.84116 12.6182 8.41809 15.8177 8.49744 20.0916" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <use xlinkHref="#curve" stroke="#06b6d4" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </g>
        </svg>
        <span className="text-base text-cyan-500 font-medium tracking-tight -rotate-6 bg-cyan-50">my name, btw</span>
      </div>
    </div>
  );
};

export default Navbar;