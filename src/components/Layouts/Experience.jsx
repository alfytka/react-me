import accessMediaLogo from  '/images/accessmedia-logo.png';
import lksLogo from  '/images/lks-logo.png';

const Experience = () => {
  return (
    <div className="max-w-full bg-gradient-to-b from-transparent to-cyan-50">
      <div className="max-w-5xl mx-auto pt-10 pb-20 sm:py-20">
        <div className="flex flex-col px-4">
          <div className="bg-cyan-100/40 w-10 h-10 flex items-center justify-center rounded-md border border-cyan-200/30">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-cyan-600">
              <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
              <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
              <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
            </svg>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold font-figtree tracking-tighter text-cyan-600">
            Little <span className="text-4xl sm:text-5xl">experience</span></h1>
          <p className="max-w-2xl text-lg sm:text-xl font-figtree tracking-tight leading-7 sm:leading-8 py-10 text-cyan-700">
            Pengalaman yang saya dapatkan selama ini yaitu mulai dari Praktek Kerja Lapangan disalah satu perusahaan software house dan keikutsertaan dalam mengikuti ajang perlombaan LKS SMK se-Jawa Barat Tahun 2022.
          </p>
        </div>
        <div className="max-w-5xl mt-10 sm:mt-14 max-sm:ml-2 sm:mx-4 px-5 sm:px-10 md:px-14 py-12 bg-gradient-to-r from-transparent to-pink-100 sm:rounded-tr-3xl border-l-[3px] sm:border-l-2 border-pink-300">
          <div className="flex justify-between items-center">
            <div className="logos flex gap-x-5">
              <img className="w-20 h-min" src={accessMediaLogo} alt="accessMediaLogo" />
              <div className="title flex flex-col font-figtree">
                <span className="text-2xl font-bold tracking-tight leading-6 text-slate-700">Access Media</span>
                <span className="text-lg tracking-tight text-slate-500">accessmedia.co.id</span>
              </div>
            </div>
            <div className="max-md:hidden bg-pink-50/20 px-3 py-1.5 rounded-lg border border-pink-200/50">
              <h2 className="font-figtree text-base font-medium tracking-tight text-slate-700">
                Internship for 3 months
              </h2>
            </div>
          </div>
          <div className="pt-8 text-lg font-figtree tracking-tight text-slate-700">
            <p className="font-semibold">
              Praktik Kerja Lapangan (7 feb - 14 Apr 2022)
            </p>
            <p className="max-w-2xl py-4">
              Turut membantu perusahaan dalam mengelola data client, menuliskan tata cara penggunaan aplikasi yang dikembangkan untuk kemudahan penggunaan bagi client, dan membuat video tutorial yang diunggah pada channel YouTube Access Media.
            </p>
            <p className="font-semibold">
              Responsibilities:
            </p>
            <div className="flex items-center gap-x-2 pt-3">
              <span className="text-base font-medium px-4 py-1 bg-pink-50/30 text-slate-500 rounded-full border border-slate-200/50">
                Content Developer
              </span>
              <span className="text-base font-medium px-4 py-1 bg-pink-50/30 text-slate-500 rounded-full border border-slate-200/50">
                Desktop Developer
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mt-16 sm:mx-4 px-5 max-sm:ml-2 sm:px-10 md:px-14 py-12 bg-gradient-to-r from-transparent to-indigo-100 sm:rounded-tr-3xl border-l-[3px] sm:border-l-2 border-indigo-300">
          <div className="flex justify-between items-center">
            <div className="logos flex gap-x-5">
              <img className="w-auto h-12" src={lksLogo} alt="lksLogo" />
              <div className="title flex flex-col font-figtree">
                <span className="text-xl sm:text-2xl font-bold tracking-tight leading-6 text-slate-700">LKS SMK Prov. Jawa Barat 2022</span>
                <span className="text-lg max-md:hidden tracking-tight text-slate-500">
                  IT Software Solution for Business
                </span>
                <span className="text-lg md:hidden tracking-tight text-slate-500">
                  Competition Event
                </span>
              </div>
            </div>
            <div className="max-md:hidden bg-indigo-50/10 px-3 py-1.5 rounded-lg border border-indigo-200/40">
              <h2 className="font-figtree text-base font-medium tracking-tight text-slate-700">
                Competition Event
              </h2>
            </div>
          </div>
          <div className="pt-8 text-lg font-figtree tracking-tight text-slate-700">
            <p className="font-semibold">
              19 July 2022 - As a participant
            </p>
            <p className="max-w-2xl py-4">
              Diberi kesempatan untuk mengikuti ajang perlombaan tingkat provinsi Jawa Barat yang dimeriahkan langsung oleh para peserta lomba siswa/i SMK.
            </p>
            <p className="font-semibold">
              Bidang lomba: IT Software Solution for Business
            </p>
            <div className="flex items-center gap-x-2 pt-3">
              <span className="text-base font-medium px-4 py-1 bg-indigo-100/30 text-slate-500 rounded-full border border-sky-200/50">
                Desktop Developer
              </span>
              <span className="text-base font-medium px-4 py-1 bg-indigo-100/30 text-slate-500 rounded-full border border-sky-200/50">
                Android Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;