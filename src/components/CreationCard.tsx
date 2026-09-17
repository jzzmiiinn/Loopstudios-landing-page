import type { Creation } from "../types/creation";

interface CreationCardProps {
  creation: Creation;
}

export const CreationCard = ({ creation }: CreationCardProps) => {
  return (
    <div className="relative">
      <picture>
        <source media="(max-width: 767px)" srcSet={creation.mobileImage} />

        <img
          src={creation.desktopImage}
          alt={creation.title}
          className="w-full"
        />
      </picture>

      <h3 className="absolute bottom-4 left-4 text-2xl uppercase text-white">
        {creation.title}
      </h3>
    </div>
  );
};
