import React from "react";
import {makeStyles} from "@material-ui/styles";
import SkillCard from "../components/SkillCard";

const skillList = require("../data/skill.json").data;

const useStyles = makeStyles({
    container: {
        width: "1170px",
        margin: "0 auto",
        "& h2": {
            marginBottom: "2px"
        }
    },
    flex: {
        dispaly: "flex",
        flexWrap: "wrap",
    }
});


const Skill = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes.container}>
                <h2>言語</h2>
                <div className={classes.flex}>
                    {skillList.languages.map((language) => {
                        return(
                            <SkillCard
                                key={language.id}
                                name={language.name}
                                description={language.description}
                            />
                        );
                    })}
                </div>

                <h2>フレームワーク/ライブラリ</h2>
                <div className={classes.flex}>
                    {skillList.frameworks.map((framework) => {
                        return(
                            <SkillCard
                                key={framework.id}
                                name={framework.name}
                                description={framework.description}
                            />
                        );
                    })}
                </div>

                <h2>ツールなど</h2>
                <div className={classes.flex}>
                    {skillList.tools.map((tool) => {
                        return(
                            <SkillCard
                                key={tool.id}
                                name={tool.name}
                                description={tool.description}
                            />
                        );
                    })}
                </div>
            </div>

        </>
    );
}

export default Skill;
