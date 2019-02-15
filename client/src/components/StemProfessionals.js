import React, { Component } from "react"; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


export class StemProfessionals extends Component {
    constructor () {
        super()
        this.state = { tabIndex: 0 }
    }

    componentDidMount() {
        /*
        console.log("Get request to: ", api.url + 'resources/')
        fetch(api.url + 'resources/', api.options.get)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            });

        */
    }

    render () {

        var profile = require('./example_testimonial.json')

        var numTabs = Object.values(profile)[3].length;

        var tabTitle = []
        var tabContent = []
        var name = Object.values(profile)[0]
        var jobTitle = Object.values(profile)[1]
        var company = Object.values(profile)[2]

        for (var i = 0; i < numTabs; i++) {

            var title = Object.values(profile)[3][i].title
            var content = Object.values(profile)[3][i].content

            tabTitle.push(<Tab> {title} </Tab>);
            tabContent.push(<TabPanel> {content} </TabPanel>);
        }

        return (
        	<div>
	            <h1> Professionals Testimonials </h1>
	            <h2> Discover How Real STEM Professionals Built Their Careers </h2>
                <h4> {name} </h4>
                <h5> {jobTitle} ~ {company} </h5>
	            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                
                <TabList>
                    {tabTitle}
                </TabList>

                {tabContent}

              </Tabs>

            </div>
        )
    }
}