import React, { Component } from 'react';
import GalleryImage from './galleryImage.js'
import GalleryControl from './galleryControl.js'
import '../assets/css/gallery.scss';
// 获取图片相关数据
var imageDatas = require('../assets/data/gallery.json');
// 转换出图片URL
imageDatas = (function getImageURL (imageDatasArr) {
  imageDatasArr.forEach((item,index) => {
    item.imageURL = require("../assets/images/" + (index + 1) + ".jpg");
  })
  return imageDatasArr;
})(imageDatas)
class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageDatas: imageDatas
    }
  }
  // componentWillMount() {
  //   console.log(this.state.imageDatasArray);
  // }
  render() {
    return (
      <div className="stage">
        <GalleryImage  imageDatas = {this.state.imageDatas}/>
        <GalleryControl />
      </div>
    );
  }
}

export default Gallery;
