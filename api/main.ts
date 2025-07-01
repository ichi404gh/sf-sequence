import express from 'express';
import {Request, Response} from 'express';
import cors from 'cors'

import {v4 as uuidv4} from 'uuid';

export interface Step {
  id: string;
  title: string;
  topic: string;
  content: string;
}

export interface Sequence {
  id: string;
  name: string;
  summary: string;
  steps: Step[];
}


const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
}));

// In-memory storage
const sequences: Map<string, Sequence> = new Map();

app.get('/api/sequences', (req: Request, res: Response) => {
  const sequenceList = Array.from(sequences.values());
  res.json(sequenceList);
});

app.get('/api/sequences/:id', (req, res) => {
  const sequence = sequences.get(req.params.id);
  if (!sequence) {
    res.status(404).json({error: 'not found'});
    return;
  }
  res.json(sequence);
});

app.post('/api/sequences', (req, res) => {
  const {name, summary, steps} = req.body;

  if (!name || !summary) {
    res.status(400).json({error: 'name and summary are required'});
    return
  }

  const newSteps: Step[] = (steps || []).map((step: Omit<Step, 'id'>) => ({
    ...step,
    id: uuidv4()
  }));

  const sequence: Sequence = {
    id: uuidv4(),
    name,
    summary,
    steps: newSteps
  };

  sequences.set(sequence.id, sequence);
  res.status(201).json(sequence);
});

app.put('/api/sequences/:id', (req, res) => {
  const {id} = req.params;
  const {name, summary, steps} = req.body;

  if (!sequences.has(id)) {
    res.status(404).json({error: 'not found'});
    return
  }

  const updatedSteps: Step[] = (steps || []).map((step: Step) => ({
    ...step,
    id: step.id || uuidv4()
  }));

  const updatedSequence: Sequence = {
    id,
    name,
    summary,
    steps: updatedSteps
  };

  sequences.set(id, updatedSequence);
  res.json(updatedSequence);
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on :${PORT}`);
});