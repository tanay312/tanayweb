const firebase = require('firebase-admin');
const db = firebase.firestore();

exports.shareLocation = (req, res) => {
    const { userId, location } = req.body;

    db.collection('locations').doc(userId).set({ location, timestamp: Date.now() })
        .then(() => res.send('Location shared successfully'))
        .catch(err => res.status(500).send(err));
};

exports.getLocation = (req, res) => {
    const { userId } = req.params;

    db.collection('locations').doc(userId).get()
        .then(doc => {
            if (!doc.exists) {
                res.status(404).send('No location data found');
            } else {
                res.json(doc.data());
            }
        })
        .catch(err => res.status(500).send(err));
};
