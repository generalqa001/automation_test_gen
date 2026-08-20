import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = Number(process.env.PORT || 3000);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const products = [
  { id: 1, name: 'AI Laptop', category: 'electronics', price: 1299, stock: 8, description: 'A practical laptop for AI experimentation.' },
  { id: 2, name: 'Test Keyboard', category: 'accessories', price: 79, stock: 20, description: 'Mechanical keyboard for QA engineers.' },
  { id: 3, name: 'QA Headset', category: 'accessories', price: 119, stock: 14, description: 'Comfortable headset for test sessions.' },
  { id: 4, name: 'Automation Monitor', category: 'electronics', price: 399, stock: 6, description: '27-inch monitor for automation dashboards.' },
  { id: 5, name: 'API Notebook', category: 'books', price: 29, stock: 50, description: 'Notes and examples for API testing.' }
];

const users = [
  { email: 'qa@example.com', password: 'Password123!', name: 'QA User' },
  { email: 'admin@example.com', password: 'Admin123!', name: 'Admin User' }
];

app.get('/api/products', (_req, res) => res.json(products));

app.post('/api/login', (req, res) => {
  const user = users.find(u => u.email === req.body.email && u.password === req.body.password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  return res.json({ token: `demo-${Buffer.from(user.email).toString('base64')}`, user: { email: user.email, name: user.name } });
});

app.post('/api/register', (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.name) return res.status(400).json({ message: 'All fields are required' });
  if (users.some(u => u.email === req.body.email)) return res.status(409).json({ message: 'Email already registered' });
  users.push({ email: req.body.email, password: req.body.password, name: req.body.name });
  return res.status(201).json({ message: 'Registration successful' });
});

app.post('/api/ai', (req, res) => {
  const prompt = String(req.body.prompt || '').trim();
  if (!prompt) return res.status(400).json({ message: 'Prompt is required' });
  res.json({
    response: `Mock AI response: I received your prompt "${prompt}". This endpoint is ready to be replaced with a real AI provider.`
  });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Demo website running at http://127.0.0.1:${port}`);
});
