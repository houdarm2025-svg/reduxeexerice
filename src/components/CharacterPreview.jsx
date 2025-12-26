import { useSelector } from "react-redux";

const CharacterPreview  = () => {
  const perso = useSelector(state => state);

  return (
    <div>
      <h3>{perso.name}</h3>
      <p>Classe : {perso.class}</p>
      <p>Force : {perso.stats.strength}</p>
      <p>Intelligence : {perso.stats.intelligence}</p>
      <p>Agilité : {perso.stats.agility}</p>
      <strong>Total : {perso.totalPoints}</strong>
    </div>
  );
};

export default CharacterPreview  ;
