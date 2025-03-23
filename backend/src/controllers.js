import ShortURL from "./ShortURL.js";
import crypto from "crypto";

const generateUniqueShortCode = async () => {
    let shortCode;
    let isUnique = false;

    while (!isUnique) {
        shortCode = crypto.randomBytes(3).toString("hex");
        const existingEntry = await ShortURL.findOne({ shortCode });

        if (!existingEntry) {
            isUnique = true;
        }
    }
    return shortCode;
};

export const shortenURL = async (req, res) => {
    try {
        const { longUrl } = req.body;

        if (!longUrl) {
            return res.status(400).json({ error: "Long URL cannot be empty" });
        }

        const existingURL = await ShortURL.findOne({ longUrl });
        if (existingURL) {
            return res.json({ shortUrl: `${process.env.BASE_URL}/${existingURL.shortCode}` });
        }

        const shortCode = await generateUniqueShortCode();

        const newShortURL = new ShortURL({ longUrl:longUrl, shortCode:shortCode, visitCount: 0 });
        await newShortURL.save();

        res.json({ shortUrl: `${process.env.BASE_URL}/${shortCode}` });

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const redirectURL = async (req, res) => {
    try {
        const { shortCode } = req.params;

        const shortURL = await ShortURL.findOne({ shortCode });
        if (!shortURL) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        shortURL.visitCount += 1;
        await shortURL.save();

        res.redirect(shortURL.longUrl);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};







// export const getStats = async (req, res) => {
//     try {
//         const { shortCode } = req.params;
//         const shortURL = await ShortURL.findOne({ shortCode });

//         if (!shortURL) {
//             return res.status(404).json({ error: "Short URL not found" });
//         }

//         res.json({ longUrl: shortURL.longUrl, visitCount: shortURL.visitCount });
//     } catch (error) {
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };




// if (alias) {
        //     const existingAlias = await ShortURL.findOne({ shortCode: alias });
        //     if (existingAlias) {
        //         return res.status(400).json({ error: "Alias already in use" });
        //     }
        // }








// export const shorten = (req, res) => {
//     const { longUrl } = req.body;
//     if (!longUrl) return res.status(400).json({ error: 'URL is required' });

//     const shortCode = shortid.generate();
//     urlDatabase[shortCode] = longUrl;

//     res.json({ shortUrl: `http://localhost:5000/${shortCode}` });
// }

// export const shortCode = (req, res) => {
//     const longUrl = urlDatabase[req.params.shortCode];
//     if (longUrl) {
//         res.redirect(longUrl);
//     } else {
//         res.status(404).json({ error: 'Short URL not found' });
//     }
// }

// import ShortURL from "./models/ShortURL.js";
// import crypto from "crypto";

// export const shortenURL = async (req, res) => {
//     try {
//         const { longUrl } = req.body;
        
//         if (!longUrl) {
//             return res.status(400).json({ error: "Long URL cannot be empty" });
//         }

//         const existingURL = await ShortURL.findOne({longUrl:longUrl})

//         if(existingURL){
//             const shortCode = existingURL.shortCode; 
//             return res.json({ shortUrl: `${process.env.BASE_URL}/${shortCode}` });
//         }

//         const shortCode = crypto.randomBytes(3).toString('hex');

//         const newShortURL = new ShortURL({ longUrl:longUrl, shortCode:shortCode, visitCount: 0 });
//         await newShortURL.save();

//         res.json({ shortUrl: `${process.env.BASE_URL}/${shortCode}` });

//     } catch (error) {
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };
