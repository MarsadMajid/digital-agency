'use client'
import React, { Component } from "react";
import Switch from "react-switch";
// npm i react-switch
 class MaterialDesignSwitch extends Component {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(checked) {
      this.setState({ checked });
    }
  
    render() {
      return (
        <div className="example">
          <label htmlFor="material-switch" className="flex items-center space-x-2">
            <p className="font-semibold">Monthly</p>
            <Switch
              checked={this.state.checked}
              onChange={this.handleChange}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={40}
              width={95}
              className="react-switch"
              id="material-switch"
            />
            <p className="font-semibold">Yearly</p>
          </label>
        </div>
        
      )
    }
  }
  export default MaterialDesignSwitch;