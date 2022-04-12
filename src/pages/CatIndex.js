






import React, {Component} from "react";
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Col} from 'reactstrap'
import { NavLink } from 'react-router-dom'

 class CatIndex extends Component {
    render() {
        let catProps = this.props.cats
        return(
            <div style= {{
                backgroundImage: `url("/backgrounds/Screenshot.jpg")`,
                // height: '100vh',
                // position: 'center',
                backgroundRepeat: 'no-repeat',
                // backgroundSize: '1920px 1080px',
                backgroundAttachment: 'fixed',
            }}>>
            <h2 style={{
              position: 'relative',
              top: '75px',
              left: '400px',
              fontSize: '48px',
              color: '#00000',
              fontFamily: 'Cursive'
            }}>Find Your Purrfect CATch!</h2>
            <div style= {{
              display: 'flex',
              flexWrap: 'wrap',
              marginTop: '100px',
              position: 'center',
              left: '650px',
              top: '50px'
            }}>
            {/* <h1 class="username">Hi #User</h1> */}
                <br />
                <Col sm="6">
                    {catProps && catProps.map(cat => {
                        return(
                            <div id='cat-card'>
                            <a href={`CatShow/${cat.id}`}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>
                                              <h4>{cat.name}, {cat.age} </h4>
                                        </CardTitle>
                                    </CardBody>
                                    <img alt="Card image cap"
                                         src={cat.image} height='600px'/>
                                </Card>
                                </a>
                            </div>
                        )
                    })}
                </Col>
              </div>
            </div>
        )
    }
}

export default CatIndex