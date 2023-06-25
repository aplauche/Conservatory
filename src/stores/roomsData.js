export default [
  {
    slug: "palm-house",
    name: "Palm House",
    targetScale: {x: 4, y: 4.5, z: 10.5},
    targetPos: {x: 3.45, y: 0, z:0.2},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra lorem a lacus porta suscipit. Morbi dolor dolor, lobortis vel urna vel, semper mollis est. Nam dictum vel quam vel convallis.",
    photo: "/images/palm-house-2.jpg",
    cameraShift: {x:20, y:20, z: 20},
    focusRotation: {x:0, y: -Math.PI / 1.5, z: 0},
    focusPosition: {x:0, y: 22, z: 45},
    pano: "/images/panos/palm-house.jpg",
    stats: [
      {
        title: "Temp",
        stat: "80˚ F"
      },
      {
        title: "Humidity",
        stat: "90%"
      },
      {
        title: "Square Feet",
        stat: "5K+"
      },
      {
        title: "Palm Species",
        stat: "70+"
      }
    ]

  },
  {
    slug: "fern-room",
    name: "Fern Room",
    targetScale: {x: 5.5, y: 4.5, z: 5},
    targetPos: {x: -1.25, y: 0, z:0.2},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra lorem a lacus porta suscipit. Morbi dolor dolor, lobortis vel urna vel, semper mollis est. Nam dictum vel quam vel convallis.",
    photo: "/images/fern-room.jpg",
    cameraShift: {x:34, y:14, z: 12},
    focusRotation: {x:0.8, y: -1, z: 0},
    focusPosition: {x:0, y: 20, z: 40},
    pano: "/images/panos/fern-room.jpg",
    stats: [
      {
        title: "Temp",
        stat: "73˚ F"
      },
      {
        title: "Humidity",
        stat: "60%"
      },
      {
        title: "Species",
        stat: "500+"
      },
      {
        title: "Square Feet",
        stat: "10K+"
      }
    ]
  },
  {
    slug: "show-house",
    name: "Show House",
    targetScale: {x: 5.5, y: 4.5, z: 2.6},
    targetPos: {x: -1, y: 0, z: -3.3},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra lorem a lacus porta suscipit. Morbi dolor dolor, lobortis vel urna vel, semper mollis est. Nam dictum vel quam vel convallis.",
    photo: "/images/showroom.png",
    pano: "/images/panos/show-room.jpg",
    cameraShift: {x:34, y:14, z: 12},
    focusRotation: {x:0, y: -2.75, z: 0},
    focusPosition: {x:0, y: 22, z: 45},
    stats: [
      {
        title: "Seasonal Shows",
        stat: "5/yr"
      },
      {
        title: "Square Feet",
        stat: "5K+"
      }
    ]
  },
  {
    slug:"sugar-from-the-sun",
    name: "Sugar from the Sun",
    targetScale: {x: 5.5, y: 4.5, z: 2.6},
    targetPos: {x: -1, y: 0, z:3.45},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra lorem a lacus porta suscipit. Morbi dolor dolor, lobortis vel urna vel, semper mollis est. Nam dictum vel quam vel convallis.",
    photo: "/images/sugar-from-the-sun.png",
    pano: "/images/panos/sugar-from-the-sun.jpg",
    cameraShift: {x:-30, y:25, z: -10},
    focusRotation: {x:0, y: 0.6, z: 0},
    focusPosition: {x:0, y: 22, z: 45},
    stats: [
      {
        title: "Distinct Biomes",
        stat: "4"
      },
      {
        title: "Species",
        stat: "200+"
      }
    ]
  },
  {
    slug:"desert-house",
    name: "Desert House",
    targetScale: {x: 2.5, y: 4.5, z: 5},
    targetPos: {x: -5.5, y: 0, z:0},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra lorem a lacus porta suscipit. Morbi dolor dolor, lobortis vel urna vel, semper mollis est. Nam dictum vel quam vel convallis.",
    photo: "/images/desert-room.png",
    pano: "/images/panos/desert-room.jpg",
    cameraShift: {x:0, y:25, z: -40},
    focusRotation: {x:0, y: Math.PI / 1.5, z: 0},
    focusPosition: {x:0, y: 22, z: 45},
    stats: [
      {
        title: "Temp",
        stat: "68˚ F"
      },
      {
        title: "Humidity",
        stat: "10%"
      }
    ]
  },
  {
    slug: "info",
    name: "Information",
    targetScale: {x: 2.5, y: 2.5, z: 7},
    targetPos: {x: 6.5, y: 0, z:0.2},
    description: `
    <span class="font-bold">HOURS:</span>
    <hr />
    <br>
    Wednesday 10am-8pm; 
    <br>Thursday – Sunday 10am-5pm; 
    <br>Closed Monday and Tuesday
    <br><br>
    <span class="font-bold">ADMISSION:</span>
    <hr /> 
    <br>FREE (suggested donation)
    <br><br>
    <span class="font-bold">LOCATION: </span>
    <hr />
    <br>300 N. Central Park Ave, Chicago, IL 60624
    <br><br>
    <span class="font-bold">PHONE: </span>
    <hr />
    <br>773-638-1766
    `,
    photo: false,
    focusRotation: {x: 0, y: -Math.PI / 2, z: 0},
    focusPosition: {x:0, y: 22, z: 42},
  }
]