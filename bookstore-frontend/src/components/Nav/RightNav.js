import React, { useState } from "react";
import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        padding: 18px 10px;
    }

    @media (max-width: 768px) {
            flex-flow: column nowrap;
            background-color: black;
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 300px;
            padding-top: 3.5rem;
            transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
            transition: transform 0.3 ease-in-out;

        li {
            color: #ffff;
        }
    }
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li>Books</li>
            <li>MyBooks</li>
            <li>Add</li>
        </Ul>
)}

export default RightNav;