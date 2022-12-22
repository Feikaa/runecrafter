import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";
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
import zmiAltar from "../icons/ourania_altar.png";
import craftAudio from "../audio/craft.wav";
import React, { useState } from "react";
import "../styles/RunecraftSection.scss";
import { useEffect } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";

export default function RunecraftSection(props) {

    const mute = props.mute;
    const mode = props.mode;

    const lvl = props.lvl;
    const setLvl = props.setLvl;
    const prestige = props.prestige;
    const inventory = props.inventory;
    const setInventory = props.setInventory;
    const xp = props.xp;
    const setXp = props.setXp;
    const totalxp = props.totalxp;
    const setTotalxp = props.setTotalxp;
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

    const autoaltar = props.autoaltar;
    const runename = props.runename;
    const ouraniaAltar = props.ouraniaAltar;

    const pouch = props.pouch;
    const extraList = [3, 9, 18, 30, 40];
    const extra = props.extra;
    const setExtra = props.setExtra;

    const hat = props.hat;
    const top = props.top;
    const bottom = props.bottom;
    const boots = props.boots;
    const bonus = props.bonus;
    const setBonus = props.setBonus;

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
    const infinv = props.infinv;
    const setInfinv = props.setInfinv;

    var xpbase = 0;

    const theme = createTheme({
        palette: {
            action: {
                disabled: "red"
            }
        }
    })

    useEffect(() => {
        setBonus(1 + ([hat, top, bottom, boots].reduce((a, f) => a + f, 0) / 10))
        if (hat && top && bottom && boots) {
            setBonus(1.6)
        }
    }, [hat, top, bottom, boots])

    function craftRune(rune, amt) {
        if (!mute) {audio.play();}
        var boost = 1;
        if (essenceType === "daeyalt_essence") {
            boost = 1.5;
        } else if (essenceType === "dark_essence") {
            boost = 2;
        }

        if (rune === "air") {
            xpbase = 5;
            setShowAir(true);
            setAir(air + Math.floor(amt * bonus * (1 + prestige/10)));
        } else if (rune === "earth") {
            xpbase = 8;
            setShowEarth(true);
            setEarth(earth + Math.floor(amt * bonus * (1 + prestige/10)));
        } else if (rune === "water") {
            xpbase = 10;
            setShowWater(true);
            setWater(water + Math.floor(amt * bonus * (1 + prestige/10)));
        } else if (rune === "fire") {
            xpbase = 12;
            setShowFire(true);
            setFire(fire + Math.floor(amt * bonus * (1 + prestige/10)));
        } else if (rune === "astral") {
            xpbase = 15;
            setShowAstral(true);
            setAstral(astral + Math.floor(amt * bonus * (1 + prestige/10)));
        } else if (rune === "law") {
            xpbase = 19;
            setShowLaw(true);
            setLaw(law + Math.floor(amt * bonus * (1 + prestige/10)));
        } else if (rune === "blood") {
            xpbase = 24;
            setShowBlood(true);
            setBlood(blood + Math.floor(amt * bonus * (1 + prestige/10)));
        } else if (rune === "wrath") {
            xpbase = 30;
            setShowWrath(true);
            setWrath(wrath + Math.floor(amt * bonus * (1 + prestige/10)));
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
            setWrath(wrath + Math.floor(runes[0] * bonus * (1 + prestige/10)));
            setBlood(blood + Math.floor(runes[1] * bonus * (1 + prestige/10)));
            setLaw(law + Math.floor(runes[2] * bonus * (1 + prestige/10)));
            setAstral(astral + Math.floor(runes[3] * bonus * (1 + prestige/10)));
            setFire(fire + Math.floor(runes[4] * bonus * (1 + prestige/10)));
            setWater(water + Math.floor(runes[5] * bonus * (1 + prestige/10)));
            setEarth(earth + Math.floor(runes[6] * bonus * (1 + prestige/10)));
            setAir(air + Math.floor(runes[7] * bonus * (1 + prestige/10)));

            setShowOurania(true);
            setXpgain(Math.floor(((30 * runes[0]) + (24 * runes[1]) + (19 * runes[2]) + (15 * runes[3]) + (12 * runes[4]) + (10 * runes[5]) + (8 * runes[6]) + (5 * runes[7])) * boost * 1.7));
        }

        if (rune !== "ourania") {
            setXpgain(Math.floor(xpbase * amt * boost));
        }
    }

    function calcXp(base) {
        setTotalxp((totalxp + Math.round(xpgain * (1 + prestige/10))))
        if (xp + Math.round(xpgain * (1 + prestige/10)) >= (1/4 * Math.floor(lvl + 300 * (Math.pow(2, (lvl) / 7))))) {
            calcLevel(xp + Math.round(xpgain * (1 + prestige/10)), 0, base)
        } else {
            setXp(xp + Math.round(xpgain * (1 + prestige/10)));
            setProgress(Math.floor((xp + Math.round(xpgain * (1 + prestige/10))) / (1/4 * Math.floor(lvl + 300 * (Math.pow(2, (lvl) / 7)))) * 100));
        }
    }

    function calcLevel(carryover, gain, base) {
        var newCarryover = Math.floor(carryover - (1/4 * Math.floor((lvl + gain) + 300 * (Math.pow(2, (lvl + gain) / 7)))));
        if (newCarryover > (1/4 * Math.floor((lvl + gain + 1) + 300 * (Math.pow(2, (lvl + gain + 1) / 7))))) {
            calcLevel(newCarryover, gain + 1, base);
        } else {
            setLvl(lvl + gain + 1);
            var leftover = Math.floor(newCarryover / base);
            setXp(0 + newCarryover);
            setProgress(0 + leftover);
        }
    }

    function craftCombination(rune, amt) {
        if (!mute) {audio.play();}
        var boost = 1;
        if (essenceType === "daeyalt_essence") {
            boost = 1.5;
        } else if (essenceType === "dark_essence") {
            boost = 2;
        }

        if (rune === "dust") {
            xpbase = 13;
            setShowDust(true);
            setAir(air + Math.floor(amt * bonus));
            setEarth(earth + Math.floor(amt * bonus));
        } else if (rune === "mist") {
            xpbase = 15;
            setShowMist(true);
            setAir(air + Math.floor(amt * bonus));
            setWater(water + Math.floor(amt * bonus));
        } else if (rune === "mud") {
            xpbase = 18;
            setShowMud(true);
            setEarth(earth + Math.floor(amt * bonus));
            setWater(water + Math.floor(amt * bonus));
        } else if (rune === "smoke") {
            xpbase = 17;
            setShowSmoke(true);
            setAir(air + Math.floor(amt * bonus));
            setFire(fire + Math.floor(amt * bonus));
        } else if (rune === "steam") {
            xpbase = 22;
            setShowSteam(true);
            setWater(water + Math.floor(amt * bonus));
            setFire(fire + Math.floor(amt * bonus));
        } else if (rune === "lava") {
            xpbase = 20;
            setEarth(earth + Math.floor(amt * bonus));
            setFire(fire + Math.floor(amt * bonus));
        }

        setXpgain(Math.floor(xpbase * amt * boost));
    }

    useEffect(() => {
        if (xpgain > 0) {
            calcXp((xpgain / (inventory.length + extra)));
            if (eternal && essenceType === "rune_essence") {
                setInfinv(0);
            } else {
                setInventory([]);
                setExtra(0);
            }
        }
    }, [xpgain]);

    useEffect(() => {
        if (autoaltar && inventory.length === 28 && (!pouch || extra === extraList[pouch - 1]) && runename !== "none") {
            craftRune(runename, inventory.length + extra);
        }
    }, [inventory, runename, extra]);

    return (
        <ThemeProvider theme={theme}>
        <Box sx={{width: "80%"}}>
            {/* XP: {xp}
            <br></br>
            Next Lvl: {(1/4 * Math.floor(lvl + 300 * (Math.pow(2, (lvl) / 7))))} */}
            <Grid container spacing={3} sx={{ marginLeft: "0px"}}>
                {mode === "zmi" ? ""
                :
                !combination ? 
                <React.Fragment>
                <Grid item xs>
                <div style={{visibility: showAir ? '' : "hidden", color: "green", fontSize: "20px"}} className={showAir ? "slide" : ""} onAnimationEnd={() => {setShowAir(false); setXpgain(0);}}>
                    +{Math.round(xpgain * (1 + prestige/10))}
                </div>
                    <Button variant="contained" color="success" onClick={() => {
                        if (eternal && essenceType === "rune_essence" && infinv > 0) {
                            craftRune("air", infinv);
                        }
                        else if (inventory.length > 0 || extra > 0) { // this if should be in the function btw
                            craftRune("air", inventory.length + extra);
                        }
                    }}>
                        Craft Air Rune&nbsp;
                        <img src={airRune} alt="Craft Air" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 1
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showEarth ? '' : "hidden", color: "green", fontSize: "20px"}} className={showEarth ? "slide" : ""} onAnimationEnd={() => {setShowEarth(false); setXpgain(0);}}>
                        +{Math.round(xpgain * (1 + prestige/10))}
                    </div>
                    <Button variant="contained" color={lvl >= 9 ? "success" : "error"} disabled={lvl >= 9 ? false : true} onClick={() => {
                        if (eternal && essenceType === "rune_essence" && infinv > 0) {
                            craftRune("earth", infinv);
                        }
                        else if (inventory.length > 0) {
                            craftRune("earth", inventory.length + extra);
                        }
                    }}>
                        Craft Earth Rune&nbsp;
                        <img src={earthRune} alt="Craft Earth" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 9
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showWater ? '' : "hidden", color: "green", fontSize: "20px"}} className={showWater ? "slide" : ""} onAnimationEnd={() => {setShowWater(false); setXpgain(0);}}>
                        +{Math.round(xpgain * (1 + prestige/10))}
                    </div>
                    <Button variant="contained" color={lvl >= 14 ? "success" : "error"} disabled={lvl >= 14 ? false : true} onClick={() => {
                        if (eternal && essenceType === "rune_essence" && infinv > 0) {
                            craftRune("water", infinv);
                        }
                        else if (inventory.length > 0) {
                            craftRune("water", inventory.length + extra);
                        }
                    }}>
                        Craft Water Rune&nbsp;
                        <img src={waterRune} alt="Craft Water" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 14
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showFire ? '' : "hidden", color: "green", fontSize: "20px"}} className={showFire ? "slide" : ""} onAnimationEnd={() => {setShowFire(false); setXpgain(0);}}>
                        +{Math.round(xpgain * (1 + prestige/10))}
                    </div>
                    <Button variant="contained" color={lvl >= 27 ? "success" : "error"} disabled={lvl >= 27 ? false : true} onClick={() => {
                        if (eternal && essenceType === "rune_essence" && infinv > 0) {
                            craftRune("fire", infinv);
                        }
                        else if (inventory.length > 0) {
                            craftRune("fire", inventory.length + extra);
                        }
                    }}>
                        Craft Fire Rune&nbsp;
                        <img src={fireRune} alt="Craft Fire" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 27
                </Grid>
                </React.Fragment>
                :
                // Combinations
                <React.Fragment>
                <Tooltip title={
                    <React.Fragment>
                        <Typography>Combination: <img src={airRune} width="36px" height="36px" alt="Air Rune"></img><img src={earthRune} width="36px" height="36px" alt="Earth Rune"></img></Typography>
                    </React.Fragment>} arrow placement="right" disableInteractive>
                <Grid item xs>
                <div style={{visibility: showDust ? '' : "hidden", color: "green", fontSize: "20px"}} className={showDust ? "slide" : ""} onAnimationEnd={() => {setShowDust(false); setXpgain(0);}}>
                    +{Math.round(xpgain * (1 + prestige/10))}
                </div>
                    <Button variant="contained" color="success" onClick={() => {
                        if (eternal && essenceType === "rune_essence" && infinv > 0) {
                            craftCombination("dust", infinv);
                        }
                        else if (inventory.length > 0 || extra > 0) { // this if should be in the function btw
                            craftCombination("dust", inventory.length + extra);
                        }
                    }}>
                        Craft Dust Rune&nbsp;
                        <img src={dustRune} alt="Craft Dust" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 1
                </Grid>
                </Tooltip>

                <Tooltip title={
                    <React.Fragment>
                        <Typography>Combination: <img src={airRune} width="36px" height="36px" alt="Air Rune"></img><img src={waterRune} width="36px" height="36px" alt="Water Rune"></img></Typography>
                    </React.Fragment>} arrow placement="right" disableInteractive>
                <Grid item xs>
                    <div style={{visibility: showMist ? '' : "hidden", color: "green", fontSize: "20px"}} className={showMist ? "slide" : ""} onAnimationEnd={() => {setShowMist(false); setXpgain(0);}}>
                        +{Math.round(xpgain * (1 + prestige/10))}
                    </div>
                    <Button variant="contained" color={lvl >= 8 ? "success" : "error"} disabled={lvl >= 8 ? false : true} onClick={() => {
                        if (eternal && essenceType === "rune_essence" && infinv > 0) {
                            craftCombination("mist", infinv);
                        }
                        else if (inventory.length > 0) {
                            craftCombination("mist", inventory.length + extra);
                        }
                    }}>
                        Craft Mist Rune&nbsp;
                        <img src={mistRune} alt="Craft Mist" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 8
                </Grid>
                </Tooltip>

                <Tooltip title={
                    <React.Fragment>
                        <Typography>Combination: <img src={waterRune} width="36px" height="36px" alt="Water Rune"></img><img src={earthRune} width="36px" height="36px" alt="Earth Rune"></img></Typography>
                    </React.Fragment>} arrow placement="right" disableInteractive>
                <Grid item xs>
                    <div style={{visibility: showMud ? '' : "hidden", color: "green", fontSize: "20px"}} className={showMud ? "slide" : ""} onAnimationEnd={() => {setShowMud(false); setXpgain(0);}}>
                        +{Math.round(xpgain * (1 + prestige/10))}
                    </div>
                    <Button variant="contained" color={lvl >= 13 ? "success" : "error"} disabled={lvl >= 13 ? false : true} onClick={() => {
                        if (eternal && essenceType === "rune_essence" && infinv > 0) {
                            craftCombination("mud", infinv);
                        }
                        else if (inventory.length > 0) {
                            craftCombination("mud", inventory.length + extra);
                        }
                    }}>
                        Craft Mud Rune&nbsp;
                        <img src={mudRune} alt="Craft Mud" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 13
                </Grid>
                </Tooltip>

                <Tooltip title={
                    <React.Fragment>
                        <Typography>Combination: <img src={airRune} width="36px" height="36px" alt="Air Rune"></img><img src={fireRune} width="36px" height="36px" alt="Fire Rune"></img></Typography>
                    </React.Fragment>} arrow placement="right" disableInteractive>
                <Grid item xs>
                    <div style={{visibility: showSmoke ? '' : "hidden", color: "green", fontSize: "20px"}} className={showSmoke ? "slide" : ""} onAnimationEnd={() => {setShowSmoke(false); setXpgain(0);}}>
                        +{Math.round(xpgain * (1 + prestige/10))}
                    </div>
                    <Button variant="contained" color={lvl >= 15 ? "success" : "error"} disabled={lvl >= 15 ? false : true} onClick={() => {
                        if (eternal && essenceType === "rune_essence" && infinv > 0) {
                            craftCombination("smoke", infinv);
                        }
                        else if (inventory.length > 0) {
                            craftCombination("smoke", inventory.length + extra);
                        }
                    }}>
                        Craft Smoke Rune&nbsp;
                        <img src={smokeRune} alt="Craft Smoke" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 15
                </Grid>
                </Tooltip>

                <Tooltip title={
                    <React.Fragment>
                        <Typography>Combination: <img src={earthRune} width="36px" height="36px" alt="Earth Rune"></img><img src={fireRune} width="36px" height="36px" alt="Fire Rune"></img></Typography>
                    </React.Fragment>} arrow placement="right" disableInteractive>
                <Grid item xs>
                    <div style={{visibility: showLava ? '' : "hidden", color: "green", fontSize: "20px"}} className={showLava ? "slide" : ""} onAnimationEnd={() => {setShowLava(false); setXpgain(0);}}>
                        +{Math.round(xpgain * (1 + prestige/10))}
                    </div>
                    <Button variant="contained" color={lvl >= 19 ? "success" : "error"} disabled={lvl >= 19 ? false : true} onClick={() => {
                        if (eternal && essenceType === "rune_essence" && infinv > 0) {
                            craftCombination("lava", infinv);
                        }
                        else if (inventory.length > 0) {
                            craftCombination("lava", inventory.length + extra);
                        }
                    }}>
                        Craft Lava Rune&nbsp;
                        <img src={lavaRune} alt="Craft Lava" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 19
                </Grid>
                </Tooltip>

                <Tooltip title={
                    <React.Fragment>
                        <Typography>Combination: <img src={waterRune} width="36px" height="36px" alt="Water Rune"></img><img src={fireRune} width="36px" height="36px" alt="Fire Rune"></img></Typography>
                    </React.Fragment>} arrow placement="right" disableInteractive>
                <Grid item xs>
                    <div style={{visibility: showSteam ? '' : "hidden", color: "green", fontSize: "20px"}} className={showSteam ? "slide" : ""} onAnimationEnd={() => {setShowSteam(false); setXpgain(0);}}>
                        +{Math.round(xpgain * (1 + prestige/10))}
                    </div>
                    <Button variant="contained" color={lvl >= 23 ? "success" : "error"} disabled={lvl >= 23 ? false : true} onClick={() => {
                        if (eternal && essenceType === "rune_essence" && infinv > 0) {
                            craftCombination("steam", infinv);
                        }
                        else if (inventory.length > 0) {
                            craftCombination("steam", inventory.length + extra);
                        }
                    }}>
                        Craft Steam Rune&nbsp;
                        <img src={steamRune} alt="Craft Steam" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 23
                </Grid>
                </Tooltip>
                </React.Fragment>
                }

                {mode === "zmi" ? ""
                :
                <React.Fragment>
                <Grid item xs>
                    <div style={{visibility: showAstral ? '' : "hidden", color: "green", fontSize: "20px"}} className={showAstral ? "slide" : ""} onAnimationEnd={() => {setShowAstral(false); setXpgain(0);}}>
                        +{Math.round(xpgain * (1 + prestige/10))}
                    </div>
                    <Button variant="contained" color={lvl >= 40 ? "success" : "error"} disabled={lvl >= 40 ? false : true} onClick={() => {
                        if (eternal && essenceType === "rune_essence" && infinv > 0) {
                            craftRune("astral", infinv);
                        }
                        else if (inventory.length > 0) {
                            craftRune("astral", inventory.length + extra);
                        }
                    }}>
                        Craft Astral Rune&nbsp;
                        <img src={astralRune} alt="Craft Astral" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 40
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showLaw ? '' : "hidden", color: "green", fontSize: "20px"}} className={showLaw ? "slide" : ""} onAnimationEnd={() => {setShowLaw(false); setXpgain(0);}}>
                        +{Math.round(xpgain * (1 + prestige/10))}
                    </div>
                    <Button variant="contained" color={lvl >= 54 ? "success" : "error"} disabled={lvl >= 54 ? false : true} onClick={() => {
                        if (eternal && essenceType === "rune_essence" && infinv > 0) {
                            craftRune("law", infinv);
                        }
                        else if (inventory.length > 0) {
                            craftRune("law", inventory.length + extra);
                        }
                    }}>
                        Craft Law Rune&nbsp;
                        <img src={lawRune} alt="Craft Astral" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 54
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showBlood ? '' : "hidden", color: "green", fontSize: "20px"}} className={showBlood ? "slide" : ""} onAnimationEnd={() => {setShowBlood(false); setXpgain(0);}}>
                        +{Math.round(xpgain * (1 + prestige/10))}
                    </div>
                    <Button variant="contained" color={lvl >= 77 ? "success" : "error"} disabled={lvl >= 77 ? false : true} onClick={() => {
                        if (eternal && essenceType === "rune_essence" && infinv > 0) {
                            craftRune("blood", infinv);
                        }
                        else if (inventory.length > 0) {
                            craftRune("blood", inventory.length + extra);
                        }
                    }}>
                        Craft Blood Rune&nbsp;
                        <img src={bloodRune} alt="Craft Astral" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 77
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showWrath ? '' : "hidden", color: "green", fontSize: "20px"}} className={showWrath ? "slide" : ""} onAnimationEnd={() => {setShowWrath(false); setXpgain(0);}}>
                        +{Math.round(xpgain * (1 + prestige/10))}
                    </div>
                    <Button variant="contained" color={lvl >= 95 ? "success" : "error"} disabled={lvl >= 95 ? false : true} onClick={() => {
                        if (eternal && essenceType === "rune_essence" && infinv > 0) {
                            craftRune("wrath", infinv);
                        }
                        else if (inventory.length > 0) {
                            craftRune("wrath", inventory.length + extra);
                        }
                    }}>
                        Craft Wrath Rune&nbsp;
                        <img src={wrathRune} alt="Craft Astral" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 95
                </Grid>
                </React.Fragment>}

                {ouraniaAltar ? 
                <Grid item xs>
                    <div style={{visibility: showOurania ? '' : "hidden", color: "green", fontSize: "20px"}} className={showOurania ? "slide" : ""} onAnimationEnd={() => {setShowOurania(false); setXpgain(0);}}>
                        +{Math.round(xpgain * (1 + prestige/10))}
                    </div>
                    <Button variant="contained" color="success" onClick={() => {
                        if (eternal && essenceType === "rune_essence") {
                            craftRune("ourania", infinv);
                        }
                        else if (inventory.length > 0) {
                            craftRune("ourania", inventory.length + extra);
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