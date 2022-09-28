import React from 'react'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import Multiselect from 'multiselect-react-dropdown';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
        this.state = {
            'author': this.currentUser.id,
            'linkToGit': '',
            'developers': [],
            'name': '',
            'discroption': 'None',
        }
        console.log(this.state.author)
    }

    getDevIdList(objectList) {
        const developersIdList = []
        for (let obj of objectList) {
            developersIdList.push(obj.id)
        }

        this.setState({
            'developers': developersIdList
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        this.props.createProject(
            this.state.author, this.state.linkToGit, this.state.developers, this.state.name, this.state.discroption)
        console.log(this.state)
        event.preventDefault()
    }
    
    render() {
        
        return (
            <div className='d-flex mx-auto my-auto'>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <MDBInput label='Name' id='Name' name='name' type='text' onChange={(event) => this.handleChange(event)} />
                    <MDBInput label='discroption' id='Discroption' name='discroption' type='text' onChange={(event) => this.handleChange(event)} />
                    <MDBInput label='Link to git' id='linkToGit' name='linkToGit' type='url' />
                    <Multiselect 
                        options={this.props.developers} 
                        displayValue='username'
                        onSelect={(event) => this.getDevIdList(event)} 
                        onRemove={(event) => this.getDevIdList(event)} />
                    <MDBBtn type='submit' block>
                        Create Project
                    </MDBBtn>
                </form>
            </div>
        )
    }
}

export default ProjectForm;
