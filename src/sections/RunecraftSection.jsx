import { Box, Button, Grid } from "@mui/material";
import airRune from "../icons/air_rune.png";
import earthRune from "../icons/earth_rune.png";
import cosmicRune from "../icons/cosmic_rune.png";
import astralRune from "../icons/astral_rune.png";
import lawRune from "../icons/law_rune.webp";
import bloodRune from "../icons/blood_rune.png";
import wrathRune from "../icons/wrath_rune.png";
import craftAudio from "../audio/craft.wav";

export default function RunecraftSection(props) {

    const lvl = props.lvl;
    const inventory = props.inventory;
    const setInventory = props.setInventory;
    const audio = new Audio(craftAudio);
    audio.volume = 0.1;

    function craftRune(rune) {
        audio.play();
        var amt = inventory.length;
        setInventory([]);
    }

    return (
        <Box sx={{width: "80%"}}>
            <Grid container spacing={3} sx={{ marginTop: "0px", marginLeft: "0px"}}>
                <Grid item xs>
                    <Button variant="contained" color="success" onClick={() => {
                        if (inventory.length > 0) {
                            craftRune("air");
                        }
                    }}>
                        Craft Air Rune&nbsp;
                        <img src={airRune} alt="Craft Air" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 0
                </Grid>

                <Grid item xs>
                    <Button variant="contained" color={lvl >= 9 ? "success" : "error"} disabled={lvl >= 9 ? false : true}>
                        Craft Earth Rune&nbsp;
                        <img src={earthRune} alt="Craft Earth" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 9
                </Grid>

                <Grid item xs>
                    <Button variant="contained" color={lvl >= 27 ? "success" : "error"} disabled={lvl >= 27 ? false : true}>
                        Craft Cosmic Rune&nbsp;
                        <img src={cosmicRune} alt="Craft Cosmic" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 27
                </Grid>

                <Grid item xs>
                    <Button variant="contained" color={lvl >= 40 ? "success" : "error"} disabled={lvl >= 40 ? false : true}>
                        Craft Astral Rune&nbsp;
                        <img src={astralRune} alt="Craft Astral" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 40
                </Grid>

                <Grid item xs>
                    <Button variant="contained" color={lvl >= 54 ? "success" : "error"} disabled={lvl >= 54 ? false : true}>
                        Craft Law Rune&nbsp;
                        <img src={lawRune} alt="Craft Astral" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 54
                </Grid>

                <Grid item xs>
                    <Button variant="contained" color={lvl >= 77 ? "success" : "error"} disabled={lvl >= 77 ? false : true}>
                        Craft Blood Rune&nbsp;
                        <img src={bloodRune} alt="Craft Astral" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 77
                </Grid>

                <Grid item xs>
                    <Button variant="contained" color={lvl >= 95 ? "success" : "error"} disabled={lvl >= 95 ? false : true}>
                        Craft Wrath Rune&nbsp;
                        <img src={wrathRune} alt="Craft Astral" width="50px" height="50px"></img>
                    </Button>
                    <br></br>
                    Lvl: 95
                </Grid>
            </Grid>
        </Box>
    )
}