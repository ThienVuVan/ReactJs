
var person = {
    name: "thien",
    address: {
        city: "Ninh Binh",
        vilage: "Bach Lien",
    },
    profiles: ["facebook", "youtube"],
    greet: () => {
        person.profiles.map(item => console.log(item));
    }
}


function Person() {
    return (
        <>
            <div>{console.log("My name is ", person.name, " I am from ", person.address.vilage)}</div>
            <div>{person.greet()}</div>
        </>

    )
}

export default Person;