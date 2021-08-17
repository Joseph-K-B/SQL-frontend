import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getChords } from './fetch-utils.js'

class ChordList extends Component {
    state = {};
    componentDidMount = async () => {
    const data = await getChords();
    this.setState({chords: data})
    }
    render() {
        return (
            <>
            <section>
                {this.state.chords.map((c) => (
                    
                        <Link to = {`/chords/${c.id}`}>
                            <h2>{c.chord}</h2>
                        </Link>
                ))}
            </section>
            </>
        )
    }
}

export default ChordList