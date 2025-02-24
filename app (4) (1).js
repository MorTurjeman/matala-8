const express = require('express');
const { products } = require('./data'); // ייבוא המוצרים מקובץ data.js

const app = express();
const port = 3000;

// API שמחזירה מוצרים במחיר גבוה מהערך שנשלח בפרמטר productPrice
app.get('/products/:productPrice', (req, res) => {
  const productPrice = parseFloat(req.params.productPrice); // המרת הפרמטר למספר
  if (isNaN(productPrice)) {
    return res.status(400).json({ error: 'הערך שהוזן אינו מספר חוקי' });
  }

  const filteredProducts = products.filter(product => product.price > productPrice); // סינון המוצרים

  res.json(filteredProducts); // החזרת המוצרים בפורמט JSON
});

app.listen(port, () => {
  console.log(`השרת פועל על פורט ${port}`);
});
