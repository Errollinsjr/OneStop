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
  }
};
