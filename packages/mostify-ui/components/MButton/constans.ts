const primaryColors = [
  "var(--m-primary-600)",
  "var(--m-primary-500)",
  "var(--m-primary-700)"
];

const dangerColors = [
  "var(--m-error-600)",
  "var(--m-error-500)",
  "var(--m-error-700)"
];

const warningColors = [
  "var(--m-warning-600)",
  "var(--m-warning-500)",
  "var(--m-warning-700)"
];

const successColors = [
  "var(--m-success-600)",
  "var(--m-success-500)",
  "var(--m-success-700)"
];
export const bgColorMap = new Map([
  ["primary", primaryColors],
  ["danger", dangerColors],
  ["warning", warningColors],
  ["success", successColors],
  [
    "default",
    ["var(--m-theme-50)", "var(--m-primary-200)", "var(--m-primary-300)"]
  ],
  [
    'text', ['', 'rgba(0,0,0,.06)', 'rgba(0,0,0,.25)']
  ],

  ['link', ['', 'var(--m-primary-100)', 'var(--m-primary-300)']],
]);

export const bgColorLightMap = new Map([
  ["primary", ['var(--m-primary-200)', 'var(--m-primary-100)', 'var(--m-primary-300)']],
  ["danger", ['var(--m-error-200)', 'var(--m-error-100)', 'var(--m-error-300)']],
  ["warning", ['var(--m-warning-200)', 'var(--m-warning-100)', 'var(--m-warning-300)']],
  ["success", ['var(--m-success-200)', 'var(--m-success-100)', 'var(--m-success-300)']],
  [
    "default",
    ["var(--m-theme-50)", "var(--m-primary-100)", "var(--m-primary-300)"]
  ],
  [
    'text', ['', 'rgba(0,0,0,.06)', 'rgba(0,0,0,.25)']
  ],

  ['link', ['', 'var(--m-primary-200)', 'var(--m-primary-300)']],
]);


export const colorMap = new Map([
  ['primary', ['var(--m-theme-50)', 'var(--m-theme-50)', 'var(--m-theme-50)']],
  ['danger', ['var(--m-theme-50)', 'var(--m-theme-50)', 'var(--m-theme-50)']],
  ['success', ['var(--m-theme-50)', 'var(--m-theme-50)', 'var(--m-theme-50)']],
  ['warning', ['var(--m-theme-50)', 'var(--m-theme-50)', 'var(--m-theme-50)']],
  ['default', ['var(--m-theme-900)', 'var(--m-primary-600)', 'var(--m-primary-600)']],
  ['text', ['var(--m-theme-900)','var(--m-theme-900)','var(--m-theme-900)']],
  ['link', ['var(--m-primary-600)', 'var(--m-primary-600)', 'var(--m-primary-700)']]
])

export const colorLightMap = new Map([
  ['primary', ['var(--m-primary-600)', 'var(--m-primary-600)', 'var(--m-primary-700)']],
  ['danger', ['var(--m-error-600)', 'var(--m-error-600)', 'var(--m-error-700)']],
  ['success', ['var(--m-success-600)', 'var(--m-success-600)', 'var(--m-success-700)']],
  ['warning', ['var(--m-warning-600)', 'var(--m-warning-600)', 'var(--m-warning-700)']],
  ['default', ['var(--m-theme-900)', 'var(--m-primary-600)', 'var(--m-primary-700)']],
  ['text', ['', 'var(--m-theme-900)', 'var(--m-theme-900)']],
  ['link', ['var(--m-primary-600)', 'var(--m-primary-600)', 'var(--m-primary-700)']]
])

export const borderColorMap = new Map([
  ["primary", primaryColors],
  ["danger", dangerColors],
  ["warning", warningColors],
  ["success", successColors],
  [
    "default",
    ["var(--m-theme-400)", "var(--m-primary-600)", "var(--m-primary-700)"]
  ],
  [
    'text', ['', '', '']
  ],

  ['link', ['', '', '']],
])