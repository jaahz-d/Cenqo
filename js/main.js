let ctx = document.getElementById('conversion-chart');

var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['03/08', '15/08/', '25/08', '30/08', '03/09'],
        datasets: [{
            label: 'Value',
            data: [0.8420, 0.8500, 0.8530, 0.8550, 0.8410],
            borderColor: 'rgb(81, 202, 225)',               
            borderWidth: 2,
            tension: 0.5,
            fill: true,
            backgroundColor: 'rgba(230, 244, 241, 0.5)',
            pointBackgroundColor: 'rgb(81, 202, 225)'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                min: 0.8400,
                max: 0.8600,

                grid: {
                    drawBorder: false
                }
            },

            x: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },

        plugins: {
           legend:{
               display: false
           },

           tooltip:{
               cornerRadius: 8
           }
        },

        elements: {
           point: {
             backgroundColor: 'rgb(81, 202, 225)',
             borderColor: 'rgb(81, 202, 225)',
             hitRadius: 2
           }
        }
    }
});