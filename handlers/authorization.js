const { Router } = require("express");
const AuthorizationService = require("../services/authorizationService");
const md5 = require("blueimp-md5");

const authorizationHandler = (db) => {
  const router = Router();

  const authService = new AuthorizationService(db);

  router.post("/signup", async (req, res, next) => {
    const { name, email, password } = req.body;

    const hashpassword = md5("notSecretKey", password);

    await authService.createUser(name, email, hashpassword, (error) => {
      if (error) {
        res.status(400).json(error.message);
        return;
      }

      res.status(201).json({ msg: "User Created" });
    });
  });

  router.post("/signin", async (req, res, next) => {
    const { email, password } = req.body;

    const hashpassword = md5("notSecretKey", password);

    await authService.findUser(email, hashpassword, (error, results) => {
      if (error) {
        res.status(400).json(error.message);
        return;
      }

      res.status(201).json(results);
    });
  });

  router.get("/table", async (req, res, next) => {
    await authService.getList((error, results) => {
      if (error) {
        res.status(400).json(error.message);
        return;
      }

      res.status(201).json(results);
    });
  });

  return router;
};

module.exports = authorizationHandler;
