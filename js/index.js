let homeVM = function() {
    self = this;

    self.playlists = ko.observableArray([]);
    self.webQueue = ko.observableArray([]);
    self.publicQueue = ko.observableArray([]);
    self.searchBarInput = ko.observable()

    let playlistOne = {
        name: "list one", 
        songCount: 2
    }
    
    let playlistTwo = {
        name: "list two", 
        songCount: 15
    }
    let testPlaylists = [playlistOne, playlistTwo]
    
    self.playlists(testPlaylists)
}

let loadDependencies = async function() {
    await getPlaylists();
    await getFriendList();
    await bind();
}

let getPlaylists = function() {

}

let getWebQueue = function() {

}

let getPublicQueue = function() {

}

let getFriendList = function() {

}

let addFriend = function() {

}

let runSearch = function() {
    console.log(self.searchBarInput())
}

let getSearchResults = function() {
    
}

let playPause = function() {
    let button = document.getElementById('playButton');
    if (button.classList.contains('fa-pause')) {
        button.classList.remove('fa-pause');
        button.classList.add('fa-play');
        button.classList.add('positive');
    } else if (button.classList.contains('fa-play'))  {
        button.classList.add('fa-pause');
        button.classList.remove('fa-play');
    }
}

let vm = new homeVM();

function bind() {
    ko.applyBindings(vm, $("#mainBinding")[0]);
}

loadDependencies();