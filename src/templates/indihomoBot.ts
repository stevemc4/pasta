import Template from '../types/Template'

const Fields = {
  name: 'Nama User'
}

const capitalize = (input: string): string => {
  const words = input.toLowerCase().split(' ')
  return words.map(word => {
    const chars = word.toLowerCase().split('')
    const firstChar = chars.shift()?.toUpperCase()
    return [firstChar, ...chars].join('')
  }).join(' ')
}

const IndihomoBot: Template<typeof Fields> = {
  name: 'IndihomoBot',
  fields: Fields,
  template: (fields) => `Halo Kak ${capitalize(fields.name)},  kendala yang dialami Kami sarankan silakan restart modemnya selama 10 menit, jika masih berkendala silakan lakukan unplug/lepas-pasang kabel patch cord (kabel berwarna hitam/kuning dengan ujung biru) ke ONT (modem). Jika masih berkendala silakan informasikan nomor IndiHome nya, atas nama pemilik dan nomor HP yang aktif via Inbox ya Kakak. Terima kasih`
}

export default IndihomoBot
