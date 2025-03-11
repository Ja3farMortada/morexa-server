const Note = require("../models/NotesModel");
const Database = require("../models/DatabaseModel");

// get all notes
exports.getAllNotes = async (req, res, next) => {
    try {
        let notes = await Note.getAll();
        res.status(200).send(notes);
    } catch (error) {
        if (error.errno == 1146) {
            await Database.update();
            return;
        }
        next(error);
    }
};

// reorder notes
exports.sortNotes = async (req, res, next) => {
    let notes = req.body;
    try {
        await Note.sort(notes);
        let updatedNotes = await Note.getAll();
        res.status(201).send(updatedNotes);
    } catch (error) {
        next(error);
    }
};

// create note
exports.createNote = async (req, res, next) => {
    try {
        let data = req.body;
        let result = await Note.create(data);
        let createdNote = await Note.getById(result.insertId);
        res.status(201).send(createdNote);
    } catch (error) {
        next(error);
    }
};

// update note
exports.updateNote = async (req, res, next) => {
    let data = req.body;
    try {
        await Note.update(data);
        let updatedNote = await Note.getById(data.id);
        res.status(201).send(updatedNote);
    } catch (error) {
        next(error);
    }
};

// delete note
exports.deleteNote = async (req, res, next) => {
    let id = req.params.id;
    try {
        await Note.delete(id);
        res.status(202).json({
            message: "Note has been deleted successfully!",
        });
    } catch (error) {
        next(error);
    }
};
