import React, { Component } from 'react';
import { connect } from 'react-redux';
import './fullnote.css';


class FullNote extends Component {

    render () {

        let post = this.props.notez.map (el => {
            if (el.title === this.props.match.params.id)
                return (
                    <article key={el.id}>
                        <div className="main" >
                            <p className="title">{el.title}</p>
                            <p className="note-body">{el.Note}</p>
                        </div>
                    </article>
                )
            return el
        })

        return post

    }
}

const mapStateToProps = (state) => {
    return{
        notez: state.notes
    }
}

export default connect(mapStateToProps)(FullNote);