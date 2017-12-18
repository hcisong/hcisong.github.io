Highcharts.chart('bar_visit', {
  chart: {
    type: 'column',
    height: 500
  },
  title: {
    text: 'MUSEEN Visit'
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
      'Museum Brandhorst',
      'Münchner Stadtmuseum',
      'Deutsches Museum - Verkehrszentrum',
      'Deutsches Museum - Museumsinsel',
      'Bayerisches Nationalmuseum',
      'Alte Pinakothek',
      'Museum Mensch und Natur'
    ],
    title: {
      text: null
    },
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Besucherdauer/ Stunden',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: 'Besucherdauer',
      data: [
        2.5,
        2,
        2.5,
        2,
        2,
        2.5,
        2.5,
        3.5,
        2.5,
        2,
        null
      ]
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
