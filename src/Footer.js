import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <div>
            <footer className="text-center text-white fixed-bottom" style={{ backgroundColor: '#21081a' }}>
                <div className="container p-4" />
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>

        </div>
    )
  }
}
