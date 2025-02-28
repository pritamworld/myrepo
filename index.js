import express from "express";

const app = express();
app.use(express.json());

//const name = 'James'

// const person = {first: name}

// console.log(person)

// const sayHelloLinting = (fName) => {
// console.log(`Hello linting, ${fName}`);
// };

// app.get("/", (req, res) => {
//     res.send("Webhook server running...")
// })

app.post("/webhook", (req, res) => {
    // if (req.body.ref === "refs/heads/main") {
    //     console.log("New push detected, triggering CI/CD...");
    //     // Trigger deployment pipeline
    // }
    // res.status(200);
    console.log("Received Webhook:", req.body);
    res.status(200).send("Webhook received");
    
});

app.listen(3000, () => console.log("Webhook listener running on port 3000"));