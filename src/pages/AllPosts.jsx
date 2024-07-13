import { useState, useEffect } from 'react';
import { Box, InputBase, Button, styled, Card, CardContent, Typography, Grid } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllPosts } from '../services/api';

const SearchContainer = styled(Box)({
    position: 'sticky',
    top: 70,
    zIndex: 1000,
    alignItems: 'center',
    background: 'transparent',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '@media(min-width: 600px)': {
        flexDirection: 'row',
        '& > div': {
            width: 500,
        },
        '& > div > div': {
            width: '85%',
            margin: '0 20px',
        }
    },
    '& > div': {
        width: '80%',
        height: 45,
        background: 'white',
        border: '1px solid #767676',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
    },
    '& > div > div': {
        width: '85%',
        margin: '0 10px',
    }
});

const FindButton = styled(Button)({
    background: '#6420AA',
    textTransform: 'none',
    height: 45,
    borderRadius: 10,
    width: '80%',
    '@media(min-width: 600px)': {
        width: 100,
        marginLeft: 20,
    }
});

const PostWrapper = styled(Grid)({
    display: 'flex',
    padding: 20,
    justifyContent: 'center',
    marginTop: 50,
    '& > div': {
        // border: '1px solid #d4d2d0',
        borderRadius: 10,
        margin: 10,
        width: '100%',
        '@media(min-width: 600px)': {
            width: '45%',
        },
        '@media(min-width: 900px)': {
            width: '30%',
        },
    }
});

const StyledCard = styled(Card)({
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    '& .MuiCardContent-root': {
        padding: '20px 20px 10px',
    }
});

const StyledTypography = styled(Typography)({
    fontWeight: 600,
});

const StyledButton = styled(Button)({
    marginTop: 20,
    backgroundColor: '#6420AA',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#511d8e',
    }
});

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        const getData = async () => {
            const response = await getAllPosts();
            setPosts(response.data);
        }
        getData();
    }, []);

    return (
        <>
            <Header />
            <SearchContainer>
                <Box>
                    <InputBase 
                        placeholder='Job title'
                        onChange={(e) => setText(e.target.value)}
                    />
                    <SearchIcon />
                </Box>
                <FindButton variant="contained">Find Jobs</FindButton>
            </SearchContainer>
            <PostWrapper container spacing={2}>
                {
                    posts.filter(post => post.profile.toLowerCase().includes(text.toLowerCase())).map(post => (
                        <Grid item key={post._id}>
                            <StyledCard>
                                <CardContent>
                                    <StyledTypography variant="h5">{post.profile}</StyledTypography>
                                    <Typography variant="body2" color="textSecondary">{post.type === "Offline" ? "Remote" : "Office"}</Typography>
                                    <Typography variant="body2" color="textSecondary">Salary: {post.salary}</Typography>
                                    <Typography variant="body2" color="textSecondary" style={{ margin: '10px 0' }}>
                                        {post.description.length > 150 ? post.description.substring(0, 150) + "..." : post.description}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary"><b>Experience</b>: {post.experience}</Typography>
                                    <Typography variant="body2" color="textSecondary"><b>Technology</b>: {post.technology}</Typography>
                                    <Typography variant="body2" color="textSecondary" style={{ marginTop: 'auto' }}>
                                        posted on {new Date(post.createdAt).toLocaleDateString()}
                                    </Typography>
                                    <StyledButton variant='contained' href={post.joburl} target='_blank'>Apply Now</StyledButton>
                                </CardContent>
                            </StyledCard>
                        </Grid>
                    ))
                }
            </PostWrapper>
       
            <Footer/>
        </>
        
    );
}

export default AllPosts;
