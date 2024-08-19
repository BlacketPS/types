// This file was auto-generated by prisma-generator-typescript-interfaces

export enum AuctionTypeEnum {
  ITEM = "ITEM",
  BLOOK = "BLOOK"
}
export type AuctionType = "ITEM" | "BLOOK";

export enum DayTypeEnum {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}
export type DayType = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";

export enum FormStatusEnum {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  DENIED = "DENIED"
}
export type FormStatus = "PENDING" | "ACCEPTED" | "DENIED";

export enum ItemTypeEnum {
  NONE = "NONE",
  BOOSTER = "BOOSTER",
  TROPHY = "TROPHY",
  PAINT_BUCKET = "PAINT_BUCKET"
}
export type ItemType = "NONE" | "BOOSTER" | "TROPHY" | "PAINT_BUCKET";

export enum ItemShopItemTypeEnum {
  ITEM = "ITEM",
  BLOOK = "BLOOK",
  TITLE = "TITLE",
  BANNER = "BANNER",
  FONT = "FONT"
}
export type ItemShopItemType = "ITEM" | "BLOOK" | "TITLE" | "BANNER" | "FONT";

export enum ProductTypeEnum {
  ITEM = "ITEM",
  BLOOK = "BLOOK",
  TITLE = "TITLE",
  FONT = "FONT",
  OTHER = "OTHER"
}
export type ProductType = "ITEM" | "BLOOK" | "TITLE" | "FONT" | "OTHER";

export enum RarityAnimationTypeEnum {
  UNCOMMON = "UNCOMMON",
  RARE = "RARE",
  EPIC = "EPIC",
  LEGENDARY = "LEGENDARY",
  CHROMA = "CHROMA",
  IRIDESCENT = "IRIDESCENT"
}
export type RarityAnimationType = "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY" | "CHROMA" | "IRIDESCENT";

export enum PermissionTypeEnum {
  CREATE_REPORTS = "CREATE_REPORTS",
  CHANGE_USERNAME = "CHANGE_USERNAME",
  CHANGE_NAME_COLOR_TIER_1 = "CHANGE_NAME_COLOR_TIER_1",
  CHANGE_NAME_COLOR_TIER_2 = "CHANGE_NAME_COLOR_TIER_2",
  EARLY_ACCESS_TIER_1 = "EARLY_ACCESS_TIER_1",
  EARLY_ACCESS_TIER_2 = "EARLY_ACCESS_TIER_2",
  USE_CHAT_COLORS = "USE_CHAT_COLORS",
  UPLOAD_FILES_SMALL = "UPLOAD_FILES_SMALL",
  UPLOAD_FILES_MEDIUM = "UPLOAD_FILES_MEDIUM",
  UPLOAD_FILES_LARGE = "UPLOAD_FILES_LARGE",
  CUSTOM_AVATAR = "CUSTOM_AVATAR",
  CUSTOM_BANNER = "CUSTOM_BANNER",
  CHANGE_FONT = "CHANGE_FONT",
  MORE_AUCTIONS_TIER_1 = "MORE_AUCTIONS_TIER_1",
  MORE_AUCTIONS_TIER_2 = "MORE_AUCTIONS_TIER_2",
  MORE_AUCTIONS_TIER_3 = "MORE_AUCTIONS_TIER_3",
  MORE_AUCTIONS_TIER_4 = "MORE_AUCTIONS_TIER_4",
  LESS_AUCTION_TAX = "LESS_AUCTION_TAX",
  CREATE_GUILDS = "CREATE_GUILDS",
  CHANGE_GUILD_COLOR = "CHANGE_GUILD_COLOR",
  CUSTOM_TRADING_TABLE_COLOR = "CUSTOM_TRADING_TABLE_COLOR",
  MORE_CHAT_BADGE_TIER_1 = "MORE_CHAT_BADGE_TIER_1",
  MORE_CHAT_BADGE_TIER_2 = "MORE_CHAT_BADGE_TIER_2",
  MUTE_USERS = "MUTE_USERS",
  BAN_USERS = "BAN_USERS",
  MANAGE_MESSAGES = "MANAGE_MESSAGES",
  VIEW_AUDIT = "VIEW_AUDIT",
  MANAGE_REPORTS = "MANAGE_REPORTS",
  BLACKLIST_USERS = "BLACKLIST_USERS",
  MANAGE_USER_PERMISSIONS = "MANAGE_USER_PERMISSIONS",
  MANAGE_USER_BLOOKS = "MANAGE_USER_BLOOKS",
  MANAGE_USER_ITEMS = "MANAGE_USER_ITEMS",
  MANAGE_USER_TITLES = "MANAGE_USER_TITLES",
  MANAGE_USER_BANNERS = "MANAGE_USER_BANNERS",
  MANAGE_USER_GROUPS = "MANAGE_USER_GROUPS",
  MANAGE_NEWS_POSTS = "MANAGE_NEWS_POSTS",
  MANAGE_CHAT_ROOMS = "MANAGE_CHAT_ROOMS",
  MANAGE_GAME_DATA = "MANAGE_GAME_DATA",
  DELETE_USERS = "DELETE_USERS",
  MANAGE_GROUPS = "MANAGE_GROUPS"
}
export type PermissionType = "CREATE_REPORTS" | "CHANGE_USERNAME" | "CHANGE_NAME_COLOR_TIER_1" | "CHANGE_NAME_COLOR_TIER_2" | "EARLY_ACCESS_TIER_1" | "EARLY_ACCESS_TIER_2" | "USE_CHAT_COLORS" | "UPLOAD_FILES_SMALL" | "UPLOAD_FILES_MEDIUM" | "UPLOAD_FILES_LARGE" | "CUSTOM_AVATAR" | "CUSTOM_BANNER" | "CHANGE_FONT" | "MORE_AUCTIONS_TIER_1" | "MORE_AUCTIONS_TIER_2" | "MORE_AUCTIONS_TIER_3" | "MORE_AUCTIONS_TIER_4" | "LESS_AUCTION_TAX" | "CREATE_GUILDS" | "CHANGE_GUILD_COLOR" | "CUSTOM_TRADING_TABLE_COLOR" | "MORE_CHAT_BADGE_TIER_1" | "MORE_CHAT_BADGE_TIER_2" | "MUTE_USERS" | "BAN_USERS" | "MANAGE_MESSAGES" | "VIEW_AUDIT" | "MANAGE_REPORTS" | "BLACKLIST_USERS" | "MANAGE_USER_PERMISSIONS" | "MANAGE_USER_BLOOKS" | "MANAGE_USER_ITEMS" | "MANAGE_USER_TITLES" | "MANAGE_USER_BANNERS" | "MANAGE_USER_GROUPS" | "MANAGE_NEWS_POSTS" | "MANAGE_CHAT_ROOMS" | "MANAGE_GAME_DATA" | "DELETE_USERS" | "MANAGE_GROUPS";

