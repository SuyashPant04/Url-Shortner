import { useState } from "react";
import { shortenURL } from "./api";

function App() {
    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setShortUrl("");
        
        try {
            const response = await shortenURL({ longUrl });
            setShortUrl(response.data.shortUrl);
        } catch (err) {
            setError("Failed to shorten URL. Please try again.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">URL Shortener</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <input
                    type="text"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    placeholder="Enter long URL"
                    className="w-full p-2 border rounded mb-4"
                    required
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Shorten</button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {shortUrl && (
                <div className="mt-4 p-4 bg-green-100 rounded">
                    <p className="text-lg font-semibold">Shortened URL:</p>
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{shortUrl}</a>
                </div>
            )}
        </div>
    );
}

export default App;
