import React, { Component } from "react"; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./style.css";

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

        /*var backgrounds = [{background: "background: pink"}, {background: "background: orange"}, {background: "background: yellow"}, {background: "background: green"}, {background: "background: blue"}];
        */
        var colors = {
            "0": { background: "pink" }, 
            "1": { background: "orange" }, 
            "2": { background: "yellow" }, 
            "3": { background: "green" }, 
            "4": { background: "blue" } 
        };

        var currColor
        var tabTitle = []
        var tabContent = []
        var name = Object.values(profile)[0]
        var jobTitle = Object.values(profile)[1]
        var company = Object.values(profile)[2]

        for (var i = 0; i < numTabs; i++) {

            var title = Object.values(profile)[3][i].title
            var content = Object.values(profile)[3][i].content

            Object.keys(colors).forEach(function(key) {
                if (key === i.toString()) {
                    currColor = colors[key];
                }
                console.log(currColor)
            });

            

            tabTitle.push(<Tab style={{ currColor }}> {title} </Tab>);
            tabContent.push(<TabPanel className="tab-content"> {content} </TabPanel>);
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