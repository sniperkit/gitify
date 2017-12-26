export default {
  // GitHub OAuth
  AUTH_SCOPE: ['user:email', 'notifications'],

  DEFAULT_AUTH_OPTIONS: {
    hostname: 'github.com',
    clientId: 'bfdf49a4bbc3e698af57',
    clientSecret: '5faa9a2c48604d1c534a67474fd5c24b738f3120',
  },

  REPO_SLUG: 'sniperkit/gitify',

  // Storage
  STORAGE_KEY: 'gitify-storage',

  // Awesome all read messages
  ALLREAD_MESSAGES: [
    'Wow! You did it.',
    "That's amazing!",
    'Yes! All read.',
    'All gone! Nice work!',
    'Yay! Good news.',
  ],

  ALLREAD_EMOJIS: [
    ':wink:',
    ':tada:',
    ':tiger:',
    ':see_no_evil:',
    ':balloon:',
    ':confetti_ball:',
    ':clap:',
    ':circus_tent:',
    ':spaghetti:',
    ':ok_hand:',
  ],

  ERROR_EMOJIS: [
    ':pensive:',
    ':disappointed:',
    ':triumph:',
    ':scream:',
    ':cry:',
  ],
};
