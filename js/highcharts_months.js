Highcharts.chart('bar_months', {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Besucheranzahl von jedem Museum'
  },
  subtitle: {
    text: 'Klicken die Legende, um die Museum zu wechseln.'
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
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
  plotOptions: {
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
  credits: {
    enabled: false
  },

  series: [
    {
      name: 'Städtische Galerie im Lenbachhaus',
      data: [
        20466.8,
        26423.8,
        24899.2,
        25536,
        32056.8,
        18633.2,
        20791,
        20750.4,
        16623.6,
        29315.4,
        24441.8,
        25528.8
      ],
      color: '#969597',
      visible: false
    }, {
      name: 'Schackgalerie',
      data: [
        810.2,
        802.2,
        773.6,
        672.8,
        746.6,
        677.6,
        668.6,
        592.6,
        537,
        1121.8,
        824.4,
        620.2
      ],
      color: '#D5AEB7',
      visible: false
    }, {
      name: 'Pinakothek der Moderne',
      data: [
        30329.6,
        24069.4,
        20583.4,
        23724.2,
        19874,
        17687,
        20470.6,
        17993.6,
        15784.8,
        23440.8,
        21427.4,
        19829.6
      ],
      color: '#CCCED7',
      visible: false
    }, {
      name: 'Neue Pinakothek',
      data: [
        18390,
        17180,
        21402.8,
        20673.2,
        20152.2,
        16578,
        20924.2,
        23499.6,
        12249,
        16329.8,
        16179.4,
        16712.8
      ],
      color: '#C7D0AE',
      visible: false
    }, {
      name: 'Museum Mensch und Natur',
      data: [
        17107,
        16260.6,
        17187.6,
        20659.8,
        20156.6,
        13628.6,
        15082.6,
        14796.6,
        10518.2,
        15143,
        12680.8,
        9485.6
      ],
      color: '#A5C2D4',
      visible: false
    }, {
      name: 'Museum Brandhorst',
      data: [
        11379.4,
        9391.4,
        10881.8,
        10471,
        8898.2,
        7944.6,
        10677.6,
        11830,
        9500.8,
        13561.6,
        10605,
        8538
      ],
      color: '#A9988C',
      visible: false
    }, {
      name: 'Münchner Stadtmuseum',
      data: [
        13857.4,
        14107.4,
        21169,
        13547.6,
        13699.2,
        9616.6,
        10690.2,
        7026.6,
        10131,
        13746,
        15640.4,
        11018
      ],
      color: '#AECCC4',
      visible: false
    }, {
      name: 'Deutsches Museum - Verkehrszentrum',
      data: [
        11115.4,
        8526.8,
        9210.2,
        9916.2,
        10653.6,
        7795.6,
        8511.6,
        10984,
        6829.8,
        10549.4,
        8793.4,
        7598.4
      ],
      color: '#D2BCA9',
      visible: false
    }, {
      name: 'Deutsches Museum - Museumsinsel',
      data: [
        73152.4,
        65904.8,
        93597.6,
        99393.2,
        90472,
        74242.2,
        110887.6,
        122485.8,
        68514,
        101916,
        65403.2,
        71868.6
      ],
      color: '#CB9D88'
    }, {
      name: 'Bayerisches Nationalmuseum',
      data: [
        6639,
        7590.2,
        6611.4,
        6885.6,
        11505,
        7758.2,
        11007.6,
        8881.8,
        6083.4,
        10742.4,
        8230,
        14005.4
      ],
      color: '#8D9C88',
      visible: false
    }, {
      name: 'Alte Pinakothek',
      data: [
        28069.8,
        17437.4,
        18848.6,
        20913,
        21738.8,
        18067.6,
        20895,
        23852.4,
        15631.6,
        19506,
        19039.6,
        20631.8
      ],
      color: '#9ACCD9',
      visible: false
    }

  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }
    ]
  }

});
