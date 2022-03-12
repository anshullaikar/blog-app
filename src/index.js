import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { AppRootStyle } from "./styles/globalStyles";
ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <AppRootStyle />
            <App />
        </Fragment>
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();
