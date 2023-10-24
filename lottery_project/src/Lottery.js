import React, { Component } from 'react'

class Lottery extends Component {
    static  defaultProps = {
        title: "Lottery Game",
        maxBolls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props)
        this.state = {
            nums: Array.from({length: this.props.maxNum})
        }
        this.handleClick = this.handleClick.bind(this)
    }

    generete() {
        this.setState((currState) => ({
            nums: currState.nums.map((n) => 
            Math.floor(Math.random() * this.props.maxNum) + 1
            ),
        }))
    }

    handleClick() {
        this.generete()
    }
    render() {
        return(
            <section>
                <div>
                    <h1>{this.props.title}</h1>
                </div>
            </section>
        )
    }
}

export default Lottery