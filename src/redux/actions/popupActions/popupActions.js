export const CHANGE_TABLE_DATA = 'CHANGE_TABLE_DATA';

export const changeTableData = (tableCurrentRow) => ({
  type: CHANGE_TABLE_DATA,
  payload: {
    tableCurrentRow
  }
});