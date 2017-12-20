Highcharts.chart('bar_prices', {
  chart: {
    zoomType: 'xy'
  },
  title: {
    text: 'Average Monthly Temperature and Rainfall in Tokyo'
  },
  subtitle: {
    text: 'Source: WorldClimate.com'
  },
  xAxis: [
    {
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
      crosshair: true
    }
  ],
  yAxis: [
    {
      title: {
        text: 'Besucherdauer',
        style: {
          color: '#879A87'
        }
      },
      labels: {
        format: '{value} Stunden',
        style: {
          color: '#879A87'
        }
      },
      opposite: true
    },
    {
      title: {
        text: 'Preis',
        style: {
          color: '#CC9D86'
        }
      },
      labels: {
        format: '{value} Euro',
        style: {
          color: '#CC9D86'
        }
      }
    }
  ],
  tooltip: {
    shared: true
  },
  legend: {
    enabled: true,
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
      type: 'column',
      yAxis: 1,
      data: [
        12,
        4,
        10,
        7,
        3.5,
        7,
        7,
        6,
        11,
        7,
        4
      ],
      color: '#CC9D86',
      tooltip: {
        valueSuffix: ' Euro'
      }
    }, {
      name: 'Ermäßigt',
      type: 'column',
      yAxis: 1,
      data: [
        6,
        3,
        7,
        5,
        2.5,
        5,
        3.5,
        3,
        4,
        6,
        2
      ],
      color: '#A6B9C4',
      tooltip: {
        valueSuffix: ' Euro'
      }
    }, {
      name: 'Besucherdauer',
      type: 'line',
      data: [
        2.5,
        2,
        2.5,
        2,
        null,
        2,
        2.5,
        2.5,
        3.5,
        2.5,
        2
      ],
      color: '#879A87',
      tooltip: {
        valueSuffix: ' Stunden'
      }
    }
  ]
});
