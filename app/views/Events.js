import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const Events = () => (
    <Main>
        <Helmet title="Events" />
        <article className="post" id="projects">
            <header>
                <div className="title">
                    <h2><Link to="/events">Events</Link></h2>
                    <p>A selection of projects that I&apos;m not too ashamed of</p>
                </div>
            </header>


          <ImageGallery items={images} />

            {data.map((project) => (
                <Cell
                    data={project}
                    key={project.title}
                />
            ))}
        </article>
    </Main>
);

export default Events;
