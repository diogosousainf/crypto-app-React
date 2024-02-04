import React from 'react';
import CoinItem from './CoinItem';

const Coins = (props) => {
    return (
        <div className='container'>
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {props.coins.map((coin) => {
                    return (
                        <div className='coin-row' key={coin.id}>
                            <p>{coin.market_cap_rank}</p>
                            <div className='img-symbol'>
                                <img src={coin.image} alt='crypto' />
                                <p>{coin.symbol}</p>
                            </div>
                            <p>${coin.current_price}</p>
                            <p>${coin.price_change_percentage_24h}</p>
                            <p className='hide-mobile'>${coin.total_volume}</p>
                            <p className='hide-mobile'>${coin.market_cap}</p>
                        </div>
                    )
                })}

            </div>
           
        </div>
    )
    }

export default Coins;