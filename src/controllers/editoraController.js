import {editora} from "../models/Editora.js";

class EditoraController {

        static async listarEditoras (req, res) {
                try {
                        const listaEditoras = await editora.find({});
                        res.status(200).json(listaEditoras);
                } catch(erro) {
                        res.status(500).json({message: `${erro.message} - falha na requisição`});
                }
                
        };

        static async listarEditoraPorId (req, res) {
                try {
                        const id = req.params.id;
                        const editoraEncontrado = await editora.findById(id);
                        res.status(200).json(editoraEncontrado);
                } catch (erro) {
                        res.status(500).json({ message: `${erro.message} - falha na requisição da Editora` });
                }
        };

        static async cadastrarEditora (req, res) {
                try {
                        const novoEditora = await editora.create(req.body);
                        res.status(201).json({ message: "criado com sucesso", editora: novoEditora });

                } catch (erro) {
                        res.status(500).json({ message: `${erro.message} - falha ao cadastrar Editora` });
                }
        };

        static async atualizarEditora (req, res) {
                try {
                        const id = req.params.id;
                        await editora.findByIdAndUpdate(id, req.body);
                        res.status(200).json({ message: "Editora atualizado"} );
                } catch (erro) {
                        res.status(500).json({ message: `${erro.message} - falha na atualização da Editora` });
                }
        };

        static async deletarEditora (req, res) {
                try {
                        const id = req.params.id;
                        await editora.findByIdAndDelete(id);
                        res.status(200).json({message: "Editora deletado com sucesso"});
                } catch (erro) {
                        res.status(500).json({ message: `${erro.message} - falha ao deletar a Editora` });
                }
        }

};

export default EditoraController;
