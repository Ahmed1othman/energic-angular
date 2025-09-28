import Image from "next/image";
import Container from "../layout/Container";

const galleryData = {
  column1: [
    {
      src: "/galley_1.png",
      alt: "Charging stations night view",
      className: "relative w-full h-72 md:h-full min-h-[390px]",
    },
  ],
  column2: {
    main: {
      src: "/galley_2.png",
      alt: "Charging station entrance",
      className: "relative w-full h-72",
    },
    nested: [
      {
        src: "/galley_3.png",
        alt: "Underground parking charging",
        className: "relative w-full h-40",
      },
      {
        src: "/galley_4.png",
        alt: "EV charger close-up",
        className: "relative w-full h-40",
      },
    ],
  },
  column3: [
    {
      src: "/galley_5.png",
      alt: "Person plugging EV charger",
      className: "relative w-full h-40",
    },
    {
      src: "/galley_6.png",
      alt: "EV car charging",
      className: "relative w-full h-72",
    },
  ],
};

const Gallery = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
    {/* Column 1 */}
    <div className="space-y-3">
      {galleryData.column1.map((image, index) => (
        <div key={index} className={image.className}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover shadow-md"
          />
        </div>
      ))}
    </div>

    {/* Column 2 */}
    <div className="space-y-3">
      <div className={galleryData.column2.main.className}>
        <Image
          src={galleryData.column2.main.src}
          alt={galleryData.column2.main.alt}
          fill
          className="object-cover shadow-md"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {galleryData.column2.nested.map((image, index) => (
          <div key={index} className={image.className}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover shadow-md"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Column 3 */}
    <div className="space-y-3">
      {galleryData.column3.map((image, index) => (
        <div key={index} className={image.className}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover shadow-md"
          />
        </div>
      ))}
    </div>
  </div>
);

const ProvideSection = () => {
  return (
    <section className="bg-[#e6f7f6] py-16">
      <Container> 
      <div className="mx-auto">
        {/* Header */}
        <div className="text-start mb-12">
          <h2 className="text-[#00A79D] text-2xl md:text-3xl font-semibold mb-4">
            What does ENERGIC Provide?
          </h2>
          <p className="text-[#1A3B39] text-base md:text-lg leading-relaxed">
            ENERGIC offers a wide range of charging products and provides
            integrated solutions for planning, designing, and installing charging
            stations according to customer needs. Leveraging its independently
            developed charging cloud platform and connected charging stations,
            Energic delivers network operation services to various users,
            including vehicle charging services, SaaS platform services, and
            other value-added services.
          </p>
        </div>

        {/* Gallery */}
        <Gallery />
      </div>
      </Container>
    </section>
  );
};

export default ProvideSection;
