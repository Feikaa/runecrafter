import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Tooltip, Typography } from "@mui/material";
import airRune from "../icons/air_rune.png";
import earthRune from "../icons/earth_rune.png";
import waterRune from "../icons/water_rune.png";
import fireRune from "../icons/fire_rune.png";
import astralRune from "../icons/astral_rune.png";
import lawRune from "../icons/law_rune.webp";
import bloodRune from "../icons/blood_rune.png";
import wrathRune from "../icons/wrath_rune.png";
import mistRune from "../icons/mist_rune.png";
import dustRune from "../icons/dust_rune.png";
import mudRune from "../icons/mud_rune.png";
import smokeRune from "../icons/smoke_rune.png";
import steamRune from "../icons/steam_rune.png";
import lavaRune from "../icons/lava_rune.png";
import AirOrb from "../icons/air_orb.png";
import EarthOrb from "../icons/earth_orb.png";
import WaterOrb from "../icons/water_orb.png";
import FireOrb from "../icons/fire_orb.png";
import AstralOrb from "../icons/astral_orb.png";
import LawOrb from "../icons/law_orb.png";
import BloodOrb from "../icons/blood_orb.png";
import WrathOrb from "../icons/wrath_orb.png";
import zmiAltar from "../icons/ourania_altar.png";
import Battlestaff from "../icons/battlestaff.png";
import craftAudio from "../audio/craft.wav";
import React, { useState } from "react";
import "../styles/RunecraftSection.scss";
import { useEffect } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { toast } from 'react-toastify';

