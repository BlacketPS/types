// This file was auto-generated by prisma-generator-typescript-interfaces

export enum AuctionTypeEnum {
  ITEM = "ITEM",
  BLOOK = "BLOOK"
}
export type AuctionType = "ITEM" | "BLOOK";

export enum AuditLogActionEnum {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE"
}
export type AuditLogAction = "CREATE" | "UPDATE" | "DELETE";

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

export enum BoostTypeEnum {
  CHANCE = "CHANCE",
  EXPERIENCE = "EXPERIENCE",
  SHINY = "SHINY"
}
export type BoostType = "CHANCE" | "EXPERIENCE" | "SHINY";

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
  BANNER = "BANNER",
  OTHER = "OTHER"
}
export type ProductType = "ITEM" | "BLOOK" | "TITLE" | "FONT" | "BANNER" | "OTHER";

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
  EARLY_ACCESS_TIER_1 = "EARLY_ACCESS_TIER_1",
  USE_CHAT_COLORS = "USE_CHAT_COLORS",
  UPLOAD_FILES_SMALL = "UPLOAD_FILES_SMALL",
  MORE_AUCTIONS_TIER_1 = "MORE_AUCTIONS_TIER_1",
  CREATE_GUILDS = "CREATE_GUILDS",
  CHANGE_NAME_COLOR_TIER_2 = "CHANGE_NAME_COLOR_TIER_2",
  EARLY_ACCESS_TIER_2 = "EARLY_ACCESS_TIER_2",
  UPLOAD_FILES_MEDIUM = "UPLOAD_FILES_MEDIUM",
  MORE_AUCTIONS_TIER_2 = "MORE_AUCTIONS_TIER_2",
  LESS_AUCTION_TAX = "LESS_AUCTION_TAX",
  MORE_CHAT_BADGE_TIER_1 = "MORE_CHAT_BADGE_TIER_1",
  CUSTOM_TRADING_TABLE_COLOR = "CUSTOM_TRADING_TABLE_COLOR",
  MORE_AUCTIONS_TIER_3 = "MORE_AUCTIONS_TIER_3",
  MORE_CHAT_BADGE_TIER_2 = "MORE_CHAT_BADGE_TIER_2",
  UPLOAD_FILES_LARGE = "UPLOAD_FILES_LARGE",
  MORE_AUCTIONS_TIER_4 = "MORE_AUCTIONS_TIER_4",
  CUSTOM_AVATAR = "CUSTOM_AVATAR",
  CUSTOM_BANNER = "CUSTOM_BANNER",
  MUTE_USERS = "MUTE_USERS",
  BAN_USERS = "BAN_USERS",
  MANAGE_MESSAGES = "MANAGE_MESSAGES",
  VIEW_AUDIT = "VIEW_AUDIT",
  MANAGE_REPORTS = "MANAGE_REPORTS",
  REVERT_AUDIT = "REVERT_AUDIT",
  BLACKLIST_USERS = "BLACKLIST_USERS",
  MANAGE_USER_BLOOKS = "MANAGE_USER_BLOOKS",
  MANAGE_USER_ITEMS = "MANAGE_USER_ITEMS",
  MANAGE_USER_TITLES = "MANAGE_USER_TITLES",
  MANAGE_USER_BANNERS = "MANAGE_USER_BANNERS",
  MANAGE_USER_FONTS = "MANAGE_USER_FONTS",
  MANAGE_NEWS_POSTS = "MANAGE_NEWS_POSTS",
  MANAGE_USER_GROUPS = "MANAGE_USER_GROUPS",
  MANAGE_CHAT_ROOMS = "MANAGE_CHAT_ROOMS",
  MANAGE_DATA = "MANAGE_DATA",
  DELETE_USERS = "DELETE_USERS",
  MANAGE_GROUPS = "MANAGE_GROUPS"
}
export type PermissionType = "CREATE_REPORTS" | "CHANGE_USERNAME" | "CHANGE_NAME_COLOR_TIER_1" | "EARLY_ACCESS_TIER_1" | "USE_CHAT_COLORS" | "UPLOAD_FILES_SMALL" | "MORE_AUCTIONS_TIER_1" | "CREATE_GUILDS" | "CHANGE_NAME_COLOR_TIER_2" | "EARLY_ACCESS_TIER_2" | "UPLOAD_FILES_MEDIUM" | "MORE_AUCTIONS_TIER_2" | "LESS_AUCTION_TAX" | "MORE_CHAT_BADGE_TIER_1" | "CUSTOM_TRADING_TABLE_COLOR" | "MORE_AUCTIONS_TIER_3" | "MORE_CHAT_BADGE_TIER_2" | "UPLOAD_FILES_LARGE" | "MORE_AUCTIONS_TIER_4" | "CUSTOM_AVATAR" | "CUSTOM_BANNER" | "MUTE_USERS" | "BAN_USERS" | "MANAGE_MESSAGES" | "VIEW_AUDIT" | "MANAGE_REPORTS" | "REVERT_AUDIT" | "BLACKLIST_USERS" | "MANAGE_USER_BLOOKS" | "MANAGE_USER_ITEMS" | "MANAGE_USER_TITLES" | "MANAGE_USER_BANNERS" | "MANAGE_USER_FONTS" | "MANAGE_NEWS_POSTS" | "MANAGE_USER_GROUPS" | "MANAGE_CHAT_ROOMS" | "MANAGE_DATA" | "DELETE_USERS" | "MANAGE_GROUPS";

