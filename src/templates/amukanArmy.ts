import Template from '../types/Template'

const Fields = {
  name: 'Nama Idola',
  skill: 'Keahlian Idola',
  nickname: 'Panggilan Idola',
  industry: 'Industri Idola',
  fandom: 'Nama Fandom'
}

const AmukanArmy: Template<typeof Fields> = {
  name: 'Amukan Para Army',
  fields: Fields,
  template: (fields) => `MAKSUD LO APA HINA2 ${fields.name.toUpperCase()} HAH?!!!! GUE MESTI KASUG TAU YA ${fields.name.toUpperCase()} ITU RAJANYA ${fields.skill.toUpperCase()}!!! ${fields.nickname.toUpperCase()} GUA UDAH MENGUNJUNGI NOMINASI2 TERATAS, DAN PUNYA LEBIH 200 PENGHARGAAN!! ${fields.nickname.toUpperCase()} GUE UDAH TERLATIH ${fields.industry.toUpperCase()} DAN ${fields.name.toUpperCase()} ITU YANG TERBAIK DI SEGALA INDUSTRI ${fields.industry.toUpperCase()}. MUKA LO GAADA APA2NYA DI BANDING SAMA ${fields.nickname.toUpperCase()} GUA ${fields.fandom.toUpperCase()} BAKAL INCAR LO SAMPE GAADA DI MUKA BUMI INI!! CAMKAN KATA2 ${fields.fandom.toUpperCase()}!!! LU PIKIR BISA SEENAK NYA NGATAIN ${fields.nickname.toUpperCase()} GUA BEGITU AJA ???? PIKIR ULANG NJING!!! PAS GUE NGETIK INI GUA UDAH HUBUNGIN DAN MEMANGGIL SELURUH ${fields.fandom.toUpperCase()} DI SEKOJUR DUNIA DAN MUKA LU UDAH GUA LACAK BUAT UU ITE!! ${fields.fandom.toUpperCase()} ADA DI MANA MANA DAN KAPAN AJA BISA BULLY ELO DENGAN SEGALA CARA NJING!!! COBA AJA LO GA NGEHINA ${fields.nickname.toUpperCase()} GW ATAU LO BISA JAGA MULUT. LO GABISA KAN?? ${fields.fandom.toUpperCase()} BAKAL HANCUR SAMA KAWAN2 LO YANG LAIN YANG HINA ${fields.name.toUpperCase()}. LU BAKAL MATI NJING!!!! CAMKAN!!!!!`
}

export default AmukanArmy
