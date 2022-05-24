import Head from "next/head";
import Button from "../components/Button/Button";
import Nav from "../components/Nav/Nav";
import Stats from "../components/Stats/Stats";
import HeroSection from "../components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      <Nav />
      <main className="overflow-hidden text-center">
        <HeroSection />
        <Stats />
      </main>
    </div>
  );
}
