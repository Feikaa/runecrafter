import TitleSection from "./sections/TitleSection";
import ClickSection from "./sections/ClickSection";
import UpgradesSection from "./sections/UpgradesSection";
import RunecraftSection from "./sections/RunecraftSection";
import InventorySection from "./sections/InventorySection";
import XPSection from "./sections/XPSection";
import RunesSection from "./sections/RunesSection";
import ChooseSection from "./sections/ChooseSection";
import './App.css';
import React, { useEffect, useState } from 'react';
import { Grid } from "@mui/material";
import Item from "./class/Item";
import { Button } from "@mui/material";

function App() {

  const [inventory, setInventory] = useState(() => {
    var inv = []
    for (var i = 0; i < JSON.parse(localStorage.getItem("inventory")); i++) {
      inv = [...inv, (<Item item={localStorage.getItem("essenceType")} />)]
    }
    return inv || []
  });
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("progress");
    const value = JSON.parse(saved);
    return value || 0
  });
  const [lvl, setLvl] = useState(() => {
    const saved = localStorage.getItem("lvl");
    const value = JSON.parse(saved);
    return value || 1
  });
  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem("xp");
    const value = JSON.parse(saved);
    return value || 0
  });

  const [air, setAir] = useState(() => {
    const saved = localStorage.getItem("air");
    const value = JSON.parse(saved);
    return value || 0
  });
  const [earth, setEarth] = useState(() => {
    const saved = localStorage.getItem("earth");
    const value = JSON.parse(saved);
    return value || 0
  });
  const [cosmic, setCosmic] = useState(() => {
    const saved = localStorage.getItem("cosmic");
    const value = JSON.parse(saved);
    return value || 0
  });
  const [astral, setAstral] = useState(() => {
    const saved = localStorage.getItem("astral");
    const value = JSON.parse(saved);
    return value || 0
  });
  const [law, setLaw] = useState(() => {
    const saved = localStorage.getItem("law");
    const value = JSON.parse(saved);
    return value || 0
  });
  const [blood, setBlood] = useState(() => {
    const saved = localStorage.getItem("blood");
    const value = JSON.parse(saved);
    return value || 0
  });
  const [wrath, setWrath] = useState(() => {
    const saved = localStorage.getItem("wrath");
    const value = JSON.parse(saved);
    return value || 0
  });

  const [runename, setRunename] = useState('none');
  const [extra, setExtra] = useState(() => {
    const saved = localStorage.getItem("extra");
    const value = JSON.parse(saved);
    return value || 0
  });

  const [autoclick, setAutoclick] = useState(() => {
    const saved = localStorage.getItem("autoclick");
    const value = JSON.parse(saved);
    return value || 0
  });
  const [autoaltar, setAutoaltar] = useState(() => {
    const saved = localStorage.getItem("autoaltar");
    const value = JSON.parse(saved);
    return value || 0
  });
  const [pouch, setPouch] = useState(() => {
    const saved = localStorage.getItem("pouch");
    const value = JSON.parse(saved);
    return value === true
  });
  const [essenceType, setEssenceType] = useState(() => {
    const saved = localStorage.getItem("essenceType");
    return saved || "rune_essence"
  });

  const [hat, setHat] = useState(() => {
    const saved = localStorage.getItem("hat");
    const value = JSON.parse(saved);
    return value === true
  })
  const [top, setTop] = useState(() => {
    const saved = localStorage.getItem("top");
    const value = JSON.parse(saved);
    return value === true
  })
  const [bottom, setBottom] = useState(() => {
    const saved = localStorage.getItem("bottom");
    const value = JSON.parse(saved);
    return value === true
  })
  const [boots, setBoots] = useState(() => {
    const saved = localStorage.getItem("boots");
    const value = JSON.parse(saved);
    return value === true
  })
  const [bonus, setBonus] = useState(1);

  // Saving progress
  useEffect(() => {
    localStorage.setItem("inventory", inventory.length);
  }, [inventory])

  useEffect(() => {
    localStorage.setItem("progress", JSON.stringify(progress));
  }, [progress])

  useEffect(() => {
    localStorage.setItem("lvl", JSON.stringify(lvl));
  }, [lvl])

  useEffect(() => {
    localStorage.setItem("xp", JSON.stringify(xp));
  }, [xp])

  useEffect(() => {
    localStorage.setItem("air", JSON.stringify(air));
    localStorage.setItem("earth", JSON.stringify(earth));
    localStorage.setItem("cosmic", JSON.stringify(cosmic));
    localStorage.setItem("astral", JSON.stringify(astral));
    localStorage.setItem("law", JSON.stringify(law));
    localStorage.setItem("blood", JSON.stringify(blood));
    localStorage.setItem("wrath", JSON.stringify(wrath));
  }, [air, earth, cosmic, astral, law, blood, wrath])

  useEffect(() => {
    localStorage.setItem("extra", JSON.stringify(extra));
  }, [extra])

  useEffect(() => {
    localStorage.setItem("autoclick", JSON.stringify(autoclick));
    localStorage.setItem("autoaltar", JSON.stringify(autoaltar));
    localStorage.setItem("pouch", JSON.stringify(pouch));
    localStorage.setItem("hat", JSON.stringify(hat));
    localStorage.setItem("top", JSON.stringify(top))
    localStorage.setItem("bottom", JSON.stringify(bottom))
    localStorage.setItem("boots", JSON.stringify(boots))
  }, [autoclick, autoaltar, pouch, hat, top, bottom, boots])

  useEffect(() => {
    localStorage.setItem("essenceType", essenceType);
  }, [essenceType])

  return (
    <div className="App">
      <Button onClick={() => {
        if (window.confirm("Are you sure you want to reset? This will delete all our runes, inventory, etc.")) {
          localStorage.clear();
          window.location.reload(false);
        }
        }} sx={{position: "fixed", left: "0px", color: "#B03904"}}>Reset</Button>
      <TitleSection />
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
      <UpgradesSection air={air} setAir={setAir} earth={earth} setEarth={setEarth} cosmic={cosmic} setCosmic={setCosmic} astral={astral} setAstral={setAstral}
                       law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath}
                       autoclick={autoclick} setAutoclick={setAutoclick}
                       autoaltar={autoaltar} setAutoaltar={setAutoaltar}
                       pouch={pouch} setPouch={setPouch}
                       hat={hat} setHat={setHat}
                       top={top} setTop={setTop}
                       bottom={bottom} setBottom={setBottom}
                       boots={boots} setBoots={setBoots}
                       essenceType={essenceType} setEssenceType={setEssenceType} setInventory={setInventory} setExtra={setExtra}/>
      {autoaltar ? <ChooseSection runename={runename} setRunename={setRunename} autoaltar={autoaltar}/> : ""}
      </Grid>
      <XPSection progress={progress} lvl={lvl} xp={xp}/>
      <RunesSection air={air} earth={earth} cosmic={cosmic} astral={astral} law={law} blood={blood} wrath={wrath} bonus={bonus} hat={hat} top={top} bottom={bottom} boots={boots}/>
      <ClickSection inventory={inventory} setInventory={setInventory} autoclick={autoclick} pouch={pouch} extra={extra} setExtra={setExtra} essenceType={essenceType}/>
      <RunecraftSection lvl={lvl} setLvl={setLvl} inventory={inventory} setInventory={setInventory} xp={xp} setXp={setXp} progress={progress} setProgress={setProgress}
                        air={air} setAir={setAir} earth={earth} setEarth={setEarth} cosmic={cosmic} setCosmic={setCosmic} astral={astral} setAstral={setAstral}
                        law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath}
                        autoaltar={autoaltar} runename={runename}
                        pouch={pouch} extra={extra} setExtra={setExtra}
                        hat={hat} top={top} bottom={bottom} boots={boots} bonus={bonus} setBonus={setBonus}
                        essenceType={essenceType}/>
      <InventorySection inventory={inventory} extra={extra} pouch={pouch}/>
    </div>
  );
}

export default App;
