import TitleSection from "./sections/TitleSection";
import ClickSection from "./sections/ClickSection";
import UpgradesSection from "./sections/UpgradesSection";
import RunecraftSection from "./sections/RunecraftSection";
import InventorySection from "./sections/InventorySection";
import XPSection from "./sections/XPSection";
import RunesSection from "./sections/RunesSection";
import ChooseSection from "./sections/ChooseSection";
import PrestigeSection from "./sections/PrestigeSection";
import './App.css';
import React, { useEffect, useState } from 'react';
import { Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, createTheme, ThemeProvider, IconButton } from "@mui/material";
import Item from "./class/Item";
import useInterval from "react-useinterval";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

function App() {

  const notify = () => {
    toast.info("Progress Saved!", {
      position: toast.POSITION.BOTTOM_CENTER
    })
  }

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
  const [prestige, setPrestige] = useState(() => {
    const saved = localStorage.getItem("prestige");
    const value = JSON.parse(saved);
    return value || 0
  })
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
  const [water, setWater] = useState(() => {
    const saved = localStorage.getItem("water");
    const value = JSON.parse(saved);
    return value || 0
  })
  const [fire, setFire] = useState(() => {
    const saved = localStorage.getItem("fire");
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

  const [elemental, setElemental] = useState(() => {
    const saved = localStorage.getItem("elemental");
    const value = JSON.parse(saved)
    return value || 0
  })
  const [catalytic, setCatalytic] = useState(() => {
    const saved = localStorage.getItem("catalytic");
    const value = JSON.parse(saved)
    return value || 0
  })

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
    return value || 0
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
  const [ouraniaAltar, setOuraniaAltar] = useState(() => {
    const saved = localStorage.getItem("ouraniaaltar");
    const value = JSON.parse(saved);
    return value === true
  })

  const [bonus, setBonus] = useState(1);
  const [mute, setMute] = useState(false);
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
}

const handleClose = () => {
    setOpen(false);
}

const theme = createTheme({
  components: {
      MuiDialog: {
          styleOverrides: {
              paper: {
                  backgroundColor: "var(--bs-body-color)",
                  color: "white",
              }
          }
      }
  }
})

  function save() {
    localStorage.setItem("inventory", inventory.length);
    localStorage.setItem("progress", JSON.stringify(progress));
    localStorage.setItem("lvl", JSON.stringify(lvl));
    localStorage.setItem("prestige", JSON.stringify(prestige));
    localStorage.setItem("xp", JSON.stringify(xp));

    localStorage.setItem("air", JSON.stringify(air));
    localStorage.setItem("earth", JSON.stringify(earth));
    localStorage.setItem("water", JSON.stringify(water));
    localStorage.setItem("fire", JSON.stringify(fire));
    localStorage.setItem("astral", JSON.stringify(astral));
    localStorage.setItem("law", JSON.stringify(law));
    localStorage.setItem("blood", JSON.stringify(blood));
    localStorage.setItem("wrath", JSON.stringify(wrath));

    localStorage.setItem("elemental", JSON.stringify(elemental));
    localStorage.setItem("catalytic", JSON.stringify(catalytic));

    localStorage.setItem("extra", JSON.stringify(extra));

    localStorage.setItem("autoclick", JSON.stringify(autoclick));
    localStorage.setItem("autoaltar", JSON.stringify(autoaltar));
    localStorage.setItem("pouch", JSON.stringify(pouch));
    localStorage.setItem("hat", JSON.stringify(hat));
    localStorage.setItem("top", JSON.stringify(top));
    localStorage.setItem("bottom", JSON.stringify(bottom));
    localStorage.setItem("boots", JSON.stringify(boots));
    localStorage.setItem("ouraniaaltar", JSON.stringify(ouraniaAltar));

    localStorage.setItem("essenceType", essenceType);

    notify();
  }

  // Saving progress
  useInterval(save, 300000);

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <ToastContainer />
      <Button onClick={save} sx={{position: "fixed", left: "20px", top: "2px", color: "#B03904"}}>Save</Button>
      <IconButton sx={{ position: "fixed", left: "80px", color: "#B03904"}} component="label" onClick={() => {
        setMute(!mute)
      }}>
        {mute ? <VolumeOffIcon></VolumeOffIcon> : <VolumeUpIcon></VolumeUpIcon>}
      </IconButton>
      <Button onClick={handleClickOpen} sx={{position: "fixed", right: "0px", color: "#B03904"}}>Reset</Button>
        <Dialog
        open={open}
        onClose={handleClose}>
            <DialogTitle>
                {"Reset ALL progress?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText color="white">
                    You will reset all your progress. You will lose all your runes, levels, upgrades, and prestige.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} sx={{color: "white"}}>No</Button>
                <Button onClick={() => {
                    localStorage.clear();
                    window.location.reload(false);
                }} autoFocus sx={{color: "white"}}>Yes</Button>
            </DialogActions>
        </Dialog>
      <TitleSection />
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
      {lvl >= 99 || prestige >= 1 ? <PrestigeSection prestige={prestige} lvl={lvl} elemental={elemental} catalytic={catalytic}
                                                     air={air} earth={earth} water={water} fire={fire} astral={astral} law={law} blood={blood} wrath={wrath}/> : ""}
      <UpgradesSection lvl={lvl} prestige={prestige} air={air} setAir={setAir} earth={earth} setEarth={setEarth} water={water} setWater={setWater} fire={fire} setFire={setFire} astral={astral} setAstral={setAstral}
                       law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath}
                       autoclick={autoclick} setAutoclick={setAutoclick}
                       autoaltar={autoaltar} setAutoaltar={setAutoaltar}
                       pouch={pouch} setPouch={setPouch}
                       hat={hat} setHat={setHat}
                       top={top} setTop={setTop}
                       bottom={bottom} setBottom={setBottom}
                       boots={boots} setBoots={setBoots}
                       essenceType={essenceType} setEssenceType={setEssenceType} setInventory={setInventory} setExtra={setExtra}
                       ouraniaAltar={ouraniaAltar} setOuraniaAltar={setOuraniaAltar}/>
      {autoaltar ? <ChooseSection runename={runename} setRunename={setRunename} autoaltar={autoaltar} ouraniaAltar={ouraniaAltar}/> : ""}
      </Grid>
      <XPSection progress={progress} lvl={lvl} xp={xp} prestige={prestige}/>
      <RunesSection prestige={prestige} air={air} earth={earth} water={water} fire={fire} astral={astral} law={law} blood={blood} wrath={wrath} 
                    elemental={elemental} catalytic={catalytic}
                    bonus={bonus} hat={hat} top={top} bottom={bottom} boots={boots}/>
      <ClickSection mute={mute} inventory={inventory} setInventory={setInventory} autoclick={autoclick} pouch={pouch} extra={extra} setExtra={setExtra} essenceType={essenceType}/>
      <RunecraftSection mute={mute} lvl={lvl} setLvl={setLvl} inventory={inventory} setInventory={setInventory} xp={xp} setXp={setXp} progress={progress} setProgress={setProgress}
                        air={air} setAir={setAir} earth={earth} setEarth={setEarth} water={water} setWater={setWater} fire={fire} setFire={setFire} astral={astral} setAstral={setAstral}
                        law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath}
                        autoaltar={autoaltar} runename={runename}
                        pouch={pouch} extra={extra} setExtra={setExtra}
                        hat={hat} top={top} bottom={bottom} boots={boots} bonus={bonus} setBonus={setBonus}
                        essenceType={essenceType} ouraniaAltar={ouraniaAltar}/>
      <InventorySection inventory={inventory} extra={extra} pouch={pouch}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
