export const About = () => {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-20">
      <div className="relative mx-auto max-w-6xl">
        <img
          className="w-full md:w-[65%]"
          src="/desktop/image-interactive.jpg"
          alt="A person using an interactive VR experience"
        />

        <div className="bg-white px-6 py-10 md:absolute md:bottom-0 md:right-0 md:w-[50%] md:px-12 md:py-16">
          <h2 className="mb-6 text-3xl font-light uppercase tracking-wide md:text-4xl">
            The leader in interactive VR
          </h2>

          <p className="text-sm leading-6 text-gray-500">
            Founded in 2021, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bond to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};
