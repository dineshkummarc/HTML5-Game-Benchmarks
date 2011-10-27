define([ 'util/ensureCallback' ], function (ensureCallback) {
    var IMAGE_SRC = 'assets/html5-logo.png';

    function ImageSource(img) {
        this.img = img;
    }

    ImageSource.prototype.getImage = function getImage(frameIndex) {
        return this.img;
    };

    return function image(callback) {
        callback = ensureCallback(callback);

        var img = new window.Image();
        img.onload = function () {
            var imageSource = new ImageSource(img);
            callback(null, imageSource);
        };
        img.src = IMAGE_SRC;
    };
});