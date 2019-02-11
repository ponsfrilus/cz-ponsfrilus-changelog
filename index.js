"format cjs";

var engine = require('./engine');
var ponsfrilusCommitTypes = require('ponsfrilus-commit-types');

module.exports = engine({
  types: ponsfrilusCommitTypes.types,
  settings: ponsfrilusCommitTypes.settings,
  defaultType: process.env.CZ_TYPE,
  defaultScope: process.env.CZ_SCOPE,
  defaultSubject: process.env.CZ_SUBJECT,
  defaultBody: process.env.CZ_BODY,
  defaultIssues: process.env.CZ_ISSUES,
  defaultSeparator: process.env.CZ_SEPARATOR
});
