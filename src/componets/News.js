import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>Top headlines</h2>
          <div className="row">
            <div className="col-md-3">
              <Newsitem title="Title#1" desc="Desc#1" />
            </div>
            <div className="col-md-3">
              <Newsitem title="Title#2" desc="Desc#2"  />
            </div>
            <div className="col-md-3">
              <Newsitem title="Title#3" desc="Desc#3" />
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default News