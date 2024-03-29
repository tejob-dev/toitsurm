<!DOCTYPE html>
<html style="margin-top: 0 !important;" dir="ltr">

<head>
    
    <link rel="icon" href="/wp-content/fav/500.jpg"
        sizes="32x32" />
    <link rel="icon" href="/wp-content/fav/500.jpg"
        sizes="192x192" />
    <link rel="apple-touch-icon"
        href="/wp-content/fav/500.jpg" />
    <meta name="msapplication-TileImage"
        content="/wp-content/fav/500.jpg" />
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Oswald:wght@200;300;400;500;600;700&display=swap');
    </style>
    
    <style>
    *{
        font-family: "Oswald";
    }
    html,
    body {
        position: relative !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        margin-right: 0 !important;
        margin-left: 0 !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
        box-sizing: border-box;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        min-height: 100%;
        overflow: hidden !important;

    }

    #quillforms-renderer {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    #quillforms-renderer~*:not(#qf-recaptcha) {
        display: none !important;
    }

    * {
        box-sizing: border-box;
    }

    #loading-spinner {
        display: block;
        margin: 0 auto;
        -webkit-animation: loading-spinner-spin 2s linear infinite;
        animation: loading-spinner-spin 2s linear infinite;
        will-change: transform;
    }

    @-webkit-keyframes loading-spinner-spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }

    @keyframes loading-spinner-spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }

    #loading-circle {
        stroke-dasharray: 105;
        stroke-dashoffset: 105;
        stroke-linecap: round;
        -webkit-animation: loading-spinner-small 1.7s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
        animation: loading-spinner-small 1.7s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
        transform: translateZ(0);
        transform-origin: center;
        will-change: stroke-dashoffset;
    }

    @-webkit-keyframes loading-spinner-small {
        0% {
            stroke-dashoffset: 95;
            transform: scaleY(1);
        }

        49.99% {
            stroke-dashoffset: 0;
            transform: scaleY(1);
        }

        50% {
            stroke-dashoffset: 0;
            transform: scaleY(-1) rotate(25deg);
        }

        100% {
            stroke-dashoffset: 95;
            transform: scaleY(-1) rotate(-32deg);
        }
    }

    @keyframes loading-spinner-small {
        0% {
            stroke-dashoffset: 95;
            transform: scaleY(1);
        }

        49.99% {
            stroke-dashoffset: 0;
            transform: scaleY(1);
        }

        50% {
            stroke-dashoffset: 0;
            transform: scaleY(-1) rotate(25deg);
        }

        100% {
            stroke-dashoffset: 95;
            transform: scaleY(-1) rotate(-32deg);
        }
    }

    #loading-circle-meduim {
        stroke-dasharray: 160;
        stroke-dashoffset: 160;
        stroke-linecap: round;
        -webkit-animation: loading-spinner-meduim 1.7s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
        animation: loading-spinner-meduim 1.7s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
        transform: translateZ(0);
        transform-origin: center;
        will-change: stroke-dashoffset;
    }
    </style>
    <meta content="width=device-width, initial-scale=1.0, viewport-fit=cover" name="viewport">
    <title>Décrivez votre rêve - Toit Sur Mesure</title>
</head>

