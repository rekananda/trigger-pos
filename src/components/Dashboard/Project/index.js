"use client"
import React from 'react';
import {Container, Row} from "reactstrap";
import ProjectStatusCard from '@/components/Dashboard/Project/ProjectStatusCard';
import ActivityCards from '@/components/Dashboard/Project/ActivityCards';
import ProjectsTable from '@/components/Dashboard/Project/ProjectsTable';

const Project = () => {
    return (
        <Container fluid>
            <Row>
                <ProjectStatusCard/>
                <ActivityCards/>
                <ProjectsTable/>
            </Row>
        </Container>
    );
};

export default Project;