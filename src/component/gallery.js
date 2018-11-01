import React, { Component } from 'react';
import GalleryImage from './galleryImage.js'
import GalleryControl from './galleryControl.js'
import '../assets/css/gallery.scss';
// 读取json数据
let imageDatas = require('../assets/data/gallery.json');

class Gallery extends Component {
  componentWillMount() {
    console.log(imageDatas)
  }
  render() {
    return (
      <div className="App">
        <GalleryImage />
        <GalleryControl />
      </div>
    );
  }
}

export default Gallery;
