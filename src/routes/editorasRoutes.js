import express from "express";
import EditoraController from "../controllers/EditoraController.js";

const routes = express.Router();

routes.get("/editoras", EditoraController.listarEditora);
routes.get("/editoras/:id", EditoraController.listarEditoraPorId);
routes.post("/editoras", EditoraController.cadastrarEditora);
routes.put("/editoras/:id", EditoraController.atualizarEditora);
routes.delete("/editoras/:id", EditoraController.deletarEditora);

export default routes;