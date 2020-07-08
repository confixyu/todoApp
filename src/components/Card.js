import React from 'react';
import Card from 'react-bootstrap/Card';

function Box({ item }){
    return(
        <Card className="d-inline-block g-card">
            <h4>{ item.title }</h4>
            <p>{ item.title }</p>
            <p>{ item.state }</p>
        </Card>
    );
}

export default Box;