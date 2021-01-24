import Chart from 'chart.js'

export const chartOne = () => {
  // const chartOneDOM = document.getElementById('chartOne');
  //
  // Chart.defaults.global.defaultFontColor = '#2D2D2D';
  //
  // const data = {
  //   backdropColor: '#E3D4FD',
  //   labels: ['1%', '2%', '3%', '4%', '5%'],
  //   dataset: [{
  //     label: '# of Votes',
  //     data: [110, 22, 33, 44, 55],
  //     backdropColor: [
  //       'rgba(126, 9, 251, 1)',
  //       'rgba(126, 9, 251, 0.9)',
  //       'rgba(126, 9, 251, 0.8)',
  //       'rgba(126, 9, 251, 0.7)',
  //       'rgba(126, 9, 251, 0.6)'
  //     ],
  //     borderColor: [
  //       'rgba(255, 99, 132, 1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)'
  //     ],
  //     borderWidth: 1
  //   }]
  // }
  //
  // const options = {
  //   scales: {
  //     yAxes: [{
  //       ticks: {
  //         beginAtZero: true
  //       }
  //     }]
  //   },
  //   legend: {
  //     labels: {
  //       fontColor: '#2D2D2D',
  //       fontFamily: "'Open Sans', sans-serif",
  //       fontSize: 16
  //     }
  //   }
  // }
  //
  // new Chart(chartOneDOM, {
  //   type: 'bar',
  //   data,
  //   options
  // })

  const ctx = document.getElementById('chartOne');
  const chartOne = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['5%', '4%', '3%', '2%', '1%'],
      datasets: [{
        label: '# of Votes',
        data: [1254, 1003, 753, 502, 251],
        backgroundColor: [
          'rgb(126, 9, 251)',
          'rgb(126, 9, 251)',
          'rgb(126, 9, 251)',
          'rgb(126, 9, 251)',
          'rgb(126, 9, 251)'
        ],
        borderColor: [
          'rgb(126, 9, 251)',
          'rgb(126, 9, 251)',
          'rgb(126, 9, 251)',
          'rgb(126, 9, 251)',
          'rgb(126, 9, 251)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        scaleLabel: {
          labelString: 'kupa'
        }
      }
    }
  });
  new Chart(ctx, {
    type: 'bar',
    data,
    options
  })
}
