import React from "react";
//import { graphql } from "gatsby";
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Layout from "../components/layout";
import VideosGrid from "../components/videos-grid";
import AlertMain from '../components/alertMain';
import TopBanner from "../components/topBanner";

const VideosPage = () => {

    // const VideosGrid = props => {
    //     return (
    //       <div className="course-info">
    //         <p>{props.descrip}</p>
    //         <div className="" dangerouslySetInnerHTML={{__html: props.descripBody}}></div>
    //       </div>
    //     )
    //   }

  return (
    <Layout>
      <AlertMain />
      <TopBanner />
      <VideosGrid />
    </Layout>
  )
}

export default VideosPage;