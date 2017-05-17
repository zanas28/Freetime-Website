import React from 'react';

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <img src={require('./images/book_1.jpg')}/>
                <img src={require('./images/book_2.jpg')}/>
            </div>
        )
    }
}