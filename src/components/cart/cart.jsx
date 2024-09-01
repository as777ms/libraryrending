import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { Book, Build, DeviceHub, Code } from '@mui/icons-material';
import Aos from 'aos';
import 'aos/dist/aos.css';

const FeatureCard = ({ icon: Icon, title, description, actionText }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Card
      sx={{
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)', // Hover effect
        },
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#ffffff',
        border: '1px solid #e0e0e0',
      }}
      data-aos="fade-up" // AOS animation effect
    >
      <CardContent>
        <Icon sx={{ fontSize: 50, color: '#0066cc', mb: 2 }} />
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ color: '#555555' }}>
          {description}
        </Typography>
        {actionText && (
          <Button
            variant="contained"
            sx={{ 
              marginTop: '20px',
              backgroundColor: '#0066cc',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#005bb5',
              },
              borderRadius: '20px'
            }}
            href="#"
          >
            {actionText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

const Cart = () => {
  return (
    <>
      <div style={{ padding: '', backgroundColor: '' }}>
        <Typography variant="h3" component="div" align="center" gutterBottom>
          Welcome to Our Library
        </Typography>
        <Typography variant="h5" component="div" align="center" sx={{ mb: 4 }}>
          Discover a world of knowledge with our diverse collection of books and resources.
        </Typography>
        <Typography variant="body1" component="div" align="center" sx={{ mb: 6 }}>
          Our library offers an extensive range of genres, from fiction and non-fiction to academic and reference materials. 
          We are dedicated to providing you with the best resources to enhance your learning and entertainment experience.
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={Book}
              title="Diverse Collection"
              description="Explore our wide range of books, including fiction, non-fiction, academic texts, and more."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={Build}
              title="State-of-the-Art Facilities"
              description="Enjoy modern library facilities with comfortable reading spaces and cutting-edge technology."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={DeviceHub}
              title="Digital Resources"
              description="Access a wealth of digital resources including e-books, online journals, and multimedia content."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={Code}
              title="Innovation and Learning"
              description="Participate in workshops and events designed to foster innovation and continuous learning."
              actionText="Explore Now"
            />
          </Grid>
        </Grid>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <Button
          variant="contained"
          sx={{
            padding: '12px 24px',
            borderRadius: '20px',
            background: 'linear-gradient(90deg, rgba(29,78,216,1) 0%, rgba(125,211,252,1) 100%)',
            color: '#ffffff',
            fontSize: '18px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              background: 'linear-gradient(90deg, rgba(29,78,216,1) 0%, rgba(125,211,252,1) 80%)',
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
            },
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease'
          }}
        >
          Show More
        </Button>
      </div>
    </>
  );
};

export default Cart;
