import React from "react";
import runeEssence from "../icons/rune_essence.png";

export default function Item(props) {

    return (
        <img src={props.item === "rune_essence" ? runeEssence : ""} alt="Rune essence" width="48px" height="48px"></img>
    )
}