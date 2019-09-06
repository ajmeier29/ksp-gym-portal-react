// const TestWorkoutData = () =>
// {
//   fetch("http://localhost:5000/api/workout/GetLatestWorkoutsLimitAsync/3")
//   .then((resp) => resp.json()) // Transform the data into json
//   .then(function(data) {
//     // Create and append the li's to the ul
//     })
// }

const testWorkout = [
  {
    id: '5d6bdd9979d5cd526bf4a5ab',
    workout_name: 'Adult Test Andrew 1',
    workout_date: '2019-09-11T09:00:00Z',
    workout_image_url: 'www.youre-awesome.com',
    workout_series: [
      {
        series_number: 1,
        series_tag: '3x',
        exercises: [
          {
            exercise_number: 1,
            exercise_name: 'DB Squat 3 Sec Dec',
            exercise_reps: '8-10x'
          },
          {
            exercise_number: 2,
            exercise_name: 'Ladders',
            exercise_reps: '2-3x'
          },
          {
            exercise_number: 8,
            exercise_name: 'SB Slams',
            exercise_reps: '8-10x'
          }
        ]
      },
      {
        series_number: 2,
        series_tag: '2x - 3x',
        exercises: [
          {
            exercise_number: 1,
            exercise_name: 'DB Good Mornings',
            exercise_reps: '10x'
          },
          {
            exercise_number: 2,
            exercise_name: 'Ring Squats/Jumps',
            exercise_reps: '10-15x'
          },
          {
            exercise_number: 3,
            exercise_name: 'KB 1 Side Carry',
            exercise_reps: '1-2x'
          }
        ]
      }
    ]
  },
  {
    id: '5d6bdd9279d5cd526bf4a5aa',
    workout_name: 'Adult Test Andrew 2',
    workout_date: '2019-09-10T09:00:00Z',
    workout_image_url: 'www.youre-awesome.com',
    workout_series: [
      {
        series_number: 1,
        series_tag: '3x',
        exercises: [
          {
            exercise_number: 1,
            exercise_name: 'DB Squat 3 Sec Dec',
            exercise_reps: '8-10x'
          },
          {
            exercise_number: 2,
            exercise_name: 'Ladders',
            exercise_reps: '2-3x'
          },
          {
            exercise_number: 8,
            exercise_name: 'SB Slams',
            exercise_reps: '8-10x'
          }
        ]
      },
      {
        series_number: 2,
        series_tag: '2x - 3x',
        exercises: [
          {
            exercise_number: 1,
            exercise_name: 'DB Good Mornings',
            exercise_reps: '10x'
          },
          {
            exercise_number: 2,
            exercise_name: 'Ring Squats/Jumps',
            exercise_reps: '10-15x'
          },
          {
            exercise_number: 3,
            exercise_name: 'KB 1 Side Carry',
            exercise_reps: '1-2x'
          }
        ]
      }
    ]
  },
  {
    id: '5d6bdd8e79d5cd526bf4a5a9',
    workout_name: 'Adult Test Andrew 3',
    workout_date: '2019-09-09T09:00:00Z',
    workout_image_url: 'www.youre-awesome.com',
    workout_series: [
      {
        series_number: 1,
        series_tag: '3x',
        exercises: [
          {
            exercise_number: 1,
            exercise_name: 'DB Squat 3 Sec Dec',
            exercise_reps: '8-10x'
          },
          {
            exercise_number: 2,
            exercise_name: 'Ladders',
            exercise_reps: '2-3x'
          },
          {
            exercise_number: 8,
            exercise_name: 'SB Slams',
            exercise_reps: '8-10x'
          }
        ]
      },
      {
        series_number: 2,
        series_tag: '2x - 3x',
        exercises: [
          {
            exercise_number: 1,
            exercise_name: 'DB Good Mornings',
            exercise_reps: '10x'
          },
          {
            exercise_number: 2,
            exercise_name: 'Ring Squats/Jumps',
            exercise_reps: '10-15x'
          },
          {
            exercise_number: 3,
            exercise_name: 'KB 1 Side Carry',
            exercise_reps: '1-2x'
          }
        ]
      }
    ]
  }
];

const TestWorkoutData = () => {
  return testWorkout;
};

export default TestWorkoutData;
