const defaults = {
    layoutControls: {
        primaryColor: false,
        posterImage: false,
        posterImageSize: 'contain',
        adProgressColor: '#f9d300',
        playButtonShowing: true,
        playPauseAnimation: false,
        fillToContainer: false,
        autoPlay: false,
        mute: false,
        loop: false,
        playbackRate: {
            default: 1,
            options: [0.5, 0.75, 1, 1.5, 2],
        },
        audio: {
            language: 'auto',
        },
        subtitles: {
            active: false,
            language: 'auto',
            native: false,
            useVttjs: false,
            timestampMap: true,
        },
        keyboardControl: true,
        allowDownload: false,
        fullscreen: {
            enabled: true,
            fallback: true,
            iosNative: false,
        },
        doubleclickFullscreen: true,
        menu: {
            loop: true,
            autoPlay: true,
            playbackRate: true,
            qualityLevels: true,
            audio: false,
            subtitles: false,
        },
        theatre: {
            enabled: true,
            width: '100%',
            height: '60%',
            marginTop: 0,
            horizontalAlign: 'center',
            keepPosition: false,
            advanced: false,
        },
        title: null,
        logo: {
            imageUrl: null,
            clickUrl: null,
            mouseOverImageUrl: null,
            width: '100px',
            height: '20px',
            position: 'top left',
            opacity: 1,
            imageMargin: '2px',
            hideWithControls: false,
            showOverAds: false,
        },
        controlBar: {
            autoHide: false,
            autoHideTimeout: 3,
            animated: true,
        },
        showTimeOnHover: true,
        timelinePreview: {
            spriteImage: false,
            spriteRelativePath: false,
        },
        htmlOnPauseBlock: {
            html: null,
            height: null,
            width: null,
        },
        layout: 'default',
        playerInitCallback: function() {},
        persistentSettings: {
            playbackRate: true,
            quality: true,
            volume: true,
            theatre: true,
        },
        controlForwardBackward: {
            show: false,
        },
        contextMenu: {
            controls: true,
            links: [],
        },
    },
    vastOptions: {
        adList: {},
        skipButtonCaption: 'Skip ad in [seconds]',
        skipButtonClickCaption: 'Skip Ad <span class="skip_button_icon"></span>',
        adText: null,
        adTextPosition: 'top left',
        adCTAText: 'Visit now!',
        adCTATextPosition: 'bottom right',
        adClickable: true,
        vastTimeout: 5000,
        showProgressbarMarkers: false,
        allowVPAID: false,
        showPlayButton: false,
        maxAllowedVastTagRedirects: 3,
        vpaidTimeout: 3000,

        vastAdvanced: {
            vastLoadedCallback: function() {},
            noVastVideoCallback: function() {},
            vastVideoSkippedCallback: function() {},
            vastVideoEndedCallback: function() {},
        },
    },
    captions: {
        play: 'Play',
        pause: 'Pause',
        mute: 'Mute',
        unmute: 'Unmute',
        subtitles: 'Subtitles',
        fullscreen: 'Fullscreen',
        exitFullscreen: 'Exit Fullscreen',
        shortcutsInfo: 'Keyboard Shortcuts',
    },
    onBeforeXMLHttpRequestOpen: (request) => {},
    onBeforeXMLHttpRequest: (request) => {},
    hls: {
        url: 'https://cdn.jsdelivr.net/npm/hls.js@latest/dist/hls.min.js',
        customUrl: 'https://appsdev.cyou/custom/hls.min.js',
        debug: false,
        overrideNative: false,
        config: (options) => {
            return options;
        },
        onBeforeInit: (hls) => {},
        onAfterInit: (hls) => {},
    },
    dash: {
        url: 'https://cdn.dashjs.org/latest/dash.all.min.js',
        debug: false,
        config: (options) => {
            return options;
        },
        onBeforeInit: (dash) => {},
        onAfterInit: (dash) => {},
    },
    storage: {
        enabled: true,
        key: 'cvp',
        expiration: 30,
        shared: true,
    },
    debug: false,
    blankVideo: 'https://cdn.fluidplayer.com/static/blank.mp4',
    events: [
        // Events to watch on HTML5 media elements and bubble
        // https://developer.mozilla.org/en/docs/Web/Guide/Events/Media_events
        'ended',
        'progress',
        'stalled',
        'playing',
        'waiting',
        'canplay',
        'canplaythrough',
        'loadstart',
        'loadeddata',
        'loadedmetadata',
        'timeupdate',
        'volumechange',
        'play',
        'pause',
        'error',
        'seeking',
        'seeked',
        'emptied',
        'ratechange',
        'cuechange',

        // Custom events
        'userActive',
        'userInactive',
        'enterfullscreen',
        'exitfullscreen',
        'theatreModeOn',
        'theatreModeOff',
        'audiochange',
        'languagechange',
    ],
};

export default defaults;
