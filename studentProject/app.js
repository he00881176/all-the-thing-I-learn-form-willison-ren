const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const Student = require("./model/students");
const methodOverride = require("method-override");

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
mongoose.set("useFindAndModify", false);

//connect mongoose to mongoDB
mongoose
  .connect("mongodb://localhost:27017/studentDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((d) => {
    console.log("success connect to mongoDB");
  })
  .catch((err) => {
    console.log("connect failed");
    console.log(err);
  });

//studentPage
app.get("/students", async (req, res) => {
  try {
    let data = await Student.find();
    res.send(data);
  } catch {
    res.send({ message: "Error happening !!!!" });
  }
});

//student ID page
app.get("/students/:id", (req, res) => {
  let { id } = req.params;
  Student.findOne({ id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ message: "error!!!!" });
    });
});

//student insert POST method
app.post("/students", (req, res) => {
  let { id, name, age, merit, other } = req.body;
  let newStudent = new Student({
    id,
    name,
    age,
    scholarship: { merit, other },
  });
  newStudent
    .save()
    .then(() => {
      res.send({ message: "Successfully post a new student." });
    })
    .catch((e) => {
      res.send(e);
    });
});

//update student data
app.put("/students/:id", async (req, res) => {
  let { id, name, age, merit, other } = req.body;
  try {
    let d = await Student.findOneAndUpdate(
      { id },
      { id, name, age, scholarship: { merit, other } },
      { new: true, runValidators: true }
    );
    console.log(d);
    res.send({ message: "Successfully put update data." });
  } catch (e) {
    res.send(e);
  }
});

//update use patch

class newData {
  constructor() {}
  setProperty(key, value) {
    if (key !== "merit" && key !== "other") {
      this[key] = value;
    } else {
      this[`scholarship.${key}`] = value;
    }
  }
}

app.patch("/students/:id", async (req, res) => {
  let { id } = req.params;
  let newObject = new newData();
  for (let property in req.body) {
    newObject.setProperty(property, req.body[property]);
  }
  console.log(newObject);
  try {
    let d = await Student.findOneAndUpdate({ id }, newObject, {
      new: true,
      runValidators: true,
    });
    res.send({ message: "Successfully put update data." });
  } catch (e) {
    res.send(e);
  }
});

//delete student data
app.delete("/students/delete/:id", (req, res) => {
  let { id } = req.params;
  Student.findOneAndDelete({ id })
    .then((d) => {
      res.send("Successfully delete data.");
      console.log(d);
    })
    .catch((err) => {
      res.send("Delete action failed.");
      console.log(err);
    });
});

//delete all data
app.delete("/students/delete", (req, res) => {
  Student.deleteMany({})
    .then((d) => {
      res.send("Successfully delete all data.");
      console.log(d);
    })
    .catch((err) => {
      res.send("Delete all data failed.");
      console.log(err);
    });
});

//listener
app.listen(3000, () => {
  console.log("Server is runnuing on port:3000");
});
