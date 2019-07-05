import React, {Component} from "react"

import "./hamburger.css"
class HamBurger extends Component{
    render(){
        return(
            <button className="hamburger hamburger--slider js-hamburger">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>   
            </button>
        )
    }
}

export default HamBurger