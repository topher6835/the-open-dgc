export const CLASS_PREFIX = "react-images";

export function getSource(source) {
  if (typeof source === "string") return source;

  return source.regular;
}

export function className(name, state) {
  const arr = Array.isArray(name) ? name : [name];

  // loop through state object, remove falsey values and combine with name
  if (state && typeof name === "string") {
    for (let key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push(`${name}--${key}`);
      }
    }
  }

  // prefix everything and return a string
  return arr.map(cn => `${CLASS_PREFIX}__${cn}`).join(" ");
}

const urlRegexMatchPost = /upload(.*)/;
const urlRegexMatchPre = /(.*)upload/;
const urlAppendToUpload = "upload/";
const imgViewQuality70 = "q_70,";
const thumbScale215 = "c_scale,w_215,";

export function cloudinaryHeroUrl(urlHeroImg) {
  let coursePageHeroImageReduced = urlHeroImg.match(urlRegexMatchPre)[1] + urlAppendToUpload + imgViewQuality70 + urlHeroImg.match(urlRegexMatchPost)[1]
  return coursePageHeroImageReduced;
}
export function cloudinaryUrlTileImage(image) {
  return image.match(urlRegexMatchPre)[1] + urlAppendToUpload + thumbScale215 + image.match(urlRegexMatchPost)[1];
}
export function cloudinaryUrlImageView(image) {
  return image.match(urlRegexMatchPre)[1] + urlAppendToUpload + imgViewQuality70 + image.match(urlRegexMatchPost)[1];
}