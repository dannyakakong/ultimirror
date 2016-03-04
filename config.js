var ultimirror = {
    config: {
        debug: {
            port:           8080,
            config:         false,
            edgePadding:    'medium',
            mute:           false,
            notOnTop:       true,
            windowed:       true,
            windowedWidth:  1024,
            windowedHeight: 1280,
            showWindow:     false,
            webInspector:   false,
            zoom:           1
        },

        production: {
            port:           80,
            config:         false,
            edgePadding:    'medium',
            mute:           false,
            notOnTop:       false,
            windowed:       false,
            windowedWidth:  768,
            windowedHeight: 1024,
            showWindow:     true,
            webInspector:   false,
            zoom:           1
        }
    },

    layout: {
        admin:      'admin/admin',
        mirror:     'default'
    },

    layouts: {
        'default': {
            id:     'default',
            name:   'Default'
        },
        'bigclock': {
            id:     'bigclock',
            name:   'Big Clock'
        }
    },

    mandatoryModules: [
        'system'
    ]
};


module.exports = ultimirror;