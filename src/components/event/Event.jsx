"use client"
import { useEffect, useState } from "react";
import { BackgroundBoxesDemo } from "../BackgroundBoxes";
import Link from "next/link";
import EventData from "./EventData";

function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventData = EventData();
    setEvents(eventData);
  }, []);

  const recentEvent = events.slice(-1)[0];
  const pastEvents = events.slice(0, -1);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-4">
      <BackgroundBoxesDemo
        heading={"OUR PAST EVENTS"}
        subheading={"Check out our past events and relive the magic! "}
      />

      <h2 className="text-3xl font-bold mt-12">Latest Event</h2>
      <hr className="border-white mb-4 mx-auto w-1/2 mt-6" />
      {recentEvent && (
        <div className="relative w-full max-w-5xl mt-12" key={recentEvent.id}>
          {" "}
          <Link to={`/events/${recentEvent.name}`}>
            {" "}
            <img
              src={recentEvent.images[0]}
              alt="Large"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 backdrop-blur-lg flex justify-between">
              <p>{recentEvent.name}</p>
              <p>{recentEvent.date}</p>
            </div>
          </Link>
        </div>
      )}

      <div className="w-full max-w-5xl mt-8 text-center">
        <h2 className="text-3xl font-bold ">Past Events</h2>
        <hr className="border-white mt-2 mb-8 mx-auto w-1/2" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-5">
          {pastEvents.map((event, index) => (
            <Link to={`/events/${event.name}`} key={event.id}>
              <div className="relative border-4 border-black cursor-pointer ">
                <div className="border-4 border-orange-500 w-70 h-64">
                  <img
                    src={event.images[0]}
                    alt={`Event ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                  <span className="flex justify-between">
                    <p>{event.name}</p>
                    <p>{event.date}</p>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
