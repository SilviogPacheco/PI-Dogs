const { Router } = require("express");
const dogRoutes = require("./Dog.routes");
const temperamentsRouter = require("./Temperament.routes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogRoutes);
router.use("/temperaments", temperamentsRouter);

module.exports = router;
