export function formatterDate(value: string) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(value))
}