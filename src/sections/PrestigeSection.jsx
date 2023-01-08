import { Box, SwipeableDrawer, Button, List, Grid, Tooltip, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Switch, FormControlLabel, Checkbox } from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Prestige from "../icons/prestige.png";
import zmiAltar from "../icons/ourania_altar.png";
import ironLogo from "../icons/ironman_logo.png";
import RunecraftCape from "../icons/runecraft_cape.png";
import bindingNecklace from "../icons/binding_necklace.png";
import Ring from "../icons/ring_of_the_elements.png";
import Smashing1 from "../icons/smashing1.png";
import Smashing2 from "../icons/smashing2.png";
import Smashing3 from "../icons/smashing3.png";
import elementalStone from "../icons/elemental_stone_small.png";
import catalyticStone from "../icons/catalytic_stone_small.png";
import primordialCrystal from "../icons/primordial_crystal.png";
import pegasianCrystal from "../icons/pegasian_crystal.png";
import eternalCrystal from "../icons/eternal_crystal.png";
import AirOrb from "../icons/air_orb.png";
import EarthOrb from "../icons/earth_orb.png";
import WaterOrb from "../icons/water_orb.png";
import FireOrb from "../icons/fire_orb.png";
import AstralOrb from "../icons/astral_orb.png";
import LawOrb from "../icons/law_orb.png";
import BloodOrb from "../icons/blood_orb.png";
import WrathOrb from "../icons/wrath_orb.png";
import pureEssence from "../icons/rune_essence.png";
import { CheckBox } from "@mui/icons-material";

