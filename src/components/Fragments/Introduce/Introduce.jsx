import htmlLogo from '/images/html-logo.svg';
import cssLogo from '/images/css-logo.svg';
import tailwindLogo from '/images/tailwind-logo.svg';
import laravelLogo from '/images/laravel-logo.svg';
import reactLogo from '/images/react-logo.svg';

const Introduce = () => {
  return (
    <div className="max-w-full bg-gradient-to-b from-transparent to-cyan-50">
      <div className="max-w-5xl mx-auto pt-32 pb-24">
        <div className="flex items-center gap-x-4 max-lg:px-5">
          <div className="bg-cyan-100/40 w-9 h-9 flex items-center justify-center rounded-md border border-cyan-200/30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-figtree tracking-tighter font-bold text-cyan-600">Introduce Myself</h1>
        </div>
        <div className="text-lg sm:text-xl my-9 max-sm:px-5 max-lg:pr-10 sm:pl-[4.5rem] lg:pl-[3.25rem] font-figtree tracking-tight leading-7 sm:leading-8 text-cyan-800">
          <p>
            Hello everyone, saya <span className="font-semibold">Alfitka,</span> seorang fresh graduate dari SMKN 3 Banjar yang bertempat di Kota Banjar, Jawa Barat. Sebelumnya, saya memang merupakan siswa dari jurusan Rekayasa Perangkat Lunak, tidak heran saya tentu memiliki skill dalam hal membangun dan mengembangkan sebuah perangkat lunak khususnya website.
          </p>
          <p className="pt-3 pb-5">
            Quotes yang mengingatkan saya akan <span className="underline">tujuan awal</span>, dari @riskiathaillah:
          </p>
          <p className="pl-7 py-5 border-l-4 bg-gradient-to-r from-cyan-50 to-transparent border-cyan-500 font-normal text-cyan-600">
            Kejar apa yang ingin kau kejar, tapi jangan lupa apa yang mesti kau jaga, <br />
            jadilah apa saja. Khawatirkanlah masa depan <span className="font-semibold">seperlunya</span>, <br />
            kadar <span className="font-semibold">perlu</span> itulah yang membuatmu berusaha, bukan gelisah tak tentu arah, <br />
            sisanya sematkan dalam <span className="underline">do’a</span> dan ber<span className="underline">tawakal</span>-lah.
          </p>
          <p className="pt-5 pb-3">
            Lebih detailnya, saya berkeinginan untuk menjadi seorang front-end developer yang memperhatikan betul akan user interface dan experience dari penggunaan software yang tim kami kembangkan.
          </p>
          <p>
            Adapun kemampuan yang saya kuasai mulai dari bahasa markup, bahasa pemrograman, framework dan library diantaranya.
          </p>
          <div className="flex items-center justify-center gap-x-6 sm:gap-x-8 lg:gap-x-10 pt-8 sm:pt-10 lg:pt-5">
            <img src={htmlLogo} className="w-auto h-8 sm:h-10 md:h-14" alt="htmlLogo" />
            <img src={tailwindLogo} className="w-8 sm:w-10 md:w-14 h-auto" alt="tailwindLogo" />
            <img src={cssLogo} className="w-auto h-8 sm:h-10 md:h-14" alt="cssLogo" />
            <img src={laravelLogo} className="w-auto h-8 sm:h-10 md:h-14" alt="laravelLogo" />
            <img src={reactLogo} className="w-auto h-8 sm:h-10 md:h-14" alt="reactLogo" />
          </div>
          <ul className="flex pt-5 items-center justify-center gap-x-12 sm:gap-x-16 lg:gap-x-20 text-sm sm:text-base font-medium">
            <li>Advanced</li>
            <li>Intermediate</li>
            <li>Basic</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Introduce;