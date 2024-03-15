// src/profiles.ts
import { Document } from "mongoose";
import { Profile } from "./models/profile";
import ProfileModel from "./models/mongo/profile";
//import bcrypt from 'bcrypt';

const bcrypt = require('bcrypt');

function index(): Promise<Profile[]> {
  return ProfileModel.find();
}

function get(email: String): Promise<Profile> {
  return ProfileModel.find({ email })
    .then((list) => list[0])
    .catch((err) => {
      throw `${email} Not Found`;
    });
}

async function create(profile: Profile): Promise<Profile> {

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(profile.password, salt);
  profile.password = hashedPassword;
  const p = new ProfileModel(profile);
  return p.save();
}

function auth(email: string, password: string): Promise<Profile> {
  return ProfileModel.findOne({ email }).exec()
    .then(user => {
      if (!user) {
        return Promise.reject('User not found');
      }
      // Use bcrypt to compare the provided password with the stored hashed password
      return bcrypt.compare(password, user.password)
        .then((doMatch: boolean) => {
          if (doMatch) {
            return user;
          } else {
            // Passwords do not match
            return Promise.reject('Incorrect password');
          }
        });
    });
}

function update(email: String, profile: Profile): Promise<Profile> {
  return new Promise((resolve, reject) => {
    ProfileModel.findOneAndUpdate({ email }, profile, {
      new: true,
    }).then((profile) => {
      if (profile) resolve(profile);
      else reject("Failed to update profile");
    });
  });
}


function addRecipeToProfile(email: string, recipeId: string): Promise<Profile> {
  return new Promise((resolve, reject) => {
    ProfileModel.findOneAndUpdate(
      { email: email }, 
      { $push: { recipes: recipeId } },
      { new: true }
    )
    .then((updatedProfile) => {
      console.log('Updated profile with new recipe:', updatedProfile);
      if(updatedProfile) resolve(updatedProfile)
      else reject("Failed to find profile to update");
    })
    .catch((err) => {
      console.error('Error updating profile with new recipe:', err);
    });
  });
}

function removeRecipeFromProfile(email: string, recipeId: string): Promise<Profile> {
  return new Promise((resolve, reject) => {
    ProfileModel.findOneAndUpdate(
      { email: email }, 
      { $pull: { recipes: recipeId } },
      { new: true }
    )
    .then((updatedProfile) => {
      console.log('Updated profile to remove recipe:', updatedProfile);
      if(updatedProfile) resolve(updatedProfile)
      else reject("Failed to find profile to update");
    })
    .catch((err) => {
      console.error('Error updating profile', err);
    });
  });
}


export default { index, get, create, update, addRecipeToProfile, removeRecipeFromProfile, auth };
