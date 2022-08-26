import { Box } from "@mui/material";
import "../styles/ClickSection.scss";
import Item from "../class/Item.jsx";
import { useState } from 'react';
import click from "../icons/rune_essence_detail.png";
import clickAudio from "../audio/click.mp3";
import { useEffect } from "react";
import { useRef } from "react";
import useInterval from "react-useinterval";

export default function ClickSection(props) {

    const inventory = props.inventory;
    const setInventory = props.setInventory;

    const myTimer = useRef(null);

    const audio = new Audio(clickAudio);
    const [shake, setShake] = useState(false);

    const autoclick = props.autoclick;

    function doClick() {
        if (inventory.length < 24) {
            audio.play();
            setShake(true);
            setInventory((inventory) => [...inventory, (<Item item={"rune_essence"} />)]);
        }
    }

    useInterval(() => {
        if (autoclick) {
            doClick();
        };
    }, 1000);

    return (
        <Box paddingTop="1%">
            <img src={click} alt="Clickable Rune essence" width="500px" height="500px" className={shake ? 'shake' : ""} onClick={() => {
                doClick();
                }}
                onAnimationEnd={() => {setShake(false)}}></img>
        </Box>
    )
}