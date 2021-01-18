import Template from '../types/Template'

const Fields = {
  news: 'Berita'
}

const JokeBerita: Template<typeof Fields> = {
  name: 'Joke Berita',
  fields: Fields,
  template: (fields) => `Orang yang ngetawain dan ngejokes tentang ${fields.news} mungkin dia blm ketemu langsung. Sebaik dan sehumbel itu dia sama orang baru, salah satunya ke gw yg awalnya gw fans sama dia malah bisa jadi temen. Semua yg udh ketemu dia pasti sependapat sama gw.`
}

export default JokeBerita
