var APP_DATA = {
  "scenes": [
    {
      "id": "0-trilha-1",
      "name": "trilha 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.26231986371923277,
        "pitch": -0.2837135339391068,
        "fov": 1.2453530910800625
      },
      "linkHotspots": [
        {
          "yaw": -3.052658871513499,
          "pitch": -0.174021884284965,
          "rotation": 5.497787143782138,
          "target": "1-trilha-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2684273425827257,
          "pitch": 0.001483052256812556,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Trilha da Serra Negra</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"Na trilha, você já tem uma visão parcial da Serra Negra. Continue caminhando por mais alguns minutos e você chegará ao topo.</font></font>"
        }
      ]
    },
    {
      "id": "1-trilha-2",
      "name": "trilha 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.07494853249121292,
        "pitch": -0.41518976733208746,
        "fov": 1.2453530910800625
      },
      "linkHotspots": [
        {
          "yaw": 2.2732304817603044,
          "pitch": -0.03962447184184725,
          "rotation": 5.497787143782138,
          "target": "2-chegada"
        },
        {
          "yaw": 2.6420859483043717,
          "pitch": 0.00561665251435528,
          "rotation": 0.7853981633974483,
          "target": "0-trilha-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.12402050666918285,
          "pitch": -0.013579679378873166,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Caminho Alternativo</font></font>",
          "text": "Se preferir, há um caminho alternativo que permite chegar a essa parte da Serra Negra de carro. Assim, você pode desfrutar da vista sem a caminhada até o topo"
        }
      ]
    },
    {
      "id": "2-chegada",
      "name": "chegada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 1.6208011531379931,
        "pitch": -0.012551281112029855,
        "fov": 1.2453530910800625
      },
      "linkHotspots": [
        {
          "yaw": -0.3432136935296839,
          "pitch": 0.17090230079693924,
          "rotation": 5.497787143782138,
          "target": "1-trilha-2"
        },
        {
          "yaw": -2.8176547716360254,
          "pitch": -0.1384088613585419,
          "rotation": 0.7853981633974483,
          "target": "3-topo1"
        }
      ],
     /* "infoHotspots": [
        {
          "yaw": 0.7874511380588238,
          "pitch": 0.21201401714849233,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Vista de trás da Serra</font></font>",
          "text": "Text"
        }
      ]*/
    },
    {
      "id": "3-topo1",
      "name": "topo1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -0.8887681373641687,
        "pitch": -0.25982186792318984,
        "fov": 1.2453530910800625
      },
      "linkHotspots": [
        {
          "yaw": 2.836401289773436,
          "pitch": 0.03504119671082151,
          "rotation": 0.7853981633974483,
          "target": "2-chegada"
        },
        {
          "yaw": 0.9368121650078436,
          "pitch": 0.0662902419761906,
          "rotation": 5.497787143782138,
          "target": "4-topo-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8005540470906025,
          "pitch": 0.04410767527920001,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Chegada ao Topo da Serra Negra</font></font>",
          "text": "Ao chegar ao topo da Serra Negra, você é recebido por uma vista panorâmica espetacular da região montanhosa e dos rios. É um momento de pura admiração e realização."
        }
      ]
    },
    {
      "id": "4-topo-2",
      "name": "topo 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -2.711709966340461,
        "pitch": -0.1756869862878805,
        "fov": 1.2453530910800625
      },
      "linkHotspots": [
        {
          "yaw": 1.658903530723686,
          "pitch": -0.0505111673434655,
          "rotation": 0,
          "target": "3-topo1"
        },
        {
          "yaw": -0.5546937003278831,
          "pitch": 0.06499679880508324,
          "rotation": 0.7853981633974483,
          "target": "5-cidade"
        }
      ],
      /*"infoHotspots": [
        {
          "yaw": -1.4898298113852277,
          "pitch": 0.06853574111309158,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Arvore</font></font>",
          "text": "Text"
        }
      ]*/
    },
    {
      "id": "5-cidade",
      "name": "cidade",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.8300797137821956,
        "pitch": 0.07391358037185647,
        "fov": 1.2453530910800625
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 1.8728888321612196,
          "pitch": 0.1164501762313499,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Cidade Ibituruna</font></font>",
          "text": "A cidade está situada entre as montanhas, com suas casas e ruas. Uma visão incrível que mostra a beleza desta cidade. Ibituruna é uma cidade situada no estado de Minas Gerais. Conhecida por sua beleza natural e rica cultura, a cidade é um destino popular para aqueles que procuram uma experiência mineira."
        }
      ]
    }
  ],
  "name": "Tour Serra Negra",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
