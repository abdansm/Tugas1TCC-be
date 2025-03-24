const { DataTypes } = require("sequelize");
const database = require("../database/connect_db.js");

const Note = database.define(
  "note",
  {
    note_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    penulis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    judul: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isi_catatan: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    kategori: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

module.exports = Note;
