import React, { Component } from 'react';
import GalleryImage from './galleryImage.js'
import GalleryControl from './galleryControl.js'
import '../assets/css/gallery.scss';
// var stage = {}; // 舞台大小
class Gallery extends Component {
  constructor(props){
    super(props);
    // this.stageDOM = React.createRef();
    this.stage = {};
    this.state = {
      // imageDatas: imageDatas, // 图片相关数据
      stage: {}// 舞台大小
      // imgFigures: {}, // 图片大小
    }
  }
  componentWillMount() {
    // var stageDOM = this.refs.stageDOM;
    // console.log(stageDOM)
  }
  componentDidMount() {
    // 拿到舞台的大小
    // var stage = {}; // 舞台大小
    // var stageDOM = this.refs.stageDOM;
    // this.stage.stageW = stageDOM.scrollWidth;
    // this.stage.satgeH = stageDOM.scrollHeight;
    // this.stage.halfStageW = Math.ceil(stageDOM.scrollWidth / 2);
    // this.stage.halfStageH = Math.ceil(stageDOM.scrollHeight / 2);
    // console.log( this.stage)
    // console.log(this.stage +'父组件didMount')
    // this.setState({
    //   stage: {
    //     stageW : stageDOM.scrollWidth,
    //     satgeH : stageDOM.scrollHeight,
    //     halfStageW : Math.ceil(stageDOM.scrollWidth / 2),
    //     halfStageH : Math.ceil(stageDOM.scrollHeight / 2)
    //   }
    // })
  }
  // 从子组件获取图片相关数据
  // getImgFigureData(data) {
    // 计算中心图片位置
    // this.setState({imgFigures: data}, () => {

    //   console.log(this.state.imgFigures)
    // })
  // }
  handelClick() {
    // console.log(this.state.stage)
    // console.log(stage)
  }
  render() {
    return (
      <div className="stage" ref='stageDOM' onClick={this.handelClick.bind(this)}  id='adds'>
        <GalleryImage />
        <GalleryControl/>
      </div>
    );
  }
}

export default Gallery;
