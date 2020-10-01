export default function formatedCurrency(num) {
  return "$" + Number(num.toFixed(1)).toLocaleString();
}
