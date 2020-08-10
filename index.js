const dns = require('dns')

// check valid IPs: https://help.duckduckgo.com/duckduckgo-help-pages/results/duckduckbot/
const DUCKDUCK_VALID_IP = [
  '50.16.241.113',
  '50.16.241.114',
  '50.16.241.117',
  '50.16.247.234',
  '52.204.97.54',
  '52.5.190.19',
  '54.197.234.188',
  '54.208.100.253',
  '23.21.227.69',
  '107.21.1.8',
  '40.88.21.235',
  '54.208.102.37'
]

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
