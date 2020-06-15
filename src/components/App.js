import React, { Component } from "react";
import ImageViewer from "./image-viewer";

// import sign1 from "../images/teeSigns/Tee Signs TOABT_20_web-01-lo.jpg";
// import sign2 from "../images/teeSigns/Tee Signs TOABT_20_web-02-lo.jpg";
// import sign3 from "../images/teeSigns/Tee Signs TOABT_20_web-03-lo.jpg";
// import sign4 from "../images/teeSigns/Tee Signs TOABT_20_web-04-lo.jpg";

let image_data = [
  // {
  //   url: "https://res.cloudinary.com/drgctrdk4/image/upload/v1585852440/2020%20Belton%20Tee%20Signs/Tee_Signs_TOABT_20_web-01-lo_cll5mi.jpg",
  //   title: "",
  //   //thumbnail: thmb
  // },
  // {
  //   url: sign2,
  //   title: "",
  //   //thumbnail: thmb
  // },
  // {
  //   url: sign3,
  //   title: "",
  //   //thumbnail: thmb
  // },
  // {
  //   url: sign4,
  //   title: "",
  //   //thumbnail: thmb
  // }
];

function Image(props) {
  return (
    <div
      key={props.tile}
      style={{ margin: "5px" }}
    >
      <img
        id="image"
        src={props.url}  //props.url || props.thumbnail
        style={{
          borderRadius: "3px",
          width: "215px",
          height: "130px",
          // border: "1px solid rgb(199, 199, 199)"
        }}
        onClick={() => props.openImageViewer(props.image_data, props.index)}
        alt="Course Hole"
      />
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open_image_viewer: false,
      //imagesArray: this.props.imagesArray,
    }

    this.selected_image_index = null;
    //this.state.imagesArray.forEach(this.populateImageData);
  }

  populateImageData(item, index) {
    // url = url to image. link = link to sponsors site. //
    image_data.push({url: item.url, name: item.name, link: item.link});
    //image_data.push({description: item.description});
  }

  handleHashChange = () => {
    if (window.location.hash === "") this.setState({ open_image_viewer: false })
    else if (window.location.hash === "#showImage" && this.images.length !== 0)
      this.setState({ open_image_viewer: true })
  }

  componentDidMount() {
    if (this.media_div) {
      const image_block_width = 215 //  width of each image to be rendered  90
      const outer_div_width = this.media_div.offsetWidth
      if (outer_div_width) {
        const recommeneded_no_of_images = parseInt(
          outer_div_width / image_block_width,
          10
        )
        if (recommeneded_no_of_images !== this.state.no_of_image) {
          this.setState({ no_of_image: recommeneded_no_of_images })
        }
      }
    }

    if (window.location.hash === "#showImage") {
      this.removeHash()
    }

    window.addEventListener("hashchange", this.handleHashChange, false)
  }

  openImageViewer(images, index) {
    let images_arr = []

    if (index !== null) this.selected_image_index = index

    images.forEach(image => {
      images_arr.push({
        source: {
          thumbnail: image.thumbnail, // image.url
          regular: image.url,
          download: image.url,
        },
        caption: <a href={image.link || null} target={"_blank"} style={{textDecoration: "none", color: "white"}}>{image.link || null}</a>
        //caption: image.description || null,
      })
    })

    this.images = images_arr

    this.setHash()
  }

  setHash() {
    if (this.props.history) {
      window.location.hash = "showImage"
    } else {
      this.setState({ open_image_viewer: true })
    }
  }

  removeHash() {
    if (this.props.history) {
      this.props.history.goBack()
    } else {
      this.setState({ open_image_viewer: false })
    }
  }

  closeImageViewer() {
    this.images = []
    this.removeHash()
  }

  renderImages() {
    // image_data was originally set in state.. caused problems with navigation. //
    image_data = [];
    this.props.imagesArray.forEach(this.populateImageData);

    return image_data.map((image, i) => {
      return (
        <div className="gallery_tile" key={i}>
          <Image
            key={i}
            {...image}
            index={i}
            image_data={image_data}
            openImageViewer={(images, index) =>
              this.openImageViewer(images, index)
            }
          />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="gallery">
        <div className="gallery-container-outer">
          <div className="gallery-container">
            <div className="gallery-main">{this.renderImages()}</div>
          </div>
        </div>
        {this.state.open_image_viewer ? (
          <ImageViewer
            currentIndex={this.selected_image_index}
            images={this.images}
            showClose={true}
            handleClose={() => this.closeImageViewer()}
          />
        ) : null}
      </div>
    )
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.handleHashChange, false);
    image_data = [];
  }
}
