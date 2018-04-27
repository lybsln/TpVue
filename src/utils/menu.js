import Layout from '@/views/layout/Layout'
const _import = require('@/router/_import_' + process.env.NODE_ENV)
export default (routers, data) => {
  generaMenu(routers, data)
}
function generaMenu(routers, data) {
  data.forEach((item) => {
    const menu = Object.assign({}, item)
    if (menu['component'] === 'Layout') {
      menu['component'] = Layout
    } else {
      menu['component'] = _import(item['component'])
    }
    if (item['children'] && item['children'].length > 0) {
      menu['children'] = []
      generaMenu(menu['children'], item['children'])
    }
    routers.push(menu)
  })
}
