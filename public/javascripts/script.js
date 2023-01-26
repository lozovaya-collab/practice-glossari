const options = {
  chart: {
    backgroundColor: "rgba(0,0,0,0)",
    type: 'networkgraph',
    style: {
      margin: 0
    }
  },
  title: {
    style: {
      display: 'none'
    }
  },
  tooltip: {
    enabled: false
  },
  plotOptions: {
    networkgraph: {
      keys: ['from', 'to'],
      layoutAlgorithm: {
        enableSimulation: true,
        integration: 'verlet',
        linkLength: 230
      }
    }
  },
  series: [
    {
      states: {
        hover: {
          enabled: false
        },
        inactive: {
          enabled: false
        }
      },
      color: 'rgba(0,0,0,0.74)',
      link: {
        width: 5,
        color: 'rgba(0,0,0,0.35)',
      },
      marker: {
        symbol: 'square',
        borderRadius: 20,
        radius: 60,
        fillColor: 'rgb(49,49,49)',
        lineWidth: 7,
        lineColor: 'rgba(0,0,0,0.43)'
      },
      dataLabels: {
        style: {
          fontFamily: "Seravek",
          color: "white",
          width: 60,
        },
        rotation: 0,
        useHTML: true,
        linkTextPath: {
          enabled: false
        },
        linkFormat: '',
        enabled: true,
      },
      data: mindMap,
      type: "networkgraph"
    }
  ],
  credits: {
    enabled: false
  }
};

const initializeMindMap = () => Highcharts.chart('mind-map', options);
const initializeGlossary = () => {
  Object.keys(glossary).forEach(term => {
    const glossaryContainer = document.getElementById("glossary");
    let div = document.createElement("div");
    div.classList.add("term");
    div.innerHTML = `<div class="title">${term}</div><div>${glossary[term]}</div>`;
    glossaryContainer.appendChild(div)
  });
}

window.addEventListener('load', () => {
  initializeMindMap();
  initializeGlossary();
});

