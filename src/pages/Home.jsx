import Header from '../components/Header';
import { Box, Typography, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../routes/route';
import Footer from '../components/Footer';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 20px',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        margin: '0 110px',
    },
    '& > div': {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
        [theme.breakpoints.up('md')]: {
            width: '50%',
            marginBottom: 0,
        },
        '& > div > p': {
            fontSize: 36,
            lineHeight: 1.25,
            letterSpacing: -1,
            [theme.breakpoints.up('md')]: {
                fontSize: 56,
            },
        },
        '& > div > button': {
            width: 180,
            height: 50,
            background: '#6420AA',
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 700,
            marginTop: 24,
            [theme.breakpoints.up('md')]: {
                width: 220,
                height: 60,
                marginTop: 48,
            },
        }
    }
}));

const Home = () => {    
    const navigate = useNavigate();
    const animatedImage = "https://cdn3d.iconscout.com/3d/premium/thumb/businessman-taking-interview-4616334-3846821.png?f=webp";

    return (
        <>
            <Header /> {/* Ensure Header is rendered only once here */}
            <Component>
                <Box>
                    <Box>
                        <Typography>Let's make your next<br/>great hire. Fast.</Typography>
                        <Button 
                            variant="contained"
                            onClick={() => navigate(routePath.create)}
                        >Post a job</Button>
                    </Box>
                </Box>       
                <Box>
                    <img src={animatedImage} alt="homeimage" style={{ width: '100%', maxWidth: 600 }} />
                </Box>
            </Component>
            {/* <AllPosts /> */}
            <Footer/>
            
        </>
    );
}

export default Home;
