import TitleSection from "./sections/TitleSection";
import ClickSection from "./sections/ClickSection";
import UpgradesSection from "./sections/UpgradesSection";
import RunecraftSection from "./sections/RunecraftSection";
import InventorySection from "./sections/InventorySection";
import './App.css';
import React, { useState } from 'react';

function App() {

  const [inventory, setInventory] = useState([]);

  return (
    <div className="App">
      <TitleSection />
      <ClickSection inventory={inventory} setInventory={setInventory}/>
      <UpgradesSection />
      <RunecraftSection />
      <InventorySection inventory={inventory} setInventory={setInventory}/>
    </div>
  );
}

export default App;
