const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        //if (users[i].username === username && users[i].password === password) {
          if (users[i].username === username) {
          let existing = bcrypt.compareSync(password, users[i].password)
            if(existing) {
              let userObj = users[i]
              delete userObj.password
              res.status(200).send(userObj)
              return
            }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const {username, email, firstName, lastName, password} = req.body
        const salt = bcrypt.genSaltSync(7)
        const passHash = bcrypt.hashSync(password, salt)

        let newUser = {
          username,
          email,
          firstName,
          lastName,
          password: passHash
        }

        users.push(newUser)

        // console.log('Registering User')
        // console.log(req.body)
        // users.push(req.body)
        res.status(200).send(req.body)
    }
}