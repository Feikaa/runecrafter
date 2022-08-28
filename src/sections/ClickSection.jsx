import { Box } from "@mui/material";
import "../styles/ClickSection.scss";
import Item from "../class/Item.jsx";
import { useState } from 'react';
import runeEssence from "../icons/rune_essence_detail.png";
import daeyaltEssence from "../icons/daeyalt_essence_click.png";
import clickAudio from "../audio/click.mp3";
import { useEffect } from "react";
import useInterval from "react-useinterval";

export default function ClickSection(props) {

    const inventory = props.inventory;
    const setInventory = props.setInventory;

    const audio = new Audio(clickAudio);
    const [shake, setShake] = useState(false);
    const [width, setWidth] = useState(0);

    const autoclick = props.autoclick;

    const pouch = props.pouch;
    const extra = props.extra;
    const setExtra = props.setExtra;

    const essenceType = props.essenceType;

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        
        return () => window.removeEventListener("resize", updateDimensions);
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWidth(width);
    }

    function doClick() {
        if (inventory.length < 24) {
            audio.play();
            setShake(true);
            setInventory((inventory) => [...inventory, (<Item key={inventory.length} item={essenceType} />)]);
        } else if (pouch && extra < 24) {
            audio.play();
            setShake(true);
            setExtra((extra) => extra + 1);
        }
    }

    useInterval(() => {
        if (autoclick) {
            doClick();
        };
    }, (1000 / autoclick));

    return (
        <Box paddingTop="1%">
            <img src={essenceType === "rune_essence" ? runeEssence : essenceType === "daeyalt_essence" ? daeyaltEssence : ""} alt="Clickable Rune essence" width={width > 500 ? "500px" : "200px"} height={width > 500 ? "500px" : "200px"} className={shake ? 'shake' : ""} onClick={() => {
                doClick();
                }}
                onAnimationEnd={() => {setShake(false)}}></img>
        </Box>
    )
}