"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EventData from "./EventData";
import AOS from "aos";
import "aos/dist/aos.css";
import "./EventImages.css";

function EventImages() {
  const [event, setEvent] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    AOS.init({ duration: 2000 });
    if (!name) {
      return;
    }
    const eventData = EventData();
    const foundEvent = eventData.find((event) => event.name === name);
    setEvent(foundEvent);
  }, [name]);

  if (!event) {
    return (
      <div className="text-3xl flex justify-center text-white">Loading...</div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl pb-10" data-aos="fade-down">
        {event.name}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-5">
        {event.images.map((image, index) => (
          <div
            className="relative border-4 border-black cursor-pointer flex items-center justify-center image-container"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="border-4 border-orange-500 flex items-center justify-center h-full w-full image-inner-container">
              <img
                src={image}
                alt={`Event Image ${index + 1}`}
                className="max-w-full max-h-full object-contain image"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-orange-500 p-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventImages;
