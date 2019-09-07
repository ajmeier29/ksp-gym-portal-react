// const fetchJsonData = async (url, setStateFunction) => {
//     // const api = fetch(apiLink);
//     // api.json().then(res =>
//     //     {
//     //         return res;
//     //     });
//     fetch(url)
//         .then(response =>
//             {
//                 if(response.ok)
//                 {
//                     return response.json();
//                 }
//             })
//         .then(json =>
//             {
//                 setStateFunction(json);
//             });
// }
async function fetchJsonPromise(url) {
  const response = await fetch(url);
  return response.json();
}
export default fetchJsonPromise;

// const WorkoutExpandableTable = props => {
//     const [workoutinfo, setWorkoutinfo] = useState([]);
//     const classes = panelStyles();
//     const apiGetWorkouts = `${process.env.REACT_APP_API_GET_WORKOUTS_LIMIT}/3`;
//     // Fetch the data on initial page load to default
//     async function fetchData()
//     {
//       const response = await fetch(apiGetWorkouts);
//       response
//         .json()
//         .then(res => setWorkoutinfo(res))
//     }
//     // Call fetch data one time.
//     // We need to use ,[] at the end of useEffect() to make sure
//     // it is only ran one time. Not sure if this is preffered and I'm not sure
//     // if it will re render later when needed.
//     useEffect(() => {
//       fetchData();
//     }, []);

//     // const newData = data();
//     return (
//       <div className={classes.root}>
//         {workoutinfo.map(workout => {
//           return <WorkoutLineItem key={workout.id} workoutinfo={workout} />;
//         })}
//       </div>
//     );
//   };