export enum BlookObtainMethodEnum {
  UNKNOWN = "UNKNOWN",
  PACK_OPEN = "PACK_OPEN",
  PURCHASE = "PURCHASE",
  STAFF = "STAFF"
}
export type BlookObtainMethod = "UNKNOWN" | "PACK_OPEN" | "PURCHASE" | "STAFF";

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
  blook?: UserBlook | null;
  itemId: number | null;
  item?: UserItem | null;
  bids?: AuctionBid[];
  sellerId: string;
  seller?: User;
  buyerId: string | null;
  buyer?: User | null;
  delistedAt: Date | null;
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

export interface AuditLog {
  id: number;
  action: AuditLogAction;
  model: string;
  relatedTo?: AuditLog[];
  relatedBy?: AuditLog[];
  recordId: number;
  delta: JsonValue | null;
  deltaFields: string[];
  isUndone: boolean;
  undoneById: string | null;
  undoneBy?: User | null;
  actorId: string | null;
  actor?: User | null;
  createdAt: Date;
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
  itemShop?: ItemShop[];
  products?: Product[];
}

export interface Blacklist {
  id: number;
  ipAddressId: number;
  punishmentId: number;
  createdAt: Date;
  updatedAt: Date;
  ipAddress?: IpAddress;
  punishment?: Punishment;
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
  shinyHue: number | null;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  background?: Resource;
  image?: Resource;
  pack?: Pack | null;
  rarity?: Rarity;
  itemShop?: ItemShop[];
  product?: Product[];
  userBlook?: UserBlook[];
}

export interface Boost {
  id: number;
  userId: string;
  multiplier: number;
  type: BoostType;
  solo: boolean;
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
  user?: User;
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
  resourceId: number;
  default: boolean;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  resource?: Resource;
  itemShop?: ItemShop[];
  products?: Product[];
  users?: UserFont[];
  usersUsing?: User[];
}

export interface Group {
  id: number;
  name: string;
  description: string | null;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  permissions: PermissionType[];
  imageId: number | null;
  image?: Resource | null;
  products?: Product[];
  users?: UserGroup[];
  discordRoleId: string | null;
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
  users?: User[];
  userIpAddresses?: UserIpAddress[];
  blacklists?: Blacklist[];
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
  resource?: Resource;
  rarity?: Rarity;
  itemShop?: ItemShop[];
  products?: Product[];
  users?: UserItem[];
}

export interface ItemShop {
  id: number;
  type: ItemShopItemType;
  itemId: number | null;
  blookId: number | null;
  titleId: number | null;
  bannerId: number | null;
  fontId: number | null;
  price: number;
  enabled: boolean;
  weekly: boolean;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  blook?: Blook | null;
  item?: Item | null;
  title?: Title | null;
  banner?: Banner | null;
  font?: Font | null;
}

export interface Message {
  id: string;
  roomId: number;
  content: string;
  mentions: string[];
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
  discordMessageId: string | null;
}

export interface NewsPost {
  id: number;
  title: string;
  content: string;
  imageId: number;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  image?: Upload;
  author?: User;
  votes?: UserNewsPostVote[];
}

export interface Pack {
  id: number;
  name: string;
  price: number;
  enabled: boolean;
  imageId: number;
  iconId: number;
  innerColor: string;
  outerColor: string;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  blook?: Blook[];
  image?: Resource;
  icon?: Resource;
}

export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  imageId: number;
  color1: string;
  color2: string;
  type: ProductType;
  itemId: number | null;
  blookId: number | null;
  titleId: number | null;
  fontId: number | null;
  bannerId: number | null;
  groupId: number | null;
  isSubscription: boolean | null;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  lifetimePrice: number | null;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  image?: Resource;
  blook?: Blook | null;
  item?: Item | null;
  title?: Title | null;
  font?: Font | null;
  banner?: Banner | null;
  group?: Group | null;
  subscribers?: UserSubscription[];
  stores?: Store[];
  transactions?: Transaction[];
}

export interface Punishment {
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
  blacklists?: Blacklist[];
}

export interface Rarity {
  id: number;
  name: string;
  color: string;
  animationType: RarityAnimationType;
  experience: number;
  affectedByBooster: boolean;
  createdAt: Date;
  updatedAt: Date;
  blook?: Blook[];
  item?: Item[];
}

