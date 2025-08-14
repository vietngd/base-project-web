export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);

export const formatDate = (value: Date | string) =>
  new Date(value).toLocaleDateString("vi-VN");
