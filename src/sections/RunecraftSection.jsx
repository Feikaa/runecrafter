import { Box, Button, Grid } from "@mui/material";
import airRune from "../icons/air_rune.png";
import earthRune from "../icons/earth_rune.png";
import cosmicRune from "../icons/cosmic_rune.png";
import astralRune from "../icons/astral_rune.png";
import lawRune from "../icons/law_rune.webp";
import bloodRune from "../icons/blood_rune.png";
import wrathRune from "../icons/wrath_rune.png";
import craftAudio from "../audio/craft.wav";
import { useState } from "react";
import "../styles/RunecraftSection.scss";
import { useEffect } from "react";

export default function RunecraftSection(props) {

    const lvl = props.lvl;
    const setLvl = props.setLvl;
    const inventory = props.inventory;
    const setInventory = props.setInventory;
    const xp = props.xp;
    const setXp = props.setXp;
    const progress = props.progress;
    const setProgress = props.setProgress;

    const air = props.air;
    const earth = props.earth;
    const cosmic = props.cosmic;
    const astral = props.astral;
    const law = props.law;
    const blood = props.blood;
    const wrath = props.wrath;
    const setAir = props.setAir;
    const setEarth = props.setEarth;
    const setCosmic = props.setCosmic;
    const setAstral = props.setAstral;
    const setLaw = props.setLaw;
    const setBlood = props.setBlood;
    const setWrath = props.setWrath;

    const autoaltar = props.autoaltar;
    const runename = props.runename;

    const audio = new Audio(craftAudio);
    audio.volume = 0.1;

    const [showAir, setShowAir] = useState(false);
    const [showEarth, setShowEarth] = useState(false);
    const [showCosmic, setShowCosmic] = useState(false);
    const [showAstral, setShowAstral] = useState(false);
    const [showLaw, setShowLaw] = useState(false);
    const [showBlood, setShowBlood] = useState(false);
    const [showWrath, setShowWrath] = useState(false);
    const [xpgain, setXpgain] = useState(0);
    var xpbase = 0;

    function craftRune(rune, amt) {
        audio.play();
        if (rune === "air") {
            xpbase = 5;
            setShowAir(true);
            setAir(air + amt);
        } else if (rune === "earth") {
            xpbase = 8;
            setShowEarth(true);
            setEarth(earth + amt);
        } else if (rune === "cosmic") {
            xpbase = 12;
            setShowCosmic(true);
            setCosmic(cosmic + amt);
        } else if (rune === "astral") {
            xpbase = 15;
            setShowAstral(true);
            setAstral(astral + amt);
        } else if (rune === "law") {
            xpbase = 19;
            setShowLaw(true);
            setLaw(law + amt);
        } else if (rune === "blood") {
            xpbase = 24;
            setShowBlood(true);
            setBlood(blood + amt);
        } else {
            xpbase = 30;
            setShowWrath(true);
            setWrath(wrath + amt);
        }
        setXpgain(xpbase * amt);
    }

    function calcXp(base) {
        if (xp + xpgain >= (1/4 * Math.floor(lvl + 300 * (Math.pow(2, (lvl) / 7))))) {
            setLvl(lvl + 1);
            var carryover = Math.floor(xp+xpgain - (1/4 * Math.floor(lvl + 300 * (Math.pow(2, (lvl) / 7)))));
            var leftover = Math.floor(carryover / base);
            // console.log("carryover: " + carryover);
            // console.log("leftover: " + leftover);
            // console.log("Lvl: " + lvl);
            setXp(0 + carryover);
            setProgress(0 + leftover);
        } else {
            setXp(xp + xpgain);
            setProgress(progress + Math.floor(xpgain / (1/4 * Math.floor(lvl + 300 * (Math.pow(2, (lvl) / 7)))) * 100));
        }
    }

    useEffect(() => {
        if (xpgain > 0) {
            calcXp((xpgain / inventory.length));
            setInventory([]);
        }
    }, [xpgain]);

    useEffect(() => {
        if (autoaltar && inventory.length === 24) {
            craftRune(runename, inventory.length);
        }
    }, [inventory]);

    return (
        <Box sx={{width: "80%"}}>
            {/* XP: {xp}
            <br></br>
            Next Lvl: {(1/4 * Math.floor(lvl + 300 * (Math.pow(2, (lvl) / 7))))} */}
            <Grid container spacing={3} sx={{ marginTop: "0px", marginLeft: "0px"}}>
                <Grid item xs>
                <div style={{visibility: showAir ? '' : "hidden", color: "green", fontSize: "20px"}} className={showAir ? "slide" : ""} onAnimationEnd={() => {setShowAir(false); setXpgain(0);}}>
                    +{xpgain}
                </div>
                    <Button variant="contained" color="success" onClick={() => {
                        if (inventory.length > 0) { // this if should be in the function btw
                            craftRune("air", inventory.length);
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
                        +{xpgain}
                    </div>
                    <Button variant="contained" color={lvl >= 9 ? "success" : "error"} disabled={lvl >= 9 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("earth", inventory.length);
                        }
                    }}>
                        Craft Earth Rune&nbsp;
                        <img src={earthRune} alt="Craft Earth" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 9
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showCosmic ? '' : "hidden", color: "green", fontSize: "20px"}} className={showCosmic ? "slide" : ""} onAnimationEnd={() => {setShowCosmic(false); setXpgain(0);}}>
                        +{xpgain}
                    </div>
                    <Button variant="contained" color={lvl >= 27 ? "success" : "error"} disabled={lvl >= 27 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("cosmic", inventory.length);
                        }
                    }}>
                        Craft Cosmic Rune&nbsp;
                        <img src={cosmicRune} alt="Craft Cosmic" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 27
                </Grid>

                <Grid item xs>
                    <div style={{visibility: showAstral ? '' : "hidden", color: "green", fontSize: "20px"}} className={showAstral ? "slide" : ""} onAnimationEnd={() => {setShowAstral(false); setXpgain(0);}}>
                        +{xpgain}
                    </div>
                    <Button variant="contained" color={lvl >= 40 ? "success" : "error"} disabled={lvl >= 40 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("astral", inventory.length);
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
                        +{xpgain}
                    </div>
                    <Button variant="contained" color={lvl >= 54 ? "success" : "error"} disabled={lvl >= 54 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("law", inventory.length);
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
                        +{xpgain}
                    </div>
                    <Button variant="contained" color={lvl >= 77 ? "success" : "error"} disabled={lvl >= 77 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("blood", inventory.length);
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
                        +{xpgain}
                    </div>
                    <Button variant="contained" color={lvl >= 95 ? "success" : "error"} disabled={lvl >= 95 ? false : true} onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("wrath", inventory.length);
                        }
                    }}>
                        Craft Wrath Rune&nbsp;
                        <img src={wrathRune} alt="Craft Astral" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 95
                </Grid>
            </Grid>
        </Box>
    )
}