import {Socket} from "phoenix"

let socket = new Socket("/socket", {params: {token: window.channelToken}})

export default socket
