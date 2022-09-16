import React, { Component } from 'react'
import { createPortal } from 'react-dom';

export default class Neew extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        console.log('mounted');
    }
    render() {
        return (
            createPortal(this.props.children, document.querySelector("body"))
        )
    }
}
