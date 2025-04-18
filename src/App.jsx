import React from "react";
import {
  Download,
  FAQ,
  Features,
  Footer,
  Header,
  Hero,
  Pricing,
  Testimonials,
} from "./sections";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default App;
