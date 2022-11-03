import React, { useState } from 'react'
import { Box } from '@mui/material'


import {HeroBanner, SearchExercises, Exercises} from '../components'

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <Box>
            <HeroBanner />
            <SearchExercises
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
                setExercises={setExercises}
            />
            <Exercises
                exercises={exercises}
                setExercises={setExercises}
                bodyPart={bodyPart}
            />
        </Box>
    )
}

export default Home