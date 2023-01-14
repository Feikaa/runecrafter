import { Box, Button, ThemeProvider, createTheme, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Tooltip, Typography } from "@mui/material";
import React, { useState } from 'react';
import normalMode from "../icons/normal_mode.png";
import zmiAltar from "../icons/ourania_icon.png";
import ironLogo from "../icons/ironman_logo.png";

export default function ModeSection(props) {

    const lvl = props.lvl;
    const prestige = props.prestige;
    const mode = props.mode;

    const air = props.air;
    const earth = props.earth;
    const water = props.water;
    const fire = props.fire;
    const astral = props.astral;
    const law = props.law;
    const blood = props.blood;
    const wrath = props.wrath;

    const theme = createTheme({
        palette: {
            modes: {
                main: "gray",
                contrastText: "gold",
            },
            action: {
              disabled: "red"
            },
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

    const handleClickOpen = () => {
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
    }
    

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{paddingBottom: "15px", mx: "auto", marginRight: "0.5%", marginLeft: (mode !== "ironman" && (air + earth + water + fire >= 10000 || astral + law + blood + wrath >= 10000 || prestige >= 1)) ? "0.5%" : "auto"}}>
                <Button variant="contained" color="modes" onClick={handleClickOpen}>Modes</Button>
                <Dialog
                open={open}
                onClose={handleClose}>
                    <DialogTitle>
                        {"Select Mode"}
                    </DialogTitle>
                    <DialogActions>
                        {mode === "normal" ? 
                        <React.Fragment>
                        <Tooltip title={
                            <React.Fragment>
                                <Typography>A mode where you're too good for Prestige.</Typography>
                            </React.Fragment>} arrow placement="bottom">
                            <span style={{width: "250px", display: "block"}}>
                            <Button key={"auto altar"} sx={{border: 2, color: "gray", height: "40px", width: "250px", backgroundColor: "#151111"}} onClick={() => {
                                localStorage.setItem("mode", "ironman");
                                window.location.reload(false);
                            }}>
                            Ironman&nbsp; <img src={ironLogo} alt="Ironman Logo" height="32px" width="32px"></img>
                            </Button>
                            </span>
                        </Tooltip>

                        <Tooltip title={
                            <React.Fragment>
                                <Typography>A mode where you only have access to the Ourania Altar.</Typography>
                              </React.Fragment>} arrow placement="bottom">
                              <span style={{width: "250px", display: "block"}}>
                            <Button key={"auto altar"} sx={{border: 2, color: "#3F3FBF", height: "40px", width: "250px", backgroundColor: "#151111"}} onClick={() => {
                                localStorage.setItem("mode", "zmi");
                                window.location.reload(false);
                            }}>
                              Z.M.I Crafter&nbsp; <img src={zmiAltar} alt="ZMI" height="32px" width="32px"></img>
                            </Button>
                            </span>
                        </Tooltip>
                        </React.Fragment>
                        :
                        mode === "zmi" ?
                        <React.Fragment>
                        <Tooltip title={
                            <React.Fragment>
                                <Typography>The default mode.</Typography>
                            </React.Fragment>} arrow placement="bottom">
                            <span style={{width: "250px", display: "block"}}>
                            <Button key={"auto altar"} sx={{border: 2, color: "orange", height: "40px", width: "250px", backgroundColor: "#151111"}} onClick={() => {
                                localStorage.setItem("mode", "normal");
                                window.location.reload(false);
                            }}>
                            Normal&nbsp; <img src={normalMode} alt="Normal" height="32px" width="32px"></img>
                            </Button>
                            </span>
                        </Tooltip>

                        <Tooltip title={
                            <React.Fragment>
                                <Typography>A mode where you're too good for Prestige.</Typography>
                            </React.Fragment>} arrow placement="bottom">
                            <span style={{width: "250px", display: "block"}}>
                            <Button key={"auto altar"} sx={{border: 2, color: "gray", height: "40px", width: "250px", backgroundColor: "#151111"}} onClick={() => {
                                localStorage.setItem("mode", "ironman");
                                window.location.reload(false);
                            }}>
                            Ironman&nbsp; <img src={ironLogo} alt="Ironman Logo" height="32px" width="32px"></img>
                            </Button>
                            </span>
                        </Tooltip>
                        </React.Fragment>
                        :
                        <React.Fragment>
                        <Tooltip title={
                            <React.Fragment>
                                <Typography>The default mode.</Typography>
                            </React.Fragment>} arrow placement="bottom">
                            <span style={{width: "250px", display: "block"}}>
                            <Button key={"auto altar"} sx={{border: 2, color: "orange", height: "40px", width: "250px", backgroundColor: "#151111"}} onClick={() => {
                                localStorage.setItem("mode", "normal");
                                window.location.reload(false);
                            }}>
                            Normal&nbsp; <img src={normalMode} alt="Normal" height="32px" width="32px"></img>
                            </Button>
                            </span>
                        </Tooltip>

                        <Tooltip title={
                            <React.Fragment>
                                <Typography>A mode where you only have access to the Ourania Altar.</Typography>
                              </React.Fragment>} arrow placement="bottom">
                              <span style={{width: "250px", display: "block"}}>
                            <Button key={"auto altar"} sx={{border: 2, color: "#3F3FBF", height: "40px", width: "250px", backgroundColor: "#151111"}} onClick={() => {
                                localStorage.setItem("mode", "zmi");
                                window.location.reload(false);
                            }}>
                              Permanent ZMI&nbsp; <img src={zmiAltar} alt="ZMI" height="32px" width="32px"></img>
                            </Button>
                            </span>
                        </Tooltip>
                        </React.Fragment>}
                    </DialogActions>
                </Dialog>
            </Box>
        </ThemeProvider>
    )
}