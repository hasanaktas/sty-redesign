import mock from 'utils/mock';

mock.onGet('/api/puantaj').reply(200, [
  {
    tcNo: 16181286960,
    ad: 'Hasan',
    soyad: 'Aktas',
    toplamCalismaSaati: '50',
    puantaj: {
      2020: {
        Ocak: [],
        Şubat: [],
        Mart: []
      }
    }
  },
  {
    tcNo: 2342344543,
    ad: 'Berk',
    soyad: 'Yaman',
    toplamCalismaSaati: '49',
    puantaj: {
      2020: {
        Ocak: [],
        Şubat: [],
        Mart: []
      }
    }
  },
  {
    tcNo: 34534534435,
    ad: 'Arda',
    soyad: 'Selim Mahut Uslu',
    toplamCalismaSaati: '24',
    puantaj: {
      2020: {
        Ocak: [],
        Şubat: [],
        Mart: []
      }
    }
  },
  {
    tcNo: 16181286960,
    ad: 'Hasan',
    soyad: 'Aktas',
    toplamCalismaSaati: '50',
    puantaj: {
      2020: {
        Ocak: [],
        Şubat: [],
        Mart: []
      }
    }
  },
  {
    tcNo: 2342344543,
    ad: 'Berk',
    soyad: 'Yaman',
    toplamCalismaSaati: '49',
    puantaj: {
      2020: {
        Ocak: [],
        Şubat: [],
        Mart: []
      }
    }
  },
  {
    tcNo: 34534534435,
    ad: 'Arda',
    soyad: 'Selim',
    toplamCalismaSaati: '24',
    puantaj: {
      2020: {
        Ocak: [],
        Şubat: [],
        Mart: []
      }
    }
  }
]);
