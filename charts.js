  // Bar Chart
  const ctx1 = document.getElementById('barChart').getContext('2d');
  new Chart(ctx1, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  // Pie Chart
  const ctx2 = document.getElementById('pieChart').getContext('2d');
  new Chart(ctx2, {
      type: 'pie',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  // Line Chart
  const ctx3 = document.getElementById('lineChart').getContext('2d');
  new Chart(ctx3, {
      type: 'line',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
              label: 'Sales',
              data: [65, 59, 80, 81, 56, 55],
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  

         // Pie Chart
         const ctx = document.getElementById('scatterChart').getContext('2d');
         new Chart(ctx, {
             type: 'scatter',
             data: {
                 datasets: [{
                     label: '# of Votes',
                     data: [
                         { x: 1, y: 12 },
                         { x: 2, y: 19 },
                         { x: 3, y: 3 },
                         { x: 4, y: 5 },
                         { x: 5, y: 2 },
                         { x: 6, y: 3 }
                     ],
                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
                     borderColor: 'rgba(255, 99, 132, 1)',
                     borderWidth: 1
                 }]
             },
             options: {
                 scales: {
                     x: {
                         type: 'linear',
                         position: 'bottom'
                     },
                     y: {
                         beginAtZero: true
                     }
                 }
             }
         });