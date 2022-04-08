
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'
import cats from '../mockCats'
Enzyme.configure({adapter: new Adapter()})



describe("When CatShow renders", () => {
    it("displays a heading", () => {
      const newCatShow = shallow(<CatShow cat = {cats[0]} />)
      const catShowHeading = newCatShow.find("h2")
      expect(catShowHeading.text()).toEqual("CatShow")
    })
})