import "styled-components"
import themes from "./default"

declare module "styled-components" {
  type ThemeType = typeof themes

  export type DefaultTheme = ThemeType
}
