import { Categories, Weight } from "./internals/types";

export const categories: Categories = {
  "classname-strings": {
    name: "Classname string construction",
    tags: [
      { tag: "class", weight: Weight.HIGH },
      { tag: "classnames", weight: Weight.HIGH },
      { tag: "string", weight: Weight.MID },
      { tag: "construct", weight: Weight.MID },
      { tag: "conditional", weight: Weight.MID },
    ],
    similar: ["clsx", "classnames", "classcat", "merge-class-names"],
  },

  clipboard: {
    name: "Clipboard Utilities",
    tags: [
      { tag: "clipboard", weight: Weight.MAX },
      { tag: "copy", weight: Weight.MID },
      { tag: "cut", weight: Weight.MID },
    ],
    similar: [
      "clipboard",
      "clipboardy",
      "clipboard-copy",
      "copy-text-to-clipboard",
      "clipboard-polyfill",
    ],
  },

  "css-in-js": {
    name: "CSS in JS libraries",
    tags: [
      { tag: "css js", weight: Weight.NORMAL },
      { tag: "styles", weight: Weight.NORMAL },
      { tag: "inline", weight: Weight.NORMAL },
      { tag: "in", weight: Weight.MID },
    ],
    similar: ["styled-components", "jss", "emotion", "linaria"],
  },

  "color-manipulation": {
    name: "Color parsing and manipulation",
    tags: [{ tag: "color convert parse manipulate", weight: Weight.NORMAL }],
    similar: ["chroma-js", "color", "tinycolor2", "colors.js", "color2k"],
  },

  cookie: {
    name: "Cookie Manipulation",
    tags: [
      { tag: "cookie", weight: Weight.MAX },
      { tag: "manipulate", weight: Weight.NORMAL },
      { tag: "http", weight: Weight.MID },
      { tag: "client", weight: Weight.MID },
      { tag: "parse", weight: Weight.MID },
      { tag: "parser", weight: Weight.MID },
      { tag: "jar", weight: Weight.NORMAL },
      { tag: "browser", weight: Weight.SMALL },
    ],
    similar: ["cookie", "tough-cookie", "js-cookie", "tiny-cookie"],
  },

  "date-nlp": {
    name: "Natural language date-time utilities",
    tags: [
      { tag: "date", weight: Weight.HIGH },
      { tag: "time", weight: Weight.HIGH },
      { tag: "parse", weight: Weight.MID },
      { tag: "parser", weight: Weight.MID },
      { tag: "nlp", weight: Weight.HIGH },
      { tag: "natural language", weight: Weight.HIGH },
      { tag: "format", weight: Weight.MID },
      { tag: "human", weight: Weight.MID },
    ],
    similar: ["chrono-node", "its-a-date", "parse-messy-time"],
  },

  "deep-equality": {
    name: "Deep Equality Check",
    tags: [
      { tag: "deep equal", weight: Weight.NORMAL },
      { tag: "object", weight: Weight.MID },
      { tag: "compare", weight: Weight.NORMAL },
      { tag: "isequal", weight: Weight.HIGH },
    ],
    similar: ["fast-deep-equal", "deep-eql", "deep-equal", "lodash.isequal"],
  },

  "drag-and-drop": {
    name: "Drag & Drop Libraries",
    tags: [
      { tag: "drag drop", weight: Weight.NORMAL },
      { tag: "sort", weight: Weight.MID },
      { tag: "order", weight: Weight.MID },
    ],
    similar: [
      "@shopify/draggable",
      "dragula",
      "muuri",
      "sortablejs",
      "draggabilly",
      "interactjs",
    ],
  },

  "excel-parsers": {
    name: "Excel File Readers, Manipulators & Writers",
    tags: [
      { tag: "excel", weight: Weight.MAX },
      { tag: "read", weight: Weight.SMALL },
      { tag: "write", weight: Weight.SMALL },
      { tag: "manipulate", weight: Weight.SMALL },
      { tag: "parse", weight: Weight.SMALL },
    ],
    similar: ["xlsx", "exceljs", "node-xlsx", "excel4node"],
  },

  "full-text-search": {
    name: "Text search",
    tags: [
      { tag: "search", weight: Weight.NORMAL },
      { tag: "solr", weight: Weight.HIGH },
      { tag: "fuzzy", weight: Weight.NORMAL },
      { tag: "text", weight: Weight.NORMAL },
    ],
    similar: ["flexsearch", "lunr", "wade", "js-search", "fuse.js"],
  },

  "fetch-polyfill": {
    name: "Fetch polyfills",
    tags: [
      { tag: "fetch", weight: Weight.HIGH },
      { tag: "polyfill", weight: Weight.NORMAL },
      { tag: "xhr", weight: Weight.NORMAL },
      { tag: "http", weight: Weight.MID },
      { tag: "request", weight: Weight.MID },
    ],
    similar: ["whatwg-fetch", "node-fetch", "unfetch", "make-fetch-happen"],
  },

  "general-purpose-date-time": {
    name: "General purpose date-time utilities",
    tags: [
      { tag: "date", weight: Weight.HIGH },
      { tag: "time", weight: Weight.HIGH },
      { tag: "parse", weight: Weight.MID },
      { tag: "parser", weight: Weight.MID },
      { tag: "format", weight: Weight.MID },
    ],
    similar: ["moment", "luxon", "dayjs", "date-fns"],
  },

  "general-purpose-3d": {
    name: "General purpose 3D libraries",
    tags: [
      { tag: "3d", weight: Weight.MAX },
      { tag: "webgl", weight: Weight.MAX },
      { tag: "gl", weight: Weight.HIGH },
    ],
    similar: ["three", "babylonjs"],
  },

  "general-purpose-animation": {
    name: "General purpose animation libraries",
    tags: [
      { tag: "animation", weight: Weight.HIGH },
      { tag: "tween", weight: Weight.NORMAL },
      { tag: "easing", weight: Weight.MID },
      { tag: "morph", weight: Weight.MID },
      { tag: "transform", weight: Weight.NORMAL },
      { tag: "motion", weight: Weight.NORMAL },
      { tag: "svg", weight: Weight.MID },
      { tag: "physics", weight: Weight.MID },
      { tag: "dom", weight: Weight.MID },
    ],
    similar: ["gsap", "animejs", "velocity-animate", "popmotion"],
  },

  "general-purpose-charting": {
    name: "General purpose Charting libraries",
    tags: [
      { tag: "dom", weight: Weight.MID },
      { tag: "visualization", weight: Weight.HIGH },
      { tag: "dataviz", weight: Weight.HIGH },
      { tag: "svg", weight: Weight.SMALL },
      { tag: "canvas", weight: Weight.MID },
      { tag: "charts", weight: Weight.MAX },
      { tag: "data", weight: Weight.MID },
    ],
    similar: [
      "d3",
      "chart.js",
      "echarts",
      "chartist",
      "frappe-charts",
      "highcharts",
      "uplot",
    ],
  },

  "graphql-client": {
    name: "GraphQL Clients",
    tags: [
      { tag: "graphql", weight: Weight.HIGH },
      { tag: "client", weight: Weight.MID },
      { tag: "js", weight: Weight.MID },
      { tag: "javascript", weight: Weight.MID },
    ],
    similar: [
      "@apollo/client",
      "graphql.js",
      "lokka",
      "graphql",
      "relay-runtime",
      "urql",
    ],
  },

  "html-sanitization": {
    name: "HTML Sanitization",
    tags: [
      { tag: "html", weight: Weight.NORMAL },
      { tag: "dom", weight: Weight.NORMAL },
      { tag: "sanitize", weight: Weight.HIGH },
      { tag: "untrusted", weight: Weight.SMALL },
      { tag: "escape", weight: Weight.MID },
      { tag: "filter", weight: Weight.NORMAL },
      { tag: "xss", weight: Weight.HIGH },
      { tag: "whitelist", weight: Weight.SMALL },
    ],
    similar: ["sanitize-html", "xss", "dompurify", "sanitizer"],
  },

  i18n: {
    name: "Internationalization",
    tags: [
      { tag: "i18n", weight: Weight.HIGH },
      { tag: "intl", weight: Weight.HIGH },
      { tag: "internation", weight: Weight.HIGH },
      { tag: "language", weight: Weight.MID },
    ],
    similar: ["fbt", "globalize", "i18next", "node-polyglot", "@lingui/core"],
  },

  "node-http-request": {
    name: "HTTP client libraries for Node.js",
    tags: [
      { tag: "http", weight: Weight.NORMAL },
      { tag: "get", weight: Weight.NORMAL },
      { tag: "post", weight: Weight.NORMAL },
      { tag: "ajax", weight: Weight.HIGH },
      { tag: "url", weight: Weight.SMALL },
      { tag: "request", weight: Weight.HIGH },
      { tag: "agent", weight: Weight.MID },
      { tag: "xhr", weight: Weight.NORMAL },
      { tag: "node node.js", weight: Weight.NORMAL },
    ],
    similar: ["got", "phin", "axios", "node-fetch", "superagent"],
  },

  "browser-http-request": {
    name: "HTTP client libraries for Browser",
    tags: [
      { tag: "http", weight: Weight.NORMAL },
      { tag: "get", weight: Weight.NORMAL },
      { tag: "post", weight: Weight.NORMAL },
      { tag: "ajax", weight: Weight.HIGH },
      { tag: "url", weight: Weight.SMALL },
      { tag: "request", weight: Weight.HIGH },
      { tag: "agent", weight: Weight.MID },
      { tag: "xhr", weight: Weight.NORMAL },
      { tag: "browser", weight: Weight.NORMAL },
    ],
    similar: ["axios", "ky", "superagent", "whatwg-fetch", "unfetch"],
  },

  "icu-message-fromatter": {
    name: "ICU message string formatters",
    tags: [
      { tag: "icu", weight: Weight.HIGH },
      { tag: "message", weight: Weight.NORMAL },
      { tag: "format", weight: Weight.MID },
      { tag: "plural", weight: Weight.MID },
      { tag: "gender", weight: Weight.MID },
      { tag: "parse", weight: Weight.SMALL },
    ],
    similar: ["messageformat", "intl-messageformat"],
  },

  "image-color-extraction": {
    name: "Image color extraction",
    tags: [
      { tag: "color", weight: Weight.HIGH },
      { tag: "image", weight: Weight.HIGH },
      { tag: "extract", weight: Weight.HIGH },
      { tag: "dominant", weight: Weight.HIGH },
      { tag: "palette", weight: Weight.HIGH },
      { tag: "pixels", weight: Weight.MID },
    ],
    similar: [
      "img-color-extractor",
      "color-thief-browser",
      "colority",
      "node-vibrant",
    ],
  },

  "immutable-data-structures": {
    name: "Immutable Data",
    tags: [
      { tag: "immutable", weight: Weight.HIGH },
      { tag: "persistent", weight: Weight.NORMAL },
      { tag: "functional", weight: Weight.MID },
      { tag: "collection", weight: Weight.NORMAL },
      { tag: "structure", weight: Weight.NORMAL },
      { tag: "tree", weight: Weight.MID },
      { tag: "freeze", weight: Weight.MID },
      { tag: "cursor", weight: Weight.MID },
    ],
    similar: [
      "immutable",
      "seamless-immutable",
      "immutability-helper",
      "baobab",
    ],
  },

  "lazy-load-content": {
    name: "Lazy Loading Content",
    tags: [
      { tag: "lazy", weight: Weight.NORMAL },
      { tag: "load", weight: Weight.NORMAL },
      { tag: "lazyload", weight: Weight.HIGH },
      { tag: "image", weight: Weight.NORMAL },
      { tag: "iframe", weight: Weight.MID },
      { tag: "video", weight: Weight.MID },
    ],
    similar: ["lazysizes", "lozad", "vanilla-lazyload"],
  },

  "markdown-parser": {
    name: "Markdown parsers",
    tags: [
      { tag: "markdown", weight: Weight.HIGH },
      { tag: "parse", weight: Weight.NORMAL },
      { tag: "parser", weight: Weight.NORMAL },
      { tag: "ast", weight: Weight.MID },
      { tag: "abstract syntax tree", weight: Weight.MID },
      { tag: "md", weight: Weight.HIGH },
    ],
    similar: ["marked", "markdown-it", "showdown", "remarkable", "snarkdown"],
  },

  memoization: {
    name: "Memoization",
    tags: [
      { tag: "memoize", weight: Weight.HIGH },
      { tag: "cache", weight: Weight.NORMAL },
      { tag: "performance", weight: Weight.MID },
    ],
    similar: [
      "memoize",
      "memoize-one",
      "lodash.memoize",
      "mem",
      "fast-memoize",
    ],
  },

  "number-manipulation": {
    name: "Number and Currency Formatting",
    tags: [
      { tag: "format", weight: Weight.NORMAL },
      { tag: "manipulate", weight: Weight.NORMAL },
      { tag: "currency", weight: Weight.HIGH },
      { tag: "money", weight: Weight.HIGH },
      { tag: "number", weight: Weight.HIGH },
    ],
    similar: ["numeral", "numbro", "accounting", "currency.js", "dinero.js"],
  },

  "pdf-generator": {
    name: "Client-side PDF Creation",
    tags: [
      { tag: "pdf", weight: Weight.HIGH },
      { tag: "generate", weight: Weight.MID },
      { tag: "create", weight: Weight.MID },
      { tag: "document", weight: Weight.MID },
      { tag: "client", weight: Weight.NORMAL },
      { tag: "browser", weight: Weight.NORMAL },
    ],
    similar: ["jspdf", "pdfkit", "pdfmake", "@react-pdf/renderer"],
  },

  "promise-polyfill": {
    name: "Promise polyfills",
    tags: [
      { tag: "promise", weight: Weight.HIGH },
      { tag: "polyfill", weight: Weight.MID },
      { tag: "es6", weight: Weight.MID },
      { tag: "aplus", weight: Weight.HIGH },
      { tag: "async", weight: Weight.MID },
      { tag: "implementation", weight: Weight.MID },
    ],
    similar: [
      "promise",
      "es6-promise",
      "promise-polyfill",
      "es6-promise-polyfill",
    ],
  },

  "react-animation": {
    name: "React based animation",
    tags: [
      { tag: "react", weight: Weight.NORMAL },
      { tag: "animation", weight: Weight.HIGH },
      { tag: "transform", weight: Weight.NORMAL },
      { tag: "motion", weight: Weight.NORMAL },
    ],
    similar: ["react-spring", "framer-motion", "react-motion", "react-move"],
  },

  "react-autocomplete": {
    name: "React based autocomplete components",
    tags: [
      { tag: "react", weight: Weight.NORMAL },
      { tag: "autocomplete", weight: Weight.NORMAL },
      { tag: "autosuggest", weight: Weight.NORMAL },
      { tag: "typeahead", weight: Weight.NORMAL },
    ],
    similar: [
      "react-autosuggest",
      "downshift",
      "react-autowhatever",
      "react-autocomplete",
      "react-select",
    ],
  },

  "react-head-meta": {
    name: "React based meta tags management",
    tags: [
      { tag: "react", weight: Weight.NORMAL },
      { tag: "head", weight: Weight.MID },
      { tag: "document", weight: Weight.MID },
      { tag: "title", weight: Weight.MID },
      { tag: "meta tags", weight: Weight.MID },
    ],
    similar: ["react-helment", "react-meta-tags", "react-document-title"],
  },

  "react-i18n": {
    name: "React based internationalization",
    tags: [
      { tag: "react", weight: Weight.NORMAL },
      { tag: "i18n", weight: Weight.HIGH },
      { tag: "intl", weight: Weight.HIGH },
      { tag: "internation", weight: Weight.HIGH },
    ],
    similar: [
      "react-intl",
      "react-i18next",
      "react-intl-universal",
      "eo-locale",
      "@lingui/react",
    ],
  },

  "react-form": {
    name: "React based form builders & validators",
    tags: [
      { tag: "react", weight: Weight.NORMAL },
      { tag: "redux", weight: Weight.MID },
      { tag: "form", weight: Weight.HIGH },
      { tag: "validate", weight: Weight.SMALL },
    ],
    similar: [
      "formik",
      "react-final-form",
      "react-form",
      "formsy-react",
      "react-hook-form",
    ],
  },

  "schema-validation": {
    name: "JSON schema validation",
    tags: [
      { tag: "JSON", weight: Weight.MID },
      { tag: "object", weight: Weight.MID },
      { tag: "schema", weight: Weight.NORMAL },
      { tag: "validator", weight: Weight.HIGH },
      { tag: "JSON", weight: Weight.NORMAL },
      { tag: "assert", weight: Weight.SMALL },
      { tag: "check", weight: Weight.SMALL },
      { tag: "structure", weight: Weight.MID },
    ],
    similar: ["jsonschema", "joi", "ajv", "superstruct", "yup", "validate.js"],
  },

  "querystring-parser": {
    name: "Query String Parsers",
    tags: [
      { tag: "query string", weight: Weight.NORMAL },
      { tag: "querystring", weight: Weight.HIGH },
      { tag: "parse", weight: Weight.MID },
      { tag: "parser", weight: Weight.MID },
      { tag: "url", weight: Weight.MID },
      { tag: "search params", weight: Weight.MID },
      { tag: "qs", weight: Weight.MID },
      { tag: "parameter", weight: Weight.NORMAL },
      { tag: "params", weight: Weight.NORMAL },
    ],
    similar: ["qs", "query-string", "querystringify", "querystring"],
  },

  "rich-text-editors": {
    name: "Rich Text Editors",
    tags: [
      {
        tag: "richtext rich text editor WYSIWYG contenteditable",
        weight: Weight.NORMAL,
      },
    ],
    similar: ["slate", "quill", "draft-js", "medium-editor", "froala-editor"],
  },

  "site-tour": {
    name: "Site Tours",
    tags: [
      { tag: "walkthrough", weight: Weight.NORMAL },
      { tag: "focus", weight: Weight.MID },
      { tag: "tour", weight: Weight.NORMAL },
      { tag: "guide", weight: Weight.NORMAL },
      { tag: "user", weight: Weight.SMALL },
      { tag: "tutorial", weight: Weight.NORMAL },
      { tag: "step", weight: Weight.MID },
    ],
    similar: ["driver.js", "shepherd.js", "intro.js"],
  },

  "state-management": {
    name: "State Management Libraries",
    tags: [
      { tag: "state management", weight: Weight.NORMAL },
      { tag: "copy-on-write", weight: Weight.MID },
      { tag: "immutable", weight: Weight.MID },
      { tag: "flux", weight: Weight.HIGH },
      { tag: "reducer", weight: Weight.HIGH },
    ],
    similar: ["mobx", "redux", "immer", "freactal", "xstate"],
  },

  "svg-manipulation": {
    name: "SVG manipulation libraries",
    tags: [
      { tag: "svg", weight: Weight.HIGH },
      { tag: "vector", weight: Weight.HIGH },
      { tag: "manipulate", weight: Weight.NORMAL },
      { tag: "graphics", weight: Weight.MID },
      { tag: "animation", weight: Weight.MID },
      { tag: "javascript", weight: Weight.SMALL },
      { tag: "two dimensional", weight: Weight.MID },
    ],
    similar: ["raphael", "snapsvg", "two.js"],
  },

  "timezone-formatting": {
    name: "Timezone Formatting",
    tags: [
      { tag: "date", weight: Weight.NORMAL },
      { tag: "time", weight: Weight.NORMAL },
      { tag: "timezone", weight: Weight.MAX },
      { tag: "parse", weight: Weight.MID },
      { tag: "format", weight: Weight.MID },
    ],
    similar: [
      "moment-timezone",
      "date-time-format-timezone",
      "spacetime",
      "date-fns-timezone",
    ],
  },

  uuid: {
    name: "Unique ID generators",
    tags: [
      { tag: "uuid", weight: Weight.HIGH },
      { tag: "guid", weight: Weight.HIGH },
      { tag: "random", weight: Weight.MID },
      { tag: "unique", weight: Weight.NORMAL },
      { tag: "id", weight: Weight.NORMAL },
    ],
    similar: ["uuid", "shortid", "nanoid", "cuid"],
  },

  "vanilla-tooltip": {
    name: "Tooltip Libraries",
    tags: [
      { tag: "tooltip", weight: Weight.MAX },
      { tag: "popover", weight: Weight.NORMAL },
      { tag: "hint", weight: Weight.NORMAL },
    ],
    similar: ["tooltip.js", "tippy.js", "balloon-css", "hint.css", "microtip"],
  },

  "vanilla-carousel": {
    name: "Vanilla JS Sliders & Carousels",
    tags: [
      { tag: "touch swipe", weight: Weight.MID },
      { tag: "vanilla", weight: Weight.NORMAL },
      { tag: "carousel", weight: Weight.MAX },
      { tag: "slider", weight: Weight.MAX },
    ],
    similar: ["glider-js", "slick-carousel", "swiper", "flickity"],
  },

  "virtual-dom-engine": {
    name: "Virtual DOM implementations",
    tags: [
      { tag: "virtual", weight: Weight.NORMAL },
      { tag: "dom", weight: Weight.NORMAL },
      { tag: "render", weight: Weight.NORMAL },
      { tag: "dominant", weight: Weight.HIGH },
      { tag: "palette", weight: Weight.HIGH },
      { tag: "pixels", weight: Weight.MID },
    ],
    similar: ["hyperhtml", "snabbdom", "virtual-dom"],
  },

  "vue-carousel": {
    name: "Vue JS Sliders & Carousels",
    tags: [
      { tag: "vue", weight: Weight.HIGH },
      { tag: "touch swipe", weight: Weight.MID },
      { tag: "carousel", weight: Weight.NORMAL },
      { tag: "slider", weight: Weight.NORMAL },
    ],
    similar: [
      "vue-awesome-swiper",
      "vue-carousel",
      "vue-slick",
      "vue-tiny-slider",
    ],
  },
};