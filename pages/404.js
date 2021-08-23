import PgAbout from "../components/PgAbout";
import Button from "../components/Button";

export default function NotFound() {
   return (
      <div className="pg-about">
         <PgAbout header="404 Not Found">
            You look lost. Need directions?
         </PgAbout>

         <div className="grid place-content-center">
            <Button href="/" className="px-8 py-4 bg-tBlue my-6">Go Home</Button>
         </div>
      </div>
   )
}