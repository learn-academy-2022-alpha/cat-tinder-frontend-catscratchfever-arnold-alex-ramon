// import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'

// class CatIndex extends Component {
//     render() {
//         let catProps = this.props.cats
//         return(
//             <>
//                 <h2>Find the purrrfect cat'ch!</h2>
//                 {this.props.cats && this.props.cats.map(cat => {
//                     return(
//                     <NavLink to={`/catshow/${cat.id}`}> 
//                         {cat.name}
//                     </NavLink>
//                     )
//                 })}
//             </>
//         )
//     }
// }
// export default CatIndex

import React, {Component} from "react";

import {Card, CardBody, CardSubtitle, CardText, CardTitle, Col} from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class CatIndex extends Component {
    render() {
        let catProps = this.props.cats
        return(
            <>
                <h2>Find the purrrfect cat'ch!</h2>
                <br />
                <Col sm="6">
                    {catProps && catProps.map(cat => {
                        return(
                            <div>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            <NavLink to={`/catshow/${cat.id}`}>
                                                {cat.name}
                                            </NavLink>
                                        </CardTitle>
                                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                                            {cat.enjoys}
                                        </CardSubtitle>
                                    </CardBody>
                                    <img alt="Card image cap"
                                         src={cat.image} width="100%"/>
                                    <CardBody>
                                        <CardText>
                                            Some Description.
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        )
                    })}
                </Col>
            </>
        )
    }
}