const express = require('express');

const router = express.Router();

const {
  login,
  meuPainel,
  meuPerfil,
} = require('../controllers/homePage.controller');

router.get('/', login);
router.get('/meu-painel', meuPainel);
router.get('/meu-perfil', meuPerfil);

module.exports = router;
