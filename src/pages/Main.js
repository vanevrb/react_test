import React from "react";
import { Container } from "react-bootstrap";
import {Routes, Route } from "react-router-dom";
import Cards from "./Cards";
import ListDog from "./ListDog";

const Main = () => (
    <main>
        <Container>
            <Routes>
                <Route exact path="/home" element={<Cards />} />
                <Route exact path="/dogs" element={<ListDog list={[{name:"pulgas"},{name:"barto"}]}/>} />
            </Routes>
        </Container>
    </main>
);
export default Main;