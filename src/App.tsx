import React, {ReactElement} from "react";
import "./App.css";
import MainContainer from "./components/containers/mainContainer";

function App(): ReactElement {
    return (
        <div className="grid">
            <MainContainer />
        </div>
    );
}

export default App;
