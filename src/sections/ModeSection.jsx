import { Box, Button, ThemeProvider, createTheme, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Tooltip, Typography } from "@mui/material";
import {ToastContainer, toast} from 'react-toastify';
import React, { useState } from 'react';
import normalMode from "../icons/normal_mode.png";
import zmiAltar from "../icons/ourania_altar.png";
import ironLogo from "../icons/ironman_logo.png";

export default function ModeSection(props) {

    const lvl = props.lvl;
    const prestige = props.prestige;
    const mode = props.mode;

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
            <Box sx={{paddingBottom: "15px", mx: "auto", marginRight: "0.5%", marginLeft: lvl >= 99 ? "0.5%" : prestige >= 1 ? "0.5%" : "auto"}}>
                <ToastContainer />
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
                                <Typography><font color="red">TO BE IMPLEMENTED.</font><br></br> A mode where upgrades are only obtained randomly by runecrafting.</Typography>
                            </React.Fragment>} arrow placement="bottom">
                            <span style={{width: "250px", display: "block"}}>
                            <Button key={"auto altar"} sx={{border: 2, color: "gray", height: "40px", width: "250px", backgroundColor: "#151111"}} disabled>
                            Ironman&nbsp; <img src={ironLogo} alt="Ironman Logo" height="32px" width="32px"></img>
                            </Button>
                            </span>
                        </Tooltip>

                        <Tooltip title={
                            <React.Fragment>
                                <Typography>A mode where you only have access to the Ourania Altar.</Typography>
                              </React.Fragment>} arrow placement="bottom">
                              <span style={{width: "250px", display: "block"}}>
                            <Button key={"auto altar"} sx={{border: 2, color: "#646C6C", height: "40px", width: "250px", backgroundColor: "#151111"}} onClick={() => {
                                localStorage.setItem("mode", "zmi");
                                window.location.reload(false);
                            }}>
                              Permanent ZMI&nbsp; <img src={zmiAltar} alt="ZMI" height="32px" width="32px"></img>
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
                                <Typography><font color="red">TO BE IMPLEMENTED.</font><br></br> A mode where upgrades are only obtained randomly by runecrafting.</Typography>
                            </React.Fragment>} arrow placement="bottom">
                            <span style={{width: "250px", display: "block"}}>
                            <Button key={"auto altar"} sx={{border: 2, color: "gray", height: "40px", width: "250px", backgroundColor: "#151111"}} disabled>
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
                            <Button key={"auto altar"} sx={{border: 2, color: "#646C6C", height: "40px", width: "250px", backgroundColor: "#151111"}} onClick={() => {
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