import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-3">
                <img
                  src={photo.src.small}
                  key={index}
                  className="img-fluid"
                  alt={photo.photographer}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
