import React, { useEffect, useState } from "react";
import axios from "axios";
import * as client from "./client";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function HttpClient() {
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

    const fetchWelcomeOnClick = async () => {
        const welcome = await client.fetchWelcomeMessage();
        setWelcomeOnClick(welcome.data);
    };

    const fetchWelcomeOnLoad = async () => {
        const welcome = await client.fetchWelcomeMessage();
        setWelcomeOnClick(welcome.data);
    };

    useEffect(() => {
        fetchWelcomeOnLoad();
    }, []);

    return (
        <div>
            <h3>HTTP Client</h3> <hr />
            <h4>Requesting on Click</h4>
            <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
                Fetch Welcome
            </button> <br />
            Response from server: <b>{welcomeOnClick}</b>
            <br />
            Response from server on load: <b>{welcomeOnLoad}</b>
        </div>
    );
}