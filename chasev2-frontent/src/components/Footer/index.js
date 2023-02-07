import React from 'react'

export default function Foot() {
  return (
    <div id="outer-foot" style={{"background": "linear-gradient(90deg, #113137 0%, white 30%)"}}>
      <div class="container-fluid" id="foot">
        <footer class="panel-footer">
          <div class="text-center" id="footer-text">
            <span>
              <img style={{"max-height": "45px"}} src={require("../../images/CS.png")} alt="logo" class="logo" id="footer-logo"/>
              Website designed by and property of Chase Spengler.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}