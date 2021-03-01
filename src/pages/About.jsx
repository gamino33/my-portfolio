import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    card: {
        display: "grid",
        gridTemplateRows: "repeat(5, 20%)",
        gridTemplateColumns: "repeat(4, 25%)",
        width: "500px",
        height: "300px",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: "absolute",
        margin: "auto",
    },
    titleArea: {
        gridRow: "1/1",
        gridColumn: "1/5",
    },
    iconArea: {
        gridRow: "2/6",
        gridColumn: "1/3",
    },
    icon: {
        width: "200px",
        height: "200px",
        margin: "0 auto"
    },
    textArea: {
        gridRow: "2/6",
        gridColumn: "3/5",
    },
    text: {
        fontSize: "20px",
        marginTop: "20px"
    }
})

const About = () => {
    const classes = useStyles();

    return(
        <>

        <Card className={classes.card}>
            <CardContent className={classes.titleArea}>
                <Typography variant="h5" component="h2" align="center">
                    About Me
                </Typography>
            </CardContent>
            <CardContent className={classes.iconArea}>
                <Avatar className={classes.icon} alt="Profile Icon" src="/images/profileicon.png" />
            </CardContent>
            <CardContent className={classes.textArea}>
                <Typography className={classes.text} component="p" >
                    Name: 野上 貴行
                    <br />
                    Birthday: 1998/03/03
                    <br />
                    Github: <Link href="https://github.com/gamino33" target="blank">gamino33</Link>
                    <br />
                    AtCoder: 茶色<Link href="https://atcoder.jp/users/gamino" target="blank">gamino</Link>
                    <br />
                    Paiza: Aランク
                    <br />
                </Typography>
            </CardContent>
        </Card>

        </>
    );
}

export default About;
