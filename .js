$(function () {
    $('#container').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Flooding events in the US: Today and in 2045'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Washington, DC',
                'Atlantic City, NJ',
                'Cambridge, MA',
                'Philadelphia, PA',
                'Miami, FL',
                'Kings Poitn, NY',
                'Boston, MA'
            ],
            plotBands: [{ // visualize the countries
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'Events per year'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' events'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: '2045',
            data: [400, 250, 240, 165, 180, 140, 70]
        }, {
            name: 'Present',
            data: [50, 45, 30, 25, 20, 30, 18]
     
        }]
    });
});
