Highcharts.chart('bar_science', {
    chart: {
      type: 'bar',
      height: 500
    },
    title: {
      text: 'Besucherzahl von MUSEEN (über die Wisseschaft)'
    },
    subtitle: {
      text: 'Klick die untere Kreises, um der Monat zu wechseln.'
    },
    xAxis: {
      categories: [
        'Deutsches Museum - Museumsinsel',
        'Museum Mensch und Natur',
        'Deutsches Museum - Verkehrszentrum'
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
                    show: function () {
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
                        if(this.visible){
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
      data: [5189187,913535,552422]
    }, {
      name: 'Jan',
      data: [73152.4,17107,11115.4],
      showInLegend: true,
      visible: false
    }, {
      name: 'Feb',
      data: [65904.8,16260.6,8526.8],
      showInLegend: true,
      visible: false
    }, {
      name: 'Mar',
      data: [93597.6,17187.6,9210.2],
      showInLegend: true,
      visible: false
    }, {
      name: 'Apr',
      data: [99393.2,20659.8,9916.2],
      showInLegend: true,
      visible: false
    }, {
      name: 'May',
      data: [90472,20156.6,10653.6],
      showInLegend: true,
      visible: false
    }, {
      name: 'Jun',
      data: [74242.2,13628.6,7795.6],
      showInLegend: true,
      visible: false
    }, {
      name: 'Jul',
      data: [110887.6,15082.6,8511.6],
      showInLegend: true,
      visible: false
    }, {
      name: 'Aug',
      data: [122485.8,14796.6,10984],
      showInLegend: true,
      visible: false
    }, {
      name: 'Sep',
      data: [68514,10518.2,6829.8],
      showInLegend: true,
      visible: false
    }, {
      name: 'Oct',
      data: [101916,15143,10549.4],
      showInLegend: true,
      visible: false
    }, {
      name: 'Nov',
      data: [65403.2,12680.8,8793.4],
      showInLegend: true,
      visible: false
    }, {
      name: 'Dec',
      data: [71868.6,9485.6,7598.4],
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
