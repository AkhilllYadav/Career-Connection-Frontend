import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { routePath } from "../routes/route";

const StyledAppBar = styled(AppBar)({
    background: '#6420AA',
    height: 64,
    '& > div > *': {
        marginRight: 20,
        fontSize: 14,
        color: 'inherit',
        textDecoration: 'none'
    }
});

const Logo = styled('img')({
    width: 95,
    marginBottom: 6,
    marginRight: 20,
});

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 16,
    fontWeight: 500,
    '&:hover': {
        textDecoration: 'underline',
    },
});

const Header = () => {
    const logo = "https://cdn.saffire.com/images.ashx?t=ig&rid=WesternFairsAssociation&i=Career_Connections_Logo(1).png";

    return (
        <StyledAppBar position="sticky">
            <Toolbar>
                <Link to={routePath.home}>
                    <Logo src={logo} alt="logo" />
                </Link>
                <StyledLink to={routePath.create}>
                    <Typography variant="body1">Post a job</Typography>
                </StyledLink>
                <StyledLink to={routePath.posts}>
                    <Typography variant="body1">Find jobs</Typography>
                </StyledLink>
            </Toolbar>
        </StyledAppBar>
    );
}

export default Header;