export default function PrestigeSection(props) {

    const lvl = props.lvl;
    const prestige = props.prestige;
    const pBoost = props.pBoost;
    const mode = props.mode;
    const setMode = props.setMode;

    const air = props.air;
    const earth = props.earth;
    const water = props.water;
    const fire = props.fire;
    const astral = props.astral;
    const law = props.law;
    const blood = props.blood;
    const wrath = props.wrath;

    const elemental = props.elemental;
    const catalytic = props.catalytic;
    const setElemental = props.setElemental;
    const setCatalytic = props.setCatalytic;

    const lawOutfit = props.lawOutfit;
    const bloodOutfit = props.bloodOutfit;
    const wrathOutfit = props.wrathOutfit;

    const airOrb = props.airOrb;
    const setAirOrb = props.setAirOrb;
    const earthOrb = props.earthOrb;
    const setEarthOrb = props.setEarthOrb;
    const waterOrb = props.waterOrb;
    const setWaterOrb = props.setWaterOrb;
    const fireOrb = props.fireOrb;
    const setFireOrb = props.setFireOrb;
    const astralOrb = props.astralOrb;
    const setAstralOrb = props.setAstralOrb;
    const lawOrb = props.lawOrb;
    const setLawOrb = props.setLawOrb;
    const bloodOrb = props.bloodOrb;
    const setBloodOrb = props.setBloodOrb;
    const wrathOrb = props.wrathOrb;
    const setWrathOrb = props.setWrathOrb;

    const staff = props.staff;
    const setStaff = props.setStaff;

    const runecraftCape = props.runecraftCape;
    const setRunecraftCape = props.setRunecraftCape;
    const ringofElements = props.ringofElements;
    const setRingofElements = props.setRingofElements;
    const combination = props.combination;
    const setCombination = props.setCombination;
    const autoclick = props.autoclick;
    const smashing = props.smashing;
    const setSmashing = props.setSmashing;
    const primordial = props.primordial;
    const setPrimordial = props.setPrimordial;
    const pegasian = props.pegasian;
    const setPegasian = props.setPegasian;
    const eternal = props.eternal;
    const setEternal = props.setEternal;
    const setEssenceType = props.setEssenceType;

    const theme = createTheme({
        palette: {
            prestige: {
                main: "gray",
                contrastText: "gold",
            },
            action: {
              disabled: "red"
            },
        },
        components: {
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: "#1c1c1c",
                        color: "#fff",
                    }
                }
            },
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
    var save;

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = () => {
        setEternal(!eternal);
        
    }

    const [state, setState] = useState(false);
    
    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
        return;
        }
        setState(open);
    };

    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
        >
            <List>
                <Tooltip title={
                    <React.Fragment>
                        {(staff === "air" || staff === "earth" || staff === "water" || staff === "fire") ?
                        ((air + earth + water + fire - 9999 >= 10000 || astral + law + blood + wrath >= 10000) ? <Typography>Reset back to Lvl 1, converting all your runes into <font color="aqua">elemental</font> and <font color="yellow">catalytic</font> stones.</Typography>
                        : <Typography>You need at least 10k <font color="aqua">elemental</font> or <font color="yellow">catalytic</font> runes.</Typography>)
                        : (staff === "astral" || staff === "law" || staff === "blood" || staff === "wrath") ?
                        ((air + earth + water + fire >= 10000 || astral + law + blood + wrath - 9999 >= 10000) ? <Typography>Reset back to Lvl 1, converting all your runes into <font color="aqua">elemental</font> and <font color="yellow">catalytic</font> stones.</Typography>
                        : <Typography>You need at least 10k <font color="aqua">elemental</font> or <font color="yellow">catalytic</font> runes.</Typography>)
                        : (air + earth + water + fire >= 10000 || astral + law + blood + wrath >= 10000) ? <Typography>Reset back to Lvl 1, converting all your runes into <font color="aqua">elemental</font> and <font color="yellow">catalytic</font> stones.</Typography> :
                        <Typography>You need at least 10k <font color="aqua">elemental</font> or <font color="yellow">catalytic</font> runes.</Typography>}
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button sx={{border: 2, color: "gold", height: "80px", width: "250px", backgroundColor: "#151111"}} disabled={(staff === "air" || staff === "earth" || staff === "water" || staff === "fire") ? (air + earth + water + fire - 9999 >= 10000 || astral + law + blood + wrath >= 10000) ? false : true : (air + earth + water + fire >= 10000 || astral + law + blood + wrath >= 10000) ? false : true} onClick={handleClickOpen}>
                        <b>Prestige</b>&nbsp; <img src={Prestige} alt="Prestige" height="62px" width="32px"></img>
                    </Button>
                    <Dialog
                    open={open}
                    onClose={handleClose}>
                        <DialogTitle>
                            {"Advance to Prestige " + (prestige + 1) + "?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText color="white">
                                You will reset all your progress. For every 10k <font color="aqua">elemental</font>/<font color="yellow">catalytic</font> runes, you will get 1 <font color="aqua">elemental</font>/<font color="yellow">catalytic</font> guardian stone.
                                <br></br>
                                <br></br>
                                <b>You will recieve <font color="aqua">{(staff === "air" || staff === "earth" || staff === "water" || staff === "fire") ? Math.floor((air + earth + water + fire - 9999) / 10000) : Math.floor((air + earth + water + fire) / 10000)} elemental rune(s)</font>,
                                and <font color="yellow">{(staff === "astral" || staff === "law" || staff === "blood" || staff === "wrath") ? Math.floor((astral + law + blood + wrath - 9999) / 10000) : Math.floor((astral + law + blood + wrath) / 10000)} catalytic rune(s)</font>.</b>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} sx={{color: "red"}}>No</Button>
                            <Button onClick={() => {
                                var save = prestige;
                                var newElem = Math.floor((air + earth + water + fire) / 10000);
                                var newCata = Math.floor((astral + law + blood + wrath) / 10000);
                                if (staff === "air" || staff === "earth" || staff === "water" || staff === "fire") {
                                    newElem = Math.floor((air + earth + water + fire - 9999) / 10000);
                                } else if (staff === "astral" || staff === "law" || staff === "blood" || staff === "wrath") {
                                    newCata = Math.floor((astral + law + blood + wrath - 9999) / 10000);
                                }
                                window.localStorage.clear();
                                localStorage.setItem("prestige", save + 1);
                                localStorage.setItem("elemental", elemental + newElem);
                                localStorage.setItem("catalytic", catalytic + newCata);
                                localStorage.setItem("pBoost", pBoost + newElem + newCata);
                                window.location.reload(false);
                            }} autoFocus sx={{color: "green"}}>Yes</Button>
                        </DialogActions>
                    </Dialog>
                    </span>
                    </Tooltip>

                {
                prestige > 0 ?
                <React.Fragment>
                <br></br>
                <Box>
                    Upgrades
                </Box>

                <Tooltip title={
                    <React.Fragment>
                        {runecraftCape === 0 ? <Typography>Grants a bonus +1 to your runecrafting level.</Typography> : runecraftCape === 1 ? <Typography>Ignores the level requirement to craft runes.</Typography> : <Typography>Runecrafting Cape already trimmed.</Typography>}
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto click prestige"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={runecraftCape > 1 ? true :
                    runecraftCape === 0 ? (elemental < 2 ? true : catalytic < 2 ? true : false) :
                    (elemental < 10 ? true : catalytic < 10 ? true : false)} onClick={() => {
                        if (runecraftCape === 0) {
                            setElemental(elemental - 2);
                            setCatalytic(catalytic - 2);
                            setRunecraftCape(1);
                        } else {
                            setElemental(elemental - 10);
                            setCatalytic(catalytic - 10);
                            setRunecraftCape(2);
                        }
                    }}>
                        {runecraftCape >= 1 ? "Trimmed " : ""}Runecrafting Cape&nbsp; <img src={runecraftCape === 0 ? RunecraftCape : Prestige} alt="Runecrafting Cape" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        {runecraftCape === 0 ?
                        <React.Fragment>
                            <Box sx={{border: 1, width: "39px", color: runecraftCape === 2 ? "black" : elemental >= 2 ? "green" : "red"}} width="55px">
                            <img src={elementalStone} alt="Elemental stone Amount"></img>
                            <br></br>2
                            </Box>

                            <Box sx={{border: 1, width: "39px", color: runecraftCape === 2 ? "black" : catalytic >= 2 ? "green" : "red"}}>
                            <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                            <br></br>2
                            </Box>
                        </React.Fragment>
                        :
                        <React.Fragment>
                        <Box sx={{border: 1, width: "39px", color: runecraftCape === 2 ? "black" : elemental >= 10 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        <br></br>10
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: runecraftCape === 2 ? "black" : catalytic >= 10 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        <br></br>10
                        </Box>
                    </React.Fragment>}
                        </Grid>
                    </Button>
                    </span>
                </Tooltip>
                
                <br></br>

                <Tooltip title={
                    <React.Fragment>
                        <Typography>Allows you to runecraft two elemental runes from one essence, granting their combined XP.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={combination ? true : elemental < 1 ? true : catalytic < 1 ? true : false} onClick={() => {
                        setElemental(elemental - 1);
                        setCatalytic(catalytic - 1);
                        setCombination(true);
                    }}>
                        Binding Necklace&nbsp; <img src={bindingNecklace} alt="Binding Necklace" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: combination ? "black" : elemental >= 1 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        <br></br>1
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: combination ? "black" : catalytic >= 1 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        <br></br>1
                        </Box>
                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

                <br></br>

                <Tooltip title={
                    <React.Fragment>
                        <Typography>Doubles experience and runes gained from crafting elemental runes. Requires elemental runes and law runes to charge.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={ringofElements ? true : elemental < 2 ? true : false} onClick={() => {
                        setElemental(elemental - 2);
                        setRingofElements(true);
                    }}>
                        Ring of the Elements&nbsp; <img src={Ring} alt="Ring of the elements" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: ringofElements ? "black" : elemental >= 2 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        <br></br>2
                        </Box>
                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

                <br></br>

                <Tooltip title={
                    <React.Fragment>
                        {autoclick < 8 ? <Typography>Requires Essence Miner MAX.</Typography> : smashing < 3 ? <Typography>Auto mines {10 * (smashing + 1)} essence every second.</Typography> : <Typography>Upgrade MAXED.</Typography>}
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto click prestige"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={autoclick < 8 ? true : smashing === 3 ? true :
                    smashing === 0 ? (elemental < 1 ? true : catalytic < 2 ? true : false) :
                    smashing === 1 ? (elemental < 2 ? true : catalytic < 3 ? true : false) :
                    (elemental < 3 ? true : catalytic < 4 ? true : false)} onClick={() => {
                        if (smashing === 0) {
                            setElemental(elemental - 1);
                            setCatalytic(catalytic - 2);
                        } else if (smashing === 1) {
                            setElemental(elemental - 2);
                            setCatalytic(catalytic - 3);
                        } else if (smashing === 3) {
                            setElemental(elemental - 3);
                            setCatalytic(catalytic - 4);
                        }
                        setSmashing(smashing + 1);
                    }}>
                        Smashing{smashing < 3 ? "!".repeat(smashing + 1) : " MAX"}&nbsp; <img src={smashing === 0 ? Smashing1 : smashing === 1 ? Smashing2 : Smashing3} alt="Smashing" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        {smashing < 3 ?
                        <React.Fragment>
                            <Box sx={{border: 1, width: "39px", color: smashing === 3 ? "black" : elemental >= 1 ? "green" : "red"}} width="55px">
                            <img src={elementalStone} alt="Elemental stone Amount"></img>
                            <br></br>{1 + smashing}
                            </Box>

                            <Box sx={{border: 1, width: "39px", color: smashing === 3 ? "black" : catalytic >= 2 ? "green" : "red"}}>
                            <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                            <br></br>{2 + smashing}
                            </Box>
                        </React.Fragment>
                        : ""}
                        </Grid>
                    </Button>
                    </span>
                </Tooltip>
                
                <br></br>

                <Tooltip title={
                    <React.Fragment>
                        <Typography>Grants 2 essence per click.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={primordial ? true : elemental < 1 ? true : catalytic < 2 ? true : false} onClick={() => {
                        setElemental(elemental - 1);
                        setCatalytic(catalytic - 2);
                        setPrimordial(true);
                    }}>
                        Primordial Crystal <img src={primordialCrystal} alt="Primordial Crystal" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: primordial ? "black" : elemental >= 1 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        <br></br>1
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: primordial ? "black" : catalytic >= 2 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        <br></br>2
                        </Box>
                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

                <br></br>

                <Tooltip title={
                    <React.Fragment>
                        <Typography>Grants a random rune every time an essence is mined.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={pegasian ? true : elemental < 2 ? true : catalytic < 1 ? true : false} onClick={() => {
                        setElemental(elemental - 2);
                        setCatalytic(catalytic - 1);
                        setPegasian(true);
                    }}>
                        Pegasian Crystal <img src={pegasianCrystal} alt="Pegasian Crystal" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: pegasian ? "black" : elemental >= 2 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        <br></br>2
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: pegasian ? "black" : catalytic >= 1 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        <br></br>1
                        </Box>
                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

                <br></br>

                <Tooltip title={
                    <React.Fragment>
                        <Typography>Grants double XP when runecrafting.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={eternal ? true : elemental < 2 ? true : catalytic < 2 ? true : false} onClick={() => {
                        setElemental(elemental - 2);
                        setCatalytic(catalytic - 2);
                        setEternal(true);
                    }}>
                        Eternal Crystal <img src={eternalCrystal} alt="Eternal Crystal" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: eternal ? "black" : elemental >= 2 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        <br></br>2
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: eternal ? "black" : catalytic >= 2 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        <br></br>2
                        </Box>

                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

                <br></br>

                <Tooltip title={
                    <React.Fragment>
                        <Typography>It looks like you need to attach this to something to utilize its power.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={airOrb ? true : elemental < 5 ? true : catalytic < 5 ? true : false} onClick={() => {
                        setElemental(elemental - 5);
                        setCatalytic(catalytic - 5);
                        setAirOrb(true);
                    }}>
                        Air Orb <img src={AirOrb} alt="Air Orb" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: airOrb ? "black" : elemental >= 5 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        <br></br>5
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: airOrb ? "black" : catalytic >= 5 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        <br></br>5
                        </Box>

                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

                <br></br>

                <Tooltip title={
                    <React.Fragment>
                        <Typography>It looks like you need to attach this to something to utilize its power.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={earthOrb ? true : elemental < 5 ? true : catalytic < 5 ? true : false} onClick={() => {
                        setElemental(elemental - 5);
                        setCatalytic(catalytic - 5);
                        setEarthOrb(true);
                    }}>
                        Earth Orb <img src={EarthOrb} alt="Earth Orb" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: earthOrb ? "black" : elemental >= 5 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        <br></br>5
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: earthOrb ? "black" : catalytic >= 5 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        <br></br>5
                        </Box>

                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

                <br></br>
                
                <Tooltip title={
                    <React.Fragment>
                        <Typography>It looks like you need to attach this to something to utilize its power.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={waterOrb ? true : elemental < 5 ? true : catalytic < 5 ? true : false} onClick={() => {
                        setElemental(elemental - 5);
                        setCatalytic(catalytic - 5);
                        setWaterOrb(true);
                    }}>
                        Water Orb <img src={WaterOrb} alt="Water Orb" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: waterOrb ? "black" : elemental >= 5 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        <br></br>5
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: waterOrb ? "black" : catalytic >= 5 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        <br></br>5
                        </Box>

                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

                <br></br>

                <Tooltip title={
                    <React.Fragment>
                        <Typography>It looks like you need to attach this to something to utilize its power.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={fireOrb ? true : elemental < 5 ? true : catalytic < 5 ? true : false} onClick={() => {
                        setElemental(elemental - 5);
                        setCatalytic(catalytic - 5);
                        setFireOrb(true);
                    }}>
                        Fire Orb <img src={FireOrb} alt="Fire Orb" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: fireOrb ? "black" : elemental >= 5 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        <br></br>5
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: fireOrb ? "black" : catalytic >= 5 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        <br></br>5
                        </Box>

                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

                <br></br>
                
                <Tooltip title={
                    <React.Fragment>
                        <Typography>It looks like you need to attach this to something to utilize its power.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={astralOrb ? true : elemental < 5 ? true : catalytic < 5 ? true : false} onClick={() => {
                        setElemental(elemental - 5);
                        setCatalytic(catalytic - 5);
                        setAstralOrb(true);
                    }}>
                        Astral Orb <img src={AstralOrb} alt="Astral Orb" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: astralOrb ? "black" : elemental >= 5 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        <br></br>5
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: astralOrb ? "black" : catalytic >= 5 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        <br></br>5
                        </Box>

                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

                <br></br>

                {lawOutfit === 5 ? 
                <React.Fragment>
                <Tooltip title={
                    <React.Fragment>
                        <Typography>It looks like you need to attach this to something to utilize its power.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={lawOrb ? true : elemental < 5 ? true : catalytic < 5 ? true : false} onClick={() => {
                        setElemental(elemental - 5);
                        setCatalytic(catalytic - 5);
                        setLawOrb(true);
                    }}>
                        Law Orb <img src={LawOrb} alt="Law Orb" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: lawOrb ? "black" : elemental >= 5 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        <br></br>5
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: lawOrb ? "black" : catalytic >= 5 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        <br></br>5
                        </Box>

                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

                <br></br>
                </React.Fragment>
                :
                ""}

                {bloodOutfit === 5 ? 
                <React.Fragment>
                <Tooltip title={
                    <React.Fragment>
                        <Typography>It looks like you need to attach this to something to utilize its power.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={bloodOrb ? true : elemental < 5 ? true : catalytic < 5 ? true : false} onClick={() => {
                        setElemental(elemental - 5);
                        setCatalytic(catalytic - 5);
                        setBloodOrb(true);
                    }}>
                        Blood Orb <img src={BloodOrb} alt="Blood Orb" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: bloodOrb ? "black" : elemental >= 5 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        <br></br>5
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: bloodOrb ? "black" : catalytic >= 5 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        <br></br>5
                        </Box>

                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

                <br></br>
                </React.Fragment>
                :
                ""}

                {wrathOutfit === 5 ? 
                <React.Fragment>
                <Tooltip title={
                    <React.Fragment>
                        <Typography>It looks like you need to attach this to something to utilize its power.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={wrathOrb ? true : elemental < 5 ? true : catalytic < 5 ? true : false} onClick={() => {
                        setElemental(elemental - 5);
                        setCatalytic(catalytic - 5);
                        setWrathOrb(true);
                    }}>
                        Wrath Orb <img src={WrathOrb} alt="Wrath Orb" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: wrathOrb ? "black" : elemental >= 5 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        <br></br>5
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: wrathOrb ? "black" : catalytic >= 5 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        <br></br>5
                        </Box>

                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

                <br></br>
                </React.Fragment>
                :
                ""}

                </React.Fragment>
                :
                ""
                }
            </List>
        </Box>
            )

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{paddingBottom: "15px", mx: "auto", marginRight: "0.5%", marginLeft: "auto"}}>
                <Button variant="contained" color="prestige" onClick={toggleDrawer(true)}>Prestige Store</Button>
                <SwipeableDrawer
                anchor="left"
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}>
                    {list("left")}
                </SwipeableDrawer>
            </Box>
        </ThemeProvider>
    )
}