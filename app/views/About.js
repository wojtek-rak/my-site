import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from '../layouts/Main';

import markdown from '../data/about.md';

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main>
    <Helmet title="About" />
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2><Link to="/about">About Me</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
      <div className="developerStoryContent">
      <a target='_blank' href="https://stackoverflow.com/users/9804879/wojciech-rak"><img src="https://stackoverflow.com/users/flair/9804879.png" width="208" height="58" alt="profile for Wojciech Rak at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for Wojciech Rak at Stack Overflow, Q&amp;A for professional and enthusiast programmers"></img></a>

      </div>

    </article>
  </Main>
);

export default About;
