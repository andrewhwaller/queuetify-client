let homeVM = function() {
    self = this;

    self.playlists = ko.observableArray([]);

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