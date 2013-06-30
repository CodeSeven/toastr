; (function ($, pubsub, tab, render, toastr) {
    'use strict';

    if (!toastr) {
        pubsub.subscribe('action.panel.showed.toastr', function (args) {
            render.engine.insert(args.panel, 'Toastr is not available on this screen. Plugin disabled.');
        });
        return;
    }

    var preexistingToasts = [];
    var rendered = false;
    var toastrPanel;
    var headerRow = [
        'Id',
        'Type',
        'State',
        'Message',
        'Start',
        'End',
        'LifeTime',
        'This Toast\'s Options',
        'All Toastr Options'
    ];

    toastr.subscribe(receiveToasts);

    function receiveToasts(args) {
        var data = args;
        !rendered ? preexistingToasts.push(data) : write(data);
    }

    function elapsedMs(start, end) {
        return end && start ? end.getTime() - start.getTime() + ' ms' : '';
    }

    function formatDateTime(date) {
        var sep = ':';
        return !!(date && date.getMonth) ? date.getFullYear().toString() + sep +
            padDigits(date.getMonth() + 1) + sep +
            padDigits(date.getDate()) + sep +
            padDigits(date.getHours()) + sep +
            padDigits(date.getMinutes()) + sep +
            padDigits(date.getSeconds()) + sep +
            padDigits(date.getMilliseconds(), '0', 3) : '';

        function padDigits(val, pad, count) {
            var value = val.toString ? val.toString() : val;
            count = count || 2;
            var padding = Array(count + 1).join(pad || '0');
            return (padding + (value)).slice(-count);
        }
    }
    
    function write(data) {
        if (data.length) {
            for (var i = 0; i < data.length; i++) {
                write(data[i]);
            }
            return;
        }

        var startTime = formatDateTime(data.startTime);
        var endTime = formatDateTime(data.endTime);
        var lifetime = elapsedMs(data.startTime, data.endTime);

        // Must match sequence of headers
        var pivotedData = [
            data.toastId,
            data.map.type,
            data.state,
            data.map.message,
            startTime, 
            endTime, 
            lifetime,
            data.map,
            data.options,
            getStateStyle(data)
        ];
        render.engine.prepend(toastrPanel, [headerRow, pivotedData]);
	}

    function getStateStyle(data) {
        return data.state === 'visible' ? 'info' : '';
    }

    pubsub.subscribe('action.panel.rendered.toastr', function (args) {
        toastrPanel = args.panel;
        rendered = true;
        render.engine.insert(toastrPanel, [headerRow]);
        if (preexistingToasts.length) {
            for (var i = 0; i < preexistingToasts.length; i++) {
                write(preexistingToasts[i]);
            }
        }
    });

    var config = {
        key: 'toastr',
        payload: {
            name: 'toastr',
            version: '0.2.0',
            isPermanent: true,
            data: 'Loading glimpse.toastr ...'
        },
        metadata: {
            documentationUri: "http://jpapa.me/c7toastr"
        }
    };

    tab.register(config);

})(jQueryGlimpse, glimpse.pubsub, glimpse.tab, glimpse.render, window.toastr);