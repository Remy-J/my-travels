import React from 'react'


const Travel = (props) => (
    <figure>
    <img
      src= {props.photo}
      alt= {props.destination}
    />
    <figcaption>
      <blockquote>
      {props.country}
      </blockquote>
      <cite>
      {props.distance}
      <p>
          This is the city of {props.destination}
      </p>
      </cite>
    </figcaption>
  </figure>
);

export default Travel;