// Get the --testhost=... argument from the backstop command
const arguments = require('minimist')(process.argv.slice(2));
var TEST_HOST = "http://host.docker.internal:8080/#"

if (arguments.testhost) {
  TEST_HOST = `http://${arguments.testhost}/#`
}

module.exports = {
  "id": "nhsuk-frontend",
  "viewports": [
    {
      "label": "iPhone 5/SE",
      "width": 320,
      "height": 568
    },
    {
      "label": "iPhone 6-8",
      "width": 375,
      "height": 667
    },
    {
      "label": "iPad",
      "width": 768,
      "height": 1024
    },
    {
      "label": "Surface, iPad Pro",
      "width": 1366,
      "height": 768
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": [
    {
      "label": "A-Z navigation",
      "url": `${TEST_HOST}/example/nav-az`
    },
    {
      "label": "Action link",
      "url": `${TEST_HOST}/example/action-link`
    },
    {
      "label": "Back link",
      "url": `${TEST_HOST}/example/back-link`
    },
    {
      "label": "Breadcrumb",
      "url": `${TEST_HOST}/example/breadcrumb`
    },
    {
      "label": "Button",
      "url": `${TEST_HOST}/example/button`
    },
    {
      "label": "Button click",
      "url": `${TEST_HOST}/example/button`,
      "clickSelector": ".nhsuk-button",
      "viewports": [
        {
          "label": "Surface, iPad Pro",
          "width": 1366,
          "height": 768
        }
      ]
    },
    {
      "label": "Button as a link",
      "url": `${TEST_HOST}/example/button-link`
    },
    {
      "label": "Button disabled",
      "url": `${TEST_HOST}/example/button-disabled`
    },
    {
      "label": "Button secondary",
      "url": `${TEST_HOST}/example/button-secondary`
    },
    {
      "label": "Button reverse",
      "url": `${TEST_HOST}/example/button-reversed`
    },
    {
      "label": "Care card - Non urgent",
      "url": `${TEST_HOST}/example/care-card-non-urgent`
    },
    {
      "label": "Care card - Urgent",
      "url": `${TEST_HOST}/example/care-card-urgent`
    },
    {
      "label": "Care card - Immediate",
      "url": `${TEST_HOST}/example/care-card-immediate`
    },
    {
      "label": "Checkboxes",
      "url": `${TEST_HOST}/components/checkboxes/index.html`
    },
    {
      "label": "Checkboxes with hint text",
      "url": `${TEST_HOST}/components/checkboxes/hint.html`
    },
    {
      "label": "Checkboxes with disabled item",
      "url": `${TEST_HOST}/components/checkboxes/disabled.html`
    },
    {
      "label": "Checkboxes with legend as page heading",
      "url": `${TEST_HOST}/components/checkboxes/page-heading.html`
    },
    {
      "label": "Checkboxes with error message",
      "url": `${TEST_HOST}/components/checkboxes/error.html`
    },
    {
      "label": "Contents list",
      "url": `${TEST_HOST}/example/contents-list`
    },
    {
      "label": "Date input",
      "url": `${TEST_HOST}/components/date-input/index.html`
    },
    {
      "label": "Date input with multiple errors",
      "url": `${TEST_HOST}/components/date-input/multiple-errors.html`
    },
    {
      "label": "Details",
      "url": `${TEST_HOST}/example/details`,
      "clickSelector": ".nhsuk-details__summary"
    },
    {
      "label": "Do & Don't list",
      "url": `${TEST_HOST}/example/do-dont`
    },
    {
      "label": "Emergency alert",
      "url": `${TEST_HOST}/example/emergency-alert`
    },
    {
      "label": "Error message",
      "url": `${TEST_HOST}/example/error-text`
    },
    {
      "label": "Error summary",
      "url": `${TEST_HOST}/example/error-summary`
    },
    {
      "label": "Expander",
      "url": `${TEST_HOST}/example/expander`,
      "clickSelector": ".nhsuk-details__summary"
    },
    {
      "label": "Expander group",
      "url": `${TEST_HOST}/example/expander-group`,
      "clickSelector": ".nhsuk-details__summary"
    },
    {
      "label": "Feedback banner",
      "url": `${TEST_HOST}/components/feedback-banner/index.html`,
      "delay": 5000
    },
    {
      "label": "Footer",
      "url": `${TEST_HOST}/example/footer`
    },
    {
      "label": "Fieldset",
      "url": `${TEST_HOST}/example/fieldset`
    },
    {
      "label": "Fieldset as page heading",
      "url": `${TEST_HOST}/example/fieldset-heading`
    },
    {
      "label": "Fieldset with inputs",
      "url": `${TEST_HOST}/components/fieldset/with-inputs.html`
    },
    {
      "label": "Header",
      "url": `${TEST_HOST}/example/header`
    },
    {
      "label": "Header with logo only",
      "url": `${TEST_HOST}/example/header-logo`
    },
    {
      "label": "Header with service name and search",
      "url": `${TEST_HOST}/components/header/header-service-name.html`
    },
    {
      "label": "Header transactional",
      "url": `${TEST_HOST}/components/header/header-transactional.html`
    },
    {
      "label": "Header transactional with service name",
      "url": `${TEST_HOST}/components/header/header-transactional-service-name.html`
    },
    {
      "label": "Header transactional with a long service name",
      "url": `${TEST_HOST}/components/header/header-transactional-long-service-name.html`
    },
    {
      "label": "Header with navigation",
      "url": `${TEST_HOST}/components/header/header-navigation.html`
    },
    {
      "label": "Header with navigation open",
      "url": `${TEST_HOST}/components/header/header-navigation.html`,
      "clickSelector": "#toggle-menu",
      "viewports": [
        {
          "label": "iPhone 5/SE",
          "width": 320,
          "height": 568
        },
        {
          "label": "iPhone 6-8",
          "width": 375,
          "height": 667
        },
        {
          "label": "iPad",
          "width": 768,
          "height": 1024
        }
      ]
    },
    {
      "label": "Header with search",
      "url": `${TEST_HOST}/components/header/header-search.html`
    },
    {
      "label": "Header with search open",
      "url": `${TEST_HOST}/components/header/header-search.html`,
      "clickSelector": "#toggle-search",
      "viewports": [
        {
          "label": "iPhone 5/SE",
          "width": 320,
          "height": 568
        },
        {
          "label": "iPhone 6-8",
          "width": 375,
          "height": 667
        }
      ]
    },
    {
      "label": "Hero",
      "url": `${TEST_HOST}/components/hero/index.html`
    },
    {
      "label": "Hero with image",
      "url": `${TEST_HOST}/components/hero/hero-image.html`
    },
    {
      "label": "Hero with image and content",
      "url": `${TEST_HOST}/components/hero/hero-image-content.html`
    },
    {
      "label": "Hint",
      "url": `${TEST_HOST}/components/hint/index.html`
    },
    {
      "label": "Images",
      "url": `${TEST_HOST}/components/images/index.html`
    },
    {
      "label": "Input",
      "url": `${TEST_HOST}/components/input/index.html`
    },
    {
      "label": "Input with hint text",
      "url": `${TEST_HOST}/components/input/hint.html`
    },
    {
      "label": "Input with error message",
      "url": `${TEST_HOST}/components/input/error.html`
    },
    {
      "label": "Input with width modifier",
      "url": `${TEST_HOST}/components/input/custom-width.html`
    },
    {
      "label": "Inset text",
      "url": `${TEST_HOST}/components/inset-text/index.html`
    },
    {
      "label": "Label",
      "url": `${TEST_HOST}/components/label/index.html`
    },
    {
      "label": "Label with bold text",
      "url": `${TEST_HOST}/components/label/index.html`
    },
    {
      "label": "Label as page heading",
      "url": `${TEST_HOST}/components/label/page-heading.html`
    },
    {
      "label": "List panel",
      "url": `${TEST_HOST}/components/list-panel/index.html`
    },
    {
      "label": "Pagination",
      "url": `${TEST_HOST}/components/pagination/index.html`
    },
    {
      "label": "Panel",
      "url": `${TEST_HOST}/components/panel/index.html`
    },
    {
      "label": "Panel with label",
      "url": `${TEST_HOST}/components/panel/panel-with-label.html`
    },
    {
      "label": "Panel grey",
      "url": `${TEST_HOST}/components/panel/panel-grey.html`
    },
    {
      "label": "Panel group",
      "url": `${TEST_HOST}/components/panel/panel-group.html`
    },
    {
      "label": "Promo",
      "url": `${TEST_HOST}/components/promo/index.html`
    },
    {
      "label": "Promo with image",
      "url": `${TEST_HOST}/components/promo/promo-with-image.html`
    },
    {
      "label": "Promo small",
      "url": `${TEST_HOST}/components/promo/promo-small.html`
    },
    {
      "label": "Promo with no description",
      "url": `${TEST_HOST}/components/promo/promo-no-description.html`
    },
    {
      "label": "Promo group",
      "url": `${TEST_HOST}/components/promo/promo-group.html`
    },
    {
      "label": "Radios",
      "url": `${TEST_HOST}/components/radios/index.html`
    },
    {
      "label": "Radios inline",
      "url": `${TEST_HOST}/components/radios/inline.html`
    },
    {
      "label": "Radios disabled",
      "url": `${TEST_HOST}/components/radios/disabled.html`
    },
    {
      "label": "Radios with a divider",
      "url": `${TEST_HOST}/components/radios/divider.html`
    },
    {
      "label": "Radios with hint text",
      "url": `${TEST_HOST}/components/radios/hint.html`
    },
    {
      "label": "Radios without fieldset",
      "url": `${TEST_HOST}/components/radios/without-fieldset.html`
    },
    {
      "label": "Radios with hint text and error message",
      "url": `${TEST_HOST}/components/radios/hint-error.html`
    },
    {
      "label": "Review date",
      "url": `${TEST_HOST}/components/review-date/index.html`
    },
    {
      "label": "Select",
      "url": `${TEST_HOST}/components/select/index.html`
    },
    {
      "label": "Select with hint text and error message",
      "url": `${TEST_HOST}/components/select/hint-error.html`
    },
    {
      "label": "Summary list",
      "url": `${TEST_HOST}/components/summary-list/index.html`
    },
    {
      "label": "Summary list without actions",
      "url": `${TEST_HOST}/components/summary-list/without-actions.html`
    },
    {
      "label": "Summary list without border",
      "url": `${TEST_HOST}/components/summary-list/without-border.html`
    },
    {
      "label": "Table",
      "url": `${TEST_HOST}/components/tables/index.html`
    },
    {
      "label": "Table as panel",
      "url": `${TEST_HOST}/components/tables/tables-panel.html`
    },
    {
      "label": "Textarea",
      "url": `${TEST_HOST}/components/textarea/index.html`
    },
    {
      "label": "Textarea with error message",
      "url": `${TEST_HOST}/components/textarea/error.html`
    },
    {
      "label": "Warning callout",
      "url": `${TEST_HOST}/components/warning-callout/index.html`
    }
  ],
  "paths": {
    "bitmaps_reference": "tests/backstop/bitmaps_reference",
    "bitmaps_test": "tests/backstop/bitmaps_test",
    "engine_scripts": "tests/backstop/engine_scripts",
    "html_report": "tests/backstop/html_report",
    "ci_report": "tests/backstop/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
