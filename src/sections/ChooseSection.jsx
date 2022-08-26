import { Box, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import airRune from "../icons/air_rune_small.png";
import earthRune from "../icons/earth_rune_small.png";
import cosmicRune from "../icons/cosmic_rune_small.png";
import astralRune from "../icons/astral_rune_small.png";
import lawRune from "../icons/law_rune_small.png";
import bloodRune from "../icons/blood_rune_small.png";
import wrathRune from "../icons/wrath_rune_small.png";

export default function ChooseSection(props) {

    const lvl = props.lvl;

    const runename = props.runename;
    const setRunename = props.setRunename;

    const handleChange = (event) => {
        setRunename(event.target.value);
    }

    return (
        <Box sx={{paddingBottom: "15px", width: "120px", mx: "auto", color: "white", marginLeft: "0.5%" }}>
            <FormControl fullWidth size="small">
                {/* <select value={runename} onChange={handleChange}>
                    <option value="air">Air</option>
                    <option value="earth">Earth</option>
                </select> */}
                <InputLabel id="select-altar-label">Craft</InputLabel>
                <Select
                    labelId="select-altar-label"
                    id="select-altar"
                    value={runename}
                    label="Altar"
                    onChange={handleChange}
                >
                    <MenuItem value="air">Air&nbsp;
                        <img src={airRune} alt="Air Rune"></img>
                    </MenuItem> 
                    <MenuItem value="earth">Earth&nbsp;
                        <img src={earthRune} alt="Earth Rune"></img>
                    </MenuItem>
                    <MenuItem value="cosmic">Cosmic&nbsp;
                        <img src={cosmicRune} alt="Cosmic Rune"></img>
                    </MenuItem>
                    {lvl >= 40 ? <MenuItem value="astral">Astral&nbsp;
                        <img src={astralRune} alt="Astral Rune"></img>
                    </MenuItem> : ""}
                    {lvl >= 54 ? <MenuItem value="law">Law&nbsp;
                        <img src={lawRune} alt="Law Rune"></img>
                    </MenuItem> : ""}
                    {lvl >= 77 ? <MenuItem value="blood">Blood&nbsp;
                        <img src={bloodRune} alt="Blood Rune"></img>
                    </MenuItem> : ""}
                    {lvl >= 95 ? <MenuItem value="wrath">Wrath&nbsp;
                        <img src={wrathRune} alt="Wrath Rune"></img>
                    </MenuItem> : ""}
                </Select>
            </FormControl>
        </Box>
    )
}