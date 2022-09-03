import TitleSection from "./sections/TitleSection";
import ClickSection from "./sections/ClickSection";
import UpgradesSection from "./sections/UpgradesSection";
import RunecraftSection from "./sections/RunecraftSection";
import InventorySection from "./sections/InventorySection";
import XPSection from "./sections/XPSection";
import RunesSection from "./sections/RunesSection";
import ChooseSection from "./sections/ChooseSection";
import PrestigeSection from "./sections/PrestigeSection";
import ModeSection from "./sections/ModeSection";
import './App.css';
import React, { useEffect, useState } from 'react';
import { Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, createTheme, ThemeProvider, IconButton, FormLabel, RadioGroup, FormControl, FormControlLabel, Radio } from "@mui/material";
import Item from "./class/Item";
import useInterval from "react-useinterval";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

function App() {

  const notify = () => {
    toast.info("Progress Saved!", {
      position: toast.POSITION.BOTTOM_CENTER,
      pauseOnFocusLoss: false,
      pauseOnHover: false
    })
  }

  // Modes
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem("mode");
    return saved || "normal"
  })

  const [inventory, setInventory] = useState(() => {
    var inv = []
    if (mode === "normal") {
      for (var i = 0; i < JSON.parse(localStorage.getItem("inventory")); i++) {
        inv = [...inv, (<Item item={localStorage.getItem("essenceType")} />)]
      }
    } else if (mode === "zmi") {
      for (var i = 0; i < JSON.parse(localStorage.getItem("inventoryZMI")); i++) {
        inv = [...inv, (<Item item={localStorage.getItem("essenceTypeZMI")} />)]
      }
    }
    return inv || []
  });
  const [infinv, setInfinv] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("infinv");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("infinvZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [progress, setProgress] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("progress");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("progressZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [lvl, setLvl] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("lvl");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("lvlZMI");
    }
    const value = JSON.parse(saved);
    return value || 1
  });
  const [prestige, setPrestige] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("prestige");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("prestigeZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [xp, setXp] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("xp");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("xpZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  });

  const [air, setAir] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("air");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("airZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [earth, setEarth] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("earth");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("earthZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [water, setWater] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("water");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("waterZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [fire, setFire] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("fire");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("fireZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [astral, setAstral] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("astral");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("astralZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [law, setLaw] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("law");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("lawZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [blood, setBlood] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("blood");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("bloodZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [wrath, setWrath] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("wrath");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("wrathZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  });

  const [elemental, setElemental] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("elemental");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("elementalZMI");
    }
    const value = JSON.parse(saved)
    return value || 0
  })
  const [catalytic, setCatalytic] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("catalytic");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("catalyticZMI");
    }
    const value = JSON.parse(saved)
    return value || 0
  })

  const [runename, setRunename] = useState('none');
  const [extra, setExtra] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("extra");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("extraZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  });

  const [autoclick, setAutoclick] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("autoclick");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("autoclickZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [autoaltar, setAutoaltar] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("autoaltar");
    } else if (mode === "zmi") {
      saved = 0;
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [pouch, setPouch] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("pouch");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("pouchZMI");
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [essenceType, setEssenceType] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("essenceType");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("essenceTypeZMI");
    }
    return saved || "rune_essence"
  });
  const [daeyalt, setDaeyalt] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("daeyalt");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("daeyaltZMI");
    }
    const value = JSON.parse(saved);
    return value === true
  });
  const [dark, setDark] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("dark");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("darkZMI");
    }
    const value = JSON.parse(saved);
    return value === true
  });

  const [hat, setHat] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("hat");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("hatZMI");
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [top, setTop] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("top");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("topZMI");
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [bottom, setBottom] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("bottom");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("bottomZMI");
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [boots, setBoots] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("boots");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("bootsZMI");
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [ouraniaAltar, setOuraniaAltar] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("ouraniaAltar");
    } else if (mode === "zmi") {
      saved = true;
    }
    const value = JSON.parse(saved);
    return value === true
  })

  // Prestige Upgrades
  const [combination, setCombination] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("combination");
    } else if (mode === "zmi") {
      saved = false;
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [primordial, setPrimordial] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("primordial");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("primordialZMI");
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [pegasian, setPegasian] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("pegasian");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("pegasianZMI");
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [eternal, setEternal] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("eternal");
    } else if (mode === "zmi") {
      saved = localStorage.getItem("eternalZMI");
    }
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
    localStorage.setItem("infinv", JSON.stringify(infinv));
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

    localStorage.setItem("mode", mode);

    localStorage.setItem("combination", JSON.stringify(combination));
    localStorage.setItem("primordial", JSON.stringify(primordial));
    localStorage.setItem("pegasian", JSON.stringify(pegasian));
    localStorage.setItem("eternal", JSON.stringify(eternal));

    localStorage.setItem("essenceType", essenceType);
    localStorage.setItem("daeyalt", daeyalt);
    localStorage.setItem("dark", dark);

    notify();
  }

  function saveZMI() {
    localStorage.setItem("inventoryZMI", inventory.length);
    localStorage.setItem("infinvZMI", JSON.stringify(infinv));
    localStorage.setItem("progressZMI", JSON.stringify(progress));
    localStorage.setItem("lvlZMI", JSON.stringify(lvl));
    localStorage.setItem("prestigeZMI", JSON.stringify(prestige));
    localStorage.setItem("xpZMI", JSON.stringify(xp));

    localStorage.setItem("airZMI", JSON.stringify(air));
    localStorage.setItem("earthZMI", JSON.stringify(earth));
    localStorage.setItem("waterZMI", JSON.stringify(water));
    localStorage.setItem("fireZMI", JSON.stringify(fire));
    localStorage.setItem("astralZMI", JSON.stringify(astral));
    localStorage.setItem("lawZMI", JSON.stringify(law));
    localStorage.setItem("bloodZMI", JSON.stringify(blood));
    localStorage.setItem("wrathZMI", JSON.stringify(wrath));

    localStorage.setItem("elementalZMI", JSON.stringify(elemental));
    localStorage.setItem("catalyticZMI", JSON.stringify(catalytic));

    localStorage.setItem("extraZMI", JSON.stringify(extra));

    localStorage.setItem("autoclickZMI", JSON.stringify(autoclick));
    localStorage.setItem("pouchZMI", JSON.stringify(pouch));
    localStorage.setItem("hatZMI", JSON.stringify(hat));
    localStorage.setItem("topZMI", JSON.stringify(top));
    localStorage.setItem("bottomZMI", JSON.stringify(bottom));
    localStorage.setItem("bootsZMI", JSON.stringify(boots));

    localStorage.setItem("mode", mode);

    localStorage.setItem("primordialZMI", JSON.stringify(primordial));
    localStorage.setItem("pegasianZMI", JSON.stringify(pegasian));
    localStorage.setItem("eternalZMI", JSON.stringify(eternal));

    localStorage.setItem("essenceTypeZMI", essenceType);
    localStorage.setItem("daeyaltZMI", daeyalt);
    localStorage.setItem("darkZMI", dark);

    notify();
  }

  const handleRadioChange = (event) => {
    setEssenceType(event.target.value);
    setInventory([]);
    setExtra(0);
  }

  // Saving progress
  useInterval(() => {
    if (mode === "normal") {
      save();
    } else if (mode === "zmi") {
      saveZMI();
    }
  }, 60000);

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <ToastContainer />
      <Button onClick={() => {
        if (mode === "normal") {
          save();
        } else if (mode === "zmi") {
          saveZMI();
        }
      }} sx={{position: "fixed", left: "20px", top: "2px", color: "#B03904"}}>Save</Button>
      <IconButton sx={{ position: "fixed", left: "80px", color: "#B03904"}} component="label" onClick={() => {
        setMute(!mute)
      }}>
        {mute ? <VolumeOffIcon></VolumeOffIcon> : <VolumeUpIcon></VolumeUpIcon>}
      </IconButton>

      {(!daeyalt && !dark) ? "" : <FormControl sx={{ border: 1, position: "fixed", left: "20px", top: "50px", color: "white"}}>
        <FormLabel sx={{ color: "white", textAlign: "left" }}>Essence</FormLabel>
        <RadioGroup
          defaultValue={essenceType}
          value={essenceType}
          onChange={handleRadioChange}>
          <FormControlLabel value="rune_essence" control={<Radio />} label="Rune"></FormControlLabel>
          {daeyalt ? <FormControlLabel value="daeyalt_essence" control={<Radio />} label="Daeyalt"></FormControlLabel> : ""}
          {dark ? <FormControlLabel value="dark_essence" control={<Radio />} label="Dark"></FormControlLabel> : ""}
        </RadioGroup>
      </FormControl>}

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
      <TitleSection mode={mode}/>
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
      {lvl >= 99 || prestige >= 1 ? <PrestigeSection prestige={prestige} lvl={lvl} elemental={elemental} catalytic={catalytic} setElemental={setElemental} setCatalytic={setCatalytic}
                                                     air={air} earth={earth} water={water} fire={fire} astral={astral} law={law} blood={blood} wrath={wrath}
                                                     mode={mode} setMode={setMode}
                                                     combination={combination} setCombination={setCombination}
                                                     primordial={primordial} setPrimordial={setPrimordial}
                                                     pegasian={pegasian} setPegasian={setPegasian}
                                                     eternal={eternal} setEternal={setEternal} setEssenceType={setEssenceType}/> : ""}
      {(prestige < 1 && mode === "normal") ? "" : <ModeSection lvl={lvl} prestige={prestige} mode={mode}></ModeSection> }
      <UpgradesSection lvl={lvl} prestige={prestige} air={air} setAir={setAir} earth={earth} setEarth={setEarth} water={water} setWater={setWater} fire={fire} setFire={setFire} astral={astral} setAstral={setAstral}
                       law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath}
                       autoclick={autoclick} setAutoclick={setAutoclick}
                       autoaltar={autoaltar} setAutoaltar={setAutoaltar}
                       pouch={pouch} setPouch={setPouch}
                       daeyalt={daeyalt} setDaeyalt={setDaeyalt} dark={dark} setDark={setDark}
                       hat={hat} setHat={setHat}
                       top={top} setTop={setTop}
                       bottom={bottom} setBottom={setBottom}
                       boots={boots} setBoots={setBoots}
                       essenceType={essenceType} setEssenceType={setEssenceType} eternal={eternal} setInventory={setInventory} setExtra={setExtra}
                       ouraniaAltar={ouraniaAltar} setOuraniaAltar={setOuraniaAltar} mode={mode}/>
      {autoaltar ? <ChooseSection runename={runename} setRunename={setRunename} autoaltar={autoaltar} ouraniaAltar={ouraniaAltar}/> : ""}
      </Grid>
      <XPSection progress={progress} lvl={lvl} xp={xp} prestige={prestige}/>
      <RunesSection prestige={prestige} air={air} earth={earth} water={water} fire={fire} astral={astral} law={law} blood={blood} wrath={wrath} 
                    elemental={elemental} catalytic={catalytic}
                    bonus={bonus} hat={hat} top={top} bottom={bottom} boots={boots}/>
      <ClickSection mute={mute} inventory={inventory} setInventory={setInventory} autoclick={autoclick} pouch={pouch} extra={extra} setExtra={setExtra} essenceType={essenceType}
                    eternal={eternal} infinv={infinv} setInfinv={setInfinv} primordial={primordial} pegasian={pegasian}
                    air={air} setAir={setAir} earth={earth} setEarth={setEarth} water={water} setWater={setWater} fire={fire} setFire={setFire} astral={astral} setAstral={setAstral}
                    law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath}
                    bonus={bonus}/>
      <RunecraftSection mute={mute} lvl={lvl} setLvl={setLvl} inventory={inventory} setInventory={setInventory} xp={xp} setXp={setXp} progress={progress} setProgress={setProgress}
                        air={air} setAir={setAir} earth={earth} setEarth={setEarth} water={water} setWater={setWater} fire={fire} setFire={setFire} astral={astral} setAstral={setAstral}
                        law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath}
                        autoaltar={autoaltar} runename={runename}
                        pouch={pouch} extra={extra} setExtra={setExtra}
                        hat={hat} top={top} bottom={bottom} boots={boots} bonus={bonus} setBonus={setBonus}
                        essenceType={essenceType} ouraniaAltar={ouraniaAltar}
                        eternal={eternal} infinv={infinv} setInfinv={setInfinv}
                        combination={combination} mode={mode}/>
      <InventorySection inventory={inventory} extra={extra} pouch={pouch} infinv={infinv} eternal={eternal} essenceType={essenceType}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
