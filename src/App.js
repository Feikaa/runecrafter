import TitleSection from "./sections/TitleSection";
import ClickSection from "./sections/ClickSection";
import UpgradesSection from "./sections/UpgradesSection";
import RunecraftSection from "./sections/RunecraftSection";
import InventorySection from "./sections/InventorySection";
import XPSection from "./sections/XPSection";
import RunesSection from "./sections/RunesSection";
import ChooseSection from "./sections/ChooseSection";
import ChooseSectionCombo from "./sections/ChooseSectionCombo";
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
import zmiIcon from "./icons/zmi.ico";
import ironmanIcon from "./icons/ironman.ico";

function App() {

  const [currentToast, setCurrentToast] = useState([]);

  const notify = () => {
    if (currentToast.length < 1) {
      const id = toast.success("Progress Saved!", {
        position: "top-right",
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        autoClose: 2000,
        onClose: () => {setCurrentToast([]);}
      });
      setCurrentToast([id]);
    }
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
    } else {
      for (var i = 0; i < JSON.parse(localStorage.getItem("inventory" + mode)); i++) {
        inv = [...inv, (<Item item={localStorage.getItem("essenceType" + mode)} />)]
      }
    }
    return inv || []
  });
  const [progress, setProgress] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("progress");
    } else {
      saved = localStorage.getItem("progress" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [lvl, setLvl] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("lvl");
    } else {
      saved = localStorage.getItem("lvl" + mode);
    }
    const value = JSON.parse(saved);
    return value || 1
  });
  const [prestige, setPrestige] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("prestige");
    } else {
      saved = localStorage.getItem("prestige" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [pBoost, setPBoost] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("pBoost");
    } else {
      saved = localStorage.getItem("pBoost" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [xp, setXp] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("xp");
    } else {
      saved = localStorage.getItem("xp" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [totalxp, setTotalxp] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("totalxp");
    } else {
      saved = localStorage.getItem("totalxp" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0;
  })
  const [nextxp, setNextxp] = useState(() => {
    var sum = 0;
    for (var i = 1; i < lvl+1; i++) {
        sum += Math.floor(i + 300 * Math.pow(2, i/7));
    }
    return sum
  })

  const [air, setAir] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("air");
    } else {
      saved = localStorage.getItem("air" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [earth, setEarth] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("earth");
    } else {
      saved = localStorage.getItem("earth" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [water, setWater] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("water");
    } else {
      saved = localStorage.getItem("water" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [fire, setFire] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("fire");
    } else {
      saved = localStorage.getItem("fire" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [astral, setAstral] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("astral");
    } else {
      saved = localStorage.getItem("astral" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [law, setLaw] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("law");
    } else {
      saved = localStorage.getItem("law" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [blood, setBlood] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("blood");
    } else {
      saved = localStorage.getItem("blood" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [wrath, setWrath] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("wrath");
    } else {
      saved = localStorage.getItem("wrath" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });

  const [elemental, setElemental] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("elemental");
    } else {
      saved = localStorage.getItem("elemental" + mode);
    }
    const value = JSON.parse(saved)
    return value || 0
  })
  const [catalytic, setCatalytic] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("catalytic");
    } else {
      saved = localStorage.getItem("catalytic" + mode);
    }
    const value = JSON.parse(saved)
    return value || 0
  })

  const [runename, setRunename] = useState('none');
  const [extra, setExtra] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("extra");
    } else {
      saved = localStorage.getItem("extra" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });

  const [autoclick, setAutoclick] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("autoclick");
    } else {
      saved = localStorage.getItem("autoclick" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [airLvl, setAirLvl] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("airlvl");
    } else {
      saved = localStorage.getItem("airlvl" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [earthLvl, setEarthLvl] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("earthlvl");
    } else {
      saved = localStorage.getItem("earthlvl" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [waterLvl, setWaterLvl] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("waterlvl");
    } else {
      saved = localStorage.getItem("waterlvl" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [fireLvl, setFireLvl] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("firelvl");
    } else {
      saved = localStorage.getItem("firelvl" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [astralLvl, setAstralLvl] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("astrallvl");
    } else {
      saved = localStorage.getItem("astrallvl" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [lawLvl, setLawLvl] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("lawlvl");
    } else {
      saved = localStorage.getItem("lawlvl" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [bloodLvl, setBloodLvl] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("bloodlvl");
    } else {
      saved = localStorage.getItem("bloodlvl" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [wrathLvl, setWrathLvl] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("wrathlvl");
    } else {
      saved = localStorage.getItem("wrathlvl" + mode);
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
    } else {
      saved = localStorage.getItem("autoaltar" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [pouch, setPouch] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("pouch");
    } else {
      saved = localStorage.getItem("pouch" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  });
  const [essenceType, setEssenceType] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("essenceType");
    } else {
      saved = localStorage.getItem("essenceType" + mode);
    }
    return saved || "rune_essence"
  });
  const [daeyalt, setDaeyalt] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("daeyalt");
    } else {
      saved = localStorage.getItem("daeyalt" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  });
  const [dark, setDark] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("dark");
    } else {
      saved = localStorage.getItem("dark" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  });

  const [hat, setHat] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("hat");
    } else {
      saved = localStorage.getItem("hat" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [top, setTop] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("top");
    } else {
      saved = localStorage.getItem("top" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [bottom, setBottom] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("bottom");
    } else {
      saved = localStorage.getItem("bottom" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [boots, setBoots] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("boots");
    } else {
      saved = localStorage.getItem("boots" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [airGloves, setAirGloves] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("airgloves");
    } else {
      saved = localStorage.getItem("airgloves" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0;
  })
  const [earthGloves, setEarthGloves] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("earthgloves");
    } else {
      saved = localStorage.getItem("earthgloves" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0;
  })
  const [waterGloves, setWaterGloves] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("watergloves");
    } else {
      saved = localStorage.getItem("watergloves" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0;
  })
  const [fireGloves, setFireGloves] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("firegloves");
    } else {
      saved = localStorage.getItem("firegloves" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0;
  })
  const [bloodEssence, setBloodEssence] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("bloodEssence");
    } else {
      saved = localStorage.getItem("bloodEssence" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0;
  })
  const [lawOutfit, setLawOutfit] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("lawoutfit");
    } else {
      saved = localStorage.getItem("lawoutfit" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [bloodOutfit, setBloodOutfit] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("bloodoutfit");
    } else {
      saved = localStorage.getItem("bloodoutfit" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [wrathOutfit, setWrathOutfit] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("wrathoutfit");
    } else {
      saved = localStorage.getItem("wrathoutfit" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [infinityOutfit, setInfinityOutfit] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("infinityoutfit");
    } else {
      saved = localStorage.getItem("infinityoutfit" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [battlestaff, setBattlestaff] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("battlestaff");
    } else {
      saved = localStorage.getItem("battlestaff" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [timer, setTimer] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("timer");
    } else {
      saved = localStorage.getItem("timer" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [ouraniaAltar, setOuraniaAltar] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("ouraniaAltar");
    } else if (mode === "zmi") {
      saved = true;
    } else {
      saved = localStorage.getItem("ouraniaAltar" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [elementalOffer, setElementalOffer] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("elementaloffer");
    } else {
      saved = localStorage.getItem("elementaloffer" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [catalyticOffer, setCatalyticOffer] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("catalyticoffer");
    } else {
      saved = localStorage.getItem("catalyticoffer" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })

  // Prestige Upgrades
  const [runecraftCape, setRunecraftCape] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("runecraftcape");
    } else {
      saved = localStorage.getItem("runecraftcape" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [combination, setCombination] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("combination");
    } else if (mode === "zmi") {
      saved = false;
    } else {
      saved = localStorage.getItem("combination" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [ringofElements, setRingofElements] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("ringoftheelements");
    } else {
      saved = localStorage.getItem("ringoftheelements" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [ringCharge, setRingCharge] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("ringcharge");
    } else {
      saved = localStorage.getItem("ringcharge" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [smashing, setSmashing] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("smashing");
    } else {
      saved = localStorage.getItem("smashing" + mode);
    }
    const value = JSON.parse(saved);
    return value || 0
  })
  const [primordial, setPrimordial] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("primordial");
    } else {
      saved = localStorage.getItem("primordial" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [pegasian, setPegasian] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("pegasian");
    } else {
      saved = localStorage.getItem("pegasian" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [eternal, setEternal] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("eternal");
    } else {
      saved = localStorage.getItem("eternal" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [airOrb, setAirOrb] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("airorb");
    } else {
      saved = localStorage.getItem("airorb" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [earthOrb, setEarthOrb] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("earthorb");
    } else {
      saved = localStorage.getItem("earthorb" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [waterOrb, setWaterOrb] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("waterorb");
    } else {
      saved = localStorage.getItem("waterorb" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [fireOrb, setFireOrb] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("fireorb");
    } else {
      saved = localStorage.getItem("fireorb" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [astralOrb, setAstralOrb] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("astralorb");
    } else {
      saved = localStorage.getItem("astralorb" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [lawOrb, setLawOrb] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("laworb");
    } else {
      saved = localStorage.getItem("laworb" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [bloodOrb, setBloodOrb] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("bloodorb");
    } else {
      saved = localStorage.getItem("bloodorb" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [wrathOrb, setWrathOrb] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("wrathorb");
    } else {
      saved = localStorage.getItem("wrathorb" + mode);
    }
    const value = JSON.parse(saved);
    return value === true
  })
  const [staff, setStaff] = useState(() => {
    var saved;
    if (mode === "normal") {
      saved = localStorage.getItem("staff");
    } else {
      saved = localStorage.getItem("staff" + mode);
    }
    return saved || ""
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

  function save(currentMode) {
    localStorage.setItem("inventory" + currentMode, inventory.length);
    localStorage.setItem("progress" + currentMode, JSON.stringify(progress));
    localStorage.setItem("lvl" + currentMode, JSON.stringify(lvl));
    localStorage.setItem("prestige" + currentMode, JSON.stringify(prestige));
    localStorage.setItem("pBoost" + currentMode, JSON.stringify(pBoost));
    localStorage.setItem("xp" + currentMode, JSON.stringify(xp));
    localStorage.setItem("totalxp" + currentMode, JSON.stringify(totalxp));

    localStorage.setItem("air" + currentMode, JSON.stringify(air));
    localStorage.setItem("earth" + currentMode, JSON.stringify(earth));
    localStorage.setItem("water" + currentMode, JSON.stringify(water));
    localStorage.setItem("fire" + currentMode, JSON.stringify(fire));
    localStorage.setItem("astral" + currentMode, JSON.stringify(astral));
    localStorage.setItem("law" + currentMode, JSON.stringify(law));
    localStorage.setItem("blood" + currentMode, JSON.stringify(blood));
    localStorage.setItem("wrath" + currentMode, JSON.stringify(wrath));

    localStorage.setItem("elemental" + currentMode, JSON.stringify(elemental));
    localStorage.setItem("catalytic" + currentMode, JSON.stringify(catalytic));

    localStorage.setItem("extra" + currentMode, JSON.stringify(extra));

    localStorage.setItem("airgloves" + currentMode, JSON.stringify(airGloves));
    localStorage.setItem("earthgloves" + currentMode, JSON.stringify(earthGloves));
    localStorage.setItem("watergloves" + currentMode, JSON.stringify(waterGloves));
    localStorage.setItem("firegloves" + currentMode, JSON.stringify(fireGloves));

    localStorage.setItem("airlvl" + currentMode, JSON.stringify(airLvl));
    localStorage.setItem("earthlvl" + currentMode, JSON.stringify(earthLvl));
    localStorage.setItem("waterlvl" + currentMode, JSON.stringify(waterLvl));
    localStorage.setItem("firelvl" + currentMode, JSON.stringify(fireLvl));
    localStorage.setItem("astrallvl" + currentMode, JSON.stringify(astralLvl));
    localStorage.setItem("lawlvl" + currentMode, JSON.stringify(lawLvl));
    localStorage.setItem("bloodlvl" + currentMode, JSON.stringify(bloodLvl));
    localStorage.setItem("wrathlvl" + currentMode, JSON.stringify(wrathLvl));

    localStorage.setItem("autoclick" + currentMode, JSON.stringify(autoclick));
    localStorage.setItem("pouch" + currentMode, JSON.stringify(pouch));
    localStorage.setItem("hat" + currentMode, JSON.stringify(hat));
    localStorage.setItem("top" + currentMode, JSON.stringify(top));
    localStorage.setItem("bottom" + currentMode, JSON.stringify(bottom));
    localStorage.setItem("boots" + currentMode, JSON.stringify(boots));
    localStorage.setItem("bloodEssence" + currentMode, JSON.stringify(bloodEssence));

    localStorage.setItem("lawoutfit" + currentMode, JSON.stringify(lawOutfit));
    localStorage.setItem("bloodoutfit" + currentMode, JSON.stringify(bloodOutfit));
    localStorage.setItem("wrathoutfit" + currentMode, JSON.stringify(wrathOutfit));
    localStorage.setItem("infinityoutfit" + currentMode, JSON.stringify(infinityOutfit));

    localStorage.setItem("battlestaff" + currentMode, JSON.stringify(battlestaff));

    localStorage.setItem("timer" + currentMode, JSON.stringify(timer));

    localStorage.setItem("mode", mode);

    localStorage.setItem("runecraftcape" + currentMode, JSON.stringify(runecraftCape));
    localStorage.setItem("ringoftheelements" + currentMode, JSON.stringify(ringofElements));
    localStorage.setItem("ringcharge" + currentMode, JSON.stringify(ringCharge));
    localStorage.setItem("smashing" + currentMode, JSON.stringify(smashing));
    localStorage.setItem("primordial" + currentMode, JSON.stringify(primordial));
    localStorage.setItem("pegasian" + currentMode, JSON.stringify(pegasian));
    localStorage.setItem("eternal" + currentMode, JSON.stringify(eternal));
    localStorage.setItem("airorb" + currentMode, JSON.stringify(airOrb));
    localStorage.setItem("earthorb" + currentMode, JSON.stringify(earthOrb));
    localStorage.setItem("waterorb" + currentMode, JSON.stringify(waterOrb));
    localStorage.setItem("fireorb" + currentMode, JSON.stringify(fireOrb));
    localStorage.setItem("astralorb" + currentMode, JSON.stringify(astralOrb));
    localStorage.setItem("laworb" + currentMode, JSON.stringify(lawOrb));
    localStorage.setItem("bloodorb" + currentMode, JSON.stringify(bloodOrb));
    localStorage.setItem("wrathorb" + currentMode, JSON.stringify(wrathOrb));
    localStorage.setItem("staff" + currentMode, staff);

    localStorage.setItem("elementaloffer" + currentMode, JSON.stringify(elementalOffer));
    localStorage.setItem("catalyticoffer" + currentMode, JSON.stringify(catalyticOffer));

    localStorage.setItem("essenceType" + currentMode, essenceType);
    localStorage.setItem("daeyalt" + currentMode, daeyalt);
    localStorage.setItem("dark" + currentMode, dark);

    if (currentMode !== "zmi") {
      localStorage.setItem("autoaltar" + currentMode, JSON.stringify(autoaltar));
      localStorage.setItem("ouraniaaltar" + currentMode, JSON.stringify(ouraniaAltar));
      localStorage.setItem("combination" + currentMode, JSON.stringify(combination));
    }

    notify();
  }

  const favicon = document.getElementById("favicon");
  if (mode === "zmi") {
    favicon.href = zmiIcon;
  } else if (mode === "ironman") {
    favicon.href = ironmanIcon;
  }

  const handleRadioChange = (event) => {
    setEssenceType(event.target.value);
    setInventory([]);
    setExtra(0);
  }

  // Saving progress
  useInterval(() => {
    if (mode === "normal") {
      save("");
    } else {
      save(mode);
    }
  }, 300000);

  // Cooldown timer for rune generation
  useInterval(() => {
    if (infinityOutfit === 5 && timer > 0) {
      setTimer(timer - 1);
    }
  }, 1000)

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <ToastContainer />
      <Button onClick={() => {
        if (mode === "normal") {
          save("");
        } else {
          save(mode);
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
            <DialogTitle color="red">
                {"Reset ALL progress?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText color="white">
                    You will reset all your progress. You will lose all your runes, levels, upgrades, and prestige.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} sx={{color: "red"}}>No</Button>
                <Button onClick={() => {
                    localStorage.clear();
                    window.location.reload(false);
                }} autoFocus sx={{color: "green"}}>Yes</Button>
            </DialogActions>
        </Dialog>
      <TitleSection mode={mode}/>
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
      {(mode !== "ironman" && (air + earth + water + fire >= 10000 || astral + law + blood + wrath >= 10000 || prestige >= 1)) ? <PrestigeSection prestige={prestige} pBoost={pBoost} lvl={lvl} elemental={elemental} catalytic={catalytic} setElemental={setElemental} setCatalytic={setCatalytic}
                                                     air={air} setAir={setAir} earth={earth} setEarth={setEarth} water={water} setWater={setWater} fire={fire} setFire={setFire} astral={astral} setAstral={setAstral}
                                                     law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath}
                                                     mode={mode} setMode={setMode}
                                                     runecraftCape={runecraftCape} setRunecraftCape={setRunecraftCape}
                                                     combination={combination} setCombination={setCombination}
                                                     ringofElements={ringofElements} setRingofElements={setRingofElements}
                                                     autoclick={autoclick}
                                                     smashing={smashing} setSmashing={setSmashing}
                                                     primordial={primordial} setPrimordial={setPrimordial}
                                                     pegasian={pegasian} setPegasian={setPegasian}
                                                     eternal={eternal} setEternal={setEternal} setEssenceType={setEssenceType}
                                                     lawOutfit={lawOutfit} bloodOutfit={bloodOutfit} wrathOutfit={wrathOutfit}
                                                     airOrb={airOrb} setAirOrb={setAirOrb} earthOrb={earthOrb} setEarthOrb={setEarthOrb} waterOrb={waterOrb} setWaterOrb={setWaterOrb} fireOrb={fireOrb} setFireOrb={setFireOrb} astralOrb={astralOrb} setAstralOrb={setAstralOrb}
                                                     lawOrb={lawOrb} setLawOrb={setLawOrb} bloodOrb={bloodOrb} setBloodOrb={setBloodOrb} wrathOrb={wrathOrb} setWrathOrb={setWrathOrb}
                                                     staff={staff} setStaff={setStaff}/> : ""}
      {<ModeSection lvl={lvl} prestige={prestige} mode={mode} air={air} earth={earth} water={water} fire={fire} astral={astral} law={law} blood={blood} wrath={wrath}></ModeSection> }
      <UpgradesSection lvl={lvl} prestige={prestige} air={air} setAir={setAir} earth={earth} setEarth={setEarth} water={water} setWater={setWater} fire={fire} setFire={setFire} astral={astral} setAstral={setAstral}
                       law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath} combination={combination}
                       autoclick={autoclick} setAutoclick={setAutoclick}
                       airLvl={airLvl} setAirLvl={setAirLvl} earthLvl={earthLvl} setEarthLvl={setEarthLvl} waterLvl={waterLvl} setWaterLvl={setWaterLvl} fireLvl={fireLvl} setFireLvl={setFireLvl}
                       astralLvl={astralLvl} setAstralLvl={setAstralLvl} lawLvl={lawLvl} setLawLvl={setLawLvl} bloodLvl={bloodLvl} setBloodLvl={setBloodLvl} wrathLvl={wrathLvl} setWrathLvl={setWrathLvl}
                       autoaltar={autoaltar} setAutoaltar={setAutoaltar}
                       pouch={pouch} setPouch={setPouch}
                       airGloves={airGloves} setAirGloves={setAirGloves} earthGloves={earthGloves} setEarthGloves={setEarthGloves} waterGloves={waterGloves} setWaterGloves={setWaterGloves} fireGloves={fireGloves} setFireGloves={setFireGloves}
                       daeyalt={daeyalt} setDaeyalt={setDaeyalt} dark={dark} setDark={setDark} bloodEssence={bloodEssence} setBloodEssence={setBloodEssence}
                       hat={hat} setHat={setHat}
                       top={top} setTop={setTop}
                       bottom={bottom} setBottom={setBottom}
                       boots={boots} setBoots={setBoots}
                       lawOutfit={lawOutfit} setLawOutfit={setLawOutfit}
                       bloodOutfit={bloodOutfit} setBloodOutfit={setBloodOutfit}
                       wrathOutfit={wrathOutfit} setWrathOutfit={setWrathOutfit}
                       infinityOutfit={infinityOutfit} setInfinityOutfit={setInfinityOutfit}
                       elementalOffer={elementalOffer} setElementalOffer={setElementalOffer} catalyticOffer={catalyticOffer} setCatalyticOffer={setCatalyticOffer}
                       essenceType={essenceType} setEssenceType={setEssenceType} setInventory={setInventory} setExtra={setExtra} staff={staff}
                       ouraniaAltar={ouraniaAltar} setOuraniaAltar={setOuraniaAltar} mode={mode}/>
      {autoaltar > 0 ? (!combination ? <ChooseSection runename={runename} setRunename={setRunename} autoaltar={autoaltar} ouraniaAltar={ouraniaAltar}/> : <ChooseSectionCombo runename={runename} setRunename={setRunename} autoaltar={autoaltar} ouraniaAltar={ouraniaAltar}/>) : ""}
      </Grid>
      <XPSection progress={progress} lvl={lvl} xp={xp} prestige={prestige} pBoost={pBoost} totalxp={totalxp} nextxp={nextxp} setNextxp={setNextxp} runecraftCape={runecraftCape}/>
      <RunesSection prestige={prestige} air={air} earth={earth} water={water} fire={fire} astral={astral} law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath} 
                    elemental={elemental} catalytic={catalytic}
                    bonus={bonus} hat={hat} top={top} bottom={bottom} boots={boots}
                    lawOutfit={lawOutfit} bloodOutfit={bloodOutfit} wrathOutfit={wrathOutfit} infinityOutfit={infinityOutfit}
                    staff={staff}
                    timer={timer} setTimer={setTimer}/>
      <ClickSection mute={mute} inventory={inventory} setInventory={setInventory} autoclick={autoclick} smashing={smashing} pouch={pouch} extra={extra} setExtra={setExtra} essenceType={essenceType}
                    primordial={primordial} pegasian={pegasian}
                    air={air} setAir={setAir} earth={earth} setEarth={setEarth} water={water} setWater={setWater} fire={fire} setFire={setFire} astral={astral} setAstral={setAstral}
                    law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath}
                    bonus={bonus}
                    bloodOutfit={bloodOutfit} lawOutfit={lawOutfit} wrathOutfit={wrathOutfit} infinityOutfit={infinityOutfit}/>
      <RunecraftSection mute={mute} lvl={lvl} setLvl={setLvl} prestige={prestige} pBoost={pBoost} inventory={inventory} setInventory={setInventory} xp={xp} setXp={setXp} totalxp={totalxp} setTotalxp={setTotalxp} 
                        progress={progress} setProgress={setProgress}
                        air={air} setAir={setAir} earth={earth} setEarth={setEarth} water={water} setWater={setWater} fire={fire} setFire={setFire} astral={astral} setAstral={setAstral}
                        law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath}
                        airLvl={airLvl} earthLvl={earthLvl} waterLvl={waterLvl} fireLvl={fireLvl}
                        astralLvl={astralLvl} lawLvl={lawLvl} bloodLvl={bloodLvl} wrathLvl={wrathLvl}
                        airGloves={airGloves} setAirGloves={setAirGloves} earthGloves={earthGloves} setEarthGloves={setEarthGloves} waterGloves={waterGloves} setWaterGloves={setWaterGloves} fireGloves={fireGloves} setFireGloves={setFireGloves}
                        autoaltar={autoaltar} runename={runename}
                        pouch={pouch} extra={extra} setExtra={setExtra}
                        hat={hat} top={top} bottom={bottom} boots={boots} bonus={bonus} setBonus={setBonus} lawOutfit={lawOutfit} bloodOutfit={bloodOutfit} wrathOutfit={wrathOutfit} infinityOutfit={infinityOutfit}
                        runecraftCape={runecraftCape}
                        essenceType={essenceType} ouraniaAltar={ouraniaAltar} bloodEssence={bloodEssence} setBloodEssence={setBloodEssence}
                        eternal={eternal}
                        combination={combination} mode={mode}
                        airOrb={airOrb} earthOrb={earthOrb} waterOrb={waterOrb} fireOrb={fireOrb} astralOrb={astralOrb}
                        lawOrb={lawOrb} bloodOrb={bloodOrb} wrathOrb={wrathOrb}
                        staff={staff} setStaff={setStaff}
                        battlestaff={battlestaff} setBattlestaff={setBattlestaff}
                        ringofElements={ringofElements} ringCharge={ringCharge} setRingCharge={setRingCharge}/>
      <InventorySection inventory={inventory} extra={extra} pouch={pouch} lawOutfit={lawOutfit} bloodOutfit={bloodOutfit} wrathOutfit={wrathOutfit} battlestaff={battlestaff} bloodEssence={bloodEssence}
                        air={air} setAir={setAir} earth={earth} setEarth={setEarth} water={water} setWater={setWater} fire={fire} setFire={setFire} astral={astral} setAstral={setAstral}
                        law={law} setLaw={setLaw} blood={blood} setBlood={setBlood} wrath={wrath} setWrath={setWrath}
                        mute={mute} staff={staff}
                        airGloves={airGloves} earthGloves={earthGloves} waterGloves={waterGloves} fireGloves={fireGloves} ringofElements={ringofElements} ringCharge={ringCharge} setRingCharge={setRingCharge}
                        elementalOffer={elementalOffer} catalyticOffer={catalyticOffer}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
