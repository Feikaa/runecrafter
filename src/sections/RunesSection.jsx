import { Box, Grid } from "@mui/material";
import airRune from "../icons/air_rune_small.png";
import earthRune from "../icons/earth_rune_small.png";
import cosmicRune from "../icons/cosmic_rune_small.png";
import astralRune from "../icons/astral_rune_small.png";
import lawRune from "../icons/law_rune_small.png";
import bloodRune from "../icons/blood_rune_small.png";
import wrathRune from "../icons/wrath_rune_small.png";

export default function RunesSection(props) {

    const air = props.air;
    const earth = props.earth;
    const cosmic = props.cosmic;
    const astral = props.astral;
    const law = props.law;
    const blood = props.blood;
    const wrath = props.wrath;

    return (
        <Box sx={{color: "white"}}>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
            <Box sx={{border: 1, width: "39px"}}>
            <img src={airRune} alt="Air Rune Amount"></img>
              {air}
            </Box>
             
            <Box sx={{border: 1, width: "39px"}}>
            <img src={earthRune} alt="Earth Rune Amount"></img>
              {earth}
            </Box>

            <Box sx={{border: 1, width: "39px"}}>
            <img src={cosmicRune} alt="Cosmic Rune Amount"></img>
              {cosmic}
            </Box>

            <Box sx={{border: 1, width: "39px"}}>
            <img src={astralRune} alt="Astral Rune Amount"></img>
              {astral}
            </Box>

            <Box sx={{border: 1, width: "39px"}}>
            <img src={lawRune} alt="Law Rune Amount"></img>
              {law}
            </Box>

            <Box sx={{border: 1, width: "39px"}}>
            <img src={bloodRune} alt="Blood Rune Amount"></img>
              {blood}
            </Box>

            <Box sx={{border: 1, width: "39px"}}>
            <img src={wrathRune} alt="Wrath Rune Amount"></img>
              {wrath}
            </Box>

            </Grid>
        </Box>
    )
}