export enum BlookObtainMethodEnum {
  UNKNOWN = "UNKNOWN",
  PACK_OPEN = "PACK_OPEN",
  STAFF = "STAFF"
}
export type BlookObtainMethod = "UNKNOWN" | "PACK_OPEN" | "STAFF";

export enum ItemObtainMethodEnum {
  UNKNOWN = "UNKNOWN",
  ITEM_SHOP = "ITEM_SHOP",
  PURCHASE = "PURCHASE",
  STAFF = "STAFF"
}
export type ItemObtainMethod = "UNKNOWN" | "ITEM_SHOP" | "PURCHASE" | "STAFF";

export enum GuildRoleEnum {
  MEMBER = "MEMBER",
  MODERATOR = "MODERATOR",
  ADMINISTRATOR = "ADMINISTRATOR",
  OWNER = "OWNER"
}
export type GuildRole = "MEMBER" | "MODERATOR" | "ADMINISTRATOR" | "OWNER";

export enum OAuthTypeEnum {
  DISCORD = "DISCORD"
}
export type OAuthType = "DISCORD";

export enum PunishmentTypeEnum {
  WARN = "WARN",
  MUTE = "MUTE",
  BAN = "BAN",
  BLACKLIST = "BLACKLIST"
}
export type PunishmentType = "WARN" | "MUTE" | "BAN" | "BLACKLIST";

export enum SettingFriendRequestEnum {
  ON = "ON",
  OFF = "OFF",
  MUTUAL = "MUTUAL"
}
export type SettingFriendRequest = "ON" | "OFF" | "MUTUAL";

export interface Auction {
  id: number;
  type: AuctionType;
  price: number;
  buyItNow: boolean;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
  blookId: number | null;
  blook?: Blook | null;
  itemId: number | null;
  item?: Item | null;
  sellerId: string;
  seller?: User;
  bids?: AuctionBid[];
}

export interface AuctionBid {
  id: number;
  userId: string;
  auctionId: number;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  auction?: Auction;
  user?: User;
}

