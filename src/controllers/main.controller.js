const args = require('../services/args')

class MainController {
  index(req, res) {
    const { user } = req
    res.render('index', { user })
  }

  info(req, res) {
    const info = {
      args: JSON.stringify(args, null, 2),
      execPath: process.execPath,
      platform: process.platform,
      pid: process.pid,
      version: process.version,
      projectPath: process.cwd(),
      rss: JSON.stringify(process.memoryUsage(), null, 2)
    }
    res.render('info', { info })
  }
}

module.exports = new MainController()