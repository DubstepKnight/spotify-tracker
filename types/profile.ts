import { Image } from "./image";
import { Followers } from "./followers";
import { ExternalUrls } from "./external_urls";

type ExplicitContent = {
  filter_enabled: boolean;
  filter_locked: boolean;
};

export type OwnProfile = Profile & {
  country: string;
  email: string;
  product: "open" | "premium" | "free";
  explicit_content: ExplicitContent;
};

export type Profile = {
  display_name: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  type: "user";
  uri: string;
};
