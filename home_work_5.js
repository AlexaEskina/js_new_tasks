//1_task 
let obj = {
	flower_type: 'tulip',
	color: 'pink',
	delivered_country: 'Holland',
	getInfo() {
		for (let prop in this) {
			if (Object.prototype.hasOwnProperty.call(this, prop) && typeof this[prop] !== 'function') {
				console.log(`${prop}: ${this[prop]}`);
			}
		}
	}
};
obj.getInfo();

//2_task

var services = {
	"стрижка": 60,
	"гоління": 80,
	"Миття голови": 100,
	price: function() {
		var totalPrice = 0;
		for (var service in this) {
			if (typeof this[service] === 'number') {
				totalPrice += this[service];
			}
		}
		return totalPrice;
	},
	minPrice: function() {
		var minPrice = Infinity;
		for (var service in this) {
			if (typeof this[service] === 'number' && this[service] < minPrice) {
				minPrice = this[service];
			}
		}
		return minPrice;
	},
	maxPrice: function() {
		var maxPrice = 0;
		for (var service in this) {
			if (typeof this[service] === 'number' && this[service] > maxPrice) {
				maxPrice = this[service];
			}
		}
		return maxPrice;
	}
};
services['Розбити скло'] = 200;
console.log("Загальна вартість наданих послуг: " + services.price() + " грн");
console.log("Мінімальна вартість: " + services.minPrice() + " грн");
console.log("Максимальна вартість: " + services.maxPrice() + " грн");