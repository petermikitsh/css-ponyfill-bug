import { defineCustomElements } from '@anjuna/core/loader';
import cssVars from 'css-vars-ponyfill';

defineCustomElements(window).then(function () {
  const table = document.createElement('anj-table');

  table.columns = [{
    field: 'id'
  }, {
    field: 'value'
  }];

  table.dataSource = [{
    id: 1,
    value: 'one'
  }, {
    id: 2,
    value: 'two'
  }, {
    id: 3,
    value: 'three'
  }];

  document.body.appendChild(table);
  cssVars({
    watch: true
  });
});
