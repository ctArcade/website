type props = {
   header: string,
   contStyle?: string,
   descStyle?: string,
   headStyle?: string,
   className?: string,
   children?: any,
}

export default function PageAbout({ header, contStyle, descStyle, headStyle, children }: props) {
   return (
      <div className={`w-full text-center ${contStyle}`}>
         <h1 className={`text-6xl font-bold ${headStyle}`}>
            {header}
         </h1>

         <div className={`text-xl py-7 leading-9 max-w-5xl mx-auto ${descStyle}`}>
            {children}
         </div>
      </div>
   )
}