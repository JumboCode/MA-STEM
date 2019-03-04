import React, { Component } from "react"; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button } from 'semantic-ui-react'
import "./style.css";

const pink  = {
    background: "#E830E1",
};

const orange  = {
    background: "#E8AB30",
};

const yellow  = {
    background: "#E8D330",
};

const green  = {
    background: "#30E870",
};

const blue  = {
    background: "#30E8E8",
};


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
        const leftButton = () => <Button icon="angle left" align="left"></Button>

        var allProfiles = require('./example_testimonial.json')
        var numProfiles = allProfiles.length
        var colors = [pink, orange, yellow, green, blue];
        var tabTitle = []
        var tabContent = []
        var numTabs
        var profile
        var name
        var jobTitle
        var company
        var title
        var content
        var currProfile = 0 

        // for (var i = 0; i < 2; i++) {
        //     profile = allProfiles[i];
        //     name = Object.values(profile)[0]
        //     jobTitle = Object.values(profile)[1]
        //     company = Object.values(profile)[2]
        //     numTabs = Object.values(profile)[3].length

        //     for (var i = 0; i < numTabs; i++) {
        //         title = Object.values(profile)[3][i].title
        //         content = Object.values(profile)[3][i].content
        //         tabTitle.push(<Tab style={ colors[i] }> {title} </Tab>);
        //         tabContent.push(<TabPanel style={ colors[i] } className="tab-content"> {content} </TabPanel>);
        //     }
        // }

        function nextProfile(curr) {
            console.log("currProfile=" + curr)

            tabTitle = []
            tabContent = []

            profile = allProfiles[curr];
            name = Object.values(profile)[0]
            jobTitle = Object.values(profile)[1]
            company = Object.values(profile)[2]
            numTabs = Object.values(profile)[3].length

            for (var i = 0; i < numTabs; i++) {
                title = Object.values(profile)[3][i].title
                content = Object.values(profile)[3][i].content
                tabTitle.push(<Tab style={ colors[i] }> {title} </Tab>);
                tabContent.push(<TabPanel style={ colors[i] } className="tab-content"> {content} </TabPanel>);
            }
        }

        return (
            <div>
                <img className="heading" id="heading" alt="heading" src={require("../images/ptHeading.png")}/>
                
                <div className="containter">

                    <Button className="button-left" icon="angle left"></Button>

                    <div className="profile">
                        <h4 className="name"> {name} </h4>
                        <h5 className="job-comp"> {jobTitle}  ●  {company} </h5>

                        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                            <TabList> {tabTitle} </TabList>
                            {tabContent}
                        </Tabs>
                    </div>

                    <Button onClick={nextProfile(currProfile++)} className="button-right" icon="angle right"></Button>

                </div>

            </div>
        )
    }
}