import { Box } from "@mui/material";
import "../styles/XPSection.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function XPSection(props) {

    const progress = props.progress;

    return (
        <Box sx={{ width: '50%', mx: 'auto' }}>
            <ProgressBar variant="success" now={progress} label={`${progress}%`}/>
        </Box>
    )
}