import React, { Component } from "react"; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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

        var profile = require('./example_testimonial.json')
        var numTabs = Object.values(profile)[3].length;

        var colors = [pink, orange, yellow, green, blue];

        var tabTitle = []
        var tabContent = []
        var name = Object.values(profile)[0]
        var jobTitle = Object.values(profile)[1]
        var company = Object.values(profile)[2]

        for (var i = 0; i < numTabs; i++) {

            var title = Object.values(profile)[3][i].title
            var content = Object.values(profile)[3][i].content
            var colorClass = 'pink'
            //var colorClass += colors[i]
            console.log(colorClass)

            tabTitle.push(<Tab style={ colors[i] }> {title} </Tab>);
            tabContent.push(<TabPanel style={ colors[i] } className="tab-content"> {content} </TabPanel>);
        }

        return (
            <div>
                <img className="heading" id="heading" alt="heading" src={require("../images/ptHeading.png")}/>
                <div className="profile">
                    <h4 className="name"> {name} </h4>
                    <h5 className="job-comp"> {jobTitle}  ●  {company} </h5>

                    <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                        <TabList> {tabTitle} </TabList>
                        {tabContent}
                    </Tabs>
                </div>
            </div>
        )
    }
}