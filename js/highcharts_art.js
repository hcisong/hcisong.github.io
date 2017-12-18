Highcharts.chart('bar_art', {
  chart: {
    type: 'bar',
    height: 500
  },
  title: {
    text: 'MUSEEN Katalog Art'
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
        618397,
        771247,
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
        11379.4,
        13857.4,
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
        9391.4,
        14107.4,
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
        10881.8,
        21169,
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
        10471,
        13547.6,
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
        8898.2,
        13699.2,
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
        7944.6,
        9616.6,
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
        10677.6,
        10690.2,
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
        11830,
        7026.6,
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
        9500.8,
        10131,
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
        13561.6,
        13746,
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
        10605,
        15640.4,
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
        8538,
        11018,
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
