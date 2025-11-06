import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactInfo from '@/components/sections/contact/ContactInfo';
import ContactForm from '@/components/sections/contact/ContactForm';
import ContactLocations from '@/components/sections/contact/ContactLocations';
import ContactFooter from '@/components/sections/contact/ContactFooter';

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      
      {/* Hero Section with Form */}
      <section className="py-16 lg:pt-40 pb-20 bg-white">
        <div className="w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Contact Info */}
            <ContactInfo />

            {/* Right Side - Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <ContactLocations />
      
      <Footer />
    </main>
  );
}
