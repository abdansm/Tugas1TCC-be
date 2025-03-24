const Note = require("../models/note.model.js");

exports.create = async (req, res) => {
  // Membuat data notes baru
  try {
    const { note_id, penulis, judul, isi_catatan, kategori } = req.body;

    const note = await Note.create({
      note_id,
      penulis,
      judul,
      isi_catatan,
      kategori,
    });

    return res.status(201).json({
      status: 201,
      success: true,
      message: "new Note created",
      data: {
        note: note,
      },
      error: null,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "internal server error",
      data: null,
      error: "Internal Server Error",
    });
  }
};

exports.all = async (req, res) => {
  //mendapatkan seluruh data Notes
  try {
    const notes = await Note.findAll();
    return res.status(200).json({
      status: 200,
      success: true,
      message: "ok",
      data: {
        notes,
      },
      error: null,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "internal server error",
      data: null,
      error: "Internal Server Error",
    });
  }
};

exports.find = async (req, res) => {
  //medapatkan data Notes berdasarkan id
  try {
    const { id } = req.params;
    const note = await Note.findOne({
      where: {
        note_id: id,
      },
    });

    if (!note) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "book not found",
        data: null,
        error: "Book Not Found",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "ok",
      data: {
        note: note,
      },
      error: null,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "internal server error",
      data: null,
      error: "Internal Server Error",
    });
  }
};

exports.update = async (req, res) => {
  // mengupdate data Notes berdasarkan id
  try {
    const { id } = req.params;

    const updated = await Note.update(req.body, {
      where: {
        note_id: id,
      },
    });

    if (!updated[0]) {
      return res.status(200).json({
        status: 200,
        success: false,
        message: "failed to update book",
        data: null,
        error: "Failed To Update Book",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "book updated",
      data: null,
      error: null,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "internal server error",
      data: null,
      error: "Internal Server Error",
    });
  }
};

exports.destroy = async (req, res) => {
  //mrnghapus data Notes berdasarkan id
  try {
    const { id } = req.params;

    const destroyed = await Note.destroy({
      where: {
        note_id: id,
      },
    });

    if (!destroyed) {
      return res.status(200).json({
        status: 200,
        success: false,
        message: "failed to delete book",
        data: null,
        error: "Failed To Delete Book",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Note deleted",
      data: null,
      error: null,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "internal server error",
      data: null,
      error: "Internal Server Error",
    });
  }
};
