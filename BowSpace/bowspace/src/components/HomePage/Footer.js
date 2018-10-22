import React, { Component } from 'react';

class Footer extends Component {
    render() {
      return (
        <footer id="footer" class="clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 copyright">
                    Copyright ©2018
                    </div>
                    <div class="col-md-4 col-md-offset-6 attribution">
                     Developed by  <a target="_blank" href="#">Reactnators</a> .
                    </div>
                </div> 
            </div>
        </footer>
      );
    }
  }
export default Footer;