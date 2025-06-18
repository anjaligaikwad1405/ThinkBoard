import Note from "../models/Note.js";
export async function getNotes(req,res){
try {
    const notes=await Note.find().sort({createdAt:-1});//newest first note
    res.status(200).json(notes);
} catch (error) {
    console.error("error in getNotes controller",error);
    res.status(500).json({message:"Internal server error"})
}
};

export async function getNotebyId(req,res){
    try {
        const note=await Note.findById(req.params.id);
        if(!note) return res.status(404).json("Note not found");
        res.json(note);
    } catch (error) {
        console.error("error in getNoteById controller",error);
        res.status(500).json({message:"Internal server error"})

    }
}


export async function createNote(req,res){
try {
    const {title,content}=req.body;
    const note=new Note({title,content});

    const noteCreated=await note.save();
    res.status(201).json({noteCreated})
} catch (error) {
    console.error("error in CreateNote controller",error);
    res.status(500).json({message:"Internal server error"})

}
};

export async function updateNote(req,res){
try {
    const{title,content}=req.body;
    const updatedNote=await Note.findByIdAndUpdate(
        req.params.id,{title,content},{
        new:true,
    })
    if(!updatedNote) return res.status(404).json("Note not found")
    res.status(200).json(updatedNote)

} catch (error) {
    console.error("error in updateNote controller",error);
    res.status(500).json({message:"Internal server error"})
 
}
};

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}