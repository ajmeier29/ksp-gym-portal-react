const testWorkout = {
  id: {
    entityid: '5d2a351b00557896c7489d23'
  },
  workout_name: 'Adult Metabolic',
  workout_date: '2019-07-13T17:00:00Z',
  workout_image_url: 'www.google.com',
  workout_series: [
    {
      series_number: {
        numberDouble: '1'
      },
      series_tag: '3x',
      exercises: [
        {
          exercise_number: {
            numberDouble: '1'
          },
          exercise_name: 'DB Squat 3 Sec Dec',
          exercise_reps: '8-10x'
        },
        {
          exercise_number: {
            numberDouble: '2'
          },
          exercise_name: 'Ladders',
          exercise_reps: '2-3x'
        },
        {
          exercise_number: {
            numberDouble: '3'
          },
          exercise_name: 'SB Slams',
          exercise_reps: '8-10x'
        }
      ]
    },
    {
      series_number: {
        numberDouble: '2'
      },
      series_tag: '2x - 3x',
      exercises: [
        {
          exercise_number: {
            numberDouble: '1'
          },
          exercise_name: 'DB Good Mornings',
          exercise_reps: '10x'
        },
        {
          exercise_number: {
            numberDouble: '2'
          },
          exercise_name: 'Ring Squats/Jumps',
          exercise_reps: '10-15x'
        },
        {
          exercise_number: {
            numberDouble: '3'
          },
          exercise_name: 'KB 1 Side Carry',
          exercise_reps: '1-2x'
        }
      ]
    }
  ]
};

const TestWorkoutData = () => {
  return testWorkout;
};

export default TestWorkoutData;
