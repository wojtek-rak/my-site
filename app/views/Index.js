import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>A beautiful, responsive, react app written with modern Javascript.</p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/events">events</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
    {/* <article className="post" id="index">
      <header>
        <div className="title">
          <h2><a href="https://blog.wojciechrak.com/">My blog</a></h2>
          <p>A Programming is just more than only typing meaningless code in IDE.</p>
        </div>
      </header>
      <p> Check out my {' '} <a href="https://blog.wojciechrak.com/">My blog</a>.
      </p>
    </article> */}
  </Main>
);

export default Index;
