import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import ImageGallery from 'react-image-gallery';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      {/* eslint-disable-next-line react/prop-types */}
      <ImageGallery items={data.images} />
      <div className="descriptionEvent">
        {/* eslint-disable-next-line react/style-prop-object */}
        <p style={{whiteSpace: 'pre-line'}}>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
