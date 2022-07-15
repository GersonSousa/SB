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
  auditarColaborador,
  parecer,
  auditor,
} = require('../controllers/homePage.controller');

router.get('/', login);
router.get('/meu-painel', meuPainel);
router.get('/meu-perfil', meuPerfil);
router.get('/atendimentos-auditados', auditados);
router.get('/relatorio', relatorio);
router.get('/meu-painel-supervisor', meuPainelSupervisor);
router.get('/meu-painel-auditor', auditor);
router.get('/auditar', auditoria);
router.get('/rank', rank);
router.get('/auditar-colaborador', auditarColaborador);
router.get('/parecer', parecer);

module.exports = router;
