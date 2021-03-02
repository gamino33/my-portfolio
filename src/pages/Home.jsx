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
    },
    text: {
        fontSize: "20px"
    }
});

const Home = () => {
    const classes = useStyles();

    return(
        <>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2"　align="center">
                        閲覧ありがとうございます。
                        <br />
                        Reactで作成したポートフォリです。
                    </Typography>
                    <br />
                    <Typography className={classes.text} component="p" align="left">
                        About... 簡単なプロフィール
                        <br />
                        Work... 成果物、ハンズオン形式の教材での制作物
                        <br />
                        Skill... スキルの自己評価
                        <br />
                        Contact... 連絡はこちらから
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default Home;
