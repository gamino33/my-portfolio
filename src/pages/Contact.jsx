import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import axios from "axios"
import {slackWebhookUrl} from "../data/slackWebhook";

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

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    };

    const sendSlack = async () => {
        if(name === "" || email === "" || message === ""){
            alert("必須項目が未入力です");
            return false;
        }

        const payload = {
            "text": `${name}さんからメッセージが届きました。\nメールアドレス: ${email} \nメッセージ内容: ${message}`
        }

        const res = axios.post(slackWebhookUrl , JSON.stringify(payload));
        console.log(res);
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
                        type={"text"}
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
        </>
    );
}

export default Contact;
