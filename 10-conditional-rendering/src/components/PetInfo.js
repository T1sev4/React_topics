function PetInfo(props) {
  const { animal, age, hasPet } = props;
  console.log(props);
  return hasPet ? (
    <h1>{`My ${animal} is ${age} years old`}</h1>
  ) : (
    <h2>I don't have animal</h2>
  );
}
export default PetInfo;
