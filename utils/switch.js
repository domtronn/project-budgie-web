export default (cases) => (prop, ...data) => {
  const f = cases.hasOwnProperty(prop)
    ? cases[prop]
    : cases.default

  return f instanceof Function ? f(...data) : f
}
