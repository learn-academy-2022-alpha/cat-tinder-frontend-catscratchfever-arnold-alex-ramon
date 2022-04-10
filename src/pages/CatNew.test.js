import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from './CatNew'
Enzyme.configure({adapter: new Adapter()})

describe("When CatNew page renders", () => {
    it("displays a heading", () => {
        const catNew = shallow(<CatNew />)
        const catNewHeading = catNew.find("h1").text()
        expect(catNewHeading).toEqual("Add a new FURiend!")
    })
    it("displays a form", () => {
        const catNew = shallow(<CatNew />)
        const formInfo = catNew.find("Form")
        expect(formInfo.length).toEqual(1)
    })
})