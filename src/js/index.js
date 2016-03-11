// Javascript Entry Point
import etsyData from './items';
import $ from 'jquery';

var products = etsyData.results;


function displayItem(item) {
	var productOne = product.Images[0].url_75x75;

	return ` 
	<div class="image">
		<div class="image-photo">
			<img src="${productOne}" alt"${product.description}">
		</div>
	<div class="price">${product.price}</div>; `

}