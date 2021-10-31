import Image from 'next/image'
import Link from 'next/link'
import Button from './Button';

export default function Header() {
   interface StrMap {
      [index: string]: string;
   }

   let navMap: StrMap = {
      "📖 Docs": "/docs",
      "🧙‍♂️ CLI": "/cli",
      "☁ API": "/api",
      "🐱 GitHub": "https://github.com/ctArcade",
   }

   let navs = Object.keys(navMap).map((btn: string, i: number) => (
      <Button href={navMap[btn]} key={i}>{btn}</Button>
   ));

   return (
      <div className="w-full py-14 flex-col flex place-content-between mb-10 lg:mb-20 lg:flex-row md:mb-14">
         <Link href="/" passHref>
            <a className="flex justify-center cursor-pointer">
               <Image src="/assets/logoTransparent.svg" alt="ctArcade logo" width="130" height="130" />
            </a>
         </Link>

         <div className="flex whitespace-nowrap items-center flex-col space-y-2 mx-auto lg:space-y-0 lg:m-0 sm:space-x-12 sm:flex-row">
            {navs}
         </div>
      </div >
   )
}