import Template from '../types/Template'

const Fields = {
  name: 'Nama Wewangyan',
  action1: 'Aksi 1',
  action2: 'Aksi 2',
  organization: 'Organisasi',
  additionalCharacter1: 'Karakter Tambahan 1',
  additionalCharacter2: 'Karakter Tambahan 2',
  additionalCharacter3: 'Karakter Tambahan 3'
}

const randomizeNumber = (min: number, max: number): number => {
  return (Math.random() * (max - min + 1) + max)
}

const generateRandomizedLastCharacterRepetition = (input: string): string => {
  const chars = input.split('')
  const lastCharacter = chars.pop()
  let returned = chars.join('')
  for (let i = 0; i <= randomizeNumber(5, 18); i++) {
    returned = `${returned}${lastCharacter}`
  }
  return returned
}

const capitalize = (input: string): string => {
  const chars = input.toLowerCase().split('')
  const firstChar = chars.shift()?.toUpperCase()
  return [firstChar, ...chars].join('')
}

const Wangy: Template<typeof Fields> = {
  name: 'Wangy-wangy',
  fields: Fields,
  template: (fields) => `${fields.name.toUpperCase()}... ${fields.name.toUpperCase()} ${fields.name.toUpperCase()} ${generateRandomizedLastCharacterRepetition(fields.name).toUpperCase()} AAAAAAAAAAAAAA
  AAAAAAAAAAAAAAAAAGH AAAAAAAAAAAAAAAAAAAAAAAGH! WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya ${capitalize(fields.name)} wangi aku mau nyiumin aroma wanginya ${capitalize(fields.name)} AAAAAAAAH Rambutnya. aaah rambutnya juga pengen aku elus-elus ----- AAAAAH ${capitalize(fields.name)} keluar pertama kali juga manis!!! dia ${fields.action1} itu juga manis banget AAAAAAAAH ${fields.name.toUpperCase()} LUCCUUUUUUUUUUUUUUU......... GUA BAKAL RELA ${fields.action2.toUpperCase()} BUAT ${fields.name.toUpperCase()} AAAAAAAAAAAAAAAAAAAAAAAAAAAAAGH
  Apa? ${capitalize(fields.name)} itu gak nyata? Cuma karakter 2 dimensi katamu?
  Nggak ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK ${fields.organization.toUpperCase()} BANGSAAAAAT!
  GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI ${capitalize(fields.name)} ngeliat gw. ${capitalize(fields.name)} di laptop ngeliatin gw. ${capitalize(fields.name)}... kamu percaya sama aku? AAAAAAAAHHH syukur ${capitalize(fields.name)} gak malu merelakan aku aaaaaah!!! YEAAAAAAAAAAAH GUA MASIH PUNYA ${fields.name.toUpperCase()}, SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH
  ${fields.additionalCharacter1.toUpperCase()} ${fields.additionalCharacter2.toUpperCase()} ${generateRandomizedLastCharacterRepetition(fields.additionalCharacter3).toUpperCase()} KIRIMKANLAH CINTAKU PADA ${fields.name.toUpperCase()} KIRIMKAN KE ${fields.organization.toUpperCase()} YEEAAAAAAAAH`
}

export default Wangy
