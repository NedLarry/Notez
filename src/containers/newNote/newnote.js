import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/spinner/spinner';
import AuthContext from '../../context/AuthContext';
import { Redirect } from 'react-router-dom'
import axios from '../../axios';
import './newnote.css';
class newNote extends Component {
    constructor (props){
        super(props);
        this.inputElementRef = React.createRef()
    }
    state = {
        title: '',
        notes: '',
        spinner: false,
        submitted: false
    }

    titleChangedHandler = (event) => {
        // const { name } = event.target
        this.setState({title: event.target.value});
    }

    noteChangedHandler = (event) => {
        this.setState({notes: event.target.value});
    }

    componentDidMount(){
        // this.inputElement.focus()
        this.inputElementRef.current.focus()
        console.log(this.props)
    }


    shouldComponentUpdate (nextProps, nextState) {
        return nextState.spinner !== this.state.spinner;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevState.spinner)
        return {
            log: true
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        // console.log(snapshot)
    }

    deleteText = () => {

        document.getElementById('title-text').value = "";
        document.getElementById('note-text').value = "";
    }
    
    addNote = (e) => {
        e.preventDefault();
        this.deleteText();
        this.setState ({
            spinner: true
        })
        let Note = {
            title: this.state.title,
            body: this.state.notes
        }

        axios.post ('/notes.json', Note)
            .then( () => {
                this.setState ({
                    spinner: false,
                    submitted: true
                })

                // this.props.history.push('/notes');

            })
            .catch(error => console.log(error));

        return this.props.onSaveNote(this.state.title, this.state.notes);
    }

    render () {
        let form;
        let redirect = this.state.submitted ? <Redirect to="/" /> : null
        if (this.state.spinner){
            form = <AuthContext.Provider value={{spinner: this.state.spinner}} ><Spinner /></AuthContext.Provider>
        }else{
            form  =  <form>
                        <input type="text" name='title' id="title-text" placeholder="Title" onChange={this.titleChangedHandler} 
                            ref={this.inputElementRef} 
                        />
                        <textarea name="story" id="note-text" placeholder="Write your note here" onChange={this.noteChangedHandler} />
                        <button type="button" onClick={this.addNote}>Save</button>
                    </form>
        }
        return (
            <div className="new-note">
                {redirect}
                {form}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        notez: state.notes
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSaveNote: (title, note) => dispatch({type: "SAVENOTE", data:{title, note}})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(newNote);