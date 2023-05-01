import imgProject from '/images/img-1.png';
import imgProject2 from '/images/img-2.png';
import imgProject3 from '/images/img-3.png';
import tailwindSvg from '/images/tailwindcss-logotype.svg';
import bootstrapLogo from '/images/bootstrap-logo.png';
import laravelLogo from '/images/laravel-logo.svg';

const Project = () => {
  return (
    <div className="max-w-full bg-gradient-to-b from-cyan-50 to-transparent">
      <div className="max-w-5xl mx-auto py-24">
        <div className="sm:flex items-center gap-x-4 max-lg:px-5">
          <div className="bg-blue-100/50 w-9 h-9 max-sm:mb-1 flex items-center justify-center rounded-md border border-blue-200/50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-figtree tracking-tighter font-bold text-blue-500">
            Look at the <span className="underline underline-offset-4 decoration-[6px]">project</span> <span className="font-normal"> I made</span>
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