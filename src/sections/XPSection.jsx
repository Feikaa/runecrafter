import { Box, Tooltip, Typography } from "@mui/material";
import "../styles/XPSection.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';
import React from "react";
import { useEffect } from "react";

export default function XPSection(props) {

    const progress = props.progress;
    const lvl = props.lvl;
    const prestige = props.prestige;
    const pBoost = props.pBoost;
    const xp = props.xp;
    const totalxp = props.totalxp;
    const nextxp = props.nextxp;
    const setNextxp = props.setNextxp;

    function sumLevel(level) {
        var sum = 0;
        for (var i = 1; i < level+1; i++) {
            sum += Math.floor(i + 300 * Math.pow(2, i/7));
        }
        return sum
    }

    useEffect(() => {
        setNextxp(Math.floor(1/4 * sumLevel(lvl)));
    }, [lvl])

    return (
        <Box sx={{ width: '50%', mx: 'auto', color: 'green' }}>
            Lvl: {lvl} {prestige >= 1 ? <Typography><font color="gold">&nbsp;Prestige: {prestige}</font> <font color="orange">(+{pBoost}% XP & Runes)</font></Typography>: ""}
            <Tooltip title={
                <Box sx={{fontSize: "20px"}}>
                    <Typography>
                        Runecraft XP: {totalxp}
                        <br></br>
                        Next level at: {nextxp}
                        <br></br>
                        Remaining XP: {nextxp - totalxp}
                    </Typography>
                </Box>
            } followCursor arrow>
            <ProgressBar variant="success" now={progress} label={`${progress}%`}/>
            </Tooltip>
        </Box>
    )
}