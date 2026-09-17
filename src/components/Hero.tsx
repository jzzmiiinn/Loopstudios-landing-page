import { Header } from "./Header";

export const Hero = () => {
  return (
    <section className="min-h-[650px] bg-[url(/mobile/image-hero.jpg)] bg-cover bg-center px-6 py-10 md:min-h-[650px] md:bg-[url(/desktop/image-hero.jpg)] md:px-10 lg:px-15">
      <Header />

      <div className="mt-20 md:mt-24 lg:mt-28">
        <h1 className="max-w-xl border border-white p-6 text-4xl font-light uppercase leading-tight text-white sm:text-5xl md:text-6xl">
          Immersive experiences that deliver
        </h1>
      </div>
    </section>
  );
};
