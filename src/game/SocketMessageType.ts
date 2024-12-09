export enum SocketMessageType {
    UNAUTHORIZED = "UNAUTHORIZED",
    AUTHORIZED = "AUTHORIZED",

    PING = "PING",
    PONG = "PONG",

    USER_UPDATED = "USER_UPDATED",

    CHAT_MESSAGES_CREATE = "CHAT_MESSAGES_CREATE",
    CHAT_TYPING_STARTED = "CHAT_TYPING_STARTED",

    AUCTIONS_EXPIRE = "AUCTIONS_EXPIRE",
    AUCTIONS_BID = "AUCTIONS_BID",

    TRADING_PLAZA_JOIN = "TRADING_PLAZA_JOIN",
    TRADING_PLAZA_LEAVE = "TRADING_PLAZA_LEAVE",
    TRADING_PLAZA_MOVE = "TRADING_PLAZA_MOVE",

    LAGBACK = "LAGBACK",
    ERROR = "ERROR"
}
