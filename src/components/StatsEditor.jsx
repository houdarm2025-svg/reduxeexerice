import { useDispatch } from "react-redux";
import { setStat } from "../Redux/ActionsCreators";

const StatsEditor = () => {
  const dispatch = useDispatch();

  return (
    <>
      <input type="number" min="0" max="5"
        onChange={(e) => dispatch(setStat("strength", Number(e.target.value)))} />
      <input type="number" min="0" max="5"
        onChange={(e) => dispatch(setStat("intelligence", Number(e.target.value)))} />
      <input type="number" min="0" max="5"
        onChange={(e) => dispatch(setStat("agility", Number(e.target.value)))} />
    </>
  );
};

export default StatsEditor;