export interface Banner {
  id: number;
  name: string;
  imageId: number;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  resource?: Resource;
  userBanner?: UserBanner[];
}

export interface Blook {
  id: number;
  name: string;
  chance: number;
  price: number;
  rarityId: number;
  imageId: number;
  backgroundId: number;
  packId: number | null;
  onlyOnDay: DayType | null;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  auction?: Auction[];
  background?: Resource;
  image?: Resource;
  pack?: Pack | null;
  rarity?: Rarity;
  itemShop?: ItemShop[];
  product?: Product[];
  userBlook?: UserBlook[];
}

export interface Emoji {
  id: number;
  name: string;
  imageId: number;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  resource?: Resource;
}

export interface Font {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  product?: Product[];
  user?: User[];
  resourceId: number;
  resource?: Resource;
}

export interface Form {
  id: string;
  username: string;
  password: string;
  ipAddress: string;
  reasonToPlay: string;
  status: FormStatus;
  deniedReason: string | null;
  createdAt: Date;
  updatedAt: Date;
  accepterId: string | null;
  accepter?: User | null;
}

export interface Group {
  id: number;
  name: string;
  description: string | null;
  imageId: number | null;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  permissions: PermissionType[];
  resource?: Resource | null;
  products?: Product[];
  users?: UserGroup[];
}

export interface Guild {
  id: number;
  name: string;
  description: string;
  color: string;
  experience: number;
  imageId: number | null;
  acceptingRequests: boolean;
  createdAt: Date;
  updatedAt: Date;
  image?: Resource | null;
  members?: UserGuild[];
  joinRequests?: UserGuildRequest[];
}

export interface IpAddress {
  id: number;
  ipAddress: string;
  createdAt: Date;
  updatedAt: Date;
  userIpAddresses?: UserIpAddress[];
}

export interface Item {
  id: number;
  name: string;
  description: string;
  rarityId: number;
  imageId: number;
  type: ItemType;
  canUse: boolean;
  canAuction: boolean;
  canTrade: boolean;
  maxUses: number;
  boosterDuration: number | null;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  auctions?: Auction[];
  resource?: Resource;
  rarity?: Rarity;
  itemShop?: ItemShop[];
  products?: Product[];
  users?: UserItem[];
}

export interface ItemShop {
  id: number;
  itemId: number | null;
  blookId: number | null;
  price: number;
  enabled: boolean;
  weekly: boolean;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  type: ItemShopItemType;
  titleId: number | null;
  blook?: Blook | null;
  item?: Item | null;
  title?: Title | null;
}

export interface Message {
  id: string;
  roomId: number;
  content: string;
  mentions?: User[];
  replyingToId: string | null;
  edited: boolean;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author?: User;
  replyingTo?: Message | null;
  replies?: Message[];
  room?: Room;
}

export interface Pack {
  id: number;
  name: string;
  price: number;
  enabled: boolean;
  imageId: number;
  innerColor: string;
  outerColor: string;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  blook?: Blook[];
  resource?: Resource;
}

export interface Product {
  id: number;
  name: string;
  description: string | null;
  imageId: number;
  type: ProductType;
  itemId: number | null;
  blookId: number | null;
  titleId: number | null;
  fontId: number | null;
  isSubscription: boolean;
  monthlyPrice: number | null;
  lifetimePrice: number | null;
  groupId: number | null;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  blook?: Blook | null;
  font?: Font | null;
  group?: Group | null;
  resource?: Resource;
  item?: Item | null;
  title?: Title | null;
}

export interface Rarity {
  id: number;
  name: string;
  color: string;
  animationType: RarityAnimationType;
  experience: number;
  createdAt: Date;
  updatedAt: Date;
  blook?: Blook[];
  item?: Item[];
}

export interface Resource {
  id: number;
  path: string;
  createdAt: Date;
  updatedAt: Date;
  banner?: Banner[];
  blookBackgrounds?: Blook[];
  blooks?: Blook[];
  emoji?: Emoji[];
  font?: Font[];
  group?: Group[];
  guild?: Guild[];
  item?: Item[];
  pack?: Pack[];
  product?: Product[];
  avatars?: User[];
  banners?: User[];
  customAvatars?: User[];
  customBanners?: User[];
}

export interface Room {
  id: number;
  name: string;
  public: boolean;
  createdAt: Date;
  updatedAt: Date;
  message?: Message[];
  roomUser?: RoomUser[];
}

export interface RoomUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  roomId: number;
  room?: Room;
  userId: string;
  user?: User;
}

