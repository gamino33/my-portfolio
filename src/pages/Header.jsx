import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles"
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar"
import {Link} from "react-router-dom"




const useStyles = makeStyles({
    tabBar: {
        backgroundColor: "#44546A",
        boxShadow: "none"
    },
    label: {
        color: "white",
        fontSize: "24px",
    },
})

const Header = () => {
    const classes = useStyles();
    const [index, setIndex] = useState(0);

    const handleChange = (event, value) => {
        setIndex(value);
    }

    return (
        <AppBar position="static" className={classes.tabBar}>
            <Tabs
                value={index}
                onChange={handleChange}
                centered={true}
                indicatorColor="primary"
            >
                <Tab component={Link} to="/home" label="Home"  className={classes.label}  />
                <Tab component={Link} to="/about" label="About"  className={classes.label}  />
                <Tab component={Link} to="/work" label="Work" className={classes.label} />
                <Tab component={Link} to="/skill" label="Skill"  className={classes.label}  />
                <Tab component={Link} to="/contact" label="Contact" className={classes.label} />
            </Tabs>
        </AppBar>
    );
}

export default Header;
