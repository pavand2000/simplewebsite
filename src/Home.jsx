import React from "react";

const Home = () => {
  const events = [
    {
      id: 1,
      title: "Game Tournament",
      date: "October 15, 2023",
      location: "Gaming Center",
      description: "Join us for an exciting game tournament!",
    },
    {
      id: 2,
      title: "Community Meetup",
      date: "November 5, 2023",
      location: "Community Hall",
      description: "A casual meetup for gamers and enthusiasts.",
    },
    {
      id: 3,
      title: "LAN Party",
      date: "December 10, 2023",
      location: "LAN Gaming Arena",
      description: "Bring your PC for an epic LAN party!",
    },
  ];

  return (
    <div className="home">
      <h1>Welcome to Our Game Organization</h1>
      <p>Explore upcoming events and join the fun!</p>

      <div className="event-list">
        {events.map((event) => (
          <div className="event" key={event.id}>
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
