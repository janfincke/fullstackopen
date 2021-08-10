import React from 'react'

const Total = ({arrayExercisesCount}) => {
    //let exercises_counts = parts.map(x => x.exercises)

    return (
        <>
            <p>Number of exercises {arrayExercisesCount.reduce((x, y) => x + y, 0)}</p>
        </>
    )
}

export default Total