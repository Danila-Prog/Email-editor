export type Tstyle = 'Bold' | 'Italic' | "Underline"

export const applyStyle = (type: Tstyle, selectedText: string)=> {
  
  let formatText = selectedText

  switch (type) {
    case "Bold":
      formatText = "<b>" + selectedText + "</b>"
      break
    case "Italic":
      formatText = "<i>" + selectedText + "</i>"
      break
    case "Underline":
      formatText = "<u>" + selectedText + "</u>"
      break
    default:
		formatText = selectedText
  }
  return formatText
};
