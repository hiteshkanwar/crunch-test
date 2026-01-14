"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import feature1 from "@/app/assets/images/feature-1.png";
import feature2 from "@/app/assets/images/feature-2.png";
import feature3 from "@/app/assets/images/feature-3.png";

interface Amenity {
  id: number;
  name: string;
  description: string;
}

interface ClassItem {
  Id: number;
  name: string;
  description: string;
}

export default function EquipmentSection() {
  const [amenities, setAmenities] = useState<Amenity[]>([]);
  const [hiitClasses, setHiitClasses] = useState<ClassItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const amenitiesResponse = await fetch("/api/amenities?page=1&limit=12");
        const amenitiesData = await amenitiesResponse.json();
        setAmenities(amenitiesData.data);

        const classesResponse = await fetch("/api/class/hiit");
        const classesData = await classesResponse.json();
        setHiitClasses(classesData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading equipment...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <p className="text-xl text-primary text-center mb-6">
          Get unlimited advanced HIIT classes, plus everything else Crunch has
          to offer, with a Peak Results membership.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="relative md:col-span-4 h-full">
            <Image
              src={feature1}
              alt="High Intensity Interval Training"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-8">
            <h3 className="text-2xl font-bold-cond text-primary mb-2">
              High Intensity Interval Training
            </h3>
            <p className="text-secondary text-base">
              The HIITZone delivers high intensity interval training that gets
              the job done. Our classes have the support you need to push past
              your limits and increase metabolism, tone muscle, and increase
              metabolism. Bring the calories long after you stop sweating.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="relative md:col-span-4 h-full">
            <Image
              src={feature2}
              alt="Proprietary Equipment"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-8">
            <h3 className="text-2xl font-bold-cond text-primary mb-2">
              5,000 Sq Ft of Proprietary Equipment
            </h3>
            <p className="text-secondary text-base mb-2">
              Our world-class functional training area includes:
            </p>

            <ul className="grid grid-cols-2 list-disc text-secondary list-inside text-base">
              {amenities.map((amenity) => (
                <li key={amenity.id}>{amenity.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          <div className="relative md:col-span-4 h-full">
            <Image
              src={feature3}
              alt="HIIT Workout Classes"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3 md:col-span-8">
            <h2 className="text-3xl font-bold-cond text-primary mb-2">
              HIIT Workout Classes We Offer:
            </h2>

            {hiitClasses.map((classItem) => (
              <div key={classItem.Id} className="">
                <h3 className="text-base text-secondary">
                  <span className="font-bold">{classItem.name} </span>
                  <span className="font-regular">{classItem.description}</span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
