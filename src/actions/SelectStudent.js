export default function selectStudent(student){
	console.log(student)
	return {
		type: "PICK_STUDENT",
		payload: student
	}
}