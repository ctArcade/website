import Link from 'next/link'

export default function PLink({ href, text }) {
   return (
      <Link href={href}>
         <div className="py-3 px-6 inline-block bg-blue-400 text-white font-bold rounded-xl scale-1 shadow-none transform hover:scale-105 hover:shadow-xl transition-all">{text}</div>
      </Link>
   )
}