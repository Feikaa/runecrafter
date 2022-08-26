import { Box, SwipeableDrawer, Button, List, Grid, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import airRune from "../icons/air_rune_small.png";
import earthRune from "../icons/earth_rune_small.png";
import runeEssence from "../icons/rune_essence.png";
import cosmicRune from "../icons/cosmic_rune_small.png";
import astralRune from "../icons/astral_rune_small.png";
import lawRune from "../icons/law_rune_small.png";
import bloodRune from "../icons/blood_rune_small.png";
import wrathRune from "../icons/wrath_rune_small.png";

export default function UpgradesSection(props) {

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

    const autoclick = props.autoclick;
    const setAutoclick = props.setAutoclick;

    const autoaltar = props.autoaltar;
    const setAutoaltar = props.setAutoaltar;

    const pouch = props.pouch;
    const setPouch = props.setPouch;

    const theme = createTheme({
        palette: {
            upgrade: {
                main: "#484343",
                contrastText: "#B03904",
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
            }
        }
    })

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
                <Typography>Auto generates 1 essence every second.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{height: "80px", width: "250px", display: "block"}}>
            <Button key={"auto click"} sx={{border: 1, color: "orange"}} disabled={autoclick ? true : air < 200 ? true : earth >= 300 ? false : true} onClick={() => {
              setAir(air - 200);
              setEarth(earth - 300);
              setAutoclick(true);
            }}>
              Pure Essence Runner
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: autoclick ? "black" : air >= 200 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                200
              </Box>

              <Box sx={{border: 1, width: "39px", color: autoclick ? "black" : earth >= 300 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                300
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                <Typography>Autocrafts your runes when you run out of inventory space.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{height: "80px", width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "orange", height: "80px", width: "250px"}} disabled={autoaltar ? true : air < 300 ? true : earth < 300 ? true : cosmic < 300 ? true : false} onClick={() => {
              setAir(air - 300);
              setEarth(earth - 300);
              setCosmic(cosmic - 300);
              setAutoaltar(true);
            }}>
              Altar Camper
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: autoaltar ? "black" : air >= 300 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                300
              </Box>

              <Box sx={{border: 1, width: "39px", color: autoaltar ? "black" : earth >= 300 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                300
              </Box>

              <Box sx={{border: 1, width: "39px", color: autoaltar ? "black" : cosmic >= 300 ? "green" : "red"}}>
                <img src={cosmicRune} alt="Cosmic Rune Amount"></img>
                300
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                <Typography>Gives another inventory of essence.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{height: "80px", width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "orange", height: "80px", width: "250px"}} disabled={pouch ? true : air < 1000 ? true : cosmic < 1000 ? true : astral < 200 ? true : false} onClick={() => {
              setAir(air - 1000);
              setCosmic(earth - 1000);
              setAstral(astral - 200);
              setPouch(true);
            }}>
              Essence Pouch
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: pouch ? "black" : air >= 1000 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: pouch ? "black" : cosmic >= 1000 ? "green" : "red"}}>
                <img src={cosmicRune} alt="Cosmic Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: pouch ? "black" : astral >= 200 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                200
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

          </List>
          {/* <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      );

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{paddingBottom: "15px", mx: "auto", marginRight: autoaltar ? "0.5%" : "auto"}}>
                <Button variant="contained" color="upgrade" onClick={toggleDrawer(true)}>Upgrades</Button>
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