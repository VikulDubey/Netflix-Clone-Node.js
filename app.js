// Import Modules
import express from "express";
import bodyParser from "body-parser";

// Initilize the express object  and Port
const app = express();
const port = process.env.PORT || 4000;;

app.use(express.static("public")); // Initilize the static files folder
app.use(bodyParser.urlencoded({ extended: true })); // Pass the form data through Body parser

// Get Request Handler
app.get("/", (req, res) => {
  let headArray = [
    "Laughter. Tears. Thrills. Find it all on Netflix.",
    "The biggest Indian hits. Ready to watch here from ₹ 149.",
    "Netflix and Chill!",
    "Thrilling moments in the palm of your hand",
    "Get watching",
    "All of Netflix on your mobile",
    "Introducing Netflix theatre — stream together",
    "Commercials make a break when your entertainment plays",
    "Let your sofa get some drama ",
    "Netflix — your true north",
    "O2 and Netflix — now together",
    "Unlimited movies TV shows and more",
    "Watch anywhere cancel at any time",
    "Netflix and chill with snacks",
    "Watch your TV shows and movies — where you want",
    "Don’t cry alone, cry together",
    "Get hooked again",
    "Anytime anywhere instantly - Netflix",
    "No Demimorgans here, just commercial-free TV Show",
    "Reinventing TV",
    "See what’s next",
    "The Best Shows Have A Home On Netflix",
    "A Binge-Watching Paradise Awaits With Netflix",
  ];

  let randomHead = headArray[Math.floor(Math.random() * headArray.length)];
  res.render("index.ejs", { heading: randomHead });
});




// Application Routes
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/signIn",(req,res)=>{
  const userEmail = req.body.email;
  console.log(userEmail);
  res.send("The username is registered")
})
app.post("/signup",(req,res)=>{
  console.log(req.body);;
})

// app.get("/signup", (req, res) => {
//   res.redirect("signup.ejs`");
// });

// Running Server
app.listen(port, () => {
  console.log(`Server is running on`, port);
});
