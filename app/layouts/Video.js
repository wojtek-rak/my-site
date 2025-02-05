import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ReactGA from 'react-ga';

import Header from '../components/Template/Header';
import Nav from '../components/Template/Nav';

if (NODE_ENV === 'production') {
  ReactGA.initialize(GA_ID);
}

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideo: true, // Na start pokazujemy animację
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
      // Ukrycie animacji po 3 sekundach
      this.videoTimeout = setTimeout(() => {
        this.setState({ showVideo: false });
      }, 4400);

    if (NODE_ENV === 'production') {
      ReactGA.set({
        page: window.location.pathname,
      });
      ReactGA.pageview(window.location.pathname);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.videoTimeout);
  }

  render() {
    return (
      <div id="wrapper">
      <Helmet titleTemplate="%s | Wojciech Rak" defaultTitle="Wojciech Rak" />

      {this.state.showVideo ? (
        <div id="video-preloader">
          <video autoPlay muted playsInline onEnded={() => this.setState({ showVideo: false })}>
            <source src="/WR-animate.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <>
          <Header />
          <div id="main">{this.props.children}</div>
          {!this.props.fullPage && <Nav />}
        </>
      )}
    </div>);
  }
}

Video.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
};

Video.defaultProps = {
  children: null,
  fullPage: false,
};

export default Video;
