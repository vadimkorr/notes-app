const fs = require('fs')

const createDataPersist = (path) => {
  const saveData = (data) => {
    fs.writeFileSync(path, JSON.stringify(data))
  }

  const getData = () => {
    try {
      const data = fs.readFileSync(path)
      return JSON.parse(data)
    } catch (error) {
      console.log('getData failed', error)
      return {}
    }
  }

  return {
    saveData,
    getData,
  }
}

module.exports = {
  createDataPersist,
}
