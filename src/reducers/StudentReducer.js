var students = function(state, action){
	// console.log(state);
	// console.log(action);
	var studentArray = [
		{
			name:"Casey",
			seat:9
		},
		{
			name:"Connie",
			seat:10
		}
	]

	if(action.type === "PICK_STUDENT"){
		return action.payload
	}else{
		return studentArray
	}
	
}

export default students;