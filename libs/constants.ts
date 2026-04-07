// libs/constants.ts

// Constants for WebSocket events
export const EV_CONNECT = "connect";
export const EV_DISCONNECT = "disconnect";
export const EV_TYPING = "typing";
export const EV_INCOMING = "incoming";
export const EV_OUTGOING = "outgoing";
export const EV_EXT_WS_ERROR = "external_ws_error";
export const EV_SESSION_TERMINATED = "session_terminated";
export const EV_ERROR = "error";
export const EV_FORCE_DISCONNECT = "force_disconnect";
export const EV_CONNECT_ERROR = "connect_error";

export const SOCKET_PATH = "/api/socket/setup";
export const STORAGE_KEY = "converso_chat_messages";