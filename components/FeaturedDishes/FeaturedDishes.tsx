'use client';
import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useLanguage } from '@/context/LanguageContext';

const dishes = [
  {
    name: {
      en: 'Grilled Shrimp Salad',
      ar: 'سلطة الروبيان المشوي',
    },
    description: {
      en: 'A fresh and vibrant salad with grilled shrimp, eggs, and seasonal vegetables.',
      ar: 'سلطة طازجة وحيوية مع الروبيان المشوي والبيض والخضروات الموسمية.',
    },
    imageUrl: '/images/dish1.webp',
  },
  {
    name: {
      en: 'Gourmet Burger',
      ar: 'برجر جورميه',
    },
    description: {
      en: 'A juicy gourmet burger with fresh vegetables and a toasted bun.',
      ar: 'برجر جورميه طازج مع الخضروات الطازجة وقطعة خبز محمصة.',
    },
    imageUrl: '/images/dish2.webp',
  },
  {
    name: {
      en: 'Chocolate Layer Cake',
      ar: 'كيك طبقات الشوكولاتة',
    },
    description: {
      en: 'A rich chocolate cake layered with cream and fresh berries on top.',
      ar: 'كيك شوكولاتة غني بطبقات من الكريمة والتوت الطازج على الوجه.',
    },
    imageUrl: '/images/dish3.webp',
  },
  {
    name: {
      en: 'Spaghetti Carbonara',
      ar: 'سباغيتي كاربونارا',
    },
    description: {
      en: 'A classic Italian pasta dish with creamy sauce and crispy bacon bits.',
      ar: 'طبق مكرونة إيطالي كلاسيكي مع صلصة كريمية وقطع من لحم الخنزير المقدد المقرمش.',
    },
    imageUrl: '/images/dish4.webp',
  },
];

const FeaturedDishes: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Box sx={{ padding: '4rem 0', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FFA500', mb: 4 }}>
        {language === 'en' ? 'Featured Dishes' : 'أطباق مميزة'}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {dishes.map((dish, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={dish.imageUrl}
                alt={dish.name[language]}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  {dish.name[language]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {dish.description[language]}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedDishes;
