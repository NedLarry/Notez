import React, { Component } from 'react';
import { Route, NavLink, Switch, Link } from 'react-router-dom';
import Notes from '../../containers/Notes/Notes';
import Newnote from '../../containers/newNote/newnote';
import Fullnote from '../../containers/Fullnote/Fullnote';
import './Notez.css';

class Notez extends Component {

    render () {

        return (
            <div className="notes-main"> 
                <header>

                    <nav>
                                             
                        <div id="logo">
                            <p><Link to="/">Notez</Link></p>
                        </div>
                        <ul>
                            {/* <li className="links"><NavLink to="/notes">Notes</NavLink></li> */}
                            <li className="links"><NavLink to="/newnote">New Note</NavLink></li>
                        </ul>
                    </nav>

                </header>

                <Switch>
                    <Route path="/" exact component={Notes} />
                    <Route path="/newnote" exact component={Newnote} />
                    <Route path={'/fullnote/:id'} exact component={Fullnote} />
                    <Route render={() => <h1>Welcome To Notez</h1>} />
                </Switch>

            </div>
        )
    }
}


export default Notez;