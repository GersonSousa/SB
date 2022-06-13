const login = (req, res) => {
  res.render('homePage/login', {
    PageTitle: 'Allrede Telecom - Login',
  });
};

const meuPainel = (req, res) => {
  res.render('Colaborador/meu-painel', {
    PageTitle: 'Allrede Telecom - Meu painel',
    textTop: 'Meu Painel',
    nome: 'Antonio Gerson de Sousa Silva',
    emoji: '😊',
    dinheiro: '50,00',
  });
};

const meuPerfil = (req, res) => {
  res.render('Colaborador/meu-perfil', {
    PageTitle: 'Allrede Telecom - Meu perfil',
    textTop: 'Meu Perfil',
    nome: 'Antonio Gerson de Sousa Silva',
    cargo: 'Líder',
    setor: 'Atendimento',
  });
};

module.exports = { login, meuPainel, meuPerfil };
