let homeVM = function() {
    self = this;

    self.playlists = ko.observableArray([]);
    self.webQueue = ko.observableArray([]);
    self.publicQueue = ko.observableArray([]);

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

let vm = new homeVM();

function bind() {
    ko.applyBindings(vm, $("#mainBinding")[0]);
}

loadDependencies();