import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, Radio, RadioGroup } from "@mui/material";
import "../styles/InventorySection.scss";
// import Item from "../class/Item.jsx";
import React, { useEffect, useState } from 'react';
import pouch1 from "../icons/pouch1.png";
import pouch2 from "../icons/pouch2.png";
import pouch3 from "../icons/pouch3.png";
import pouch4 from "../icons/pouch4.png";
import pouch5 from "../icons/pouch5.png";
import Item from "../class/Item";
import Battlestaff from "../icons/battlestaff.png";
import Bloodessence from "../icons/blood_essence.png";
import AirGloves from "../icons/air_gloves.png";
import EarthGloves from "../icons/earth_gloves.png";
import WaterGloves from "../icons/water_gloves.png";
import FireGloves from "../icons/fire_gloves.png";
import ElementalOffer from "../icons/demon_offer.png";
import CatalyticOffer from "../icons/sinister_offer.png";
import AirRune from "../icons/air_rune_small.png";
import AirRuneChecked from "../icons/air_rune_small_checked.png";
import EarthRune from "../icons/earth_rune_small.png";
import EarthRuneChecked from "../icons/earth_rune_small_checked.png";
import WaterRune from "../icons/water_rune_small.png";
import WaterRuneChecked from "../icons/water_rune_small_checked.png";
import FireRune from "../icons/fire_rune_small.png";
import FireRuneChecked from "../icons/fire_rune_small_checked.png";
import AstralRune from "../icons/astral_rune_small.png";
import AstralRuneChecked from "../icons/astral_rune_small_checked.png";
import LawRune from "../icons/law_rune_small.png";
import LawRuneChecked from "../icons/law_rune_small_checked.png";
import BloodRune from "../icons/blood_rune_small.png";
import BloodRuneChecked from "../icons/blood_rune_small_checked.png";
import WrathRune from "../icons/wrath_rune_small.png";
import WrathRuneChecked from "../icons/wrath_rune_small_checked.png";
import DemonOffer from "../audio/demon_offer.mp3";
import SinisterOffer from "../audio/sinister_offer.mp3";
import craftAudio from "../audio/craft.wav";
import NumericInput from "react-numeric-input";
import Ring from "../icons/ring_of_the_elements.png";
import RingCharged from "../icons/ring_of_the_elements_charged.png";

