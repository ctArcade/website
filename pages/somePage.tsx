import PageAbout from "../components/PageAbout";
import Button from "../components/Button";
import Image from "next/image";

export default function SomePage() {
   return (
      <div className="pg-about">
         <PageAbout header="ANOTHER PAGE THAT SAYS SOME RANDOM STUFF!!!!!">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque sit amet diam nec varius. In congue sollicitudin risus, in molestie orci congue non. Duis consectetur justo augue. Morbi dictum ante in sapien pulvinar, sed auctor felis mollis.
         </PageAbout>

         <div className="grid place-content-center">
            <Button href="/" className="px-8 py-4 bg-tBlue my-6">
               <Image src="/assets/leftArrow.svg" width="22" height="22" />

               <div>Go back</div>
            </Button>
         </div>
      </div>
   )
}