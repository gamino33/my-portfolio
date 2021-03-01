import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import axios from "axios"
import {slackWebhookUrl} from "../data/slackWebhook";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
    card: {
        width: "450px",
        height: "550px",
        margin: "auto",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: "absolute",
        textAlign: "center",
        borderRadius: "5px"
    },
    button: {
        marginTop: "12px",
        fontSize: "18px"
    }
});

const Contact = () => {
    const classes = useStyles();
    const [name, setName] = useState(""),
          [email, setEmail] = useState(""),
          [message, setMessage] = useState("");

    const [successBar, setSuccessBar] = useState(false),
          [errorBar, setErrorBar] = useState(false);

    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleCloseSuccessBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessBar(false);
    };

    const handleCloseErrorBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setErrorBar(false);
    };

    const sendSlack = () => {
        //validation
        if(name === "" || email === "" || message === ""){
            alert("必須項目が未入力です");
            return false;
        }

        //data
        const payload = {
            "text": `${name}さんからメッセージが届きました。\nメールアドレス: ${email} \nメッセージ内容: ${message}`
        }

        //send
        axios.post(slackWebhookUrl , JSON.stringify(payload))
            .then(() =>{
                setSuccessBar(true);
            })
            .catch(error => {
                setErrorBar(true);
                console.log(error)
            })
    }

    return(
        <>
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h4" component="h1" align="center">
                    Contact
                </Typography>
                <form autoComplete="off">
                    <TextField
                        fullWidth={true}
                        label={"お名前"}
                        margin="dense"
                        multiline={false}
                        required={true}
                        rows={1}
                        value={name}
                        type={"text"}
                        onChange={handleChangeName}
                        variant={"outlined"}
                    />
                    <TextField
                        fullWidth={true}
                        label={"メールアドレス"}
                        margin="dense"
                        multiline={false}
                        required={true}
                        rows={1}
                        value={email}
                        type={"email"}
                        onChange={handleChangeEmail}
                        variant={"outlined"}
                    />
                    <TextField
                        fullWidth={true}
                        label={"メッセージ"}
                        margin="dense"
                        multiline={true}
                        required={true}
                        rows={15}
                        value={message}
                        type={"text"}
                        onChange={handleChangeMessage}
                        variant={"outlined"}
                    />
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={() => sendSlack()}
                    >
                        送 信
                    </Button>
                </form>
            </CardContent>
        </Card>
        <Snackbar open={successBar} autoHideDuration={6000} onClose={handleCloseSuccessBar}>
            <Alert onClose={handleCloseSuccessBar} severity="success">
                メッセージを送信できました。
            </Alert>
        </Snackbar>
        <Snackbar open={errorBar} autoHideDuration={6000} onClose={handleCloseErrorBar}>
            <Alert onClose={handleCloseErrorBar} severity="error">
                エラーが発生しました。もう一度お試しください。
            </Alert>
        </Snackbar>
        </>
    );
}

export default Contact;
