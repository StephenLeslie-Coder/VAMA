import axios from "axios";
import express from "express";
import { QuoteRouter } from "./routes/quotes";

const app = express();
const PORT = process.env.PORT || 9000
app.use(express.json())
app.use('/quotes',QuoteRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
