export default function PageAbout({ header, children }) {
   return (
      <div className="w-full text-center">
         <h1 className="text-6xl font-bold">
            {header}
         </h1>

         <div className="text-xl py-7 leading-9 max-w-5xl mx-auto">
            {children}
         </div>
      </div>
   )
}