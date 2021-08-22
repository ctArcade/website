import Link from 'next/link'

export default function Home() {
   return (
      <div className="w-full text-center">
         {/* get rid of link later */}
         <Link href="/somePage">
            <h1 className="text-6xl font-bold">The platform for your next ct.js game!</h1>
         </Link>

         <div className="text-xl py-7 leading-9 max-w-5xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci lacus, blandit vel efficitur in, dignissim id justo. Sed interdum mollis ipsum, et dapibus tortor convallis quis. Curabitur interdum mattis sem, quis vehicula lectus. Maecenas varius sodales vulputate. Suspendisse tincidunt varius purus.
         </div>
      </div>
   )
}