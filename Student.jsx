function Student() {
  return <h1>My Website</h1>;

}
export function StudentA(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Student;