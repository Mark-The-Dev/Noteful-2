import React from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import NotefulContext from '../App/NotefulContext';

export default class NotePageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  
  static contextType = NotefulContext
  
  handleDeleteNote = noteId => {
    console.log('hi')
    this.props.history.push('/')
    
  }

  render () {
    const {notes} = this.context
    //console.log(this.props.match.params.noteId)
    const note = notes.find(n => n.id === this.props.match.params.noteId) || {content: ''} 
    //console.log(this.context)
    //console.log(this.handleDeleteNote)
    return (
      <section className='NotePageMain'>
        <Note
          id={note.id}
          name={note.name}
          modified={note.modified}
          onDeleteNote={this.handleDeleteNote}
        />
        <div className='NotePageMain__content'>
          {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}

// NotePageMain.defaultProps = {
//   note: {
//     content: '',
//   }
// }
