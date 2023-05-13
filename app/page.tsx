import Image from 'next/image'
import About from './components/About'
export default function Home() {
  return (
    <>
    <main className="flex flex-col md:flex-row bg-[#1C1C1C] container w-full h-screen">
  <div className="left md:w-8/12 p-10">
    <div className="text-left flex font-can text-7xl md:text-9xl t h-100 p-5 text-white">
      SUBRABALA DASH
    </div>
    <div className="fullstack rounded-[45px] text-center p-3 px-3 w-[70%] text-white border border-white">
      FullStack Developer / Designer
    </div>
  </div>
  <div className="right mx-auto md:w-4/12 w-6/12 ">
   <img src='/circle.png' />
  </div>
</main>
<About/>
    </>

  )
}
