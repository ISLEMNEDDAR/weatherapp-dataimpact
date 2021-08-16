import cities from 'cities.json'

const cityOptions = cities.map(cite => {
  return {
    value: `${cite.name},${cite.country}`,
    label: cite.name,
  }
})

export default cityOptions
