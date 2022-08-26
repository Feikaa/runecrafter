import { Box } from "@mui/material";
import "../styles/InventorySection.scss";
// import Item from "../class/Item.jsx";
import { React } from 'react';
import essencePouch from "../icons/giant_pouch.png";

export default function InventorySection(props) {

    const inventory = props.inventory;
    const pouch = props.pouch;
    const extra = props.extra;
    
    return (
        <Box className="inventory" sx={{ height: "338px !important", fontSize: "25px" }}>
            {pouch ? <img src={essencePouch} alt="Essence Pouch" width="48px" height="48px"></img> : ""}
            {/* &nbsp;x{extra} */}
            <Box className="inventory" sx={{backgroundColor: "black"}}>
                {inventory}
            </Box>
        </Box>
    )
}