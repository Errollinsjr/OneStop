import axios from "axios";

export default {
  // Gets all trips
  getTrips: function() {
    return axios.get("/api/trip/usertrips");
  },
  // Gets the trip with the given id
  getTrip: function(id) {
    return axios.get("/api/trip/" + id);
  },

  getSummary: function(id) {
    return axios.get('/api/trip/Summary/' + id)
  },

  // Deletes the trip with the given id
  deleteTrip: function(id) {
    return axios.delete("/api/trip/delete/" + id);
  },
  //Edit trip by id
  editTrip: function(id, tripData) {
    return axios.put("/api/trip/edit/" + id, tripData)
  },
  // Saves a trip to the database
  saveTrip: function(tripData) {
    return axios.post("/api/trip/createtrip", tripData);
  },
  //logout user
  logoutUser: function() {
    return axios.post("/api/user/logout")
  },

  //Get all reservations
  getReservations: function(id) {
    return axios.get("/api/reservations/" + id);
  },
  // Deletes reservation with the given id
  deleteReservation: function(id) {
    return axios.delete("/api/reservations/" + id)
  },
  //Edit reservation by id
  editReservation: function(id, reservationData) {
    return axios.put("/api/reservations/edit/" + id, reservationData)
  },
  //Save reservation
  saveReservation: function(reservationData) {
    return axios.post("/api/reservations/createreservation", reservationData)
  }
};
