import mock from 'utils/mock';

mock.onGet('/api/kisiler').reply(200, [
  {
    tcNo: 28426427904,
    ad: 'Ahmet',
    soyad: 'Kibaroğlu',
    birim: 'İdari Mali İşler Başkanlığı',
    unvan: 'Saymanlık Çalışanı',
  },
  {
    tcNo: 17884039392,
    ad: 'Ahmet',
    soyad: 'Sağlam',
    birim: 'İdari Mali İşler Başkanlığı',
    unvan: 'Üretim Faaliyetlerinde Fiilen Çalışan',
  },
  {
    tcNo: 15085321612,
    ad: 'Ali',
    soyad: 'Öztürçeden',
    birim: 'İdari Mali İşler Başkanlığı',
    unvan: 'İşkolu Sorumlusu',
  },
  {
    tcNo: 21514857059,
    ad: 'Asude',
    soyad: 'Yıldız Topçuoğlu',
    birim: 'İdari Mali İşler Başkanlığı',
    unvan: 'Saymanlık Çalışanı',
  },
  {
    tcNo: 40705165840,
    ad: 'Bahadır',
    soyad: 'Güzel',
    birim: 'İdari Mali İşler Başkanlığı',
    unvan: 'İKM',
  },
  {
    tcNo: 14819548820,
    ad: 'Cengiz',
    soyad: 'Kurt',
    birim: 'İdari Mali İşler Başkanlığı',
    unvan: 'Atölye Şefi',
  },
]);
