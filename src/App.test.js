import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import App from './App.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When App renders", () => {
  let app
    beforeEach(()=> {
      app = shallow(<App />)
    })
  it("dispalys an Header and a Footer ", () => {
  
    const renderedHeader = app.find("Header")
    expect(renderedHeader.length).toEqual(1)
    
    const renderedFooter = app.find("Footer")
    expect(renderedFooter.length).toEqual(1)
  })
  it("provides a route for the home component",() => {

    const renderedHomeRoute = app.find('[path="/"]')
    expect(renderedHomeRoute.length).toEqual(1)
  })
})