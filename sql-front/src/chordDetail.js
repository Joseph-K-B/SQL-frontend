import React, { Component } from 'react';
import { getChords, getClasses } from './fetch-utils.js';


class ChordDetail extends Component {
    state = {
        id: 0,
        key:'',
        chord:'',
        major: true,
        class:'',
        classes: []
    };

    componentDidMount = async () => {
        const chordId = this.props.match.params.id
        const chordData = await getChords(chordId)
        const classData = await getClasses(chordId)
        this.setState({ ...chordData })
    };
    render() {
        return (
            <>
                <h1>{this.state.chord}</h1>
                <img alt={this.state.chord}></img>
                <form id='update-chord'>
                    <div>
                        <label>Key:</label>
                        <input 
                            type='text' 
                            value={this.state.key} 
                            onChange={(e) => this.setState({key: e.target.value})}>
                        </input>
                    </div>
                    <div>
                        <label>Chord:</label>
                        <input 
                            type='text' 
                            value={this.state.chord} 
                            onChange={(e) => this.setState({chord: e.target.value})}>
                        </input>
                    </div>
                    <div>
                        <label>Major:</label>
                        <input 
                            type='text' 
                            value={this.state.major} 
                            onChange={(e) => this.setState({major: e.target.value})}>
                        </input>
                    </div>
                    {/* <div>
                        <label>Class:</label>
                        <input 
                            type='text' 
                            value={this.state.chord} 
                            onChange={(e) => this.setState({chord: e.target.value})}>
                        </input>
                    </div> */}
                    <select>
                        {this.state.classes.map ((cl) => {
                            return (<option></option>)
                        })}
                    </select>
                </form>
            </>
        )}
}

export default ChordDetail