export interface Resource {
  id: number;
  path: string;
  reference: string | null;
  createdAt: Date;
  updatedAt: Date;
  banners?: Banner[];
  blookBackgrounds?: Blook[];
  blooks?: Blook[];
  emojis?: Emoji[];
  fonts?: Font[];
  groups?: Group[];
  guilds?: Guild[];
  items?: Item[];
  packIcons?: Pack[];
  packImages?: Pack[];
  products?: Product[];
  userBanners?: User[];
}

export interface Room {
  id: number;
  name: string;
  public: boolean;
  createdAt: Date;
  updatedAt: Date;
  messages?: Message[];
  users?: User[];
}

export interface Session {
  id: string;
  userId: string;
  createdAt: Date;
  user?: User;
}

export interface Store {
  id: number;
  name: string;
  description: string;
  priority: number;
  products?: Product[];
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
}

export interface Title {
  id: number;
  name: string;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  itemShop?: ItemShop[];
  products?: Product[];
  users?: UserTitle[];
  usersUsing?: User[];
}

export interface Transaction {
  id: number;
  userId: string;
  price: number;
  productId: number;
  paymentMethodId: number;
  stripePaymentId: string;
  createdAt: Date;
  user?: User;
  product?: Product;
  paymentMethod?: UserPaymentMethod;
}

export interface Upload {
  id: number;
  path: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  customAvatars?: User[];
  customBanners?: User[];
  newsPosts?: NewsPost[];
}

export interface User {
  id: string;
  username: string;
  password: string;
  email: string | null;
  emailVerified: boolean;
  avatarId: number | null;
  customAvatarId: number | null;
  bannerId: number | null;
  customBannerId: number | null;
  titleId: number;
  fontId: number;
  color: string;
  tokens: number;
  crystals: number;
  experience: number;
  lastClaimed: Date;
  ipAddressId: number;
  createdAt: Date;
  updatedAt: Date;
  lastSeen: Date;
  stripeCustomerId: string | null;
  subscriptionId: number | null;
  subscription?: UserSubscription | null;
  permissions: PermissionType[];
  bids?: AuctionBid[];
  messages?: Message[];
  rooms?: Room[];
  sessions?: Session[];
  friendedBy?: User[];
  friends?: User[];
  avatar?: UserBlook | null;
  banner?: Resource | null;
  customAvatar?: Upload | null;
  customBanner?: Upload | null;
  font?: Font;
  title?: Title;
  banners?: UserBanner[];
  initiallyObtainedBlooks?: UserBlook[];
  blooks?: UserBlook[];
  discord?: UserDiscord | null;
  groups?: UserGroup[];
  guild?: UserGuild[];
  guildRequests?: UserGuildRequest[];
  ipAddress?: IpAddress;
  ipAddresses?: UserIpAddress[];
  initiallyObtainedItems?: UserItem[];
  items?: UserItem[];
  userOAuth?: UserOAuth[];
  paymentMethods?: UserPaymentMethod[];
  givenPunishments?: Punishment[];
  punishments?: Punishment[];
  settings?: UserSetting | null;
  statistics?: UserStatistic | null;
  titles?: UserTitle[];
  fonts?: UserFont[];
  auctions?: Auction[];
  wonAuctions?: Auction[];
  boosts?: Boost[];
  uploads?: Upload[];
  newsPosts?: NewsPost[];
  votedNewsPosts?: UserNewsPostVote[];
  transactions?: Transaction[];
  auditLogs?: AuditLog[];
  undoneLogs?: AuditLog[];
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
  shiny: boolean;
  initialObtainerId: string;
  obtainedBy: BlookObtainMethod;
  createdAt: Date;
  updatedAt: Date;
  blook?: Blook;
  initialObtainer?: User;
  user?: User;
  auctions?: Auction[];
  avatars?: User[];
}

export interface UserDiscord {
  discordId: string;
  username: string;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
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
  ipAddressId: number;
  uses: number;
  createdAt: Date;
  updatedAt: Date;
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
  auctions?: Auction[];
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
  paymentMethodId: string;
  lastFour: string;
  createdAt: Date;
  updatedAt: Date;
  cardBrand: string;
  primary: boolean;
  user?: User;
  transactions?: Transaction[];
}

export interface UserSetting {
  id: string;
  openPacksInstantly: boolean;
  friendRequests: SettingFriendRequest;
  categoriesClosed: string[];
  tutorialsCompleted: string[];
  otpSecret: string | null;
  user?: User;
}

export interface UserStatistic {
  id: string;
  packsOpened: number;
  messagesSent: number;
  user?: User;
}

export interface UserFont {
  id: number;
  userId: string;
  fontId: number;
  createdAt: Date;
  updatedAt: Date;
  font?: Font;
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

export interface UserSubscription {
  id: number;
  userId: string;
  productId: number;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  subscription?: Product;
}

export interface UserNewsPostVote {
  id: number;
  userId: string;
  newsPostId: number;
  vote: boolean;
  createdAt: Date;
  updatedAt: Date;
  newsPost?: NewsPost;
  user?: User;
}

type JsonValue = string | number | boolean | { [key in string]?: JsonValue } | Array<JsonValue> | null;
