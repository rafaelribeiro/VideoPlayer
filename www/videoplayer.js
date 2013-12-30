

	var exec = require("cordova/exec");

	function VideoPlayer() {
		this.url = null;
	}

	VideoPlayer.prototype.play = function(url, onSuccess, onError) {
		exec(onSuccess, onError, "VideoPlayer", "playVideo", [url]);
	};

	var videoPlayer = new VideoPlayer();
	module.exports = videoPlayer;

