export interface SpotifyUser {
    id: string;
    displayName: string;
    email: string;
    profileImage: string;
}

export interface TopArtist {
    id: string;
    name: string;
    genres: string[];
    popularity: number;
    images: { url: string }[];
}

export interface TopTrack {
    id: string;
    name: string;
    artists: TopArtist[];
    album: {
        name: string;
        images: { url: string }[];
    };
    popularity: number;
}

export interface UserTopData {
    artists: TopArtist[];
    tracks: TopTrack[];
    genres: string[];
}

export interface TimeRange {
    label: string;
    value: string;
}