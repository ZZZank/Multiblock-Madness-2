
global.oreProcessingParts = [
    {
        'name': `raw`,
        'prefix': `Raw `,
        'suffix': ``,
        'model': false,
        'grade': 0,
    },
    {
        'name': `crushed`,
        'prefix': `Crushed `,
        'suffix': ``,
        'model': false,
        'grade': 1,
    },
    {
        'name': `chunk`,
        'prefix': ``,
        'suffix': ` Chunk`,
        'model': true,
        'grade': 2,
    },
    {
        'name': `lump`,
        'prefix': `Lump of `,
        'suffix': ``,
        'model': true,
        'grade': 3,
    },
    {
        'name': `leached`,
        'prefix': `Leached `,
        'suffix': ``,
        'model': true,
        'grade': 4,
    },
    {
        'name': `deposit`,
        'prefix': ``,
        'suffix': ` Deposit`,
        'model': true,
        'grade': 5,
    },
    {
        'name': `crystal`,
        'prefix': ``,
        'suffix': ` Crystal`,
        'model': true,
        'grade': 6,
    },
    {
        'name': `grit`,
        'prefix': ``,
        'suffix': ` Grit`,
        'model': true,
        'grade': -1,
    },
]

global.oreRefiningParts = [
    {
        'name': `fine_dust`,
        'prefix': `Fine `,
        'suffix': ` Dust`,
        'model': false,
        'level': 0,
    },
    {
        'name': `washed`,
        'prefix': `Washed `,
        'suffix': ``,
        'model': false,
        'level': 1,
    },
    {
        'name': `crumbled`,
        'prefix': `Crumbled `,
        'suffix': ``,
        'model': false,
        'level': 2,
    },
    {
        'name': `cluster`,
        'prefix': ``,
        'suffix': ` Cluster`,
        'model': false,
        'level': 3,
    },
    {
        'name': `brick`,
        'prefix': ``,
        'suffix': ` Brick`,
        'model': false,
        'level': 4,
    },
    {
        'name': `infused`,
        'prefix': `Infused `,
        'suffix': ``,
        'model': false,
        'level': 5,
    },
    {
        'name': `shard`,
        'prefix': ``,
        'suffix': ` Shard`,
        'model': false,
        'level': 6,
    },
]

  global.oreParts = global.oreProcessingParts.concat(global.oreRefiningParts)