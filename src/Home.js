import React from 'react';
// import { Link } from 'react-router';

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <h2>Images</h2>
                <img src={require('./images/book_1.jpg')}/><br/>
                <img src={require('./images/book_2.jpg')}/>
            </div>
        )
    }
}