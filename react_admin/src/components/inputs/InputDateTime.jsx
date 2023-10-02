import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function InputDateTime({ date, setDate, showTime = false }) {
	return (
		<>
			<DatePicker
				selected={date}
				onChange={(date) => setDate(date)}
				className="form-control"
				dateFormat={showTime ? "dd/MM/yyyy HH:mm:ss" : "dd/MM/yyyy"}
				showTimeInput={showTime}
			></DatePicker>
		</>
	);
}

export default InputDateTime;
