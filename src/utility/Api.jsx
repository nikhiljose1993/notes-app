import axios from "axios";

const basePath = process.env.REACT_APP_API_BASE_PATH;

export const getNotes = async () => {
  try {
    return await axios.get(basePath + "/receivenotes");
  } catch (error) {
    console.log(error);
  }
};

export const sendNote = async (note) => {
  try {
    await axios.post(basePath + "/sendnote", note);
  } catch (error) {
    console.log("failed to send notes", error);
  }
};

export const deleteNote = async (id) => {
  try {
    await axios.get(basePath + "/deletenote?_id=" + id);
  } catch (error) {
    console.log("failed to delete notes", error);
  }
};

export const updateNote = async (note) => {
  try {
    await axios.post(basePath + "/updatenote?_id=" + note._id, note);
  } catch (error) {
    console.log("failed to update notes", error);
  }
};
