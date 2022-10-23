import React, { useEffect } from "react";
import { useSelector } from "react-redux";


const Homepage = () => {
    const data = useSelector((state) => state.products)
    console.log(data)
    return (
        <h1>Home page</h1>
    )
}


export {Homepage}