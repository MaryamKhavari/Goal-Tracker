import { useState } from "react"

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Box,
  Switch
} from "@mui/material"

import {
  Menu as MenuIcon,
  Dashboard,
  Flag,
  Category,
  Settings
} from "@mui/icons-material"

import {
  Link,
  NavLink
} from "react-router-dom"

import { useTranslation }
from "react-i18next"

import { useSettings } from "../../context/SettingsContext"

export default function Navbar() {

  const [open, setOpen] = useState(false)
  const { i18n } =
    useTranslation()

  const {
    darkMode,
    setDarkMode,
  } = useSettings()

  const navLinks = [
    {
      label: "Dashboard",
      path: "/dashboard",
      
    },

    {
      label: "Goals",
      path: "/goals",
      
    },

    {
      label: "Categories",
      path: "/categories",
      
    },

    {
      label: "Settings",
      path: "/settings",
      
    }
  ]

  return (
    <>

      <AppBar position="static">

        <Toolbar>

          {/* MOBILE MENU BUTTON */}

          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setOpen(true)}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* LOGO */}

          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            Goal Tracker
          </Typography>

          {/* DESKTOP LINKS */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex"
              },

              gap: 2,
              alignItems: "center"
            }}
          >

            {navLinks.map(link => (

              <Button
                key={link.path}

                color="inherit"

                component={NavLink}

                to={link.path}

                sx={{
                  "&.active": {
                    borderBottom: "2px solid white"
                  }
                }}

                startIcon={link.icon}
              >
                {link.label}
              </Button>

            ))}

            {/* DARK MODE */}

            <Switch
              checked={darkMode}
              onChange={() =>
                setDarkMode(!darkMode)
              }
            />

            {/* LANGUAGE */}

           

          </Box>

        </Toolbar>
        <Button
          color="inherit"

         onClick={() => {

         const newLang =
         i18n.language === "en"
           ? "fa"
           : "en"

         i18n.changeLanguage(newLang)

        document.body.dir =
         newLang === "fa"
        ? "rtl"
        : "ltr"
  }}
>

  {i18n.language === "en"
    ? "FA"
    : "EN"}

</Button>
      </AppBar>

      {/* MOBILE DRAWER */}

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
      >

        <Box sx={{ width: 250 }}>

          <List>

            {navLinks.map(link => (

              <ListItem
                key={link.path}
                disablePadding
              >

                <ListItemButton
                  component={Link}
                  to={link.path}

                  onClick={() =>
                    setOpen(false)
                  }
                >

                  {link.icon}

                  <ListItemText
                    primary={link.label}
                    sx={{ ml: 2 }}
                  />

                </ListItemButton>

              </ListItem>

            ))}

          </List>

        </Box>

      </Drawer>

    </>
  )
}
