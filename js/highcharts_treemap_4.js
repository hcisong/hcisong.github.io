Highcharts.chart('tree_chart_4', {

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
        },
{name: 'Jan 2015', parent: 'A', value: 21421},
{name: 'Feb 2015', parent: 'A', value: 45477},
{name: 'Mar 2015', parent: 'A', value: 55505},
{name: 'Apr 2015', parent: 'A', value: 66164},
{name: 'May 2015', parent: 'A', value: 33602},
{name: 'Jun 2015', parent: 'A', value: 12765},
{name: 'Jul 2015', parent: 'A', value: 15883},
{name: 'Aug 2015', parent: 'A', value: 16071},
{name: 'Sep 2015', parent: 'A', value: 13914},
{name: 'Oct 2015', parent: 'A', value: 39796},
{name: 'Nov 2015', parent: 'A', value: 40297},
{name: 'Dec 2015', parent: 'A', value: 45528},
{name: 'Jan 2015', parent: 'B', value: 624},
{name: 'Feb 2015', parent: 'B', value: 615},
{name: 'Mar 2015', parent: 'B', value: 537},
{name: 'Apr 2015', parent: 'B', value: 459},
{name: 'May 2015', parent: 'B', value: 605},
{name: 'Jun 2015', parent: 'B', value: 424},
{name: 'Jul 2015', parent: 'B', value: 455},
{name: 'Aug 2015', parent: 'B', value: 555},
{name: 'Sep 2015', parent: 'B', value: 580},
{name: 'Oct 2015', parent: 'B', value: 853},
{name: 'Nov 2015', parent: 'B', value: 628},
{name: 'Dec 2015', parent: 'B', value: 510},
{name: 'Jan 2015', parent: 'C', value: 23369},
{name: 'Feb 2015', parent: 'C', value: 19581},
{name: 'Mar 2015', parent: 'C', value: 22486},
{name: 'Apr 2015', parent: 'C', value: 22644},
{name: 'May 2015', parent: 'C', value: 27311},
{name: 'Jun 2015', parent: 'C', value: 20282},
{name: 'Jul 2015', parent: 'C', value: 22180},
{name: 'Aug 2015', parent: 'C', value: 27428},
{name: 'Sep 2015', parent: 'C', value: 20586},
{name: 'Oct 2015', parent: 'C', value: 28582},
{name: 'Nov 2015', parent: 'C', value: 20761},
{name: 'Dec 2015', parent: 'C', value: 21259},
{name: 'Jan 2015', parent: 'D', value: 18655},
{name: 'Feb 2015', parent: 'D', value: 14513},
{name: 'Mar 2015', parent: 'D', value: 17946},
{name: 'Apr 2015', parent: 'D', value: 15399},
{name: 'May 2015', parent: 'D', value: 20535},
{name: 'Jun 2015', parent: 'D', value: 15397},
{name: 'Jul 2015', parent: 'D', value: 20488},
{name: 'Aug 2015', parent: 'D', value: 23672},
{name: 'Sep 2015', parent: 'D', value: 20},
{name: 'Oct 2015', parent: 'D', value: 1735},
{name: 'Nov 2015', parent: 'D', value: 13632},
{name: 'Dec 2015', parent: 'D', value: 14199},
{name: 'Jan 2015', parent: 'E', value: 12983},
{name: 'Feb 2015', parent: 'E', value: 12742},
{name: 'Mar 2015', parent: 'E', value: 13122},
{name: 'Apr 2015', parent: 'E', value: 12453},
{name: 'May 2015', parent: 'E', value: 20335},
{name: 'Jun 2015', parent: 'E', value: 8218},
{name: 'Jul 2015', parent: 'E', value: 12700},
{name: 'Aug 2015', parent: 'E', value: 11615},
{name: 'Sep 2015', parent: 'E', value: 9689},
{name: 'Oct 2015', parent: 'E', value: 15009},
{name: 'Nov 2015', parent: 'E', value: 13102},
{name: 'Dec 2015', parent: 'E', value: 8685},
{name: 'Jan 2015', parent: 'F', value: 9139},
{name: 'Feb 2015', parent: 'F', value: 7444},
{name: 'Mar 2015', parent: 'F', value: 8852},
{name: 'Apr 2015', parent: 'F', value: 6850},
{name: 'May 2015', parent: 'F', value: 8492},
{name: 'Jun 2015', parent: 'F', value: 7384},
{name: 'Jul 2015', parent: 'F', value: 13177},
{name: 'Aug 2015', parent: 'F', value: 14900},
{name: 'Sep 2015', parent: 'F', value: 12655},
{name: 'Oct 2015', parent: 'F', value: 13736},
{name: 'Nov 2015', parent: 'F', value: 8231},
{name: 'Dec 2015', parent: 'F', value: 7991},
{name: 'Jan 2015', parent: 'G', value: 20540},
{name: 'Feb 2015', parent: 'G', value: 15239},
{name: 'Mar 2015', parent: 'G', value: 19613},
{name: 'Apr 2015', parent: 'G', value: 12844},
{name: 'May 2015', parent: 'G', value: 13860},
{name: 'Jun 2015', parent: 'G', value: 10369},
{name: 'Jul 2015', parent: 'G', value: 7415},
{name: 'Aug 2015', parent: 'G', value: 9003},
{name: 'Sep 2015', parent: 'G', value: 10183},
{name: 'Oct 2015', parent: 'G', value: 12674},
{name: 'Nov 2015', parent: 'G', value: 12991},
{name: 'Dec 2015', parent: 'G', value: 9791},
{name: 'Jan 2015', parent: 'H', value: 11761},
{name: 'Feb 2015', parent: 'H', value: 8555},
{name: 'Mar 2015', parent: 'H', value: 9972},
{name: 'Apr 2015', parent: 'H', value: 8751},
{name: 'May 2015', parent: 'H', value: 11831},
{name: 'Jun 2015', parent: 'H', value: 5889},
{name: 'Jul 2015', parent: 'H', value: 6243},
{name: 'Aug 2015', parent: 'H', value: 10939},
{name: 'Sep 2015', parent: 'H', value: 6959},
{name: 'Oct 2015', parent: 'H', value: 12003},
{name: 'Nov 2015', parent: 'H', value: 8400},
{name: 'Dec 2015', parent: 'H', value: 6503},
{name: 'Jan 2015', parent: 'I', value: 75901},
{name: 'Feb 2015', parent: 'I', value: 67227},
{name: 'Mar 2015', parent: 'I', value: 104311},
{name: 'Apr 2015', parent: 'I', value: 102278},
{name: 'May 2015', parent: 'I', value: 102930},
{name: 'Jun 2015', parent: 'I', value: 74904},
{name: 'Jul 2015', parent: 'I', value: 110894},
{name: 'Aug 2015', parent: 'I', value: 136334},
{name: 'Sep 2015', parent: 'I', value: 74198},
{name: 'Oct 2015', parent: 'I', value: 105224},
{name: 'Nov 2015', parent: 'I', value: 64062},
{name: 'Dec 2015', parent: 'I', value: 72591},
{name: 'Jan 2015', parent: 'J', value: 6183},
{name: 'Feb 2015', parent: 'J', value: 13273},
{name: 'Mar 2015', parent: 'J', value: 11621},
{name: 'Apr 2015', parent: 'J', value: 9536},
{name: 'May 2015', parent: 'J', value: 13801},
{name: 'Jun 2015', parent: 'J', value: 2532},
{name: 'Jul 2015', parent: 'J', value: 10686},
{name: 'Aug 2015', parent: 'J', value: 4943},
{name: 'Sep 2015', parent: 'J', value: 4637},
{name: 'Oct 2015', parent: 'J', value: 9008},
{name: 'Nov 2015', parent: 'J', value: 9141},
{name: 'Dec 2015', parent: 'J', value: 10585},
{name: 'Jan 2015', parent: 'K', value: 54261},
{name: 'Feb 2015', parent: 'K', value: 28355},
{name: 'Mar 2015', parent: 'K', value: 12086},
{name: 'Apr 2015', parent: 'K', value: 12749},
{name: 'May 2015', parent: 'K', value: 17578},
{name: 'Jun 2015', parent: 'K', value: 15103},
{name: 'Jul 2015', parent: 'K', value: 19795},
{name: 'Aug 2015', parent: 'K', value: 23021},
{name: 'Sep 2015', parent: 'K', value: 18027},
{name: 'Oct 2015', parent: 'K', value: 22501},
{name: 'Nov 2015', parent: 'K', value: 13584},
{name: 'Dec 2015', parent: 'K', value: 15344}
      ]
    }
  ],
  title: {
    text: '2015'
  }
});
