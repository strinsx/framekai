const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const DB = require('./components/db')
const ratingSchema = require('./components/ratingsmodel');


const PORT = process.env.PORT || 3000;
const PROXYURI = process.env.PROXY_URL;

async function Server() {

    try {
        app.use(cors());
        app.use(express.json());
        await DB();
      


        app.get('/spotlight', async (req, res) => {

            try {
                const response = await fetch(`${PROXYURI}/animekai/spotlight`);
                const data = await response.json();
                res.json(data.results);
            } catch (error) {
                res.status(400).json({error: "no data"})
            }
        })


        app.get('/new-releases', async(req, res)=> {
            try {

                const response = await fetch(`${PROXYURI}/animekai/new-releases`);
                const data = await response.json();
                res.json(data.results);
                
            } catch (error) {

                res.status(400).json({error: "cannot fetch"})
                
            }
        })

        app.post('/ratings', async(req, res)=> {

            const {ratings} = req.body
            const ratingsModel = await ratingSchema.create({ratings})
            


        })

        app.get('/reviews', async(req, res)=> {
            const ids = await ratingSchema.find().select('_id');
            res.json({data: ids});
        })

       

        app.listen(PORT, () => {
            console.log("LISTENING IN PORT", PORT);
        })





    } catch (error) {

        console.error(error);

    }


}

Server()
