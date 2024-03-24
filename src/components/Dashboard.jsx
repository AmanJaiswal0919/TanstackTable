 import React from "react";
import BasicTable from "./BasicTable";
import { useState } from "react";
import { useEffect } from "react";
export default function Dashboard() {
 /* const columns = [
  {
      header: "ID",
      accessorKey: "id",
     
    },
    {
      header: "FIRSTNAME",
      accessorKey: "first_name",
     
    },
    {
      header: "LASTNAME",
      accessorKey: "last_name",
     
    },
    {
      header: "EMAIL",
      accessorKey: "email",
    
    },
    {
      header: "GENDER",
      accessorKey: "gender",
      
    },
    {
      header: "DOB",
      accessorKey: "dob",
      
    },
  ]*/
  
  /*const data=[
    {
      "id": 1,
      "first_name": "Isador",
      "last_name": "Kruger",
      "email": "ikruger0@huffingtonpost.com",
      "gender": "Male",
      "dob": "2023-04-28T11:19:35Z"
    },
    {
      "id": 2,
      "first_name": "Brady",
      "last_name": "Gommery",
      "email": "bgommery1@amazon.de",
      "gender": "Male",
      "dob": "2022-12-11T17:35:54Z"
    },
    {
      "id": 3,
      "first_name": "Boycie",
      "last_name": "Drei",
      "email": "bdrei2@uol.com.br",
      "gender": "Male",
      "dob": "2021-04-25T04:40:04Z"
    },
    {
      "id": 4,
      "first_name": "Connie",
      "last_name": "Wooffinden",
      "email": "cwooffinden3@desdev.cn",
      "gender": "Male",
      "dob": "2022-04-12T17:18:02Z"
    },
    {
      "id": 5,
      "first_name": "Denni",
      "last_name": "Huie",
      "email": "dhuie4@toplist.cz",
      "gender": "Female",
      "dob": "2021-01-15T15:08:19Z"
    },
    {
      "id": 6,
      "first_name": "Denney",
      "last_name": "Moncarr",
      "email": "dmoncarr5@jigsy.com",
      "gender": "Male",
      "dob": "2021-12-23T09:44:18Z"
    },
    {
      "id": 7,
      "first_name": "Nowell",
      "last_name": "Leeburn",
      "email": "nleeburn6@reddit.com",
      "gender": "Male",
      "dob": "2023-05-02T23:30:45Z"
    },
    {
      "id": 8,
      "first_name": "Rosie",
      "last_name": "Mattaus",
      "email": "rmattaus7@google.co.uk",
      "gender": "Female",
      "dob": "2022-12-14T07:51:24Z"
    },
    {
      "id": 9,
      "first_name": "Hetti",
      "last_name": "Capnor",
      "email": "hcapnor8@google.ru",
      "gender": "Female",
      "dob": "2022-11-09T02:01:23Z"
    },
    {
      "id": 10,
      "first_name": "Sayre",
      "last_name": "Moriarty",
      "email": "smoriarty9@usa.gov",
      "gender": "Male",
      "dob": "2023-05-29T08:10:06Z"
    },
    {
      "id": 11,
      "first_name": "Kippie",
      "last_name": "McArtan",
      "email": "kmcartana@nhs.uk",
      "gender": "Female",
      "dob": "2021-07-18T23:40:11Z"
    },
    {
      "id": 12,
      "first_name": "Madalena",
      "last_name": "Waye",
      "email": "mwayeb@yahoo.co.jp",
      "gender": "Female",
      "dob": "2022-11-13T18:22:09Z"
    },
    {
      "id": 13,
      "first_name": "Norby",
      "last_name": "Filon",
      "email": "nfilonc@admin.ch",
      "gender": "Male",
      "dob": "2021-02-05T23:38:07Z"
    },
    {
      "id": 14,
      "first_name": "Jemima",
      "last_name": "Stovine",
      "email": "jstovined@bloglines.com",
      "gender": "Female",
      "dob": "2022-05-14T00:26:26Z"
    },
    {
      "id": 15,
      "first_name": "Hermie",
      "last_name": "Evetts",
      "email": "hevettse@example.com",
      "gender": "Male",
      "dob": "2023-01-09T06:08:10Z"
    },
    {
      "id": 16,
      "first_name": "Robb",
      "last_name": "Guage",
      "email": "rguagef@nifty.com",
      "gender": "Male",
      "dob": "2020-11-18T02:35:10Z"
    },
    {
      "id": 17,
      "first_name": "Dave",
      "last_name": "Standall",
      "email": "dstandallg@over-blog.com",
      "gender": "Male",
      "dob": "2023-03-01T14:37:21Z"
    },
    {
      "id": 18,
      "first_name": "Husein",
      "last_name": "Arlett",
      "email": "harletth@squidoo.com",
      "gender": "Male",
      "dob": "2020-12-24T02:15:36Z"
    },
    {
      "id": 19,
      "first_name": "Zahara",
      "last_name": "Odgaard",
      "email": "zodgaardi@studiopress.com",
      "gender": "Female",
      "dob": "2022-02-11T20:53:10Z"
    },
    {
      "id": 20,
      "first_name": "Curry",
      "last_name": "O'Codihie",
      "email": "cocodihiej@slideshare.net",
      "gender": "Male",
      "dob": "2020-06-28T00:30:46Z"
    },
    {
      "id": 21,
      "first_name": "Moria",
      "last_name": "Blenkharn",
      "email": "mblenkharnk@bbb.org",
      "gender": "Female",
      "dob": "2021-03-23T22:43:07Z"
    },
    {
      "id": 22,
      "first_name": "Dannie",
      "last_name": "Helleckas",
      "email": "dhelleckasl@wordpress.org",
      "gender": "Male",
      "dob": "2022-03-29T06:03:00Z"
    },
    {
      "id": 23,
      "first_name": "Gail",
      "last_name": "Benet",
      "email": "gbenetm@diigo.com",
      "gender": "Female",
      "dob": "2022-05-31T08:42:44Z"
    },
    {
      "id": 24,
      "first_name": "Davon",
      "last_name": "Methven",
      "email": "dmethvenn@ft.com",
      "gender": "Male",
      "dob": "2021-12-26T22:25:45Z"
    },
    {
      "id": 25,
      "first_name": "Bent",
      "last_name": "Godsell",
      "email": "bgodsello@free.fr",
      "gender": "Male",
      "dob": "2021-08-19T13:13:47Z"
    },
    {
      "id": 26,
      "first_name": "Arabella",
      "last_name": "Cham",
      "email": "achamp@squidoo.com",
      "gender": "Female",
      "dob": "2021-05-31T19:23:11Z"
    },
    {
      "id": 27,
      "first_name": "Husain",
      "last_name": "Gilhooly",
      "email": "hgilhoolyq@marriott.com",
      "gender": "Male",
      "dob": "2020-05-04T13:23:45Z"
    },
    {
      "id": 28,
      "first_name": "Susanna",
      "last_name": "Tredger",
      "email": "stredgerr@chron.com",
      "gender": "Female",
      "dob": "2020-07-15T14:56:36Z"
    },
    {
      "id": 29,
      "first_name": "Xylina",
      "last_name": "Bunworth",
      "email": "xbunworths@usnews.com",
      "gender": "Female",
      "dob": "2022-10-19T05:19:53Z"
    },
    {
      "id": 30,
      "first_name": "Baily",
      "last_name": "Ethridge",
      "email": "bethridget@cbsnews.com",
      "gender": "Male",
      "dob": "2022-03-04T12:43:55Z"
    },
    {
      "id": 31,
      "first_name": "Berky",
      "last_name": "Laste",
      "email": "blasteu@nih.gov",
      "gender": "Male",
      "dob": "2020-07-17T05:07:27Z"
    },
    {
      "id": 32,
      "first_name": "Hana",
      "last_name": "Shoubridge",
      "email": "hshoubridgev@multiply.com",
      "gender": "Female",
      "dob": "2022-04-22T17:24:13Z"
    },
    {
      "id": 33,
      "first_name": "Nolly",
      "last_name": "Rebert",
      "email": "nrebertw@pagesperso-orange.fr",
      "gender": "Male",
      "dob": "2022-03-31T04:40:42Z"
    },
    {
      "id": 34,
      "first_name": "Cassie",
      "last_name": "Akhurst",
      "email": "cakhurstx@e-recht24.de",
      "gender": "Female",
      "dob": "2021-09-19T05:41:32Z"
    },
    {
      "id": 35,
      "first_name": "Harris",
      "last_name": "Colvie",
      "email": "hcolviey@google.es",
      "gender": "Male",
      "dob": "2023-02-06T13:56:03Z"
    },
    {
      "id": 36,
      "first_name": "Reynard",
      "last_name": "Sulter",
      "email": "rsulterz@auda.org.au",
      "gender": "Male",
      "dob": "2021-08-19T18:47:57Z"
    },
    {
      "id": 37,
      "first_name": "Ruben",
      "last_name": "Rigge",
      "email": "rrigge10@cafepress.com",
      "gender": "Male",
      "dob": "2021-03-24T05:01:06Z"
    },
    {
      "id": 38,
      "first_name": "Vince",
      "last_name": "Le Claire",
      "email": "vleclaire11@wsj.com",
      "gender": "Male",
      "dob": "2021-07-09T12:20:49Z"
    },
    {
      "id": 39,
      "first_name": "Gery",
      "last_name": "Longhorne",
      "email": "glonghorne12@nsw.gov.au",
      "gender": "Male",
      "dob": "2021-05-02T22:15:40Z"
    },
    {
      "id": 40,
      "first_name": "Jakob",
      "last_name": "Owbrick",
      "email": "jowbrick13@icq.com",
      "gender": "Male",
      "dob": "2021-03-08T18:52:46Z"
    },
    {
      "id": 41,
      "first_name": "Ernesta",
      "last_name": "Burmingham",
      "email": "eburmingham14@admin.ch",
      "gender": "Bigender",
      "dob": "2020-05-12T08:02:51Z"
    },
    {
      "id": 42,
      "first_name": "Odetta",
      "last_name": "Skae",
      "email": "oskae15@tripod.com",
      "gender": "Female",
      "dob": "2022-12-01T08:23:47Z"
    },
    {
      "id": 43,
      "first_name": "Denice",
      "last_name": "Alesio",
      "email": "dalesio16@ucla.edu",
      "gender": "Female",
      "dob": "2022-06-18T11:14:45Z"
    },
    {
      "id": 44,
      "first_name": "Kori",
      "last_name": "Dodds",
      "email": "kdodds17@cornell.edu",
      "gender": "Genderqueer",
      "dob": "2021-12-14T21:12:09Z"
    },
    {
      "id": 45,
      "first_name": "Aura",
      "last_name": "St Clair",
      "email": "astclair18@java.com",
      "gender": "Female",
      "dob": "2022-04-28T21:15:34Z"
    },
    {
      "id": 46,
      "first_name": "Luigi",
      "last_name": "Minshaw",
      "email": "lminshaw19@un.org",
      "gender": "Male",
      "dob": "2022-05-13T15:05:40Z"
    },
    {
      "id": 47,
      "first_name": "Herminia",
      "last_name": "Antuk",
      "email": "hantuk1a@va.gov",
      "gender": "Female",
      "dob": "2023-03-29T00:03:09Z"
    },
    {
      "id": 48,
      "first_name": "Ezra",
      "last_name": "Littrell",
      "email": "elittrell1b@wiley.com",
      "gender": "Male",
      "dob": "2023-03-11T15:22:01Z"
    },
    {
      "id": 49,
      "first_name": "Thorin",
      "last_name": "Matantsev",
      "email": "tmatantsev1c@pagesperso-orange.fr",
      "gender": "Male",
      "dob": "2022-11-12T20:51:40Z"
    },
    {
      "id": 50,
      "first_name": "Gabbie",
      "last_name": "Nashe",
      "email": "gnashe1d@google.de",
      "gender": "Male",
      "dob": "2022-01-19T06:39:05Z"
    }
  ]*/
  const movieColumns = [
    {
      header: "ID",
      accessorKey: "id",
     
    },
    {
      header: "NAME",
      accessorKey: "name",
     
    },
    {
      header: "USERNAME",
      accessorKey: "username",
    
    },
    {
      header: "EMAIL",
      accessorKey: "email",
      
    },
  ];
  const [data, setdata] = useState({});
  function fetchJoke () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      setdata(data);
      console.log(data);
    })
    .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchJoke()
  }, []);
  
  return (
    <div>
      <BasicTable data={data} columns={movieColumns} />
    </div>
  );
}
