import { Header } from "./Header";

export const Hero = () => {
  return (
    <div className="bg-[url(/desktop/image-hero.jpg)] bg-cover bg-center h-auto px-15 py-10">
      <Header />
      <p className="text-6xl font-light text-white border border-white-900 m-15 w-120 p-6">
        IMMERSIVE EXPERIENCES THAT DELIVER
      </p>
    </div>
  );
};
