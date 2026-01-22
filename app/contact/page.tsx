import { ContactTopNav } from "@/components/contact-top-nav";
import { ContactMap } from "@/components/contact-map";
import { ContactInfo } from "@/components/contact-info";
import { ContactForm } from "@/components/contact-form";
import { SocialFooter } from "@/components/social-footer";
import { TopNav } from "@/components/top-nav";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <TopNav />
      {/*       <ContactTopNav />
       */}{" "}
      <ContactMap />
      <div className="h-6" />
      <h3 className="text-[#141117] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4  max-w-4xl mx-auto">
        Nos coordonnées
      </h3>
      <ContactInfo />
      <div className="h-8" />
      <ContactForm />
      {/*       <SocialFooter />
       */}{" "}
      <div className="h-10" />
    </div>
  );
}
