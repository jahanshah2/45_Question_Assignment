function makeAlbum(artist: string, title: string, tracks?: number):any{
    let album = {
        tracks: tracks,
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

let album1 = makeAlbum('Arijit Singh', 'Tum Hi Ho');
let album2 = makeAlbum('Lata Mangeshkar', 'Lata in Concert');
let album3 = makeAlbum('A. R. Rahman', 'Vande Mataram', 10);
console.log(album1);
console.log(album2);
console.log(album3);