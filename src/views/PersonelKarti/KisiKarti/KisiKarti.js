import React, { useEffect, useState } from 'react';
import {
  useTheme,
  Paper,
  ButtonGroup,
  Button,
  TextField,
  InputAdornment,
  Tooltip,
} from '@material-ui/core';
import Table from 'components/Table';
import axios from 'utils/axios';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import GoIcon from '@material-ui/icons/NearMe';
import ErrorIcon from '@material-ui/icons/Error';
import { Link } from 'react-router-dom';
import { KisiEkle } from './components';
const KisiKarti = () => {
  const theme = useTheme();
  const [persons, setPersons] = useState([]);
  const [kisiEkleDialog, setKisiEkleDialog] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [columns, setColumns] = useState([
    {
      title: 'T.C. No',
      field: 'tcNo',
    },
    { title: 'Ad', field: 'ad' },
    { title: 'Soyad', field: 'soyad' },
    { title: 'Birim', field: 'birim' },
    { title: 'Ünvan', field: 'unvan' },
  ]);
  useEffect(() => {
    const fetchPersons = () => {
      axios.get('/api/kisiler').then(response => {
        setPersons(response.data);
      });
    };

    fetchPersons();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Table
        columns={columns}
        components={{
          Container: props => <Paper
            {...props}
            style={{ padding: 20 }}
                              />,

          Toolbar: props => (
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 20 }}>
                <TextField
                  InputProps={{
                    placeholder: 'Global Ara...',
                    startAdornment: (
                      <InputAdornment position="start">
                        <Tooltip title="Herkesi Ara">
                          <props.icons.Search
                            color="inherit"
                            fontSize="small"
                          />
                        </Tooltip>
                      </InputAdornment>
                    ),

                    style: props.searchFieldStyle,
                  }}
                  onChange={event => props.onSearchChanged(event.target.value)}
                  size="small"
                  type="search"
                  value={props.searchText}
                  variant="outlined"
                />
                <div style={{ flexGrow: 1 }} />
                <ButtonGroup color="primary">
                  <Button
                    onClick={() => setKisiEkleDialog(true)}
                    startIcon={<AddIcon />}
                  >
                    Yeni
                  </Button>
                  <Button
                    disabled={!selectedPerson}
                    startIcon={<EditIcon />}
                  >
                    Düzenle
                  </Button>

                  <Button
                    component={Link}
                    disabled={!selectedPerson}
                    startIcon={<GoIcon />}
                    to={selectedPerson ? `/kisi/${selectedPerson.tcNo}` : '/kisi'}
                  >
                    Git
                  </Button>

                  <Button
                    disabled={!selectedPerson}
                    startIcon={<ErrorIcon />}
                  >
                    İşten Çıkış
                  </Button>
                  <Button
                    disabled={!selectedPerson}
                    startIcon={<DeleteIcon />}
                  >
                    Sil
                  </Button>
                  <Button>Aktar</Button>
                </ButtonGroup>
              </div>
            </div>
          ),
        }}
        data={persons}
        onRowClick={(evt, selectedRow) => {
          console.log(selectedRow);
          setSelectedPerson(selectedRow);
        }}
        options={{
          rowStyle: rowData => ({
            color:
              selectedPerson && selectedPerson.tableData.id === rowData.tableData.id && 'white',
            backgroundColor:
              selectedPerson && selectedPerson.tableData.id === rowData.tableData.id
                ? theme.palette.primary.main
                : '#FFF',
          }),

          filtering: true,
          paging: false,
          actionsColumnIndex: -1,
        }}
        title="Personeller"
      />

      <KisiEkle
        onClose={() => setKisiEkleDialog(false)}
        open={kisiEkleDialog}
      />
      <Button
        onClick={() =>
          setColumns([
            {
              title: 'T.C. No',
              field: 'tcNo',
            },
            { title: 'Ad', field: 'ad' },
          ])
        }
      >
        Git
      </Button>
    </div>
  );
};

export default KisiKarti;
