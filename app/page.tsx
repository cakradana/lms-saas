import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {[...recentSessions]
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map(({ id, name, topic, subject, duration, color }) => (
            <CompanionCard
              key={id}
              id={id}
              name={name}
              topic={topic}
              subject={subject}
              duration={duration}
              color={color}
            />
          ))}
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
