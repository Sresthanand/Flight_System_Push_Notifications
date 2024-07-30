import React, { useState, useEffect } from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "./styles/BookTicket.css";

const BookTicket = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    const loadAirports = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:5000/airport/api/get"
        );
        setAirports(response.data.rows);
      } catch (error) {
        console.error("Error loading airports", error);
      }
    };
    loadAirports();
  }, []);

  const onSubmit = (data) => {
    Axios.post("http://localhost:5000/BookTicket", data)
      .then((response) => {
        if (response.data.err) console.log(response.data.err);
      })
      .catch((error) => {
        console.error("Error booking ticket", error);
      });
    history.push(`/AvailableFlights/${id}`);
  };

  return (
    <div className="bg-img">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="form-label">Flying From</label>
          <div className="input-icon">
            <FaPlaneDeparture className="icon" />
            <select
              {...register("departure", { required: "Departure is required" })}
              className="form-input"
            >
              <option value="" disabled selected>
                --Select Airport--
              </option>
              {airports.map((airport) => (
                <option key={airport.airport_name} value={airport.airport_name}>
                  {airport.airport_name}
                </option>
              ))}
            </select>
          </div>
          {errors.departure && (
            <p className="form-error">{errors.departure.message}</p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Flying To</label>
          <div className="input-icon">
            <FaPlaneArrival className="icon" />
            <select
              {...register("arrival", { required: "Arrival is required" })}
              className="form-input"
            >
              <option value="" disabled selected>
                --Select Airport--
              </option>
              {airports.map((airport) => (
                <option key={airport.airport_name} value={airport.airport_name}>
                  {airport.airport_name}
                </option>
              ))}
            </select>
          </div>
          {errors.arrival && (
            <p className="form-error">{errors.arrival.message}</p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Departure Date</label>
          <input
            type="date"
            {...register("departureDate", {
              required: "Departure date is required",
            })}
            className="form-input"
          />
          {errors.departureDate && (
            <p className="form-error">{errors.departureDate.message}</p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Return Date</label>
          <input
            type="date"
            {...register("returnDate", { required: "Return date is required" })}
            className="form-input"
          />
          {errors.returnDate && (
            <p className="form-error">{errors.returnDate.message}</p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Class</label>
          <select
            {...register("class", { required: "Class is required" })}
            className="form-input"
          >
            <option>Economy</option>
            <option>Business</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Price</label>
          <select
            {...register("price", { required: "Price is required" })}
            className="form-input"
          >
            <option>All Prices</option>
            <option>$1000</option>
            <option>$2000</option>
            <option>$3000</option>
            <option>$4000</option>
            <option>$5000</option>
          </select>
        </div>

        <button type="submit" className="btn-primary">
          Find Flight
        </button>
      </form>
    </div>
  );
};

export default BookTicket;
