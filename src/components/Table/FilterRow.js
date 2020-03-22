import * as React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
  DateTimePicker,
} from '@material-ui/pickers';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class MTableFilterRow extends React.Component {
  renderFilterComponent = columnDef =>
    React.createElement(columnDef.filterComponent, {
      columnDef: columnDef,
      onFilterChanged: this.props.onFilterChanged,
    });

  renderLookupFilter = columnDef => (
    <FormControl style={{ width: '100%' }}>
      <InputLabel htmlFor="select-multiple-checkbox">{columnDef.filterPlaceholder}</InputLabel>
      <Select
        input={<Input id="select-multiple-checkbox" />}
        MenuProps={MenuProps}
        multiple
        onChange={event => {
          this.props.onFilterChanged(columnDef.tableData.id, event.target.value);
        }}
        renderValue={selecteds => selecteds.map(selected => columnDef.lookup[selected]).join(', ')}
        style={{ marginTop: 0 }}
        value={columnDef.tableData.filterValue || []}
      >
        {Object.keys(columnDef.lookup).map(key => (
          <MenuItem
            key={key}
            value={key}
          >
            <Checkbox
              checked={
                columnDef.tableData.filterValue
                  ? columnDef.tableData.filterValue.indexOf(key.toString()) > -1
                  : false
              }
            />
            <ListItemText primary={columnDef.lookup[key]} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  renderBooleanFilter = columnDef => (
    <Checkbox
      checked={columnDef.tableData.filterValue === 'checked'}
      indeterminate={columnDef.tableData.filterValue === undefined}
      onChange={() => {
        let val;
        if (columnDef.tableData.filterValue === undefined) {
          val = 'checked';
        } else if (columnDef.tableData.filterValue === 'checked') {
          val = 'unchecked';
        }

        this.props.onFilterChanged(columnDef.tableData.id, val);
      }}
    />
  );

  renderDefaultFilter = columnDef => {
    return (
      <TextField
        fullWidth
        label="Ara"
        onChange={event => {
          this.props.onFilterChanged(columnDef.tableData.id, event.target.value);
        }}
        placeholder={columnDef.filterPlaceholder || ''}
        size="small"
        style={columnDef.type === 'numeric' ? { float: 'right' } : {}}
        type={columnDef.type === 'numeric' ? 'number' : 'search'}
        value={columnDef.tableData.filterValue || ''}
        variant="outlined"
      />
    );
  };

  renderDateTypeFilter = columnDef => {
    let dateInputElement = null;
    const onDateInputChange = date => this.props.onFilterChanged(columnDef.tableData.id, date);
    if (columnDef.type === 'date') {
      dateInputElement = (
        <DatePicker
          clearable
          onChange={onDateInputChange}
          value={columnDef.tableData.filterValue || null}
        />
      );
    } else if (columnDef.type === 'datetime') {
      dateInputElement = (
        <DateTimePicker
          clearable
          onChange={onDateInputChange}
          value={columnDef.tableData.filterValue || null}
        />
      );
    } else if (columnDef.type === 'time') {
      dateInputElement = (
        <TimePicker
          clearable
          onChange={onDateInputChange}
          value={columnDef.tableData.filterValue || null}
        />
      );
    }
    return (
      <MuiPickersUtilsProvider
        locale={this.props.localization.dateTimePickerLocalization}
        utils={DateFnsUtils}
      >
        {dateInputElement}
      </MuiPickersUtilsProvider>
    );
  };

  getComponentForColumn(columnDef) {
    if (columnDef.filtering === false) {
      return null;
    }

    if (columnDef.field || columnDef.customFilterAndSearch) {
      if (columnDef.filterComponent) {
        return this.renderFilterComponent(columnDef);
      } else if (columnDef.lookup) {
        return this.renderLookupFilter(columnDef);
      } else if (columnDef.type === 'boolean') {
        return this.renderBooleanFilter(columnDef);
      } else if (['date', 'datetime', 'time'].includes(columnDef.type)) {
        return this.renderDateTypeFilter(columnDef);
      } else {
        return this.renderDefaultFilter(columnDef);
      }
    }
  }

  render() {
    const columns = this.props.columns
      .filter(columnDef => !columnDef.hidden && !(columnDef.tableData.groupOrder > -1))
      .sort((a, b) => a.tableData.columnOrder - b.tableData.columnOrder)
      .map(columnDef => (
        <TableCell
          key={columnDef.tableData.id}
          style={{ ...this.props.filterCellStyle, ...columnDef.filterCellStyle }}
        >
          {this.getComponentForColumn(columnDef)}
        </TableCell>
      ));

    if (this.props.selection) {
      columns.splice(0, 0, <TableCell
        key="key-selection-column"
        padding="none"
      />);
    }

    if (this.props.hasActions) {
      if (this.props.actionsColumnIndex === -1) {
        columns.push(<TableCell key="key-action-column" />);
      } else {
        let endPos = 0;
        if (this.props.selection) {
          endPos = 1;
        }
        columns.splice(
          this.props.actionsColumnIndex + endPos,
          0,
          <TableCell key="key-action-column" />,
        );
      }
    }

    if (this.props.hasDetailPanel) {
      columns.splice(0, 0, <TableCell
        key="key-detail-panel-column"
        padding="none"
      />);
    }

    if (this.props.isTreeData > 0) {
      columns.splice(0, 0, <TableCell
        key={'key-tree-data-filter'}
        padding="none"
      />);
    }

    this.props.columns
      .filter(columnDef => columnDef.tableData.groupOrder > -1)
      .forEach(columnDef => {
        columns.splice(
          0,
          0,
          <TableCell
            key={'key-group-filter' + columnDef.tableData.id}
            padding="checkbox"
          />,
        );
      });

    return <TableRow style={{ height: 10 }}>{columns}</TableRow>;
  }
}

MTableFilterRow.defaultProps = {
  columns: [],
  selection: false,
  hasActions: false,
  localization: {
    filterTooltip: 'Filter',
  },
  hideFilterIcons: false,
};

MTableFilterRow.propTypes = {
  columns: PropTypes.array.isRequired,
  hasDetailPanel: PropTypes.bool.isRequired,
  isTreeData: PropTypes.bool.isRequired,
  onFilterChanged: PropTypes.func.isRequired,
  filterCellStyle: PropTypes.object,
  selection: PropTypes.bool.isRequired,
  actionsColumnIndex: PropTypes.number,
  hasActions: PropTypes.bool,
  localization: PropTypes.object,
  hideFilterIcons: PropTypes.bool,
};

export default MTableFilterRow;
