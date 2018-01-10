Highcharts.chart('bar_basic', {
  chart: {
    type: 'bar',
    height: 500
  },
  title: {
    text: 'Besucheranzahl von jedem Museum',
    style: {
      fontSize: '18px',
      fontWeight: '400'
    }
  },
  subtitle: {
    text: 'Klicken Sie die Legende, um das Museum zu wechseln.'
  },
  exporting: {
    enabled: false
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
      text: 'Anzahl der Besucher',
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
    },
    series: {
      events: {
        show: function() {
          var chart = this.chart,
            series = chart.series,
            i = series.length,
            otherSeries;
          while (i--) {
            otherSeries = series[i];
            if (otherSeries != this && otherSeries.visible) {
              otherSeries.hide();
            }
          }
        },
        legendItemClick: function() {
          if (this.visible) {
            return false;
          }
        }
      }
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
      name: 'all',
      data: [
        1427334,
        44238,
        1276072,
        1101355,
        913535,
        618397,
        771247,
        552422,
        5189187,
        529700,
        1223158
      ]
    }, {
      name: 'Jan',
      data: [
        20466.8,
        810.2,
        30329.6,
        18390,
        17107,
        11379.4,
        13857.4,
        11115.4,
        73152.4,
        6639,
        28069.8
      ],
      showInLegend: true,
      visible: false
    }, {
      name: 'Feb',
      data: [
        26423.8,
        802.2,
        24069.4,
        17180,
        16260.6,
        9391.4,
        14107.4,
        8526.8,
        65904.8,
        7590.2,
        17437.4
      ],
      showInLegend: true,
      visible: false
    }, {
      name: 'Mar',
      data: [
        24899.2,
        773.6,
        20583.4,
        21402.8,
        17187.6,
        10881.8,
        21169,
        9210.2,
        93597.6,
        6611.4,
        18848.6
      ],
      showInLegend: true,
      visible: false
    }, {
      name: 'Apr',
      data: [
        25536,
        672.8,
        23724.2,
        20673.2,
        20659.8,
        10471,
        13547.6,
        9916.2,
        99393.2,
        6885.6,
        20913
      ],
      showInLegend: true,
      visible: false
    }, {
      name: 'May',
      data: [
        32056.8,
        746.6,
        19874,
        20152.2,
        20156.6,
        8898.2,
        13699.2,
        10653.6,
        90472,
        11505,
        21738.8
      ],
      showInLegend: true,
      visible: false
    }, {
      name: 'Jun',
      data: [
        18633.2,
        677.6,
        17687,
        16578,
        13628.6,
        7944.6,
        9616.6,
        7795.6,
        74242.2,
        7758.2,
        18067.6
      ],
      showInLegend: true,
      visible: false
    }, {
      name: 'Jul',
      data: [
        20791,
        668.6,
        20470.6,
        20924.2,
        15082.6,
        10677.6,
        10690.2,
        8511.6,
        110887.6,
        11007.6,
        20895
      ],
      showInLegend: true,
      visible: false
    }, {
      name: 'Aug',
      data: [
        20750.4,
        592.6,
        17993.6,
        23499.6,
        14796.6,
        11830,
        7026.6,
        10984,
        122485.8,
        8881.8,
        23852.4
      ],
      showInLegend: true,
      visible: false
    }, {
      name: 'Sep',
      data: [
        16623.6,
        537,
        15784.8,
        12249,
        10518.2,
        9500.8,
        10131,
        6829.8,
        68514,
        6083.4,
        15631.6
      ],
      showInLegend: true,
      visible: false
    }, {
      name: 'Oct',
      data: [
        29315.4,
        1121.8,
        23440.8,
        16329.8,
        15143,
        13561.6,
        13746,
        10549.4,
        101916,
        10742.4,
        19506
      ],
      showInLegend: true,
      visible: false
    }, {
      name: 'Nov',
      data: [
        24441.8,
        824.4,
        21427.4,
        16179.4,
        12680.8,
        10605,
        15640.4,
        8793.4,
        65403.2,
        8230,
        19039.6
      ],
      showInLegend: true,
      visible: false
    }, {
      name: 'Dec',
      data: [
        25528.8,
        620.2,
        19829.6,
        16712.8,
        9485.6,
        8538,
        11018,
        7598.4,
        71868.6,
        14005.4,
        20631.8
      ],
      showInLegend: true,
      visible: false
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
