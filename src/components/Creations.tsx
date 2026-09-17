import type { Creation } from "../types/creation";
import { CreationCard } from "./CreationCard";

interface CreationsProps {
  creations: Creation[];
}

export const CreationsList = ({ creations }: CreationsProps) => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-4 md:py-20">
      <header className="flex flex-row justify-between px-6 md:px-10 lg:px-0">
        <h1 className="text-2xl font-light md:text-4xl">OUR CREATIONS</h1>
        <button className="border border-black px-8 py-2">SEE ALL</button>
      </header>
      <div className="extension-list mx-auto px-6 md:px-10 lg:px-0 py-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {creations.map((creation) => (
          <CreationCard key={creation.id} creation={creation} />
        ))}
      </div>
    </section>
  );
};
