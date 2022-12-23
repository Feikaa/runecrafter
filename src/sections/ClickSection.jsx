import { Box } from "@mui/material";
import "../styles/ClickSection.scss";
import Item from "../class/Item.jsx";
import { useState } from 'react';
import runeEssence from "../icons/rune_essence_detail.png";
import daeyaltEssence from "../icons/daeyalt_essence_click.png";
import darkEssence from "../icons/dark_essence_click.png";
import clickAudio from "../audio/click.mp3";
import { useEffect } from "react";
import useInterval from "react-useinterval";

export default function ClickSection(props) {

    const mute = props.mute;

    const inventory = props.inventory;
    const setInventory = props.setInventory;

    const infinv = props.infinv;
    const setInfinv = props.setInfinv;

    const audio = new Audio(clickAudio);
    audio.volume = 0.1;
    const [shake, setShake] = useState(false);
    const [width, setWidth] = useState(0);

    const autoclick = props.autoclick;
    const smashing = props.smashing;

    const pouch = props.pouch;
    const extraList = [3, 9, 18, 30, 40];
    const extra = props.extra;
    const setExtra = props.setExtra;

    const eternal = props.eternal;
    const primordial = props.primordial;
    const pegasian = props.pegasian;
    const runes = ["air", "earth", "water", "fire", "astral", "law", "blood", "wrath"];

    const air = props.air;
    const earth = props.earth;
    const water = props.water;
    const fire = props.fire;
    const astral = props.astral;
    const law = props.law;
    const blood = props.blood;
    const wrath = props.wrath;
    const setAir = props.setAir;
    const setEarth = props.setEarth;
    const setWater = props.setWater;
    const setFire = props.setFire;
    const setAstral = props.setAstral;
    const setLaw = props.setLaw;
    const setBlood = props.setBlood;
    const setWrath = props.setWrath;
    
    const bonus = props.bonus;

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

    function craftRune(rune, amt) {
        if (rune === "air") {
            setAir(air + Math.floor(amt * bonus));
        } else if (rune === "earth") {
            setEarth(earth + Math.floor(amt * bonus));
        } else if (rune === "water") {
            setWater(water + Math.floor(amt * bonus));
        } else if (rune === "fire") {
            setFire(fire + Math.floor(amt * bonus));
        } else if (rune === "astral") {
            setAstral(astral + Math.floor(amt * bonus));
        } else if (rune === "law") {
            setLaw(law + Math.floor(amt * bonus));
        } else if (rune === "blood") {
            setBlood(blood + Math.floor(amt * bonus));
        } else if (rune === "wrath") {
            setWrath(wrath + Math.floor(amt * bonus));
        }
    }

    function doClick() {
        if (pegasian && ((inventory.length < 28 && pouch < 1) || (extra < extraList[pouch - 1]))) {
            craftRune(runes[Math.floor(Math.random() * runes.length)], 1);
        }
        if (eternal && essenceType === "rune_essence") {
            if (!mute) {audio.play();}
            setShake(true)
            if (primordial) {
                setInfinv(infinv + 2);
            } else {
                setInfinv(infinv + 1);
            }
        } else if (inventory.length < 28) {
            if (!mute) {audio.play();}
            setShake(true)
            if (primordial && inventory.length + 2 <= 28) {
                setInventory((inventory) => [...inventory, (<Item key={inventory.length} item={essenceType} />), (<Item key={inventory.length+1} item={essenceType} />)]);
            } else {
                setInventory((inventory) => [...inventory, (<Item key={inventory.length} item={essenceType} />)]);
            }
        } else if (pouch && extra < extraList[pouch - 1]) {
            if (!mute) {audio.play();}
            setShake(true)
            if (primordial && extra + 2 <= extraList[pouch - 1]) {
                setExtra((extra) => extra + 2);
            } else {
                setExtra((extra) => extra + 1);
            }
        }
    }

    useInterval(() => {
        if (autoclick) {
            doClick();
        };
    }, (smashing > 0) ? (1000 / (10 * smashing)) : (1000 / autoclick));

    return (
        <Box paddingTop="1%">
            <img src={essenceType === "rune_essence" ? runeEssence : essenceType === "daeyalt_essence" ? daeyaltEssence : essenceType === "dark_essence" ? darkEssence : ""} alt="Clickable Rune essence" width={width > 500 ? "500px" : "200px"} height={width > 500 ? "500px" : "200px"} className={shake ? 'shake' : ""} onClick={() => {
                doClick();
                }}
                onAnimationEnd={() => {setShake(false)}}></img>
        </Box>
    )
}