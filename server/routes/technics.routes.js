const { Router } = require('express')
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })

const Validator = require('../enhancers/validator')
const TechnicsController = require('../controllers/technics.controller')

const router = Router()

// router.route('/:category?/:id?').get(TechnicsController.getTechnics)

router
  .route('/:category?/:id?')
  .get(TechnicsController.getTechnics)
  .put(TechnicsController.updateTechnic)
  .delete(TechnicsController.deleteTechnic)

router
  .route('/')
  .post(
    upload.single('files'),
    Validator.baseTechnics,
    TechnicsController.createTechnic
  )

module.exports = router
