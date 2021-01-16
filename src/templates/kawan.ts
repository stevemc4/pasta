import Template from '../types/Template'

const Fields = {
  name: 'Nama Waifu'
}

const Kawan: Template<typeof Fields> = {
  name: 'Kawan, Aku Gemetaran',
  fields: Fields,
  template: (fields) => `Kawan, aku gemetaran. Aku benar-benar gemetaran. Aku tidak pernah ingin ngentot dengan siapa pun lebih dari yang aku inginkan terkecuali ${fields.name}. Tubuh melengkung yang sempurna itu. Paha yg mulus itu. Wanita itu membawa pinggul dewi yang nyata. Sialan benar-benar menyakitkan mengetahui bahwa aku tidak akan pernah ngentot dengan dia, melalui genku dan dia, yang akhirnya melahirkan satu set keturunan yang sempurna. Aku akan melakukan APA SAJA untuk mendapatkan kesempatan agar ${fields.name} hamil. A P A S A J A. Dan faktanya ini hanyalah imajinasi saja...

  Mengapa tuhan menciptakan sesuatu yang begitu sempurna? Sesuatu yang sangat menggoda iman? Mereka pasti tertawa setelah melihat tulisan ku ini (membayangkan betapa cabulnya diriku) tapi jujur, aku hanya tidak bisa menahan diriku lagi`
}

export default Kawan
