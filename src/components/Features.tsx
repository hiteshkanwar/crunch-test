import Image from "next/image";
import category1 from "@/assets/images/category-1.svg";
import category2 from "@/assets/images/category-2.svg";
import category3 from "@/assets/images/category-3.svg";
import { Card } from "@/components/ui";

export default function Features() {
  const features = [
    {
      icon: category1,
      title: "STATE OF THE ART TRAINING GROUND",
      description: "Lorem dolor sit amet, consectetur adipiscing elit",
    },
    {
      icon: category2,
      title: "HEART PUMPING, TEAM-BASED HIIT WORKOUT",
      description: "Lorem dolor sit amet, consectetur adipiscing elit",
    },
    {
      icon: category3,
      title: "UNLIMITED CLASSES, UNBEATABLE PRICE",
      description: "Lorem dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <section className="py-8 bg-white text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-[22px] font-bold-cond mb-4.5 text-primary">
          Get HIIT done at the HIITZone, exclusively at Crunch!
        </h2>
        <p className="text-lg text-secondary mb-5">
          Once your heart starts pounding, you’ll get it. The fast-paced,
          fiercely fun workouts with booming music and relentless motivation
          will push you to do what you didn’t think was possible. 
          <span className="text-[#9A4C91]">Available at select locations.</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-1 py-6">
          {features.map((feature, index) => (
            <Card key={index} borderLeft={index !== 0}>
              <div className="inline-flex items-center justify-center w-16 h-16 text-white mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="h-full w-full"
                />
              </div>

              <h3 className="text-2xl font-bold-cond text-primary mb-1 uppercase">
                {feature.title}
              </h3>

              <p className="text-secondary text-base">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
