import React from "react";
import "./tuit-video.css";

const TuitVideo = ({tuit, deleteHandler}) => {
  return(
      <div className={"col-12 position-relative"}>
          <div id={"iframe-wrapper"} className={"row rounded overflow-hidden"}>
              <iframe src={tuit.video[0]}
                      title="Video player"
                      width="560" height="315"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>
          </div>
        {
            deleteHandler &&
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
                onClick={() => deleteHandler(tuit.video[0], "video")}>
            Remove
          </span>
        }
      </div>
  )
};
export default TuitVideo;
