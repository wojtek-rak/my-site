import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Wojciech Rak</h2>
      </header>
    </section>
    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Wojciech. I like building things.
            I am student of IT at <a href="https://www.put.poznan.pl/en/">Poznan University of Technogy</a>, I'm currently working as .NET Developer at <a href="https://insysvideotechnologies.com/">insys</a>. Before insys I was .Net developer at eFitness and
            Junior .NET Developer at GFI East.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; <Link to="/">wojciechrak.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
