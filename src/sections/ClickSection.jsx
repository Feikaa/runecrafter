import { Box } from "@mui/material";
import "../styles/ClickSection.scss";
import Item from "../class/Item.jsx";
import { useState } from 'react';

export default function ClickSection(props) {

    const inventory = props.inventory;
    const setInventory = props.setInventory;

    const audio = new Audio("/audio/click.mp3");
    const [shake, setShake] = useState(false);

    return (
        <Box paddingTop="5%">
            <img src={"/icons/rune_essence_detail.png"} alt="Clickable Rune essence" width="500px" height="500px" className={shake ? 'shake' : ""} onClick={() => {
                if (inventory.length < 36) {
                    audio.play();
                    setShake(true);
                    setInventory([...inventory, (<Item item={"rune_essence"} />)]);
                }

                console.log(shake);
                }}
                onAnimationEnd={() => {setShake(false);
                    console.log(shake);}}></img>
        </Box>
    )
}