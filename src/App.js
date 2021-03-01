import React from "react";
import {Header, Home, About, Work, Skill, Contact} from "./pages";
import {makeStyles} from "@material-ui/styles";
import {Redirect, Route} from "react-router-dom";

const useStyles = makeStyles({
    bg: {
        backgroundColor: "#5B9D5",
    }
})

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.bg}>
            <Header />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/skill" component={Skill} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
        </div>
    );
}

export default App;
