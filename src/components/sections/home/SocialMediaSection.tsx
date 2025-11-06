
import Image from "next/image";
import CtaButton from '../ui/CtaButton';

const socialLinks = [
  { src: '/instagram_icon.png', alt: "Instagram" },
  { src: '/facebook_icon.png', alt: "Facebook" },
  { src: '/x_icon.png', alt: "X" },
  { src: '/linkedin_icon.png', alt: "LinkedIn" },
];

const SocialMediaSection = () => {
  return (
    <section className="bg-[#E6F7F6] py-20">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-16">
          Stay Connect With Us Social Media
        </h2>
        <div className="flex justify-center items-center gap-4 md:gap-16 mb-16">
          {socialLinks.map(({ src, alt }, index) => (
            <a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center group"
            >
              {/* Glassmorphism Container */}
              <div className="relative w-20 h-20 md:w-36 md:h-36 transition-transform duration-300 ease-in-out group-hover:scale-105">
                <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center gap-8 md:gap-12"> 
          <CtaButton className="text-start">Contact us</CtaButton>
        </div>
      </div>

      

    </section>
  );
};
export default SocialMediaSection;
