import { Box, Grid } from "@mui/material";
import airRune from "../icons/air_rune_small.png";
import earthRune from "../icons/earth_rune_small.png";
import waterRune from "../icons/water_rune_small.png";
import fireRune from "../icons/fire_rune_small.png";
import astralRune from "../icons/astral_rune_small.png";
import lawRune from "../icons/law_rune_small.png";
import bloodRune from "../icons/blood_rune_small.png";
import wrathRune from "../icons/wrath_rune_small.png";
import elementalStone from "../icons/elemental_stone_small.png";
import catalyticStone from "../icons/catalytic_stone_small.png";
import eyeHat from "../icons/hat_of_the_eye.png";
import eyeTop from "../icons/top_of_the_eye.png";
import eyeBottom from "../icons/bottom_of_the_eye.png";
import eyeBoots from "../icons/boots_of_the_eye.png";
import React from "react";

export default function RunesSection(props) {

    const prestige = props.prestige;
    const elemental = props.elemental;
    const catalytic = props.catalytic;

    const air = props.air;
    const earth = props.earth;
    const water = props.water;
    const fire = props.fire;
    const astral = props.astral;
    const law = props.law;
    const blood = props.blood;
    const wrath = props.wrath;
    const bonus = props.bonus;
    const hat = props.hat;
    const top = props.top;
    const bottom = props.bottom;
    const boots = props.boots;

    return (
        <Box sx={{color: "white"}}>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
            <Box sx={{border: 1}} width={air >= 10000 ? 39 + 10 * (1 + Math.log10(air / 10000)) + "px" : "39px"}>
            <img src={airRune} alt="Air Rune Amount"></img>
              {air}
            </Box>
             
            <Box sx={{border: 1}} width={earth >= 10000 ? 39 + 10 * (1 + Math.log10(earth / 10000)) + "px" : "39px"}>
            <img src={earthRune} alt="Earth Rune Amount"></img>
              {earth}
            </Box>

            <Box sx={{border: 1}} width={water >= 10000 ? 39 + 10 * (1 + Math.log10(water / 10000)) + "px" : "39px"}>
            <img src={waterRune} alt="Water Rune Amount"></img>
              {water}
            </Box>

            <Box sx={{border: 1}} width={fire >= 10000 ? 39 + 10 * (1 + Math.log10(fire / 10000)) + "px" : "39px"}>
            <img src={fireRune} alt="Fire Rune Amount"></img>
              {fire}
            </Box>

            <Box sx={{border: 1}} width={astral >= 10000 ? 39 + 10 * (1 + Math.log10(astral / 10000)) + "px" : "39px"}>
            <img src={astralRune} alt="Astral Rune Amount"></img>
              {astral}
            </Box>

            <Box sx={{border: 1}} width={law >= 10000 ? 39 + 10 * (1 + Math.log10(law / 10000)) + "px" : "39px"}>
            <img src={lawRune} alt="Law Rune Amount"></img>
              {law}
            </Box>

            <Box sx={{border: 1}} width={blood >= 10000 ? 39 + 10 * (1 + Math.log10(blood / 10000)) + "px" : "39px"}>
            <img src={bloodRune} alt="Blood Rune Amount"></img>
              {blood}
            </Box>

            <Box sx={{border: 1}} width={wrath >= 10000 ? 39 + 10 * (1 + Math.log10(wrath / 10000)) + "px" : "39px"}>
            <img src={wrathRune} alt="Wrath Rune Amount"></img>
              {wrath}
            </Box>

            {prestige >= 1 ? 
            <React.Fragment>
              <Box width="39px"></Box>

              <Box sx={{border: 1}} width={elemental >= 10000 ? 39 + 10 * (1 + Math.log10(elemental / 10000)) + "px" : "39px"}>
              <img src={elementalStone} alt="Elemental Stone Amount"></img>
                <br></br>{elemental}
              </Box>

              <Box sx={{border: 1}} width={catalytic >= 10000 ? 39 + 10 * (1 + Math.log10(catalytic / 10000)) + "px" : "39px"}>
              <img src={catalyticStone} alt="Catalytic Stone Amount" width="25px" height="27px"></img>
                <br></br>{catalytic}
              </Box>
            </React.Fragment>
            :
            ""}
            </Grid>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
            {hat ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={eyeHat} alt="Eye Hat" height="32px" width="32px"></img></Box> : ""}
            {top ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={eyeTop} alt="Eye Top" height="32px" width="32px"></img></Box> : ""}
            {bottom ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={eyeBottom} alt="Eye Bottom" height="32px" width="32px"></img></Box> : ""}
            {boots ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={eyeBoots} alt="Eye Boots" height="32px" width="32px"></img></Box> : ""}
            {bonus > 1 ? <Box sx={{color: "green"}}>+{bonus >= 1.6 ? Math.round(((bonus - 0.2) - 1) * 100) : Math.round((bonus - 1) * 100)}% Runes</Box>: ""}
            {bonus >= 1.6 ? <Box sx={{color: "gold"}}>&nbsp;+20% Set Bonus!</Box> : ""}
            </Grid>
        </Box>
    )
}