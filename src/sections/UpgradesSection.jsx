import { Box, SwipeableDrawer, Button, List, Grid, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import airRune from "../icons/air_rune_small.png";
import earthRune from "../icons/earth_rune_small.png";
import waterRune from "../icons/water_rune_small.png";
import fireRune from "../icons/fire_rune_small.png";
import astralRune from "../icons/astral_rune_small.png";
import lawRune from "../icons/law_rune_small.png";
import bloodRune from "../icons/blood_rune_small.png";
import wrathRune from "../icons/wrath_rune_small.png";
import automine1 from "../icons/automine1.png";
import automine2 from "../icons/automine2.png";
import automine3 from "../icons/automine3.png";
import automine4 from "../icons/automine4.png";
import automine5 from "../icons/automine5.png";
import automine6 from "../icons/automine6.png";
import automine7 from "../icons/automine7.png";
import automine8 from "../icons/automine8.png";
import automineMAX from "../icons/automineMAX.png";
import autocraft1 from "../icons/autocraft1.png";
import autocraft2 from "../icons/autocraft2.png";
import autocraft3 from "../icons/autocraft3.png";
import autocraft4 from "../icons/autocraft4.png";
import autocraft5 from "../icons/autocraft5.png";
import autocraft6 from "../icons/autocraft6.png";
import autocraft7 from "../icons/autocraft7.png";
import autocraft8 from "../icons/autocraft8.png";
import autocraftMAX from "../icons/autocraftMAX.png";
import pouch1 from "../icons/pouch1.png";
import pouch2 from "../icons/pouch2.png";
import pouch3 from "../icons/pouch3.png";
import pouch4 from "../icons/pouch4.png";
import pouch5 from "../icons/pouch5.png";
import eyeHat from "../icons/hat_of_the_eye.png";
import eyeTop from "../icons/top_of_the_eye.png";
import eyeBottom from "../icons/bottom_of_the_eye.png";
import eyeBoots from "../icons/boots_of_the_eye.png";
import daeyaltEssence from "../icons/daeyalt_essence.png";
import darkEssence from "../icons/dark_essence.webp";
import zmiAltar from "../icons/ourania_altar.png";

export default function UpgradesSection(props) {

    const mode = props.mode;

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

    const setAir = props.setAir;
    const setEarth = props.setEarth;
    const setWater = props.setWater;
    const setFire = props.setFire;
    const setAstral = props.setAstral;
    const setLaw = props.setLaw;
    const setBlood = props.setBlood;
    const setWrath = props.setWrath;

    const autoclick = props.autoclick;
    const setAutoclick = props.setAutoclick;
    const pickList = [automine1, automine2, automine3, automine4, automine5, automine6, automine7, automine8, automineMAX];

    const autoaltar = props.autoaltar;
    const setAutoaltar = props.setAutoaltar;
    const nextRune = ["air", "earth", "water", "fire", "astral", "law", "blood", "wrath"];
    const talismanList = [autocraft1, autocraft2, autocraft3, autocraft4, autocraft5, autocraft6, autocraft7, autocraft8, autocraftMAX];

    const pouch = props.pouch;
    const setPouch = props.setPouch;
    const nextPouch = ["3", "6", "9", "12", "40"];
    const pouchList = [pouch1, pouch2, pouch3, pouch4, pouch5, pouch5];

    const daeyalt = props.daeyalt;
    const setDaeyalt = props.setDaeyalt;
    const dark = props.dark;
    const setDark = props.setDark;

    const hat = props.hat;
    const setHat = props.setHat;

    const top = props.top;
    const setTop = props.setTop;

    const bottom = props.bottom;
    const setBottom = props.setBottom;

    const boots = props.boots;
    const setBoots = props.setBoots;

    const essenceType = props.essenceType;
    const setEssenceType = props.setEssenceType;
    const eternal = props.eternal;
    const setInventory = props.setInventory;
    const setExtra = props.setExtra;

    const ouraniaAltar = props.ouraniaAltar;
    const setOuraniaAltar = props.setOuraniaAltar;

    const theme = createTheme({
        palette: {
            upgrade: {
                main: "#484343",
                contrastText: "#B03904",
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
                {autoclick < 8 ? <Typography>Auto mines {Math.round(1 / (Math.round((1 / (autoclick + 1)) * 100) / 100))} essence every second.</Typography> : <Typography>Upgrade MAX.</Typography>} 
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto click"} sx={{border: 1, color: "green"}} disabled={autoclick === 8 ? true : 
            autoclick === 0 ? (air < 200 ? true : earth >= 300 ? false : true) :
            autoclick === 1 ? (earth < 1000 ? true : fire >= 500 ? false : true) : 
            autoclick === 2 ? (earth < 1000 ? true : fire < 1000 ? true : astral >= 500 ? false : true) :
            autoclick === 3 ? (air < 2000 ? true : astral < 1000 ? true : law >= 500 ? false : true) : 
            autoclick === 4 ? (astral < 3000 ? true : law >= 2000 ? false : true) : 
            autoclick === 5 ? (astral < 3000 ? true : law < 3000 ? true : blood >= 3000 ? false : true) : 
            autoclick === 6 ? (air < 5000 ? true : astral < 5000 ? true : blood >= 5000 ? false : true) :
            (law < 7000 ? true : blood < 5000 ? true : wrath >= 5000 ? false : true)} onClick={() => {
              if (autoclick === 0) {
                setAir(air - 200);
                setEarth(earth - 300);
              } else if (autoclick === 1) {
                setEarth(earth - 1000);
                setFire(fire - 500);
              } else if (autoclick === 2) {
                setEarth(earth - 1000);
                setFire(fire - 1000);
                setAstral(astral - 500);
              } else if (autoclick === 3) {
                setAir(air - 2000);
                setAstral(astral - 1000);
                setLaw(law - 500);
              } else if (autoclick === 4) {
                setAstral(astral - 3000);
                setLaw(law - 2000);
              } else if (autoclick === 5) {
                setAstral(astral - 3000);
                setLaw(law - 3000);
                setBlood(blood - 3000);
              } else if (autoclick === 6) {
                setAir(air - 5000);
                setAstral(astral - 5000);
                setBlood(blood - 5000);
              } else if (autoclick === 7) {
                setLaw(law - 7000);
                setBlood(blood - 5000);
                setWrath(wrath - 5000);
              }
              setAutoclick(autoclick + 1);
            }}>
              Essence Miner&nbsp; {autoclick < 3 ? "I".repeat(autoclick + 1) : autoclick === 3 ? "IV" : autoclick < 8 ? "V" + "I".repeat(autoclick - 4) : "MAXED"} <img src={pickList[autoclick]} alt="Pic" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              {
              // Level 1
              autoclick === 0 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: air >= 200 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                200
              </Box>

              <Box sx={{border: 1, width: "39px", color: earth >= 300 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                300
              </Box>
              </React.Fragment>
              :
              // Level 2
              autoclick === 1 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: earth >= 1000 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: fire >= 500 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                500
              </Box>
              </React.Fragment>
              :
              // Level 3
              autoclick === 2 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: earth >= 1000 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: fire >= 1000 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: astral >= 500 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                500
              </Box>
              </React.Fragment>
              :
              // Level 4
              autoclick === 3 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: air >= 2000 ? "green" : "red"}}>
                <img src={airRune} alt="Earth Rune Amount"></img>
                2000
              </Box>

              <Box sx={{border: 1, width: "39px", color: astral >= 1000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: law >= 500 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                500
              </Box>
              </React.Fragment>
              :
              // Level 5
              autoclick === 4 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: astral >= 3000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                3000
              </Box>

              <Box sx={{border: 1, width: "39px", color: law >= 2000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                2000
              </Box>
              </React.Fragment>
              :
              // Level 6
              autoclick === 5 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: astral >= 3000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                3000
              </Box>

              <Box sx={{border: 1, width: "39px", color: law >= 3000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                3000
              </Box>

              <Box sx={{border: 1, width: "39px", color: blood >= 3000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                3000
              </Box>
              </React.Fragment>
              :
              // Level 7
              autoclick === 6 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: air >= 5000 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                5000
              </Box>

              <Box sx={{border: 1, width: "39px", color: astral >= 5000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                5000
              </Box>

              <Box sx={{border: 1, width: "39px", color: blood >= 5000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                5000
              </Box>
              </React.Fragment>
              :
              // Level 8
              autoclick === 7 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: law >= 7000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                7000
              </Box>

              <Box sx={{border: 1, width: "39px", color: blood >= 5000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                5000
              </Box>

              <Box sx={{border: 1, width: "39px", color: wrath >= 5000 ? "green" : "red"}}>
                <img src={wrathRune} alt="Wrath Rune Amount"></img>
                5000
              </Box>
              </React.Fragment>
              :
              ""}
              
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            { mode === "zmi" ?
            <Tooltip title={
              <React.Fragment>
                {autoaltar < 1 ? <Typography>Allows autocrafting runes when your inventory is full.</Typography> : <Typography>Upgrade MAX.</Typography>}
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "163.5px", width: "250px"}} disabled={autoaltar ? true : air < 500 ? true : earth < 500 ? true :
            water < 500 ? true : fire < 500 ? true : astral < 500 ? true : law < 500 ? true : blood < 500 ? true : wrath < 500 ? true : false} onClick={() => {
              setAir(air - 500);
              setEarth(earth - 500);
              setWater(water - 500);
              setFire(fire - 500)
              setLaw(law - 500);
              setAstral(astral - 500);
              setBlood(blood - 500);
              setAutoaltar(1);
            }}>
              Talisman Mysteries <img src={talismanList[8]} alt="Auto Altar" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: autoaltar ? "black" : air >= 500 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: autoaltar ? "black" : earth >= 500 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: autoaltar ? "black" : water >= 500 ? "green" : "red"}}>
                <img src={waterRune} alt="Water Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: autoaltar ? "black" : fire >= 500 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: autoaltar ? "black" : astral >= 500 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: autoaltar ? "black" : law >= 500 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: autoaltar ? "black" : blood >= 500 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: autoaltar ? "black" : wrath >= 500 ? "green" : "red"}}>
                <img src={wrathRune} alt="Wrath Rune Amount"></img>
                500
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>
            :
            <Tooltip title={
            <React.Fragment>
                {autoaltar < 8 ? <Typography>Allows autocrafting {nextRune[autoaltar]} runes when your inventory is full.</Typography> : <Typography>Upgrade MAX.</Typography>}
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={autoaltar === 8 ? true : 
            autoaltar === 0 ? (air < 1000 ? true : false) : 
            autoaltar === 1 ? (earth < 1000 ? true : false) :
            autoaltar === 2 ? (water < 1000 ? true : false) :
            autoaltar === 3 ? (fire < 1000 ? true : false) :
            autoaltar === 4 ? (astral < 1000 ? true : false) :
            autoaltar === 5 ? (law < 1000 ? true : false) :
            autoaltar === 6 ? (blood < 1000 ? true : false) :
            (wrath < 1000 ? true : false)} onClick={() => {
              if (autoaltar === 0) {
                setAir(air - 1000);
              } else if (autoaltar === 1) {
                setEarth(earth - 1000);
              } else if (autoaltar === 2) {
                setWater(water - 1000);
              } else if (autoaltar === 3) {
                setFire(fire - 1000);
              } else if (autoaltar === 4) {
                setAstral(astral - 1000);
              } else if (autoaltar === 5) {
                setLaw(law - 1000);
              } else if (autoaltar === 6) {
                setBlood(blood - 1000);
              } else if (autoaltar === 7) {
                setWrath(wrath - 1000);
              }
              setAutoaltar(autoaltar + 1);
            }}>
              Talisman Mysteries&nbsp; {autoaltar < 3 ? "I".repeat(autoaltar + 1) : autoaltar === 3 ? "IV" : autoaltar < 8 ? "V" + "I".repeat(autoaltar - 4) : "MAXED" }<img src={talismanList[autoaltar]} alt="Catalytic Talisman" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              {
              // Level 1
              autoaltar === 0 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: air >= 1000 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              // Level 2
              autoaltar === 1 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: earth >= 1000 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              // Level 3
              autoaltar === 2 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: water >= 1000 ? "green" : "red"}}>
                <img src={waterRune} alt="Water Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              // Level 4
              autoaltar === 3 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: fire >= 1000 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              // Level 5
              autoaltar === 4 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: astral >= 1000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              // Level 6
              autoaltar === 5 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: law >= 1000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              // Level 7
              autoaltar === 6 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: blood >= 1000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              // Level 8
              autoaltar === 7 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: wrath >= 1000 ? "green" : "red"}}>
                <img src={wrathRune} alt="Wrath Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              ""
              }
              </Grid>
            </Button>
            </span>
            </Tooltip>
            }

            <br></br>

            <Tooltip title={
            <React.Fragment>
                {pouch < 5 ? <Typography>Holds +{nextPouch[pouch]} essence.</Typography> : <Typography>Upgrade MAX.</Typography>}
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={pouch === 5 ? true : 
              pouch === 0 ? (air < 100 ? true : earth >= 100 ? false : true) :
              pouch === 1 ? (earth < 500 ? true : fire >= 100 ? false : true) :
              pouch === 2 ? (fire < 500 ? true : astral >= 100 ? false : true) :
              pouch === 3 ? (astral < 500 ? true : law >= 100 ? false : true) :
              (law < 500 ? true : blood >= 100 ? false : true)} onClick={() => {
              if (pouch === 0) {
                setAir(air - 100);
                setEarth(earth - 100);
              } else if (pouch === 1) {
                setEarth(earth - 500);
                setFire(fire - 100);
              } else if (pouch === 2) {
                setFire(fire - 500);
                setAstral(astral - 100);
              } else if (pouch === 3) {
                setAstral(astral - 500);
                setLaw(law - 100);
              } else if (pouch === 4) {
                setLaw(law - 500);
                setBlood(blood - 100);
              }
              setPouch(pouch + 1);
            }}>
              {pouch === 0 ? "Small" : pouch === 1 ? "Medium" : pouch === 2 ? "Large" : pouch === 3 ? "Giant" : pouch === 4 ? "Collosal" : "MAXED"} Pouch <img src={pouchList[pouch]} alt="Pouch" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                {
                  // Level 1
                  pouch === 0 ?
                  <React.Fragment>
                  <Box sx={{border: 1, width: "39px", color: air >= 100 ? "green" : "red"}}>
                    <img src={airRune} alt="Air Rune Amount"></img>
                    100
                  </Box>

                  <Box sx={{border: 1, width: "39px", color: earth >= 100 ? "green" : "red"}}>
                    <img src={earthRune} alt="Earth Rune Amount"></img>
                    100
                  </Box>
                  </React.Fragment>
                  :
                  // Level 2
                  pouch === 1 ?
                  <React.Fragment>
                  <Box sx={{border: 1, width: "39px", color: earth >= 500 ? "green" : "red"}}>
                    <img src={earthRune} alt="Earth Rune Amount"></img>
                    500
                  </Box>

                  <Box sx={{border: 1, width: "39px", color: fire >= 100 ? "green" : "red"}}>
                    <img src={fireRune} alt="Fire Rune Amount"></img>
                    100
                  </Box>
                  </React.Fragment>
                  :
                  // Level 3
                  pouch === 2 ? 
                  <React.Fragment>
                  <Box sx={{border: 1, width: "39px", color: fire >= 500 ? "green" : "red"}}>
                    <img src={fireRune} alt="Fire Rune Amount"></img>
                    500
                  </Box>

                  <Box sx={{border: 1, width: "39px", color: astral >= 100 ? "green" : "red"}}>
                    <img src={astralRune} alt="Astral Rune Amount"></img>
                    100
                  </Box>
                  </React.Fragment>
                  :
                  // Level 4
                  pouch === 3 ?
                  <React.Fragment>
                  <Box sx={{border: 1, width: "39px", color: astral >= 500 ? "green" : "red"}}>
                    <img src={astralRune} alt="Astral Rune Amount"></img>
                    500
                  </Box>

                  <Box sx={{border: 1, width: "39px", color: law >= 100 ? "green" : "red"}}>
                    <img src={lawRune} alt="Law Rune Amount"></img>
                    100
                  </Box>
                  </React.Fragment>
                  :
                  // Level 5
                  pouch === 4 ?
                  <React.Fragment>
                  <Box sx={{border: 1, width: "39px", color: law >= 500 ? "green" : "red"}}>
                    <img src={lawRune} alt="Law Rune Amount"></img>
                    500
                  </Box>

                  <Box sx={{border: 1, width: "39px", color: blood >= 500 ? "green" : "red"}}>
                    <img src={bloodRune} alt="Blood Rune Amount"></img>
                    100
                  </Box>
                  </React.Fragment>
                  :
                  ""
                }
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                <Typography>Grants 10% more runes when runecrafting.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={hat ? true : air < 400 ? true : astral < 500 ? true : false} onClick={() => {
              setAir(air - 400);
              setAstral(astral - 500);
              setHat(true);
            }}>
              Hat of the eye <img src={eyeHat} alt="Eye hat" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: hat ? "black" : air >= 400 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                400
              </Box>

              <Box sx={{border: 1, width: "39px", color: hat ? "black" : astral >= 500 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                500
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>
            
            <Tooltip title={
            <React.Fragment>
                <Typography>Grants 10% more runes when runecrafting.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={top ? true : earth < 350 ? true : astral < 500 ? true : false} onClick={() => {
              setEarth(earth - 350);
              setAstral(astral - 500);
              setTop(true);
            }}>
              Robe top of the eye <img src={eyeTop} alt="Eye top" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: top ? "black" : earth >= 350 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                350
              </Box>

              <Box sx={{border: 1, width: "39px", color: top ? "black" : astral >= 500 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                500
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                <Typography>Grants 10% more runes when runecrafting.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={bottom ? true : fire < 350 ? true : astral < 500 ? true : false} onClick={() => {
              setFire(fire - 350);
              setAstral(astral - 500);
              setBottom(true);
            }}>
              Robe bottom of the eye <img src={eyeBottom} alt="Eye bottom" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: bottom ? "black" : fire >= 350 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                350
              </Box>

              <Box sx={{border: 1, width: "39px", color: bottom ? "black" : astral >= 500 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                500
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                <Typography>Grants 10% more runes when runecrafting.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={boots ? true : law < 250 ? true : astral < 500 ? true : false} onClick={() => {
              setLaw(law - 250);
              setAstral(astral - 500);
              setBoots(true);
            }}>
              Boots of the eye <img src={eyeBoots} alt="Eye boots" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: boots ? "black" : astral >= 500 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: boots ? "black" : law >= 250 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                250
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                <Typography>Gives 50% extra experience per essence.</Typography>
                <Typography sx={{color: "red"}}>WARNING: WILL EMPTY YOUR INVENTORY AND POUCH</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "109px", width: "250px"}} disabled={daeyalt ? true : air < 500 ? true : earth < 500 ? true : 
            fire < 500 ? true : law < 500 ? true : astral < 500 ? true : false} onClick={() => {
              setAir(air - 500);
              setEarth(earth - 500);
              setWater(water - 500);
              setFire(fire - 500)
              setLaw(law - 500);
              setAstral(astral - 500);
              setEssenceType("daeyalt_essence");
              setDaeyalt(true);
              setInventory([]);
              setExtra(0);
            }}>
              Daeyalt Essence <img src={daeyaltEssence} alt="Daeyalt essence" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: daeyalt ? "black" : air >= 500 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: daeyalt ? "black" : earth >= 500 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: daeyalt ? "black" : water >= 500 ? "green" : "red"}}>
                <img src={waterRune} alt="Water Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: daeyalt ? "black" : fire >= 500 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: daeyalt ? "black" : astral >= 500 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: daeyalt ? "black" : law >= 500 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                500
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                <Typography>Gives 100% extra experience per essence.</Typography>
                <Typography sx={{color: "red"}}>WARNING: WILL EMPTY YOUR INVENTORY AND POUCH</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "163.5px", width: "250px"}} disabled={dark ? true : air < 1000 ? true : earth < 1000 ? true : 
            fire < 1000 ? true : law < 1000 ? true : astral < 1000 ? true : blood < 1000 ? true : false} onClick={() => {
              setAir(air - 1000);
              setEarth(earth - 1000);
              setWater(water - 1000);
              setFire(fire - 1000)
              setLaw(law - 1000);
              setAstral(astral - 1000);
              setBlood(blood - 1000);
              setEssenceType("dark_essence");
              setDark(true);
              setInventory([]);
              setExtra(0);
            }}>
              Dark Essence <img src={darkEssence} alt="Dark essence" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: dark ? "black" : air >= 1000 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: dark ? "black" : earth >= 1000 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: dark ? "black" : water >= 1000 ? "green" : "red"}}>
                <img src={waterRune} alt="Water Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: dark ? "black" : fire >= 1000 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: dark ? "black" : astral >= 1000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: dark ? "black" : law >= 1000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: dark ? "black" : blood >= 1000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                1000
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            {mode !== "zmi" ? 
            <Tooltip title={
              <React.Fragment>
                  <Typography>Gains access to the Ourania Altar. Gives 70% extra experience per essence, however, all crafted runes are random.<br></br>Bonus is multiplicative with essence upgrades.</Typography>
                </React.Fragment>} arrow placement="right">
                <span style={{width: "250px", display: "block"}}>
              <Button key={"auto altar"} sx={{border: 1, color: "green", height: "163.5px", width: "250px"}} disabled={ouraniaAltar ? true : air < 1000 ? true : earth < 1000 ? true : 
              fire < 1000 ? true : law < 1000 ? true : astral < 1000 ? true : blood < 1000 ? true : wrath < 1000 ? true : false} onClick={() => {
                setAir(air - 1000);
                setEarth(earth - 1000);
                setWater(water - 1000);
                setFire(fire - 1000)
                setLaw(law - 1000);
                setAstral(astral - 1000);
                setBlood(blood - 1000);
                setWrath(wrath - 1000);
                setOuraniaAltar(true);
                setInventory([]);
                setExtra(0);
              }}>
                Ourania Altar <img src={zmiAltar} alt="Ourania Altar" height="32px" width="32px"></img>
                <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : air >= 1000 ? "green" : "red"}}>
                  <img src={airRune} alt="Air Rune Amount"></img>
                  1000
                </Box>
  
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : earth >= 1000 ? "green" : "red"}}>
                  <img src={earthRune} alt="Earth Rune Amount"></img>
                  1000
                </Box>
  
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : water >= 1000 ? "green" : "red"}}>
                  <img src={waterRune} alt="Water Rune Amount"></img>
                  1000
                </Box>
  
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : fire >= 1000 ? "green" : "red"}}>
                  <img src={fireRune} alt="Fire Rune Amount"></img>
                  1000
                </Box>
  
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : astral >= 1000 ? "green" : "red"}}>
                  <img src={astralRune} alt="Astral Rune Amount"></img>
                  1000
                </Box>
  
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : law >= 1000 ? "green" : "red"}}>
                  <img src={lawRune} alt="Law Rune Amount"></img>
                  1000
                </Box>
  
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : blood >= 1000 ? "green" : "red"}}>
                  <img src={bloodRune} alt="Blood Rune Amount"></img>
                  1000
                </Box>
  
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : wrath >= 1000 ? "green" : "red"}}>
                  <img src={wrathRune} alt="Wrath Rune Amount"></img>
                  1000
                </Box>
                </Grid>
              </Button>
              </span>
              </Tooltip>
              :
              ""}
          

          </List>
        </Box>
      );

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{paddingBottom: "15px", mx: "auto", marginRight: autoaltar ? "0.5%" : "auto", marginLeft: lvl >= 99 ? "0.5%" : prestige >= 1 ? "0.5%" : mode !== "normal" ? "0.5%" : "auto"}}>
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