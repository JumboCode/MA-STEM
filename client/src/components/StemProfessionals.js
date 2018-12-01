import React, { Component } from "react"; 
import api from "../api"

export class StemProfessionals extends Component {
    constructor () {
        super()
        this.state = {}
    }

    componentDidMount() {
        fetch(api.url + 'resources', api.options.get)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            });
    }

    render () {

        return (
            <h1> Stem Professionals </h1>
        )
    }
}