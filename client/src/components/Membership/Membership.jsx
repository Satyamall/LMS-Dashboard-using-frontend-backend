import useStyles from "./styles";
import Button from "@mui/material/Button";
export default function Membership() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.benefits}>
          <h1 style={{color : "#03BE12 "}}>Become a member</h1>
          <ul>
            <li style={{color : "turquoise", fontSize : "20px"}}>Benefits of being a member</li>
            <ol style={{listStyle : "none"}}>
             <p >
              <li> ✅ You will be able to create your own courses</li>
              </p>
              <p >
              <li> ⚙️ You can update, delete your course at anytime (T&C Apply)</li>
              </p>
              <p>
              <li> 📒 You will be able to sell your course all over the globe</li>
              </p>
              <p>
              <li>
                 🧰 You will get 75% of charges on each course enrolled by students
              </li>
              </p>
              <li> 📺 Teach with all modern tech stacks and tools</li>
              <p>
              <li>
                🏛 You will be able to contribute in serving the society and making
                India grow faster
              </li>
              </p>
            </ol>
          </ul>
        </div>
        <div style={{ display: "flex", gap: "3rem", marginTop: "60px", flexWrap:"wrap" }}>
          <div>
            <div
              className={classes.card}
              style={{ backgroundColor: "cornsilk", color: "black" }}
            >
              <h3 className={classes.subscriptiontitle}>Gold Membership</h3>
              <ul>
                <li>View all the courses</li>
                <li>Like any course</li>
                <li>Subscribe any course</li>
                <li>Update your course content's at any time</li>
                <li>Delete courses at any time</li>
                <li>Valid till 3 Months</li>
                <li style={{textDecoration : "line-through", color:"red"}}>Pay ₹599/Three Months</li>
                <li>Pay ₹399/Three Months</li>
              </ul>
              <div style={{ textAlign:"center"}}>
              <Button variant="contained" color="success" style={{backgroundColor:"red"}}>
                <a href="https://rzp.io/l/NWkBOiW" style={{textDecoration : "none", color:"white"}}>Checkout Gold</a>
              </Button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={classes.card}
              style={{ backgroundColor: "turquoise", color: "black" }}
            >
              <h3
                className={classes.subscriptiontitle}
                style={{ color: "brown" }}
              >
                Super Membership
              </h3>
              <ul>
                <li>View all the cousers</li>
                <li>Like any course</li>
                <li>Subscribe any course</li>
                <li>Update your course content's at any time</li>
                <li>Delete courses at any time</li>
                <li>Instantly update courses</li>
                <li>Valid till 6 Months</li>
                <li style={{textDecoration : "line-through", color:"red"}}>Pay ₹999/Six Months</li>
                <li>Pay ₹699/Six Months</li>
              </ul>
              <div style={{ textAlign:"center"}}>
              <Button variant="contained" color="success" style={{backgroundColor:"brown"}}>
              <a href="https://rzp.io/l/zy6g25YC" style={{textDecoration : "none", color:"white"}}>Checkout Super</a>
              </Button>
              </div>
            </div>
          </div>
          <div>
            <div className={classes.card}>
              <h3
                className={classes.subscriptiontitle}
                style={{ color: "gold" }}
              >
                Premium Membership
              </h3>
              <ul>
                <li>View all the cousers</li>
                <li>Like any course</li>
                <li>Subscribe any course</li>
                <li>Update your course content's at any time</li>
                <li>Delete courses at any time</li>
                <li>Instantly update courses</li>
                <li>Valid till 1 year</li>
                <li style={{textDecoration : "line-through", color:"red"}}>Pay ₹1899/Year</li>
                <li>Pay ₹1299/Year</li>
              </ul>
              <div style={{ textAlign:"center"}}>
              <Button variant="contained" color="success" style={{backgroundColor:"gold", color:"black"}}>
              <a href="https://rzp.io/l/JoDpZKfq7Z" style={{textDecoration : "none"}}>Checkout Premium</a>
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
