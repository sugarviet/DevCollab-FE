'use client'

import AuthWrapper from "@/components/Auth/withAuthorized";
import { Hero, CTA, Features, Testimonials, Collaboration  } from "@/components/Home";
const Home = () => {
  return (
    <div>
     <Hero />
      <Collaboration />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default AuthWrapper(Home);
