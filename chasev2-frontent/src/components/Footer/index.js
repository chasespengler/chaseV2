import React from 'react'

export default function Foot() {
  return (
    <div id="outer-foot" style={{"background": "linear-gradient(90deg, #113137 0%, white 30%)"}}>
      <div className="container-fluid" id="foot">
        <footer className="panel-footer">
          <div className="text-center" id="footer-text">
            <span>
              <img style={{"maxHeight": "45px"}} src={require("../../images/CS.png")} alt="logo" className="logo" id="footer-logo"/>
              Website designed by and property of Chase Spengler.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}