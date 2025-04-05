import Header from "../components/Header";
import Hero from "../components/Hero";
import Discover from "../components/Discover";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] py-[25px]">
      <Header />
      <Hero />
      <Discover />
    </div>
  );
}
