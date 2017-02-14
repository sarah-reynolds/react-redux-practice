export default (state=[], action)=>{
	console.log(action.type)
	
	switch(action.type){
	case "getWeather":
		console.log(action.payload)
		// do stuff
		return(action.payload)
		break;
	case "somethingElse":
		console.log("shouldn't see this")
		return("stupid")
		// do stuff
		break;
	}

	return state;
}