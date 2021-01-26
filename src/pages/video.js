import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Video from "../components/video";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const vidArr = [];

//sponsorArr.push({order: evalPropOrderData, name: evalPropNameData, thumbnail: cloudinaryUrlTileImage(evalPropImgData), url: cloudinaryUrlImageView(evalPropImgData), link: evalPropLinkData} );
vidArr.push({thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', url: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg'} );
vidArr.push({thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', url: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg'} );


function Image(props) {
  return (
    <div
      key={props.tile}
      style={{ margin: "5px" }}
    >
      <img
        id="image"
        src={props.thumbnail}  //props.url || props.thumbnail
        style={{
          borderRadius: "3px",
          width: "215px",
          height: "130px",
          // border: "1px solid rgb(199, 199, 199)"
        }}
        alt="Video"
      />
    </div>
  )
}

function renderImages() {
  return vidArr.map((image, i) => {
    return (
      <div className="gallery_tile" key={i}>
        <Image
          {...image}
          index={i}
          vidArr={vidArr}
        />
      </div>
    )
  })
}

const VideoPage = () => (
  <Layout>
    <SEO title="Videos" />
    <section>
      <h1>Video Page</h1>
      <p>You just hit the Video Page</p>
      <p>Enjoy this video...</p>
      <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />
      <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />
    </section>
    <br/>
    <section>
      <p>TEST TEST</p>
      <div className="course-page-content">
        <MuiThemeProvider>
          <div className="caddy-guide-container" >
            <div className="gallery">
              <div className="gallery-container-outer">
                <div className="gallery-container">
                  <div className="gallery-main">{renderImages()}</div>
                </div>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    </section>
  </Layout>
)

export default VideoPage;