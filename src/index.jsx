import { render } from 'react-dom'
import { Layout } from './layout'
import { WidgetRed } from './widget'

render(
  <Layout.WidgetRed>
    <WidgetRed />
  </Layout.WidgetRed>,
  document.getElementById('root')
)
