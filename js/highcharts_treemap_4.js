Highcharts.chart('tree_chart_4', {
  series: [
    {
      type: "treemap",
      layoutAlgorithm: 'squarified',
      allowDrillToNode: true,
      levelIsConstant: false,
      alternateStartingDirection: true,
      levels: [
        {
          level: 1,
          layoutAlgorithm: 'squarified',
          dataLabels: {
            enabled: true,
            align: 'left',
            verticalAlign: 'top'
          }
        }
      ],
      data: [
        {
          name: 'Städtische Galerie im Lenbachhaus',
          id: 'A',
          color: '#969597'
        }, {
          name: 'Schackgalerie',
          id: 'B',
          color: '#D5AEB7'
        }, {
          name: 'Pinakothek der Moderne',
          id: 'C',
          color: '#CCCED7'
        }, {
          name: 'Neue Pinakothek',
          id: 'D',
          color: '#C7D0AE'
        }, {
          name: 'Museum Mensch und Natur',
          id: 'E',
          color: '#A5C2D4'
        }, {
          name: 'Museum Brandhorst',
          id: 'F',
          color: '#D9CFB3'
        }, {
          name: 'Münchner Stadtmuseum',
          id: 'G',
          color: '#AECCC4'
        }, {
          name: 'Deutsches Museum - Verkehrszentrum',
          id: 'H',
          colorValue: 8,
          color: '#D2BCA9'
        }, {
          name: 'Deutsches Museum - Museumsinsel',
          id: 'I',
          color: '#CB9D88'
        }, {
          name: 'Bayerisches Nationalmuseum',
          id: 'J',
          color: '#8D9C88'
        }, {
          name: 'Alte Pinakothek',
          id: 'K',
          color: '#DEEDEE'
        }, {
          name: 'Jan',
          parent: 'A',
          value: 21421
        }, {
          name: 'Feb',
          parent: 'A',
          value: 45477
        }, {
          name: 'Mar',
          parent: 'A',
          value: 55505
        }, {
          name: 'Apr',
          parent: 'A',
          value: 66164
        }, {
          name: 'May',
          parent: 'A',
          value: 33602
        }, {
          name: 'Jun',
          parent: 'A',
          value: 12765
        }, {
          name: 'Jul',
          parent: 'A',
          value: 15883
        }, {
          name: 'Aug',
          parent: 'A',
          value: 16071
        }, {
          name: 'Sep',
          parent: 'A',
          value: 13914
        }, {
          name: 'Oct',
          parent: 'A',
          value: 39796
        }, {
          name: 'Nov',
          parent: 'A',
          value: 40297
        }, {
          name: 'Dec',
          parent: 'A',
          value: 45528
        }, {
          name: 'Jan',
          parent: 'B',
          value: 624
        }, {
          name: 'Feb',
          parent: 'B',
          value: 615
        }, {
          name: 'Mar',
          parent: 'B',
          value: 537
        }, {
          name: 'Apr',
          parent: 'B',
          value: 459
        }, {
          name: 'May',
          parent: 'B',
          value: 605
        }, {
          name: 'Jun',
          parent: 'B',
          value: 424
        }, {
          name: 'Jul',
          parent: 'B',
          value: 455
        }, {
          name: 'Aug',
          parent: 'B',
          value: 555
        }, {
          name: 'Sep',
          parent: 'B',
          value: 580
        }, {
          name: 'Oct',
          parent: 'B',
          value: 853
        }, {
          name: 'Nov',
          parent: 'B',
          value: 628
        }, {
          name: 'Dec',
          parent: 'B',
          value: 510
        }, {
          name: 'Jan',
          parent: 'C',
          value: 23369
        }, {
          name: 'Feb',
          parent: 'C',
          value: 19581
        }, {
          name: 'Mar',
          parent: 'C',
          value: 22486
        }, {
          name: 'Apr',
          parent: 'C',
          value: 22644
        }, {
          name: 'May',
          parent: 'C',
          value: 27311
        }, {
          name: 'Jun',
          parent: 'C',
          value: 20282
        }, {
          name: 'Jul',
          parent: 'C',
          value: 22180
        }, {
          name: 'Aug',
          parent: 'C',
          value: 27428
        }, {
          name: 'Sep',
          parent: 'C',
          value: 20586
        }, {
          name: 'Oct',
          parent: 'C',
          value: 28582
        }, {
          name: 'Nov',
          parent: 'C',
          value: 20761
        }, {
          name: 'Dec',
          parent: 'C',
          value: 21259
        }, {
          name: 'Jan',
          parent: 'D',
          value: 18655
        }, {
          name: 'Feb',
          parent: 'D',
          value: 14513
        }, {
          name: 'Mar',
          parent: 'D',
          value: 17946
        }, {
          name: 'Apr',
          parent: 'D',
          value: 15399
        }, {
          name: 'May',
          parent: 'D',
          value: 20535
        }, {
          name: 'Jun',
          parent: 'D',
          value: 15397
        }, {
          name: 'Jul',
          parent: 'D',
          value: 20488
        }, {
          name: 'Aug',
          parent: 'D',
          value: 23672
        }, {
          name: 'Sep',
          parent: 'D',
          value: 20
        }, {
          name: 'Oct',
          parent: 'D',
          value: 1735
        }, {
          name: 'Nov',
          parent: 'D',
          value: 13632
        }, {
          name: 'Dec',
          parent: 'D',
          value: 14199
        }, {
          name: 'Jan',
          parent: 'E',
          value: 12983
        }, {
          name: 'Feb',
          parent: 'E',
          value: 12742
        }, {
          name: 'Mar',
          parent: 'E',
          value: 13122
        }, {
          name: 'Apr',
          parent: 'E',
          value: 12453
        }, {
          name: 'May',
          parent: 'E',
          value: 20335
        }, {
          name: 'Jun',
          parent: 'E',
          value: 8218
        }, {
          name: 'Jul',
          parent: 'E',
          value: 12700
        }, {
          name: 'Aug',
          parent: 'E',
          value: 11615
        }, {
          name: 'Sep',
          parent: 'E',
          value: 9689
        }, {
          name: 'Oct',
          parent: 'E',
          value: 15009
        }, {
          name: 'Nov',
          parent: 'E',
          value: 13102
        }, {
          name: 'Dec',
          parent: 'E',
          value: 8685
        }, {
          name: 'Jan',
          parent: 'F',
          value: 9139
        }, {
          name: 'Feb',
          parent: 'F',
          value: 7444
        }, {
          name: 'Mar',
          parent: 'F',
          value: 8852
        }, {
          name: 'Apr',
          parent: 'F',
          value: 6850
        }, {
          name: 'May',
          parent: 'F',
          value: 8492
        }, {
          name: 'Jun',
          parent: 'F',
          value: 7384
        }, {
          name: 'Jul',
          parent: 'F',
          value: 13177
        }, {
          name: 'Aug',
          parent: 'F',
          value: 14900
        }, {
          name: 'Sep',
          parent: 'F',
          value: 12655
        }, {
          name: 'Oct',
          parent: 'F',
          value: 13736
        }, {
          name: 'Nov',
          parent: 'F',
          value: 8231
        }, {
          name: 'Dec',
          parent: 'F',
          value: 7991
        }, {
          name: 'Jan',
          parent: 'G',
          value: 20540
        }, {
          name: 'Feb',
          parent: 'G',
          value: 15239
        }, {
          name: 'Mar',
          parent: 'G',
          value: 19613
        }, {
          name: 'Apr',
          parent: 'G',
          value: 12844
        }, {
          name: 'May',
          parent: 'G',
          value: 13860
        }, {
          name: 'Jun',
          parent: 'G',
          value: 10369
        }, {
          name: 'Jul',
          parent: 'G',
          value: 7415
        }, {
          name: 'Aug',
          parent: 'G',
          value: 9003
        }, {
          name: 'Sep',
          parent: 'G',
          value: 10183
        }, {
          name: 'Oct',
          parent: 'G',
          value: 12674
        }, {
          name: 'Nov',
          parent: 'G',
          value: 12991
        }, {
          name: 'Dec',
          parent: 'G',
          value: 9791
        }, {
          name: 'Jan',
          parent: 'H',
          value: 11761
        }, {
          name: 'Feb',
          parent: 'H',
          value: 8555
        }, {
          name: 'Mar',
          parent: 'H',
          value: 9972
        }, {
          name: 'Apr',
          parent: 'H',
          value: 8751
        }, {
          name: 'May',
          parent: 'H',
          value: 11831
        }, {
          name: 'Jun',
          parent: 'H',
          value: 5889
        }, {
          name: 'Jul',
          parent: 'H',
          value: 6243
        }, {
          name: 'Aug',
          parent: 'H',
          value: 10939
        }, {
          name: 'Sep',
          parent: 'H',
          value: 6959
        }, {
          name: 'Oct',
          parent: 'H',
          value: 12003
        }, {
          name: 'Nov',
          parent: 'H',
          value: 8400
        }, {
          name: 'Dec',
          parent: 'H',
          value: 6503
        }, {
          name: 'Jan',
          parent: 'I',
          value: 75901
        }, {
          name: 'Feb',
          parent: 'I',
          value: 67227
        }, {
          name: 'Mar',
          parent: 'I',
          value: 104311
        }, {
          name: 'Apr',
          parent: 'I',
          value: 102278
        }, {
          name: 'May',
          parent: 'I',
          value: 102930
        }, {
          name: 'Jun',
          parent: 'I',
          value: 74904
        }, {
          name: 'Jul',
          parent: 'I',
          value: 110894
        }, {
          name: 'Aug',
          parent: 'I',
          value: 136334
        }, {
          name: 'Sep',
          parent: 'I',
          value: 74198
        }, {
          name: 'Oct',
          parent: 'I',
          value: 105224
        }, {
          name: 'Nov',
          parent: 'I',
          value: 64062
        }, {
          name: 'Dec',
          parent: 'I',
          value: 72591
        }, {
          name: 'Jan',
          parent: 'J',
          value: 6183
        }, {
          name: 'Feb',
          parent: 'J',
          value: 13273
        }, {
          name: 'Mar',
          parent: 'J',
          value: 11621
        }, {
          name: 'Apr',
          parent: 'J',
          value: 9536
        }, {
          name: 'May',
          parent: 'J',
          value: 13801
        }, {
          name: 'Jun',
          parent: 'J',
          value: 2532
        }, {
          name: 'Jul',
          parent: 'J',
          value: 10686
        }, {
          name: 'Aug',
          parent: 'J',
          value: 4943
        }, {
          name: 'Sep',
          parent: 'J',
          value: 4637
        }, {
          name: 'Oct',
          parent: 'J',
          value: 9008
        }, {
          name: 'Nov',
          parent: 'J',
          value: 9141
        }, {
          name: 'Dec',
          parent: 'J',
          value: 10585
        }, {
          name: 'Jan',
          parent: 'K',
          value: 54261
        }, {
          name: 'Feb',
          parent: 'K',
          value: 28355
        }, {
          name: 'Mar',
          parent: 'K',
          value: 12086
        }, {
          name: 'Apr',
          parent: 'K',
          value: 12749
        }, {
          name: 'May',
          parent: 'K',
          value: 17578
        }, {
          name: 'Jun',
          parent: 'K',
          value: 15103
        }, {
          name: 'Jul',
          parent: 'K',
          value: 19795
        }, {
          name: 'Aug',
          parent: 'K',
          value: 23021
        }, {
          name: 'Sep',
          parent: 'K',
          value: 18027
        }, {
          name: 'Oct',
          parent: 'K',
          value: 22501
        }, {
          name: 'Nov',
          parent: 'K',
          value: 13584
        }, {
          name: 'Dec',
          parent: 'K',
          value: 15344
        }
      ]
    }
  ],
  title: {
    text: 'Besucheranzahl von 11 Mussen in 2015'
  },
  subtitle: {
    text: 'Hier wird die Proportion der Anzahl der Besucher/innen von 11 Museen gezeigt. Die Fläche von jeder Farbe repräsentiert die Anzahl der Besucher/innen von dem jeweiligen Museum, mit einem Klick auf die jeweilige Farbe können Sie noch mehr Details von jedem Monat entdecken.<br>Je größer die Fläche, desto mehr Personen haben in diesem Jahr das entsprechende Museum besucht. Sie können durch die Pfeile zwischen den Jahren 2012 bis 2016 wechseln.'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    treemap: {
      dataLabels: {
        style: {
          textOutline: false
        }
      }
    }
  },
  exporting: {
    enabled: false
  }
});
