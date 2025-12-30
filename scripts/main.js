var options = {
  series: [{
    name: 'Purchased Dials',
    data: [235, 230, 240, 370, 380, 200, 210, 150, 110, 220, 480] 
  }],
  chart: {
    type: 'area',
    height: 350,
    toolbar: { show: false }, 
    zoom: { enabled: false }
  },
  colors: ['#2D2E3E'], 
  dataLabels: { enabled: false },
  stroke: {
    curve: 'smooth', 
    width: 3
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100]
    }
  },
  markers: {
    size: 0,
    hover: { size: 6 }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    min: 50,
    max: 500,
    tickAmount: 5
  },
  grid: {
    borderColor: '#f1f1f1',
    xaxis: { lines: { show: false } },
    yaxis: { lines: { show: true } }
  },
  tooltip: {
    custom: function({series, seriesIndex, dataPointIndex, w}) {
      return '<div class="custom-tooltip">' +
             '<span>' + series[seriesIndex][dataPointIndex] + ' Purchased Dials</span>' +
             '<br><b>In ' + w.globals.labels[dataPointIndex] + '</b>' +
             '</div>';
    }
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

//Radial Circle
var options = {
            series: [65], 
            chart: {
                height: 400,
               type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '50%',
                    },
                    track: {
                        background: '#f2f2f2', 
                        strokeWidth: '100%',
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            show: false, 
                        },
                        value: {
                            fontSize: '48px',
                            fontWeight: '700',
                            offsetY: 15,
                            formatter: function (val) {
                                return val + '%'
                            }
                        }
                    }
                }
            },
            fill: {
                type: 'solid',
                colors: ['#ff5e3a'] 
            },
            stroke: {
                lineCap: 'round' 
            },
            labels: ['Progress'],
        };

        var chart = new ApexCharts(document.querySelector("#radialChart"), options);
        chart.render();


   //Reminder
   var performanceOptions = {
    series: [65],
    chart: { type: 'radialBar', height: 250 },
    plotOptions: {
        radialBar: {
            hollow: { size: '65%' },
            track: { background: '#f2f2f2' },
            dataLabels: {
                name: { show: false },
                value: {
                    fontSize: '32px',
                    fontWeight: 'bold',
                    formatter: (val) => val + '%'
                }
            }
        }
    },
    colors: ['#f4a261'], 
    stroke: { lineCap: 'round' }
};

new ApexCharts(document.querySelector("#performanceChart"), performanceOptions).render();     