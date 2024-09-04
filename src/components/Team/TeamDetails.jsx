"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TeamData from "./TeamData";

function TeamDetails() {
  const [team, setTeam] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    if (!name) {
      return;
    }
    const teamData = TeamData();
    const foundTeam = teamData.find((team) => team.name === name);
    setTeam(foundTeam);
  }, [name]);

  if (!team) {
    return (
      <div className="text-3xl flex justify-center text-white">Loading...</div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl text-center text-white mb-4 underline">
        {team.name}
      </h2>
      <div className="flex justify-center flex-wrap mt-10">
        <div className="flex justify-center w-full flex-wrap">
          {team.members
            .filter(
              (member) =>
                member.position.toLowerCase() === "lead" ||
                member.position.toLowerCase() === "co-lead"
            )
            .map((member, index) => (
              <div
                key={index}
                className="w-[300px] sm:w-[250px] xs:w-[200px] rounded-md mx-4 mb-4 border border-gray-600"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[500px] sm:h-[400px] xs:h-[300px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="mt-3 text-lg text-gray-200">{member.name}</h1>
                  <p className="mt-3 text-lg text-gray-200">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center w-full flex-wrap mt-8">
          {team.members
            .filter(
              (member) =>
                member.position.toLowerCase() !== "lead" &&
                member.position.toLowerCase() !== "co-lead"
            )
            .map((member, index) => (
              <div
                key={index}
                className="w-[300px] sm:w-[250px] xs:w-[200px] rounded-md mx-4 mb-4 border border-gray-600"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[500px] sm:h-[400px] xs:h-[300px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="mt-3 text-lg text-gray-200">{member.name}</h1>
                  <p className="mt-3 text-lg text-gray-200">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TeamDetails;
