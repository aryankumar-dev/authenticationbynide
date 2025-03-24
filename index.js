import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

const port = process.env.PORT || 4000;

app.get("/",(req,res) =>{
    res.send("cohort");
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});