"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var profiles_exports = {};
__export(profiles_exports, {
  default: () => profiles_default
});
module.exports = __toCommonJS(profiles_exports);
var import_profile2 = __toESM(require("./models/mongo/profile"));
const bcrypt = require("bcrypt");
function index() {
  return import_profile2.default.find();
}
function get(email) {
  return import_profile2.default.find({ email }).then((list) => list[0]).catch((err) => {
    throw `${email} Not Found`;
  });
}
async function create(profile) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(profile.password, salt);
  profile.password = hashedPassword;
  const p = new import_profile2.default(profile);
  return p.save();
}
function auth(email, password) {
  return import_profile2.default.findOne({ email }).exec().then((user) => {
    if (!user) {
      return Promise.reject("User not found");
    }
    return bcrypt.compare(password, user.password).then((doMatch) => {
      if (doMatch) {
        return user;
      } else {
        return Promise.reject("Incorrect password");
      }
    });
  });
}
function update(email, profile) {
  return new Promise((resolve, reject) => {
    import_profile2.default.findOneAndUpdate({ email }, profile, {
      new: true
    }).then((profile2) => {
      if (profile2)
        resolve(profile2);
      else
        reject("Failed to update profile");
    });
  });
}
function addRecipeToProfile(email, recipeId) {
  return new Promise((resolve, reject) => {
    import_profile2.default.findOneAndUpdate(
      { email },
      { $push: { recipes: recipeId } },
      { new: true }
    ).then((updatedProfile) => {
      console.log("Updated profile with new recipe:", updatedProfile);
      if (updatedProfile)
        resolve(updatedProfile);
      else
        reject("Failed to find profile to update");
    }).catch((err) => {
      console.error("Error updating profile with new recipe:", err);
    });
  });
}
function removeRecipeFromProfile(email, recipeId) {
  return new Promise((resolve, reject) => {
    import_profile2.default.findOneAndUpdate(
      { email },
      { $pull: { recipes: recipeId } },
      { new: true }
    ).then((updatedProfile) => {
      console.log("Updated profile to remove recipe:", updatedProfile);
      if (updatedProfile)
        resolve(updatedProfile);
      else
        reject("Failed to find profile to update");
    }).catch((err) => {
      console.error("Error updating profile", err);
    });
  });
}
var profiles_default = { index, get, create, update, addRecipeToProfile, removeRecipeFromProfile, auth };
