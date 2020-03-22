import React, { useState, useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import axios from 'utils/api'
import CustomToolbar from './CustomToolbar'
import CustomToolbarSelect from './CustomToolbarSelect'
const KurumIslemleri = () => {
  const [kurumlar, setKurumlar] = useState([])
  const [seciliKurum, setSeciliKurum] = useState(null)
  useEffect(() => {
    kurumlariGetir()
  }, [])

  function kurumSil(id) {
    axios.delete('tanim/kurum', { params: { id: id } }).then(() => kurumlariGetir())
  }

  function kurumlariGetir() {
    axios
      .get('tanim/kurum-liste')
      .then(({ data }) => {
        console.log('Kurumlar Basariyla Getirildi')
        console.log(data.data)
        setKurumlar(data.data)
      })
      .catch(err => {
        console.log(err.response.data.hata)
      })
  }

  function kurumEkleVeyaDuzenle(item) {
    const func = item.id ? axios.put : axios.post
    func('tanim/kurum', item)
      .then(({ data }) => {
        kurumlariGetir()
      })
      .catch(err => {
        console.log(err.response.data.hata)
      })
  }
  const header = (
    <div style={{ textAlign: 'left' }}>
      <i
        className="pi pi-search"
        style={{ margin: '4px 4px 0 0' }}
      />
      <InputText
        placeholder="Ara"
        size="50"
        type="search"
      />
    </div>
  )

  return (
    <div>
      <DataTable
        emptyMessage="Kayıt Bulunamadı"
        header={header}
        onSelectionChange={e => setSeciliKurum(e.value)}
        paginator
        resizableColumns
        rows={5}
        selection={seciliKurum}
        selectionMode="single"
        sortMode="multiple"
        value={kurumlar}
      >
        <Column
          field="id"
          header="ID"
          sortable
          style={{ width: 80, textAlign: 'center' }}
        />
        <Column
          field="adi"
          filter
          header="Kurum Adı"
          sortable
        />
      </DataTable>
      <MUIDataTable
        columns={[
          {
            label: 'ID',
            name: 'id',
            options: {
              sortDirection: 'asc',
            },
          },
          {
            label: 'Kurum Adı',
            name: 'adi',
            options: {
              filterType: 'textField',
            },
          },
        ]}
        data={kurumlar}
        options={{
          filter: true,
          filterType: 'dropdown',
          resizableColumns: true,
          sortFilterList: false,

          onRowsDelete: rowsDeleted => {
            const id = kurumlar[rowsDeleted.data[0].dataIndex].id
            kurumSil(id)
            return false
          },
          customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
            <CustomToolbarSelect
              deleteRow={() => {
                const id = kurumlar[selectedRows.data[0].dataIndex].id
                kurumSil(id)
              }}
              displayData={displayData}
              kurumEkleVeyaDuzenle={kurumEkleVeyaDuzenle}
              seciliKurum={kurumlar[selectedRows.data[0].dataIndex]}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
            />
          ),
          customToolbar: () => {
            return <CustomToolbar kurumEkleVeyaDuzenle={kurumEkleVeyaDuzenle} />
          },

          selectableRows: 'single',
          selectableRowsOnClick: true,
          print: false,
          download: false,
          textLabels: {
            body: {
              noMatch: 'Üzgünüz, eşleşen kayıt bulunamadı',
              toolTip: 'Sınıfla',
              columnHeaderTooltip: column => `Sırala - ${column.label}`,
            },
            pagination: {
              next: 'Sonraki Sayfa',
              previous: 'Önceki sayfa',
              rowsPerPage: 'Sayfa başına satır:',
              displayRows: 'of',
            },
            toolbar: {
              search: 'Ara',
              downloadCsv: 'CSV olarak indir',
              print: 'Yazdır',
              viewColumns: 'Sütünları Göster',
              filterTable: 'Tabloyu Filtrele',
            },
            filter: {
              all: 'Hepsi',
              title: 'Filtrele',
              reset: 'Sıfırla',
            },
            viewColumns: {
              title: 'Sütünları Göster',
              titleAria: 'Sütünları Göster Gizle',
            },
            selectedRows: {
              text: 'kurum seçildi',
              delete: 'Sil',
              deleteAria: 'Seçeli satırı sil',
            },
          },
        }}
        title="Kurumlar"
      />
    </div>
  )
}

export default KurumIslemleri
