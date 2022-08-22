import { Box } from "@mui/material";
import "../styles/InventorySection.scss";
// import Item from "../class/Item.jsx";
import { React } from 'react';

export default function InventorySection(props) {

    const inventory = props.inventory;
    const setInventory = props.setInventory;
    
    return (
        <Box className="inventory">
            {inventory}
        </Box>
    )
}