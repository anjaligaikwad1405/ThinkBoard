import express from "express"
import {  createNote,  deleteNote,  getNotes, updateNote,getNotebyId } from "../controllers/notesController.js";

const Router=express.Router();
Router.get("/",getNotes);

Router.get("/:id",getNotebyId);

Router.post("/",createNote);

Router.put("/:id",updateNote);

Router.delete("/:id",deleteNote);
export default Router;