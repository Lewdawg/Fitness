/*
useEffect(
		() =>
					(
						async() => setWorkouts(

								( (async () => {
									try{
										return (await axios('/api/workouts')).data
									}catch(e){ console.log(e.message) }
								})()
								)
						)


					)(),
		[]
	);
*/
/*
Google Maps API

	const [mapsData, setMapsData] = useState({});


	useEffect(() => {
		axios("https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDLOKCxtRd_pEqn4_1eD2WjVXdtS8V4p3s&location=51.3179648,12.379750399999999&radius=1000", {headers: {'Access-Control-Allow-Origin': '*'}})
		.then(response => {console.log('Response:\n', response); return response})
			.then(response => setMapsData(response.data))
			.catch(console.error)
	}, [])

	<button onClick={console.log(mapsData)}>clg maps data</button>

google maps api string:

https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDLOKCxtRd_pEqn4_1eD2WjVXdtS8V4p3s&location=51.3179648,12.379750399999999&radius=1000


*/