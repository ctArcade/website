import Link from 'next/link'

type props = {
   href: string,
   className?: string,
   children?: any,
}

export default function Button({ href, className: twStyle, children }: props) {
   return (
      <Link href={href} passHref>
         <a className={`cursor-pointer p-2 text-xl hover:bg-tBlue rounded transition-colors duration-100 font-bold flex items-center gap-2 ${twStyle}`}>
            {children}
         </a>
      </Link>
   )
}