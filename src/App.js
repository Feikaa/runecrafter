import TitleSection from "./sections/TitleSection";
import ClickSection from "./sections/ClickSection";
import UpgradesSection from "./sections/UpgradesSection";
import RunecraftSection from "./sections/RunecraftSection";
import InventorySection from "./sections/InventorySection";
import XPSection from "./sections/XPSection";
import RunesSection from "./sections/RunesSection";
import './App.css';
import React, { useState } from 'react';

function App() {

  const [inventory, setInventory] = useState([]);
  const [progress, setProgress] = useState(0);
  const [lvl, setLvl] = useState(1);
  const [xp, setXp] = useState(0);

  const [air, setAir] = useState(0);
  const [earth, setEarth] = useState(0);
  const [cosmic, setCosmic] = useState(0);
  const [astral, setAstral] = useState(0);
  const [law, setLaw] = useState(0);
  const [blood, setBlood] = useState(0);
  const [wrath, setWrath] = useState(0);

  return (
    <div className="App">
      <TitleSection />
      <UpgradesSection />
      <XPSection progress={progress} lvl={lvl}/>
      <RunesSection air={air} earth={earth} cosmic={cosmic} astral={astral} law={law} blood={blood} wrath={wrath}/>
      <ClickSection inventory={inventory} setInventory={setInventory} />
      <RunecraftSection lvl={lvl} setLvl={setLvl} inventory={inventory} setInventory={setInventory} xp={xp} setXp={setXp} progress={progress} setProgress={setProgress}
                        air={air} setAir={setAir} earth={earth} setEarth={setEarth} cosmic={cosmic} setCosmic={setCosmic} astral={astral} setAstral={setAstral}
                        law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath}/>
      <InventorySection inventory={inventory}/>
    </div>
  );
}

export default App;
