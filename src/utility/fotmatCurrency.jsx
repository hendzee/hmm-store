const formatCurrency = (number) => {
    return new Intl.NumberFormat("id-ID", { maximumSignificantDigits: 3 }).format( number )
}

export default formatCurrency;