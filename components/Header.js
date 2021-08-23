import Image from 'next/image'
import Link from 'next/link'
import Button from './Button';

export default function Header() {
   let navMap = {
      "📖 Docs": "/docs",
      "🧙‍♂️ CLI": "/cli",
      "☁ API": "/api",
      "🐱 GitHub": "https://github.com/ctArcade",
   }

   let navs = Object.keys(navMap).map((btn, i) => (
      <Button href={navMap[btn]} key={i}>{btn}</Button>
   ));

   return (
      <div className="w-full py-14 flex-col lg:flex-row flex place-content-between mb-10 md:mb-14 lg:mb-20">
         <Link href="/">
            <div className="flex justify-center cursor-pointer">
               <Image src="/assets/logoTransparent.svg" alt="ctArcade logo" width="130" height="130" />
            </div>
         </Link>

         <div className="flex md:space-y-0 lg:space-y-0 space-y-2 mx-auto lg:m-0 md:space-x-12 items-center font-semibold flex-col md:flex-row">
            {navs}
         </div>
      </div >
   )
}