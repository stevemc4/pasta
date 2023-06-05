import Template from '../types/Template'

const Fields = {
  name: 'Nama Waifu'
}

const luLihatKarakterFiksiIni: Template<typeof Fields> = {
  name: 'Lu Lihat Karakter Fiksi Ini?',
  fields: Fields,
  template: (fields) => `Lu lihat karakter fiksi ini? 
  Gue tidak takut untuk mengakui bahwa gue telah kehilangan belasan liter calon anak gueh karena karakter fantasi belaka.
  Bukankah lucu bagaimana bahkan gadis sungguhan pun tidak membuat gue bergairah seperti halnya ${Fields.name}? 
  Gue telah membunuh jutaan calon keturunan gue dengan pemikiran melakukan hubungan badan dengan tokoh kartun, tokoh yang dibentuk oleh pemikiran manusia. 
  Siapa tahu, mungkin saja ada calon ilmuwan yang bisa menyembuhkan kanker, seorang insinyur yang bisa mendemonstrasikan terraforming di planet Mars, 
  atau bahkan calon presiden Amerika Serikat di masa depan di antara mereka yang sekarang menempel pada sehelai tisu ini.
  Tak perlu dikatakan, gue TIDAK menyesal sama sekali. Dia adalah perwujudan dari kesempurnaan literal. 
  Gue sanggup meyakinkan lu semua bahwa gue akan terus berfantasi tentang dia dan tidak akan berhenti dalam waktu dekat.
  Apa menurut lu fakta bahwa dia tidak nyata sebenarnya adalah penghalang terbesar bagi gue? Hell no. 
  Gue telah melatih lucid dreaming dan proyeksi astral untuk menyeberang antara dunia manusia dan dimensi anime untuk akhirnya bertemu dengannya.
  Kami pergi ke McDonalds selama perjalanan lintas dimensi gue baru-baru ini, tetapi sayangnya gue harus bangun dan pergi ke pekerjaan gue yang berupah minimum. 
  Saat ini, gue sedang merancang tulpa untuk membawanya ke dunia manusia. ${Fields.name} mungkin tidak nyata bagi lu, tapi dia akan segera hadir untuk gue seorang.`
}

export default luLihatKarakterFiksiIni
