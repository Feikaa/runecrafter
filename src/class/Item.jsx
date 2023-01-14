import React from "react";
import runeEssence from "../icons/rune_essence.png";
import daeyaltShard from "../icons/daeyalt_shard.png";
import darkShard from "../icons/dark_shard.png";

export default function Item(props) {

    return (
        <img src={props.item === "rune_essence" ? runeEssence : props.item === "daeyalt_essence" ? daeyaltShard : props.item === "dark_essence" ? darkShard : ""} alt="Rune essence" width="48px" height="48px"></img>
    )
}