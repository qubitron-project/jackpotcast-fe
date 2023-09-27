const MOVIES_INFO = `${process.env.NEXT_PUBLIC_BE_ROUTE}`;
export const GET_CHANNEL_LIST = `${MOVIES_INFO}/channels`;
export const GET_MOVIES_LIST = `${MOVIES_INFO}/movies?`;
export const GET_MOVIES_BASIC = `${MOVIES_INFO}/movies/`;
export const GET_MOVIES_GENRE = `${MOVIES_INFO}/movies/related-movies?id=`;
//login,signup
export const USERS_LIST = `${MOVIES_INFO}/users`;
//search
export const MOVIES_LIST = `${MOVIES_INFO}/movies`;
export const BANNERS_LIST = `${MOVIES_INFO}/banners`;
export const NOTICES_LIST = `${MOVIES_INFO}/notices`;
