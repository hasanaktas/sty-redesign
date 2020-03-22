import mock from 'utils/mock';

mock.onGet('/api/kisi').reply(200, {
  tcNo: 28426427904,
  ad: 'Ahmet',
  soyad: 'Kibaroğlu',
  birim: 'İdari Mali İşler Başkanlığı',
  unvan: 'Saymanlık Çalışanı',
});
