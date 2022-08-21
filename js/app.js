/********** start case************/

const caseInputField = document.getElementById("case-input-field");

const casePrice = document.getElementById("case-price");

const getValueFromInputField = () => {
	return parseInt(caseInputField.value);
};

const updateCaseNumber = (isIncrease) => {
	let value = getValueFromInputField();
	if (isIncrease) {
		value++;
	} else if (value > 0) {
		value--;
	}
	caseInputField.value = value;
	return value;
};

const updateCasePrice = (quantityCase) => {
	let total = quantityCase * 59;
	casePrice.innerText = total;
};

document.getElementById("case-btn-minus").addEventListener("click", () => {
	const quantityCase = updateCaseNumber(false);
	updateCasePrice(quantityCase);
	totalAmounFunction();
});

document.getElementById("case-btn-plus").addEventListener("click", () => {
	const quantityCase = updateCaseNumber(true);
	updateCasePrice(quantityCase);
	totalAmounFunction();
});

/**********end case************/
/**********start phone************/

const iphoneQuantity = document.getElementById("iphone-quantity");
const iphonePlus = document.getElementById("iphone-plus");
const iphoneMinus = document.getElementById("iphone-minus");
const iphonePrice = document.getElementById("iphone-price");

function updateIphone(isIncrease) {
	let value = parseInt(iphoneQuantity.value);
	if (isIncrease) {
		value++;
	} else if (value > 0) {
		value--;
	}

	iphoneQuantity.value = value;
	return value;
}

function updateIphonePrice(value) {
	iphonePrice.innerText = value * 1219;
}

iphonePlus.addEventListener("click", function () {
	const value = updateIphone(true);
	updateIphonePrice(value);
	totalAmounFunction();
});

iphoneMinus.addEventListener("click", function () {
	const value = updateIphone(false);
	updateIphonePrice(value);
	totalAmounFunction();
});
/**********end iphone************/
/************start total******************/

const totalElement = document.getElementById("total");
const subtotalElement = document.getElementById("subtotal");
const taxElement = document.getElementById("tax");

function totalAmounFunction() {
	let subtotalAmount =
		parseInt(casePrice.innerText) + parseInt(iphonePrice.innerText);
	console.log(subtotalAmount);
	subtotalElement.innerText = subtotalAmount;
	let tax = subtotalAmount * 0.1;
	taxElement.innerText = tax.toFixed(2);
	let totalAmount = tax + subtotalAmount;
	totalElement.innerText = totalAmount.toFixed(2);
}
/************end total******************/
