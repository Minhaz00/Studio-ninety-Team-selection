import React from 'react';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faMailBulk, faServer} from '@fortawesome/free-solid-svg-icons'
//=======================================
//       Showing profiles of Candidates
//=======================================  
const Profile = (props) => {
    // console.log(props);
    const { name, age, University, Value, img, skill } = props.candidate;
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const element1 = <FontAwesomeIcon icon={faMailBulk} />
    const element2 = <FontAwesomeIcon icon={faServer} />
    return (
        <div className='profile'>
            <img src={img} alt="" />
            <div className='profile-text'>
                <h3>Name: {name}</h3>
                <p>Age: {age}</p>
                <p>University: {University}</p>
                <p>Salary: {Value}</p>
                <p>Skill: {skill}</p>
                <button
                    onClick={()=>props.handleAddToCart(props.candidate)}
                    className='hire-btn'>{userIcon} Hire Me
                </button>
                <div className='social'>
                    <h2>{element1}</h2>
                    <h2>{element2}</h2>
                </div>
            </div>

        </div>
    );
};

export default Profile;