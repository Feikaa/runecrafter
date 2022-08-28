import { Box, Grid } from "@mui/material";
import airRune from "../icons/air_rune_small.png";
import earthRune from "../icons/earth_rune_small.png";
import cosmicRune from "../icons/cosmic_rune_small.png";
import astralRune from "../icons/astral_rune_small.png";
import lawRune from "../icons/law_rune_small.png";
import bloodRune from "../icons/blood_rune_small.png";
import wrathRune from "../icons/wrath_rune_small.png";
import eyeHat from "../icons/hat_of_the_eye.png";
import eyeTop from "../icons/top_of_the_eye.png";
import eyeBottom from "../icons/bottom_of_the_eye.png";
import eyeBoots from "../icons/boots_of_the_eye.png";

export default function RunesSection(props) {

    const air = props.air;
    const earth = props.earth;
    const cosmic = props.cosmic;
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

            <Box sx={{border: 1}} width={cosmic >= 10000 ? 39 + 10 * (1 + Math.log10(cosmic / 10000)) + "px" : "39px"}>
            <img src={cosmicRune} alt="Cosmic Rune Amount"></img>
              {cosmic}
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
            </Grid>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
            {hat ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={eyeHat} alt="Eye Hat" height="32px" width="32px"></img></Box> : ""}
            {top ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={eyeTop} alt="Eye Top" height="32px" width="32px"></img></Box> : ""}
            {bottom ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={eyeBottom} alt="Eye Bottom" height="32px" width="32px"></img></Box> : ""}
            {boots ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={eyeBoots} alt="Eye Boots" height="32px" width="32px"></img></Box> : ""}
            {bonus > 1 ? <Box sx={{color: "green"}}>+{bonus >= 1.6 ? Math.round((bonus - 0.2) * 10) / 10 : bonus}% Runes</Box>: ""}
            {bonus >= 1.6 ? <Box sx={{color: "gold"}}>&nbsp;+0.2% Set Bonus!</Box> : ""}
            </Grid>
        </Box>
    )
}