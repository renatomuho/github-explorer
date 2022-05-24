import React from 'react'
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
// import {useEffect} from "react";

const Home = () => {

    return (
        <h3>
            {/*<Home/>*/}
            <UserSearch/>
            <UserResults/>
        </h3>
    )
}

export default Home