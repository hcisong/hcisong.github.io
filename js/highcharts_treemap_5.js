Highcharts.chart('tree_chart_5', {

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
        },
      {name: 'Jan 2016', parent: 'A', value: 53449},
{name: 'Feb 2016', parent: 'A', value: 25775},
{name: 'Mar 2016', parent: 'A', value: 27577},
{name: 'Apr 2016', parent: 'A', value: 24092},
{name: 'May 2016', parent: 'A', value: 17970},
{name: 'Jun 2016', parent: 'A', value: 15706},
{name: 'Jul 2016', parent: 'A', value: 19381},
{name: 'Aug 2016', parent: 'A', value: 15230},
{name: 'Sep 2016', parent: 'A', value: 10100},
{name: 'Oct 2016', parent: 'A', value: 26406},
{name: 'Nov 2016', parent: 'A', value: 14263},
{name: 'Dec 2016', parent: 'A', value: 15383},
{name: 'Jan 2016', parent: 'B', value: 881},
{name: 'Feb 2016', parent: 'B', value: 1031},
{name: 'Mar 2016', parent: 'B', value: 659},
{name: 'Apr 2016', parent: 'B', value: 753},
{name: 'May 2016', parent: 'B', value: 1338},
{name: 'Jun 2016', parent: 'B', value: 1598},
{name: 'Jul 2016', parent: 'B', value: 1129},
{name: 'Aug 2016', parent: 'B', value: 711},
{name: 'Sep 2016', parent: 'B', value: 539},
{name: 'Oct 2016', parent: 'B', value: 1154},
{name: 'Nov 2016', parent: 'B', value: 1277},
{name: 'Dec 2016', parent: 'B', value: 1017},
{name: 'Jan 2016', parent: 'C', value: 28791},
{name: 'Feb 2016', parent: 'C', value: 27556},
{name: 'Mar 2016', parent: 'C', value: 23264},
{name: 'Apr 2016', parent: 'C', value: 0},
{name: 'May 2016', parent: 'C', value: 0},
{name: 'Jun 2016', parent: 'C', value: 0},
{name: 'Jul 2016', parent: 'C', value: 0},
{name: 'Aug 2016', parent: 'C', value: 0},
{name: 'Sep 2016', parent: 'C', value: 0},
{name: 'Oct 2016', parent: 'C', value: 0},
{name: 'Nov 2016', parent: 'C', value: 0},
{name: 'Dec 2016', parent: 'C', value: 0},
{name: 'Jan 2016', parent: 'D', value: 17200},
{name: 'Feb 2016', parent: 'D', value: 16960},
{name: 'Mar 2016', parent: 'D', value: 20289},
{name: 'Apr 2016', parent: 'D', value: 18140},
{name: 'May 2016', parent: 'D', value: 16041},
{name: 'Jun 2016', parent: 'D', value: 17756},
{name: 'Jul 2016', parent: 'D', value: 21160},
{name: 'Aug 2016', parent: 'D', value: 19210},
{name: 'Sep 2016', parent: 'D', value: 12636},
{name: 'Oct 2016', parent: 'D', value: 21680},
{name: 'Nov 2016', parent: 'D', value: 17438},
{name: 'Dec 2016', parent: 'D', value: 16878},
{name: 'Jan 2016', parent: 'E', value: 18500},
{name: 'Feb 2016', parent: 'E', value: 17679},
{name: 'Mar 2016', parent: 'E', value: 19141},
{name: 'Apr 2016', parent: 'E', value: 13889},
{name: 'May 2016', parent: 'E', value: 16348},
{name: 'Jun 2016', parent: 'E', value: 13362},
{name: 'Jul 2016', parent: 'E', value: 15466},
{name: 'Aug 2016', parent: 'E', value: 13320},
{name: 'Sep 2016', parent: 'E', value: 8283},
{name: 'Oct 2016', parent: 'E', value: 16955},
{name: 'Nov 2016', parent: 'E', value: 14586},
{name: 'Dec 2016', parent: 'E', value: 10077},
{name: 'Jan 2016', parent: 'F', value: 11711},
{name: 'Feb 2016', parent: 'F', value: 10294},
{name: 'Mar 2016', parent: 'F', value: 10250},
{name: 'Apr 2016', parent: 'F', value: 9119},
{name: 'May 2016', parent: 'F', value: 3561},
{name: 'Jun 2016', parent: 'F', value: 8574},
{name: 'Jul 2016', parent: 'F', value: 9618},
{name: 'Aug 2016', parent: 'F', value: 6917},
{name: 'Sep 2016', parent: 'F', value: 5021},
{name: 'Oct 2016', parent: 'F', value: 9509},
{name: 'Nov 2016', parent: 'F', value: 7713},
{name: 'Dec 2016', parent: 'F', value: 6180},
{name: 'Jan 2016', parent: 'G', value: 13605},
{name: 'Feb 2016', parent: 'G', value: 15615},
{name: 'Mar 2016', parent: 'G', value: 19283},
{name: 'Apr 2016', parent: 'G', value: 14229},
{name: 'May 2016', parent: 'G', value: 14844},
{name: 'Jun 2016', parent: 'G', value: 12969},
{name: 'Jul 2016', parent: 'G', value: 9631},
{name: 'Aug 2016', parent: 'G', value: 5799},
{name: 'Sep 2016', parent: 'G', value: 13313},
{name: 'Oct 2016', parent: 'G', value: 17388},
{name: 'Nov 2016', parent: 'G', value: 21139},
{name: 'Dec 2016', parent: 'G', value: 11252},
{name: 'Jan 2016', parent: 'H', value: 12436},
{name: 'Feb 2016', parent: 'H', value: 9865},
{name: 'Mar 2016', parent: 'H', value: 10078},
{name: 'Apr 2016', parent: 'H', value: 9117},
{name: 'May 2016', parent: 'H', value: 10674},
{name: 'Jun 2016', parent: 'H', value: 10458},
{name: 'Jul 2016', parent: 'H', value: 9336},
{name: 'Aug 2016', parent: 'H', value: 8934},
{name: 'Sep 2016', parent: 'H', value: 5317},
{name: 'Oct 2016', parent: 'H', value: 11978},
{name: 'Nov 2016', parent: 'H', value: 10403},
{name: 'Dec 2016', parent: 'H', value: 8199},
{name: 'Jan 2016', parent: 'I', value: 76387},
{name: 'Feb 2016', parent: 'I', value: 72935},
{name: 'Mar 2016', parent: 'I', value: 94819},
{name: 'Apr 2016', parent: 'I', value: 78826},
{name: 'May 2016', parent: 'I', value: 80679},
{name: 'Jun 2016', parent: 'I', value: 77385},
{name: 'Jul 2016', parent: 'I', value: 106962},
{name: 'Aug 2016', parent: 'I', value: 94313},
{name: 'Sep 2016', parent: 'I', value: 52829},
{name: 'Oct 2016', parent: 'I', value: 105216},
{name: 'Nov 2016', parent: 'I', value: 64393},
{name: 'Dec 2016', parent: 'I', value: 68238},
{name: 'Jan 2016', parent: 'J', value: 7857},
{name: 'Feb 2016', parent: 'J', value: 10470},
{name: 'Mar 2016', parent: 'J', value: 6555},
{name: 'Apr 2016', parent: 'J', value: 5507},
{name: 'May 2016', parent: 'J', value: 7938},
{name: 'Jun 2016', parent: 'J', value: 10282},
{name: 'Jul 2016', parent: 'J', value: 12486},
{name: 'Aug 2016', parent: 'J', value: 8891},
{name: 'Sep 2016', parent: 'J', value: 4011},
{name: 'Oct 2016', parent: 'J', value: 7186},
{name: 'Nov 2016', parent: 'J', value: 6770},
{name: 'Dec 2016', parent: 'J', value: 12017},
{name: 'Jan 2016', parent: 'K', value: 16098},
{name: 'Feb 2016', parent: 'K', value: 12462},
{name: 'Mar 2016', parent: 'K', value: 17194},
{name: 'Apr 2016', parent: 'K', value: 15918},
{name: 'May 2016', parent: 'K', value: 15412},
{name: 'Jun 2016', parent: 'K', value: 16399},
{name: 'Jul 2016', parent: 'K', value: 19360},
{name: 'Aug 2016', parent: 'K', value: 18425},
{name: 'Sep 2016', parent: 'K', value: 11871},
{name: 'Oct 2016', parent: 'K', value: 7498},
{name: 'Nov 2016', parent: 'K', value: 13856},
{name: 'Dec 2016', parent: 'K', value: 15503}
      ]
    }
  ],
  title: {
    text: 'Anzahl der Besucher 2016'
  },
  credits: {
      enabled: false
  }
});
