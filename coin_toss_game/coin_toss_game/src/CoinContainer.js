import React, { Component } from 'react'
import { choice } from './Helpers'

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
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin() {
        const newCoin = choice(this.props.coins)
        this.setState((st) => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + 1,
                nTails: st.nTails + 1,
            }
        })
    }

    handleClick(e) {
        this.flipCoin()
    }
    render() {
        return (
            <div>
                <h1>Coin Toss Game</h1>
                <button onClick={this.handleClick}>Toss!</button>
                <p>
                   Yapilan toplam firlatma {this.state.nFlips}, bunlarin {' '}
                    {this.state.nTails} ve {this.state.nHeads} tanesi de turadir.  
                </p>
            </div>
        )
    }
}

export default CoinContainer