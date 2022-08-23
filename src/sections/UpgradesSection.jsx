import { Box, SwipeableDrawer, Button, List } from "@mui/material";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function UpgradesSection() {

    const theme = createTheme({
        palette: {
            upgrade: {
                main: "#484343",
                contrastText: "#B03904",
            },
        },
        components: {
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: "#1c1c1c",
                        color: "#fff",
                    }
                }
            }
        }
    })

    const [state, setState] = useState(false);
    
    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
        return;
        }

        setState(open);
    };

    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            
          </List>
          {/* <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      );

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{paddingBottom: "15px"}}>
                <Button variant="contained" color="upgrade" onClick={toggleDrawer(true)}>Upgrades</Button>
                <SwipeableDrawer
                anchor="left"
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}>
                    {list("left")}
                </SwipeableDrawer>
            </Box>
        </ThemeProvider>
    )
}