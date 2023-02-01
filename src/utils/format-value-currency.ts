export enum CurrencyType {
    pt = 'pt',
    en = 'en'
}

export const formatValueCurrencyTo = (value: string, currency: CurrencyType) => {
    if (currency === CurrencyType.pt) {
        return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value))
    }
    if (currency === CurrencyType.en) {
        return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(value))
    }
    return value
}