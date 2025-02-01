// Pages/Home.jsx

import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Product_card from "./Product_cart";

const items = [
    {
        id: 1,
        title: "GeeksForGeeks bag",
        price: 109.95,
        description:
            "Your perfect pack for everyday use and walks in the forest.",
        category: "bag",
        image: "https://practice.geeksforgeeks.org/_next/image?url=https%3A%2F%2Fmedia.geeksforgeeks.org%2Fimg-practice%2FMaskGroup31-1651641966.png&w=640&q=75",
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 2,
        title: "GeeksForGeeks tshirt",
        price: 22.3,
        description: "Slim-fitting style,black tshirt. From geeksforgeeks",
        category: "men's clothing",
        image: "https://practice.geeksforgeeks.org/_next/image?url=https%3A%2F%2Fmedia.geeksforgeeks.org%2Fimg-practice%2FGroup7895-1651644285.png&w=640&q=75",
        rating: {
            rate: 4.1,
            count: 259,
        },
    },
];

const Home = () => {
    return (
        <div>
            <Link to={"/cart"}>
                <FaCartArrowDown size={40} color="#35D841" />
            </Link>
            <div
                style={{
                    display: "Flex",
                    justifyContent: "space-around",
                }}
            >
                {items.map((dataObj, index) => {
                    return <Product_card dataObj={dataObj} />;
                })}
            </div>
        </div>
    );
};

export default Home;
