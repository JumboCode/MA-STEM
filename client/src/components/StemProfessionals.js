import React, { Component } from "react"; 
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



    renderTabs() {
        var profile = {
            "name": "Don Jordan",
            "job_title": "Principal Hardware Engineer",
            "company": "Raytheon Company",
            "testimonials": [
                { "title": "My Field",
                  "content": "I work in Electrical Engineering. We work on everything from communications, to computers, to energy production, to robotics, to instrumentation for industry, science and space exploration."
                }, {
                    "title": "My Education",
                    "content": "I needed at least a Bachelor Degree to be able to design projects. A Master's degree gave me a better foundation to be able to do analysis and more advanced design."
                }, {
                    "title": "My Struggles with Stem",
                    "content": "One word - math. Until I hit high school physics and chemistry, and in some cases college courses, I had no connection between the math and what it could be used for...[or what] I wanted to build."
                }, {
                    "title": "Early Interest",
                    "content": "I loved building model airplanes, boats, and woodworking projects with my Dad. He taught me how to camp, fish, and hunt, as well... I fell in love with the original NASA space program in the 1960s. I was pretty much glued to the TV for every space mission from the original Mercury and satellite programs to the first Space Shuttle."
                }, {
                    "title": "quote",
                    "content": "It needs to be fun. You need to be curious and willing to explore in order to learn about how the world works and how you can build things. It doesn't have to be about building stuff..detecting patterns in nature, information, systems, can be just as satisfying as building a rocket or the next computer app...The aha moments are the best, and you always feed on those. I've had to work on some problems for days, weeks, or months, but that 'aha' moment when the light turns on and you suddenly see it work, or you find the pattern you've been struggling to find, it's all worth it."
                }
            ]
        }

        for (var i = 0; i < profile.length; i++) {

        }
    }

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