import Link from 'next/link'

export default function Button({ href, className: twStyle, children }) {
   return (
      <Link href={href}>
         <div className={`cursor-pointer p-2 text-xl hover:bg-tBlue rounded transition-colors duration-100 font-bold flex items-center gap-2 ${twStyle}`}>
            {children}
         </div>
      </Link >
   )
}