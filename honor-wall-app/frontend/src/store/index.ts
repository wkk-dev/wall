import { createStore } from 'vuex';

const store = createStore({
  state: {
    leaderboard: [],
    topFive: [],
    weeklyStar: null,
    studyStar: null,
    bestGroup: null,
    bestClass: null,
    bestDorm: null,
    otherArea: {}
  },
  mutations: {
    setLeaderboard(state, leaderboard) {
      state.leaderboard = leaderboard;
    },
    setTopFive(state, topFive) {
      state.topFive = topFive;
    },
    setWeeklyStar(state, weeklyStar) {
      state.weeklyStar = weeklyStar;
    },
    setStudyStar(state, studyStar) {
      state.studyStar = studyStar;
    },
    setBestGroup(state, bestGroup) {
      state.bestGroup = bestGroup;
    },
    setBestClass(state, bestClass) {
      state.bestClass = bestClass;
    },
    setBestDorm(state, bestDorm) {
      state.bestDorm = bestDorm;
    },
    setOtherArea(state, otherArea) {
      state.otherArea = otherArea;
    }
  },
  actions: {
    fetchLeaderboard({ commit }) {
      // Fetch leaderboard data from API and commit to state
    },
    fetchTopFive({ commit }) {
      // Fetch top five data from API and commit to state
    },
    fetchWeeklyStar({ commit }) {
      // Fetch weekly star data from API and commit to state
    },
    fetchStudyStar({ commit }) {
      // Fetch study star data from API and commit to state
    },
    fetchBestGroup({ commit }) {
      // Fetch best group data from API and commit to state
    },
    fetchBestClass({ commit }) {
      // Fetch best class data from API and commit to state
    },
    fetchBestDorm({ commit }) {
      // Fetch best dorm data from API and commit to state
    },
    fetchOtherArea({ commit }) {
      // Fetch other area data from API and commit to state
    }
  },
  getters: {
    getLeaderboard: (state) => state.leaderboard,
    getTopFive: (state) => state.topFive,
    getWeeklyStar: (state) => state.weeklyStar,
    getStudyStar: (state) => state.studyStar,
    getBestGroup: (state) => state.bestGroup,
    getBestClass: (state) => state.bestClass,
    getBestDorm: (state) => state.bestDorm,
    getOtherArea: (state) => state.otherArea
  }
});

export default store;