import React from "react";
import './loading.css';

const Loading = () => {
    return(
        <div className="container-spinner">
            <div class="lds-facebook"><div></div><div></div><div></div></div>
            <div className="sap">sAp</div>
            <p className="motto-sap">Always help.</p>
        </div>
    )
}

export default Loading;