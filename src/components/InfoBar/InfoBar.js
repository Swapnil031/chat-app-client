import React from 'react';

import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'

import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className='infoBar'>
        <div className='leftInnerContainer'>
            <img className='onlineIcon' src={onlineIcon} alt='onlineIcon' title='Online'/>
            <h3>{room}</h3>
        </div>
        <div className='rightInnerContainer'>
            <a href='/chat-app-client/'><img src={closeIcon} alt="closeIcon" title='Leave Room' /></a>
        </div>
    </div>
)

export default InfoBar;