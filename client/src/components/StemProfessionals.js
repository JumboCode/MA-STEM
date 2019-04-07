import ReactDOM from 'react-dom';
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
        this.state = { 
                tabIndex: 0, 
                profile: 0 }
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

        //makes sure profile number stays in range
        if (this.state.profile >= allProfiles.length) {
            this.state.profile = 0;
        } else if (this.state.profile < 0) {
            this.state.profile = allProfiles.length - 1;
        }

        //creates profile
        profile = allProfiles[this.state.profile];
        name = Object.values(profile)[0]
        jobTitle = Object.values(profile)[1]
        company = Object.values(profile)[2]
        numTabs = Object.values(profile)[3].length

        //creates tabs 
        for (var i = 0; i < numTabs; i++) {
            title = Object.values(profile)[3][i].title
            content = Object.values(profile)[3][i].content
            tabTitle.push(<Tab style={ colors[i] }> {title} </Tab>);
            tabContent.push(<TabPanel style={ colors[i] } className="tab-content"> {content} </TabPanel>);
        }
             
        return (
            <div>
                <img className="heading" id="heading" alt="heading" src={require("../images/ptHeading.png")}/>
                
                <div className="containter">

                    <img onClick={()=>{ this.setState({ profile : this.state.profile - 1 }) }} className="button-left" alt="button-left" src={require("../images/left-arrow.png")}/>
                    <div className="profile">
                        <h4 className="name"> {name} </h4>
                        <h5 className="job-comp"> {jobTitle}  ●  {company} </h5>

                        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                            <TabList> {tabTitle} </TabList>
                            {tabContent}
                        </Tabs>
                    </div>

                    <img onClick={()=>{ this.setState({ profile : this.state.profile + 1 }) }} className="button-right" alt="button-right" src={require("../images/right-arrow.png")}/>
                    
                </div>

            </div>
        )
    }
}