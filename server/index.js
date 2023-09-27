import express from "express";
import axios from 'axios';

const app = express();
const port = process.env.PORT || 9001;
const PROD = process.env.NODE_ENV === 'production';

const vtEndpoint = 'https://try.access.worldpay.com/verifiedTokens/cardOnFile';
// const tokenHeaders = {
//     'Content-Type': 'application/vnd.worldpay.tokens-v3.hal+json',
//     Accept: 'application/vnd.worldpay.tokens-v3.hal+json',
// }

if (PROD) {
    app.use('/', express.static('dist'));
}

app.post('/api/addCard', async (req, res) => {
    const reqBody = {
    }
    const response = await axios.post(vtEndpoint, reqBody
        // , { headers: tokenHeaders }
    )
    res.send(response);
});

app.listen(port, () => {
    if (PROD) {
        console.log(`\n\n\n🚀  Server running at http://localhost:${port}.\n\n\n`);
    } else {
        console.log(`\n\n\n🚀  Server running at http://localhost:9000.\n\n\n`);
    }
})