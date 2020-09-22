import { AuthController } from '../api/controllers/index.js'

export default class Routes {
  static loadRoutes(app) {
    app.post('/login', AuthController.login)
  }
}
