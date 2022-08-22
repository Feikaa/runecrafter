import React from "react";

export default function Item(props) {
    const img = props.item;
    return (
        <img src={"/icons/" + img + ".png"} alt="Rune essence" width="48px" height="48px"></img>
    )
}