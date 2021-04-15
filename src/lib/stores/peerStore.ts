import { writable } from "svelte/store"
import type Peer from "peerjs"

export const myPeer = writable<Peer>(null);