export const weightFont = {
  medium: 'medium',
  bold: 'bold',
  semi_bold: 'semibold',
}

export const style = {
  text_blue: (size, weight) => `raleway${weight ? `-${weight}` : ''} fs${size} first_blue`,
  text_red: (size, weight) => `raleway${weight ? `-${weight}` : ''} fs${size} second_red`,
  text_green: (size, weight) => `raleway${weight ? `-${weight}` : ''} fs${size} green`,
  text_white: (size, weight) => `raleway${weight ? `-${weight}` : ''} fs${size} white`,
}
