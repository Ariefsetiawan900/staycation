import React, { Component } from 'react'

import Header from '../parts/Header'

export default class LandingPage extends Component {
    render(props) {
        return (
            <>
             <Header {...this.props}></Header>   
            </>
        )
    }
}
