
export const formatoMoneda = cantidad => {
    return cantidad?.toLocaleString("es-CO", {
        style: 'currency',
        minimumFractionDigits: 0,
        currency: "COP"
    })
}