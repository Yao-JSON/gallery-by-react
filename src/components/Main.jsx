require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
const imageDatas = require('../data/imageDatas.json');
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
		
	}
});


class AppComponent extends React.Component {
  render() {
    return (
       <section className="stage">
      		<section className="img-src">
      			
      		</section>
      		<nav className="cantroller-nav"></nav>
       </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
