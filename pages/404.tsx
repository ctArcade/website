import PageAbout from "../components/PageAbout";
import Button from "../components/Button";

export default function NotFound() {
   return (
      <div className="pg-about">
         <PageAbout header="404 Not Found">
            You look lost. Need directions?
         </PageAbout>

         <div className="grid place-content-center">
            <Button href="/" className="px-8 py-4 bg-tBlue my-6">Go Home</Button>
         </div>
      </div>
   )
}