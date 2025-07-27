import React, { useEffect, useState } from 'react';
import { fetchTopArtists, fetchTopSongs, fetchTopGenres } from '../lib/spotifyApi';

"use client";

function SpotifyStats() {
    const [topArtists, setTopArtists] = useState([]);
    const [topSongs, setTopSongs] = useState([]);
    const [topGenres, setTopGenres] = useState([]);
    const [error, setError] = useState(null);
    const [timeFrame, setTimeFrame] = useState('1month'); // Default time frame

    useEffect(() => {
        const fetchData = async () => {
            try {
                const artists = await fetchTopArtists(timeFrame);
                const songs = await fetchTopSongs(timeFrame);
                const genres = await fetchTopGenres(timeFrame);

                setTopArtists(artists);
                setTopSongs(songs);
                setTopGenres(genres);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [timeFrame]);

    const handleTimeFrameChange = (event) => {
        setTimeFrame(event.target.value);
    };

    return (
        <div>
            <h1>Your Spotify Stats</h1>
            <select onChange={handleTimeFrameChange} value={timeFrame}>
                <option value="1month">Last 1 Month</option>
                <option value="6months">Last 6 Months</option>
                <option value="1year">Last 1 Year</option>
            </select>
            {error && <p>Error: {error}</p>}
            <div>
                <h2>Top Artists</h2>
                <ul>
                    {topArtists.map(artist => (
                        <li key={artist.id}>{artist.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Top Songs</h2>
                <ul>
                    {topSongs.map(song => (
                        <li key={song.id}>{song.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Top Genres</h2>
                <ul>
                    {topGenres.map(genre => (
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SpotifyStats;