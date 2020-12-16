import React, { useEffect } from "react";
import Navbar from '../mutuals/navbar';
import Footbar from '../mutuals/footbar';


function App(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
const {history} = props;
    return (
        <main className="main">
            <Navbar history = {history} />
            <React.Fragment>{props.children}</React.Fragment>
           
            <Footbar/>
        </main>
    );
}

export default App;