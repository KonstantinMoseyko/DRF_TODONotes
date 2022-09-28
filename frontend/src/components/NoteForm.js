import React from 'react'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import Multiselect from 'multiselect-react-dropdown';

class NoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
        this.state = {
            'author': this.currentUser.id,
            'project': '',
            'title': '',
            'discroption': ''
        }
    }

    getProjectId(project) {
        this.setState({
            'project': project[0].id
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        this.props.createNote(this.state.author, this.state.title, this.state.discroption, this.state.project)
        event.preventDefault()
        console.log(this.state)
    }

    render() {

        return (
            <div className='d-flex mx-auto my-auto'>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <MDBInput label='title' id='title' name='title' type='text' onChange={(event) => this.handleChange(event)} />
                    <MDBInput label='discroption' id='Discroption' name='discroption' type='text' onChange={(event) => this.handleChange(event)} />
                    <Multiselect
                        options={this.props.projects}
                        displayValue='name'
                        onSelect={(event) => this.getProjectId(event)}
                        onRemove={(event) => this.getProjectId(event)}
                        singleSelect />
                    <MDBBtn type='submit' block>
                        Create Note
                    </MDBBtn>
                </form>
            </div>
        )
    }
}

export default NoteForm;
