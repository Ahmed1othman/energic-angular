import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export default function SolutionsPage() {
  return (
    <main className="font-[Montserrat] bg-[#E6F7F6]">
      <Navbar />
      <div className="pt-48 pb-20">
        <Container>
          <h1 className="text-4xl font-bold text-[#003330]">Our Solutions</h1>
          <p className="mt-4 text-lg text-gray-700">
                        Welcome to the Solutions page. This is placeholder content that will be replaced with information about Energic&apos;s solutions.
          </p>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
