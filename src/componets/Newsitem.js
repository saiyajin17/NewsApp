import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
    let {title,desc} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/7777/production/_126838503_gettyimages-1426954270.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href="/newsDetail" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem