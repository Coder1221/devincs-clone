export const ResponsiveContainer = ({ children, width, height }) => {
  return <div style={{ width: width, height: height }}>{children}</div>
}

export const LineChart = ({ children, data }) => {
  return <div>{children}</div>
}

export const Line = ({ type, dataKey, stroke, strokeWidth, dot }) => {
  return null
}

export const AreaChart = ({ children, data }) => {
  return <div>{children}</div>
}

export const Area = ({ type, dataKey, stroke, fill, name }) => {
  return null
}

export const BarChart = ({ children, data }) => {
  return <div>{children}</div>
}

export const Bar = ({ dataKey, fill, name }) => {
  return null
}

export const XAxis = ({ dataKey, stroke }) => {
  return null
}

export const YAxis = ({ stroke }) => {
  return null
}

export const CartesianGrid = ({ strokeDasharray, stroke }) => {
  return null
}

export const Tooltip = ({ contentStyle, itemStyle }) => {
  return null
}

export const Legend = () => {
  return null
}