export default function RunecraftSection(props) {

    const mute = props.mute;
    const mode = props.mode;

    const lvl = props.lvl;
    const setLvl = props.setLvl;
    const prestige = props.prestige;
    const pBoost = props.pBoost;
    const inventory = props.inventory;
    const setInventory = props.setInventory;
    const xp = props.xp;
    const setXp = props.setXp;
    const totalxp = props.totalxp;
    const setTotalxp = props.setTotalxp;
    const lvls = [0, 0, 83, 174, 276, 388, 512, 650, 801, 969, 1154, 1358, 1584, 1833, 2107, 2411, 2746, 3115, 3523, 3973, 4470, 5018, 5624, 6291, 7028, 7842,
                 8740, 9730, 10824, 12031, 13363, 14833, 16456, 18247, 20224, 22406, 24815, 27473, 30408, 33648, 37224, 41171, 45529, 50339, 55649, 61512, 67983, 75127, 83014, 91721, 101333,
                 111945, 123660, 136594, 150872, 166636, 184040, 203254, 224466, 247886, 273742, 302288, 333804, 368599, 407015, 449428, 496254, 547953, 605032, 668051, 737627, 814445, 899257, 992895, 1096278, 1210421,
                 1336443, 1475581, 1629200, 1798808, 1986068, 2192818, 2421087, 2673114, 2951373, 3258594, 3597792, 3972294, 4385776, 4842295, 5346332, 5902831, 6517253, 7195629, 7944614, 8771558, 9684577, 10692629, 11805606, 13034431];
    const progress = props.progress;
    const setProgress = props.setProgress;

    const air = props.air;
    const earth = props.earth;
    const water = props.water;
    const fire = props.fire;
    const astral = props.astral;
    const law = props.law;
    const blood = props.blood;
    const wrath = props.wrath;
    const setAir = props.setAir;
    const setEarth = props.setEarth;
    const setWater = props.setWater;
    const setFire = props.setFire;
    const setAstral = props.setAstral;
    const setLaw = props.setLaw;
    const setBlood = props.setBlood;
    const setWrath = props.setWrath;

    const battlestaff = props.battlestaff;
    const setBattlestaff = props.setBattlestaff;

    const airLvl = props.airLvl;
    const earthLvl = props.earthLvl;
    const waterLvl = props.waterLvl;
    const fireLvl = props.fireLvl;
    const astralLvl = props.astralLvl;
    const lawLvl = props.lawLvl;
    const bloodLvl = props.bloodLvl;
    const wrathLvl = props.wrathLvl;

    const autoaltar = props.autoaltar;
    const runename = props.runename;
    const ouraniaAltar = props.ouraniaAltar;
    const bloodEssence = props.bloodEssence;
    const setBloodEssence = props.setBloodEssence;

    const pouch = props.pouch;
    const extraList = [3, 9, 18, 30, 40];
    const extra = props.extra;
    const setExtra = props.setExtra;

    const airGloves = props.airGloves;
    const setAirGloves = props.setAirGloves;
    const earthGloves = props.earthGloves;
    const setEarthGloves = props.setEarthGloves;
    const waterGloves = props.waterGloves;
    const setWaterGloves = props.setWaterGloves;
    const fireGloves = props.fireGloves;
    const setFireGloves = props.setFireGloves;

    const ringofElements = props.ringofElements;
    const ringCharge = props.ringCharge;
    const setRingCharge = props.setRingCharge;

    const hat = props.hat;
    const top = props.top;
    const bottom = props.bottom;
    const boots = props.boots;
    const bonus = props.bonus;
    const setBonus = props.setBonus;

    const lawOutfit = props.lawOutfit;
    const bloodOutfit = props.bloodOutfit;
    const wrathOutfit = props.wrathOutfit;
    const infinityOutfit = props.infinityOutfit;

    const airOrb = props.airOrb;
    const earthOrb = props.earthOrb;
    const waterOrb = props.waterOrb;
    const fireOrb = props.fireOrb;
    const astralOrb = props.astralOrb;
    const lawOrb = props.lawOrb;
    const bloodOrb = props.bloodOrb;
    const wrathOrb = props.wrathOrb;

    const staff = props.staff;
    const setStaff = props.setStaff;

    const runecraftCape = props.runecraftCape;

    const combination = props.combination;

    const essenceType = props.essenceType;

    const audio = new Audio(craftAudio);
    audio.volume = 0.1;

    const [showAir, setShowAir] = useState(false);
    const [showEarth, setShowEarth] = useState(false);
    const [showWater, setShowWater] = useState(false);
    const [showFire, setShowFire] = useState(false);
    const [showAstral, setShowAstral] = useState(false);
    const [showLaw, setShowLaw] = useState(false);
    const [showBlood, setShowBlood] = useState(false);
    const [showWrath, setShowWrath] = useState(false);
    const [showOurania, setShowOurania] = useState(false);
    const [showDust, setShowDust] = useState(false);
    const [showMist, setShowMist] = useState(false);
    const [showMud, setShowMud] = useState(false);
    const [showSmoke, setShowSmoke] = useState(false);
    const [showSteam, setShowSteam] = useState(false);
    const [showLava, setShowLava] = useState(false);
    const [xpgain, setXpgain] = useState(0);

    const ourania9 = [7, 30, 105, 400, 700, 1300, 2500, 10000];
    const ourania19 = [9, 45, 145, 1000, 2200, 4600, 6700, 10000];
    const ourania29 = [23, 110, 430, 3250, 4750, 6150, 7500, 10000];
    const ourania39 = [60, 250, 1000, 5300, 6500, 7600, 8500, 10000];
    const ourania49 = [120, 500, 2000, 6500, 7300, 8050, 8750, 10000];
    const ourania59 = [250, 1300, 4150, 7000, 7700, 8350, 8950, 10000];
    const ourania69 = [300, 1500, 4450, 7200, 7900, 8500, 9050, 10000];
    const ourania79 = [700, 3500, 6200, 8300, 8700, 9100, 9400, 10000];
    const ourania89 = [1000, 3900, 6300, 8400, 8900, 9300, 9600, 10000];
    const ourania99 = [2200, 5200, 7500, 9000, 9300, 9600, 9800, 10000];

    const eternal = props.eternal;

    var xpbase = 0;

    const [currentToastBS, setCurrentToastBS] = useState([]);

    const notifyBS = () => {
      if (currentToastBS.length < 5) {
        const id = toast.success("You found a Battlestaff!", {
          icon: <img src={Battlestaff} height="32px" width="32px"></img>,
          position: "bottom-center",
          pauseOnFocusLoss: false,
          pauseOnHover: false,
          autoClose: 2000,
          onClose: () => {setCurrentToastBS([]);}
        });
        setCurrentToastBS([id]);
      }
    }

    const theme = createTheme({
        palette: {
            action: {
                disabled: "red"
            }
        },
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

    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");

    const handleClickOpen = (rune) => {
        setType(rune);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        setBonus(1 + ([hat, top, bottom, boots].reduce((a, f) => a + Math.ceil(f/2), 0) / 10))
        if (hat > 0 && top > 0 && bottom > 0 && boots > 0) {
            setBonus(1.6)
        }
    }, [hat, top, bottom, boots])

    function craftRune(rune, amt) {
        if (Math.random() < 0.001 || (infinityOutfit === 5 && Math.random() < 0.001)) {
            setBattlestaff(battlestaff + 1);
            notifyBS();
        }
        if (!mute) {audio.play();}
        var boost = 1;
        if (essenceType === "daeyalt_essence") {
            boost = 1.5;
        } else if (essenceType === "dark_essence") {
            boost = 2;
        }
        if (eternal) {
            boost *= 2;
        }
        if (ringofElements && (rune === "air" || rune === "earth" || rune === "water" || rune === "fire")) {
            if (ringCharge >= amt) {
                boost *= 2;
            } else if (ringCharge < amt) {
                boost *= (1 + ((1 / amt) * ringCharge));
            }
        }

        if (rune === "air") {
            if (airGloves === 0) {
                xpbase = 5;
            } else if (airGloves >= amt) {
                xpbase = 5 * 2;
                setAirGloves(airGloves - amt);
            } else {
                xpbase = 5 * (1 + ((1 / amt) * airGloves));
                setAirGloves(0);
            }
            if (ringofElements) {
                if (ringCharge >= amt) {
                    setAir(air + Math.floor(amt * bonus * (1 + pBoost/10) * (1 + (0.1 * airLvl)) * 2));
                    setRingCharge(ringCharge - amt);
                } else if (ringCharge < amt) {
                    setAir(air + (Math.floor(ringCharge * bonus * (1 + pBoost/10)) * (1 + (0.1 * airLvl)) * 2) + (Math.floor((amt - ringCharge) * bonus * (1 + pBoost/10)) * (1 + (0.1 * airLvl))));
                    setRingCharge(0);
                }
            } else {
                setAir(air + Math.floor(amt * bonus * (1 + pBoost/10) * (1 + (0.1 * airLvl))));
            }
            setShowAir(true);
        } else if (rune === "earth") {
            if (earthGloves === 0) {
                xpbase = 8;
            } else if (earthGloves >= amt) {
                xpbase = 8 * 2;
                setEarthGloves(earthGloves - amt);
            } else {
                xpbase = 8 * (1 + ((1 / amt) * earthGloves));
                setEarthGloves(0);
            }
            if (ringofElements) {
                if (ringCharge >= amt) {
                    setEarth(earth + Math.floor(amt * bonus * (1 + pBoost/10) * (1 + (0.1 * earthLvl)) * 2));
                    setRingCharge(ringCharge - amt);
                } else if (ringCharge < amt) {
                    setEarth(earth + (Math.floor(ringCharge * bonus * (1 + pBoost/10)) * (1 + (0.1 * earthLvl)) * 2) + (Math.floor((amt - ringCharge) * bonus * (1 + pBoost/10)) * (1 + (0.1 * earthLvl))));
                }
            } else {
                setEarth(earth + Math.floor(amt * bonus * (1 + pBoost/10) * (1 + (0.1 * earthLvl))));
            }
            setShowEarth(true);
        } else if (rune === "water") {
            if (waterGloves === 0) {
                xpbase = 10;
            } else if (waterGloves >= amt) {
                xpbase = 10 * 2;
                setWaterGloves(waterGloves - amt);
            } else {
                xpbase = 10 * (1 + ((1 / amt) * waterGloves));
                setWaterGloves(0);
            }
            if (ringofElements) {
                if (ringCharge >= amt) {
                    setWater(water + Math.floor(amt * bonus * (1 + pBoost/10) * (1 + (0.1 * waterLvl)) * 2));
                    setRingCharge(ringCharge - amt);
                } else if (ringCharge < amt) {
                    setWater(water + Math.floor(ringCharge * bonus * (1 + pBoost/10) * (1 + (0.1 * waterLvl)) * 2) + Math.floor((amt - ringCharge) * bonus * (1 + pBoost/10) * (1 + (0.1 * waterLvl))));
                    setRingCharge(0);
                }
            } else {
                setWater(water + Math.floor(amt * bonus * (1 + pBoost/10) * (1 + (0.1 * waterLvl))));
            }
            setShowWater(true);
        } else if (rune === "fire") {
            if (fireGloves === 0) {
                xpbase = 12;
            } else if (fireGloves >= amt) {
                xpbase = 12 * 2;
                setFireGloves(fireGloves - amt);
            } else {
                xpbase = 12 * (1 + ((1 / amt) * fireGloves));
                setFireGloves(0);
            }
            if (ringofElements) {
                if (ringCharge >= amt) {
                    setFire(fire + Math.floor(amt * bonus * (1 + pBoost/10) * (1 + (0.1 * fireLvl)) * 2));
                    setRingCharge(ringCharge - amt);
                } else if (ringCharge < amt) {
                    setFire(fire + Math.floor(ringCharge * bonus * (1 + pBoost/10) * (1 + (0.1 * fireLvl)) * 2) + Math.floor((amt - ringCharge) * bonus * (1 + pBoost/10) * (1 + (0.1 * fireLvl))));
                    setRingCharge(0);
                }
            } else {
                setFire(fire + Math.floor(amt * bonus * (1 + pBoost/10) * (1 + (0.1 * fireLvl))));
            }
            setShowFire(true);
        } else if (rune === "astral") {
            xpbase = 15;
            setShowAstral(true);
            setAstral(astral + Math.floor(amt * bonus * (1 + pBoost/10) * (1 + (0.1 * astralLvl))));
        } else if (rune === "law") {
            if ((infinityOutfit === 5 && Math.random() < 0.07) || (lawOutfit === 5 && Math.random() < 0.1)) {
                xpbase = 38;
                setLaw(law + (Math.floor(amt * bonus * (1 + pBoost/10)) * 2 * (1 + (0.1 * lawLvl))));
            } else {
                xpbase = 19;
                setLaw(law + Math.floor(amt * bonus * (1 + pBoost/10) * (1 + (0.1 * lawLvl))));
            }
            setShowLaw(true);
        } else if (rune === "blood") {
            if ((infinityOutfit === 5 && Math.random() < 0.07) || (bloodOutfit === 5 && Math.random() < 0.05)) {
                if (bloodEssence === 0) {
                    xpbase = 48;
                    setBlood(blood + (Math.floor(amt * bonus * (1 + pBoost/10)) * 2 * (1 + (0.1 * bloodLvl))));
                } else if (bloodEssence >= amt) {
                    xpbase = 48 * 1.5;
                    setBlood(blood + (Math.floor(amt * bonus * (1 + pBoost/10)) * 2 * (1 + (0.1 * bloodLvl)) * 1.5));
                    setBloodEssence(bloodEssence - amt);
                } else {
                    xpbase = 48 * (1 + ((0.5 / amt) * bloodEssence));
                    setBlood(blood + (Math.floor(bloodEssence * bonus * (1 + pBoost/10)) * 2 * (1 + (0.1 * bloodLvl)) * 1.5) + (Math.floor((amt - bloodEssence) * bonus * (1 + pBoost/10)) * 2 * (1 + (0.1 * bloodLvl))));
                    setBloodEssence(0);
                }
            } else {
                if (bloodEssence === 0) {
                    xpbase = 24;
                    setBlood(blood + (Math.floor(amt * bonus * (1 + pBoost/10)) * (1 + (0.1 * bloodLvl))));
                } else if (bloodEssence >= amt) {
                    xpbase = 24 * 1.5;
                    setBlood(blood + (Math.floor(amt * bonus * (1 + pBoost/10)) * (1 + (0.1 * bloodLvl)) * 1.5));
                    setBloodEssence(bloodEssence - amt);
                } else {
                    xpbase = 24 * (1 + ((0.5 / amt) * bloodEssence));
                    setBlood(blood + (Math.floor(bloodEssence * bonus * (1 + pBoost/10)) * (1 + (0.1 * bloodLvl)) * 1.5) + (Math.floor((amt - bloodEssence) * bonus * (1 + pBoost/10)) * (1 + (0.1 * bloodLvl))));
                    setBloodEssence(0);
                }
            }
            setShowBlood(true);
        } else if (rune === "wrath") {
            if ((infinityOutfit === 5 && Math.random() < 0.07) || (wrathOutfit === 5 && Math.random() < 0.05)) {
                xpbase = 60;
                setWrath(wrath + (Math.floor(amt * bonus * (1 + pBoost/10)) * 2 * (1 + (0.1 * wrathLvl))));
            } else {
                xpbase = 30;
                setWrath(wrath + Math.floor(amt * bonus * (1 + pBoost/10) * (1 + (0.1 * wrathLvl))));
            }
            setShowWrath(true);
        } else if (rune === "ourania") {
            // Chances of getting certain runes
            // The higher rc lvl, the more likely you get higher level runes
            var chances = [];
            if (lvl <= 9) {
                chances = ourania9;
            } else if (lvl <= 19) {
                chances = ourania19;
            } else if (lvl <= 29) {
                chances = ourania29;
            } else if (lvl <= 39) {
                chances = ourania39;
            } else if (lvl <= 49) {
                chances = ourania49;
            } else if (lvl <= 59) {
                chances = ourania59;
            } else if (lvl <= 69) {
                chances = ourania69;
            } else if (lvl <= 79) {
                chances = ourania79;
            } else if (lvl <= 89) {
                chances = ourania89;
            } else {
                chances = ourania99;
            }
            // Roll the runes
            var runes = [0, 0, 0, 0, 0, 0, 0, 0];
            for (let i = 0; i < amt; i++) {
                var roll = Math.floor(Math.random() * 10000);
                for (let j = 0; j < chances.length; j++) {
                    if (roll < chances[j]) {
                        runes[j] += 1;
                        break;
                    }
                }
            }
            setWrath(wrath + Math.floor(runes[0] * bonus * (1 + pBoost/10) * (1 + (0.1 * wrathLvl))));
            if (bloodEssence === 0) {
                setBlood(blood + Math.floor(runes[1] * bonus * (1 + pBoost/10) * (1 + (0.1 * bloodLvl))));
            } else if (bloodEssence >= runes[1]) {
                setBlood(blood + (Math.floor(runes[1] * bonus * (1 + pBoost/10)) * 2 * (1 + (0.1 * bloodLvl)) * 1.5));
            } else {
                setBlood(blood + (Math.floor(bloodEssence * bonus * (1 + pBoost/10)) * 2 * (1 + (0.1 * bloodLvl)) * 1.5) + (Math.floor((runes[1] - bloodEssence) * bonus * (1 + pBoost/10)) * 2 * (1 + (0.1 * bloodLvl))));
            }
            setLaw(law + Math.floor(runes[2] * bonus * (1 + pBoost/10) * (1 + (0.1 * lawLvl))));
            setAstral(astral + Math.floor(runes[3] * bonus * (1 + pBoost/10) * (1 + (0.1 * astralLvl))));
            setFire(fire + Math.floor(runes[4] * bonus * (1 + pBoost/10) * (1 + (0.1 * fireLvl))));
            setWater(water + Math.floor(runes[5] * bonus * (1 + pBoost/10) * (1 + (0.1 * waterLvl))));
            setEarth(earth + Math.floor(runes[6] * bonus * (1 + pBoost/10) * (1 + (0.1 * earthLvl))));
            setAir(air + Math.floor(runes[7] * bonus * (1 + pBoost/10) * (1 + (0.1 * airLvl))));

            setShowOurania(true);
            var bloodxp = 24;
            if (bloodEssence >= runes[1]) {
                bloodxp = 24 * 1.5;
                setBloodEssence(bloodEssence - runes[1]);
            } else if (bloodEssence < runes[1]) {
                bloodxp = 24 * (1 + ((0.5 / runes[1]) * bloodEssence));
                setBloodEssence(0);
            }
            if (hat > 1 && top > 1 && bottom > 1 && boots > 1) {
                setXpgain(Math.floor(((30 * runes[0]) + (bloodxp * runes[1]) + (19 * runes[2]) + (15 * runes[3]) + (12 * runes[4]) + (10 * runes[5]) + (8 * runes[6]) + (5 * runes[7])) * boost * 1.7 * (1 + pBoost/10) * 1.5));
            } else {
                setXpgain(Math.floor(((30 * runes[0]) + (bloodxp * runes[1]) + (19 * runes[2]) + (15 * runes[3]) + (12 * runes[4]) + (10 * runes[5]) + (8 * runes[6]) + (5 * runes[7])) * boost * 1.7 * (1 + pBoost/10) * (1 + ([hat, top, bottom, boots].reduce((a, f) => a + Math.floor(f/2), 0) / 10))));
            }
        }

        // 10% of runes crafted turn into law, blood and wrath if you have the outfits
        if (lawOutfit === 5 & rune !== "law") {
            setLaw(law + Math.floor((amt * bonus * (1 + pBoost/10)) * 0.1));
        }
        if (bloodOutfit === 5 && rune !== "blood") {
            setBlood(blood + Math.floor((amt * bonus * (1 + pBoost/10)) * 0.1));
        }
        if (wrathOutfit === 5 && rune !== "wrath") {
            setWrath(wrath + Math.floor((amt * bonus * (1 + pBoost/10)) * 0.1));
        }

        if (rune !== "ourania") {
            if (hat > 1 && top > 1 && bottom > 1 && boots > 1) {
                setXpgain(Math.floor(xpbase * amt * boost * (1 + pBoost/10) * 1.5));
            } else {
                setXpgain(Math.floor(xpbase * amt * boost * (1 + pBoost/10) * (1 + ([hat, top, bottom, boots].reduce((a, f) => a + Math.floor(f/2), 0) / 10))));
            }
        }
    }

    function calcLevel(lvlGain) {
        if (lvl < 99 && totalxp >= lvls[lvl + lvlGain + 1]) {
            calcLevel(lvlGain + 1);
        } else {
            setLvl(lvl + lvlGain);
        }
    }

    function craftCombination(rune, amt) {
        if (Math.random() < 0.001 || (infinityOutfit === 5 && Math.random() < 0.001)) {
            setBattlestaff(battlestaff + 1);
            notifyBS();
        }
        if (!mute) {audio.play();}
        var boost = 1;
        if (essenceType === "daeyalt_essence") {
            boost = 1.5;
        } else if (essenceType === "dark_essence") {
            boost = 2;
        }
        if (eternal) {
            boost *= 2;
        }

        if (ringofElements) {
            if (ringCharge >= amt) {
                boost *= 2;
                setRingCharge(ringCharge - amt);
            } else if (ringCharge < amt) {
                boost *= (1 + ((1 / amt) * ringCharge));
                setRingCharge(0);
            }
        }

        if (rune === "dust") {
            xpbase = 13;
            setShowDust(true);
            setAir(air + Math.floor(amt * bonus * (1 + (0.1 * airLvl))));
            setEarth(earth + Math.floor(amt * bonus * (1 + (0.1 * earthLvl))));
        } else if (rune === "mist") {
            xpbase = 15;
            setShowMist(true);
            setAir(air + Math.floor(amt * bonus * (1 + (0.1 * airLvl))));
            setWater(water + Math.floor(amt * bonus * (1 + (0.1 * waterLvl))));
        } else if (rune === "mud") {
            xpbase = 18;
            setShowMud(true);
            setEarth(earth + Math.floor(amt * bonus * (1 + (0.1 * earthLvl))));
            setWater(water + Math.floor(amt * bonus * (1 + (0.1 * waterLvl))));
        } else if (rune === "smoke") {
            xpbase = 17;
            setShowSmoke(true);
            setAir(air + Math.floor(amt * bonus * (1 + (0.1 * airLvl))));
            setFire(fire + Math.floor(amt * bonus * (1 + (0.1 * fireLvl))));
        } else if (rune === "steam") {
            xpbase = 22;
            setShowSteam(true);
            setWater(water + Math.floor(amt * bonus * (1 + (0.1 * waterLvl))));
            setFire(fire + Math.floor(amt * bonus * (1 + (0.1 * fireLvl))));
        } else if (rune === "lava") {
            xpbase = 20;
            setShowLava(true);
            setEarth(earth + Math.floor(amt * bonus * (1 + (0.1 * earthLvl))));
            setFire(fire + Math.floor(amt * bonus * (1 + (0.1 * fireLvl))));
        }

        setXpgain(Math.floor(xpbase * amt * boost));
    }

    useEffect(() => {
        if (xpgain > 0) {
            setTotalxp((totalxp + Math.round(xpgain)))
        }
    }, [xpgain]);

    useEffect(() => {
        if (lvl < 99 && totalxp >= lvls[lvl + 1]) {
            calcLevel(1);
        } else {
            setProgress(Math.floor(((totalxp - lvls[lvl]) / (lvls[lvl + 1] - lvls[lvl])) * 100))
        }
    }, [totalxp])

    useEffect(() => {
        setProgress(Math.floor(((totalxp - lvls[lvl]) / (lvls[lvl + 1] - lvls[lvl])) * 100))
    }, [lvl])

    useEffect(() => {
        if (autoaltar && inventory.length === 28 && ((!pouch && extra === ([lawOutfit, bloodOutfit, wrathOutfit].filter(a => a === 5).length * 2) + ([infinityOutfit].filter(a => a === 5).length * 6)) || extra === extraList[pouch - 1] + ([lawOutfit, bloodOutfit, wrathOutfit].filter(a => a === 5).length * 2) + ([infinityOutfit].filter(a => a === 5).length * 6)) && runename !== "none") {
            if (runename === "dust" || runename === "mist" || runename === "mud" || runename === "smoke" || runename === "lava" || runename === "steam") {
                craftCombination(runename, inventory.length + extra);
            } else {
                craftRune(runename, inventory.length + extra);
            }
            setInventory([]);
            setExtra(0);
        }
    }, [inventory, runename, extra]);

    useEffect(() => {
        if (staff === "air") {
            setAir(9999);
        } else if (staff === "earth") {
            setEarth(9999);
        } else if (staff === "water") {
            setWater(9999);
        } else if (staff === "fire") {
            setFire(9999);
        } else if (staff === "astral") {
            setAstral(9999);
        } else if (staff === "law") {
            setLaw(9999);
        } else if (staff === "blood") {
            setBlood(9999);
        } else if (staff === "wrath") {
            setWrath(9999);
        }
    }, [air, earth, water, fire, astral, law, blood, wrath]);

    return (
        <ThemeProvider theme={theme}>
        <Box sx={{width: "80%"}}>
            <Grid container spacing={3} sx={{ marginLeft: "0px"}}>
                {mode === "zmi" ? ""
                :
                !combination ? 
                <React.Fragment>
                <Grid item xs>
                <div style={{visibility: showAir ? '' : "hidden", color: "green", fontSize: "20px"}} className={showAir ? "slide" : ""} onAnimationEnd={() => {setShowAir(false); setXpgain(0);}}>
                    +{Math.round(xpgain)}
                </div>
                    <Button variant="contained" color="success" onClick={() => {
                        if (inventory.length > 0 || extra > 0) { // this if should be in the function btw
                            craftRune("air", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Air Rune&nbsp;
                        <img src={airRune} alt="Craft Air" width="50px" height="50px"></img>
                    </Button>
                    <br></br>

                    <br></br>
                    {airOrb && staff !== "air" ?
                    <React.Fragment>
                    <Tooltip arrow title={battlestaff > 0 ? "" :
                        <React.Fragment>
                        <Typography><font color="white">You need a battlestaff to craft this!</font></Typography>
                        </React.Fragment>
                    } placement="top">
                        <Box>
                        <Button variant="contained" color="success" disabled={battlestaff > 0 ? false : true} onClick={() => {
                            handleClickOpen("air")
                        }}>
                            Craft Air Staff&nbsp;
                            <img src={AirOrb} alt="Craft Air" width="50px" height="50px"></img>
                        </Button>
                        </Box>
                    </Tooltip>
                    </React.Fragment> : ""}
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showEarth ? '' : "hidden", color: "green", fontSize: "20px"}} className={showEarth ? "slide" : ""} onAnimationEnd={() => {setShowEarth(false); setXpgain(0);}}>
                        +{Math.round(xpgain)}
                    </div>
                    <Button variant="contained" color={lvl >= 9 || runecraftCape === 2 ? "success" : runecraftCape === 1 && lvl >= 8 ? "success" : "error"} disabled={lvl >= 9 || runecraftCape === 2 ? false : runecraftCape === 1 && lvl >= 8 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("earth", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Earth Rune&nbsp;
                        <img src={earthRune} alt="Craft Earth" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    {runecraftCape === 2 ? "" : "Lvl: 9"}
                    <br></br>
                    {earthOrb && staff !== "earth" ?
                    <React.Fragment>
                    <Tooltip arrow title={battlestaff > 0 ? "" :
                        <React.Fragment>
                        <Typography><font color="white">You need a battlestaff to craft this!</font></Typography>
                        </React.Fragment>
                    } placement="top">
                        <Box>
                        <Button variant="contained" color="success" disabled={battlestaff > 0 ? false : true} onClick={() => {
                            handleClickOpen("earth")
                        }}>
                            Craft Earth Staff&nbsp;
                            <img src={EarthOrb} alt="Craft Earth" width="50px" height="50px"></img>
                        </Button>
                        </Box>
                    </Tooltip>
                    </React.Fragment> : ""}
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showWater ? '' : "hidden", color: "green", fontSize: "20px"}} className={showWater ? "slide" : ""} onAnimationEnd={() => {setShowWater(false); setXpgain(0);}}>
                        +{Math.round(xpgain)}
                    </div>
                    <Button variant="contained" color={lvl >= 14 || runecraftCape === 2 ? "success" : runecraftCape === 1 && lvl >= 13 ? "success" : "error"} disabled={lvl >= 14 || runecraftCape === 2 ? false : runecraftCape === 1 && lvl >= 13 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("water", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Water Rune&nbsp;
                        <img src={waterRune} alt="Craft Water" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    {runecraftCape === 2 ? "" : "Lvl: 14"}
                    <br></br>
                    {waterOrb && staff !== "water" ?
                    <React.Fragment>
                    <Tooltip arrow title={battlestaff > 0 ? "" :
                        <React.Fragment>
                        <Typography><font color="white">You need a battlestaff to craft this!</font></Typography>
                        </React.Fragment>
                    } placement="top">
                        <Box>
                        <Button variant="contained" color="success" disabled={battlestaff > 0 ? false : true} onClick={() => {
                            handleClickOpen("water")
                        }}>
                            Craft Water Staff&nbsp;
                            <img src={WaterOrb} alt="Craft Water" width="50px" height="50px"></img>
                        </Button>
                        </Box>
                    </Tooltip>
                    </React.Fragment> : ""}
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showFire ? '' : "hidden", color: "green", fontSize: "20px"}} className={showFire ? "slide" : ""} onAnimationEnd={() => {setShowFire(false); setXpgain(0);}}>
                        +{Math.round(xpgain)}
                    </div>
                    <Button variant="contained" color={lvl >= 27 || runecraftCape === 2 ? "success" : runecraftCape === 1 && lvl >= 26 ? "success" : "error"} disabled={lvl >= 27 || runecraftCape === 2 ? false : runecraftCape === 1 && lvl >= 26 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("fire", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Fire Rune&nbsp;
                        <img src={fireRune} alt="Craft Fire" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    {runecraftCape === 2 ? "" : "Lvl: 27"}
                    <br></br>
                    {fireOrb && staff !== "fire" ?
                    <React.Fragment>
                    <Tooltip arrow title={battlestaff > 0 ? "" :
                        <React.Fragment>
                        <Typography><font color="white">You need a battlestaff to craft this!</font></Typography>
                        </React.Fragment>
                    } placement="top">
                        <Box>
                        <Button variant="contained" color="success" disabled={battlestaff > 0 ? false : true} onClick={() => {
                            handleClickOpen("fire")
                        }}>
                            Craft Fire Staff&nbsp;
                            <img src={FireOrb} alt="Craft Fire" width="50px" height="50px"></img>
                        </Button>
                        </Box>
                    </Tooltip>
                    </React.Fragment> : ""}
                </Grid>
                </React.Fragment>
                :
                // Combinations
                <React.Fragment>
                <Grid item xs>
                <div style={{visibility: showDust ? '' : "hidden", color: "green", fontSize: "20px"}} className={showDust ? "slide" : ""} onAnimationEnd={() => {setShowDust(false); setXpgain(0);}}>
                    +{Math.round(xpgain)}
                </div>
                <Tooltip title={
                    <React.Fragment>
                        <Typography>Combination: <img src={airRune} width="36px" height="36px" alt="Air Rune"></img><img src={earthRune} width="36px" height="36px" alt="Earth Rune"></img></Typography>
                    </React.Fragment>} arrow placement="top" disableInteractive>
                    <span style={{display: "block"}}>
                    <Button variant="contained" color="success" onClick={() => {
                        if (inventory.length > 0 || extra > 0) { // this if should be in the function btw
                            craftCombination("dust", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Dust Rune&nbsp;
                        <img src={dustRune} alt="Craft Dust" width="50px" height="50px"></img>
                    </Button>
                    </span>
                    </Tooltip>
                    <br></br>
                    <br></br>
                    {airOrb && staff !== "air" ?
                    <React.Fragment>
                    <Tooltip arrow title={battlestaff > 0 ? "" :
                        <React.Fragment>
                        <Typography><font color="white">You need a battlestaff to craft this!</font></Typography>
                        </React.Fragment>
                    } placement="top">
                        <Box>
                        <Button variant="contained" color="success" disabled={battlestaff > 0 ? false : true} onClick={() => {
                            handleClickOpen("air")
                        }}>
                            Craft Air Staff&nbsp;
                            <img src={AirOrb} alt="Craft Air" width="50px" height="50px"></img>
                        </Button>
                        </Box>
                    </Tooltip>
                    </React.Fragment> : ""}

                </Grid>

                <Grid item xs>
                    <div style={{visibility: showMist ? '' : "hidden", color: "green", fontSize: "20px"}} className={showMist ? "slide" : ""} onAnimationEnd={() => {setShowMist(false); setXpgain(0);}}>
                        +{Math.round(xpgain)}
                    </div>
                    <Tooltip title={
                    <React.Fragment>
                        <Typography>Combination: <img src={airRune} width="36px" height="36px" alt="Air Rune"></img><img src={waterRune} width="36px" height="36px" alt="Water Rune"></img></Typography>
                    </React.Fragment>} arrow placement="top" disableInteractive>
                    <span style={{display: "block"}}>
                    <Button variant="contained" color={lvl >= 8 || runecraftCape === 2 ? "success" : runecraftCape === 1 && lvl >= 7 ? "success" : "error"} disabled={lvl >= 8 || runecraftCape === 2 ? false : runecraftCape === 1 && lvl >= 7 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftCombination("mist", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Mist Rune&nbsp;
                        <img src={mistRune} alt="Craft Mist" width="50px" height="50px"></img>
                    </Button>
                    </span>
                    </Tooltip>
                    {runecraftCape === 2 ? "" : "Lvl: 8"}
                    <br></br>
                    {waterOrb && staff !== "water" ?
                    <React.Fragment>
                    <Tooltip arrow title={battlestaff > 0 ? "" :
                        <React.Fragment>
                        <Typography><font color="white">You need a battlestaff to craft this!</font></Typography>
                        </React.Fragment>
                    } placement="top">
                        <Box>
                        <Button variant="contained" color="success" disabled={battlestaff > 0 ? false : true} onClick={() => {
                            handleClickOpen("water")
                        }}>
                            Craft Water Staff&nbsp;
                            <img src={WaterOrb} alt="Craft Water" width="50px" height="50px"></img>
                        </Button>
                        </Box>
                    </Tooltip>
                    </React.Fragment> : ""}
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showMud ? '' : "hidden", color: "green", fontSize: "20px"}} className={showMud ? "slide" : ""} onAnimationEnd={() => {setShowMud(false); setXpgain(0);}}>
                        +{Math.round(xpgain)}
                    </div>
                    <Tooltip title={
                    <React.Fragment>
                        <Typography>Combination: <img src={waterRune} width="36px" height="36px" alt="Water Rune"></img><img src={earthRune} width="36px" height="36px" alt="Earth Rune"></img></Typography>
                    </React.Fragment>} arrow placement="top" disableInteractive>
                    <span style={{display: "block"}}>
                    <Button variant="contained" color={lvl >= 13 || runecraftCape === 2 ? "success" : runecraftCape === 1 && lvl >= 12 ? "success" : "error"} disabled={lvl >= 13 || runecraftCape === 2 ? false : runecraftCape === 1 && lvl >= 12 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftCombination("mud", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Mud Rune&nbsp;
                        <img src={mudRune} alt="Craft Mud" width="50px" height="50px"></img>
                    </Button>
                    </span>
                    </Tooltip>
                    {runecraftCape === 2 ? "" : "Lvl: 13"}
                    <br></br>
                    {earthOrb && staff !== "earth" ?
                    <React.Fragment>
                    <Tooltip arrow title={battlestaff > 0 ? "" :
                        <React.Fragment>
                        <Typography><font color="white">You need a battlestaff to craft this!</font></Typography>
                        </React.Fragment>
                    } placement="top">
                        <Box>
                        <Button variant="contained" color="success" disabled={battlestaff > 0 ? false : true} onClick={() => {
                            handleClickOpen("earth")
                        }}>
                            Craft Earth Staff&nbsp;
                            <img src={EarthOrb} alt="Craft Earth" width="50px" height="50px"></img>
                        </Button>
                        </Box>
                    </Tooltip>
                    </React.Fragment> : ""}
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showSmoke ? '' : "hidden", color: "green", fontSize: "20px"}} className={showSmoke ? "slide" : ""} onAnimationEnd={() => {setShowSmoke(false); setXpgain(0);}}>
                        +{Math.round(xpgain)}
                    </div>
                    <Tooltip title={
                    <React.Fragment>
                        <Typography>Combination: <img src={airRune} width="36px" height="36px" alt="Air Rune"></img><img src={fireRune} width="36px" height="36px" alt="Fire Rune"></img></Typography>
                    </React.Fragment>} arrow placement="top" disableInteractive>
                    <span style={{display: "block"}}>
                    <Button variant="contained" color={lvl >= 15 || runecraftCape === 2 ? "success" : runecraftCape === 1 && lvl >= 14 ? "success" : "error"} disabled={lvl >= 15 || runecraftCape === 2 ? false : runecraftCape === 1 && lvl >= 14 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftCombination("smoke", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Smoke Rune&nbsp;
                        <img src={smokeRune} alt="Craft Smoke" width="50px" height="50px"></img>
                    </Button>
                    </span>
                    </Tooltip>
                    {runecraftCape === 2 ? "" : "Lvl: 15"}
                    <br></br>
                    {fireOrb && staff !== "fire" ?
                    <React.Fragment>
                    <Tooltip arrow title={battlestaff > 0 ? "" :
                        <React.Fragment>
                        <Typography><font color="white">You need a battlestaff to craft this!</font></Typography>
                        </React.Fragment>
                    } placement="top">
                        <Box>
                        <Button variant="contained" color="success" disabled={battlestaff > 0 ? false : true} onClick={() => {
                            handleClickOpen("fire")
                        }}>
                            Craft Fire Staff&nbsp;
                            <img src={FireOrb} alt="Craft Fire" width="50px" height="50px"></img>
                        </Button>
                        </Box>
                    </Tooltip>
                    </React.Fragment> : ""}
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showLava ? '' : "hidden", color: "green", fontSize: "20px"}} className={showLava ? "slide" : ""} onAnimationEnd={() => {setShowLava(false); setXpgain(0);}}>
                        +{Math.round(xpgain)}
                    </div>
                    <Tooltip title={
                    <React.Fragment>
                        <Typography>Combination: <img src={earthRune} width="36px" height="36px" alt="Earth Rune"></img><img src={fireRune} width="36px" height="36px" alt="Fire Rune"></img></Typography>
                    </React.Fragment>} arrow placement="top" disableInteractive>
                    <span style={{display: "block"}}>
                    <Button variant="contained" color={lvl >= 19 || runecraftCape === 2 ? "success" : runecraftCape === 1 && lvl >= 18 ? "success": "error"} disabled={lvl >= 19 || runecraftCape === 2 ? false : runecraftCape === 1 && lvl >= 18 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftCombination("lava", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Lava Rune&nbsp;
                        <img src={lavaRune} alt="Craft Lava" width="50px" height="50px"></img>
                    </Button>
                    </span>
                    </Tooltip>
                    {runecraftCape === 2 ? "" : "Lvl: 19"}
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showSteam ? '' : "hidden", color: "green", fontSize: "20px"}} className={showSteam ? "slide" : ""} onAnimationEnd={() => {setShowSteam(false); setXpgain(0);}}>
                        +{Math.round(xpgain)}
                    </div>
                    <Tooltip title={
                    <React.Fragment>
                        <Typography>Combination: <img src={waterRune} width="36px" height="36px" alt="Water Rune"></img><img src={fireRune} width="36px" height="36px" alt="Fire Rune"></img></Typography>
                    </React.Fragment>} arrow placement="top" disableInteractive>
                    <span style={{display: "block"}}>
                    <Button variant="contained" color={lvl >= 23 || runecraftCape === 2 ? "success" : runecraftCape === 1 && lvl >= 22 ? "success": "error"} disabled={lvl >= 23 || runecraftCape === 2 ? false : runecraftCape === 1 && lvl >= 22 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftCombination("steam", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Steam Rune&nbsp;
                        <img src={steamRune} alt="Craft Steam" width="50px" height="50px"></img>
                    </Button>
                    </span>
                    </Tooltip>
                    {runecraftCape === 2 ? "" : "Lvl: 23"}
                </Grid>
                </React.Fragment>
                }

                {mode === "zmi" ? ""
                :
                <React.Fragment>
                <Grid item xs>
                    <div style={{visibility: showAstral ? '' : "hidden", color: "green", fontSize: "20px"}} className={showAstral ? "slide" : ""} onAnimationEnd={() => {setShowAstral(false); setXpgain(0);}}>
                        +{Math.round(xpgain)}
                    </div>
                    <Button variant="contained" color={lvl >= 40 || runecraftCape === 2 ? "success" : runecraftCape === 1 && lvl >= 39 ? "success" : "error"} disabled={lvl >= 40 || runecraftCape === 2 ? false : runecraftCape === 1 && lvl >= 39 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("astral", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Astral Rune&nbsp;
                        <img src={astralRune} alt="Craft Astral" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    {runecraftCape === 2 ? "" : "Lvl: 40"}
                    <br></br>
                    {astralOrb && staff !== "astral" ?
                    <React.Fragment>
                    <Tooltip arrow title={battlestaff > 0 ? "" :
                        <React.Fragment>
                        <Typography><font color="white">You need a battlestaff to craft this!</font></Typography>
                        </React.Fragment>
                    } placement="top">
                        <Box>
                        <Button variant="contained" color="success" disabled={battlestaff > 0 ? false : true} onClick={() => {
                            handleClickOpen("astral")
                        }}>
                            Craft Astral Staff&nbsp;
                            <img src={AstralOrb} alt="Craft Astral" width="50px" height="50px"></img>
                        </Button>
                        </Box>
                    </Tooltip>
                    </React.Fragment> : ""}
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showLaw ? '' : "hidden", color: "green", fontSize: "20px"}} className={showLaw ? "slide" : ""} onAnimationEnd={() => {setShowLaw(false); setXpgain(0);}}>
                        +{Math.round(xpgain)}
                    </div>
                    <Button variant="contained" color={lvl >= 54 || runecraftCape === 2 ? "success" : runecraftCape === 1 && lvl >= 53 ? "success" : "error"} disabled={lvl >= 54 || runecraftCape === 2 ? false : runecraftCape === 1 && lvl >= 53 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("law", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Law Rune&nbsp;
                        <img src={lawRune} alt="Craft Astral" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    {runecraftCape === 2 ? "" : "Lvl: 54"}
                    <br></br>
                    {lawOrb && staff !== "law" ?
                    <React.Fragment>
                    <Tooltip arrow title={battlestaff > 0 ? "" :
                        <React.Fragment>
                        <Typography><font color="white">You need a battlestaff to craft this!</font></Typography>
                        </React.Fragment>
                    } placement="top">
                        <Box>
                        <Button variant="contained" color="success" disabled={battlestaff > 0 ? false : true} onClick={() => {
                            handleClickOpen("law")
                        }}>
                            Craft Law Staff&nbsp;
                            <img src={LawOrb} alt="Craft Law" width="50px" height="50px"></img>
                        </Button>
                        </Box>
                    </Tooltip>
                    </React.Fragment> : ""}
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showBlood ? '' : "hidden", color: "green", fontSize: "20px"}} className={showBlood ? "slide" : ""} onAnimationEnd={() => {setShowBlood(false); setXpgain(0);}}>
                        +{Math.round(xpgain)}
                    </div>
                    <Button variant="contained" color={lvl >= 77 || runecraftCape === 2 ? "success" : runecraftCape === 1 && lvl >= 76 ? "success": "error"} disabled={lvl >= 77 || runecraftCape === 2 ? false : runecraftCape === 1 && lvl >= 76 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("blood", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Blood Rune&nbsp;
                        <img src={bloodRune} alt="Craft Astral" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    {runecraftCape === 2 ? "" : "Lvl: 77"}
                    <br></br>
                    {bloodOrb && staff !== "blood" ?
                    <React.Fragment>
                    <Tooltip arrow title={battlestaff > 0 ? "" :
                        <React.Fragment>
                        <Typography><font color="white">You need a battlestaff to craft this!</font></Typography>
                        </React.Fragment>
                    } placement="top">
                        <Box>
                        <Button variant="contained" color="success" disabled={battlestaff > 0 ? false : true} onClick={() => {
                            handleClickOpen("blood")
                        }}>
                            Craft Blood Staff&nbsp;
                            <img src={BloodOrb} alt="Craft Blood" width="50px" height="50px"></img>
                        </Button>
                        </Box>
                    </Tooltip>
                    </React.Fragment> : ""}
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showWrath ? '' : "hidden", color: "green", fontSize: "20px"}} className={showWrath ? "slide" : ""} onAnimationEnd={() => {setShowWrath(false); setXpgain(0);}}>
                        +{Math.round(xpgain)}
                    </div>
                    <Button variant="contained" color={lvl >= 95 || runecraftCape === 2 ? "success" : runecraftCape === 1 && lvl >= 94 ? "success": "error"} disabled={lvl >= 95 || runecraftCape === 2 ? false : runecraftCape === 1 && lvl >= 94 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("wrath", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Wrath Rune&nbsp;
                        <img src={wrathRune} alt="Craft Astral" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    {runecraftCape === 2 ? "" : "Lvl: 95"}
                    <br></br>
                    {wrathOrb && staff !== "wrath" ?
                    <React.Fragment>
                    <Tooltip arrow title={battlestaff > 0 ? "" :
                        <React.Fragment>
                        <Typography><font color="white">You need a battlestaff to craft this!</font></Typography>
                        </React.Fragment>
                    } placement="top">
                        <Box>
                        <Button variant="contained" color="success" disabled={battlestaff > 0 ? false : true} onClick={() => {
                            handleClickOpen("wrath")
                        }}>
                            Craft Wrath Staff&nbsp;
                            <img src={WrathOrb} alt="Craft Wrath" width="50px" height="50px"></img>
                        </Button>
                        </Box>
                    </Tooltip>
                    </React.Fragment> : ""}
                </Grid>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Craft a{type === "air" || type === "earth" || type === "astral" ? "n" : ""} {type.charAt(0).toUpperCase() + type.slice(1)} Staff?</DialogTitle>
                    <DialogContent>
                        <DialogContentText color="white">
                            A{type === "air" || type === "earth" || type === "astral" ? "n" : ""} {type.charAt(0).toUpperCase() + type.slice(1)} Staff will provide you with infinite {type} runes, removing the {type} rune requirements from upgrades.
                            <br></br>
                            <font color="red"><b>You can only have one staff at a time! Any previously made staff will return the orb, but you will lose the battlestaff!</b></font>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} sx={{color: "red"}}>No</Button>
                    <Button onClick={() => {
                        setStaff(type);
                        setBattlestaff(battlestaff - 1);
                        handleClose();
                    }} sx={{color: "green"}}>Yes</Button>
                    </DialogActions>
                </Dialog>
                </React.Fragment>}

                {ouraniaAltar ? 
                <Grid item xs>
                    <div style={{visibility: showOurania ? '' : "hidden", color: "green", fontSize: "20px"}} className={showOurania ? "slide" : ""} onAnimationEnd={() => {setShowOurania(false); setXpgain(0);}}>
                        +{Math.round(xpgain)}
                    </div>
                    <Button variant="contained" color="success" onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("ourania", inventory.length + extra);
                            setInventory([]);
                            if (infinityOutfit === 5 && Math.random() < 0.95) {
                                setExtra(0);
                            } else if (infinityOutfit !== 5) {
                                setExtra(0);
                            }
                        }
                    }}>
                        Craft Ourania Altar&nbsp;
                        <img src={zmiAltar} alt="Craft Ourania" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                </Grid>
                :
                ""}
            </Grid>
        </Box>
        </ThemeProvider>
    )
}