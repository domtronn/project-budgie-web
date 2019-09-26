export default (cases) => (prop, ...data) => {
  const f = Object.prototype.hasOwnProperty.call(cases, prop)
    ? cases[prop]
    : cases.default

  return f instanceof Function ? f(...data) : f
}
