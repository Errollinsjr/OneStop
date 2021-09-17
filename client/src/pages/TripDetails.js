// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";

// function Detail(props) {
//   const [trip, setTrip] = useState({})


//   const {id} = useParams()
//   useEffect(() => {
//     API.getTrip(id)
//       .then(res => setTrip(res.data))
//       .catch(err => console.log(err));
//   }, [])

//   return (
//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1>
//                 {trip.title} by {trip.author}
//               </h1>
//             </Jumbotron>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-10 md-offset-1">
//             <article>
//               <h1>Synopsis</h1>
//               <p>
//                 {trip.synopsis}
//               </p>
//             </article>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-2">
//             <Link to="/">← Back to Authors</Link>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }


// export default Detail;
