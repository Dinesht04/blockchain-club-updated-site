"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import TeamData from "./TeamData";
import { TiltCard } from "./TiltCard";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const { teamName } = useParams();

  useEffect(() => {
    const teamData = TeamData();
    setTeams(teamData);
    const teamIndex = teamData.findIndex((team) => team.name === teamName);
    if (teamIndex !== -1) {
      setCurrentTeamIndex(teamIndex);
    }

    const intervalId = setInterval(nextTeam, 10000);

    return () => clearInterval(intervalId);
  }, [teamName]);

  const nextTeam = () => {
    setCurrentTeamIndex((prevIndex) =>
      prevIndex === teams.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTeam = () => {
    setCurrentTeamIndex((prevIndex) =>
      prevIndex === 0 ? teams.length - 1 : prevIndex - 1
    );
  };

  const currentTeam = teams[currentTeamIndex];

  return (
    <div>
      <h1 className="text-lg md:text-5xl font-normal  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 my-6">
        OUR TEAMS
      </h1>
      <div className="flex justify-center items center">
        <div className="flex items-center">
          <ArrowLeft
            onClick={prevTeam}
            className="text-white mr-8 hover:scale-110 transition-transform duration-200"
          />
        </div>
        <div>
          {currentTeam && (
            <Link to={`/about/${currentTeam.name}`}>
              <TiltCard
                teamName={currentTeam.name}
                key={currentTeam.id}
                className="flex justify-center items-center"
              >
                <h2 className="text-white text-4xl">{currentTeam.name}</h2>
              </TiltCard>
            </Link>
          )}
        </div>
        <div className="flex items-center">
          <ArrowRight
            onClick={nextTeam}
            className="text-white ml-8 hover:scale-110 transition-transform duration-200"
          />
        </div>
      </div>
      <Dots
        teams={teams}
        currentTeamIndex={currentTeamIndex}
        setCurrentTeamIndex={setCurrentTeamIndex}
      />
    </div>
  );
}

const Dots = ({ teams, currentTeamIndex, setCurrentTeamIndex }) => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {teams.map((team, index) => (
        <button
          key={team.id}
          className={`h-3 w-3 rounded-full ${
            index === currentTeamIndex
              ? "bg-orange-500 animate-pulse"
              : "bg-gray-300"
          } transition duration-300`}
          onClick={() => setCurrentTeamIndex(index)}
          aria-label={`Go to team ${team.name}`}
        />
      ))}
    </div>
  );
};

export default Teams;
