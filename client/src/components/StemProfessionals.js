import React, { Component } from "react"; 
import { Container, Button } from 'semantic-ui-react';

export class StemProfessionals extends Component {
    constructor () {
        super()
        this.state = {}
    }

    render () {
        return (
        	<div>
	            <h1> Professionals Testimonials </h1>
	            <h2> Discover How Real STEM Professionals Built Their Careers </h2>
	            <Container>
	            	Pathways
	            </Container>
	            <Button icon="angle left" align="left"></Button>
	            <Button icon="angle right" align="right"></Button>
            </div>
        )
    }
}