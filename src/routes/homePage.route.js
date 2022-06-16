const express = require('express');

const router = express.Router();

const {
  login,
  meuPainel,
  meuPerfil,
  auditados,
  relatorio,
  meuPainelSupervisor,
  auditoria,
  rank,
} = require('../controllers/homePage.controller');

router.get('/', login);
router.get('/meu-painel', meuPainel);
router.get('/meu-perfil', meuPerfil);
router.get('/atendimentos-auditados', auditados);
router.get('/relatorio', relatorio);
router.get('/meu-painel-supervisor', meuPainelSupervisor);
router.get('/auditar', auditoria);
router.get('/rank', rank);

module.exports = router;
