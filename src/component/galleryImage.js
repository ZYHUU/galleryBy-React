import React, { Component } from 'react';
import '../assets/css/galleryImage.scss';




class GalleryImage extends Component{
    constructor(props) {
        super(props);
        this.stage = {};
        // 获取图片相关数据
        this.imageDatas = require('../assets/data/gallery.json');
        // 转换出图片URL
        this.imageDatas = (function getImageURL (imageDatasArr) {
            imageDatasArr.forEach((item,index) => {
            item.imageURL = require("../assets/images/" + (index + 1) + ".jpg");
            })
            return imageDatasArr;
        })(this.imageDatas);
        this.centerPos = { // 中心图片位置
           left: 0,
           top: 0
       }
        this.hPosRange = { // 水平方向取值范围
           leftSecX: [0, 0],
           rigtSecX: [0, 0],
           y:[0, 0]
       }
       this.vPosRange = { // 垂直方向取值范围
           topY: [0, 0],
           x:[0, 0]
       }
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
        this.styleObj= {};
        // if(this.props.arrange.pos){
        //     this.styleObj = this.props.arrange.pos;
        // }
    };
   
    componentWillMount() {
       
    }
    // 组件加载完成后，计算每个图片位置的范围
    componentDidMount() { 
        // 拿到一个图片的大小

        this.imgFigureDOM = this.refs.imgFigures0;
        this.imgFigures = {
            imgW: this.imgFigureDOM.scrollWidth,
            imgH: this.imgFigureDOM.scrollHeight,
            halfImgW: Math.ceil(this.imgFigureDOM.scrollWidth / 2),
            halfImgH: Math.ceil(this.imgFigureDOM.scrollHeight / 2)
        }
            // console.log(this.stage)
            this.centerPos.left = this.stage.halfStageW - this.imgFigures.halfImgW;
            this.centerPos.top = this.stage.halfStageH - this.imgFigures.halfImgH;                   
            this.hPosRange.leftSecX = [- this.imgFigures.halfImgW, this.stage.halfStageW - this.imgFigures.halfImgW * 3];
            this.hPosRange.rigtSecX = [this.stage.halfStageW + this.imgFigures.halfImgW, this.stage.stageW - this.imgFigures.halfImgW];
            this.hPosRange.y = [- this.imgFigures.halfImgH, this.stage.halfStageH - this.imgFigures.halfImgH];
            // 计算上侧图片排布位置范围   
            this.vPosRange.topY = [- this.imgFigures.halfImgW, this.stage.halfStageH -  this.imgFigures.halfImgH * 3];
            this.vPosRange.x = [this.imgFigures.halfImgW - this.imgFigures.imgW, this.imgFigures.halfStageW];  
            this.rearrange();
        // this.setState({
        //     imgFigures : this.imgFigures
        // })
                // console.log(document.getElementById('adds'))
            // this.render()
    
    }
    /**
     * 获取区间内的一个随机值
     */
    getRangeRandom(low, high) {
        return Math.ceil(Math.random() * (high - low) + low);
    } 
    /**
     *  重新布局所有图片 
     * @param centerIndex 指定居中排布哪个图片
     */
    // rearrange(centerIndex) {
    //     let imgsArrangeArr = this.state.imgsArrangeArr;
    //     console.log(imgsArrangeArr.length)
    //     let imgArrangeTopArr = [],
    //     topImgNum = Math.ceil(Math.random() * 2), // 取一个或者不取
    //     topImgSpliceIndex = 0;
    //     console.log(imgsArrangeArr)
    //     let imgArrangeCenterArr = imgsArrangeArr.splice(centerIndex,1);
    //     console.log(topImgNum)
    //     console.log(imgArrangeCenterArr);
    //     // 首先居中 centerIndex 的图片
    //     // console.log(imgArrangeCenterArr[0].pos)
    //     imgArrangeCenterArr[0].pos = this.centerPos;
    //     console.log(imgArrangeCenterArr[0])
    //     console.log(imgsArrangeArr)
    //     // 取出要布局上侧的图片状态信息 
    //     topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum));
    //     imgArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex,topImgNum);
    //     console.log(topImgSpliceIndex);
    //     console.log(imgArrangeTopArr)
    //     // 布局位于上侧的图片
    //     imgArrangeTopArr.forEach(function(value, index) {
    //         imgArrangeTopArr[index].pos = {
    //              top: this.getRangeRandom(this.vPosRange.topY[0],this.vPosRange.topY[1]),
    //              left: this.getRangeRandom(this.vPosRange.x[0],this.vPosRange.x[1])
    //         }
    //     })
    //     // 布局左右两侧的图片
    //     console.log(imgsArrangeArr)
    //     for (var i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++){
    //         let hPosRangeLORX = null;
    //         // 前半部分布局左边，右半部分布局右边
    //         if(i < k) {
    //             hPosRangeLORX = this.hPosRange.leftSecX;
    //         } else {
    //             hPosRangeLORX = this.hPosRange.rigtSecX;
    //         }
    //         imgsArrangeArr[i].pos = {
    //             top: this.getRangeRandom(this.hPosRange.y[0], this.hPosRange.y[1]),
    //             left: this.getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
    //         }
    //         console.log(hPosRangeLORX)
    //         console.log(imgsArrangeArr)
    //     }
    //     console.log(imgsArrangeArr)
    //     if(imgArrangeTopArr && imgArrangeTopArr[0]) {
    //         imgsArrangeArr.splice(topImgSpliceIndex,0,imgArrangeTopArr[0]);
    //     }
    //     console.log(imgsArrangeArr)
    //     // this.setState({
    //     //     imgsArrangeArr: imgsArrangeArr
    //     // })
    // }
    rearrange() {
        // 布局居中图片
        this.centerImg(0);
        // console.log(this.stage)
        // console.log( this.imgFigures)
        // 布局顶部图片
        let topImgNum = this.getRangeRandom(2,4); // 布局顶部图片数量
        let topIndexArr = [];  // 布局顶部图片索引集合
        console.log(topImgNum)
        for(let i = 0; i < topImgNum; i++) {
            let last = '';
            let next = '';
            if(i === 0){
                topIndexArr.push(this.getRangeRandom(1,this.imgsArrangeArr.length));
                last = topIndexArr[0];
                console.log(last,topIndexArr)
            }else{
                last = topIndexArr[i - 1];
                let flag = '';
                console.log(last,topIndexArr,topIndexArr[i-1],i)
                for(let j = 0; j < topIndexArr.length; j++){
                    if(topIndexArr[j]){
                        if(last !== topIndexArr[j]){
                        // console.log('last==',last);
                        // console.log('topIndexArr==',topIndexArr[j])
                            flag ++                    
                        }
                    }
                }
                // console.log(flag);
                // console.log(topIndexArr.length)
                if(flag === topIndexArr.length){
                    topIndexArr.push(last);
                }else{
                    console.log(111)
                }
            }
           
           
            // console.log('flag==========',flag );
            // console.log('len============',topIndexArr.length)
            
            // console.log(topIndexArr)

        }
        // console.log(topIndexArr);
        // let 
        // for (var i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++){
        //     let hPosRangeLORX = null;
        //     // 前半部分布局左边，右半部分布局右边
        //     if(i < k) {
        //         hPosRangeLORX = this.hPosRange.leftSecX;
        //     } else {
        //         hPosRangeLORX = this.hPosRange.rigtSecX;
        //     }
        //     imgsArrangeArr[i].pos = {
        //         top: this.getRangeRandom(this.hPosRange.y[0], this.hPosRange.y[1]),
        //         left: this.getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
        //     }
        //     console.log(hPosRangeLORX)
        //     console.log(imgsArrangeArr)
        // }
        this.setState({
            imgsArrangeArr: this.imgsArrangeArr
        })
    }
    onCC(){
        console.log(document.getElementById('adds'))
    }
    /**
     * 布局居中的图片
     * @param index (num居中的图片索引)
     */
    centerImg(index) {    
        // console.log(this.stage.stageH);
        // console.log(this.imgFigures.imgH);   
        this.imgsArrangeArr[index].imgPos = {
            top:  (this.stage.stageH / 2) - (this.imgFigures.imgH / 2),
            left: (this.stage.stageW / 2) - (this.imgFigures.imgW / 2)
        }
    }
    /**
     * 布局顶部图片
     * @param indexArr (Array布局顶部图片索引集合)
     */
    leftImg(indexArr) {
        // let hPosRangeLORX = this.hPosRange.leftSecX;
        indexArr.forEach((item,index) => {
            this.imgsArrangeArr[item].imgPos = {
                // top: this.getRangeRandom(this.hPosRange.y[0], this.hPosRange.y[1]),
                // left: this.getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
                top: this.getRangeRandom(this.vPosRange.topY[0],this.vPosRange.topY[1]),
                left: this.getRangeRandom(this.vPosRange.x[0],this.vPosRange.x[1])
            }
        })

        
    }
    render() {
        // if(this.props.stage.stageW){
        
            // this.stage = this.props.stage;
            //     console.log(this.stage)
             
                
             // 计算左侧右侧图片排布位置范围       
             
             
           
        // }
        this.stage = {
            stageW: 1349, 
            stageH: 680, 
            halfStageW: 675, 
            halfStageH: 340
        }
        this.imgsArrangeArr = [];
        let styleObj = {};
       
        return <div className="content">
                    {
                       this.imageDatas.map((item,index) => { 

                        if(this.state.imgsArrangeArr[0].imgPos){
                            // console.log(this.state.imgsArrangeArr)
                            styleObj = this.state.imgsArrangeArr[0].imgPos;
                         
                        }
                        this.imgsArrangeArr.push({index})
                            return (<div key = {index} ref={'imgFigures' + index}  style={styleObj} onClick={this.onCC.bind(this)} >
                                        <img  src = {item.imageURL} alt={item.title} />
                                        <h2>{item.title}</h2>
                                    </div>)
                       }) 
                    }
                  
               </div>
    }
}
export default GalleryImage