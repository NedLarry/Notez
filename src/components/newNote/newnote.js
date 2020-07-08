import React, { Component } from 'react';
import { connect } from 'react-redux';
import './newnote.css';

class newNote extends Component {

    state = {
        title: '',

        notes: ''
    }

    titleChangedHandler = (event) => {
        this.setState({title: event.target.value});
    }

    noteChangedHandler = (event) => {
        this.setState({notes: event.target.value});
    }

    deleteText = () => {

        document.getElementById('title-text').value = "";
        document.getElementById('note-text').value = "";
    }
    
    addNote = (e) => {
        e.preventDefault();
        this.deleteText();
        return this.props.onSaveNote(this.state.title, this.state.notes);
    }

    render () {
        return (
            <div className="new-note">
                <form>
                    <input type="text" id="title-text" placeholder="Title" onChange={this.titleChangedHandler} />
                    <textarea name="story" id="note-text" placeholder="Write your note here" onChange={this.noteChangedHandler} />
                    <button type="button" onClick={this.addNote}>Save</button>
                </form>
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
        onSaveNote: (title, note) => dispatch({type: "SAVENOTE", data:{title: title, note: note}})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(newNote);