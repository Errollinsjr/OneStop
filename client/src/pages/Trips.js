// import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

// function Trips() {
//   // Setting our component's initial state
//   const [trips, setTrips] = useState([])
//   const [formObject, setFormObject] = useState({})

//   // Load all Trips and store them with setTrips
//   useEffect(() => {
//     loadTrips()
//   }, [])

//   // Loads all Trips and sets them to Trips
//   function loadTrips() {
//     API.getTrips()
//       .then(res => 
//         setTrips(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   // Deletes a trip from the database with a given id, then reloads Trips from the db
//   function deleteTrip(id) {
//     API.deleteTrip(id)
//       .then(res => loadTrips())
//       .catch(err => console.log(err));
//   }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
//   };

//   // When the form is submitted, use the API.savetrip method to save the trip data
//   // Then reload Trips from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.title && formObject.author) {
//       API.saveTrip({
//         title: formObject.title,
//         author: formObject.author,
//         synopsis: formObject.synopsis
//       })
//         .then(res => loadTrips())
//         .catch(err => console.log(err));
//     }
//   };

//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Trips Should I Go On?</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 onChange={handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />
//               <Input
//                 onChange={handleInputChange}
//                 name="author"
//                 placeholder="Author (required)"
//               />
//               <TextArea
//                 onChange={handleInputChange}
//                 name="synopsis"
//                 placeholder="Synopsis (Optional)"
//               />
//               <FormBtn
//                 disabled={!(formObject.author && formObject.title)}
//                 onClick={handleFormSubmit}
//               >
//                 Submit trip
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Trips On My List</h1>
//             </Jumbotron>
//             {Trips.length ? (
//               <List>
//                 {Trips.map(trip => (
//                   <ListItem key={trip._id}>
//                     <Link to={"/Trips/" + trip._id}>
//                       <strong>
//                         {trip.title} by {trip.author}
//                       </strong>
//                     </Link>
//                     <DeleteBtn onClick={() => deleteTrip(trip._id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }


// export default Trips;
