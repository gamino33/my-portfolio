import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    card: {
        minWidth: 345,
        marginBottom: "12px",
        marginRight:"24px",
        display: "inline-block",
    },
    media: {
        height: "180px",
    },
});


const WorkCard = (props) => {
    const classes = useStyles();
    const {title, imageUrl, description, url} = props;

    return(
        <>
            <Link href={url} target="blank">
            <Card className={classes.card} >
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title={title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Link>
        </>
    );
};

export default WorkCard;
