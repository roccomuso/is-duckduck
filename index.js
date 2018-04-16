const dns = require('dns')

// check valid IPs: https://duckduckgo.com/duckduckbot
const DUCKDUCK_VALID_IP = ['72.94.249.34', '72.94.249.35', '72.94.249.36', '72.94.249.37', '72.94.249.38']

function isDuckDuck (ip) {
  return new Promise((resolve, reject) => {
    dns.reverse(ip, (err) => {
      if (err) {
        return reject(err)
      }
      if (DUCKDUCK_VALID_IP.includes(ip)) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}

module.exports = isDuckDuck
