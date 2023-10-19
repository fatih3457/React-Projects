import React, { Component } from 'react'

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {
                side: "tails",
                imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png"
            },
            {
                side: "heads",
                imgSrc: "https://play-lh.googleusercontent.com/XqQPFaIqg5vEiB316LM5eOHThuZHt1ZIVleJ0_hX4LrhJdG6le951ybCszG0w5AKl_-i"
            },
        ],
    }
    constructor(props) {
        super(props)
        this.state = {
          currCoin: null,
          nFlips: 0,
          nTails: 0,
          nHeads: 0,  
        }
    }
    render() {
        return (
            <div>
                <h1>Coin Toss Game</h1>
            </div>
        )
    }
}

export default CoinContainer