import React from "react"
import { Link } from "gatsby"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isActive: false}

        this.toggleActive = this.toggleActive.bind(this);
    }

    toggleActive() {
        this.setState(state => ({
            isActive: !state.isActive
        }));
    }

    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">Brandon Haakenson</Link>

                    <a onClick={this.toggleActive} role="button" className={`navbar-burger burger ${this.state.isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasic">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasic" class={`navbar-menu ${this.state.isActive ? "is-active" : ""}`}>
                    <div className="navbar-end">
                        {/* maybe don't need a link for projects since they are on the index page */}
                        {/* <Link to="/" className="navbar-item">Projects</Link> */}
                        {/* coming soon */}
                        {/* <a href="#" className="navbar-item">Blog</a> */}
                        <Link to="/contact" className="navbar-item">Contact</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar