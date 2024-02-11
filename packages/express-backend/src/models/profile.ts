// src/models/profile.ts
export interface Profile {
  userid: string;
  name: string;
  nickname?: string;
  city?: string;
  recipes: string[];
}
