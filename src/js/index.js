// Javascript Entry Point
import beerStuff from './items';
import $ from 'jquery';

var items = beerStuff.results;


function displayItem(item) {
	var productOne = item.Images[0].url_75x75;

	return ` 
	<div class="image">
		<div class="image-photo">
			<img src="${productOne}" alt"${item.description}">
		</div>
	<div class="seller">${item.Shop.shop_name}</div>
	<div class="price">${item.price} USD</div>
	<div class="item-title">${item.title}</div>
	</div> `;
}

items.forEach(function(item) {
$('main').append(displayItem(item));
});