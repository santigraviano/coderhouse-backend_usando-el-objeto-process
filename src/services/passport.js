const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')
const { User } = require('../models')

const initializePassportLocal = (passport) => {
  const login = async (email, password, done) => {
    try {
      const user = await User.getByEmail(email)

      if (!user) {
        return done(null, false, { message: 'El usuario no existe.' })
      }

      const passwordMatch = await bcrypt.compare(password, user.password)

      if(!passwordMatch) {
        return done(null, false, { message: 'Contraseña incorrecta.' })
      }

      done(null, user)
    }
    catch(err) {
      done(err)
    }
  }

  const signup = async (req, email, password, done) => {
    try {
      const { firstname, lastname } = req.body

      password = await bcrypt.hash(password, 10)

      const id = await User.save({
        firstname,
        lastname,
        email,
        password
      })

      done(null, {
        id
      })
    }
    catch (err) {
      done(err)
    }
  }

  passport.use('login', new LocalStrategy({ usernameField: 'email' }, login))
  passport.use('signup', new LocalStrategy({ usernameField: 'email', passReqToCallback: true }, signup))

  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser(async (id, done) => {
    const { email, firstname, lastname } = await User.getById(id)
    done(null, {
      email,
      name: `${firstname} ${lastname}`,
      firstname,
      lastname
    })
  })
}

module.exports = {
  initializePassportLocal
}