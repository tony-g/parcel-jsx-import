function WidgetBlue({ children }) {
  return <div style={{ backgroundColor: 'blue' }}>{children}</div>
}

function WidgetRed({ children }) {
  return <div style={{ backgroundColor: 'red' }}>{children}</div>
}

export const Layout = { WidgetBlue, WidgetRed }
