import React from 'react';
import { Box, Typography, Link, styled } from '@mui/material';

const FooterContainer = styled(Box)({
    background: '#ffffff',
    color: '#333',
    padding: '50px 0',
    textAlign: 'center',
});

const FooterContent = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const FooterSection = styled(Box)({
    background: 'rgba(255, 255, 255, 0.8)',
    color: '#000',
    marginBottom: 20,
    padding: 20,
    maxWidth: 300,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const FooterLink = styled(Link)({
    display: 'block',
    color: '#333',
    textDecoration: 'none',
    margin: '8px 0',
    '&:hover': {
        textDecoration: 'underline',
    }
});

const FooterText = styled(Typography)({
  color: '#666',
  marginTop: 20,
});

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <Box display="flex" justifyContent="center" flexWrap="wrap">
                    <FooterSection>
                        <Box mb={2}>
                            <img src="https://cdn.saffire.com/images.ashx?t=ig&rid=WesternFairsAssociation&i=Career_Connections_Logo(1).png" alt="Career Connection Logo" style={{ height: 40 }} />
                        </Box>
                        <FooterLink href="#">Connect with Us</FooterLink>
                        <Box display="flex" justifyContent="center" mt={1}>
                            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Career Connection Social Icon" style={{ height: 30, margin: '0 5px' }} />
                            <img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="Career Connection Icon" style={{ height: 30, margin: '0 5px' }} />
                            <img src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt="Career Connection Icon" style={{ height: 30, margin: '0 5px' }} />
                            <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="Career Connection Icon" style={{ height: 30, margin: '0 5px' }} />
                        </Box>
                    </FooterSection>

                    <FooterSection>
                        <FooterLink href="#">About Us</FooterLink>
                        <FooterLink href="#">Careers</FooterLink>
                        <FooterLink href="#">Employer Home</FooterLink>
                        <FooterLink href="#">Sitemap</FooterLink>
                        <FooterLink href="#">Credits</FooterLink>
                    </FooterSection>

                    <FooterSection>
                        <FooterLink href="#">Help Center</FooterLink>
                        <FooterLink href="#">Summons/Notices</FooterLink>
                        <FooterLink href="#">Grievances</FooterLink>
                        <FooterLink href="#">Report Issue</FooterLink>
                    </FooterSection>

                    <FooterSection>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Terms & Conditions</FooterLink>
                        <FooterLink href="#">Fraud Alert</FooterLink>
                        <FooterLink href="#">Trust & Safety</FooterLink>
                    </FooterSection>

                    <FooterSection>
                        <Typography variant="h6" gutterBottom>Get real-time job updates on our App</Typography>
                        <Box display="flex" justifyContent="center">
                            <img src="https://w7.pngwing.com/pngs/918/845/png-transparent-google-play-logo-google-play-app-store-android-google-play-text-logo-sign-thumbnail.png" alt="Career Connection App Download" style={{ height: 40, marginRight: 10 }} />
                            <img src="https://w7.pngwing.com/pngs/822/688/png-transparent-apple-on-the-app-store-screenshot-iphone-app-store-google-play-store-electronics-text-logo-thumbnail.png" alt="Career Connection App Download" style={{ height: 40 }} />
                        </Box>
                    </FooterSection>
                </Box>
                <FooterText variant="body2">
                    &copy; 2024 Career Connection. All rights reserved.
                </FooterText>
            </FooterContent>
        </FooterContainer>
    );
}

export default Footer;
