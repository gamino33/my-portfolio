import { makeStyles } from "@material-ui/core";
import React from "react";
import WorkCard from "../components/WorkCard";

const useStyles = makeStyles({
    container: {
        width: "1170px",
        margin: "0 auto",
        "& h2": {
            marginBottom: "3px"
        }
    },
    flex: {
        dispaly: "flex",
        flexWrap: "wrap",
    }
})

const works = require("../data/work.json").data;

const Work = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes.container}>

                <h2>成果物</h2>
                <div className={classes.flex}>
                {works.work.map(work => {
                    return(
                        <WorkCard
                            key={work.id}
                            title={work.title}
                            imageUrl={work.imageUrl}
                            description={work.description}
                            url={work.url}
                        />
                    );
                })}
                </div>

                <h2>学習成果物</h2>
                <div className={classes.flex}>
                {works.learn.map(work => {
                    return(
                        <WorkCard
                            key={work.id}
                            title={work.title}
                            imageUrl={work.imageUrl}
                            description={work.description}
                            url={work.url}
                        />
                    );
                })}
                </div>

            </div>
        </>
    );
}

export default Work;
