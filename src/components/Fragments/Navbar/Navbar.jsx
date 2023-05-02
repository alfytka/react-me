const Navbar = (props) => {
  const { hNavClass = 'text-lg sm:text-xl font-semibold font-figtree tracking-tight text-cyan-500' } = props;
  return (
    <div className="relative z-10 mt-12 sm:mt-[5.5rem] px-6 sm:px-8 py-5 max-w-5xl flex justify-between mx-auto bg-gradient-to-r from-cyan-50 to-white">
      <h5 className={hNavClass}>Portfolio-me</h5>
      <h5 className={hNavClass}>Alfitka Haerul Kurniawan</h5>
    </div>
  );
};

export default Navbar;