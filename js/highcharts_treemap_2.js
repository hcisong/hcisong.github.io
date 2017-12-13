Highcharts.chart('tree_chart_2', {

  series: [
    {
      type: "treemap",
      layoutAlgorithm: 'squarified',
      allowDrillToNode: true,
      alternateStartingDirection: true,
      levels: [
        {
          level: 1,
          layoutAlgorithm: 'sliceAndDice',
          dataLabels: {
            enabled: true,
            align: 'left',
            verticalAlign: 'top',
            style: {
              fontSize: '15px',
              fontWeight: 'bold'
            }
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
          name: 'Jan 2013',
          parent: 'A',
          value: 2973
        }, {
          name: 'Feb 2013',
          parent: 'A',
          value: 1704
        }, {
          name: 'Mar 2013',
          parent: 'A',
          value: 0
        }, {
          name: 'Apr 2013',
          parent: 'A',
          value: 0
        }, {
          name: 'May 2013',
          parent: 'A',
          value: 72835
        }, {
          name: 'Jun 2013',
          parent: 'A',
          value: 41676
        }, {
          name: 'Jul 2013',
          parent: 'A',
          value: 39808
        }, {
          name: 'Aug 2013',
          parent: 'A',
          value: 41941
        }, {
          name: 'Sep 2013',
          parent: 'A',
          value: 40164
        }, {
          name: 'Oct 2013',
          parent: 'A',
          value: 48753
        }, {
          name: 'Nov 2013',
          parent: 'A',
          value: 41696
        }, {
          name: 'Dec 2013',
          parent: 'A',
          value: 41475
        }, {
          name: 'Jan 2013',
          parent: 'B',
          value: 1012
        }, {
          name: 'Feb 2013',
          parent: 'B',
          value: 812
        }, {
          name: 'Mar 2013',
          parent: 'B',
          value: 1102
        }, {
          name: 'Apr 2013',
          parent: 'B',
          value: 750
        }, {
          name: 'May 2013',
          parent: 'B',
          value: 765
        }, {
          name: 'Jun 2013',
          parent: 'B',
          value: 489
        }, {
          name: 'Jul 2013',
          parent: 'B',
          value: 493
        }, {
          name: 'Aug 2013',
          parent: 'B',
          value: 505
        }, {
          name: 'Sep 2013',
          parent: 'B',
          value: 386
        }, {
          name: 'Oct 2013',
          parent: 'B',
          value: 522
        }, {
          name: 'Nov 2013',
          parent: 'B',
          value: 816
        }, {
          name: 'Dec 2013',
          parent: 'B',
          value: 582
        }, {
          name: 'Jan 2013',
          parent: 'C',
          value: 27926
        }, {
          name: 'Feb 2013',
          parent: 'C',
          value: 20384
        }, {
          name: 'Mar 2013',
          parent: 'C',
          value: 0
        }, {
          name: 'Apr 2013',
          parent: 'C',
          value: 0
        }, {
          name: 'May 2013',
          parent: 'C',
          value: 0
        }, {
          name: 'Jun 2013',
          parent: 'C',
          value: 0
        }, {
          name: 'Jul 2013',
          parent: 'C',
          value: 0
        }, {
          name: 'Aug 2013',
          parent: 'C',
          value: 0
        }, {
          name: 'Sep 2013',
          parent: 'C',
          value: 13792
        }, {
          name: 'Oct 2013',
          parent: 'C',
          value: 33709
        }, {
          name: 'Nov 2013',
          parent: 'C',
          value: 43378
        }, {
          name: 'Dec 2013',
          parent: 'C',
          value: 31269
        }, {
          name: 'Jan 2013',
          parent: 'D',
          value: 17788
        }, {
          name: 'Feb 2013',
          parent: 'D',
          value: 13382
        }, {
          name: 'Mar 2013',
          parent: 'D',
          value: 23800
        }, {
          name: 'Apr 2013',
          parent: 'D',
          value: 23066
        }, {
          name: 'May 2013',
          parent: 'D',
          value: 30214
        }, {
          name: 'Jun 2013',
          parent: 'D',
          value: 19378
        }, {
          name: 'Jul 2013',
          parent: 'D',
          value: 21137
        }, {
          name: 'Aug 2013',
          parent: 'D',
          value: 28891
        }, {
          name: 'Sep 2013',
          parent: 'D',
          value: 17075
        }, {
          name: 'Oct 2013',
          parent: 'D',
          value: 15334
        }, {
          name: 'Nov 2013',
          parent: 'D',
          value: 15303
        }, {
          name: 'Dec 2013',
          parent: 'D',
          value: 16065
        }, {
          name: 'Jan 2013',
          parent: 'E',
          value: 17876
        }, {
          name: 'Feb 2013',
          parent: 'E',
          value: 21034
        }, {
          name: 'Mar 2013',
          parent: 'E',
          value: 25800
        }, {
          name: 'Apr 2013',
          parent: 'E',
          value: 30552
        }, {
          name: 'May 2013',
          parent: 'E',
          value: 33810
        }, {
          name: 'Jun 2013',
          parent: 'E',
          value: 20676
        }, {
          name: 'Jul 2013',
          parent: 'E',
          value: 11486
        }, {
          name: 'Aug 2013',
          parent: 'E',
          value: 11711
        }, {
          name: 'Sep 2013',
          parent: 'E',
          value: 9911
        }, {
          name: 'Oct 2013',
          parent: 'E',
          value: 14966
        }, {
          name: 'Nov 2013',
          parent: 'E',
          value: 14231
        }, {
          name: 'Dec 2013',
          parent: 'E',
          value: 8474
        }, {
          name: 'Jan 2013',
          parent: 'F',
          value: 11251
        }, {
          name: 'Feb 2013',
          parent: 'F',
          value: 10282
        }, {
          name: 'Mar 2013',
          parent: 'F',
          value: 15400
        }, {
          name: 'Apr 2013',
          parent: 'F',
          value: 10137
        }, {
          name: 'May 2013',
          parent: 'F',
          value: 10738
        }, {
          name: 'Jun 2013',
          parent: 'F',
          value: 6395
        }, {
          name: 'Jul 2013',
          parent: 'F',
          value: 4977
        }, {
          name: 'Aug 2013',
          parent: 'F',
          value: 7712
        }, {
          name: 'Sep 2013',
          parent: 'F',
          value: 7274
        }, {
          name: 'Oct 2013',
          parent: 'F',
          value: 9718
        }, {
          name: 'Nov 2013',
          parent: 'F',
          value: 11108
        }, {
          name: 'Dec 2013',
          parent: 'F',
          value: 9440
        }, {
          name: 'Jan 2013',
          parent: 'G',
          value: 14124
        }, {
          name: 'Feb 2013',
          parent: 'G',
          value: 16889
        }, {
          name: 'Mar 2013',
          parent: 'G',
          value: 35036
        }, {
          name: 'Apr 2013',
          parent: 'G',
          value: 19725
        }, {
          name: 'May 2013',
          parent: 'G',
          value: 19218
        }, {
          name: 'Jun 2013',
          parent: 'G',
          value: 9084
        }, {
          name: 'Jul 2013',
          parent: 'G',
          value: 15491
        }, {
          name: 'Aug 2013',
          parent: 'G',
          value: 8916
        }, {
          name: 'Sep 2013',
          parent: 'G',
          value: 10256
        }, {
          name: 'Oct 2013',
          parent: 'G',
          value: 13457
        }, {
          name: 'Nov 2013',
          parent: 'G',
          value: 12395
        }, {
          name: 'Dec 2013',
          parent: 'G',
          value: 9558
        }, {
          name: 'Jan 2013',
          parent: 'H',
          value: 9330
        }, {
          name: 'Feb 2013',
          parent: 'H',
          value: 8135
        }, {
          name: 'Mar 2013',
          parent: 'H',
          value: 11907
        }, {
          name: 'Apr 2013',
          parent: 'H',
          value: 11393
        }, {
          name: 'May 2013',
          parent: 'H',
          value: 16435
        }, {
          name: 'Jun 2013',
          parent: 'H',
          value: 8729
        }, {
          name: 'Jul 2013',
          parent: 'H',
          value: 7234
        }, {
          name: 'Aug 2013',
          parent: 'H',
          value: 11881
        }, {
          name: 'Sep 2013',
          parent: 'H',
          value: 7534
        }, {
          name: 'Oct 2013',
          parent: 'H',
          value: 9218
        }, {
          name: 'Nov 2013',
          parent: 'H',
          value: 9459
        }, {
          name: 'Dec 2013',
          parent: 'H',
          value: 7806
        }, {
          name: 'Jan 2013',
          parent: 'I',
          value: 62735
        }, {
          name: 'Feb 2013',
          parent: 'I',
          value: 61637
        }, {
          name: 'Mar 2013',
          parent: 'I',
          value: 1115947
        }, {
          name: 'Apr 2013',
          parent: 'I',
          value: 896583
        }, {
          name: 'May 2013',
          parent: 'I',
          value: 1165805
        }, {
          name: 'Jun 2013',
          parent: 'I',
          value: 70831
        }, {
          name: 'Jul 2013',
          parent: 'I',
          value: 101634
        }, {
          name: 'Aug 2013',
          parent: 'I',
          value: 1253821
        }, {
          name: 'Sep 2013',
          parent: 'I',
          value: 75427
        }, {
          name: 'Oct 2013',
          parent: 'I',
          value: 108073
        }, {
          name: 'Nov 2013',
          parent: 'I',
          value: 79299
        }, {
          name: 'Dec 2013',
          parent: 'I',
          value: 76640
        }, {
          name: 'Jan 2013',
          parent: 'J',
          value: 5793
        }, {
          name: 'Feb 2013',
          parent: 'J',
          value: 4375
        }, {
          name: 'Mar 2013',
          parent: 'J',
          value: 4835
        }, {
          name: 'Apr 2013',
          parent: 'J',
          value: 10094
        }, {
          name: 'May 2013',
          parent: 'J',
          value: 20300
        }, {
          name: 'Jun 2013',
          parent: 'J',
          value: 13913
        }, {
          name: 'Jul 2013',
          parent: 'J',
          value: 12106
        }, {
          name: 'Aug 2013',
          parent: 'J',
          value: 18804
        }, {
          name: 'Sep 2013',
          parent: 'J',
          value: 11434
        }, {
          name: 'Oct 2013',
          parent: 'J',
          value: 16190
        }, {
          name: 'Nov 2013',
          parent: 'J',
          value: 9572
        }, {
          name: 'Dec 2013',
          parent: 'J',
          value: 15399
        }, {
          name: 'Jan 2013',
          parent: 'K',
          value: 18807
        }, {
          name: 'Feb 2013',
          parent: 'K',
          value: 14828
        }, {
          name: 'Mar 2013',
          parent: 'K',
          value: 30519
        }, {
          name: 'Apr 2013',
          parent: 'K',
          value: 35897
        }, {
          name: 'May 2013',
          parent: 'K',
          value: 39783
        }, {
          name: 'Jun 2013',
          parent: 'K',
          value: 25414
        }, {
          name: 'Jul 2013',
          parent: 'K',
          value: 18658
        }, {
          name: 'Aug 2013',
          parent: 'K',
          value: 24708
        }, {
          name: 'Sep 2013',
          parent: 'K',
          value: 15103
        }, {
          name: 'Oct 2013',
          parent: 'K',
          value: 20091
        }, {
          name: 'Nov 2013',
          parent: 'K',
          value: 16765
        }, {
          name: 'Dec 2013',
          parent: 'K',
          value: 16911
        }
      ]
    }
  ],
  title: {
    text: 'Anzahl der Besucher 2013'
  },
  credits: {
      enabled: false
  }
});
