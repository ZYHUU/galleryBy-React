import React, { Component } from 'react';
import '../assets/css/galleryImage.scss';

// 获取图片相关数据
let imageDatas = require('../assets/data/gallery.json');
// 转换出图片URL
imageDatas = (function getImageURL (imageDatasArr) {
  imageDatasArr.forEach((item,index) => {
    item.imageURL = require("../assets/images/" + (index + 1) + ".jpg");
  })
  return imageDatasArr;
})(imageDatas);
let stage = {};
let centerPos = { // 中心图片位置
    left: 0,
    top: 0
  }
let hPosRange = { // 水平方向取值范围
    leftSecX: [0, 0],
    rigtSecX: [0, 0],
    y:[0, 0]
}
let vPosRange = { // 垂直方向取值范围
    topY: [0, 0],
    x:[0, 0]
}
class GalleryImage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imgFigures: {}, // 一个图片的大小
            imgsArrangeArr: [
                {
                    pos: {
                        left: '0',
                        top: '0'
                    }
                }
            ]
        }
    };
   
    // 组件加载完成后，计算每个图片位置的范围
    componentDidMount() {
        // 拿到一个图片的大小
        var imgFigureDOM = this.refs.imgFigures0;
         this.setState({
            imgFigures: {
                imgW: imgFigureDOM.scrollWidth,
                imgH: imgFigureDOM.scrollHeight,
                halfImgW: Math.ceil(imgFigureDOM.scrollWidth / 2),
                halfImgH: Math.ceil(imgFigureDOM.scrollHeight / 2)
            }
         }, () => {
             console.log(this.state.imgFigures)       
                 // 计算左侧右侧图片排布位置范围                   
                centerPos.left = stage.halfStageW - this.state.imgFigures.halfImgW;
                centerPos.top = stage.halfStageH - this.state.imgFigures.halfImgH;                   
                hPosRange.leftSecX = [- this.state.imgFigures.halfImgW, stage.halfStageW - this.state.imgFigures.halfImgW * 3];
                hPosRange.rigtSecX = [stage.halfStageW - this.state.imgFigures.halfImgW, stage.stageW - this.state.imgFigures.halfImgW];
                hPosRange.y = [- this.state.imgFigures.halfImgH, stage.halfStageH - this.state.imgFigures.halfImgH];
                 // 计算上侧图片排布位置范围   
                vPosRange.topY = [- this.state.imgFigures.halfImgH, stage.halfStageH -  this.state.imgFigures.halfImgH * 3];
                vPosRange.x = [this.state.imgFigures.halfImgW - this.state.imgFigures.imgW, this.state.imgFigures.halfImgW];
                
         })
    }
    componentWillReceiveProps(){
        stage = this.props.stage; // 舞台大小
        // this.setState({
        //     centerPos: {
        //         left:
        //     } 
        // })
        console.log(stage)
    }

    handelClick() {
        console.log(stage,this.state.imgFigures,centerPos,hPosRange,vPosRange)
        // console.log(this.props.stage)

    }
    render() {
        return <div className="content">
                    {
                       imageDatas.map((item,index) => {
                        //    if(!this.state.imgsArrangeArr[index]){
                        //        this.setState({
                        //            imgsArrangeArr[index]: {
                        //                pos: {
                        //                    left: '0',
                        //                    top: '0'
                        //                }
                        //            }
                        //        })
                        //    }
                            return (<div key = {index} ref={'imgFigures' + index} onClick={this.handelClick.bind(this)}>
                                        <img  src = {item.imageURL} alt={item.title}/>
                                        <h2>{item.title}</h2>
                                    </div>)
                       }) 
                    }
                  
               </div>
    }
}
export default GalleryImage