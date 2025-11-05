export function formartCurrency (quantity : number) {
    return new Intl.NumberFormat ("es-MX", {
        style: "currency",
        currency: "MXN"
    }).format(quantity)
}