import { useSelector } from "react-redux";

export default function Result() {
    let result = useSelector(s=>s.search);
  return (
    <div>
        <div>
          <p>Location: {result.location?.name}, {result.location?.country}</p>
          <p>Temperature: {result.current?.temp_c} c</p>
          <p>{result.current?.condition.text} <img src={result.current?.condition.icon} alt="" /></p>
        </div>
      
    </div>
  );
}
