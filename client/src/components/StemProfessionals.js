import React, { Component } from "react"; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./style.css";
import Right_arrow from "../images/right-arrow.png";
import Left_arrow from "../images/left-arrow.png";
import Pt_heading from "../images/ptHeading.png";
import Example_testimonials from './example_testimonial.json'
import api from "../api"


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
            profileIndex: 0,
            allProfiles: Example_testimonials
        }
    }

    componentDidMount() {
        fetch(api.url + 'testimonials/', api.options.get)
            .then(res => {
                return res.json();
            }).then(data => {
                this.setState({allProfiles: data});
            }).catch(err => {
                console.log(err);
            });   
    }

    render () {
        const { tabIndex, profileIndex, allProfiles } = this.state;
        var numProfiles = allProfiles.length;
        var colors = [pink, orange, yellow, green, blue];
        var tabTitle = [], tabContent = [];

        //creates profile
        const profile = allProfiles[profileIndex];
        const { name, job_title, company, testimonials } = profile;

        //creates tabs 
        testimonials.forEach((t, i) => { 
            tabTitle.push(<Tab style={ colors[i] } key={i}> {t.title} </Tab>);
            tabContent.push(<TabPanel style={ colors[i] } className="tab-content" key={i}> {t.content} </TabPanel>);
        });
             
        return (
            <div>
                <img className="heading" id="heading" alt="heading" src={Pt_heading}/>
                
                <div className="containter">

                    <img onClick={() => {this.setState({ profileIndex : profileIndex == 0? numProfiles - 1: profileIndex - 1})}}
                         className="button-left" alt="button-left" src={Left_arrow}/>
                    <div className="profile">
                        <h4 className="name"> {name} </h4>
                        <h5 className="job-comp"> {job_title}  ●  {company} </h5>
                        <Tabs selectedIndex={tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                            <TabList> {tabTitle} </TabList>
                            {tabContent}
                        </Tabs>
                    </div>

                    <img onClick = {() => { this.setState({ profileIndex : (profileIndex + 1) % numProfiles}) }}
                         className="button-right" alt="button-right" src={Right_arrow}/>
    
                </div>
            </div>
        )
    }
}