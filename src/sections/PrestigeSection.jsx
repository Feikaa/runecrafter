import { Box, SwipeableDrawer, Button, List, Grid, Tooltip, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Prestige from "../icons/prestige.png";

export default function PrestigeSection(props) {

    const lvl = props.lvl;
    const prestige = props.prestige;

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
                        <Typography>Reset back to Lvl 1, converting all your runes into <font color="aqua">elemental</font> and <font color="yellow">catalytic</font> guardian stones.</Typography>
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