import { Box } from "@mui/material";
import "../styles/InventorySection.scss";
// import Item from "../class/Item.jsx";
import { React, useEffect, useState } from 'react';
import essencePouch from "../icons/giant_pouch.png";
import Item from "../class/Item";

export default function InventorySection(props) {

    const inventory = props.inventory;
    const pouch = props.pouch;
    const extra = props.extra;

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        
        return () => window.removeEventListener("resize", updateDimensions);
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setWidth(width);
        setHeight(height);
    }
    
    return (
        <Box className="inventory" height={width > 1110 ? "338px !important" : "50px !important"} top={width > 1110 ? "" : 0} position={width > 1110 ? "fixed" : "absolute"} sx={{fontSize: "25px", textAlign: "right" }}>
            {pouch ? <img src={essencePouch} style={{textAlign: ""}} alt="Essence Pouch" width="48px" height="48px"></img> : ""}
            {pouch ? " x" + extra : ""}
            {width > 1110 ?
            <Box className="inventory" sx={{backgroundColor: "black"}}>
                {inventory}
            </Box>
            : <Item item="rune_essence"></Item>}
            {width < 1110 ? " x" + inventory.length : ""}
        </Box>
    )
}