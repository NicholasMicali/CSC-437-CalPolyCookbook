// src/store.ts
import { Profile } from './models/profile';
export const store = {
  profile: null as Profile | null,
  // Function to set the profile and update components that rely on it
  setProfile(newProfile: Profile, callback?: () => void) {
    this.profile = newProfile;
    if (callback) callback();
  }
};
