Highcharts.chart('bar_prices', {
    chart: {
        type: 'column',
        height: 500
    },
    title: {
        text: 'MUSEEN Preis'
    },
    subtitle: {
        text: 'xxx'
    },
    xAxis: {
      categories: [
        'Städtische Galerie im Lenbachhaus',
        'Schackgalerie',
        'Pinakothek der Moderne',
        'Neue Pinakothek',
        'Museum Mensch und Natur',
        'Museum Brandhorst',
        'Münchner Stadtmuseum',
        'Deutsches Museum - Verkehrszentrum',
        'Deutsches Museum - Museumsinsel',
        'Bayerisches Nationalmuseum',
        'Alte Pinakothek'
      ],
      title: {
        text: null
      },
      crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Preis/ Euro',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    legend: {
       reversed: true
     },
     plotOptions: {
      column: {
       pointPadding: 0.2,
       borderWidth: 0
     }
     },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 0,
      floating: false,
      borderWidth: 0,
      backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
      shadow: false
    },
    credits: {
        enabled: false
    },

  series: [
    {
      name: 'Eintrittsprise',
      data: [12,4,10,7,3.5,7,7,6,11,7,4]
    }, {
      name: 'Ermäßigt',
      data: [6,3,7,5,2.5,5,3.5,3,4,6,2],
      showInLegend: true
    }


  ]

  // responsive: {
  //   rules: [
  //     {
  //       condition: {
  //         maxWidth: 500
  //       },
  //       chartOptions: {
  //         legend: {
  //           layout: 'horizontal',
  //           align: 'center',
  //           verticalAlign: 'bottom'
  //         }
  //       }
  //     }
  //   ]
  // }

});
