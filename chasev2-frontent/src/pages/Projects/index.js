import React from 'react'
import dater from '../../dater/dater.json'
import { Row, Col } from 'react-bootstrap'
import {
    ProjectsContainer,
    ProjectBlock,
    ProjectPageCard,
    ProjectSummary,
    ProjectImg,
    ProjectTitle,
    ProjectLink,
} from './ProjectsElements'

export default function ProjectsPage () {

    const projects = dater['projects']

    return (
        <ProjectsContainer>
            <Row style={{paddingRight: '40px'}}>
                {projects.map((project, index) => (
                    <Col xs={6}>
                        <ProjectPageCard>
                            <ProjectImg src={require("../../images/"+project['img_src'])} className="card-img-top img-fluid" />
                            <ProjectBlock>
                                <ProjectTitle className={'card-title'}>{project['title']}</ProjectTitle>
                                <ProjectSummary>{project['summary']}</ProjectSummary>
                                <ProjectLink href={'/#/projects/project/'+project['id']} className={"stretched-link"}></ProjectLink>
                            </ProjectBlock>
                        </ProjectPageCard>
                    </Col>
                ))}
            </Row>
        </ProjectsContainer>
    )
}