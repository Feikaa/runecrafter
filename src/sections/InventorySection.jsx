import { Box } from "@mui/material";
import "../styles/InventorySection.scss";
// import Item from "../class/Item.jsx";
import React, { useEffect, useState } from 'react';
import pouch1 from "../icons/pouch1.png";
import pouch2 from "../icons/pouch2.png";
import pouch3 from "../icons/pouch3.png";
import pouch4 from "../icons/pouch4.png";
import pouch5 from "../icons/pouch5.png";
import Item from "../class/Item";
import runeEssence from "../icons/rune_essence.png";

export default function InventorySection(props) {

    const inventory = props.inventory;
    const pouch = props.pouch;
    const pouchList = [pouch1, pouch2, pouch3, pouch4, pouch5, pouch5];
    const extra = props.extra;

    const [width, setWidth] = useState(0);

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        
        return () => window.removeEventListener("resize", updateDimensions);
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWidth(width);
    }
    
    return (
        <Box className="inventory" height={width > 1110 ? "386px !important" : "50px !important"} top={width > 1110 ? "" : 0} position={width > 1110 ? "fixed" : "absolute"} sx={{fontSize: "25px", textAlign: "right" }}>
            {pouch ? <img src={pouchList[pouch - 1]} style={{textAlign: ""}} alt="Essence Pouch" width="48px" height="48px"></img> : ""}
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