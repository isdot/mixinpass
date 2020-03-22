import Vue from 'vue'

import SvgIcon from './svg-icon/SvgIcon'
import Topbar from './Topbar'
import About from './About'
import PasswordList from './PasswordList'
import Generate from './Generate'
import Footer from './Footer'

const components = {
  SvgIcon,
  Topbar,
  About,
  PasswordList,
  Generate,
  Footer
}
Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

const req = require.context('@/assets/images', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
