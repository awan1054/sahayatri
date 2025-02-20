import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";

function Booknow() {
  const [citizenship, setCitizenship] = useState(null);
  const [licence, setLicense] = useState(null);
  const [contactNumber, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [payment, setPayment] = useState("");
  const [bike, setBike] = useState("");
  const [fromdate, setFromDate] = useState("");
  const [todate, setToDate] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [totalamount, setTotalAmount] = useState(0);

  const fetchSingle = async () => {
    try {
      const response = await axios.get("http://localhost:3000/bike/get-single/" + id);
      if (response.status === 200) {
        setBike(response.data.data);
        setTotalAmount(response.data.data.price);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching bike data.");
    }
  };

  useEffect(() => {
    fetchSingle();
  }, []);

  const calculateTotalAmount = (from, to) => {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const timeDifference = toDate - fromDate;
    const days = timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days
    const total = bike.price * days;
    setTotalAmount(total);
  };

  useEffect(() => {
    if (fromdate && todate) {
      calculateTotalAmount(fromdate, todate);
    }
  }, [fromdate, todate]);

  const bookNow = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("citizenship", citizenship);
    data.append("location", location);
    data.append("contactNumber", contactNumber);
    data.append("email", email);
    data.append("name", name);
    data.append("bike", id);
    data.append("licence", licence);
    data.append("paymentmethod", payment);
    data.append("totalamount", totalamount);
    data.append("fromdate", fromdate);
    data.append("todate", todate);

    try {
      const response = await axios.post("http://localhost:3000/booknow/book", data, {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("Booked successfully");

        if (payment === "khalti" && response.data.url) {
          // Redirect to Khalti Payment Page if payment method is Khalti
          window.location.href = response.data.url;
        } else {
          // Proceed to success page for COD
      
        }
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error booking the bike.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-cover bg-center">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl backdrop-blur-md bg-opacity-90">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Book Your Ride</h2>
          <form onSubmit={bookNow} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-gray-700">Full Name</span>
                <input type="text" className="input-field" placeholder="Enter Full Name" onChange={(e) => setName(e.target.value)} required />
              </label>
              <label className="block">
                <span className="text-gray-700">Location</span>
                <input type="text" className="input-field" placeholder="Enter Location" onChange={(e) => setLocation(e.target.value)} required />
              </label>
              <label className="block">
                <span className="text-gray-700">Contact Number</span>
                <input type="text" className="input-field" placeholder="Enter Contact Number" onChange={(e) => setContact(e.target.value)} required />
              </label>
              <label className="block">
                <span className="text-gray-700">Email Address</span>
                <input type="email" className="input-field" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-gray-700">From Date</span>
                <input type="date" className="input-field" onChange={(e) => setFromDate(e.target.value)} required />
              </label>
              <label className="block">
                <span className="text-gray-700">To Date</span>
                <input type="date" className="input-field" onChange={(e) => setToDate(e.target.value)} required />
              </label>
            </div>

            <label className="block">
              <span className="text-gray-700">Total Amount</span>
              <input type="text" className="input-field" value={`Rs. ${totalamount}`} readOnly />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="file-upload">
                <span>Upload Citizenship</span>
                <input type="file" onChange={(e) => setCitizenship(e.target.files[0])} required />
              </label>
              <label className="file-upload">
                <span>Upload License</span>
                <input type="file" onChange={(e) => setLicense(e.target.files[0])} required />
              </label>
            </div>

            <fieldset className="mt-4">
              <legend className="text-lg font-semibold text-gray-700">Choose Payment Method</legend>
              <div className="flex items-center gap-6 mt-2">
                <label className="radio-btn">
                  <input type="radio" name="payment" value="cod" onChange={(e) => setPayment(e.target.value)} required />
                  Cash on Delivery (COD)
                </label>
                <label className="radio-btn">
                  <input type="radio" name="payment" value="khalti" onChange={(e) => setPayment(e.target.value)} required />
                  Pay with Khalti
                </label>
              </div>
            </fieldset>

            <div className="text-center">
              <button className="btn-primary">Book Now</button>
            </div>
          </form>
        </div>
      </div>
      <style>
        {`
          .input-field {
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 8px;
            width: 100%;
            font-size: 16px;
            outline: none;
            transition: all 0.3s;
          }
          .input-field:focus {
            border-color: #007bff;
            box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
          }
          .file-upload {
            border: 2px dashed #ddd;
            padding: 10px;
            text-align: center;
            cursor: pointer;
            border-radius: 8px;
            background: #fafafa;
          }
          .file-upload input {
            display: none;
          }
          .radio-btn {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
          }
          .btn-primary {
            background: #007bff;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            transition: 0.3s;
          }
          .btn-primary:hover {
            background: #0056b3;
          }
        `}
      </style>
      <Footer/>
    </>
  );
}

export default Booknow;
