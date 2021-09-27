import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import './Candidates.css'
const Candidates = () => {
    const [candidates, setCandidates] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./generated.json')
        .then(res => res.json())
        .then(data => setCandidates(data))
    }, [])
    
    const handleAddToCart = (candidate) => {
        const newCart = [...cart, candidate];
        setCart(newCart);
    }

    return (
        <div className='candidates-container'>
            <div className='candidate'>
                {
                    candidates.map(candidate => <Profile
                        key={candidate.id}
                        candidate={candidate}
                        handleAddToCart = {handleAddToCart}>
                    </Profile>)
                }
            </div>
            <div>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Candidates;