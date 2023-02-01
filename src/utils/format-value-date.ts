export const formatValueDate = (value: string) => {
    return new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(value))
}