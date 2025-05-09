import { Router } from 'express'
import { 
  getMedicamentosByReceta,
  createMedicamentos,
  getMedicamentosByTipo, 
  deleteMedicamentos, 
  getMedicamentosById,
  getMedicamentos, 
  updateMedicamentos 
} from '../controllers/medicamentos.controller.js'

const router = Router()

// REST API = verbos
router.get('/medicamentos/receta/:receta', getMedicamentosByReceta);
router.get('/medicamentos/tipo/:tipo', getMedicamentosByTipo);

router.get('/medicamentos', getMedicamentos)
router.get('/medicamentos/:id', getMedicamentosById)

router.post('/medicamentos', createMedicamentos)

router.put('/medicamentos/:id', updateMedicamentos)

router.delete('/medicamentos/:id', deleteMedicamentos)




export default router
