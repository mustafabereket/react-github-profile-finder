import React, { Fragment} from "react";
import spinner from "../assets/spinner.gif"


function Spinner() {

    return (
        <Fragment>
            <img src={spinner} alt='Loading' />
        </Fragment>
    )
}

export default Spinner;
