import React from 'react'

const Total = ({arrayExercisesCount}) => {
    return (
        <>
            <p>Number of exercises {arrayExercisesCount.reduce((x, y) => x + y, 0)}</p>
        </>
    )
}

export default Total