export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const open_modal = (id) => ({
    type: OPEN_MODAL,
    payload: id
})
export const close_modal = () => ({
    type: CLOSE_MODAL,
})