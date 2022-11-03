import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions, fetchData,youTubeOptions } from '../utils/fetchData'


import {Detail,SimilarExercises,ExerciseVideos} from '../components'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState([])
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const id = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
    
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id?.id}`, exerciseOptions);
   
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(`${youTubeSearchUrl}/search?query=/${exerciseDetailData?.name}`, youTubeOptions);
      setExerciseVideos(exerciseVideoData.contents)

      const targetMuscleExercises = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData?.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercises)

      const equipmentExercises= await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData?.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercises)
    
  }
  fetchExercisesData();
  }, [id])
  
  return (
    <Box>
      <Detail  exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail