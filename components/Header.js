import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
   let navMap = {
      "📖 Docs": "/docs",
      "🧙‍♂️ CLI": "/cli",
      "☁ API": "/api",
      "🐱 GitHub": "https://github.com/ctArcade",
   }

   let navs = Object.keys(navMap).map(btn => (
      <Link href={navMap[btn]}>
         <div className="cursor-pointer">{btn}</div>
      </Link>
   ));

   return (
      <div className="w-full py-14 flex-col lg:flex-row flex place-content-between mb-10 md:mb-14 lg:mb-20">
         <Link href="/">
            <div className="flex justify-center cursor-pointer">
               <Image src="/assets/logoTransparent.svg" width="130" height="130" />
            </div>
         </Link>

         <div className="flex space-y-2 mx-auto lg:m-0 md:space-x-12 items-center font-semibold flex-col md:flex-row">
            {navs}
         </div>
      </div >
   )
}