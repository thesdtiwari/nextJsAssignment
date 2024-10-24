// In-memory storage (temporary, resets when server restarts)
let tempStorage = [];
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST request to store data
    const { data } = req.body;
    if (!data) {
      return res.status(400).json({ message: 'Data is required' });
    }
    // Add data to the in-memory storage
    tempStorage.push(data);
    return res.status(201).json({ message: 'Data stored successfully', storedData: tempStorage });
  } else if (req.method === 'GET') {
    // Handle GET request to retrieve all stored data
    return res.status(200).json({ storedData: tempStorage });
  } else if (req.method === 'DELETE') {
    // Handle DELETE request to clear the storage
    const { data : id } = req.body;
    if (!id) {
      return res.status(400).json({ message: 'Data is required' });
    }
    tempStorage = tempStorage.filter(item => item != id);
    console.log(tempStorage,'api');
    return res.status(200).json({ storedData: tempStorage });
  } else {
    // Handle other HTTP methods
    res.setHeader('Allow', ['POST', 'GET', 'DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}