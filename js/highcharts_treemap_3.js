Highcharts.chart('tree_chart_3', {

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
        {name: 'Jan 2014', parent: 'A', value: 0},
        {name: 'Feb 2014', parent: 'A', value: 33160},
        {name: 'Mar 2014', parent: 'A', value: 32570},
        {name: 'Apr 2014', parent: 'A', value: 30424},
        {name: 'May 2014', parent: 'A', value: 30643},
        {name: 'Jun 2014', parent: 'A', value: 17475},
        {name: 'Jul 2014', parent: 'A', value: 24338},
        {name: 'Aug 2014', parent: 'A', value: 30510},
        {name: 'Sep 2014', parent: 'A', value: 18940},
        {name: 'Oct 2014', parent: 'A', value: 31622},
        {name: 'Nov 2014', parent: 'A', value: 22144},
        {name: 'Dec 2014', parent: 'A', value: 21976},
        {name: 'Jan 2014', parent: 'B', value: 656},
{name: 'Feb 2014', parent: 'B', value: 794},
{name: 'Mar 2014', parent: 'B', value: 755},
{name: 'Apr 2014', parent: 'B', value: 681},
{name: 'May 2014', parent: 'B', value: 556},
{name: 'Jun 2014', parent: 'B', value: 329},
{name: 'Jul 2014', parent: 'B', value: 592},
{name: 'Aug 2014', parent: 'B', value: 620},
{name: 'Sep 2014', parent: 'B', value: 416},
{name: 'Oct 2014', parent: 'B', value: 1579},
{name: 'Nov 2014', parent: 'B', value: 566},
{name: 'Dec 2014', parent: 'B', value: 340},
{name: 'Jan 2014',parent: 'C', value: 38733},
{name: 'Feb 2014',parent: 'C', value: 26643},
{name: 'Mar 2014',parent: 'C', value: 23951},
{name: 'Apr 2014',parent: 'C', value: 25408},
{name: 'May 2014',parent: 'C', value: 23828},
{name: 'Jun 2014',parent: 'C', value: 22993},
{name: 'Jul 2014',parent: 'C', value: 30269},
{name: 'Aug 2014',parent: 'C', value: 38241},
{name: 'Sep 2014',parent: 'C', value: 19919},
{name: 'Oct 2014',parent: 'C', value: 26417},
{name: 'Nov 2014',parent: 'C', value: 17237},
{name: 'Dec 2014',parent: 'C', value: 18522},
{name: 'Jan 2014',parent: 'D', value: 15885},
{name: 'Feb 2014',parent: 'D', value: 11405},
{name: 'Mar 2014',parent: 'D', value: 16337},
{name: 'Apr 2014',parent: 'D', value: 16431},
{name: 'May 2014',parent: 'D', value: 16368},
{name: 'Jun 2014',parent: 'D', value: 13761},
{name: 'Jul 2014',parent: 'D', value: 17582},
{name: 'Aug 2014',parent: 'D', value: 23040},
{name: 'Sep 2014',parent: 'D', value: 13638},
{name: 'Oct 2014',parent: 'D', value: 19157},
{name: 'Nov 2014',parent: 'D', value: 15730},
{name: 'Dec 2014',parent: 'D', value: 16133},
{name: 'Jan 2014', parent: 'E', value: 17965},
{name: 'Feb 2014', parent: 'E', value: 15362},
{name: 'Mar 2014', parent: 'E', value: 15092},
{name: 'Apr 2014', parent: 'E', value: 23155},
{name: 'May 2014', parent: 'E', value: 18620},
{name: 'Jun 2014', parent: 'E', value: 12237},
{name: 'Jul 2014', parent: 'E', value: 19248},
{name: 'Aug 2014', parent: 'E', value: 26595},
{name: 'Sep 2014', parent: 'E', value: 13509},
{name: 'Oct 2014', parent: 'E', value: 13879},
{name: 'Nov 2014', parent: 'E', value: 9730},
{name: 'Dec 2014', parent: 'E', value: 6401},
{name: 'Jan 2014', parent: 'F', value: 10244},
{name: 'Feb 2014', parent: 'F', value: 6917},
{name: 'Mar 2014', parent: 'F', value: 8012},
{name: 'Apr 2014', parent: 'F', value: 8373},
{name: 'May 2014', parent: 'F', value: 8349},
{name: 'Jun 2014', parent: 'F', value: 6300},
{name: 'Jul 2014', parent: 'F', value: 10071},
{name: 'Aug 2014', parent: 'F', value: 17950},
{name: 'Sep 2014', parent: 'F', value: 10882},
{name: 'Oct 2014', parent: 'F', value: 17007},
{name: 'Nov 2014', parent: 'F', value: 12092},
{name: 'Dec 2014', parent: 'F', value: 6204},
{name: 'Jan 2014', parent: 'G', value: 10702},
{name: 'Feb 2014', parent: 'G', value: 10926},
{name: 'Mar 2014', parent: 'G', value: 15661},
{name: 'Apr 2014', parent: 'G', value: 9624},
{name: 'May 2014', parent: 'G', value: 11747},
{name: 'Jun 2014', parent: 'G', value: 7190},
{name: 'Jul 2014', parent: 'G', value: 10182},
{name: 'Aug 2014', parent: 'G', value: 5682},
{name: 'Sep 2014', parent: 'G', value: 9097},
{name: 'Oct 2014', parent: 'G', value: 13846},
{name: 'Nov 2014', parent: 'G', value: 17793},
{name: 'Dec 2014', parent: 'G', value: 13711},
{name: 'Jan 2014', parent: 'H', value: 11213},
{name: 'Feb 2014', parent: 'H', value: 7354},
{name: 'Mar 2014', parent: 'H', value: 7766},
{name: 'Apr 2014', parent: 'H', value: 8438},
{name: 'May 2014', parent: 'H', value: 7677},
{name: 'Jun 2014', parent: 'H', value: 6198},
{name: 'Jul 2014', parent: 'H', value: 9970},
{name: 'Aug 2014', parent: 'H', value: 14909},
{name: 'Sep 2014', parent: 'H', value: 7723},
{name: 'Oct 2014', parent: 'H', value: 10941},
{name: 'Nov 2014', parent: 'H', value: 8848},
{name: 'Dec 2014', parent: 'H', value: 7254},
{name: 'Jan 2014', parent: 'I', value: 76536},
{name: 'Feb 2014', parent: 'I', value: 63156},
{name: 'Mar 2014', parent: 'I', value: 86778},
{name: 'Apr 2014', parent: 'I', value: 110863},
{name: 'May 2014', parent: 'I', value: 85773},
{name: 'Jun 2014', parent: 'I', value: 69844},
{name: 'Jul 2014', parent: 'I', value: 125746},
{name: 'Aug 2014', parent: 'I', value: 153260},
{name: 'Sep 2014', parent: 'I', value: 73479},
{name: 'Oct 2014', parent: 'I', value: 100320},
{name: 'Nov 2014', parent: 'I', value: 59691},
{name: 'Dec 2014', parent: 'I', value: 74720},
{name: 'Jan 2014', parent: 'J', value: 6309},
{name: 'Feb 2014', parent: 'J', value: 4278},
{name: 'Mar 2014', parent: 'J', value: 4509},
{name: 'Apr 2014', parent: 'J', value: 3338},
{name: 'May 2014', parent: 'J', value: 7628},
{name: 'Jun 2014', parent: 'J', value: 5793},
{name: 'Jul 2014', parent: 'J', value: 8873},
{name: 'Aug 2014', parent: 'J', value: 7594},
{name: 'Sep 2014', parent: 'J', value: 5516},
{name: 'Oct 2014', parent: 'J', value: 14550},
{name: 'Nov 2014', parent: 'J', value: 10491},
{name: 'Dec 2014', parent: 'J', value: 21728},
{name: 'Jan 2014', parent: 'K', value: 17653},
{name: 'Feb 2014', parent: 'K', value: 14464},
{name: 'Mar 2014', parent: 'K', value: 16275},
{name: 'Apr 2014', parent: 'K', value: 17310},
{name: 'May 2014', parent: 'K', value: 17519},
{name: 'Jun 2014', parent: 'K', value: 15161},
{name: 'Jul 2014', parent: 'K', value: 20606},
{name: 'Aug 2014', parent: 'K', value: 25328},
{name: 'Sep 2014', parent: 'K', value: 14164},
{name: 'Oct 2014', parent: 'K', value: 21913},
{name: 'Nov 2014', parent: 'K', value: 31242},
{name: 'Dec 2014', parent: 'K', value: 31105}
      ]
    }
  ],
  title: {
    text: '2014'
  },
  credits: {
      enabled: false
  }
});
