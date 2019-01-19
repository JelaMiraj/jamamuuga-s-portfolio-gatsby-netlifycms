import '@babel/polyfill'
import '@babel/register'
import { colors } from './src/styles/themes/colors'

export const manifestConfig = {
  name: 'Jason Cady Portfolio',
  short_name: 'Jason Cady Portfolio',
  start_url: '/',
  background_color: colors.background,
  theme_color: colors.primary,
  display: 'browser',
  icon: 'src/img/logo.svg',
}

export default manifestConfig
