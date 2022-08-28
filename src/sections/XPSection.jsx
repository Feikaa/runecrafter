import { Box, Tooltip, Typography } from "@mui/material";
import "../styles/XPSection.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';
import React from "react";

export default function XPSection(props) {

    const progress = props.progress;
    const lvl = props.lvl;
    const xp = props.xp;

    return (
        <Box sx={{ width: '50%', mx: 'auto', color: 'green' }}>
            Lvl: {lvl}
            <Tooltip title={
                <Box sx={{fontSize: "20px"}}>
                    <Typography>
                        Runecraft XP: {xp}
                        <br></br>
                        Next level at: {(1/4 * Math.floor((lvl) + 300 * (Math.pow(2, (lvl) / 7))))}
                        <br></br>
                        Remaining XP: {(1/4 * Math.floor((lvl) + 300 * (Math.pow(2, (lvl) / 7)))) - xp}
                    </Typography>
                </Box>
            } followCursor arrow>
            <ProgressBar variant="success" now={progress} label={`${progress}%`}/>
            </Tooltip>
        </Box>
    )
}