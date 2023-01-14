import { Box, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import React from "react";
import astralRune from "../icons/astral_rune_small.png";
import lawRune from "../icons/law_rune_small.png";
import bloodRune from "../icons/blood_rune_small.png";
import wrathRune from "../icons/wrath_rune_small.png";
import mistRune from "../icons/mist_rune_small.png";
import dustRune from "../icons/dust_rune_small.png";
import mudRune from "../icons/mud_rune_small.png";
import smokeRune from "../icons/smoke_rune_small.png";
import steamRune from "../icons/steam_rune_small.png";
import lavaRune from "../icons/lava_rune_small.png";
import zmiAltar from "../icons/ourania_altar.png";

export default function ChooseSection(props) {

    const autoaltar = props.autoaltar;
    const ouraniaAltar = props.ouraniaAltar;

    const runename = props.runename;
    const setRunename = props.setRunename;

    const handleChange = (event) => {
        setRunename(event.target.value);
    }

    return (
        <Box sx={{paddingBottom: "15px", width: "120px", mx: "auto", color: "white", marginLeft: "0.5%" }}>
            <FormControl fullWidth size="small">
                <InputLabel id="select-altar-label" sx={{ color: "white" }}>Craft</InputLabel>
                <Select
                    labelId="select-altar-label"
                    id="select-altar"
                    value={runename}
                    label="Altar"
                    onChange={handleChange}
                    sx={{ color: "white" }}
                >
                    <MenuItem value="none">None
                    </MenuItem>
                    <MenuItem value="dust">Dust&nbsp;
                        <img src={dustRune} alt="Dust Rune"></img>
                    </MenuItem>
                    {autoaltar >= 2 ? <MenuItem value="mist">Mist&nbsp;
                        <img src={mistRune} alt="Mist Rune"></img>
                    </MenuItem> : ""}
                    {autoaltar >= 3 ? <MenuItem value="mud">Mud&nbsp;
                        <img src={mudRune} alt="Mud Rune"></img>
                    </MenuItem> : ""}
                    {autoaltar >= 4 ? <MenuItem value="smoke">Smoke&nbsp;
                        <img src={smokeRune} alt="Smoke Rune"></img>
                    </MenuItem> : ""}
                    {autoaltar >= 5 ? <MenuItem value="lava">Lava&nbsp;
                        <img src={lavaRune} alt="Lava Rune"></img>
                    </MenuItem> : ""}
                    {autoaltar >= 6 ? <MenuItem value="steam">Steam&nbsp;
                        <img src={steamRune} alt="Steam Rune"></img>
                    </MenuItem> : ""}
                    {autoaltar >= 7 ? <MenuItem value="astral">Astral&nbsp;
                        <img src={astralRune} alt="Astral Rune"></img>
                    </MenuItem> : ""}
                    {autoaltar >= 8 ? <MenuItem value="law">Law&nbsp;
                        <img src={lawRune} alt="Law Rune"></img>
                    </MenuItem> : ""}
                    {autoaltar >= 9 ? <MenuItem value="blood">Blood&nbsp;
                        <img src={bloodRune} alt="Blood Rune"></img>
                    </MenuItem> : ""}
                    {autoaltar >= 10 ? <MenuItem value="wrath">Wrath&nbsp;
                        <img src={wrathRune} alt="Wrath Rune"></img>
                    </MenuItem> : ""}
                    {ouraniaAltar ? <MenuItem value="ourania">Ourania Altar&nbsp;
                        <img src={zmiAltar} alt="Ourania Altar" width="29px" height="28px"></img>
                    </MenuItem> : ""}
                </Select>
            </FormControl>
        </Box>
    )
}