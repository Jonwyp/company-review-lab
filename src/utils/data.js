const endpoints = {
  "0": "GET /",
  "1": "GET /companies",
  "2": "POST /companies",
  "3": "GET /companies/:id",
  "4": "POST /companies/:id/reviews",
  "5": "GET /user",
  "6": "POST /user"
};

const companiesData = [
  {
    id: "e5cc2c0a-93b5-4014-8910-6ed9f3056456",
    companyName: "Brakus, Aufderhar and Gutkowski",
    companySuffix: "and Sons",
    numberOfEmployees: 60497,
    description:
      "Voluptas reiciendis quasi expedita ex qui sit. Qui enim facilis adipisci qui.",
    reviews: [
      {
        id: "7da4d967-715b-4dc1-a74b-82a7992704f3",
        userId: "f6e016e6-e254-4375-bf82-797e6c00e3eb",
        userName: "Brennan Fisher",
        rating: 0,
        title: "eligendi adipisci",
        review:
          "Consequatur esse beatae voluptate voluptatibus expedita aperiam perspiciatis cumque voluptatem. Cum quasi dolor ut dignissimos illum magni eos. Et aspernatur illum commodi."
      },
      {
        id: "fa07ef47-5849-4642-8af0-640e4887b1e6",
        userId: "13d0782f-2793-4c83-8279-93c9a03b3ac3",
        userName: "Annalise Nicolas",
        rating: 4,
        title: "iusto consequatur",
        review:
          "Facere dicta delectus impedit sunt sed officia omnis. Officiis vel optio corrupti iure. Atque iusto nemo. Ut voluptas quaerat omnis quis impedit maiores nihil ipsam. Quod ea sed voluptates. Dolorem officia esse enim."
      }
    ]
  }
];

const companiesDataWithoutReviews = [
  {
    id: "e5cc2c0a-93b5-4014-8910-6ed9f3056456",
    companyName: "Brakus, Aufderhar and Gutkowski",
    companySuffix: "and Sons",
    numberOfEmployees: 60497,
    description:
      "Voluptas reiciendis quasi expedita ex qui sit. Qui enim facilis adipisci qui."
  }
];

const newCompany = {
  id: "a1ffdde3-d686-72ee-02cf-063e7665989e",
  companyName: "Klean Kanteen",
  companySuffix: "Insulated",
  numberOfEmployees: 130790,
  description:
    "Sed nec sollicitudin tortor. Praesent vitae consequat sapien. Sed condimentum, tortor non scelerisque finibus, nisi nunc lacinia neque, et fringilla libero libero quis leo.",
  reviews: [
    {
      id: "b26124ce-6b67-05dc-d920-855d17cd912d",
      userId: "d7818d8c-46c3-a0f7-fd7b-cc373d8f9e31",
      userName: "Brennan Fisher",
      rating: 5,
      title: "eligendi adipisci",
      review:
        "Consequatur esse beatae voluptate voluptatibus expedita aperiam perspiciatis cumque voluptatem. Cum quasi dolor ut dignissimos illum magni eos. Et aspernatur illum commodi."
    },
    {
      id: "f9f37c0f-7859-1d59-4814-a4bd527da4f0",
      userId: "ef107d54-13a6-83f8-e49e-41c74ed505b6",
      userName: "Annalise Nicolas",
      rating: 4,
      title: "iusto consequatur",
      review:
        "Facere dicta delectus impedit sunt sed officia omnis. Officiis vel optio corrupti iure. Atque iusto nemo. Ut voluptas quaerat omnis quis impedit maiores nihil ipsam. Quod ea sed voluptates. Dolorem officia esse enim."
    }
  ]
};

const fakeUser = {
  userId: "754aece9-64bf-42ab-b91c-bb65e2db3a37",
  userName: "Humberto Bruen"
};

const newReview = {
  userId: "754aece9-64bf-42ab-b91c-bb65e2db3a37",
  userName: "Humberto Bruen",
  rating: 4,
  title: "eligendi adipisci",
  review:
    "Et voluptatem voluptas quisquam quos officia assumenda. Mollitia delectus vitae quia molestias nulla ut hic praesentium. Sed et assumenda et iusto velit laborum sunt non."
};

module.exports = {
  endpoints,
  companiesData,
  companiesDataWithoutReviews,
  newCompany,
  fakeUser,
  newReview
};
