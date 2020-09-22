import CryptoJS from 'crypto-js'

export default class AuthController {
  static login (req, res) {
    try {
      const { email } = req.body
      var token = CryptoJS.AES.encrypt(email, 'secret key 123').toString()

      res.json({ token })
    } catch (error) {
      res.status(401)
    }
  }
}
