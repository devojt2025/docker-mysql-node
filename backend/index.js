import express from 'express';
import { getNotes, getNote, createNote } from './database.js';
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/notes', async (req, res) => {
    const notes = await getNotes();
    res.status(200).json(notes);
    
})

app.get('/notes/:id', async (req,res) => {
    const {id} = req.params;
    const note = await getNote(id);
    if(!note){
        return res.status(404).json({message: 'Note not found'});
    }
    res.status(200).json(note);
})

app.post('/notes', async (req, res) => {
    const {title, content} = req.body;
    if(!title || !content){
        return res.status(400).json({message: 'Title and content are required'});
    }
    const note = await createNote(title, content);
    res.status(201).json(note);
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})