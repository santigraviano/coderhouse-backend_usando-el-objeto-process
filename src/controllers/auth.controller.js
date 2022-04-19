class AuthController {

  signupForm(req, res) {
    res.render('auth/signup')
  }

  loginForm(req, res) {
    res.render('auth/login')
  }

  logout(req, res) {
    const { user } = req
    req.logout()
    res.render('auth/logout', { user })
  }
}

module.exports = new AuthController()