import Banner from "@/components/Banner";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <ContactBar></ContactBar>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-180px)]">
        <Banner></Banner>
      </div>
      <Footer></Footer>
    </div>
  );
}
