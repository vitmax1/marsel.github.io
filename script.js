window.onload = function () {
    slideMin();
    slideMax();
};

const minVal = document.querySelector(".min-val");
const maxVal = document.querySelector(".max-val");
const priceInputMin = document.querySelector(".min-input");
const priceInputMax = document.querySelector(".max-input");
const range = document.querySelector(".slider-track");
const sliderMinValue = parseInt(minVal.min);
const sliderMaxValue = parseInt(maxVal.max);
const minGap = 1;


function slideMin() {
	let gap = parseInt(maxVal.value) - parseInt(minVal.value);
	if (gap <= minGap) {
		minVal.value = parseInt(maxVal.value) - minGap;
	}
	priceInputMin.value = minVal.value;
	setArea();
}

function slideMax() {
	let gap = parseInt(maxVal.value) - parseInt(minVal.value);
	if (gap <= minGap) {
		maxVal.value = parseInt(minVal.value) + minGap;
	}
	priceInputMax.value = maxVal.value;
	setArea();
}


function setMinInput() {
	let minPrice = parseInt(priceInputMin.value);
	if (minPrice < sliderMinValue) {
		priceInputMin.value = sliderMinValue
	}
	minVal.value = priceInputMin.value;
	slideMin();
}

function setMaxInput() {
	let maxPrice = parseInt(priceInputMax.value);
	if (maxPrice > sliderMaxValue) {
		priceInputMax.value = sliderMaxValue;
	}
	maxVal.value = priceInputMax.value;
	slideMax();
}

function setArea() {
	range.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
	range.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
}
