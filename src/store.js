import { writable } from "svelte/store";

export const isLightModeActive = writable(false);

export const isGameActive = writable(false);

export const isPlayerTraveling = writable(false);
