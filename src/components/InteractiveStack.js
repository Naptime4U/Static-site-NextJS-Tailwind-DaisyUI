"use client";
import { useState } from "react";

export default function SimpleCards({ activities = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-6 sm:gap-8 py-8 px-2">
      {activities.map((activity, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className={`relative w-11/12 sm:w-64 md:w-72 h-72 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-transform duration-300 ${isActive ? "scale-105" : "scale-95 hover:scale-100"
              }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            style={{
              backgroundImage: `url(${activity.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* filtro oscuro para leer bien el texto */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 p-4 h-full flex flex-col justify-center text-center text-white">
              <h2 className="text-lg sm:text-xl font-bold mb-2 drop-shadow-lg">
                {activity.name}
              </h2>
              <p className="text-sm opacity-90">{activity.description}</p>
            </div>
          </div>
        );
      })}
    </div>

  );
}
