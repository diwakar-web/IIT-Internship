exports.getAllUsers = (req, res) => {
    res.json([
        { id: 1, name: 'Diwakar' },
        { id: 2, name: 'Raj' }
    ]);
};

exports.createUser = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    res.status(201).json({
        message: 'User created successfully',
        user: { id: Date.now(), name }
    });
};
