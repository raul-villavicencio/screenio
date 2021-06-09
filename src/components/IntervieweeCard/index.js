import React from 'react'

const IntervieweeCard = ({ name, seniority, date, status }) => {
  return (
    <div>
      <h4>{`Name: ${name}`}</h4>
      <h4>{`Seniority: ${seniority}`}</h4>
      <h4>{`Date: ${date}`}</h4>
      <h4>{`Status: ${status}`}</h4>
    </div>
  )
}

export default IntervieweeCard