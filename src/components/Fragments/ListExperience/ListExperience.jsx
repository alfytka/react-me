import lksLogo from '/images/lks-logo.png';
import accessMediaLogo from '/images/accessmedia-logo.png';

const ListExperience = () => {
  return (
    <div className="relative isolate overflow-hidden lg:overflow-visible mt-2 sm:mt-5 py-12 sm:py-11 px-5 sm:px-12 sm:rounded-b-xl bg-white sm:border border-gray-200">
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
      <div className="relative">
        <p className="max-w-2xl font-figtree text-lg font-normal tracking-tight leading-8 text-gray-600">
          <span className="bg-indigo-100">Pengalaman</span> yang <span className="bg-indigo-100">saya</span> dapatkan selama ini yaitu mulai dari <span className="bg-indigo-100">Praktek Kerja Lapangan</span> disalah satu perusahaan <span className="bg-indigo-100">software house</span> dan <span className="bg-indigo-100">keikutsertaan dalam mengikuti ajang perlombaan LKS SMK se-Jawa Barat</span> Tahun 2022.
        </p>
      </div>
      <div className="relative flex items-center justify-between mt-14">
        <div className="font-figtree tracking-tight text-gray-700">
          <h2 className="flex gap-x-2 text-xl sm:text-2xl font-bold items-center tracking-tighter pt-3 sm:pt-2 underline decoration-wavy decoration-red-400"><img className="h-11 md:hidden" src={lksLogo} alt="lksLogo" /> LKS SMK Prov. Jawa Barat <span className="max-sm:hidden">Tahun 2022</span></h2>
          <p className="pt-5 sm:pt-9 pb-1 font-semibold">
            19 July 2022 - As a participant
          </p>
          <p className="max-w-xl text-lg font-normal tracking-tight leading-8 text-gray-700">
            Diberi kesempatan untuk mengikuti ajang perlombaan tingkat provinsi Jawa Barat yang dimeriahkan langsung oleh para peserta lomba siswa/i SMK.
          </p>
          <p className="font-semibold pt-9">
            Category: IT Software Solution for Business
          </p>
          <ul className="list-disc list-inside font-normal leading-8 pt-1">
            <li>Desktop Development</li>
            <li>Android Development</li>
          </ul>
        </div>
        <div className="w-40 h-40 max-md:hidden md:ml-10 mr-5 lg:mr-20">
          <img src={lksLogo} alt="lksLogo" />
        </div>
      </div>
      <div className="relative flex items-center justify-between mt-14">
        <div className="w-40 h-40 max-md:hidden lg:ml-14 md:mr-10">
          <img src={accessMediaLogo} alt="accessMediaLogo" />
        </div>
        <div className="font-figtree tracking-tight text-gray-700">
          <h2 className="flex gap-x-2 text-xl sm:text-2xl font-bold items-center tracking-tighter pt-3 sm:pt-2 underline decoration-wavy decoration-red-400"><img className="w-14 md:hidden" src={accessMediaLogo} alt="accessMediaLogo" /><span className="max-sm:hidden">Software House: </span>Access Media</h2>
          <p className="pt-8 sm:pt-9 pb-1 font-semibold">
            Praktik Kerja Lapangan (7 feb - 14 Apr 2022)
          </p>
          <p className="max-w-xl text-lg font-normal tracking-tight leading-8 text-gray-700">
            Turut membantu perusahaan dalam mengelola data client, menuliskan tata cara penggunaan aplikasi yang dikembangkan untuk kemudahan penggunaan bagi client, dan membuat video tutorial yang diunggah pada channel YouTube Access Media.
          </p>
          <p className="font-semibold pt-9">
            Responsibilities:
          </p>
          <ul className="list-disc list-inside font-normal leading-8 pt-1">
            <li>Content Developer</li>
            <li>Desktop Developer</li>
          </ul>
        </div>
      </div>
      <div className="relative footer flex justify-center pt-16">
        <h1 className="font-figtree text-sm tracking-tight font-medium leading-8  text-gray-500">
          Portfolio - Alfitka Haerul Kurniawan
        </h1>
      </div>
    </div>
  );
};

export default ListExperience;