var charts = [
  {
    name: 'Backend',
    categories: [
      {
        category: 'Languages',
        entries: [
          {title: 'VBA', exp: 2.1, focus: 1.1},
          {title: 'PHP', exp: 2.3, focus: 1.3},
          {title: 'Java<br>Spring', exp: 3, focus: 2},
          {title: 'Python', exp: 1.9, focus: 2},
          {title: 'NodeJs<br>Typescript', exp: 2, focus: 3},
          {title: 'Scala', exp: 2, focus: 4}
        ]
      },
      {
        category: 'Data',
        entries: [
          {title: 'RDBMS', exp: 2.3, focus: 1.9},
          {title: 'NoSQL', exp: 1.3, focus: 3},
          {title: 'GraphDB', exp: 1.3, focus: 3.3},
          {title: 'Solr', exp: 1, focus: 3}
        ]
      },
      {
        category: 'Service-<br>Communication',
        entries: [
          {title: 'SOAP', exp: 2, focus: 1},
          {title: 'REST', exp: 2.4, focus: 2.1},
          {title: 'JMS', exp: 2.2, focus: 2.2},
          {title: 'Actors', exp: 1, focus: 3.3}
        ]
      }
    ]
  },
  {
    name: 'Frontend',
    categories: [
      {
        category: 'Languages',
        entries: [
          {title: 'HTML<br>CSS', exp: 2.3, focus: 1.1},
          {title: 'ECMA 5/6/7', exp: 2.3, focus: 2},
          {title: 'SVG', exp: 1, focus: 2},
          {title: 'Templates<br>Mustache,etc.', exp: 2, focus: 2.2}
        ]
      },
      {
        category: 'Frameworks',
        entries: [
          {title: 'gulp<br>browserify', exp: 2, focus: 1},
          {title: 'webpack<br>npm', exp: 1, focus: 2},
          {title: 'Angular', exp: 1, focus: 3},
          {title: 'React', exp: 1, focus: 4},
          {title: 'PatternLab<br>Jest<br>Karma', exp: 3, focus: 3}
        ]
      }
    ]
  }, {
    name: 'DevOps',
    categories: [
      {
        category: 'Systeme und<br>Virtualisierung',
        entries: [
          {title: 'VMs', exp: 1.8, focus: 0.9},
          {title: 'Win7', exp: 2.2, focus: 1.2},
          {title: 'Mac', exp: 1.7, focus: 1},
          {title: 'Win10', exp: 2.1, focus: 2},
          {title: 'Linux', exp: 2, focus: 3},
          {title: 'Docker', exp: 2, focus: 4},
        ]
      },
      {
        category: 'Tools',
        entries: [
          {title: 'JMeter', exp: 2, focus: 1},
          {title: 'Jenkins', exp: 0.9, focus: 2},
          {title: 'AWS', exp: 1.1, focus: 3.3},
          {title: 'Sonar', exp: 1.9, focus: 2},
          {title: 'Ansible', exp: 1, focus: 2.1},
          {title: 'Gatling', exp: 1.1, focus: 2.9},
          {title: 'Kybernetes', exp: 1, focus: 4},
          {title: 'Spring<br>Integration', exp: 0.9, focus: 3.1}
        ]
      }
    ]
  }, {
    name: 'Project-Management',
    categories: [
      {
        category: 'Systeme und<br>Virtualisierung',
        entries: [
          {title: 'VMs', exp: 1.8, focus: 0.9},
          {title: 'Win7', exp: 2.2, focus: 1.2},
          {title: 'Mac', exp: 1.7, focus: 1},
          {title: 'Win10', exp: 2.1, focus: 2},
          {title: 'Linux', exp: 2, focus: 3},
          {title: 'Docker', exp: 2, focus: 4},
        ]
      },
      {
        category: 'Tools',
        entries: [
          {title: 'JMeter', exp: 2, focus: 1},
          {title: 'Jenkins', exp: 0.9, focus: 2},
          {title: 'AWS', exp: 1.1, focus: 3.3},
          {title: 'Sonar', exp: 1.9, focus: 2},
          {title: 'Ansible', exp: 1, focus: 2.1},
          {title: 'Gatling', exp: 1.1, focus: 2.9},
          {title: 'Kybernetes', exp: 1, focus: 4},
          {title: 'Spring<br>Integration', exp: 0.9, focus: 3.1}
        ]
      }
    ]
  }];

var tplColors = ['#ffa07a', '#98fb98', '#87ceeb', '#ffdead', '#e6e6fa'];
var catTpl = {
  name: '',
  text: [],
  x: [],
  y: [],
  mode: 'markers+text',
  marker: {size: 30, color: ''},
  textfont: {
    family: 'Tahoma',
    size: '14'
  },
  textposition: 'center center',
  type: 'scatter'
};

var layoutTpl = {
  title: 'Skill Development',
  paper_bgcolor: '#cfcfcf',
  plot_bgcolor: '#dfdfdf',
  xaxis: {
    title: 'Current Usage Focus',
    showticklabels: true,
    tickvals: [1, 2, 3, 4],
    ticktext: ['rather not', 'middle', 'high', 'enthusiastic'],
    showgrid: false,
    zeroline: true
  },
  yaxis: {
    title: 'Current Experience Level',
    showticklabels: true,
    range: [0.7, 4],
    tickvals: [1, 2, 3],
    ticktext: ['passive', 'active', 'virtuoso'],
    showgrid: false,
    zeroline: true
  }
};

charts.forEach(chart => {
  var elmt = document.getElementById("skills");
  elmt.appendChild(document.createElement("BR"));
  var div = document.createElement("DIV");
  div.id = chart.
  var data = charts[0].categories.map((c, i) => {
    var newCat = JSON.parse(JSON.stringify(catTpl));
    newCat.name = c.category;
    newCat.marker.color = tplColors[i];
    c.entries.forEach(entry => {
      newCat.x.push(entry.focus);
      newCat.y.push(entry.exp);
      newCat.text.push(entry.title);
    });
    return newCat;
  });

  Plotly.newPlot('skills', data, layout);
});
