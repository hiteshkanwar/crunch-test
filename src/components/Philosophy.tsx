import Image from "next/image";
import philosophyIcon1 from "@/assets/images/philosophy-icon-1.svg";
import philosophyIcon2 from "@/assets/images/philosophy-icon-2.svg";
import philosophyIcon3 from "@/assets/images/philosophy-icon-3.svg";

export default function Philosophy() {
  const philosophies = [
    {
      title: "POSITIVITY",
      description:
        "We are fantastic, we work out to feel good, look great and become our best selves.",
      icon: philosophyIcon1,
    },
    {
      title: "INCLUSIVITY",
      description:
        "How we keep each other. There is no one way to be anything, community.",
      icon: philosophyIcon2,
    },
    {
      title: "FUN",
      description:
        "We know life can be sour now that sucks that we make it count. Fun is fuel we bring here.",
      icon: philosophyIcon3,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold-cond text-purple mb-4">
            Embrace a #NOJUDGMENTS Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {philosophies.map((philosophy, index) => (
            <div key={index} className="text-center px-4">
              <div className="mb-4 flex justify-center">
                <Image
                  src={philosophy.icon}
                  alt={philosophy.title}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-2xl font-bold-cond text-purple mb-1 uppercase tracking-wide">
                {philosophy.title}
              </h3>
              <p className="text-purple text-sm">{philosophy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
