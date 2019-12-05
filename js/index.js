let homeVM = function() {
    self = this;

    self.playlists = ko.observableArray([]);
    self.webQueue = ko.observableArray([]);
    self.publicQueue = ko.observableArray([]);

}

let loadDependencies = function() {
    getPlaylists();
    bind();
}

let getPlaylists = function() {

}

let vm = new homeVM();

function bind() {
    ko.applyBindings(vm, $("#mainBinding")[0]);
}

loadDependencies();