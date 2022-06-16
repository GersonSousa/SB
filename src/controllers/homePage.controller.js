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
    frase:
      'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.',
    rank: '1º',
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

const auditados = (req, res) => {
  res.render('Colaborador/auditados', {
    PageTitle: 'Allrede Telecom - Atendimentos auditados',
    textTop: 'Atendimentos auditados',
  });
};

//Supervisor
const relatorio = (req, res) => {
  res.render('Supervisor/relatorio', {
    PageTitle: 'Allrede Telecom - Relatório',
    textTop: 'Relatório',
  });
};

const meuPainelSupervisor = (req, res) => {
  res.render('Supervisor/meu-painel', {
    PageTitle: 'Allrede Telecom - Meu painel',
    textTop: 'Meu painel',
    nome: 'Antonio Gerson de Sousa Silva',
    emoji: '😎',
  });
};

//Geral
const rank = (req, res) => {
  res.render('Geral/rank', {
    PageTitle: 'Allrede Telecom - Rank',
    textTop: 'Rank',
  });
};

const auditoria = (req, res) => {
  res.render('Geral/auditoria', {
    PageTitle: 'Allrede Telecom - Auditoria',
    textTop: 'Auditoria',
    setor: 'atendimento',
  });
};

const auditarColaborador = (req, res) => {
  res.render('Geral/auditoria-colaborador', {
    PageTitle: 'Allrede Telecom - Auditoria do colaborador',
    textTop: 'Auditoria do colaborador ',
  });
};
module.exports = {
  login,
  meuPainel,
  meuPerfil,
  auditados,
  relatorio,
  meuPainelSupervisor,
  rank,
  auditoria,
  auditarColaborador,
};
