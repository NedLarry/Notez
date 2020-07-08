import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Note from './components/note/note';
import Newnote from './components/newNote/newnote';
import './notes.css';

class Notes extends Component {
    render () {
        return (
            <div className="notes-main" onClick={this.home}> 
                <header>
                    <div id="logo">
                        <p>Notez</p>
                    </div>
                    <nav>
                        <ul>
                            <li className="links"><NavLink to="/">Notes</NavLink></li>
                            <li className="links"><NavLink to="/newnote">New Note</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <main className="notes-body">
                    <Route path="/" exact component={Note} />
                    <Route path="/newnote" component={Newnote} />
                    <Route path="/" exact component={Note} />
                    <Route path="/" exact component={Note} />
                    <Route path="/" exact component={Note} />
                </main>
                
            </div>
        )
    }
}

export default Notes;