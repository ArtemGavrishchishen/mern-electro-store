const { Router } = require('express')

const TechnicsController = require('../controllers/technics.controller')

const router = Router()
router
  .route('/')
  .get(TechnicsController.getTechnics)
  .post(TechnicsController.createTechnic)
  .put(TechnicsController.updateTechnic)
  .delete(TechnicsController.deleteTechnic)

module.exports = router
