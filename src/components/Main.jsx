require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
let imageDatas = require('../data/imageDatas.json');
imageDatas = ((arr) =>{
	for(let i =0;i<arr.length;i++){
		let singleImageData = arr[i];
		singleImageData.imageURL = require(`../images/${singleImageData.fileName}`);
		arr[i] = singleImageData;
	}
	return arr;
})(imageDatas);
var ImgFigure = React.createClass({
	render(){
		return (
			<figure className="img-figure">
				<img src={this.props.data.imageURL}
					alt={this.props.data.title}
				/>
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
				</figcaption>
			</figure>
		);
	}
});


class AppComponent extends React.Component {
	Constant:{
		centerPos:{
			left:0,
			right:0
		},
		hPosRange:{// 水平方向的取值范围
			leftSecX:[0,0],
			rightSecX:[0,0],
			y:[0,0]
		},
		vPosRange:{ // 垂直方向的取值范围
			x:[0,0],
			topY:[0,0]
		}
	},
	// 组件加载完成后 初始化 每个图片组件的位置范围
	componentDidMount(){
		//首先拿到舞台的大小
		var stageDom = React.findDOMNode(this.refs.stage),
		stageW = stageDom.scrollWidth,
		stageH = stageDom.scrollHeigth,
		halfStageW = Math.ceil(stageW/2),
		halfStageH = Math.ceil(stageH/2);
		// 拿到imgFigureDow  的大小
		var imgFigureDOM = React.findDOMNode(this.refs.imgFigure0),
		imgW = imgFigureDOM.scrollWidth,
		imgH = imgFigureDOM.scrollHeigth,
		halfImgW = Math.ceil(imgW / 2),
		halfImgH = Math.ceil(imgH / 2);
		// 计算中心图片的位置点
		this.Constant.centerPos = {
			left:halfStageW - halfImgW,
			top:halfStageH - halfImgH
		}
		// 计算左侧，右侧区域图片排布位置的取值范围
	    this.Constant.hPosRange.leftSecX[0] = -halfImgW;
	    this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
	    this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
	    this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
	    this.Constant.hPosRange.y[0] = -halfImgH;
	    this.Constant.hPosRange.y[1] = stageH - halfImgH;

	    // 计算上侧区域图片排布位置的取值范围
	    this.Constant.vPosRange.topY[0] = -halfImgH;
	    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
	    this.Constant.vPosRange.x[0] = halfStageW - imgW;
	    this.Constant.vPosRange.x[1] = halfStageW;
	    this.rearrange(0);
	},
	/*
   * 重新布局所有图片
   * @param centerIndex 指定居中排布哪个图片
   */
	rearrange(){

	},
	getInitialState(){
		return {
			imgsArrangeArr:[/*{
                pos: {
                    left: '0',
                    top: '0'
                },
                rotate: 0,    // 旋转角度
                isInverse: false,    // 图片正反面
                isCenter: false,    // 图片是否居中
            }*/]
		}
	},
	render() {
		let controllerUnits = [],imgFigures = [];
		imageDatas.forEach((value,index) => {
			if(!this.stage.imgsArrangeArr[index]){
				pos:{
					left:0,
					top:0
				}
			}
			imgFigures.push(<ImgFigure data={value} ref={'imgFigure'+index} key={index}/>);
		}.bind(this));

		return (
		   <section className="stage" ref="stage">
		        <section className="img-url">
		            {imgFigures}
		        </section>
		        <nav className="controller-nav">
		            {controllerUnits}
		        </nav>
		    </section>
		);
	}
}

AppComponent.defaultProps = {

}

module.exports =AppComponent;
