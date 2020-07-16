import React, { Component } from  'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Note from '../../components/Note/Note';
import './Notes.css';

class Notes extends Component {



    postSelectedHandler = ( id ) => {
        this.props.history.push( '/fullnote/' + id );
    }

    render () {

        let notes = <p style={{ textAlign: 'center', color: 'grey' }}>You have no Notes! Click 
            <strong style={{color: 'orange', textDecoration: 'none'}}> <Link to="/newnote" >New Note</Link></strong> to make one.
            </p>;

        if ( this.props.notes.length !== 0 ) {
            notes = this.props.notes.map( note => {
                return (
                    <Note
                        key={note.title}
                        title={note.title}
                        date={note.id}
                        clicked={() => this.postSelectedHandler(note.title)}
                    />

                );

            } );
        }

        return (
            <div>
                <section className="Notes">
                    {notes}
                </section>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(Notes);