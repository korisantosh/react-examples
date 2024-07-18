import React, { useState } from 'react';
import './App.css';
import ColumnsMenu from './ColumnsMenu';

import TableComponent from './TableComponent';
import { SampleData } from './types/commonTypes';


function App() {
  const [filteredColumns, setFilteredColumns] = useState<string[]>([]);
  const sampleData = {"headers":[{"name":"organisation unit code","attribute":null,"fieldName":"organisation unit code","description":null,"type":"string","redacted":false},{"name":"organisation unit description","attribute":null,"fieldName":"organisation unit description","description":null,"type":"string","redacted":false},{"name":"parent organisation unit code","attribute":null,"fieldName":"parent organisation unit code","description":null,"type":"string","redacted":false},{"name":"chief organisation Unit code","attribute":null,"fieldName":"chief organisation Unit code","description":null,"type":"string","redacted":false},{"name":"organisation begin date","attribute":null,"fieldName":"organisation begin date","description":null,"type":"string","redacted":false},{"name":"organisation end date","attribute":null,"fieldName":"organisation end date","description":null,"type":"string","redacted":false},{"name":"country code","attribute":null,"fieldName":"country code","description":null,"type":"string","redacted":false},{"name":"cost centre code","attribute":null,"fieldName":"cost centre code","description":null,"type":"string","redacted":false},{"name":"location code","attribute":null,"fieldName":"location code","description":null,"type":"string","redacted":false},{"name":"company code","attribute":null,"fieldName":"company code","description":null,"type":"string","redacted":false},{"name":"logical delete flag","attribute":null,"fieldName":"logical delete flag","description":null,"type":"string","redacted":false},{"name":"publisher code","attribute":null,"fieldName":"publisher code","description":null,"type":"string","redacted":false},{"name":"map code","attribute":null,"fieldName":"map code","description":null,"type":"string","redacted":false},{"name":"last update date","attribute":null,"fieldName":"last update date","description":null,"type":"string","redacted":false}],"rows":[{"organisation unit code":"10000","organisation unit description":"LCCI - Commercial Analytics","parent organisation unit code":"19665","chief organisation Unit code":"2263822","organisation begin date":"1/1/1900","organisation end date":"31-12-9999","country code":"IND","cost centre code":"5501058","location code":"3545","company code":"550","logical delete flag":"0","publisher code":"WD_LILLY","map code":"CSAD","last update date":"12/3/2022 20:00"},{"organisation unit code":"10001","organisation unit description":"LCCI HR Support","parent organisation unit code":"11160","chief organisation Unit code":"2027192","organisation begin date":"1/1/1900","organisation end date":"31-12-9999","country code":"IND","cost centre code":"5501347","location code":"3545","company code":"550","logical delete flag":"0","publisher code":"WD_LILLY","map code":"CSAD","last update date":"28-06-2020 15:18"},{"organisation unit code":"10003","organisation unit description":"TR Sales Mgmt - Bio 5","parent organisation unit code":"11231","chief organisation Unit code":"2034994","organisation begin date":"1/1/1900","organisation end date":"31-12-9999","country code":"TUR","cost centre code":"4860119","location code":"2712","company code":"486","logical delete flag":"0","publisher code":"WD_LILLY","map code":"CSAD","last update date":"28-06-2020 15:18"},{"organisation unit code":"10004","organisation unit description":"Loxo Prod Dev","parent organisation unit code":"15576","chief organisation Unit code":"2174012","organisation begin date":"1/1/1900","organisation end date":"31-12-9999","country code":"USA","cost centre code":"100A98N","location code":"1000","company code":"100","logical delete flag":"0","publisher code":"WD_LILLY","map code":"CSAD","last update date":"21-03-2021 04:00"},{"organisation unit code":"10007","organisation unit description":"Medical Information-Content Delivery Pakistan","parent organisation unit code":"14467","chief organisation Unit code":"2095537","organisation begin date":"1/1/1900","organisation end date":"31-12-9999","country code":"PAK","cost centre code":"4730109","location code":"3630","company code":"473","logical delete flag":"0","publisher code":"WD_LILLY","map code":"CSAD","last update date":"10/11/2022 4:00"},{"organisation unit code":"10008","organisation unit description":"Manufacturing - BB50 Purification 1&2","parent organisation unit code":"11494","chief organisation Unit code":"2136722","organisation begin date":"1/1/1900","organisation end date":"31-12-9999","country code":"USA","cost centre code":"1710381","location code":"1820","company code":"171","logical delete flag":"0","publisher code":"WD_LILLY","map code":"CSAD","last update date":"3/10/2021 4:00"},{"organisation unit code":"10009","organisation unit description":"IDAP R4 Packaging-B Shift","parent organisation unit code":"10342","chief organisation Unit code":"2162911","organisation begin date":"1/1/1900","organisation end date":"31-12-9999","country code":"USA","cost centre code":"1000110","location code":"1001","company code":"100","logical delete flag":"0","publisher code":"WD_LILLY","map code":"CSAD","last update date":"28-06-2020 15:18"},{"organisation unit code":"10010","organisation unit description":"Bioproduct Pharma Design","parent organisation unit code":"15313","chief organisation Unit code":"2185959","organisation begin date":"1/1/1900","organisation end date":"31-12-9999","country code":"USA","cost centre code":"100B023","location code":"1218","company code":"100","logical delete flag":"0","publisher code":"WD_LILLY","map code":"CSAD","last update date":"22-08-2021 04:00"},{"organisation unit code":"10011","organisation unit description":"Marketing","parent organisation unit code":"12606","chief organisation Unit code":"3018893","organisation begin date":"1/1/1900","organisation end date":"31-12-9999","country code":"BRA","cost centre code":"4051501","location code":"2100","company code":"405","logical delete flag":"0","publisher code":"WD_LILLY","map code":"CSAD","last update date":"1/9/2021 4:00"},{"organisation unit code":"10012","organisation unit description":"KSA Supply Chain","parent organisation unit code":"20751","chief organisation Unit code":"39422","organisation begin date":"1/1/1900","organisation end date":"31-12-9999","country code":"SAU","cost centre code":"5640092","location code":"3001","company code":"564","logical delete flag":"0","publisher code":"WD_LILLY","map code":"CSAD","last update date":"13-09-2021 12:00"}],"metadata":[{"id":"89784","technicalName":[],"businessName":"organisation unit code","businessDescription":"organisation unit code. Ex. \"00010000\""},{"id":"89785","technicalName":[],"businessName":"organisation unit description","businessDescription":"organisation unit description Ex. \"LCCI - Commercial Analytics\""},{"id":"89786","technicalName":[],"businessName":"parent organisation unit code","businessDescription":"parent organization unit code Ex. \"00019665\""},{"id":"89787","technicalName":[],"businessName":"chief organization Unit code","businessDescription":"chief organization Unit code. Ex: 1234567"},{"id":"89788","technicalName":[],"businessName":"organisation begin date","businessDescription":"organization begin date. Ex. \"2023-01-01 12.00.00 AM\""},{"id":"89789","technicalName":[],"businessName":"organisation end date","businessDescription":"organization end date. Ex. \"\"9999-01-01 12.00.00 AM\""},{"id":"89790","technicalName":[],"businessName":"country code","businessDescription":"country code. Ex. \"USA\""},{"id":"89791","technicalName":[],"businessName":"cost centre code","businessDescription":"cost centre code. Ex: \"100A999\""},{"id":"89792","technicalName":[],"businessName":"location code","businessDescription":"location code. Ex: \"1000\""},{"id":"89793","technicalName":[],"businessName":"company code","businessDescription":"company code. Ex: \"100\""},{"id":"89794","technicalName":[],"businessName":"logical delete flag","businessDescription":"logical delete flag. Ex: 0 or 1. 1 Indicated not active."},{"id":"89795","technicalName":[],"businessName":"publisher code","businessDescription":"publisher code Ex. \"WD_LILLY\""},{"id":"89796","technicalName":[],"businessName":"map code","businessDescription":"map code. Ex: Default value \"CSAD\""},{"id":"89797","technicalName":[],"businessName":"last update date","businessDescription":"last update date. Ex: \"2023-01-01 12.00.00 AM\""}]};

  const handleUpdateColumns = (fieldName: string) => {
    console.log('SSV fieldName', fieldName);
    setFilteredColumns((columns) =>
      columns.includes(fieldName)
        ? columns.filter((column) => column !== fieldName)
        : [...columns, fieldName],
    );
  };

  const filterColumns = ({ headers }: SampleData, filteredColumns: string[]) => ({
    headers: headers.filter((header) =>
      filteredColumns.includes(header.fieldName),
    ),
  });

  const handleResetFilter = () => {
    setFilteredColumns([]);
  };

  const { headers } = filterColumns(sampleData, filteredColumns);

  return (
    <div className="App">
      <h1>Header</h1>
      <div>
      <pre>{JSON.stringify(headers, null, 2)}</pre>
  </div>
      <main>
        <ColumnsMenu
          headers={sampleData.headers}
          filteredColumns={filteredColumns}
          onSelect={handleUpdateColumns}
          reset={handleResetFilter}
        />
        <div>
          {filteredColumns}
        </div>
        <TableComponent data={sampleData} columns={filteredColumns.length ? headers : sampleData.headers}  />
      </main>
    </div>
  );
}

export default App;
