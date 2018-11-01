import React, { Component } from 'react';
import '../assets/css/galleryImage.scss';

class GalleryImage extends Component{
    render() {
        return <div className="content">
                    {
                       this.props.imageDatas.map((item,index) => {
                            return <div key = {index}><img  src = {item.imageURL} alt={item.fileName}/></div>
                       }) 
                    }
                  
               </div>
    }
}
export default GalleryImage