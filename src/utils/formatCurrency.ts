const options = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export default function formatCurrency(amount: string | number | undefined) {
  if (isNaN(amount as number)) {
    return "-";
  }
  return amount || Number(amount) === 0
    ? `₦${Number(amount).toLocaleString("en", options)}`
    : "-";
}