<body>
    <div id="quillforms-renderer">
        <div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%">
            <svg id="loading-spinner" width="40" height="40" viewBox="0 0 40 40" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle id="loading-circle" cx="20" cy="20" r="18" stroke="#313131" stroke-width="4" />
            </svg>
        </div>
    </div>

    <style id="skip-link-styles">
    .skip-link.screen-reader-text {
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute !important;
        width: 1px;
        word-wrap: normal !important;
    }

    .skip-link.screen-reader-text:focus {
        background-color: #eee;
        clip: auto !important;
        clip-path: none;
        color: #444;
        display: block;
        font-size: 1em;
        height: auto;
        left: 5px;
        line-height: normal;
        padding: 15px 23px 14px;
        text-decoration: none;
        top: 5px;
        width: auto;
        z-index: 100000;
    }
    </style>
    <script>
    (function() {
        var skipLinkTarget = document.querySelector('main'),
            sibling,
            skipLinkTargetID,
            skipLink;

        // Early exit if a skip-link target can't be located.
        if (!skipLinkTarget) {
            return;
        }

        // Get the site wrapper.
        // The skip-link will be injected in the beginning of it.
        sibling = document.querySelector('.wp-site-blocks');

        // Early exit if the root element was not found.
        if (!sibling) {
            return;
        }

        // Get the skip-link target's ID, and generate one if it doesn't exist.
        skipLinkTargetID = skipLinkTarget.id;
        if (!skipLinkTargetID) {
            skipLinkTargetID = 'wp--skip-link--target';
            skipLinkTarget.id = skipLinkTargetID;
        }

        // Create the skip link.
        skipLink = document.createElement('a');
        skipLink.classList.add('skip-link', 'screen-reader-text');
        skipLink.href = '#' + skipLinkTargetID;
        skipLink.innerHTML = 'Aller au contenu';

        // Inject the skip link.
        sibling.parentElement.insertBefore(skipLink, sibling);
    }());
    </script>
    <link rel='stylesheet' id='quillforms-renderer-core-css'
        href='/wp-content/plugins/quillforms/build/renderer-core/style.css?ver=1676381166'
        media='all' />
    <link rel='stylesheet' id='quillforms-blocklib-multiple-choice-block-renderer-style-css'
        href='/wp-content/plugins/quillforms/build/blocklib-multiple-choice-block/renderer.css?ver=1676381166'
        media='all' />
    <link rel='stylesheet' id='quillforms-blocklib-short-text-block-renderer-style-css'
        href='/wp-content/plugins/quillforms/build/blocklib-short-text-block/renderer.css?ver=1676381166'
        media='all' />
    <link rel='stylesheet' id='quillforms-blocklib-email-block-renderer-style-css'
        href='/wp-content/plugins/quillforms/build/blocklib-email-block/renderer.css?ver=1676381166'
        media='all' />
    <link rel='stylesheet' id='quillforms-blocklib-number-block-renderer-style-css'
        href='/wp-content/plugins/quillforms/build/blocklib-number-block/renderer.css?ver=1676381166'
        media='all' />
    <link rel='stylesheet' id='quillforms-renderer-load-font-css'
        href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;ver=63eba7e6e9651'
        media='all' />
    <script src='/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.9'
        id='regenerator-runtime-js'></script>
    <script src='/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0' id='wp-polyfill-js'>
    </script>
    <script src='/wp-includes/js/dist/vendor/react.min.js?ver=17.0.1' id='react-js'></script>
    <script src='/wp-includes/js/dist/vendor/react-dom.min.js?ver=17.0.1' id='react-dom-js'>
    </script>
    <script src='/wp-includes/js/dist/escape-html.min.js?ver=03e27a7b6ae14f7afaa6'
        id='wp-escape-html-js'></script>
    <script src='/wp-includes/js/dist/element.min.js?ver=47162ff4492c7ec4956b' id='wp-element-js'>
    </script>
    <script src='/wp-includes/js/dist/hooks.min.js?ver=4169d3cf8e8d95a3d6d5' id='wp-hooks-js'>
    </script>
    <script src='/wp-includes/js/dist/i18n.min.js?ver=9e794f35a71bb98672ae' id='wp-i18n-js'>
    </script>
    <script id='wp-i18n-js-after'>
    wp.i18n.setLocaleData({
        'text direction\u0004ltr': ['ltr']
    });
    </script>
    <script src='/wp-content/plugins/quillforms//lib/vendor/emotion.min.js?ver=1.8.6'
        id='emotion-js'></script>
    <script src='/wp-includes/js/dist/vendor/lodash.min.js?ver=4.17.19' id='lodash-js'></script>
    <script id='lodash-js-after'>
    window.lodash = _.noConflict();
    </script>
    <script src='/wp-content/plugins/quillforms/build/config/index.js?ver=7c435bbf68a5f6c6fcd0'
        id='quillforms-config-js'></script>
    <script id='quillforms-config-js-after'>
    qf.config.default.setAdminUrl("/wp-admin/");
    qf.config.default.setFormId(9);
    qf.config.default.setFormUrl("/quillforms/tsmform/");
    </script>
    <script src='/wp-content/plugins/quillforms/build/utils/index.js?ver=64ad6eaf5d19e2c0c8c0'
        id='quillforms-utils-js'></script>
    <script src='/wp-includes/js/dist/deprecated.min.js?ver=6c963cb9494ba26b77eb'
        id='wp-deprecated-js'></script>
    <script src='/wp-includes/js/dist/dom.min.js?ver=133a042fbbef48f38107' id='wp-dom-js'></script>
    <script src='/wp-includes/js/dist/is-shallow-equal.min.js?ver=20c2b06ecf04afb14fee'
        id='wp-is-shallow-equal-js'></script>
    <script id='wp-keycodes-js-translations'>
    (function(domain, translations) {
        var localeData = translations.locale_data[domain] || translations.locale_data.messages;
        localeData[""].domain = domain;
        wp.i18n.setLocaleData(localeData, domain);
    })("default", {
        "translation-revision-date": "2023-02-10 13:19:27+0000",
        "generator": "GlotPress\/4.0.0-alpha.3",
        "domain": "messages",
        "locale_data": {
            "messages": {
                "": {
                    "domain": "messages",
                    "plural-forms": "nplurals=2; plural=n > 1;",
                    "lang": "fr"
                },
                "Backtick": ["Retour arri\u00e8re"],
                "Period": ["P\u00e9riode"],
                "Comma": ["Virgule"]
            }
        },
        "comment": {
            "reference": "wp-includes\/js\/dist\/keycodes.js"
        }
    });
    </script>
    <script src='/wp-includes/js/dist/keycodes.min.js?ver=6e0aadc0106bd8aadc89'
        id='wp-keycodes-js'></script>
    <script src='/wp-includes/js/dist/priority-queue.min.js?ver=99e325da95c5a35c7dc2'
        id='wp-priority-queue-js'></script>
    <script src='/wp-includes/js/dist/compose.min.js?ver=37228270687b2a94e518' id='wp-compose-js'>
    </script>
    <script src='/wp-includes/js/dist/redux-routine.min.js?ver=c9ea6c0df793258797e6'
        id='wp-redux-routine-js'></script>
    <script src='/wp-includes/js/dist/data.min.js?ver=d8cf5b24f99c64ae47d6' id='wp-data-js'>
    </script>
    <script id='wp-data-js-after'>
    (function() {
        var userId = 1;
        var storageKey = "WP_DATA_USER_" + userId;
        wp.data
            .use(wp.data.plugins.persistence, {
                storageKey: storageKey
            });
    })();
    </script>
    <script src='/wp-content/plugins/quillforms/build/blocks/index.js?ver=65b18dcee82b5b647796'
        id='quillforms-blocks-js'></script>
    <script id='quillforms-blocks-js-after'>
    qf.blocks.registerBlockType("date", {
        "attributes": {
            "format": {
                "type": "string",
                "enum": ["MMDDYYYY", "DDMMYYYY", "YYYYMMDD"],
                "default": "MMDDYYYY"
            },
            "separator": {
                "type": "string",
                "enum": ["\/", "-", "."],
                "default": "\/"
            }
        },
        "supports": {
            "editable": true,
            "required": true,
            "attachment": true,
            "description": true,
            "logic": false,
            "logicConditions": true,
            "theme": true,
            "choices": false,
            "payments": false,
            "points": false,
            "innerBlocks": false
        },
        "logicalOperators": ["is", "is_not", "greater_than", "lower_than"]
    });
    qf.blocks.registerBlockType("dropdown", {
        "attributes": {
            "choices": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "value": {
                            "type": "string"
                        },
                        "label": {
                            "type": "string"
                        }
                    }
                },
                "default": [{
                    "value": "123e45z7o89b",
                    "label": "Choice 1"
                }]
            }
        },
        "supports": {
            "editable": true,
            "required": true,
            "attachment": true,
            "description": true,
            "logic": true,
            "logicConditions": true,
            "theme": true,
            "choices": true,
            "payments": true,
            "points": true,
            "innerBlocks": false
        },
        "logicalOperators": ["is", "is_not"]
    });
    qf.blocks.registerBlockType("email", {
        "attributes": [],
        "supports": {
            "editable": true,
            "required": true,
            "attachment": true,
            "description": true,
            "logic": true,
            "logicConditions": true,
            "theme": true,
            "choices": false,
            "payments": false,
            "points": false,
            "innerBlocks": false
        },
        "logicalOperators": ["is", "is_not", "starts_with", "contains", "ends_with", "not_contains"]
    });
    qf.blocks.registerBlockType("group", {
        "attributes": [],
        "supports": {
            "editable": false,
            "required": false,
            "attachment": true,
            "description": true,
            "logic": true,
            "logicConditions": false,
            "theme": true,
            "choices": false,
            "payments": false,
            "points": false,
            "innerBlocks": true
        },
        "logicalOperators": ["is", "is_not", "greater_than", "lower_than"]
    });
    qf.blocks.registerBlockType("long-text", {
        "attributes": {
            "setMaxCharacters": {
                "type": "boolean",
                "default": false
            },
            "maxCharacters": {
                "type": "number",
                "multipleOf": 1
            }
        },
        "supports": {
            "editable": true,
            "required": true,
            "attachment": true,
            "description": true,
            "logic": true,
            "logicConditions": true,
            "theme": true,
            "choices": false,
            "payments": false,
            "points": false,
            "innerBlocks": false
        },
        "logicalOperators": ["is", "is_not", "starts_with", "ends_with", "contains", "not_contains"]
    });
    qf.blocks.registerBlockType("multiple-choice", {
        "attributes": {
            "choices": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "value": {
                            "type": "string"
                        },
                        "label": {
                            "type": "string"
                        }
                    }
                },
                "default": [{
                    "value": "124e4567e89b",
                    "label": "Choice 1"
                }]
            },
            "verticalAlign": {
                "type": "boolean",
                "default": false
            },
            "multiple": {
                "type": "boolean"
            }
        },
        "supports": {
            "editable": true,
            "required": true,
            "attachment": true,
            "description": true,
            "logic": true,
            "logicConditions": true,
            "theme": true,
            "choices": true,
            "payments": true,
            "points": true,
            "innerBlocks": false
        },
        "logicalOperators": ["is", "is_not"]
    });
    qf.blocks.registerBlockType("number", {
        "attributes": {
            "setMax": {
                "type": "boolean",
                "default": false
            },
            "max": {
                "type": "number",
                "default": 0
            },
            "setMin": {
                "type": "boolean",
                "default": false
            },
            "min": {
                "type": "number",
                "default": 0
            }
        },
        "supports": {
            "editable": true,
            "required": true,
            "attachment": true,
            "description": true,
            "logic": true,
            "logicConditions": true,
            "theme": true,
            "choices": false,
            "payments": true,
            "points": false,
            "innerBlocks": false,
            "numeric": true
        },
        "logicalOperators": ["is", "is_not", "greater_than", "lower_than"]
    });
    qf.blocks.registerBlockType("short-text", {
        "attributes": {
            "setMaxCharacters": {
                "type": "boolean",
                "default": false
            },
            "maxCharacters": {
                "type": "number",
                "multipleOf": 1
            }
        },
        "supports": {
            "editable": true,
            "required": true,
            "attachment": true,
            "description": true,
            "logic": true,
            "logicConditions": true,
            "theme": true,
            "choices": false,
            "payments": false,
            "points": false,
            "innerBlocks": false
        },
        "logicalOperators": ["is", "is_not", "starts_with", "ends_with", "contains", "not_contains"]
    });
    qf.blocks.registerBlockType("statement", {
        "attributes": {
            "buttonText": {
                "type": "string",
                "default": "Continue"
            },
            "quotationMarks": {
                "type": "boolean",
                "default": true
            }
        },
        "supports": {
            "editable": false,
            "required": true,
            "attachment": true,
            "description": true,
            "logic": true,
            "logicConditions": true,
            "theme": true,
            "choices": false,
            "payments": false,
            "points": false,
            "innerBlocks": false
        },
        "logicalOperators": ["is", "is_not", "greater_than", "lower_than"]
    });
    qf.blocks.registerBlockType("website", {
        "attributes": [],
        "supports": {
            "editable": true,
            "required": true,
            "attachment": true,
            "description": true,
            "logic": true,
            "logicConditions": true,
            "theme": true,
            "choices": false,
            "payments": false,
            "points": false,
            "innerBlocks": false
        },
        "logicalOperators": ["is", "is_not", "starts_with", "contains", "ends_with", "not_contains"]
    });
    qf.blocks.registerBlockType("welcome-screen", {
        "attributes": {
            "buttonText": {
                "type": "string",
                "default": "Let's start!",
                "maxLength": 24
            }
        },
        "supports": {
            "editable": false,
            "required": false,
            "attachment": true,
            "description": true,
            "logic": false,
            "logicConditions": true,
            "theme": false,
            "choices": false,
            "payments": false,
            "points": false,
            "innerBlocks": false
        },
        "logicalOperators": ["is", "is_not", "greater_than", "lower_than"]
    });
    </script>
    <script
        src='/wp-content/plugins/quillforms/build/payment-gateways/index.js?ver=346c26d13a2f08011d1b'
        id='quillforms-payment-gateways-js'></script>
    <script src='/wp-includes/js/dist/autop.min.js?ver=43197d709df445ccf849' id='wp-autop-js'>
    </script>
    <script
        src='/wp-content/plugins/quillforms/build/renderer-core/index.js?ver=2ce26cbd33b5843d8804'
        id='quillforms-renderer-core-js'></script>
    <script
        src='/wp-content/plugins/quillforms/build/blocklib-multiple-choice-block/renderer/index.js?ver=baea6f9eed8091f29ad8'
        id='quillforms-blocklib-multiple-choice-block-renderer-script-js'></script>
    <script
        src='/wp-content/plugins/quillforms/build/blocklib-short-text-block/renderer/index.js?ver=99ed08a28dee872adeeb'
        id='quillforms-blocklib-short-text-block-renderer-script-js'></script>
    <script
        src='/wp-content/plugins/quillforms/build/blocklib-email-block/renderer/index.js?ver=514ed59fe07ea03e06f1'
        id='quillforms-blocklib-email-block-renderer-script-js'></script>
    <script
        src='/wp-content/plugins/quillforms/build/blocklib-number-block/renderer/index.js?ver=2e8318687629c5ab45c5'
        id='quillforms-blocklib-number-block-renderer-script-js'></script>
    <script id='quillforms-react-renderer-script-js-extra'>
    var qfRender = {
        "ajaxurl": "\/wp-admin\/admin-ajax.php",
        "formObject": {
            "blocks": [{
                "id": "hxyfw30o7",
                "name": "multiple-choice",
                "attributes": {
                    "choices": [{
                        "value": "Appartement",
                        "label": "Appartement"
                    }, {
                        "value": "Villa basse",
                        "label": "Villa basse"
                    }, {
                        "value": "Villa duplex",
                        "label": "Villa duplex"
                    }, {
                        "value": "Villa triplex",
                        "label": "Villa triplex"
                    }, {
                        "value": "Autres",
                        "label": "Autres"
                    }],
                    "verticalAlign": true,
                    "required": true,
                    "attachment": [],
                    "description": "",
                    "label": "Quel type d'habitation souhaiteriez-vous ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "bcojlzoyd",
                "name": "short-text",
                "attributes": {
                    "setMaxCharacters": false,
                    "required": false,
                    "attachment": [],
                    "description": "Exemple: Cocody ou Yamoussokro",
                    "label": "Dans quelle commune voudriez-vous r\u00e9sider ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "3ngafhule",
                "name": "multiple-choice",
                "attributes": {
                    "choices": [{
                        "value": "1",
                        "label": "1"
                    }, {
                        "value": "2",
                        "label": "2"
                    }, {
                        "value": "3",
                        "label": "3"
                    }, {
                        "value": "4",
                        "label": "4"
                    }, {
                        "value": "5",
                        "label": "5"
                    }, {
                        "value": "6",
                        "label": "6"
                    }, {
                        "value": "7",
                        "label": "7"
                    }, {
                        "value": "8",
                        "label": "8"
                    }, {
                        "value": "9",
                        "label": "9"
                    }, {
                        "value": "10",
                        "label": "10"
                    }],
                    "verticalAlign": false,
                    "required": true,
                    "attachment": [],
                    "description": "",
                    "label": "Combien de pi\u00e8ces devrait-elle comporter ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "i7awz6it6",
                "name": "multiple-choice",
                "attributes": {
                    "choices": [{
                        "value": "1",
                        "label": "1"
                    }, {
                        "value": "2",
                        "label": "2"
                    }, {
                        "value": "3",
                        "label": "3"
                    }, {
                        "value": "4",
                        "label": "4"
                    }, {
                        "value": "5",
                        "label": "5"
                    }, {
                        "value": "+",
                        "label": "+"
                    }],
                    "verticalAlign": false,
                    "required": true,
                    "attachment": [],
                    "description": "",
                    "label": "Combien de chambres ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "6t6bywhz0",
                "name": "number",
                "attributes": {
                    "setMax": false,
                    "max": 1,
                    "setMin": false,
                    "min": "15",
                    "required": true,
                    "attachment": [],
                    "description": "Exemple: 250",
                    "label": "Sur quelle surface devrait-elle \u00eatre construite ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "z83brbpot",
                "name": "multiple-choice",
                "attributes": {
                    "choices": [{
                        "value": "Piscine",
                        "label": "Piscine"
                    }, {
                        "value": "Jacuzzi",
                        "label": "Jacuzzi"
                    }, {
                        "value": "Jardin",
                        "label": "Jardin"
                    }, {
                        "value": "Cuisine ouverte",
                        "label": "Cuisine ouverte"
                    }, {
                        "value": "Autres",
                        "label": "Autres"
                    }],
                    "verticalAlign": true,
                    "multiple": true,
                    "required": true,
                    "attachment": [],
                    "description": "(Les choix sont multiples)",
                    "label": "Cochez les options suppl\u00e9mentaires que vous souhaiteriez ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "qj0iufelt",
                "name": "number",
                "attributes": {
                    "setMax": false,
                    "max": 1,
                    "setMin": true,
                    "min": "7",
                    "required": true,
                    "attachment": [],
                    "description": "Exemple: 75000000",
                    "label": "Quel est votre budget ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "uqiq3vxhm",
                "name": "multiple-choice",
                "attributes": {
                    "choices": [{
                        "value": "Dans une cit\u00e9",
                        "label": "Dans une cit\u00e9"
                    }, {
                        "value": "En dehors d’une cité",
                        "label": "En dehors d’une cit\u00e9"
                    }, {
                        "value": "Peu importe…",
                        "label": "Peu importe…"
                    }],
                    "verticalAlign": true,
                    "required": true,
                    "attachment": [],
                    "description": "",
                    "label": "Souhaiteriez-vous que ce soit :",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "87f47jhsi",
                "name": "multiple-choice",
                "attributes": {
                    "choices": [{
                        "value": "Oui",
                        "label": "Oui"
                    }, {
                        "value": "Non",
                        "label": "Non"
                    }],
                    "verticalAlign": false,
                    "required": true,
                    "attachment": [],
                    "description": "",
                    "label": "Souhaiteriez-vous qu\u2019elle soit d\u00e9j\u00e0 \u00e9quip\u00e9e ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "e56pmdspj",
                "name": "multiple-choice",
                "attributes": {
                    "choices": [{
                        "value": "OFFRE FIABILITE",
                        "label": "OFFRE FIABILITE"
                    }, {
                        "value": "OFFRE PAS A PAS",
                        "label": "OFFRE PAS À PAS"
                    }],
                    "verticalAlign": true,
                    "required": true,
                    "attachment": [],
                    "description": "",
                    "label": "Pour quelle offre d&#39;achat opteriez-vous ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "orgyz66wp",
                "name": "email",
                "attributes": {
                    "required": false,
                    "attachment": [],
                    "description": "Pas d\u2019inqui\u00e9tude, les informations personnelles que vous nous fournissez sont strictement confidentielles et ne seront jamais utilis\u00e9es \u00e0 des fins commerciales ni transmises ou vendues \u00e0 des tiers.",
                    "label": "Quel est votre email ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "m11fqv9jc",
                "name": "short-text",
                "attributes": {
                    "setMaxCharacters": false,
                    "required": true,
                    "attachment": [],
                    "description": "",
                    "label": "Quel est votre nom ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "ih4spg52d",
                "name": "short-text",
                "attributes": {
                    "setMaxCharacters": false,
                    "required": true,
                    "attachment": [],
                    "description": "",
                    "label": "Quel est votre pr\u00e9nom ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "lb9g1a8i2",
                "name": "short-text",
                "attributes": {
                    "setMaxCharacters": false,
                    "required": false,
                    "attachment": [],
                    "description": "",
                    "label": "Quelle est votre profession ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "bcohuzoyd",
                "name": "short-text",
                "attributes": {
                    "setMaxCharacters": false,
                    "required": false,
                    "attachment": [],
                    "description": "Exemple: Angré en face de la CNPS",
                    "label": "Où r\u00e9sidez-vous ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }, {
                "id": "die89eyk7",
                "name": "short-text",
                "attributes": {
                    "required": true,
                    "attachment": [],
                    "description": "Nous vous appellerons pour \u00e9tudier ensemble votre projet. Cet \u00e9change est bien s\u00fbr gratuit et sans aucun engagement. \nExemple : +22507070707",
                    "label": "Votre num\u00e9ro de t\u00e9l\u00e9phone ?",
                    "customHTML": "",
                    "layout": "stack",
                    "attachmentFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "attachmentFancyBorderRadius": false,
                    "attachmentBorderRadius": "0px",
                    "attachmentMaxWidth": "none"
                }
            }],
            "messages": {
                "label.button.ok": "Validez",
                "label.hintText.enter": "<strong>cliquer sur Entrer \u21b5<\/strong>",
                "label.hintText.multipleSelection": "Choisissez autant que possible",
                "block.dropdown.placeholder": "Sélectionner une option",
                "block.dropdown.noSuggestions": "No Suggestions!",
                "block.shortText.placeholder": "Entrez votre r\u00e9ponse",
                "block.longText.placeholder": "Entrez votre r\u00e9ponse",
                "block.longText.hint": "Faites <strong>Shift \u21e7 + Enter \u21b5<\/strong> pour passer à la ligne",
                "block.number.placeholder": "Passez une valeur en chiffre",
                "block.email.placeholder": "exemple@mail.com",
                "block.defaultThankYouScreen.label": "Nous vous remercions pour votre inscription. Nous vous contacterons dans 72h !<br><a style=\"font-size: 19px;\" href=\"\/\">Allez à l'accueil<\/a>",
                "label.hintText.key": "*",
                "label.yes.default": "Yes",
                "label.no.default": "No",
                "label.progress.percent": "{{"progress:percent"}}% completed",
                "label.errorAlert.required": "Ce champ doit être rempli!",
                "label.errorAlert.date": "Invalid date!",
                "label.errorAlert.number": "Seulement des nombre!",
                "label.errorAlert.selectionRequired": "Please make at least one selection!",
                "label.errorAlert.email": "Email non valide!",
                "label.errorAlert.url": "Invalid url!",
                "label.errorAlert.range": "Please enter a number between {{"attribute:min"}} and {{"attribute:max"}}",
                "label.errorAlert.minNum": "Entrer un valeur de {\{attribute:min\}} chiffre",
                "label.errorAlert.maxNum": "Please enter a number lower than {{"attribute:max"}}",
                "label.errorAlert.maxCharacters": "Maximum characters reached!",
                "label.submitBtn": "Soumettre",
                "label.errorAlert.noConnection": "Can't connect to the server right now!",
                "label.errorAlert.serverError": "Server error!"
            },
            "theme": {
                "backgroundColor": "rgba(198, 186, 170, 1)",
                "buttonsBgColor": "rgba(49, 49, 49, 1)",
                "errorsBgColor": "#f7e6e6",
                "formFooterBgColor": {
                    "lg": "transparent",
                    "sm": "transparent"
                },
                "questionsColor": "#313131",
                "answersColor": "#313131",
                "buttonsFontColor": "#fefefe",
                "font": "Roboto",
                "fontSize": {
                    "lg": "20px",
                    "sm": "16px"
                },
                "fontLineHeight": {
                    "lg": "28px",
                    "sm": "24px"
                },
                "backgroundImageFocalPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "logo": [],
                "typographyPreset": "md",
                "questionsLabelFont": "Inherit",
                "questionsLabelFontSize": {
                    "lg": "24px",
                    "sm": "20px"
                },
                "questionsLabelLineHeight": {
                    "lg": "32px",
                    "sm": "28px"
                },
                "questionsDescriptionFont": "Inherit",
                "questionsDescriptionFontSize": {
                    "lg": "20px",
                    "sm": "16px"
                },
                "questionsDescriptionLineHeight": {
                    "lg": "28px",
                    "sm": "24px"
                },
                "textInputAnswers": {
                    "lg": "30px",
                    "sm": "24px"
                },
                "buttonsFontSize": {
                    "lg": "20px",
                    "sm": "16px"
                },
                "buttonsPadding": {
                    "top": {
                        "lg": "9px",
                        "sm": "9px"
                    },
                    "bottom": {
                        "lg": "9px",
                        "sm": "9px"
                    },
                    "left": {
                        "lg": "23px",
                        "sm": "23px"
                    },
                    "right": {
                        "lg": "20px",
                        "sm": "20px"
                    }
                },
                "buttonsBorderRadius": 25,
                "buttonsBorderWidth": 0,
                "buttonsBorderColor": "#000",
                "errorsFontColor": "#af0404",
                "progressBarFillColor": "#000",
                "progressBarBgColor": "#ccc"
            },
            "themesList": [{
                "id": 1,
                "title": "",
                "properties": {
                    "backgroundColor": "rgba(198, 186, 170, 1)",
                    "buttonsBgColor": "rgba(49, 49, 49, 1)",
                    "errorsBgColor": "#f7e6e6",
                    "formFooterBgColor": {
                        "lg": "transparent",
                        "sm": "transparent"
                    },
                    "questionsColor": "#313131",
                    "answersColor": "#313131",
                    "buttonsFontColor": "#fefefe",
                    "font": "Roboto",
                    "fontSize": {
                        "lg": "20px",
                        "sm": "16px"
                    },
                    "fontLineHeight": {
                        "lg": "28px",
                        "sm": "24px"
                    },
                    "backgroundImageFocalPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "logo": [],
                    "typographyPreset": "md",
                    "questionsLabelFont": "Inherit",
                    "questionsLabelFontSize": {
                        "lg": "24px",
                        "sm": "20px"
                    },
                    "questionsLabelLineHeight": {
                        "lg": "32px",
                        "sm": "28px"
                    },
                    "questionsDescriptionFont": "Inherit",
                    "questionsDescriptionFontSize": {
                        "lg": "20px",
                        "sm": "16px"
                    },
                    "questionsDescriptionLineHeight": {
                        "lg": "28px",
                        "sm": "24px"
                    },
                    "textInputAnswers": {
                        "lg": "30px",
                        "sm": "24px"
                    },
                    "buttonsFontSize": {
                        "lg": "20px",
                        "sm": "16px"
                    },
                    "buttonsPadding": {
                        "top": {
                            "lg": "9px",
                            "sm": "9px"
                        },
                        "bottom": {
                            "lg": "9px",
                            "sm": "9px"
                        },
                        "left": {
                            "lg": "23px",
                            "sm": "23px"
                        },
                        "right": {
                            "lg": "20px",
                            "sm": "20px"
                        }
                    },
                    "buttonsBorderRadius": 25,
                    "buttonsBorderWidth": 0,
                    "buttonsBorderColor": "#000",
                    "errorsFontColor": "#af0404",
                    "progressBarFillColor": "#000",
                    "progressBarBgColor": "#ccc"
                }
            }],
            "settings": {
                "disableProgressBar": true,
                "disableWheelSwiping": false,
                "disableNavigationArrows": false,
                "animationDirection": "horizontal"
            },
            "customCSS": ""
        },
        "formId": "9"
    };
    </script>
    <script src='/wp-content/plugins/quillforms/includes/render/render.js?ver=2.1.0'
        id='quillforms-react-renderer-script-js'></script>
</body>

</html>