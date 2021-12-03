import Todo from '../models/todosModel';

/* CRUD */
export async function Create(req, res) {
    try {
        const {
            user_id,
            name,
            status,
            due_to
        } = req.body;

        if (!user_id) return res.status(400).json({ msg: "Id não fornecido!" });

        if (!name) return res.status(400).json({ msg: "O nome deve ser fornecido!" });

        const newData = new Todo({
            user_id,
            name,
            status,
            due_to
        })

        await newData.save();

        res.json();
    } catch (error) { if (error) throw error }
}

export async function Read(req, res) {
    try {
        const user_id = req.params.id;
        let name = "";
        if (req.query.name !== null && req.query.r !== '') {
            name = new RegExp(req.query.name, 'i')
        }
        try {
            const getDataList = await Todo.find({ user_id, name });
            return res.json(getDataList);
        } catch (error) {
            return res.status(400).json({ msg: 'Não foi possível encontrar!' })
        }
    } catch (error) { if (error) throw error }
}

export async function Update(req, res) {
    try {
        const {
            user_id,
            name,
            status,
            due_to
        } = req.body;

        if (!name) return res.status(400).json({ msg: "O nome deve ser fornecido!" });

        await Todo.findByIdAndUpdate({ _id: req.params.id }, {
            user_id,
            name,
            status,
            due_to
        })

        return res.json();
    } catch (error) { if (error) throw error }
}

export async function Delete(req, res) {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        return res.json();
    } catch (error) { if (error) throw error }
}