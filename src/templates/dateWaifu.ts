import Template from '../types/Template'

const Fields = {
  name: 'Nama Waifu'
}

const DateWaifu: Template<typeof Fields> = {
  name: 'Date Waifu',
  fields: Fields,
  template: (fields) => `Date ${fields.name}
  Kiss ${fields.name}
  Propose to ${fields.name}
  Fuck ${fields.name}
  Marry ${fields.name}
  Have a lifetime lasting relationship with ${fields.name}
  Go on many picnics with ${fields.name}
  Play games with ${fields.name}
  Travel the world with ${fields.name}
  Listen to the stories and laughs of ${fields.name}
  Fall asleep each night and wake up each morning while looking at ${fields.name}
  Have children with ${fields.name}
  Build a house with ${fields.name}
  Watch our children grow up while we are expecting our fourth with ${fields.name}
  Watch the stars twinkle in the night, as we rest, shoulder to shoulder, with our children sleeping next to us with ${fields.name}
  Watch our children grow into warm, self sufficient, caring and capable adults, with ${fields.name}
  Retire to a farm next to the woods with ${fields.name}
  Have our children and grandchildren come to celebrate Christmas and other holidays together with ${fields.name}
  Take long hikes into the woods while holding hands, remembering all the amazing events we had in our life with ${fields.name}
  Grow old with ${fields.name}
  Pass away while at home, surrounded by family, holding hands with ${fields.name}
  As the void takes me, take the sight of a smile, covered with a stream of never ending tears, and feeling the warm embrace and kiss of ${fields.name}`
}

export default DateWaifu
