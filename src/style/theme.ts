import { extendTheme } from "@chakra-ui/react"

const colors = {
    orange: "	#ff7d1a",
    orangeLight:"#ffab6a",
    orangePale: "#ffeee2",
    greyDark: "#68707d",
    grey: "#b6bcc8",
    greyLight: "#f7f8fd"
  }
  export const theme = extendTheme({
    fonts: {
      heading: `'Kumbh Sans Bold'`,
      body: `'Kumbh Sans Regular'`,
    },
    colors,
    styles: {
      global: {}
    }
  })
  