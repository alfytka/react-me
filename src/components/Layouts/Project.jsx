import imgProject from '/images/img-1.png';
import imgProject2 from '/images/img-2.png';
import imgProject3 from '/images/img-3.png';
import tailwindSvg from '/images/tailwindcss-logotype.svg';
import bootstrapLogo from '/images/bootstrap-logo.png';
import laravelLogo from '/images/laravel-logo.svg';

const Project = () => {
  return (
    <div className="max-w-full bg-gradient-to-b from-cyan-50 to-transparent">
      <div className="max-w-5xl mx-auto pt-14 pb-24 sm:py-24">
        <div className="sm:flex items-center gap-x-4 max-lg:px-5">
          <div className="bg-blue-100/50 w-10 h-10 sm:w-9 sm:h-9 max-sm:mb-2 flex items-center justify-center rounded-md border border-blue-200/50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500">
              <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-figtree tracking-tighter font-bold text-blue-500">
            Look at the <span className="underline decoration-wavy decoration-2 decoration-red-300">project</span> <span className="font-normal"> I made</span>
          </h1>
        </div>
        <div className="text-lg sm:text-xl my-9 max-sm:px-5 max-lg:pr-10 sm:pl-[4.5rem] lg:pl-[3.25rem] font-figtree tracking-tight leading-7 sm:leading-8 text-blue-400">
          <p className="max-w-3xl">
            Proyek yang pernah saya kerjakan terutama selama saya bersekolah, entah itu tugas dari sekolah maupun inisiatif dari siswa sendiri dalam mengembangkan aplikasi sebagai bahan melatih kemampuan kita menjadi developer muda dimasa yang akan datang.
          </p>
        </div>
        <div className="ml-5 sm:mx-5 mb-12 sm:ml-[4.5rem] lg:ml-[3.20rem] block lg:flex px-6 sm:px-10 py-9 text-cyan-800 border-l-[3px] sm:border-l-2 sm:border-t-2 border-blue-300 sm:border sm:rounded-2xl bg-gradient-to-br from-transparent via-blue-50 to-blue-100">
          <div className="md:pr-10">
            <h2 className="flex items-center gap-x-3 text-2xl font-figtree tracking-tight font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
              rplone-webkelas
            </h2>
            <p className="max-w-3xl text-lg font-figtree tracking-tight pt-5">
              Sebuah website statis yang dibangun oleh RPL 1 Developer Team, atas dasar mengenang 3 tahun kebersamaan selama menjadi peserta didik di SMKN 3 Banjar serta menuangkan ide kreatif dalam hal melatih hard skill seperti halnya membangun sebuah website.
            </p>
            <p className="max-md:hidden max-w-3xl text-base font-semibold font-figtree tracking-tight pt-4 pb-1">
              UI framework yang digunakan:
              <img className="h-4 mt-5 ml-2" src={tailwindSvg} alt="tailwindLogo" />
            </p>
          </div>
          <div className="max-lg:mx-auto max-lg:my-5 w-72 h-fit bg-blue-100/10 rounded-xl shadow-md">
            <img 
              src={imgProject} 
              alt="imgProject" 
              className="p-5"
            />
          </div>
          <p className="md:hidden max-w-3xl text-base font-semibold font-figtree tracking-tight py-2">
            UI framework yang digunakan:
            <img className="h-4 mt-4 ml-2" src={tailwindSvg} alt="tailwindLogo" />
          </p>
        </div>
        <div className="ml-5 sm:mx-5 mb-12 sm:ml-[4.5rem] lg:ml-[3.20rem] block lg:flex px-6 sm:px-10 py-9 text-cyan-800 border-l-[3px] sm:border-l-2 sm:border-t-2 border-emerald-200 sm:border sm:rounded-2xl bg-gradient-to-br from-transparent via-emerald-50 to-emerald-100">
          <div className="md:pr-10">
            <h2 className="flex items-center gap-x-2 text-2xl font-figtree tracking-tight font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              pembayaran-spp
            </h2>
            <p className="max-w-3xl text-lg font-figtree tracking-tight pt-5">
              Aplikasi Pembayaran SPP ini dibangun dengan menggunakan teknologi yang ramai digunakan pada saat ini, salah satunya adalah framework Laravel. Pengembangan aplikasi ini juga bertepatan dengan penilaian akhir siswa RPL (Uji Kompetensi Keahlian) Tahun 2023 di SMKN 3 Banjar.
            </p>
            <div className="max-md:hidden max-w-3xl pt-4">
              <p className="text-base font-semibold font-figtree tracking-tight">Teknologi yang digunakan:</p>
              <div className="flex items-center gap-x-3">
                <img className="w-14 mt-3.5 ml-2" src={bootstrapLogo} alt="bootstrapLogo" />
                <img className="w-10 mt-3.5 ml-2" src={laravelLogo} alt="laravelLogo" />
              </div>
            </div>
          </div>
          <div className="max-lg:mx-auto max-lg:my-5 w-72 h-fit bg-cyan-50/20 rounded-xl shadow-md">
            <img 
              src={imgProject2} 
              alt="imgProject" 
              className="p-5"
            />
          </div>
          <div className="md:hidden max-w-3xl py-2">
            <p className="text-base font-semibold font-figtree tracking-tight">Teknologi yang digunakan:</p>
            <div className="flex items-center gap-x-3">
              <img className="w-14 mt-3.5 ml-2" src={bootstrapLogo} alt="bootstrapLogo" />
              <img className="w-10 mt-3.5 ml-2" src={laravelLogo} alt="laravelLogo" />
            </div>
          </div>
        </div>
        <div className="ml-5 sm:mx-5 mb-12 sm:ml-[4.5rem] lg:ml-[3.20rem] block lg:flex px-6 sm:px-10 py-9 text-cyan-800 border-l-[3px] sm:border-l-2 sm:border-t-2 border-red-200 sm:border sm:rounded-2xl bg-gradient-to-br from-transparent to-red-50">
          <div className="md:pr-10">
            <h2 className="flex items-center gap-x-3 text-2xl font-figtree tracking-tight font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
              tokoonline
            </h2>
            <p className="max-w-3xl text-lg font-figtree tracking-tight pt-5">
              Aplikasi toko online berbasis website yang belum sepenuhnya rampung dikerjakan, tujuannya tidak lain sebagai bahan pembelajaran dan pertama kalinya juga pengimplementasian Laravel sebagai full-stack dari pengembangan aplikasi toko online ini.
            </p>
            <div className="max-md:hidden max-w-3xl pt-4">
              <p className="text-base font-semibold font-figtree tracking-tight">Teknologi yang digunakan:</p>
              <div className="flex items-center gap-x-3">
                <img className="w-14 mt-3.5 ml-2" src={bootstrapLogo} alt="bootstrapLogo" />
                <img className="w-10 mt-3.5 ml-2" src={laravelLogo} alt="laravelLogo" />
              </div>
            </div>
          </div>
          <div className="max-lg:mx-auto max-lg:my-5 w-72 h-fit bg-red-50/10 rounded-xl shadow-md">
            <img 
              src={imgProject3} 
              alt="imgProject" 
              className="p-5"
            />
          </div>
          <div className="md:hidden max-w-3xl py-2">
            <p className="text-base font-semibold font-figtree tracking-tight">Teknologi yang digunakan:</p>
            <div className="flex items-center gap-x-3">
              <img className="w-14 mt-3.5 ml-2" src={bootstrapLogo} alt="bootstrapLogo" />
              <img className="w-10 mt-3.5 ml-2" src={laravelLogo} alt="laravelLogo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;