"use client"
import React from 'react';
import {Container, Row} from "reactstrap";
import CoinsCard from "@/components/Dashboard/Crypto/CoinsCard";
import RecentData from "@/components/Dashboard/Crypto/RecentData";
import TotalGrowth from "@/components/Dashboard/Crypto/TotalGrowth";

const Crypto = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <CoinsCard/>
                    <RecentData/>
                    <TotalGrowth/>
                </Row>
            </Container>
        </>
    );
};

export default Crypto;