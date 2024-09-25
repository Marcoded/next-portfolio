import Flamin from "..//..//public/flamminHotPreview.png";
import mceLogo from "..//..//public/mce-full.jpg";
import Photogram from "..//..//public/photogramPreview.png";
import QrPro from "..//..//public/qrProPreview.png";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetinTouch";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Jobs from "./components/Jobs";
import Project from "./components/Project";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <section className="h-screen flex items-center justify-center">
          <Hero />
        </section>
        <section className=" flex items-center justify-center">
          <Introduction />
        </section>
        <section className=" flex items-center mt-5 mb-5 justify-center">
          <Skills />
        </section>

        <section className="mb-16">
          <h1 className="font-bold text-transparent leading-relaxed  text-center mb-8 p-2 text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-accent to-primary ">
            Jobs
          </h1>
          <Jobs
            techUsed={["React", "Node Js", "TypeScript", "E2E tests"]}
            orientation="left"
            companyLogo={mceLogo}
            companyUrl="https://www.moncourtierenergie.com"
            description="I worked as part of a team on a full-stack web application for B2B clients, helping them manage invoices, energy usage, and payments. My primary focus was developing a user-friendly dashboard that visualizes data from multiple energy suppliers. To achieve this, I reconciled data from different APIs and ensured that we followed best practices in security and performance throughout the project."
            title="Full stack developer - React / Node"
            dateRange="September 2023 - August 2024"
          />
        </section>

        <section>
          <h1 className="font-bold text-transparent leading-relaxed  text-center mb-8 p-2 text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-accent to-primary ">
            Projects Highlights
          </h1>
          <div className="flex flex-col gap-10">
            <Project
              techUsed={["Next JS", "TypeScript", "Rails", "Radix UI"]}
              orientation="left"
              image={QrPro}
              hostedUrl="https://front-end-qr-1pu2i01l7-marcoded.vercel.app/"
              description="A fully-featured mock-up of a SaaS for creating and managing QR codes. The focus was on creating a user-friendly dashboard, allowing users to edit, delete, and manage dynamic QR codes."
              title="Qr-Pro"
              githubLink="https://github.com/Marcoded/front-end-qr-pro"
            />
            <Project
              techUsed={["Next JS", "TypeScript", "Tailwind"]}
              orientation="right"
              image={Flamin}
              hostedUrl="https://flammin-hot.vercel.app/"
              description="A front-end e-commerce application built with Next.js. State is managed using React's context API and reducers."
              title="Flamin' Hot"
              githubLink="https://github.com/Marcoded/Flammin-Hot"
            />
            <Project
              techUsed={["React", "Rails", "ES6", "Tailwind"]}
              orientation="left"
              image={Photogram}
              hostedUrl="https://project-photogram.fly.dev/"
              description="A full-stack social media clone, built with React and Ruby on Rails. Authentication is managed using the Devise Gem and OAuth2 for Google sign-in."
              title="Photogram"
              githubLink="https://github.com/Marcoded/social-media-clone-react-rails-oauth2"
            />
          </div>
        </section>
        <section className="h-[35rem] flex flex-col items-center justify-center">
          <h1 className="font-bold text-transparent text-center mb-16 leading-relaxed text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-accent to-primary ">
            Contact
          </h1>
          <GetInTouch />
        </section>
      </main>
      <Footer />
    </>
  );
}
