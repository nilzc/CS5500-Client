import React from "react";
const TuitVideo = ({tuit}) => {
  return(
    <div
      className="position-relative overflow-hidden mt-2">
      <iframe width="560"
              height="315" src={tuit.video}
              title="YouTube video player"
              frameBorder="0"
              className="position-absolute top-0 w-100 h-100"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen/>
    </div>
  )
};
export default TuitVideo;
