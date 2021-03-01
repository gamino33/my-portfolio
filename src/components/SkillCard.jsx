import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    card: {
        width: "250px",
        height: "150px",
        marginBottom: "12px",
        marginRight:"24px",
        display: "inline-block",
        borderRadius: "10px",
        textAlign: "center",
    }
});

const SkillCard = (props) => {
    const classes = useStyles();

    return(
        <>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default SkillCard;