export default function InventorySection(props) {

    const mute = props.mute;

    const audio = new Audio(DemonOffer);
    audio.volume = 0.1;

    const audio2 = new Audio(SinisterOffer);
    audio2.volume = 0.1;

    const audio3 = new Audio(craftAudio);
    audio3.volume = 0.1;

    const inventory = props.inventory;
    const pouch = props.pouch;
    const pouchList = [pouch1, pouch2, pouch3, pouch4, pouch5, pouch5];
    const extra = props.extra;

    const battlestaff = props.battlestaff;
    const bloodEssence = props.bloodEssence;

    const air = props.air;
    const earth = props.earth;
    const water = props.water;
    const fire = props.fire;
    const astral = props.astral;
    const law = props.law;
    const blood = props.blood;
    const wrath = props.wrath;
    const setAir = props.setAir;
    const setEarth = props.setEarth;
    const setWater = props.setWater;
    const setFire = props.setFire;
    const setAstral = props.setAstral;
    const setLaw = props.setLaw;
    const setBlood = props.setBlood;
    const setWrath = props.setWrath;

    const staff = props.staff;

    const airGloves = props.airGloves;
    const earthGloves = props.earthGloves;
    const waterGloves = props.waterGloves;
    const fireGloves = props.fireGloves;
    const ringofElements = props.ringofElements;
    const ringCharge = props.ringCharge;
    const setRingCharge = props.setRingCharge;

    const lawOutfit = props.lawOutfit;
    const bloodOutfit = props.bloodOutfit;
    const wrathOutfit = props.wrathOutfit;

    const elementalOffer = props.elementalOffer;
    const catalyticOffer = props.catalyticOffer;

    const [width, setWidth] = useState(0);

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        
        return () => window.removeEventListener("resize", updateDimensions);
    }, [])

    const [openE, setOpenE] = useState(false);
    const [openC, setOpenC] = useState(false);
    const [openR, setOpenR] = useState(false);

    const handleClickOpenE = () => {
        setElement("");
        setAmount(0);
        setOffer("");
        if (staff !== "") {
            if (staff === "air") {
              setAir(0);
            } else if (staff === "earth") {
              setEarth(0);
            } else if (staff === "water") {
              setWater(0);
            } else if (staff === "fire") {
              setFire(0);
            } else if (staff === "astral") {
              setAstral(0);
            } else if (staff === "law") {
              setLaw(0);
            } else if (staff === "blood") {
              setBlood(0);
            } else {
              setWrath(0);
            }
          }
        setOpenE(true);
    }
    const handleCloseE = () => {
        setOpenE(false);
    }
    
    const handleClickOpenC = () => {
        setElement("");
        setAmount(0);
        setOffer("");
        if (staff !== "") {
            if (staff === "air") {
              setAir(0);
            } else if (staff === "earth") {
              setEarth(0);
            } else if (staff === "water") {
              setWater(0);
            } else if (staff === "fire") {
              setFire(0);
            } else if (staff === "astral") {
              setAstral(0);
            } else if (staff === "law") {
              setLaw(0);
            } else if (staff === "blood") {
              setBlood(0);
            } else {
              setWrath(0);
            }
          }
        setOpenC(true);
    }
    const handleCloseC = () => {
        setOpenC(false);
    }

    const handleClickOpenR = () => {
        setElement("");
        setAmount(0);
        if (staff !== "") {
            if (staff === "air") {
              setAir(0);
            } else if (staff === "earth") {
              setEarth(0);
            } else if (staff === "water") {
              setWater(0);
            } else if (staff === "fire") {
              setFire(0);
            } else if (staff === "astral") {
              setAstral(0);
            } else if (staff === "law") {
              setLaw(0);
            } else if (staff === "blood") {
              setBlood(0);
            } else {
              setWrath(0);
            }
          }
        setOpenR(true);
    }
    const handleCloseR = () => {
        setOpenR(false);
    }

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWidth(width);
    }

    const getMax = (elem) => {
        if (elem === "air") {
            return Math.min(air, law);
        } else if (elem === "earth") {
            return Math.min(earth, law);
        } else if (elem === "water") {
            return Math.min(water, law);
        } else {
            return Math.min(fire, law);
        }
    }

    const [element, setElement] = useState("");
    const [amount, setAmount] = useState(0);
    const [offer, setOffer] = useState("");
    
    return (
        <React.Fragment>
        <Box className="inventory" height={width > 1110 ? "386px !important" : "50px !important"} top={width > 1110 ? "" : 0} width="252px" position={width > 1110 ? "fixed" : "absolute"} sx={{fontSize: "25px", textAlign: "right" }}>
            {battlestaff > 0 ? <img src={Battlestaff} style={{textAlign: "left !important"}} alt="Battlestaves" width="48px" height="48px"></img> : ""}
            {battlestaff > 0 ? " x" + battlestaff : ""}
            {pouch ? <img src={pouchList[pouch - 1]} style={{textAlign: ""}} alt="Essence Pouch" width="48px" height="48px"></img> : (lawOutfit === 5 || bloodOutfit === 5 || wrathOutfit === 5) ? <img src={pouchList[0]} style={{textAlign: ""}} alt="Essence Pouch" width="48px" height="48px"></img> : ""}
            {pouch || ((lawOutfit === 5 || bloodOutfit === 5 || wrathOutfit === 5)) ? " x" + extra : ""}
            {airGloves > 0 ? <div style={{textAlign: "", marginTop: "-100px"}}><img src={AirGloves} alt="Air Gloves" width="48px" height="48px"></img> x{airGloves}</div> : ""}
            {earthGloves > 0 ? <div style={{textAlign: "", marginTop: "-100px"}}><img src={EarthGloves} alt="Earth Gloves" width="48px" height="48px"></img> x{earthGloves}</div> : ""}
            {waterGloves > 0 ? <div style={{textAlign: "", marginTop: "-100px"}}><img src={WaterGloves} alt="Water Gloves" width="48px" height="48px"></img> x{waterGloves}</div> : ""}
            {fireGloves > 0 ? <div style={{textAlign: "", marginTop: "-100px"}}><img src={FireGloves} alt="Fire Gloves" width="48px" height="48px"></img> x{fireGloves}</div> : ""}
            {bloodEssence > 0 ? <div style={{textAlign: "", marginTop: "-100px"}}><img src={Bloodessence} alt="Blood Essence" width="48px" height="48px"></img> x{bloodEssence}</div> : ""}
            {ringofElements > 0 ? <div style={{textAlign: "", marginTop: "-100px", color: ringCharge === 0 ? "red" : "green"}}><Button color="secondary" variant="contained" onClick={handleClickOpenR}>Charge</Button>&nbsp;&nbsp;<img src={ringCharge > 0 ? RingCharged : Ring} alt="Ring of the elements" width="48px" height="48px"></img> x{ringCharge}</div> : ""}
            {width > 1110 ?
            <Box className="inventory" sx={{backgroundColor: "black"}}>
                {inventory}
            </Box>
            : <Item item="rune_essence"></Item>}
            {width < 1110 ? " x" + inventory.length : ""}
        </Box>
        <Box className="inventory" height={width > 1110 ? "386px !important" : "50px !important"} top={width > 1110 ? "" : 0} width="252px" position={width > 1110 ? "fixed" : "absolute"} sx={{fontSize: "25px", textAlign: "right" }}>
            {elementalOffer ? <IconButton style={{textAlign: "", marginRight: "252px", marginTop: "262px", minHeight: "48px"}} onClick={() => {
                handleClickOpenE();
            }} color="success">
                <img src={ElementalOffer} style={{textAlign: ""}} alt="Elemental Offer" width="48px" height="48px"></img>
            </IconButton> : ""}
            {catalyticOffer ? <IconButton style={{textAlign: "", marginRight: "252px", minHeight: "48px"}} onClick={() => {
                handleClickOpenC();
            }} color="success">
                <img src={CatalyticOffer} style={{textAlign: "", marginTop: elementalOffer ? "" : "326px"}} alt="Catalytic Offer" width="48px" height="48px"></img>
            </IconButton> : ""}

            <Dialog open={openE} onClose={handleCloseE}>
                <DialogTitle>Convert Elemental Runes</DialogTitle>
                <DialogContent>
                    <DialogContentText color="white">Select rune to craft</DialogContentText>
                    <Button onClick={() => {
                        setElement("air")
                    }} disabled={offer === "air" ? true : false}><img src={element !== "air" ? AirRune : AirRuneChecked} alt="Air" width="48px" height="48px"></img></Button>
                    <Button onClick={() => {
                        setElement("earth")
                    }} disabled={offer === "earth" ? true : false}><img src={element !== "earth" ? EarthRune : EarthRuneChecked} alt="Earth" width="48px" height="48px"></img></Button>
                    <Button onClick={() => {
                        setElement("water")
                    }} disabled={offer === "water" ? true : false}><img src={element !== "water" ? WaterRune : WaterRuneChecked} alt="Water" width="48px" height="48px"></img></Button>
                    <Button onClick={() => {
                        setElement("fire")
                    }} disabled={offer === "fire" ? true : false}><img src={element !== "fire" ? FireRune : FireRuneChecked} alt="Fire" width="48px" height="48px"></img></Button>
                    {element !== "" ?
                    <React.Fragment>
                    <br></br>
                    <DialogContentText color="white">How many runes? {amount > 0 ? "(" + amount * 20 + " runes required)": ""}</DialogContentText>
                    <NumericInput min={0} max={Math.floor(Math.max(...[air, earth, water, fire]) / 20)} step={1} onChange={(value) => {
                        if (Math.floor(Math.max(...[air, earth, water, fire]) / 20) >= value) {
                            setAmount(value)
                        } else {
                            setAmount(Math.floor(Math.max(...[air, earth, water, fire]) / 20));
                        }
                    }} value={amount}/>
                    </React.Fragment>
                    :
                    ""}
                    {amount !== 0 ?
                    <React.Fragment>
                        <DialogContentText color="white">Select rune to offer</DialogContentText>
                        <Button onClick={() => {
                            setOffer("air")
                        }} disabled={element === "air" ? true : air < amount * 20 ? true : false}><img src={offer !== "air" ? AirRune : AirRuneChecked} alt="Air" width="48px" height="48px"></img></Button>
                        <Button onClick={() => {
                            setOffer("earth")
                        }} disabled={element === "earth" ? true : earth < amount * 20 ? true : false}><img src={offer !== "earth" ? EarthRune : EarthRuneChecked} alt="Earth" width="48px" height="48px"></img></Button>
                        <Button onClick={() => {
                            setOffer("water")
                        }} disabled={element === "water" ? true : water < amount * 20 ? true : false}><img src={offer !== "water" ? WaterRune : WaterRuneChecked} alt="Water" width="48px" height="48px"></img></Button>
                        <Button onClick={() => {
                            setOffer("fire")
                        }} disabled={element === "fire" ? true : fire < amount * 20 ? true : false}><img src={offer !== "fire" ? FireRune : FireRuneChecked} alt="Fire" width="48px" height="48px"></img></Button>
                    </React.Fragment>
                    :
                    ""}
                    <br></br>
                    <Box component="span" m={1} display="flex" justifyContent="space-between" alignItems="center">
                    <Button variant="contained" color="error" onClick={handleCloseE}>Exit</Button>
                    <Button variant="contained" color="success" disabled={element !== "" && amount !== 0 && offer !== "" ? false : true} onClick={() => {
                        if (Math.floor(Math.max(...[air, earth, water, fire]) / 20) >= amount) {
                            if (!mute) {
                                audio.play();
                            }
                            if (element === "air") {
                                setAir(air + amount);
                            } else if (element === "earth") {
                                setEarth(earth + amount);
                            } else if (element === "water") {
                                setWater(water + amount);
                            } else if (element === "fire") {
                                setFire(fire + amount);
                            }
                            if (offer === "air") {
                                setAir(air - (amount * 20));
                            } else if (offer === "earth") {
                                setEarth(earth - (amount * 20));
                            } else if (offer === "water") {
                                setWater(water - (amount * 20));
                            } else if (offer === "fire") {
                                setFire(fire - (amount * 20));
                            }
                            handleCloseE();
                        }
                    }}>Craft</Button>
                    </Box>
                </DialogContent>
            </Dialog>

            <Dialog open={openC} onClose={handleCloseC}>
                <DialogTitle>Convert Catalytic Runes</DialogTitle>
                <DialogContent>
                    <DialogContentText color="white">Select rune to craft</DialogContentText>
                    <Button onClick={() => {
                        setElement("astral")
                    }} disabled={offer === "astral" ? true : false}><img src={element !== "astral" ? AstralRune : AstralRuneChecked} alt="Astral" width="48px" height="48px"></img></Button>
                    <Button onClick={() => {
                        setElement("law")
                    }} disabled={offer === "law" ? true : false}><img src={element !== "law" ? LawRune : LawRuneChecked} alt="Law" width="48px" height="48px"></img></Button>
                    <Button onClick={() => {
                        setElement("blood")
                    }} disabled={offer === "blood" ? true : false}><img src={element !== "blood" ? BloodRune : BloodRuneChecked} alt="Blood" width="48px" height="48px"></img></Button>
                    <Button onClick={() => {
                        setElement("wrath")
                    }} disabled={offer === "wrath" ? true : false}><img src={element !== "wrath" ? WrathRune : WrathRuneChecked} alt="Wrath" width="48px" height="48px"></img></Button>
                    {element !== "" ?
                    <React.Fragment>
                    <br></br>
                    <DialogContentText color="white">How many runes? {amount > 0 ? "(" + amount * 20 + " runes required)": ""}</DialogContentText>
                    <NumericInput min={0} max={Math.floor(Math.max(...[astral, law, blood, wrath]) / 20)} step={1} onChange={(value) => {
                        if (Math.floor(Math.max(...[astral, law, blood, wrath]) / 20) >= value) {
                            setAmount(value)
                        } else {
                            setAmount(Math.floor(Math.max(...[astral, law, blood, wrath]) / 20));
                        }
                    }} value={amount}/>
                    </React.Fragment>
                    :
                    ""}
                    {amount !== 0 ?
                    <React.Fragment>
                        <DialogContentText color="white">Select rune to offer</DialogContentText>
                        <Button onClick={() => {
                            setOffer("astral")
                        }} disabled={element === "astral" ? true : astral < amount * 20 ? true : false}><img src={offer !== "astral" ? AstralRune : AstralRuneChecked} alt="Astral" width="48px" height="48px"></img></Button>
                        <Button onClick={() => {
                            setOffer("law")
                        }} disabled={element === "law" ? true : law < amount * 20 ? true : false}><img src={offer !== "law" ? LawRune : LawRuneChecked} alt="Law" width="48px" height="48px"></img></Button>
                        <Button onClick={() => {
                            setOffer("blood")
                        }} disabled={element === "blood" ? true : blood < amount * 20 ? true : false}><img src={offer !== "blood" ? BloodRune : BloodRuneChecked} alt="Blood" width="48px" height="48px"></img></Button>
                        <Button onClick={() => {
                            setOffer("wrath")
                        }} disabled={element === "wrath" ? true : wrath < amount * 20 ? true : false}><img src={offer !== "wrath" ? WrathRune : WrathRuneChecked} alt="Wrath" width="48px" height="48px"></img></Button>
                    </React.Fragment>
                    :
                    ""}
                    <br></br>
                    <Box component="span" m={1} display="flex" justifyContent="space-between" alignItems="center">
                    <Button variant="contained" color="error" onClick={handleCloseC}>Exit</Button>
                    <Button variant="contained" color="success" disabled={element !== "" && amount !== 0 && offer !== "" ? false : true} onClick={() => {
                        if (Math.floor(Math.max(...[astral, law, blood, wrath]) / 20) >= amount) {
                            console.log(amount)
                            if (!mute) {
                                audio2.play();
                            }
                            if (element === "astral") {
                                setAstral(astral + amount);
                            } else if (element === "law") {
                                setLaw(law + amount);
                            } else if (element === "blood") {
                                setBlood(blood + amount);
                            } else if (element === "wrath") {
                                setWrath(wrath + amount);
                            }
                            if (offer === "astral") {
                                setAstral(astral - (amount * 20));
                            } else if (offer === "law") {
                                setLaw(law - (amount * 20));
                            } else if (offer === "blood") {
                                setBlood(blood - (amount * 20));
                            } else if (offer === "wrath") {
                                setWrath(wrath - (amount * 20));
                            }
                            handleCloseC();
                        }
                    }}>Craft</Button>
                    </Box>
                </DialogContent>
            </Dialog>

            <Dialog open={openR} onClose={handleCloseR}>
                <DialogTitle color="white">Select rune to offer</DialogTitle>
                <DialogContent>
                <Button onClick={() => {
                        setElement("air");
                        setAmount(0);
                    }}><img src={element !== "air" ? AirRune : AirRuneChecked} alt="Air" width="48px" height="48px"></img></Button>
                    <Button onClick={() => {
                        setElement("earth")
                        setAmount(0);
                    }}><img src={element !== "earth" ? EarthRune : EarthRuneChecked} alt="Earth" width="48px" height="48px"></img></Button>
                    <Button onClick={() => {
                        setElement("water")
                        setAmount(0);
                    }}><img src={element !== "water" ? WaterRune : WaterRuneChecked} alt="Water" width="48px" height="48px"></img></Button>
                    <Button onClick={() => {
                        setElement("fire")
                        setAmount(0);
                    }}><img src={element !== "fire" ? FireRune : FireRuneChecked} alt="Fire" width="48px" height="48px"></img></Button>
                {element !== "" ?
                    <React.Fragment>
                    <br></br>
                    <DialogContentText color="white">How many charges? {law === 0 ? <font color="red">Law runes required!</font> : ""} {amount > 0 ? "(-" + amount : ""} {amount > 0 ? <img src={LawRune}></img> : ""}{amount > 0 ? ")" : ""}</DialogContentText>
                    
                    <NumericInput name="ringInput" min={0} max={getMax(element)} step={1} onChange={(value) => {
                        if (getMax(element) >= value) {
                            setAmount(value)
                        } else {
                            setAmount(getMax(element));
                        }
                    }} value={amount}/>
                    </React.Fragment>
                    :
                    ""}
                <Box component="span" m={1} display="flex" justifyContent="space-between" alignItems="center">
                    <Button variant="contained" color="error" onClick={handleCloseR}>Exit</Button>
                    <Button variant="contained" color="success" disabled={element !== "" && amount !== 0 ? false : true} onClick={() => {
                        if (getMax(element) >= amount) {
                            if (!mute) {
                                audio3.play();
                            }
                            if (element === "air") {
                                setAir(air - amount);
                            } else if (element === "earth") {
                                setEarth(earth - amount);
                            } else if (element === "water") {
                                setWater(water - amount);
                            } else {
                                setFire(fire - amount);
                            }
                            setLaw(law - amount);
                            setRingCharge(ringCharge + amount);
                            handleCloseR();
                        }
                    }}>Charge</Button>
                </Box>
                </DialogContent>
            </Dialog>
        </Box>
        </React.Fragment>
    )
}