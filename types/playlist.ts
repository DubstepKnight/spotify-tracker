import { Image } from "./image";
import { Followers } from "./followers";
import { ExternalUrls } from "./external_urls";

export type Playlist = {
  collaborative: boolean;
  description?: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
};

type Owner = {
  external_urls?: ExternalUrls;
  follower?: Followers;
  href?: string;
  id?: string;
  type?: "user";
  uri?: string;
  display_name?: string;
};

type Tracks = {
  href: string;
  items: object[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
};
