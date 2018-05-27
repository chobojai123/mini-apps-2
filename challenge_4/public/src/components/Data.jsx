import React from 'react';

const Data = (props) => (
  <div>
    <table className='table'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          {/* <th>Lang</th>
          <th>Category 1</th> */}
          <th>Category 2</th>
          {/* <th>granularity</th> */}
        </tr>
      </thead>
      
      <tbody>
        {props.events.map( (event) => {
          return (
            <tr key={event.date + event.description}>
              <td >{event.date}</td>
              <td >{event.description}</td>
              {/* <td >{event.lang}</td>
              <td >{event.category1}</td> */}
              <td >{event.category2}</td>
              {/* <td >{event.granularity}</td> */}
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)

export default Data;







