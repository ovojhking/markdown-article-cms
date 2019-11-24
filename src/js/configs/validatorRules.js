const specialCharacters = new RegExp('^[\u4e00-\u9fa5_a-zA-Z0-9]+$');
const allowOnlyLowerCaseNumberDash = new RegExp('^[-a-z0-9]+$');

export {specialCharacters, allowOnlyLowerCaseNumberDash};
