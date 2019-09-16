const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/library-example", { useNewUrlParser: true })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));

// const Book = mongoose.model("Book", {
//   name: String
// });

// Book.create({ name: "The Parable of the Sower" });
