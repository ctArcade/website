import Button from "../components/Button"
import PageAbout from "../components/PageAbout"
import Image from "next/image"
import type { NextPage } from "next"

const Home: NextPage = () => {
   return (
      <div>
         <PageAbout header="The platform for your next ct.js game!" className="bg-blue-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci lacus, blandit vel efficitur in, dignissim id justo. Sed interdum mollis ipsum, et dapibus tortor convallis quis. Curabitur interdum mattis sem, quis vehicula lectus. Maecenas varius sodales vulputate. Suspendisse tincidunt varius purus.
         </PageAbout>

         <div className="grid place-content-center">
            <Button href="/somePage" className="px-8 py-4 bg-tBlue mx-auto my-8">
               <div>Get started</div>

               <Image src="/assets/rightArrow.svg" width="22" height="22" />
            </Button>
         </div>
      </div>
   )
}

export default Home;