const express = require('express');
const port = 5001;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extemded: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to RandomIdea API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
