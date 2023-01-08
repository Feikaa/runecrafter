import { Box, Grid, Tooltip, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
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
import masterHat from "../icons/master_hat.png";
import masterTop from "../icons/master_top.png";
import masterBottom from "../icons/master_bottom.png";
import masterBoots from "../icons/master_boots.png";
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
import airStaff from "../icons/air_staff.png";
import earthStaff from "../icons/earth_staff.png";
import waterStaff from "../icons/water_staff.png";
import fireStaff from "../icons/fire_staff.png";
import astralStaff from "../icons/astral_staff.png";
import lawStaff from "../icons/law_staff.png";
import bloodStaff from "../icons/blood_staff.png";
import wrathStaff from "../icons/wrath_staff.png";
import React, {useState} from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";

export default function RunesSection(props) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const theme = createTheme({
    palette: {
        action: {
            disabled: "red"
        }
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

    const prestige = props.prestige;
    const elemental = props.elemental;
    const catalytic = props.catalytic;

    const air = props.air;
    const earth = props.earth;
    const water = props.water;
    const fire = props.fire;
    const astral = props.astral;
    const law = props.law;
    const setLaw = props.setLaw;
    const blood = props.blood;
    const setBlood = props.setBlood;
    const wrath = props.wrath;
    const setWrath = props. setWrath;
    const bonus = props.bonus;
    const hat = props.hat;
    const top = props.top;
    const bottom = props.bottom;
    const boots = props.boots;

    const lawOutfit = props.lawOutfit;
    const bloodOutfit = props.bloodOutfit;
    const wrathOutfit = props.wrathOutfit;
    const infinityOutfit = props.infinityOutfit;

    const staff = props.staff;

    const timer = props.timer;
    const setTimer = props.setTimer;

    return (
      <ThemeProvider theme={theme}>
        <Box sx={{color: "white"}}>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
            {staff === "air" ? 
              <Box sx={{border: 1}} width={"39px"}>
              <img src={airStaff} alt="Air Staff"></img>
                <br></br>*
              </Box>
            :
              <Box sx={{border: 1}} width={air >= 10000 ? 39 + 10 * (1 + Math.log10(air / 10000)) + "px" : "39px"}>
              <img src={airRune} alt="Air Rune Amount"></img>
                {air}
              </Box>}
            
            {staff === "earth" ?
              <Box sx={{border: 1}} width={"39px"}>
              <img src={earthStaff} alt="Earth Staff"></img>
                <br></br>*
              </Box>
            :
              <Box sx={{border: 1}} width={earth >= 10000 ? 39 + 10 * (1 + Math.log10(earth / 10000)) + "px" : "39px"}>
              <img src={earthRune} alt="Earth Rune Amount"></img>
                {earth}
              </Box>}

            {staff === "water" ?
              <Box sx={{border: 1}} width={"39px"}>
              <img src={waterStaff} alt="Water Staff"></img>
                <br></br>*
              </Box>
            :
              <Box sx={{border: 1}} width={water >= 10000 ? 39 + 10 * (1 + Math.log10(water / 10000)) + "px" : "39px"}>
              <img src={waterRune} alt="Water Rune Amount"></img>
                {water}
              </Box>}

            {staff === "fire" ?
              <Box sx={{border: 1}} width={"39px"}>
              <img src={fireStaff} alt="Fire Staff"></img>
                <br></br>*
              </Box>
            :
              <Box sx={{border: 1}} width={fire >= 10000 ? 39 + 10 * (1 + Math.log10(fire / 10000)) + "px" : "39px"}>
              <img src={fireRune} alt="Fire Rune Amount"></img>
                {fire}
              </Box>}

            {staff === "astral" ?
              <Box sx={{border: 1}} width={"39px"}>
              <img src={astralStaff} alt="Astral Staff"></img>
                <br></br>*
              </Box>
            :
              <Box sx={{border: 1}} width={astral >= 10000 ? 39 + 10 * (1 + Math.log10(astral / 10000)) + "px" : "39px"}>
              <img src={astralRune} alt="Astral Rune Amount"></img>
                {astral}
              </Box>}

            {staff === "law" ?
              <Box sx={{border: 1}} width={"39px"}>
              <img src={lawStaff} alt="Law Staff"></img>
                <br></br>*
              </Box>
            :
              <Box sx={{border: 1}} width={law >= 10000 ? 39 + 10 * (1 + Math.log10(law / 10000)) + "px" : "39px"}>
              <img src={lawRune} alt="Law Rune Amount"></img>
                {law}
              </Box>}

            {staff === "blood" ?
              <Box sx={{border: 1}} width={"39px"}>
              <img src={bloodStaff} alt="Blood Staff"></img>
                <br></br>*
              </Box>
            :
              <Box sx={{border: 1}} width={blood >= 10000 ? 39 + 10 * (1 + Math.log10(blood / 10000)) + "px" : "39px"}>
              <img src={bloodRune} alt="Blood Rune Amount"></img>
                {blood}
              </Box>}

            {staff === "wrath" ?
              <Box sx={{border: 1}} width={"39px"}>
              <img src={wrathStaff} alt="Wrath Staff"></img>
                <br></br>*
              </Box>
            :
              <Box sx={{border: 1}} width={wrath >= 10000 ? 39 + 10 * (1 + Math.log10(wrath / 10000)) + "px" : "39px"}>
              <img src={wrathRune} alt="Wrath Rune Amount"></img>
                {wrath}
              </Box>}

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
            {hat === 1 ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={eyeHat} alt="Eye Hat" height="32px" width="32px"></img></Box> : hat === 2 ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={masterHat} alt="Master Hat" height="32px" width="32px"></img></Box> : ""}
            {top === 1 ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={eyeTop} alt="Eye Top" height="32px" width="32px"></img></Box> : top === 2 ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={masterTop} alt="Master Top" height="32px" width="32px"></img></Box> : ""}
            {bottom === 1 ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={eyeBottom} alt="Eye Bottom" height="32px" width="32px"></img></Box> : bottom === 2 ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={masterBottom} alt="Master Bottom" height="32px" width="32px"></img></Box> : ""}
            {boots === 1 ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={eyeBoots} alt="Eye Boots" height="32px" width="32px"></img></Box> : boots === 2 ? <Box border={bonus > 1 ? 1 : 0} sx={{width: "39px"}}><img src={masterBoots} alt="Master Boots" height="32px" width="32px"></img></Box> : ""}
            {bonus > 1 ? <Box sx={{color: "green"}}>+{bonus >= 1.6 ? Math.round(((bonus - 0.2) - 1) * 100) : Math.round((bonus - 1) * 100)}% Runes<br></br>{[hat, top, bottom, boots].reduce((a, f) => a + Math.floor(f/2), 0) > 0 ? <React.Fragment>+{[hat, top, bottom, boots].reduce((a, f) => a + Math.floor(f/2), 0)}% XP</React.Fragment> : ""}</Box>: ""}
            {bonus >= 1.6 ? <Box sx={{color: "gold"}}>&nbsp;+20% Set Bonus!<br></br> {[hat, top, bottom, boots].reduce((a, f) => a + Math.floor(f/2), 0) === 4 ? <React.Fragment>+1% Set Bonus!</React.Fragment> : [hat, top, bottom, boots].reduce((a, f) => a + Math.floor(f/2), 0) > 0 ? <span>&nbsp;</span> : ""}</Box> : ""}
            </Grid>

            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
            {infinityOutfit < 1 && lawOutfit >= 1 ? <Box border={1} sx={{color: "white"}}><img src={lawHead} alt="Law Hat" height="32px"></img></Box> : ""}
            {infinityOutfit < 2 && lawOutfit >= 2 ? <Box border={1} sx={{color: "white"}}><img src={lawTop} alt="Law Top" height="32px" width="32px"></img></Box> : ""}
            {infinityOutfit < 3 && lawOutfit >= 3 ? <Box border={1} sx={{color: "white"}}><img src={lawBottom} alt="Law Bottom" height="32px" width="24px"></img></Box> : ""}
            {infinityOutfit < 4 && lawOutfit >= 4 ? <Box border={1} sx={{color: "white"}}><img src={lawHands} alt="Law Hands" height="32px" width="32px"></img></Box> : ""}
            {infinityOutfit < 5 && lawOutfit === 5 ? <Box border={1} sx={{color: "white"}}><img src={lawBoots} alt="Law Boots" height="32px" width="32px"></img></Box> : ""}
            {infinityOutfit < 5 && lawOutfit === 5 ? <React.Fragment>
              <Box>
              &nbsp;
              </Box>
              <Tooltip arrow title={
                <React.Fragment>
                  <Typography color="blue" sx={{fontWeight: "bold"}}>Law Ethereal Set</Typography>
                  <ul>
                    <li><Typography><font color="white">5% chance to double law runes crafted, giving twice as much experience.</font></Typography></li>
                    <li><Typography><font color="white">Stores an additional 2 essence.</font></Typography></li>
                    <li><Typography><font color="white">Grants access to the <font color="blue">Law Orb</font> Prestige Upgrade.</font></Typography></li>
                    <li><Typography><font color="white">When crafting runes (excl. Law), you recieve law runes equal to 10% of the runes crafted.</font></Typography></li>
                  </ul>
                </React.Fragment>
              } placement="right">
                <Box border={1} sx={{color: "red"}}>+Law Ethereal Set Bonus!</Box>
              </Tooltip>
            </React.Fragment> : ""}
            </Grid>

            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
            {infinityOutfit < 1 && bloodOutfit >= 1 ? <Box border={1} sx={{color: "white"}}><img src={bloodHead} alt="Blood Hat" height="32px"></img></Box> : ""}
            {infinityOutfit < 2 && bloodOutfit >= 2 ? <Box border={1} sx={{color: "white"}}><img src={bloodTop} alt="Blood Top" height="32px" width="32px"></img></Box> : ""}
            {infinityOutfit < 3 && bloodOutfit >= 3 ? <Box border={1} sx={{color: "white"}}><img src={bloodBottom} alt="Blood Bottom" height="32px" width="24px"></img></Box> : ""}
            {infinityOutfit < 4 && bloodOutfit >= 4 ? <Box border={1} sx={{color: "white"}}><img src={bloodHands} alt="Blood Hands" height="32px" width="32px"></img></Box> : ""}
            {infinityOutfit < 5 && bloodOutfit === 5 ? <Box border={1} sx={{color: "white"}}><img src={bloodBoots} alt="Blood Boots" height="32px" width="32px"></img></Box> : ""}
            {infinityOutfit < 5 && bloodOutfit === 5 ? <React.Fragment>
              <Box>
              &nbsp;
              </Box>
              <Tooltip arrow title={
                <React.Fragment>
                  <Typography color="red" sx={{fontWeight: "bold"}}>Blood Ethereal Set</Typography>
                  <ul>
                    <li><Typography><font color="white">5% chance to double blood runes crafted, giving twice as much experience.</font></Typography></li>
                    <li><Typography><font color="white">Stores an additional 2 essence.</font></Typography></li>
                    <li><Typography><font color="white">Grants access to the <font color="red">Blood Orb</font> Prestige Upgrade.</font></Typography></li>
                    <li><Typography><font color="white">When crafting runes (excl. Blood), you recieve blood runes equal to 10% of the runes crafted.</font></Typography></li>
                  </ul>
                </React.Fragment>
              } placement="right">
                <Box border={1} sx={{color: "red"}}>+Blood Ethereal Set Bonus!</Box>
              </Tooltip>
            </React.Fragment> : ""}
            </Grid>

            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
            {infinityOutfit < 1 && wrathOutfit >= 1 ? <Box border={1} sx={{color: "white"}}><img src={wrathHead} alt="Wrath Hat" height="32px"></img></Box> : ""}
            {infinityOutfit < 2 && wrathOutfit >= 2 ? <Box border={1} sx={{color: "white"}}><img src={wrathTop} alt="Wrath Top" height="32px" width="32px"></img></Box> : ""}
            {infinityOutfit < 3 && wrathOutfit >= 3 ? <Box border={1} sx={{color: "white"}}><img src={wrathBottom} alt="Wrath Bottom" height="32px" width="24px"></img></Box> : ""}
            {infinityOutfit < 4 && wrathOutfit >= 4 ? <Box border={1} sx={{color: "white"}}><img src={wrathHands} alt="Wrath Hands" height="32px" width="32px"></img></Box> : ""}
            {infinityOutfit < 5 && wrathOutfit === 5 ? <Box border={1} sx={{color: "white"}}><img src={wrathBoots} alt="Wrath Boots" height="32px" width="32px"></img></Box> : ""}
            {infinityOutfit < 5 && wrathOutfit === 5 ? <React.Fragment>
              <Box>
              &nbsp;
              </Box>
              <Tooltip arrow title={
                <React.Fragment>
                  <Typography color="black" sx={{fontWeight: "bold"}}>Wrath Ethereal Set</Typography>
                  <ul>
                    <li><Typography><font color="white">5% chance to double wrath runes crafted, giving twice as much experience.</font></Typography></li>
                    <li><Typography><font color="white">Stores an additional 2 essence.</font></Typography></li>
                    <li><Typography><font color="white">Grants access to the <font color="black">Wrath Orb</font> Prestige Upgrade.</font></Typography></li>
                    <li><Typography><font color="white">When crafting runes (excl. Wrath), you recieve wrath runes equal to 10% of the runes crafted.</font></Typography></li>
                  </ul>
                </React.Fragment>
              } placement="right">
                <Box border={1} sx={{color: "red"}}>+Wrath Ethereal Set Bonus!</Box>
              </Tooltip>
            </React.Fragment> : ""}
            </Grid>

            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
            {infinityOutfit >= 1 ? <Box border={1} sx={{color: "white"}}><img src={infinityHead} alt="Infinity Hat" height="32px"></img></Box> : ""}
            {infinityOutfit >= 2 ? <Box border={1} sx={{color: "white"}}><img src={infinityTop} alt="Infinity Top" height="32px" width="32px"></img></Box> : ""}
            {infinityOutfit >= 3 ? <Box border={1} sx={{color: "white"}}><img src={infinityBottom} alt="Infinity Bottom" height="32px" width="24px"></img></Box> : ""}
            {infinityOutfit >= 4 ? <Box border={1} sx={{color: "white"}}><img src={infinityHands} alt="Infinity Hands" height="32px" width="32px"></img></Box> : ""}
            {infinityOutfit === 5 ? <Box border={1} sx={{color: "white"}}><img src={infinityBoots} alt="Infinity Boots" height="32px" width="32px"></img></Box> : ""}
            {infinityOutfit === 5 ? <React.Fragment>
              <Box>
              &nbsp;
              </Box>
              <Tooltip arrow title={
                <React.Fragment>
                  <Typography color="purple" sx={{fontWeight: "bold"}}>Infinity Ethereal Set</Typography>
                  <ul>
                    <li><Typography><font color="white">7% chance to double law, blood, and wrath runes crafted, giving twice as much experience.</font></Typography></li>
                    <li><Typography><font color="white">5% chance to keep runes in rune pouches when crafting.</font></Typography></li>
                    <li><Typography><font color="white">Every 5 minutes, generate 5000 law, blood, or wrath runes of your choice.</font></Typography></li>
                    <li><Typography><font color="white">Battlestaff drops are rolled twice.</font></Typography></li>
                    <li><Typography><font color="white">Stores an additional 12 essence.</font></Typography></li>
                    <li><Typography><font color="white">Grants access to the <font color="blue">Law Orb</font>, <font color="red">Blood Orb</font>, and <font color="black">Wrath Orb</font> Prestige Upgrades.</font></Typography></li>
                    <li><Typography><font color="white">When crafting runes (excl. Law, Blood, Wrath), you recieve law, blood, and wrath runes equal to 10% of the runes crafted.</font></Typography></li>
                  </ul>
                </React.Fragment>
              } placement="right">
                <Box border={1} sx={{color: "red"}}>+Infinity Ethereal Set Bonus!</Box>
              </Tooltip>

              <Box>
              &nbsp;
              </Box>

              <Box>
                <Button sx={{backgroundColor: "black", color: timer === 0 ? "gold" : "red"}} onClick={handleClickOpen} disabled={timer === 0 ? false : true}>
                  Generate Runes <br />
                  {timer > 0 ? 
                  "Cooldown: " + Math.floor(timer/60) + ":" + (timer % 60 <= 9 ? "0" + (timer % 60) : (timer % 60))
                  :
                  ""}
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>
                    Select Rune
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText color={"white"}>
                      Generate 5000 of what rune?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button sx={{color: "blue"}} onClick={() => {
                      handleClose()
                      setLaw(law + 5000);
                      setTimer(300);
                    }}>Law&nbsp;<img src={lawRune} alt="Law Rune"></img></Button>
                    <Button sx={{color: "red"}} onClick={() => {
                      handleClose()
                      setBlood(blood + 5000);
                      setTimer(300);
                    }}>Blood&nbsp;<img src={bloodRune} alt="Blood Rune"></img></Button>
                    <Button sx={{color: "black"}} onClick={() => {
                      handleClose()
                      setWrath(wrath + 5000);
                      setTimer(300);
                    }}>Wrath&nbsp;<img src={wrathRune} alt="Wrath Rune"></img></Button>
                  </DialogActions>
                </Dialog>
              </Box>
            </React.Fragment> : ""}
            </Grid>
        </Box>
        </ThemeProvider>
    )
}