var gfxPath = 'https://raw.githubusercontent.com/highslide-software/pattern-fill/master/graphics/',
    skies = 'https://www.highcharts.com/samples/graphics/skies.jpg';

Highcharts.chart('tree_chart_1', {
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
              fontWeight: 'regular'
            }
          }
        }
      ],
      data: [
        {
          name: 'Städtische Galerie im Lenbachhaus',
          id: 'A',
          color: '#058DC7'
        }, {
          name: 'Schackgalerie',
          id: 'B',
          color: '#50B432'
        }, {
          name: 'Pinakothek der Moderne',
          id: 'C',
          color: '#ED561B'
        }, {
          name: 'Neue Pinakothek',
          id: 'D',
          color: '#DDDF00'
        }, {
          name: 'Museum Mensch und Natur',
          id: 'E',
          color: '#24CBE5'
        }, {
          name: 'Museum Brandhorst',
          id: 'F',
          color: '#64E572'
        }, {
          name: 'Münchner Stadtmuseum',
          id: 'G',
          color: '#FF9655'
        }, {
          name: 'Deutsches Museum - Verkehrszentrum',
          id: 'H',
          colorValue: 8,
          color: '#FFF263'
        }, {
          name: 'Deutsches Museum - Museumsinsel',
          id: 'I',
          color: '#6AF9C4'
        }, {
          name: 'Bayerisches Nationalmuseum',
          id: 'J',
          color: '#8CB8E7'
        }, {
          name: 'Alte Pinakothek',
          id: 'K',
          color: '#DEEDEE'
        }, {
          name: 'Jan 2012',
          parent: 'A',
          value: 24491
        }, {
          name: 'Feb 2012',
          parent: 'A',
          value: 26003
        }, {
          name: 'Mar 2012',
          parent: 'A',
          value: 8844
        }, {
          name: 'Apr 2012',
          parent: 'A',
          value: 7000
        }, {
          name: 'May 2012',
          parent: 'A',
          value: 5234
        }, {
          name: 'Jun 2012',
          parent: 'A',
          value: 5544
        }, {
          name: 'Jul 2012',
          parent: 'A',
          value: 4545
        }, {
          name: 'Aug 2012',
          parent: 'A',
          value: 0
        }, {
          name: 'Sep 2012',
          parent: 'A',
          value: 0
        }, {
          name: 'Oct 2012',
          parent: 'A',
          value: 0
        }, {
          name: 'Nov 2012',
          parent: 'A',
          value: 3809
        }, {
          name: 'Dec 2012',
          parent: 'A',
          value: 3282
        }, {
          name: 'Jan 2012',
          parent: 'B',
          value: 878
        }, {
          name: 'Feb 2012',
          parent: 'B',
          value: 759
        }, {
          name: 'Mar 2012',
          parent: 'B',
          value: 815
        }, {
          name: 'Apr 2012',
          parent: 'B',
          value: 721
        }, {
          name: 'May 2012',
          parent: 'B',
          value: 469
        }, {
          name: 'Jun 2012',
          parent: 'B',
          value: 548
        }, {
          name: 'Jul 2012',
          parent: 'B',
          value: 674
        }, {
          name: 'Aug 2012',
          parent: 'B',
          value: 572
        }, {
          name: 'Sep 2012',
          parent: 'B',
          value: 764
        }, {
          name: 'Oct 2012',
          parent: 'B',
          value: 1501
        }, {
          name: 'Nov 2012',
          parent: 'B',
          value: 835
        }, {
          name: 'Dec 2012',
          parent: 'B',
          value: 652
        }, {
          name: 'Jan 2012',
          parent: 'C',
          value: 32829
        }, {
          name: 'Feb 2012',
          parent: 'C',
          value: 26183
        }, {
          name: 'Mar 2012',
          parent: 'C',
          value: 33216
        }, {
          name: 'Apr 2012',
          parent: 'C',
          value: 70569
        }, {
          name: 'May 2012',
          parent: 'C',
          value: 48231
        }, {
          name: 'Jun 2012',
          parent: 'C',
          value: 45160
        }, {
          name: 'Jul 2012',
          parent: 'C',
          value: 49904
        }, {
          name: 'Aug 2012',
          parent: 'C',
          value: 24299
        }, {
          name: 'Sep 2012',
          parent: 'C',
          value: 24627
        }, {
          name: 'Oct 2012',
          parent: 'C',
          value: 28496
        }, {
          name: 'Nov 2012',
          parent: 'C',
          value: 25761
        }, {
          name: 'Dec 2012',
          parent: 'C',
          value: 28098
        }, {
          name: 'Jan 2012',
          parent: 'D',
          value: 22422
        }, {
          name: 'Feb 2012',
          parent: 'D',
          value: 29640
        }, {
          name: 'Mar 2012',
          parent: 'D',
          value: 28642
        }, {
          name: 'Apr 2012',
          parent: 'D',
          value: 30330
        }, {
          name: 'May 2012',
          parent: 'D',
          value: 17603
        }, {
          name: 'Jun 2012',
          parent: 'D',
          value: 16598
        }, {
          name: 'Jul 2012',
          parent: 'D',
          value: 24254
        }, {
          name: 'Aug 2012',
          parent: 'D',
          value: 22685
        }, {
          name: 'Sep 2012',
          parent: 'D',
          value: 17876
        }, {
          name: 'Oct 2012',
          parent: 'D',
          value: 23743
        }, {
          name: 'Nov 2012',
          parent: 'D',
          value: 18794
        }, {
          name: 'Dec 2012',
          parent: 'D',
          value: 20289
        }, {
          name: 'Jan 2012',
          parent: 'E',
          value: 18211
        }, {
          name: 'Feb 2012',
          parent: 'E',
          value: 14486
        }, {
          name: 'Mar 2012',
          parent: 'E',
          value: 12783
        }, {
          name: 'Apr 2012',
          parent: 'E',
          value: 23250
        }, {
          name: 'May 2012',
          parent: 'E',
          value: 11670
        }, {
          name: 'Jun 2012',
          parent: 'E',
          value: 13650
        }, {
          name: 'Jul 2012',
          parent: 'E',
          value: 16513
        }, {
          name: 'Aug 2012',
          parent: 'E',
          value: 10742
        }, {
          name: 'Sep 2012',
          parent: 'E',
          value: 11199
        }, {
          name: 'Oct 2012',
          parent: 'E',
          value: 14906
        }, {
          name: 'Nov 2012',
          parent: 'E',
          value: 11755
        }, {
          name: 'Dec 2012',
          parent: 'E',
          value: 13791
        }, {
          name: 'Jan 2012',
          parent: 'F',
          value: 14552
        }, {
          name: 'Feb 2012',
          parent: 'F',
          value: 12020
        }, {
          name: 'Mar 2012',
          parent: 'F',
          value: 11895
        }, {
          name: 'Apr 2012',
          parent: 'F',
          value: 17876
        }, {
          name: 'May 2012',
          parent: 'F',
          value: 13351
        }, {
          name: 'Jun 2012',
          parent: 'F',
          value: 11070
        }, {
          name: 'Jul 2012',
          parent: 'F',
          value: 15545
        }, {
          name: 'Aug 2012',
          parent: 'F',
          value: 11671
        }, {
          name: 'Sep 2012',
          parent: 'F',
          value: 11672
        }, {
          name: 'Oct 2012',
          parent: 'F',
          value: 17838
        }, {
          name: 'Nov 2012',
          parent: 'F',
          value: 13881
        }, {
          name: 'Dec 2012',
          parent: 'F',
          value: 12875
        }, {
          name: 'Jan 2012',
          parent: 'G',
          value: 10316
        }, {
          name: 'Feb 2012',
          parent: 'G',
          value: 11868
        }, {
          name: 'Mar 2012',
          parent: 'G',
          value: 16252
        }, {
          name: 'Apr 2012',
          parent: 'G',
          value: 11316
        }, {
          name: 'May 2012',
          parent: 'G',
          value: 8827
        }, {
          name: 'Jun 2012',
          parent: 'G',
          value: 8471
        }, {
          name: 'Jul 2012',
          parent: 'G',
          value: 10732
        }, {
          name: 'Aug 2012',
          parent: 'G',
          value: 5733
        }, {
          name: 'Sep 2012',
          parent: 'G',
          value: 7806
        }, {
          name: 'Oct 2012',
          parent: 'G',
          value: 11365
        }, {
          name: 'Nov 2012',
          parent: 'G',
          value: 13884
        }, {
          name: 'Dec 2012',
          parent: 'G',
          value: 10778
        }, {
          name: 'Jan 2012',
          parent: 'H',
          value: 10837
        }, {
          name: 'Feb 2012',
          parent: 'H',
          value: 8725
        }, {
          name: 'Mar 2012',
          parent: 'H',
          value: 6328
        }, {
          name: 'Apr 2012',
          parent: 'H',
          value: 11882
        }, {
          name: 'May 2012',
          parent: 'H',
          value: 6651
        }, {
          name: 'Jun 2012',
          parent: 'H',
          value: 7704
        }, {
          name: 'Jul 2012',
          parent: 'H',
          value: 9775
        }, {
          name: 'Aug 2012',
          parent: 'H',
          value: 8257
        }, {
          name: 'Sep 2012',
          parent: 'H',
          value: 6616
        }, {
          name: 'Oct 2012',
          parent: 'H',
          value: 8607
        }, {
          name: 'Nov 2012',
          parent: 'H',
          value: 6857
        }, {
          name: 'Dec 2012',
          parent: 'H',
          value: 8230
        }, {
          name: 'Jan 2012',
          parent: 'I',
          value: 74203
        }, {
          name: 'Feb 2012',
          parent: 'I',
          value: 64569
        }, {
          name: 'Mar 2012',
          parent: 'I',
          value: 70486
        }, {
          name: 'Apr 2012',
          parent: 'I',
          value: 115341
        }, {
          name: 'May 2012',
          parent: 'I',
          value: 66398
        }, {
          name: 'Jun 2012',
          parent: 'I',
          value: 78247
        }, {
          name: 'Jul 2012',
          parent: 'I',
          value: 109202
        }, {
          name: 'Aug 2012',
          parent: 'I',
          value: 103140
        }, {
          name: 'Sep 2012',
          parent: 'I',
          value: 66637
        }, {
          name: 'Oct 2012',
          parent: 'I',
          value: 90747
        }, {
          name: 'Nov 2012',
          parent: 'I',
          value: 59571
        }, {
          name: 'Dec 2012',
          parent: 'I',
          value: 67154
        }, {
          name: 'Jan 2012',
          parent: 'J',
          value: 7053
        }, {
          name: 'Feb 2012',
          parent: 'J',
          value: 5555
        }, {
          name: 'Mar 2012',
          parent: 'J',
          value: 5537
        }, {
          name: 'Apr 2012',
          parent: 'J',
          value: 5953
        }, {
          name: 'May 2012',
          parent: 'J',
          value: 7858
        }, {
          name: 'Jun 2012',
          parent: 'J',
          value: 6271
        }, {
          name: 'Jul 2012',
          parent: 'J',
          value: 10887
        }, {
          name: 'Aug 2012',
          parent: 'J',
          value: 4177
        }, {
          name: 'Sep 2012',
          parent: 'J',
          value: 4819
        }, {
          name: 'Oct 2012',
          parent: 'J',
          value: 6778
        }, {
          name: 'Nov 2012',
          parent: 'J',
          value: 5176
        }, {
          name: 'Dec 2012',
          parent: 'J',
          value: 10298
        }, {
          name: 'Jan 2012',
          parent: 'K',
          value: 33530
        }, {
          name: 'Feb 2012',
          parent: 'K',
          value: 17078
        }, {
          name: 'Mar 2012',
          parent: 'K',
          value: 18169
        }, {
          name: 'Apr 2012',
          parent: 'K',
          value: 22691
        }, {
          name: 'May 2012',
          parent: 'K',
          value: 18402
        }, {
          name: 'Jun 2012',
          parent: 'K',
          value: 18261
        }, {
          name: 'Jul 2012',
          parent: 'K',
          value: 26056
        }, {
          name: 'Aug 2012',
          parent: 'K',
          value: 27780
        }, {
          name: 'Sep 2012',
          parent: 'K',
          value: 18993
        }, {
          name: 'Oct 2012',
          parent: 'K',
          value: 25527
        }, {
          name: 'Nov 2012',
          parent: 'K',
          value: 19751
        }, {
          name: 'Dec 2012',
          parent: 'K',
          value: 24296
        }
      ]
    }
  ],
  title: {
    text: '2012'
  }
});
