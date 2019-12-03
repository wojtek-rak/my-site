import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Events/Cell';
import data from '../data/events';

import ImageGallery from 'react-image-gallery';

const images = [

];

const Events = () => (
    <Main>
        <Helmet title="Events" />

        <article className="post" id="projects">
            <header>
                <div className="title">
                    <h2><Link to="/events">Events</Link></h2>
                    <img src="/images/gallery/UNIT_TESTING/UNIT_TESTING_1-min.jpg" />
                    <p>A selection of projects that I&apos;m not too ashamed of</p>
                </div>
            </header>


          {/*<ImageGallery items={data} />*/}

            {data.map((events) => (
              <Cell
                data={events}
                key={events.title}
              />

            ))}
        </article>
    </Main>
);

export default Events;
