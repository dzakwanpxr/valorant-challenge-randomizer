import { useState, useEffect } from "react";
import Challenge from "./components/Challenge";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Rules from "./components/Rules";
import Welcome from "./components/Welcome";

function App() {
  const [agent, setAgent] = useState({ id: "", name: "", icon: "" });
  const [rank, setRank] = useState({ id: "", name: "", icon: "" });
  const [weapon, setWeapon] = useState({ id: "", name: "", icon: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [isStarted, setIsStarted] = useState(true);

  function loadChallenge() {
    setIsLoading(true);
    const getAgent = async () => {
      const data = await fetch("https://valorant-api.com/v1/agents");
      const json = await data.json();
      const randomAgent = Math.floor(Math.random() * json.data.length);
      setAgent({
        id: json.data[randomAgent].uuid,
        name: json.data[randomAgent].displayName,
        icon: json.data[randomAgent].displayIcon,
      });
    };

    const getRank = async () => {
      const data = await fetch("https://valorant-api.com/v1/competitivetiers");
      const json = await data.json();
      const tiersData = json.data[4].tiers;
      const randomRank = Math.floor(
        Math.random() * json.data[4].tiers.length + 3
      );
      setRank({
        id: tiersData[randomRank].tier,
        name: tiersData[randomRank].tierName,
        icon: tiersData[randomRank].largeIcon,
      });
    };

    const getWeapon = async () => {
      const data = await fetch("https://valorant-api.com/v1/weapons");
      const json = await data.json();
      const randomWeapon = Math.floor(Math.random() * json.data.length);
      setWeapon({
        id: json.data[randomWeapon].uuid,
        name: json.data[randomWeapon].displayName,
        icon: json.data[randomWeapon].displayIcon,
      });
    };
    getAgent();
    getRank();
    getWeapon();
    setIsLoading(false);
  }

  function handleStart() {
    setIsStarted(false);
  }

  useEffect(() => {
    loadChallenge();
  }, []);

  return (
    <div className="app bg-darkestred h-max box-border">
      <Navbar />
      {isStarted ? (
        <Welcome handleClick={handleStart} />
      ) : (
        <Challenge
          agent={agent}
          rank={rank}
          weapon={weapon}
          handleClick={loadChallenge}
        />
      )}
      <Rules />
      <Footer />
    </div>
  );
}

export default App;
