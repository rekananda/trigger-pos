"use client"
import React from 'react';
import {Container, Row} from "reactstrap";
import ProfileCards from "@/components/Dashboard/Education/ProfileCards";
import LectureCard from "@/components/Dashboard/Education/LectureCard";
import ProgressCards from "@/components/Dashboard/Education/ProgressCards";

const Education = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <ProfileCards/>
                    <LectureCard/>
                    <ProgressCards/>
                </Row>
            </Container>
        </>
    );
};

export default Education;