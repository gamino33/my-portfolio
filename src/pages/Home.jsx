import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    card: {
        width: "500px",
        height: "300px",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: "absolute",
        margin: "auto",
        textAlign: "center"
    },
});

const Home = () => {
    const classes = useStyles();

    return(
        <>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        閲覧ありがとうございます。
                        <br />
                        Reactで作成したポートフォリです。
                    </Typography>
                    <br />
                    <Typography>
                        About... 
                        <br />
                        Work... ~がかいてる
                        <br />
                        Skill... ~がかいてる
                        <br />
                        Contact... ~がかいてる。
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default Home;
