import React from 'react'

function RowDetails({Email, Lastname, Firstname, Age}) {
 
  return (
    <tr>
    <th>{Email}</th>
    <td>{Lastname}</td>
    <td>{Firstname}</td>
    <td>{Age}</td>
    <td className="gap__actions">
      <span className="badge bg-info">
      </span>

      <span className="badge bg-danger" >
        <i className="fas fa-trash-alt"></i>
      </span>
    </td>
  </tr>
  )
}

export default RowDetails