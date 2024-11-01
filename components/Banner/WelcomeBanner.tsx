'use client';
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useLanguage } from "@/context/LanguageContext";

const WelcomeBanner: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        backgroundImage: 'url("/images/welcomebanner.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FFF",
        textAlign: "center",
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />
      <Box sx={{ zIndex: 2, maxWidth: "80%" }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", color: "#FFA500" }}>
          {language === "en" ? "Welcome to Khamir Ydoh Cafeteria" : "مرحبا بكم في كافتيريا خمير يده"}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, color: "#FFD700" }}>
          {language === "en"
            ? "Experience the best flavors and culinary delights in town!"
            : "استمتع بأفضل النكهات والمأكولات الشهية في المدينة!"}
        </Typography>
      </Box>
    </Box>
  );
};

export default WelcomeBanner;
