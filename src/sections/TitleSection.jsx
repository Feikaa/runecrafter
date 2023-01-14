import * as React from 'react';
import "../styles/TitleSection.scss";
import { Box, Tooltip, Typography } from "@mui/material";
import normalMode from "../icons/normal_mode.png";
import zmiAltar from "../icons/ourania_icon.png";
import ironLogo from "../icons/ironman_logo.png";

export default function TitleSection(props) {

    const mode = props.mode;

    return (
        <Box sx={{ fontFamily: 'Runescape', fontSize: '50px' }}>Runecrafter&nbsp;
        <Tooltip title={
            <React.Fragment>
                <Typography>{mode === "normal" ? <font color="orange">Normal Mode</font> : mode === "zmi" ? <font color="black">Permanent ZMI Mode</font> : mode === "ironman" ? <font color="white">Ironman Mode</font> : ""}</Typography>
            </React.Fragment>
            } placement="right">
            <img src={mode === "normal" ? normalMode : mode === "zmi" ? zmiAltar : mode === "ironman" ? ironLogo : ""} alt="ZMI Mode" height="32px" width="32px"></img>
        </Tooltip>
        </Box>
    )
}