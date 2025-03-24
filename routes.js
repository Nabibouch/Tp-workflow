import express from 'express'
import mongoose from 'mongoose';


app.get("/items", async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
        res.status(500).json({ error: "Erreur" });
      }
});

app.post("/items", async (res, req) =>{
    try {
        const{name} = req.body;
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



app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
  });