import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import transactionOperations from '../redux/transactions/transactionOperations';
import transactionSelectors from '../redux/transactions/transactionSelectors';
import styles from './componentsCSS/HomeTabMobile.module.css';

export default function HomeTab() {
  const dispatch = useDispatch();
  const result = useSelector(transactionSelectors.getAllTransactions);

  useEffect(() => {
    dispatch(transactionOperations.fetchTransactions());
  }, [dispatch]);

  function getColor(type) {
    return type === '+' ? '#24CCA7' : '#FF6596';
  }

  return (
    <>
      {result.map(({ id, date, type, category, comment, sum, balance }) => (
        <TableContainer className={styles.tableContainer}>
          <Table key={id}>
            <TableBody>
              <TableCell
                style={{
                  maxWidth: '5px',
                  backgroundColor: getColor(type),
                }}
              ></TableCell>
              <TableCell>
                <TableRow>
                  <TableCell align="left">Дата</TableCell>
                  <TableCell align="right">{date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Тип</TableCell>
                  <TableCell align="right">{type}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Категория</TableCell>
                  <TableCell align="right">{category}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Комментарии</TableCell>
                  <TableCell align="right">{comment}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Сумма</TableCell>
                  <TableCell align="right">{sum}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Баланс</TableCell>
                  <TableCell align="right">{balance}</TableCell>
                </TableRow>
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </>
  );
}