import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  position: 'relative',
}));

const MapContainer = styled(Box)({
  height: '400px',
  width: '100%',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
});

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));

const Contact = () => {
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    window.open('/cv.pdf', '_blank');
  };

  return (
    <ContactContainer maxWidth="lg">
      <Typography variant="h3" component="h2" gutterBottom align="center" color="primary" sx={{ mb: 6 }}>
        Contact Me
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737.5!2d-0.2934!3d27.8744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUyJzI3LjgiTiAwMMKwMTcnMzYuNiJX!5e0!3m2!1sen!2sdz!4v1620000000000!5m2!1sen!2sdz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sidi Bel abbés, Algeria Location"
            />
          </MapContainer>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3 }}>
            <ContactInfo>
              <LocationOnIcon />
              <Typography variant="body1">
                Adrar, Algeria
              </Typography>
            </ContactInfo>

            <ContactInfo>
              <EmailIcon />
              <Typography variant="body1">
                d.boudaoud@esi-sba.dz
              </Typography>
            </ContactInfo>

            <ContactInfo>
              <PhoneIcon />
              <Typography variant="body1">
                +213 697592727
              </Typography>
            </ContactInfo>

            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadCV}
              sx={{ mt: 3 }}
            >
              Download CV
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ContactContainer>
  );
};

export default Contact; 
