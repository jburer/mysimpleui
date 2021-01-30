export const namespaced = true;

export const state = {
  events: []
};

let nextId = 1;

export const mutations = {
  PUSH(state, event) {
    state.events.push({
      ...event,
      id: nextId++
    });
  },
  DELETE(state, eventToRemove) {
    state.events = state.events.filter(event => event.id !== eventToRemove.id);
  }
};

export const actions = {
  add({ commit }, event) {
    commit("PUSH", event);
  },
  remove({ commit }, eventToRemove) {
    commit("DELETE", eventToRemove);
    console.log("Event notification removed!");
  }
};
