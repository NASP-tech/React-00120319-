export const people =[
    {
      name: "Coco Chanel",
      origin: "France",
      price: 44.00,
      gender: "Women"
    },
    {
      name: "Jadore",
      origin: "Francia",
      price: 89.60,
      gender: "Women"
    },
    {
      name: "Guilty",
      origin: "Italy",
      price: 84.44,
      gender: "Men"
    },
    {
      name: "Lacoste Sport",
      origin: "France",
      price: 61.00,
      gender: "Men"
    },
    {
      name: "La Vie est Belle",
      origin: "France",
      price: 92.22,
      gender: "Women"
    },
    {
      name: "Versace",
      origin: "Italy",
      price: 48.13,
      gender: "Men"
    }
  ];

  
  const showPeople = people => {
    people.forEach(person => {
      const { name, origin, gender, price } = person;
      console.log(
        `Name ${name}. Country origin ${origin}. Price ${price} For ${gender}`
      );
    });
  };
  
  const addNewPerson = person => {
    people.push(person);
    showPeople(people);
  };
  
  const deleteLastPerson = () => {
    people.pop();
    showPeople(people);
  };
  
  const ageAverage = () => {
    return (
      people.reduce((acc, current) => {
        return acc + current.price;
      }, 0) / people.length
    );
  };
  
  const showByGender = gender => {
    const filteredPeople = people.filter(person => {
      return person.gender === gender;
    });
    showPeople(filteredPeople);
  };
  
  const showOver18 = () => {
    const filteredPeople = people.filter(person => {
      const { price } = person;
      return price >= 18;
    });
    showPeople(filteredPeople);
  };
  
  addNewPerson({ name: "Piere Cardin", origin: "Italy", gender: "Men", price: 19.99 });
  console.log("---------------------------");
  deleteLastPerson();
  console.log("---------------------------");
  console.log(ageAverage());
  console.log("---------------------------");
  showByGender();
  console.log("---------------------------");
  showOver18();

