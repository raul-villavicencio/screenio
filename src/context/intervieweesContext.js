import React, { createContext, useState } from 'react'

export const IntervieweeContext = createContext()

const IntervieweeProvider = ({ children }) => {
    const [interviewees, setInterviewees] = useState([
      {
        name: 'John Smith',
        seniority: 'SSr',
        date: new Date(),
        status: 'pending'
      },
      {
        name: 'Jane Doe',
        seniority: 'Architect',
        date: new Date(),
        status: 'accepted'
      }
    ]);

    const saveInterviewee = interviewee => {
      setInterviewees([...interviewees, interviewee])
    }

    return(
      <IntervieweeContext.Provider value={{interviewees, saveInterviewee}}>
        {children}
      </IntervieweeContext.Provider>
    )
}

export default IntervieweeProvider