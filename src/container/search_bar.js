import React,{Component} from 'react';

class SearchBar extends Component{

	constructor(props){
		super(props);
		this.state={
			term: ''
		};
	}

	render(){
		return(
			<form onSubmit={(event)=>this.onFormSubmit(event)}className="input-group">
				<input 
					placeholder="Get afive day forecat in your favaorite cities " 
					className="form-control"
					value={this.state.term}
					onChange={(event)=>this.onInputChange(event)}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
			);
	}

	onFormSubmit(event){
		event.preventDefault()
	}
	onInputChange(event){
		// console.log(event.target.value)
		this.setState({term: event.target.value});
		// this.props.onSearchTermChange(term);

	}

}
export default SearchBar;