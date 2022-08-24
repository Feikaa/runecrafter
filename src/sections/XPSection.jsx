import { Box } from "@mui/material";
import "../styles/XPSection.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function XPSection(props) {

    const progress = props.progress;
    const lvl = props.lvl;

    return (
        <Box sx={{ width: '50%', mx: 'auto', color: 'green' }}>
            Lvl: {lvl}<ProgressBar variant="success" now={progress} label={`${progress}%`}/>
        </Box>
    )
}