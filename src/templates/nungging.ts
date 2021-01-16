import Template from '../types/Template'

const Fields = {
  action: 'Nungging'
}

const Nungging: Template<typeof Fields> = {
  name: 'Nungging Gak Lu',
  fields: Fields,
  template: (fields) => `ANJING ${fields.action.toUpperCase()} GA LU, ${fields.action.toUpperCase()} SEKARANG!!!
  GUA DAH GAK TAHAN, LO POKOKNYA HARUS ${fields.action.toUpperCase()} ANJING PLEASE LO  APA SETIAP HARINYA LIAT LU SLIWAR SLIWER, GUA NGACENG BANGSATTTT LU PAHAM GA SIH SELAMA INI GUA PENGEN LIAT ELU POSTUR ${fields.action.toUpperCase()}, TAU GAK GUA SELALU NAHAN HORNY, DI KANTOR , DI WARUNG, DI RUMAH CUMA PENGEN PUAS PUASIN HASRAT GUA BUAT LIAT ELU ${fields.action.toUpperCase()} PLIS SEKALI AJA PLIS, GAPEDULI DILUAR SANA APA YANG TERJADI, ELO ${fields.action.toUpperCase()} GUA UDAH SENENG BANGSAT ANJING LU KUDU PAHAM GUA GA SUDI KEHILANGAN ELU, LU HARUS SETIDAKNYA ${fields.action.toUpperCase()} DAN MEMBEKAS DI MEMORI INDAH GUA PLIS DEH GW MINTA SEGENAP HATI GW AGAR LU ${fields.action.toUpperCase()}`
}

export default Nungging
