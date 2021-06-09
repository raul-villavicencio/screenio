import React, { useContext } from 'react'
import { IntervieweeContext } from '../../context/intervieweesContext'
import IntervieweeCard from '../../components/IntervieweeCard'

const MainView = () => {
    const { interviewees } = useContext(IntervieweeContext)

    return (
        <div>
            {interviewees.map(i => <IntervieweeCard {...i} />)}
        </div>
    )
}

export default MainView