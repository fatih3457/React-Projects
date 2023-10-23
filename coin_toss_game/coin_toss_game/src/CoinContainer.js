import React, { Component } from 'react'
import { choice } from './Helpers'
import Coin from './Coin'
import './CoinContainer.css'

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {
                side: "heads",
                imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png"
            },
            {
                side: "tails",
                imgSrc: "https://play-lh.googleusercontent.com/XqQPFaIqg5vEiB316LM5eOHThuZHt1ZIVleJ0_hX4LrhJdG6le951ybCszG0w5AKl_-i"
            },
        ],
    }
    constructor(props) {
        super(props)
        this.state = {
          currCoin: null,
          nFlips: 0,
          nHeads: 0,  
          nTails: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin() {
        const newCoin = choice(this.props.coins)
        this.setState((st) => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0 ),
                nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0 ),
            }
        })
    }

    handleClick(e) {
        this.flipCoin()
    }
    render() {
        return (
            <div className='CoinContainer'>
                <h1>Coin Toss Game</h1>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <button onClick={this.handleClick}>Toss!</button>
                <p>
                   Yapilan toplam firlatma {this.state.nFlips}, bunlarin {' '}
                    {this.state.nHeads} tanesi yazı ve {this.state.nTails} tanesi de turadir.  
                </p>
            </div>
        )
    }
}

export default CoinContainer