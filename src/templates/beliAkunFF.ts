import Template from '../types/Template'

const Fields = {
  name: 'Nama Game',
  inGameItem: 'Benda Dalam Game'
}

const BeliAkunFF: Template<typeof Fields> = {
  name: 'Beli Akun FF',
  fields: Fields,
  template: (fields) => `BANG KIRIM DATA ${fields.name.toUpperCase()}NYA KAN SUDAH SAYA ISIKAN PULSA ABANG 10 RIBU, PLISS BANG JANGAN NIPU SAYA SOALNYA UANG ITU SAYA MINTA DARI IBU SAYA TOLONG KIRIM DATA ${fields.name.toUpperCase()}NYA SEKARANG BG, UANG JAJAN SAYA UDAH ABIS BUAT ISIKAN ABANG PULSA DEMI SAYA MENDAPATKAN ${fields.inGameItem.toUpperCase()} TOLONG JANGAN KECEWAKAN SAYA BG KALO ABANG NIPU ABANG EMANG JAHAT DAN BERMUKA JELEK.`
}
export default BeliAkunFF
