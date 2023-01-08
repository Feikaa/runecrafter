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
import AirGloves from "../icons/air_gloves.png";
import EarthGloves from "../icons/earth_gloves.png";
import WaterGloves from "../icons/water_gloves.png";
import FireGloves from "../icons/fire_gloves.png";
import airEnchant from "../icons/air_enchant.png";
import earthEnchant from "../icons/earth_enchant.png";
import waterEnchant from "../icons/water_enchant.png";
import fireEnchant from "../icons/fire_enchant.png";
import astralEnchant from "../icons/astral_enchant.png";
import lawEnchant from "../icons/law_enchant.png";
import bloodEnchant from "../icons/blood_enchant.png";
import wrathEnchant from "../icons/wrath_enchant.png";
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
import masterHat from "../icons/master_hat.png";
import masterTop from "../icons/master_top.png";
import masterBottom from "../icons/master_bottom.png";
import masterBoots from "../icons/master_boots.png";
import daeyaltEssence from "../icons/daeyalt_essence.png";
import bloodBoost from "../icons/blood_essence.png";
import lawHead from "../icons/law_head.png";
import lawTop from "../icons/law_top.png";
import lawBottom from "../icons/law_bottom.png";
import lawHands from "../icons/law_hands.png";
import lawBoots from "../icons/law_boots.png";
import bloodHead from "../icons/blood_head.png";
import bloodTop from "../icons/blood_top.png";
import bloodBottom from "../icons/blood_bottom.png";
import bloodHands from "../icons/blood_hands.png";
import bloodBoots from "../icons/blood_boots.png";
import wrathHead from "../icons/wrath_head.png";
import wrathTop from "../icons/wrath_top.png";
import wrathBottom from "../icons/wrath_bottom.png";
import wrathHands from "../icons/wrath_hands.png";
import wrathBoots from "../icons/wrath_boots.png";
import infinityHead from "../icons/infinity_head.png";
import infinityTop from "../icons/infinity_top.png";
import infinityBottom from "../icons/infinity_bottom.png";
import infinityHands from "../icons/infinity_hands.png";
import infinityBoots from "../icons/infinity_boots.png";
import darkEssence from "../icons/dark_essence.webp";
import zmiAltar from "../icons/ourania_altar.png";
import DemonOffer from "../icons/demon_offer.png";
import SinisterOffer from "../icons/sinister_offer.png";

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

    const airGloves = props.airGloves;
    const setAirGloves = props.setAirGloves;
    const earthGloves = props.earthGloves;
    const setEarthGloves = props.setEarthGloves;
    const waterGloves = props.waterGloves;
    const setWaterGloves = props.setWaterGloves;
    const fireGloves = props.fireGloves;
    const setFireGloves = props.setFireGloves;

    const autoclick = props.autoclick;
    const setAutoclick = props.setAutoclick;
    const pickList = [automine1, automine2, automine3, automine4, automine5, automine6, automine7, automine8, automineMAX];

    const airLvl = props.airLvl;
    const setAirLvl = props.setAirLvl;
    const earthLvl = props.earthLvl;
    const setEarthLvl = props.setEarthLvl;
    const waterLvl = props.waterLvl;
    const setWaterLvl = props.setWaterLvl;
    const fireLvl = props.fireLvl;
    const setFireLvl = props.setFireLvl;
    const astralLvl = props.astralLvl;
    const setAstralLvl = props.setAstralLvl;
    const lawLvl = props.lawLvl;
    const setLawLvl = props.setLawLvl;
    const bloodLvl = props.bloodLvl;
    const setBloodLvl = props.setBloodLvl;
    const wrathLvl = props.wrathLvl;
    const setWrathLvl = props.setWrathLvl;

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

    const lawOutfit = props.lawOutfit;
    const setLawOutfit = props.setLawOutfit;
    const bloodOutfit = props.bloodOutfit;
    const setBloodOutfit = props.setBloodOutfit;
    const wrathOutfit = props.wrathOutfit;
    const setWrathOutfit = props.setWrathOutfit;
    const infinityOutfit = props.infinityOutfit;
    const setInfinityOutfit = props.setInfinityOutfit;

    const essenceType = props.essenceType;
    const setEssenceType = props.setEssenceType;
    const setInventory = props.setInventory;
    const setExtra = props.setExtra;

    const elementalOffer = props.elementalOffer;
    const setElementalOffer = props.setElementalOffer;
    const catalyticOffer = props.catalyticOffer;
    const setCatalyticOffer = props.setCatalyticOffer;

    const bloodEssence = props.bloodEssence;
    const setBloodEssence = props.setBloodEssence;

    const ouraniaAltar = props.ouraniaAltar;
    const setOuraniaAltar = props.setOuraniaAltar;

    const theme = createTheme({
        palette: {
            upgrade: {
                main: "gray",
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
                {autoclick < 8 ? <Typography>Auto mines {Math.round(1 / (Math.round((1 / (autoclick + 1)) * 100) / 100))} essence every second.</Typography> : <Typography>Upgrade MAXED.</Typography>} 
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto click"} sx={{border: 1, color: "green"}} disabled={autoclick === 8 ? true : 
            autoclick === 0 ? (air < 200 ? true : earth >= 300 ? false : true) :
            autoclick === 1 ? (earth < 1000 ? true : water >= 500 ? false : true) : 
            autoclick === 2 ? (water < 500 ? true : fire < 500 ? true : astral >= 500 ? false : true) :
            autoclick === 3 ? (air < 2000 ? true : fire < 500 ? true : law >= 500 ? false : true) : 
            autoclick === 4 ? (fire < 2000 ? true : astral < 2000 ? true : law >= 2000 ? false : true) : 
            autoclick === 5 ? (astral < 3000 ? true : law < 3000 ? true : blood >= 3000 ? false : true) : 
            autoclick === 6 ? (air < 5000 ? true : astral < 5000 ? true : blood >= 5000 ? false : true) :
            (law < 7000 ? true : blood < 5000 ? true : wrath >= 5000 ? false : true)} onClick={() => {
              if (autoclick === 0) {
                setAir(air - 200);
                setEarth(earth - 300);
              } else if (autoclick === 1) {
                setEarth(earth - 1000);
                setWater(water - 500);
              } else if (autoclick === 2) {
                setWater(water - 500);
                setFire(fire - 500);
                setAstral(astral - 500);
              } else if (autoclick === 3) {
                setAir(air - 2000);
                setFire(fire - 500);
                setLaw(law - 500);
              } else if (autoclick === 4) {
                setFire(fire - 2000);
                setAstral(astral - 2000);
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
              Essence Miner&nbsp; {autoclick < 3 ? "I".repeat(autoclick + 1) : autoclick === 3 ? "IV" : autoclick < 8 ? "V" + "I".repeat(autoclick - 4) : "MAX"} <img src={pickList[autoclick]} alt="Pic" height="32px" width="32px"></img>
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

              <Box sx={{border: 1, width: "39px", color: water >= 500 ? "green" : "red"}}>
                <img src={waterRune} alt="Fire Rune Amount"></img>
                500
              </Box>
              </React.Fragment>
              :
              // Level 3
              autoclick === 2 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: water >= 500 ? "green" : "red"}}>
                <img src={waterRune} alt="Earth Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: fire >= 500 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                500
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

              <Box sx={{border: 1, width: "39px", color: fire >= 500 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                500
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
              <Box sx={{border: 1, width: "39px", color: fire >= 2000 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                2000
              </Box>
                
              <Box sx={{border: 1, width: "39px", color: astral >= 2000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                2000
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

            <Tooltip title={
            <React.Fragment>
                <Typography>Craft {airLvl < 7 ? ((airLvl + 1) * 10) + "%" : "MAXED"} more air runes.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={airLvl === 7 ? true :
            airLvl === 0 ? (air < 500 ? true : earth < 500 ? true : false) :
            airLvl === 1 ? (air < 1000 ? true : water < 500 ? true : false) :
            airLvl === 2 ? (air < 1500 ? true : fire < 500 ? true : false) :
            airLvl === 3 ? (air < 2000 ? true : astral < 1000 ? true : false) :
            airLvl === 4 ? (air < 2500 ? true : law < 1000 ? true : false) :
            airLvl === 5 ? (air < 3000 ? true : blood < 2000 ? true : false) :
            (air < 3500 ? true : wrath < 2000 ? true : false)} onClick={() => {
              if (airLvl === 0) {
                setAir(air - 500);
                setEarth(earth - 500);
              } else if (airLvl === 1) {
                setAir(air - 1000);
                setWater(water - 500);
              } else if (airLvl === 2) {
                setAir(air - 1500);
                setFire(fire - 500);
              } else if (airLvl === 3) {
                setAir(air - 2000);
                setAstral(astral - 1000);
              } else if (airLvl === 4) {
                setAir(air - 2500);
                setLaw(law - 1000);
              } else if (airLvl === 5) {
                setAir(air - 3000);
                setBlood(blood - 2000);
              } else if (airLvl === 6) {
                setAir(air - 3500);
                setWrath(wrath - 2000);
              }
              setAirLvl(airLvl + 1);
            }}>
              Air Enchant&nbsp; {"I".repeat(airLvl + 1)} <img src={airEnchant} alt="Air Enchant" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">

              {airLvl === 0 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: air >= 500 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: earth >= 500 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                500
              </Box>
              </React.Fragment>
              :
              airLvl === 1 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: air >= 1000 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: water >= 500 ? "green" : "red"}}>
                <img src={waterRune} alt="Water Rune Amount"></img>
                500
              </Box>
              </React.Fragment>
              :
              airLvl === 2 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: air >= 1500 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                1500
              </Box>

              <Box sx={{border: 1, width: "39px", color: fire >= 500 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                500
              </Box>
              </React.Fragment>
              :
              airLvl === 3 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: air >= 2000 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                2000
              </Box>

              <Box sx={{border: 1, width: "39px", color: astral >= 1000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              airLvl === 4 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: air >= 2500 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                2500
              </Box>

              <Box sx={{border: 1, width: "39px", color: law >= 1000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              airLvl === 5 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: air >= 3000 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                3000
              </Box>

              <Box sx={{border: 1, width: "39px", color: blood >= 2000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                2000
              </Box>
              </React.Fragment>
              :
              airLvl === 6 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: air >= 3500 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                3500
              </Box>

              <Box sx={{border: 1, width: "39px", color: wrath >= 2000 ? "green" : "red"}}>
                <img src={wrathRune} alt="Wrath Rune Amount"></img>
                2000
              </Box>
              </React.Fragment>
              :
              ""}
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                <Typography>Doubles experience when crafting air runes. This effect lasts for the crafting of 1000 essence.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={airGloves > 0 ? true : air < 1000 ? true : false} onClick={() => {
              setAir(air - 1000);
              setAirGloves(1000);
            }}>
              Air Gloves&nbsp; <img src={AirGloves} alt="Air gloves" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: airGloves > 0 ? "black" : air >= 1000 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                1000
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            { mode === "zmi" ?
            <Tooltip title={
              <React.Fragment>
                {autoaltar < 1 ? <Typography>Allows autocrafting runes when your inventory is full.</Typography> : <Typography>Upgrade MAXED.</Typography>}
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
                {autoaltar < 8 ? <Typography>Allows autocrafting {nextRune[autoaltar]} runes when your inventory is full.</Typography> : <Typography>Upgrade MAXED.</Typography>}
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
              Talisman Mysteries&nbsp; {autoaltar < 3 ? "I".repeat(autoaltar + 1) : autoaltar === 3 ? "IV" : autoaltar < 8 ? "V" + "I".repeat(autoaltar - 4) : "MAX" }<img src={talismanList[autoaltar]} alt="Catalytic Talisman" height="32px" width="32px"></img>
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
                <Typography>Doubles experience when crafting earth runes. This effect lasts for the crafting of 1000 essence.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={earthGloves > 0 ? true : earth < 1000 ? true : false} onClick={() => {
              setEarth(earth - 1000);
              setEarthGloves(1000);
            }}>
              Earth Gloves&nbsp; <img src={EarthGloves} alt="Earth gloves" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: earthGloves > 0 ? "black" : earth >= 1000 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                1000
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                <Typography>Craft {earthLvl < 6 ? ((earthLvl + 1) * 10) + "%" : "MAXED"} more earth runes.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={earthLvl === 6 ? true :
            earthLvl === 0 ? (earth < 500 ? true : water < 500 ? true : false) :
            earthLvl === 1 ? (earth < 1000 ? true : fire < 500 ? true : false) :
            earthLvl === 2 ? (earth < 1500 ? true : astral < 1000 ? true : false) :
            earthLvl === 3 ? (earth < 2000 ? true : law < 1000 ? true : false) :
            earthLvl === 4 ? (earth < 2500 ? true : blood < 2000 ? true : false) :
            (earth < 3000 ? true : wrath < 2000 ? true : false)} onClick={() => {
              if (earthLvl === 0) {
                setEarth(earth - 500);
                setWater(water - 500);
              } else if (earthLvl === 1) {
                setEarth(earth - 1000);
                setFire(fire - 500);
              } else if (earthLvl === 2) {
                setEarth(earth - 1500);
                setAstral(astral - 1000);
              } else if (earthLvl === 3) {
                setEarth(earth - 2000);
                setLaw(law - 1000);
              } else if (earthLvl === 4) {
                setEarth(earth - 2500);
                setBlood(blood - 2000);
              } else if (earthLvl === 5) {
                setEarth(earth - 3000);
                setWrath(wrath - 2000);
              }
              setEarthLvl(earthLvl + 1);
            }}>
              Earth Enchant&nbsp; {"I".repeat(earthLvl + 1)} <img src={earthEnchant} alt="Earth Enchant" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">

              {earthLvl === 0 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: earth >= 500 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: water >= 500 ? "green" : "red"}}>
                <img src={waterRune} alt="Water Rune Amount"></img>
                500
              </Box>
              </React.Fragment>
              :
              earthLvl === 1 ?
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
              earthLvl === 2 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: earth >= 1500 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                1500
              </Box>

              <Box sx={{border: 1, width: "39px", color: astral >= 1000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              earthLvl === 3 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: earth >= 2000 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                2000
              </Box>

              <Box sx={{border: 1, width: "39px", color: law >= 1000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              earthLvl === 4 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: earth >= 2500 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                2500
              </Box>

              <Box sx={{border: 1, width: "39px", color: blood >= 2000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                2000
              </Box>
              </React.Fragment>
              :
              earthLvl === 5 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: earth >= 3000 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                3000
              </Box>

              <Box sx={{border: 1, width: "39px", color: wrath >= 2000 ? "green" : "red"}}>
                <img src={wrathRune} alt="Wrath Rune Amount"></img>
                2000
              </Box>
              </React.Fragment>
              :
              ""}
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                {pouch < 5 ? <Typography>Holds +{nextPouch[pouch]} essence.</Typography> : <Typography>Upgrade MAXED.</Typography>}
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={pouch === 5 ? true : 
              pouch === 0 ? (air < 100 ? true : earth >= 100 ? false : true) :
              pouch === 1 ? (earth < 500 ? true : water >= 100 ? false : true) :
              pouch === 2 ? (water < 500 ? true : fire < 100 ? true : astral < 100 ? true : false) :
              pouch === 3 ? (astral < 500 ? true : law >= 100 ? false : true) :
              (law < 500 ? true : blood >= 100 ? false : true)} onClick={() => {
              if (pouch === 0) {
                setAir(air - 100);
                setEarth(earth - 100);
              } else if (pouch === 1) {
                setEarth(earth - 500);
                setWater(water - 100);
              } else if (pouch === 2) {
                setWater(water - 500);
                setFire(fire - 100);
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
              {pouch === 0 ? "Small" : pouch === 1 ? "Medium" : pouch === 2 ? "Large" : pouch === 3 ? "Giant" : pouch === 4 ? "Collosal" : "MAX"} Pouch&nbsp; <img src={pouchList[pouch]} alt="Pouch" height="32px" width="32px"></img>
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

                  <Box sx={{border: 1, width: "39px", color: water >= 100 ? "green" : "red"}}>
                    <img src={waterRune} alt="Water Rune Amount"></img>
                    100
                  </Box>
                  </React.Fragment>
                  :
                  // Level 3
                  pouch === 2 ? 
                  <React.Fragment>
                  <Box sx={{border: 1, width: "39px", color: water >= 500 ? "green" : "red"}}>
                    <img src={waterRune} alt="Water Rune Amount"></img>
                    500
                  </Box>

                  <Box sx={{border: 1, width: "39px", color: fire >= 100 ? "green" : "red"}}>
                    <img src={fireRune} alt="Fire Rune Amount"></img>
                    100
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
                <Typography>Doubles experience when crafting water runes. This effect lasts for the crafting of 1000 essence.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={waterGloves > 0 ? true : water < 1000 ? true : false} onClick={() => {
              setWater(water - 1000);
              setWaterGloves(1000);
            }}>
              Water Gloves&nbsp; <img src={WaterGloves} alt="Water gloves" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: waterGloves > 0 ? "black" : water >= 1000 ? "green" : "red"}}>
                <img src={waterRune} alt="Water Rune Amount"></img>
                1000
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                <Typography>Craft {waterLvl < 5 ? ((waterLvl + 1) * 10) + "%" : "MAXED"} more water runes.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={waterLvl === 5 ? true :
            waterLvl === 0 ? (water < 500 ? true : fire < 500 ? true : false) :
            waterLvl === 1 ? (water < 1000 ? true : astral < 1000 ? true : false) :
            waterLvl === 2 ? (water < 1500 ? true : law < 1000 ? true : false) :
            waterLvl === 3 ? (water < 2000 ? true : blood < 2000 ? true : false) :
            (water < 2500 ? true : wrath < 2000 ? true : false)} onClick={() => {
              if (waterLvl === 0) {
                setWater(water - 500);
                setFire(fire - 500);
              } else if (waterLvl === 1) {
                setWater(water - 1000);
                setAstral(astral - 1000);
              } else if (waterLvl === 2) {
                setWater(water - 1500);
                setLaw(law - 1000);
              } else if (waterLvl === 3) {
                setWater(water - 2000);
                setBlood(blood - 2000);
              } else if (waterLvl === 4) {
                setWater(water - 2500);
                setWrath(wrath - 2000);
              }
              setWaterLvl(waterLvl + 1);
            }}>
              Water Enchant&nbsp; {"I".repeat(waterLvl + 1)} <img src={waterEnchant} alt="Water Enchant" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">

              {waterLvl === 0 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: water >= 500 ? "green" : "red"}}>
                <img src={waterRune} alt="Water Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: fire >= 500 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                500
              </Box>
              </React.Fragment>
              :
              waterLvl === 1 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: water >= 1000 ? "green" : "red"}}>
                <img src={waterRune} alt="Earth Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: law >= 1000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              waterLvl === 2 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: water >= 1500 ? "green" : "red"}}>
                <img src={waterRune} alt="Earth Rune Amount"></img>
                1500
              </Box>

              <Box sx={{border: 1, width: "39px", color: astral >= 1000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              waterLvl === 3 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: water >= 2000 ? "green" : "red"}}>
                <img src={waterRune} alt="Earth Rune Amount"></img>
                2000
              </Box>

              <Box sx={{border: 1, width: "39px", color: blood >= 2000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                2000
              </Box>
              </React.Fragment>
              :
              waterLvl === 4 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: water >= 2500 ? "green" : "red"}}>
                <img src={waterRune} alt="Earth Rune Amount"></img>
                2500
              </Box>

              <Box sx={{border: 1, width: "39px", color: wrath >= 2000 ? "green" : "red"}}>
                <img src={wrathRune} alt="Wrath Rune Amount"></img>
                2000
              </Box>
              </React.Fragment>
              :
              ""}
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                {hat === 0 ? <Typography>Grants 10% more runes when runecrafting.</Typography> : <Typography>Grants 1% more experience when runecrafting.</Typography>}
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: hat === 0 ? "80px" : "109px", width: "250px"}} disabled={
              hat === 0 ? (air < 500 ? true : astral < 500 ? true : false) :
              hat === 1 ? (air < 2000 ? true : law < 2000 ? true : blood < 2000 ? true : false) : true} onClick={() => {
                if (hat === 0) {
                  setAir(air - 500);
                  setAstral(astral - 500);
                  setHat(1);
                } else if (hat === 1) {
                  setAir(air - 2000);
                  setAstral(law - 2000);
                  setBlood(blood - 2000);
                  setHat(2);
                }
            }}>
              {hat === 0 ?
              <React.Fragment>
                Hat of the eye <img src={eyeHat} alt="Eye hat" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: hat ? "black" : air >= 500 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: hat ? "black" : astral >= 500 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                500
              </Box>
              </Grid>
              </React.Fragment>
              :
              <React.Fragment>
                Master Runecrafter&nbsp; Hat <img src={masterHat} alt="Eye hat" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: hat === 2 ? "black" : air >= 2000 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                2000
              </Box>

              <Box sx={{border: 1, width: "39px", color: hat === 2 ? "black" : law >= 2000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                2000
              </Box>

              <Box sx={{border: 1, width: "39px", color: hat === 2 ? "black" : blood >= 2000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                2000
              </Box>
              </Grid>
            </React.Fragment>}
            </Button>
            </span>
            </Tooltip>

            <br></br>
            
            <Tooltip title={
            <React.Fragment>
                {top === 0 ? <Typography>Grants 10% more runes when runecrafting.</Typography> : <Typography>Grants 1% more experience when runecrafting.</Typography>}
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: top === 0 ? "80px" : "109px", width: "250px"}} disabled={
              top === 0 ? (earth < 500 ? true : astral < 500 ? true : false) :
              top === 1 ? (earth < 2000 ? true : law < 2000 ? true : blood < 2000 ? true : false) : true} onClick={() => {
              if (top === 0) {
                setEarth(earth - 500);
                setAstral(astral - 500);
                setTop(1);
              } else if (top === 1) {
                setEarth(earth - 2000);
                setLaw(law - 2000);
                setBlood(blood - 2000);
                setTop(2);
              }
            }}>
              {top === 0 ?
              <React.Fragment>
                Robe top of the eye <img src={eyeTop} alt="Eye top" height="32px" width="32px"></img>
                <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                <Box sx={{border: 1, width: "39px", color: top ? "black" : earth >= 500 ? "green" : "red"}}>
                  <img src={earthRune} alt="Earth Rune Amount"></img>
                  500
                </Box>

                <Box sx={{border: 1, width: "39px", color: top ? "black" : astral >= 500 ? "green" : "red"}}>
                  <img src={astralRune} alt="Astral Rune Amount"></img>
                  500
                </Box>
                </Grid>
              </React.Fragment>
              :
              <React.Fragment>
              Master Runecrafter Robe <img src={masterTop} alt="Master top" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: top === 2 ? "black" : earth >= 2000 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                2000
              </Box>

              <Box sx={{border: 1, width: "39px", color: top === 2 ? "black" : astral >= 2000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                2000
              </Box>

              <Box sx={{border: 1, width: "39px", color: top === 2 ? "black" : blood >= 2000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                2000
              </Box>
              </Grid>
            </React.Fragment>}
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                {bottom === 0 ? <Typography>Grants 10% more runes when runecrafting.</Typography> : <Typography>Grants 1% more experience when runecrafting.</Typography>}
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: bottom === 0 ? "80px" : "109px", width: "250px"}} disabled={
              bottom === 0 ? (water < 500 ? true : astral < 500 ? true : false) :
              bottom === 1 ? (water < 2000 ? true : law < 2000 ? true : blood < 2000 ? true : false) : true} onClick={() => {
              if (bottom === 0) {
                setWater(water - 500);
                setAstral(astral - 500);
                setBottom(1);
              } else if (bottom === 1) {
                setWater(water - 2000);
                setLaw(law - 2000);
                setBlood(blood - 2000);
                setBottom(2);
              }
            }}>
              {bottom === 0 ?
              <React.Fragment>
                Robe bottom of the eye <img src={eyeBottom} alt="Eye bottom" height="32px" width="32px"></img>
                <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                <Box sx={{border: 1, width: "39px", color: bottom ? "black" : water >= 500 ? "green" : "red"}}>
                  <img src={waterRune} alt="Water Rune Amount"></img>
                  500
                </Box>

                <Box sx={{border: 1, width: "39px", color: bottom ? "black" : astral >= 500 ? "green" : "red"}}>
                  <img src={astralRune} alt="Astral Rune Amount"></img>
                  500
                </Box>
                </Grid>
              </React.Fragment>
              :
              <React.Fragment>
                Master Runecrafter Skirt <img src={masterBottom} alt="Master bottom" height="32px" width="32px"></img>
                <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                <Box sx={{border: 1, width: "39px", color: bottom === 2 ? "black" : water >= 2000 ? "green" : "red"}}>
                  <img src={waterRune} alt="Water Rune Amount"></img>
                  2000
                </Box>

                <Box sx={{border: 1, width: "39px", color: bottom === 2 ? "black" : law >= 2000 ? "green" : "red"}}>
                  <img src={lawRune} alt="Law Rune Amount"></img>
                  2000
                </Box>

                <Box sx={{border: 1, width: "39px", color: bottom === 2 ? "black" : blood >= 2000 ? "green" : "red"}}>
                  <img src={bloodRune} alt="Blood Rune Amount"></img>
                  2000
                </Box>
                </Grid>
              </React.Fragment>}
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                {boots === 0 ? <Typography>Grants 10% more runes when runecrafting.</Typography> : <Typography>Grants 1% more experience when runecrafting.</Typography>}
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: boots === 0 ? "80px" : "109px", width: "250px"}} disabled={
              boots === 0 ? (fire < 500 ? true : astral < 500 ? true : false) :
              boots === 1 ? (fire < 2000 ? true : law < 2000 ? true : blood < 2000 ? true : false) : true} onClick={() => {
              if (boots === 0) {
                setFire(fire - 500);
                setAstral(astral - 500);
                setBoots(1);
              } else if (boots === 1) {
                setFire(fire - 2000);
                setLaw(law - 2000);
                setBlood(blood - 2000);
                setBoots(2);
              }
            }}>
            {boots === 0 ?
            <React.Fragment>
              Boots of the eye <img src={eyeBoots} alt="Eye boots" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: boots ? "black" : fire >= 500 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: boots ? "black" : astral >= 500 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                500
              </Box>
              </Grid>
            </React.Fragment>
            :
            <React.Fragment>
            Master Runecrafter Boots <img src={masterBoots} alt="Master boots" height="32px" width="32px"></img>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
            <Box sx={{border: 1, width: "39px", color: boots === 2 ? "black" : fire >= 2000 ? "green" : "red"}}>
              <img src={fireRune} alt="Fire Rune Amount"></img>
              2000
            </Box>

            <Box sx={{border: 1, width: "39px", color: boots === 2 ? "black" : law >= 2000 ? "green" : "red"}}>
              <img src={lawRune} alt="Law Rune Amount"></img>
              2000
            </Box>

            <Box sx={{border: 1, width: "39px", color: boots === 2 ? "black" : blood >= 2000 ? "green" : "red"}}>
              <img src={bloodRune} alt="Blood Rune Amount"></img>
              2000
            </Box>
            </Grid>
            </React.Fragment>}
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                <Typography>Doubles experience when crafting fire runes. This effect lasts for the crafting of 1000 essence.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={fireGloves > 0 ? true : fire < 1000 ? true : false} onClick={() => {
              setFire(fire - 1000);
              setFireGloves(1000);
            }}>
              Fire Gloves&nbsp; <img src={FireGloves} alt="Fire gloves" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: fireGloves > 0 ? "black" : fire >= 1000 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                1000
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                <Typography>Craft {fireLvl < 4 ? ((fireLvl + 1) * 10) + "%" : "MAXED"} more fire runes.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={fireLvl === 4 ? true :
            fireLvl === 0 ? (fire < 500 ? true : astral < 1000 ? true : false) :
            fireLvl === 1 ? (fire < 1000 ? true : law < 1000 ? true : false) :
            fireLvl === 2 ? (fire < 1500 ? true : blood < 2000 ? true : false) :
            (fire < 2500 ? true : wrath < 2000 ? true : false)} onClick={() => {
              if (fireLvl === 0) {
                setFire(fire - 500);
                setAstral(astral - 1000);
              } else if (fireLvl === 1) {
                setFire(fire - 1000);
                setLaw(law - 1000);
              } else if (fireLvl === 2) {
                setFire(fire - 1500);
                setBlood(blood - 2000);
              } else if (fireLvl === 3) {
                setFire(fire - 2000);
                setWrath(wrath - 2000);
              }
              setFireLvl(fireLvl + 1);
            }}>
              Fire Enchant&nbsp; {"I".repeat(fireLvl + 1)} <img src={fireEnchant} alt="Fire Enchant" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">

              {fireLvl === 0 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: fire >= 500 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                500
              </Box>

              <Box sx={{border: 1, width: "39px", color: astral >= 1000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              fireLvl === 1 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: fire >= 1000 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: law >= 1000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              fireLvl === 2 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: fire >= 1500 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                1500
              </Box>

              <Box sx={{border: 1, width: "39px", color: blood >= 2000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                2000
              </Box>
              </React.Fragment>
              :
              fireLvl === 3 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: fire >= 2000 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                2000
              </Box>

              <Box sx={{border: 1, width: "39px", color: wrath >= 2000 ? "green" : "red"}}>
                <img src={wrathRune} alt="Wrath Rune Amount"></img>
                2000
              </Box>
              </React.Fragment>
              :
              ""}
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
                <Typography>Craft {astralLvl < 3 ? ((astralLvl + 1) * 10) + "%" : "MAXED"} more astral runes.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={astralLvl === 3 ? true :
            astralLvl === 0 ? (astral < 1000 ? true : law < 1000 ? true : false) :
            astralLvl === 1 ? (astral < 2000 ? true : blood < 2000 ? true : false) :
            (astral < 3000 ? true : wrath < 2000 ? true : false)} onClick={() => {
              if (astralLvl === 0) {
                setAstral(astral - 1000);
                setLaw(law - 1000);
              } else if (astralLvl === 1) {
                setAstral(astral - 2000);
                setBlood(blood - 2000);
              } else if (astralLvl === 2) {
                setAstral(astral - 3000);
                setWrath(wrath - 2000);
              }
              setAstralLvl(astralLvl + 1);
            }}>
              Astral Enchant&nbsp; {"I".repeat(astralLvl + 1)} <img src={astralEnchant} alt="Astral Enchant" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">

              {astralLvl === 0 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: astral >= 1000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: law >= 1000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                1000
              </Box>
              </React.Fragment>
              :
              astralLvl === 1 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: astral >= 2000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                2000
              </Box>

              <Box sx={{border: 1, width: "39px", color: blood >= 2000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                2000
              </Box>
              </React.Fragment>
              :
              astralLvl === 2 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: astral >= 3000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                3000
              </Box>

              <Box sx={{border: 1, width: "39px", color: wrath >= 2000 ? "green" : "red"}}>
                <img src={wrathRune} alt="Wrath Rune Amount"></img>
                2000
              </Box>
              </React.Fragment>
              :
              ""}
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            {lawOutfit < 5 ? 
            <React.Fragment>
            <Tooltip title={
            <React.Fragment>
                <Typography>Part of the Law Ethereal Outfit.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={lawOutfit === 5 ? true : law < 3000 ? true : false} onClick={() => {
              setLaw(law - 3000);
              setLawOutfit(lawOutfit + 1);
            }}>
              {lawOutfit === 0 ? <React.Fragment>Law Ethereal Head <img src={lawHead} alt="Law head" height="32px" width="32px"></img></React.Fragment> :
              lawOutfit === 1 ? <React.Fragment>Law Ethereal Top <img src={lawTop} alt="Law top" height="32px" width="32px"></img></React.Fragment> :
              lawOutfit === 2 ? <React.Fragment>Law Ethereal Bottom <img src={lawBottom} alt="Law bottom" height="32px" width="32px"></img></React.Fragment> :
              lawOutfit === 3 ? <React.Fragment>Law Ethereal Gloves <img src={lawHands} alt="Law hands" height="32px" width="32px"></img></React.Fragment> :
              <React.Fragment>Law Ethereal Boots <img src={lawBoots} alt="Law boots" height="32px" width="32px"></img></React.Fragment>}
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">

              <Box sx={{border: 1, width: "39px", color: law >= 3000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                3000
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>
            </React.Fragment> : ""}

            <Tooltip title={
            <React.Fragment>
                <Typography>Gain 50% more blood runes for the next 1000 blood runes crafted (also affects xp).</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={bloodEssence > 0 ? true : water < 2000 ? true : blood < 1000 ? true : false} onClick={() => {
              setWater(water - 2000);
              setBlood(blood - 1000);
              setBloodEssence(1000);
            }}>
              Blood Essence <img src={bloodBoost} alt="Blood essence" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">

              <Box sx={{border: 1, width: "39px", color: bloodEssence > 0 ? "black" : water >= 2000 ? "green" : "red"}}>
                <img src={waterRune} alt="Water Rune Amount"></img>
                2000
              </Box>

              <Box sx={{border: 1, width: "39px", color: bloodEssence > 0 ? "black" : blood >= 1000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                1000
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                <Typography>Craft {lawLvl < 2 ? ((lawLvl + 1) * 10) + "%" : "MAXED"} more law runes.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={lawLvl === 2 ? true :
            lawLvl === 0 ? (law < 1000 ? true : blood < 2000 ? true : false) :
            (law < 2000 ? true : wrath < 2000 ? true : false)} onClick={() => {
              if (lawLvl === 0) {
                setLaw(law - 1000);
                setBlood(blood - 2000);
              } else if (lawLvl === 1) {
                setLaw(law - 2000);
                setWrath(wrath - 2000);
              }
              setLawLvl(lawLvl + 1);
            }}>
              Law Enchant&nbsp; {"I".repeat(lawLvl + 1)} <img src={lawEnchant} alt="Law Enchant" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">

              {lawLvl === 0 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: law >= 1000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                1000
              </Box>

              <Box sx={{border: 1, width: "39px", color: blood >= 2000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                2000
              </Box>
              </React.Fragment>
              :
              lawLvl === 1 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: law >= 2000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                2000
              </Box>

              <Box sx={{border: 1, width: "39px", color: wrath >= 2000 ? "green" : "red"}}>
                <img src={wrathRune} alt="Wrath Rune Amount"></img>
                2000
              </Box>
              </React.Fragment>
              :
              ""}
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            {bloodOutfit < 5 ? 
            <React.Fragment>
            <Tooltip title={
            <React.Fragment>
                <Typography>Part of the Blood Ethereal Outfit.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={bloodOutfit === 5 ? true : blood < 3000 ? true : false} onClick={() => {
              setBlood(blood - 3000);
              setBloodOutfit(bloodOutfit + 1);
            }}>
              {bloodOutfit === 0 ? <React.Fragment>Blood Ethereal Head <img src={bloodHead} alt="Blood head" height="32px" width="32px"></img></React.Fragment> :
              bloodOutfit === 1 ? <React.Fragment>Blood Ethereal Top <img src={bloodTop} alt="Blood top" height="32px" width="32px"></img></React.Fragment> :
              bloodOutfit === 2 ? <React.Fragment>Blood Ethereal Bottom <img src={bloodBottom} alt="Blood bottom" height="32px" width="32px"></img></React.Fragment> :
              bloodOutfit === 3 ? <React.Fragment>Blood Ethereal Gloves <img src={bloodHands} alt="Blood hands" height="32px" width="32px"></img></React.Fragment> :
              <React.Fragment>Blood Ethereal Boots <img src={bloodBoots} alt="Blood boots" height="32px" width="32px"></img></React.Fragment>}
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">

              <Box sx={{border: 1, width: "39px", color: blood >= 3000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                3000
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>
            </React.Fragment> : ""}

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

            <Tooltip title={
            <React.Fragment>
                <Typography>Grants the ability to convert elemental runes into other elemental runes.<br></br>(20 runes of one type is required to turn them into another rune)</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "163.5px", width: "250px"}} disabled={elementalOffer ? true :
            (air < 5000 ? true : earth < 5000 ? true : water < 5000 ? true : fire < 5000 ? true : blood < 5000 ? true : false)} onClick={() => {
              setAir(air - 5000);
              setEarth(earth - 5000);
              setWater(water - 5000);
              setFire(fire - 5000);
              setBlood(blood - 5000);
              setElementalOffer(true);
            }}>
              Elemental Offering&nbsp; <img src={DemonOffer} alt="Elemental Offering" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: elementalOffer ? "black" : air >= 5000 ? "green" : "red"}}>
                <img src={airRune} alt="Air Rune Amount"></img>
                5000
              </Box>

              <Box sx={{border: 1, width: "39px", color: elementalOffer ? "black" : earth >= 5000 ? "green" : "red"}}>
                <img src={earthRune} alt="Earth Rune Amount"></img>
                5000
              </Box>

              <Box sx={{border: 1, width: "39px", color: elementalOffer ? "black" : water >= 5000 ? "green" : "red"}}>
                <img src={waterRune} alt="Water Rune Amount"></img>
                5000
              </Box>

              <Box sx={{border: 1, width: "39px", color: elementalOffer ? "black" : fire >= 5000 ? "green" : "red"}}>
                <img src={fireRune} alt="Fire Rune Amount"></img>
                5000
              </Box>

              <Box sx={{border: 1, width: "39px", color: elementalOffer ? "black" : blood >= 5000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                5000
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

            <Tooltip title={
            <React.Fragment>
                <Typography>Craft {bloodLvl < 1 ? "10%" : "MAXED"} more blood runes.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={bloodLvl === 1 ? true :
            (blood < 2000 ? true : wrath < 2000 ? true : false)} onClick={() => {
              setBlood(blood - 2000);
              setWrath(wrath - 2000);
              setBloodLvl(1);
            }}>
              Blood Enchant&nbsp; <img src={bloodEnchant} alt="Blood Enchant" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">

              {bloodLvl === 0 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: blood >= 2000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                2000
              </Box>

              <Box sx={{border: 1, width: "39px", color: wrath >= 2000 ? "green" : "red"}}>
                <img src={wrathRune} alt="Wrath Rune Amount"></img>
                2000
              </Box>
              </React.Fragment>
              :
              ""}
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
              <Button key={"auto altar"} sx={{border: 1, color: "green", height: "163.5px", width: "250px"}} disabled={ouraniaAltar ? true : air < 5000 ? true : earth < 5000 ? true : 
              fire < 5000 ? true : law < 5000 ? true : astral < 5000 ? true : blood < 5000 ? true : wrath < 5000 ? true : false} onClick={() => {
                setAir(air - 5000);
                setEarth(earth - 5000);
                setWater(water - 5000);
                setFire(fire - 5000)
                setLaw(law - 5000);
                setAstral(astral - 5000);
                setBlood(blood - 5000);
                setWrath(wrath - 5000);
                setOuraniaAltar(true);
                setInventory([]);
                setExtra(0);
              }}>
                Ourania Altar <img src={zmiAltar} alt="Ourania Altar" height="32px" width="32px"></img>
                <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : air >= 5000 ? "green" : "red"}}>
                  <img src={airRune} alt="Air Rune Amount"></img>
                  5000
                </Box>
  
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : earth >= 5000 ? "green" : "red"}}>
                  <img src={earthRune} alt="Earth Rune Amount"></img>
                  5000
                </Box>
  
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : water >= 5000 ? "green" : "red"}}>
                  <img src={waterRune} alt="Water Rune Amount"></img>
                  5000
                </Box>
  
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : fire >= 5000 ? "green" : "red"}}>
                  <img src={fireRune} alt="Fire Rune Amount"></img>
                  5000
                </Box>
  
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : astral >= 5000 ? "green" : "red"}}>
                  <img src={astralRune} alt="Astral Rune Amount"></img>
                  5000
                </Box>
  
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : law >= 5000 ? "green" : "red"}}>
                  <img src={lawRune} alt="Law Rune Amount"></img>
                  5000
                </Box>
  
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : blood >= 5000 ? "green" : "red"}}>
                  <img src={bloodRune} alt="Blood Rune Amount"></img>
                  5000
                </Box>
  
                <Box sx={{border: 1, width: "39px", color: ouraniaAltar ? "black" : wrath >= 5000 ? "green" : "red"}}>
                  <img src={wrathRune} alt="Wrath Rune Amount"></img>
                  5000
                </Box>
                </Grid>
              </Button>
              </span>
              </Tooltip>
              :
              ""}

              <br></br>

              <Tooltip title={
            <React.Fragment>
                <Typography>Grants the ability to convert catalytic runes into other catalytic runes.<br></br>(20 runes of one type is required to turn them into another rune)</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "109px", width: "250px"}} disabled={catalyticOffer ? true :
            (astral < 5000 ? true : law < 5000 ? true : blood < 5000 ? true : wrath < 5000 ? true : false)} onClick={() => {
              setAstral(astral - 5000);
              setLaw(law - 5000);
              setBlood(blood - 5000);
              setWrath(wrath - 5000);
              setCatalyticOffer(true);
            }}>
              Catalytic Offering&nbsp; <img src={SinisterOffer} alt="Catalytic Offering" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
              <Box sx={{border: 1, width: "39px", color: catalyticOffer ? "black" : astral >= 5000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                5000
              </Box>

              <Box sx={{border: 1, width: "39px", color: catalyticOffer ? "black" : law >= 5000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                5000
              </Box>

              <Box sx={{border: 1, width: "39px", color: catalyticOffer ? "black" : blood >= 5000 ? "green" : "red"}}>
                <img src={bloodRune} alt="Blood Rune Amount"></img>
                5000
              </Box>

              <Box sx={{border: 1, width: "39px", color: catalyticOffer ? "black" : wrath >= 5000 ? "green" : "red"}}>
                <img src={wrathRune} alt="Wrath Rune Amount"></img>
                5000
              </Box>
              </Grid>
            </Button>
            </span>
            </Tooltip>

            <br></br>

              <Tooltip title={
            <React.Fragment>
                <Typography>Craft {wrathLvl < 1 ? "10%" : "MAXED"} more wrath runes.</Typography>
              </React.Fragment>} arrow placement="right">
              <span style={{width: "250px", display: "block"}}>
            <Button key={"auto altar"} sx={{border: 1, color: "green", height: "109px", width: "250px"}} disabled={wrathLvl === 1 ? true :
            (astral < 5000 ? true : law < 5000 ? true : blood < 5000 ? true : wrath < 5000 ? true : false)} onClick={() => {
              setAstral(astral - 5000);
              setLaw(law - 5000);
              setBlood(blood - 5000);
              setWrath(wrath - 5000);
              setWrathLvl(1);
            }}>
              Wrath Enchant&nbsp; <img src={wrathEnchant} alt="Wrath Enchant" height="32px" width="32px"></img>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">

              {wrathLvl === 0 ?
              <React.Fragment>
              <Box sx={{border: 1, width: "39px", color: astral >= 5000 ? "green" : "red"}}>
                <img src={astralRune} alt="Astral Rune Amount"></img>
                5000
              </Box>

              <Box sx={{border: 1, width: "39px", color: law >= 5000 ? "green" : "red"}}>
                <img src={lawRune} alt="Law Rune Amount"></img>
                5000
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

              {wrathOutfit < 5 ? 
              <React.Fragment>
              <Tooltip title={
              <React.Fragment>
                  <Typography>Part of the Wrath Ethereal Outfit.</Typography>
                </React.Fragment>} arrow placement="right">
                <span style={{width: "250px", display: "block"}}>
              <Button key={"auto altar"} sx={{border: 1, color: "green", height: "80px", width: "250px"}} disabled={wrathOutfit === 5 ? true : wrath < 3000 ? true : false} onClick={() => {
                setWrath(wrath - 3000);
                setWrathOutfit(wrathOutfit + 1);
              }}>
                {wrathOutfit === 0 ? <React.Fragment>Wrath Ethereal Head <img src={wrathHead} alt="Wrath head" height="32px" width="32px"></img></React.Fragment> :
                wrathOutfit === 1 ? <React.Fragment>Wrath Ethereal Top <img src={wrathTop} alt="Wrath top" height="32px" width="32px"></img></React.Fragment> :
                wrathOutfit === 2 ? <React.Fragment>Wrath Ethereal Bottom <img src={wrathBottom} alt="Wrath bottom" height="32px" width="32px"></img></React.Fragment> :
                wrathOutfit === 3 ? <React.Fragment>Wrath Ethereal Gloves <img src={wrathHands} alt="Wrath hands" height="32px" width="32px"></img></React.Fragment> :
                <React.Fragment>Wrath Ethereal Boots <img src={wrathBoots} alt="Wrath boots" height="32px" width="32px"></img></React.Fragment>}
                <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">

                <Box sx={{border: 1, width: "39px", color: wrath >= 3000 ? "green" : "red"}}>
                  <img src={wrathRune} alt="Wrath Rune Amount"></img>
                  3000
                </Box>
                </Grid>
              </Button>
              </span>
              </Tooltip>

              <br></br>
              </React.Fragment> : ""}

              {(infinityOutfit < 5 && lawOutfit === 5 && bloodOutfit === 5 && wrathOutfit === 5) ? 
              <React.Fragment>
              <Tooltip title={
              <React.Fragment>
                  <Typography>A powerful outfit piece created from the combined powers of all 3 ethereal outfits.</Typography>
                </React.Fragment>} arrow placement="right">
                <span style={{width: "250px", display: "block"}}>
              <Button key={"auto altar"} sx={{border: 1, color: "green", height: (infinityOutfit === 0 || infinityOutfit === 2) ? "109px" : "163.5px", width: "250px"}} disabled={infinityOutfit === 5 ? true : law < 3000 ? true : blood < 3000 ? true : wrath < 3000 ? true : false} onClick={() => {
                setLaw(law - 3000);
                setBlood(blood - 3000);
                setWrath(wrath - 3000);
                setInfinityOutfit(infinityOutfit + 1);
              }}>
                {infinityOutfit === 0 ? <React.Fragment>Infinity Ethereal Head <img src={infinityHead} alt="Infinity head" height="32px" width="32px"></img></React.Fragment> :
                infinityOutfit === 1 ? <React.Fragment>Infinity Ethereal Top <img src={infinityTop} alt="Infinity top" height="32px" width="32px"></img></React.Fragment> :
                infinityOutfit === 2 ? <React.Fragment>Infinity Ethereal Bottom <img src={infinityBottom} alt="Infinity bottom" height="32px" width="32px"></img></React.Fragment> :
                infinityOutfit === 3 ? <React.Fragment>Infinity Ethereal Gloves <img src={infinityHands} alt="Infinity hands" height="32px" width="32px"></img></React.Fragment> :
                <React.Fragment>Infinity Ethereal Boots <img src={infinityBoots} alt="Infinity boots" height="32px" width="32px"></img></React.Fragment>}
                <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">

              {infinityOutfit === 0 ?
                <React.Fragment>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={lawHead} alt="Law Head" height="32px"></img>
                    <br></br>
                    1
                  </Box>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={bloodHead} alt="Blood Head" height="32px"></img>
                    <br></br>
                    1
                  </Box>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={wrathHead} alt="Wrath Head" height="32px"></img>
                    <br></br>1
                  </Box>
                </React.Fragment>
                :
              infinityOutfit === 1 ? 
                <React.Fragment>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={lawTop} alt="Law Top" height="32px" width="32px"></img>
                    <br></br>
                    1
                  </Box>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={bloodTop} alt="Blood Top" height="32px" width="32px"></img>
                    <br></br>
                    1
                  </Box>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={wrathTop} alt="Wrath Top" height="32px" width="32px"></img>
                    <br></br>
                    1
                  </Box>
                </React.Fragment>
                :
              infinityOutfit === 2 ?
                <React.Fragment>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={lawBottom} alt="Law Bottom" height="32px" width="20px"></img>
                    <br></br>
                    1
                  </Box>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={bloodBottom} alt="Blood Bottom" height="32px" width="20px"></img>
                    <br></br>
                    1
                  </Box>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={wrathBottom} alt="Wrath Bottom" height="32px" width="20px"></img>
                    <br></br>
                    1
                  </Box>
                </React.Fragment>
                :
              infinityOutfit === 3 ?
                <React.Fragment>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={lawHands} alt="Law Hands" height="32px"></img>
                    <br></br>
                    1
                  </Box>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={bloodHands} alt="Blood Hands" height="32px"></img>
                    <br></br>
                    1
                  </Box>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={wrathHands} alt="Wrath Hands" height="32px"></img>
                    <br></br>
                    1
                  </Box>
                </React.Fragment>
                :
              infinityOutfit === 4 ?
                <React.Fragment>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={lawBoots} alt="Law Boots" height="32px" width="32px"></img>
                    <br></br>
                    1
                  </Box>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={bloodBoots} alt="Blood Boots" height="32px" width="32px"></img>
                    <br></br>
                    1
                  </Box>
                  <Box sx={{border: 1, height: "54.5px", color: "green"}}>
                    <img src={wrathBoots} alt="Wrath Boots" height="32px" width="32px"></img>
                    <br></br>
                    1
                  </Box>
                </React.Fragment>
                :
                ""}

                <Box sx={{border: 1, width: "39px", color: law >= 3000 ? "green" : "red"}}>
                  <img src={lawRune} alt="Law Rune Amount"></img>
                  3000
                </Box>

                <Box sx={{border: 1, width: "39px", color: blood >= 3000 ? "green" : "red"}}>
                  <img src={bloodRune} alt="Blood Rune Amount"></img>
                  3000
                </Box>

                <Box sx={{border: 1, width: "39px", color: wrath >= 3000 ? "green" : "red"}}>
                  <img src={wrathRune} alt="Wrath Rune Amount"></img>
                  3000
                </Box>
                </Grid>
              </Button>
              </span>
              </Tooltip>

              <br></br>
              </React.Fragment> : ""}

          </List>
        </Box>
      );

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{paddingBottom: "15px", mx: "auto", marginRight: autoaltar ? "0.5%" : "auto", marginLeft: "0.5%"}}>
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