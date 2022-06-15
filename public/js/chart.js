const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    datasets: [
      {
        label: 'Quantidade de atendimentos',
        data: [10, 20, 30, 40, 50, 60, 70],
        backgroundColor: [
          'rgba(155, 20, 125, 1)',
          'rgba(249, 168, 38, 1)',
          'rgba(82, 34, 118, 1)',
          'rgba(104, 66, 194, 1)',
          'rgba(249, 168, 38, 1)',
          'rgba(155, 20, 125, 1)',
        ],
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  },
});
