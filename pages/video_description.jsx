{project.link2 && (
        <div className="section section-inner m-video-large">
          <div className={`video ${videoToggle ? "active" : ""}`}>
            <div
              className="img js-parallax"
              style={{ backgroundImage: `url(${project.image2})` }}
            />
            {/* Embed YouTube video using react-youtube */}
            <YouTube
              videoId={getYouTubeVideoId(project.link2)}
              opts={{ width: '100%', height: '100%' }}
              onReady={(event) => {
                // You can perform actions when the video player is ready
              }}
            />
            <div className="play" onClick={() => setVideoToggle(true)} />
          </div>
        </div>
      )}
