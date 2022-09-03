import { Box, SwipeableDrawer, Button, List, Grid, Tooltip, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Switch, FormControlLabel, Checkbox } from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Prestige from "../icons/prestige.png";
import zmiAltar from "../icons/ourania_altar.png";
import ironLogo from "../icons/ironman_logo.png";
import bindingNecklace from "../icons/binding_necklace.png";
import elementalStone from "../icons/elemental_stone_small.png";
import catalyticStone from "../icons/catalytic_stone_small.png";
import primordialCrystal from "../icons/primordial_crystal.png";
import pegasianCrystal from "../icons/pegasian_crystal.png";
import eternalCrystal from "../icons/eternal_crystal.png";
import pureEssence from "../icons/rune_essence.png";
import { CheckBox } from "@mui/icons-material";

export default function PrestigeSection(props) {

    const lvl = props.lvl;
    const prestige = props.prestige;
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

    const combination = props.combination;
    const setCombination = props.setCombination;
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
                {
                lvl >= 99 ?
                <Tooltip title={
                    <React.Fragment>
                        <Typography>Reset back to Lvl 1, converting all your runes into <font color="aqua">elemental</font> and <font color="yellow">catalytic</font> stones.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button sx={{border: 2, color: "gold", height: "80px", width: "250px", backgroundColor: "#151111"}} onClick={handleClickOpen}>
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
                                You will reset all your progress. All your runes will turn into <font color="aqua">elemental</font> and <font color="yellow">catalytic</font> guardian stones.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} sx={{color: "white"}}>No</Button>
                            <Button onClick={() => {
                                var save = prestige;
                                var newElem = elemental + air + earth + water + fire;
                                var newCata = catalytic + astral + law + blood + wrath;
                                window.localStorage.clear();
                                localStorage.setItem("prestige", save + 1);
                                localStorage.setItem("elemental", newElem);
                                localStorage.setItem("catalytic", newCata);
                                window.location.reload(false);
                            }} autoFocus sx={{color: "white"}}>Yes</Button>
                        </DialogActions>
                    </Dialog>
                    </span>
                    </Tooltip>
                :                       
                ""
                }

                {
                prestige > 0 ?
                <React.Fragment>
                <br></br>
                <Box>
                    Upgrades
                </Box>
                <Tooltip title={
                    <React.Fragment>
                        <Typography>Allows you to runecraft two elemental runes from one essence, granting their combined XP. </Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={combination ? true : elemental < 100000 ? true : false} onClick={() => {
                        setElemental(elemental - 100000);
                        setCombination(true);
                    }}>
                        Binding Necklace&nbsp; <img src={bindingNecklace} alt="Binding Necklace" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: combination ? "black" : elemental >= 100000 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        100k
                        </Box>
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
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={primordial ? true : elemental < 50000 ? true : catalytic < 100000 ? true : false} onClick={() => {
                        setElemental(elemental - 50000);
                        setCatalytic(catalytic - 100000);
                        setPrimordial(true);
                    }}>
                        Primordial Crystal <img src={primordialCrystal} alt="Primordial Crystal" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: primordial ? "black" : elemental >= 50000 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        50k
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: primordial ? "black" : catalytic >= 100000 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        100k
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
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={pegasian ? true : elemental < 100000 ? true : catalytic < 50000 ? true : false} onClick={() => {
                        setElemental(elemental - 100000);
                        setCatalytic(catalytic - 50000);
                        setPegasian(true);
                    }}>
                        Pegasian Crystal <img src={pegasianCrystal} alt="Pegasian Crystal" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: pegasian ? "black" : elemental >= 100000 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        100k
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: pegasian ? "black" : catalytic >= 50000 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        50k
                        </Box>
                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

                <br></br>

                <Tooltip title={
                    <React.Fragment>
                        <Typography>Allows rune essence <img src={pureEssence} alt="Rune Essence"></img> to be stacked.</Typography>
                        </React.Fragment>} arrow placement="right">
                        <span style={{width: "250px", display: "block"}}>
                    <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={eternal ? true : elemental < 100000 ? true : catalytic < 100000 ? true : false} onClick={() => {
                        setElemental(elemental - 100000);
                        setCatalytic(catalytic - 100000);
                        setEternal(true);
                    }}>
                        Eternal Crystal <img src={eternalCrystal} alt="Eternal Crystal" height="32px" width="32px"></img>
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Box sx={{border: 1, width: "39px", color: eternal ? "black" : elemental >= 100000 ? "green" : "red"}} width="55px">
                        <img src={elementalStone} alt="Elemental stone Amount"></img>
                        100k
                        </Box>

                        <Box sx={{border: 1, width: "39px", color: eternal ? "black" : catalytic >= 100000 ? "green" : "red"}}>
                        <img src={catalyticStone} alt="Catalytic stone Amount" width="25px" height="27px"></img>
                        100k
                        </Box>

                        </Grid>
                    </Button>
                    </span>
                </Tooltip>

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