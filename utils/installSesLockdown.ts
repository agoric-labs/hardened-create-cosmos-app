import 'ses';

const consoleTaming =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
    ? 'unsafe'
    : 'safe';

lockdown({
  errorTaming: 'unsafe',
  overrideTaming: 'severe',
  consoleTaming,
});
