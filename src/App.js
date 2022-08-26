import TitleSection from "./sections/TitleSection";
import ClickSection from "./sections/ClickSection";
import UpgradesSection from "./sections/UpgradesSection";
import RunecraftSection from "./sections/RunecraftSection";
import InventorySection from "./sections/InventorySection";
import XPSection from "./sections/XPSection";
import RunesSection from "./sections/RunesSection";
import ChooseSection from "./sections/ChooseSection";
import './App.css';
import React, { useState } from 'react';
import { Grid } from "@mui/material";

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

  const [runename, setRunename] = useState('air');

  const [autoclick, setAutoclick] = useState(false);
  const [autoaltar, setAutoaltar] = useState(false);

  return (
    <div className="App">
      <TitleSection />
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
      <UpgradesSection air={air} setAir={setAir} earth={earth} setEarth={setEarth} cosmic={cosmic} setCosmic={setCosmic} astral={astral} setAstral={setAstral}
                       law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath}
                       autoclick={autoclick} setAutoclick={setAutoclick}
                       autoaltar={autoaltar} setAutoaltar={setAutoaltar}/>
      {autoaltar ? <ChooseSection lvl={lvl} runename={runename} setRunename={setRunename}/> : ""}
      </Grid>
      <XPSection progress={progress} lvl={lvl}/>
      <RunesSection air={air} earth={earth} cosmic={cosmic} astral={astral} law={law} blood={blood} wrath={wrath}/>
      <ClickSection inventory={inventory} setInventory={setInventory} autoclick={autoclick}/>
      <RunecraftSection lvl={lvl} setLvl={setLvl} inventory={inventory} setInventory={setInventory} xp={xp} setXp={setXp} progress={progress} setProgress={setProgress}
                        air={air} setAir={setAir} earth={earth} setEarth={setEarth} cosmic={cosmic} setCosmic={setCosmic} astral={astral} setAstral={setAstral}
                        law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath}
                        autoaltar={autoaltar} runename={runename}/>
      <InventorySection inventory={inventory}/>
    </div>
  );
}

export default App;
