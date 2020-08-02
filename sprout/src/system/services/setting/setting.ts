import fs from 'fs'

const loadSetting = ():object => {
  const json = JSON.parse(fs.readFileSync('./input.json', 'utf8'))
  return json
}

const saveSetting = (json: object) => {
  fs.writeFileSync('./output.json', JSON.stringify(json))
}

export {
  loadSetting,
  saveSetting
}
