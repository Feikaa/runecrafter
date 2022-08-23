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
  const [lvl, setLvl] = useState(0);

  return (
    <div className="App">
      <TitleSection />
      <UpgradesSection />
      <XPSection progress={progress}/>
      <RunesSection />
      <ClickSection inventory={inventory} setInventory={setInventory} lvl={lvl} setLvl={setLvl}/>
      <RunecraftSection lvl={lvl} inventory={inventory} setInventory={setInventory}/>
      <InventorySection inventory={inventory}/>
    </div>
  );
}

export default App;
