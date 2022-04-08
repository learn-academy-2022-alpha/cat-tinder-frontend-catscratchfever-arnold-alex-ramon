import React, { Component } from 'react'

class CatShow extends Component {
    render() {
        let {cat} = this.props
        return(
            <>
                <h2>CatShow</h2>
                <p>{cat.name}</p>
                <p>{cat.age}</p>
                <p>{cat.enjoys}</p>
                <img src={cat.image}/>
            </>
        )
    }
}
export default CatShow