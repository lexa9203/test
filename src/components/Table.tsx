import React from 'react';
import { IFindElement, IFormFields } from '../interfaces/app.interfaces';

const Table: React.FC<{data: IFormFields[]}> = ({data}) => {
  
  return (
    <table className="table">
        <thead>
          <tr className="table_header">
            <td className='table_field'>Наименование документа</td>
            <td className='table_field'>Количество заявок</td>
          </tr>
        </thead>
        {data.reduce((res: any, el: any) => {
          let findElement = res.find((i: IFormFields) => i.document === el.document);
          if (!findElement) {
            findElement = { id: el.id, document: el.document, count: 1 };
            res.push(findElement);
          } else {
            findElement.count += 1;
          }
          return res;
        }, []).sort((a: IFindElement, b: IFindElement) => b.count - a.count).map((el:IFormFields) => (
          <tbody key={el.id}>
            <tr className='table_row'>
              <td className='table_field'>{el.document}</td>
              <td className='table_field'>{el.count}</td>
            </tr>
          </tbody>
        ))}
      </table>
  );
}

export default Table;
