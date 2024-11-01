'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import { useLanguage } from '@/context/LanguageContext';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { language, toggleLanguage } = useLanguage();

  // State for drawer toggle
  const [drawerOpen, setDrawerOpen] = useState(false);

  // State for dropdown menus
  const [anchorElAbout, setAnchorElAbout] = useState<null | HTMLElement>(null);
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);

  // Toggle Drawer
  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  // Handle About Us dropdown
  const handleAboutClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAbout(event.currentTarget);
  };
  const handleAboutClose = () => {
    setAnchorElAbout(null);
  };

  // Handle Menu dropdown
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorElMenu(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#333333', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Language Toggle Button */}
        <Button
          variant="outlined"
          onClick={toggleLanguage}
          sx={{
            fontWeight: "bold",
            color: "#FFF",
            borderColor: "#FFA500",
            "&:hover": {
              backgroundColor: "#FFA500",
              borderColor: "#FFA500",
              color: "#FFF",
            },
          }}
        >
          {language === "en" ? "العربية" : "English"}
        </Button>

        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        {!isMobile ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              sx={{ color: '#FFA500', fontWeight: 'bold' }}
              onClick={handleAboutClick}
              endIcon={<ExpandMoreIcon />}
            >
              {language === "en" ? "About Us" : "من نحن"}
            </Button>
            <Menu
              anchorEl={anchorElAbout}
              open={Boolean(anchorElAbout)}
              onClose={handleAboutClose}
            >
              <MenuItem onClick={handleAboutClose}>
                <Link href="/about#our-story">{language === "en" ? "Our Story" : "قصتنا"}</Link>
              </MenuItem>
              <MenuItem onClick={handleAboutClose}>
                <Link href="/about#chef-profile">{language === "en" ? "Chef's Profile" : "ملف الشيف"}</Link>
              </MenuItem>
              <MenuItem onClick={handleAboutClose}>
                <Link href="/about#gallery">{language === "en" ? "Gallery" : "معرض الصور"}</Link>
              </MenuItem>
            </Menu>

            <Button
              sx={{ color: '#FFA500', fontWeight: 'bold' }}
              onClick={handleMenuClick}
              endIcon={<ExpandMoreIcon />}
            >
              {language === "en" ? "Menu" : "قائمة الطعام"}
            </Button>
            <Menu
              anchorEl={anchorElMenu}
              open={Boolean(anchorElMenu)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link href="/menu#starters">{language === "en" ? "Starters" : "المقبلات"}</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/menu#main-courses">{language === "en" ? "Main Courses" : "الأطباق الرئيسية"}</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/menu#desserts">{language === "en" ? "Desserts" : "الحلويات"}</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/menu#beverages">{language === "en" ? "Beverages" : "المشروبات"}</Link>
              </MenuItem>
            </Menu>

            <Button sx={{ color: '#FFD700', fontWeight: 'bold' }}>
              <Link href="/reservations">{language === "en" ? "Reservations" : "الحجوزات"}</Link>
            </Button>
            <Button sx={{ color: '#FFD700', fontWeight: 'bold' }}>
              <Link href="/order-online">{language === "en" ? "Order Online" : "اطلب عبر الإنترنت"}</Link>
            </Button>
            <Button sx={{ color: '#FFD700', fontWeight: 'bold' }}>
              <Link href="/contact">{language === "en" ? "Contact Us" : "تواصل معنا"}</Link>
            </Button>
          </Box>
        ) : (
          // Mobile Menu
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon sx={{ color: '#FFA500' }} />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250, backgroundColor: '#333333', height: '100%', color: '#FFF' }} role="presentation" onClick={() => toggleDrawer(false)}>
          <List>
            <ListItem component="button">
              <Link href="/" passHref>
                <ListItemText primary={language === "en" ? "Home" : "الرئيسية"} sx={{ color: '#FFA500' }} />
              </Link>
            </ListItem>
            <Divider />
            <ListItem component="button" onClick={handleAboutClick}>
              <ListItemText primary={language === "en" ? "About Us" : "من نحن"} sx={{ color: '#FFA500' }} />
            </ListItem>
            <Menu
              anchorEl={anchorElAbout}
              open={Boolean(anchorElAbout)}
              onClose={handleAboutClose}
            >
              <MenuItem onClick={handleAboutClose}>
                <Link href="/about#our-story">{language === "en" ? "Our Story" : "قصتنا"}</Link>
              </MenuItem>
              <MenuItem onClick={handleAboutClose}>
                <Link href="/about#chef-profile">{language === "en" ? "Chef's Profile" : "ملف الشيف"}</Link>
              </MenuItem>
              <MenuItem onClick={handleAboutClose}>
                <Link href="/about#gallery">{language === "en" ? "Gallery" : "معرض الصور"}</Link>
              </MenuItem>
            </Menu>
            <ListItem component="button" onClick={handleMenuClick}>
              <ListItemText primary={language === "en" ? "Menu" : "قائمة الطعام"} sx={{ color: '#FFA500' }} />
            </ListItem>
            <Menu
              anchorEl={anchorElMenu}
              open={Boolean(anchorElMenu)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link href="/menu#starters">{language === "en" ? "Starters" : "المقبلات"}</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/menu#main-courses">{language === "en" ? "Main Courses" : "الأطباق الرئيسية"}</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/menu#desserts">{language === "en" ? "Desserts" : "الحلويات"}</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/menu#beverages">{language === "en" ? "Beverages" : "المشروبات"}</Link>
              </MenuItem>
            </Menu>
            <Divider />
            <ListItem component="button">
              <Link href="/reservations" passHref>
                <ListItemText primary={language === "en" ? "Reservations" : "الحجوزات"} sx={{ color: '#FFD700' }} />
              </Link>
            </ListItem>
            <ListItem component="button">
              <Link href="/order-online" passHref>
                <ListItemText primary={language === "en" ? "Order Online" : "اطلب عبر الإنترنت"} sx={{ color: '#FFD700' }} />
              </Link>
            </ListItem>
            <ListItem component="button">
              <Link href="/contact" passHref>
                <ListItemText primary={language === "en" ? "Contact Us" : "تواصل معنا"} sx={{ color: '#FFD700' }} />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
