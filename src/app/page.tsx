import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ProductDesign } from "@/components/ProductDesign";
import { SoftwareEngineering } from "@/components/SoftwareEngineering";
import { Skills } from "@/components/Skills";
import { Leadership } from "@/components/Leadership";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { site, siteUrl } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: siteUrl,
  worksFor: { "@type": "Organization", name: site.currentCompany },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sylhet",
    addressCountry: "BD",
  },
  sameAs: [site.socials.github, site.socials.behance, site.socials.linkedin],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <ProductDesign />
      <SoftwareEngineering />
      <Skills />
      <Leadership />
      <Education />
      <Contact />
    </>
  );
}
