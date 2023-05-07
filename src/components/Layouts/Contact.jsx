import me from '/images/me-1.jpg';

const Contact = () => {
  return (
    <>
      <div className="max-w-5xl relative isolate mx-auto mt-28 max-lg:px-5">
        <div className="absolute inset-0 text-gray-200 overflow-hidden sm:rounded-b-xl">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect>
          </svg>
        </div>
        <div className="relative flex flex-col space-y-10 pt-10 pb-20">
          <h1 className="text-4xl sm:text-5xl font-bold font-figtree tracking-tight text-blue-700">
            Hello, world &#x1F30D;
          </h1>
          <h1 className="max-w-4xl p-5 lg:ml-12 text-3xl sm:text-4xl md:text-5xl font-medium font-figtree tracking-tight leading-8 sm:leading-[3.25rem] text-gray-800 bg-gray-200">
            Saya alfitka, kesukaan saya terhadap <span className="italic">programming</span> &#x1F9D1;&#x200D;&#x1F4BB; membuat rasa penasaran <span className="text-3xl sm:text-4xl ">&#129300;</span> saya semakin menjadi-jadi akan IT.
          </h1>
          <h1 className="max-w-4xl p-5 md:ml-20 lg:ml-36 text-3xl sm:text-4xl md:text-5xl font-medium font-figtree tracking-tight leading-8 sm:leading-[3.25rem] text-gray-100 bg-emerald-500">
            Dari ketertarikan dan tekad belajar yang kuat <span className="text-3xl sm:text-4xl">&#9994;</span> menjadikan saya terus berkembang <span className="text-3xl sm:text-4xl">&#x1F556;</span> disetiap harinya.
          </h1>
          <div className="flex max-sm:flex-col gap-8 sm:gap-10 pt-7 sm:pt-6 sm:pl-12 md:pl-20 lg:pl-[10.45rem]">
            <img src={me} className="w-28 sm:w-32 rounded-full" alt="alfitka" />
            <div className="font-figtree tracking-tight text-gray-800">
              <h2 className="text-2xl font-semibold">Kenali akun saya</h2>
              <div className="flex items-center gap-2 text-lg font-medium pt-[2.10rem]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                alfytka@gmail.com
              </div>
              <a href="https://www.linkedin.com/in/alfitka-haerul-kurniawan-80aba025a/" target="_blank" className="flex items-center gap-2 text-lg font-medium pt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin w-6 h-5" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
                Alfitka Haerul Kurniawan
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-5 py-8 sm:p-10">
        <p className="text-base sm:text-lg font-figtree tracking-tight text-gray-800">
          Made with Tailwind CSS by Alfitka
        </p>
      </div>
    </>
  );
};

export default Contact;