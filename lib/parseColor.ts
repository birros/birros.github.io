const parseColor = (color: string) => {
  color = color.trim()

  // rgb(redValue, greenValue, blueValue)
  if (color[0] == 'r') {
    color = color.substring(color.indexOf('(') + 1, color.indexOf(')'))
    const values = color.split(',', 3)

    return {
      r: parseInt(values[0] ?? '0'),
      g: parseInt(values[1] ?? '0'),
      b: parseInt(values[2] ?? '0'),
    }
  }

  // #rrggbb
  if (color.substring(0, 1) == '#') {
    return {
      r: parseInt(color.substring(1, 3), 16),
      g: parseInt(color.substring(3, 5), 16),
      b: parseInt(color.substring(5, 7), 16),
    }
  }

  return { r: 0, g: 0, b: 0 }
}

export default parseColor
