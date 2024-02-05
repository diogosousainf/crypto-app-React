import React from 'react';
import CoinItem from './CoinItem';
import Coin from '../routes/Coin';
import { Link } from 'react-router-dom';

import './Coins.css';

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
                        <Link to={`/coins/${coin.id}`} element={<Coin />} key={coin.id}>
                            <CoinItem coins={coin} />
                        </Link>)
                })}
            </div>  
        </div>
    )
    }

export default Coins;