export interface Session {
  id: string;
  userId: string;
  createdAt: Date;
  user?: User;
}

export interface Title {
  id: number;
  name: string;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  itemShop?: ItemShop[];
  products?: Product[];
  usersUsing?: User[];
  usersOwned?: UserTitle[];
}

export interface User {
  id: string;
  username: string;
  password: string | null;
  avatarId: number;
  customAvatarId: number | null;
  bannerId: number;
  customBannerId: number | null;
  titleId: number;
  fontId: number;
  color: string;
  tokens: number;
  experience: number;
  lastClaimed: Date | null;
  ipAddress: string | null;
  createdAt: Date;
  updatedAt: Date;
  permissions: PermissionType[];
  auction?: Auction[];
  auctionBid?: AuctionBid[];
  form?: Form[];
  message?: Message[];
  roomUser?: RoomUser[];
  sessions?: Session[];
  avatar?: Resource;
  banner?: Resource;
  customAvatar?: Resource | null;
  customBanner?: Resource | null;
  font?: Font;
  title?: Title;
  banners?: UserBanner[];
  ininitallyObtainedBlooks?: UserBlook[];
  blooks?: UserBlook[];
  discord?: UserDiscord[];
  groups?: UserGroup[];
  guild?: UserGuild[];
  guildRequests?: UserGuildRequest[];
  ipAddresses?: UserIpAddress[];
  ininitallyObtainedItems?: UserItem[];
  items?: UserItem[];
  userOauth?: UserOAuth[];
  paymentMethods?: UserPaymentMethod[];
  givenPunishments?: UserPunishment[];
  punishments?: UserPunishment[];
  settings?: UserSetting | null;
  statistics?: UserStatistic | null;
  titles?: UserTitle[];
  mentions?: Message[];
}

export interface UserBanner {
  id: number;
  userId: string;
  bannerId: number;
  createdAt: Date;
  updatedAt: Date;
  banner?: Banner;
  user?: User;
}

export interface UserBlook {
  id: number;
  userId: string;
  blookId: number;
  sold: boolean;
  initalObtainerId: string;
  obtainedBy: BlookObtainMethod;
  createdAt: Date;
  updatedAt: Date;
  blook?: Blook;
  initialObtainer?: User;
  user?: User;
}

export interface UserDiscord {
  discordId: string;
  userId: string;
  username: string;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
}

export interface UserGroup {
  id: number;
  groupId: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  group?: Group;
  user?: User;
}

export interface UserGuild {
  id: number;
  guildId: number;
  userId: string;
  userRole: GuildRole;
  createdAt: Date;
  updatedAt: Date;
  guild?: Guild;
  user?: User;
}

export interface UserGuildRequest {
  id: number;
  guildId: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  guild?: Guild;
  user?: User;
}

export interface UserIpAddress {
  id: number;
  userId: string;
  uses: number;
  createdAt: Date;
  updatedAt: Date;
  ipAddressId: number;
  ipAddress?: IpAddress;
  user?: User;
}

export interface UserItem {
  id: number;
  userId: string;
  itemId: number;
  usesLeft: number;
  initalObtainerId: string;
  obtainedBy: ItemObtainMethod;
  createdAt: Date;
  updatedAt: Date;
  initalObtainer?: User;
  item?: Item;
  user?: User;
}

export interface UserOAuth {
  id: number;
  userId: string;
  type: OAuthType;
  tokenType: string;
  accessToken: string;
  refreshToken: string;
  scope: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
}

export interface UserPaymentMethod {
  id: number;
  userId: string;
  squareCustomerId: string;
  squarePaymentMethodId: string;
  lastFour: string;
  createdAt: Date;
  updatedAt: Date;
  cardBrand: string;
  primary: boolean;
  user?: User;
}

export interface UserPunishment {
  id: number;
  userId: string;
  type: PunishmentType;
  reason: string;
  expiresAt: Date;
  staffId: string;
  createdAt: Date;
  updatedAt: Date;
  staff?: User;
  user?: User;
}

export interface UserSetting {
  id: string;
  openPacksInstantly: boolean;
  friendRequests: SettingFriendRequest;
  categoriesClosed: number[];
  otpSecret: string | null;
  user?: User;
}

export interface UserStatistic {
  id: string;
  packsOpened: number;
  messagesSent: number;
  user?: User;
}

export interface UserTitle {
  id: number;
  userId: string;
  titleId: number;
  createdAt: Date;
  updatedAt: Date;
  title?: Title;
  user?: User;
}
