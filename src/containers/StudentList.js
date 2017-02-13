import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectStudent from '../actions/SelectStudent';
// Bind action creators is a function in redux that will trigger the action through every reducers
import { bindActionCreators } from 'redux';

class StudentList extends Component{
	// we have access to this.props.students because we brought it in below in mapStateToProps
	
	render(){
		var studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(
				<li 
					key={index}
					onClick={()=>this.props.selectStudent(student.name)}>
					{student.name}	
				</li>)
			return studentArray;
		})
		console.log(this.props.students)
		return(
			<div>
				{studentArray}
			</div>
		)
	}
}

// This function will tie together whatever is returned from the reducer we call
// to this.props. This is the glue between redux state and this component
// Another way... we are going to pick out reducers and they will be availabel 
// to the component as this.props.NAMEBELOW
function mapStateToProps(state){
	return{
		students: state.students
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		selectStudent: SelectStudent
	}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentList);
