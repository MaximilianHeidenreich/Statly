import { myPeer } from "$lib/stores/peerStore";
import type Peer from "peerjs"
import { get } from "svelte/store";

/**
 * Returns the existing peer or creates a new one.
 * 
 * @param id Optionally specify the id to use
 * @returns A Peer instance
 */
export function getPeer(id?: string): Peer {
    let p = get(myPeer)
    if (!p) {
        p = new Peer(id)
        myPeer.update(n => p)
    }
    return p;
}