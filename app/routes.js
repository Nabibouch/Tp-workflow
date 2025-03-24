import express from 'express'
import { Item } from './models/model.js';


 const router = express.Router();

router.get("/items", async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
        res.status(500).json({ error: "Erreur" });
      }
});

router.post("/items", async (req, res) =>{
    try {
        const{name, description} = req.body;
        if (!name) {
            return res.status(400).json({ error: "Veuillez entrer un name" });
        }
        const newItem = new Item({ name, description });
        await newItem.save();

        res.status(201).json(newItem);
      } catch (error) {
        res.status(500).json({ error: "Erreur" });
    }
})

export default router;

