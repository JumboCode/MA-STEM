import React, { Component } from "react"; 
import { Container, Button } from 'semantic-ui-react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import api from "../api"


export class StemProfessionals extends Component {
    constructor () {
        super()
        this.state = { tabIndex: 0 }
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

    var 

    render () {

        return (
        	<div>
	            <h1> Professionals Testimonials </h1>
	            <h2> Discover How Real STEM Professionals Built Their Careers </h2>

	            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList>
                  <Tab>Title 1</Tab>
                  <Tab>Title 2</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
              </Tabs>

            </div>
        )
    }
}