import React from 'react';
import CardItem from './CardItem';
import './Cards.css' ;
function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Projects!</h1>
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                        src="./images/img-9.jpg"
                        text="Explore the hidden talent deep inside your brain while watchingt the nature."
                        label='Talent'
                        path='/services'
                    
                    />
                    <CardItem
                        src="./images/img-2.jpg"
                        text="Explore the hidden talent deep inside your brain while watchingt the nature."
                        label='Talent'
                        path='/services'
                    
                    />
                    <CardItem
                        src="./images/img-3.jpg"
                        text="Explore the hidden talent deep inside your brain while watching the nature."
                        label='Talent'
                        path='/services'
                    
                    />
                </ul>
                
            </div>

            <h5>Copyright@Karmanya</h5>
        </div>
    )
}

export default Cards
