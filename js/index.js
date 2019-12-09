let homeVM = function() {
    self = this;

    self.playlists = ko.observableArray([]);
    self.webQueue = ko.observableArray([]);
    self.publicQueue = ko.observableArray([]);
    self.searchBarInput = ko.observable()

}

let loadDependencies = function() {
    getPlaylists();
    getWebQueue();
    getPublicQueue();
    getFriendList();
    bind();
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
    self.searchBarInput('')
}

let getSearchResults = function() {
    
}

let playPause = function() {
    let button = document.getElementById('playButton');
    if (button.classList.contains('fa-pause')) {
        button.classList.remove('fa-pause');
        button.classList.add('fa-play');
        button.classList.add('positive');
        console.log('play')
    } else if (button.classList.contains('fa-play'))  {
        button.classList.add('fa-pause');
        button.classList.remove('fa-play');
        console.log('pause')
    }
}

let vm = new homeVM();

function bind() {
    ko.applyBindings(vm, $("#mainBinding")[0]);
}

loadDependencies();