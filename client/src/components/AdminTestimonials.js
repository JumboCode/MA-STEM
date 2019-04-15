import React, { Component } from "react"; 
import { Container, Button } from 'semantic-ui-react';
import api from "../api"


export class StemProfessionals extends Component {
    constructor () {
        super()
        this.state = {}
    }

    componentDidMount() {
        console.log("Get request to: ", api.url + 'resources/')
        fetch(api.url + 'resources/', api.options.get)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            });
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