// Area Chart for Purchased Orders
new ApexCharts(document.querySelector("#mainOrderChart"), {
    series: [{ name: 'Orders', data: [230, 225, 238, 360, 375, 210, 215, 180, 140, 220, 480] }],
    chart: { type: 'area', height: 250, toolbar: { show: false } },
    colors: ['#2c3e50'],
    stroke: { curve: 'smooth', width: 3 },
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0 } },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'] },
    dataLabels: { enabled: false }
}).render();

// Radial Chart for Performance
new ApexCharts(document.querySelector("#performanceRadial"), {
    series: [65],
    chart: { height: 280, type: 'radialBar' },
    plotOptions: {
        radialBar: {
            hollow: { size: '50%' },
            track: { background: '#f2f2f2' },
            dataLabels: {
                value: { fontSize: '32px', fontWeight: 'bold', offsetY: 10, formatter: (v) => v + '%' }
            }
        }
    },
    colors: ['#ff5e3a']
}).render();