import React from "react";
import runeEssence from "../icons/rune_essence.png";
import daeyaltShard from "../icons/daeyalt_shard.png";

export default function Item(props) {

    return (
        <img src={props.item === "rune_essence" ? runeEssence : props.item === "daeyalt_essence" ? daeyaltShard : ""} alt="Rune essence" width="48px" height="48px"></img>
    )
}