var coinValue = Math.floor(Math.random() * 2) + 1;
var result;
if (coinValue === 2) {
 result = "Heads";
}  else {
 result = "Tails";
}

document.write(coinValue);
document.write("random coin value: "  + result);