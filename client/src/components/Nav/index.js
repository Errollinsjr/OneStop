import React from "react";
import "./navStyle.scss";

function Nav() {
  return (
    <>
      <header id="nav-wrapper">
        <nav id="nav">
          <div class="nav left">
            <span class="gradient skew"><h1 class="logo un-skew"><a href="#home">OneStop</a></h1></span>
            <button id="menu" class="btn-nav"><span class="fas fa-bars"></span></button>
          </div>
          <div class="nav right">
            {/* <a href="#home" class="nav-link active"><span class="nav-link-span"><span class="u-nav">Home</span></span></a> */}
            {/* <a href="#about" class="nav-link"><span class="nav-link-span"><span class="u-nav">Profile</span></span></a>
            <a href="#work" class="nav-link"><span class="nav-link-span"><span class="u-nav">Trips</span></span></a> */}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;