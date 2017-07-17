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
  render() {
  	let controllerUnits = [],imgFigures = [];
  	imageDatas.forEach((value,index) => {
  		imgFigures.push(<ImgFigure data={value}/>);
  	});
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
