const crypto = require("crypto");
const bcrypt = require("bcrypt");

// const hash = (pw) => {
//   return crypto.createHash("sha512").update(pw).digest("base64");
// };

// console.log(hash("123"));

// const saltCrypto = (password) => {
//   hashSalt = "20";
//   return crypto
//     .pbkdf2Sync(password, hashSalt, 100, 64, "sha512")
//     .toString("base64");
// };

// console.log(saltCrypto("dkfdsw"));
async function salt() {
  const salt = await bcrypt.genSalt(5);
  console.log(salt);
}

salt();

// const bcryptHash = async (pw) => {
//   return bcrypt.hashSync(pw, salt);
// };

// bcryptHash("1234");
