const fs = require("fs");

const filePath = "./cv-partner-sindre.json";
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;
  const jsonData = JSON.parse(data);
  cleanUpJsonData(jsonData);
  return jsonData;
});

/*
{
  "_id": "6267d257d9d1d50ff15bbf64",
  "born_day": 1,
  "born_month": 1,
  "born_year": 1996,
  "bruker_id": "6267d257d9d1d50ff15bbf63",
  "courses": [
    {
      "_id": "6316efced6ac310fd78f6bb8",
      "created_at": "2022-09-06T06:59:26.118Z",
      "disabled": false,
      "diverged_from_master": false,
      "external_unique_id": null,
      "long_description": {
        "no": "Sindre var interessert i programmering allerede på videregående. Han tok et nettkurs  i  Python, med forelesninger og innleveringer.",
        "int": ""
      },
      "modifier_id": null,
      "month": "01",
      "name": { "no": "Learn to Program: The Fundamentals", "int": "" },
      "order": 2,
      "origin_id": null,
      "owner_updated_at": "2022-09-06T07:55:10.000Z",
      "program": { "no": "University of Toronto", "int": "" },
      "recently_added": false,
      "starred": false,
      "updated_at": "2023-02-23T06:34:33.363Z",
      "version": 60,
      "year": "2014",
      "attachments": []
    },
    {
      "_id": "6316fcf0b1b84d0f8c6e96d4",
      "created_at": "2022-09-06T07:55:28.314Z",
      "disabled": false,
      "diverged_from_master": false,
      "external_unique_id": null,
      "long_description": {
        "no": "Ved siden av videregående utdanning tok Sindre et emne om grunnleggende datateknologiprinsipper fra Harvard. Kurset var omfattende, med forelesninger og obligatoriske oppgaver som skulle leveres. I kurset programmerte de mye i C, ",
        "int": ""
      },
      "modifier_id": null,
      "month": "12",
      "name": { "no": "CS50: Introduction to Computer Science", "int": "" },
      "order": 3,
      "origin_id": null,
      "owner_updated_at": "2022-09-06T08:03:18.000Z",
      "program": { "no": "University of Harvard", "int": "" },
      "recently_added": false,
      "starred": false,
      "updated_at": "2023-02-23T06:34:33.375Z",
      "version": 60,
      "year": "2014",
      "attachments": []
    },
    {
      "_id": "63567328397e430fa88a5262",
      "attachments": [
        {
          "_id": "6356737a9c33870ffe90f63c",
          "id": "6356737a9c33870ffe90f63c",
          "label": "NSM grunnprinsipper for IKT-sikkerhet kursbevis",
          "file": {
            "url": "https://cvpartner-attachments.s3.eu-west-1.amazonaws.com/companies/531470a12f274fc51d000001/users/6267d257d9d1d50ff15bbf63/courses/6356737a9c33870ffe90f63c.pdf?X-Amz-Expires=600\u0026X-Amz-Date=20230403T105102Z\u0026X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIHcd9tej6sVvfWUXoYBaedrndmf%2B4lmVetmJTLe9ueiHAiAYkT3k7X6Hzd94mwl%2BBsYTy7phlGvOb3SmIel8D9S5Ziq4BQjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDU3MTU4MDAxMDEzMiIMdMsqWjD5y34uHcBMKowFTv1X4kQ%2FyTXxycRV1ISFiXXT6ZV6Lv9qVwDSWbrnfVEuK6I5CJsGksdCJJpVmLu%2BTd8C0Nl1kl3I6WrYgtd4u%2ByG5%2B8u6DcQaxMEFnY0%2BAXb%2Fe%2FxO8IKl8wscGwTP7XzaqDW%2BZprWWG5kM8kUc8QNhfaBxCMmwpnOfPeuKet0KK6fIX6w5qjEICJIUg1JPhJ8GkSUYFmUbG9bcD6MV3kSOWZtSYRQjJg%2FtLSUfV0yVzFj7VxZ7CxbEMMr3YPDULLW6ZoHTLIKwlaSmT4CnRKaHL8TQQlzvJfGPR9SowbgmVxTGrIKGnZtrd6h8O2AMtuNdkxrexCSswe9jdvJX%2FcPkMQhYHhYFDdtv95UqM8sNHVVS6QCM%2FKItpLW2p1k8eEUGcm1YuslQNR1FScj9tOSHA5NbTqURmtxZFXqHAaO9zcJQdt9R%2BoMIQBYMR2cv0Z0heQHUMVPJhh%2F%2BHpXExzDJ65wc9b4rY56c5UioTkiRmhWRW0QOdcfB9TnmCm5gWuW5gsMpL1u5C4wPaBgM6SpvwXz8PFwOG3lRFsxYFW4imXZ%2B1v1fJ1ycxN4w6IN%2Bii0Wz1KD%2FJeWaaNdKEizDpfqdR8KppIMXlu1VXwkN45%2BrUgZGTRF49x%2BNlPNYLHYUzSBnYp5vRdzCETKdrOCrX3wtc7CySHADf%2FMmsROelNCMcv5fQV9fgdLfg6lEaKusLvZ%2BWx1kb7MdmOOFuZVIHh1RjuTNsy6h4fp4dXySaPKUF3oOZ%2BVdWBgMW4WvmhQloZhnNOKGz3qsh1OUqvc6B66g2Q2F0fd3SmGBOQbzDm2gygrToK4C%2BsbH27ITl2L6DSZ%2BPn%2Bdhvki4OQTEVaQwNN6%2BQK9NmC8ZkAHqlDCdoqqhBjqyARBipZe4Ii5Crpe288VadWnry7CuI257EzJK8IgNTuenzUvPnVM0u7F5RuwjzV%2BlX2APaA9DLPUAYCdpY2VbjsjHC7fdZqOb0pjRNHFyTn5pNq%2FHvEYi3Dc0oCWquq9C6eUu%2F1852u4gHyeCa9Xn10ftSMi1Gxq%2FmiItF9mL93WB22Tal63X7AOyZaJg4Un34jiI7OFWEPfQtceP2eO3WNM0QAQPrz8nc1gwF7KH7%2BkYB%2Bw%3D\u0026X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=ASIAYKFGSZ2KKYAO323P%2F20230403%2Feu-west-1%2Fs3%2Faws4_request\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=400ca8eb4d8332e5b837d98d0096082736df7a8a1328026260f77b6b768ec551",
            "extension": "pdf"
          }
        }
      ],
      "created_at": "2022-10-24T11:12:40.983Z",
      "disabled": false,
      "diverged_from_master": false,
      "external_unique_id": null,
      "long_description": {
        "no": "Kurset bidrar til å bygge både kompetanse og bedre sikkerhetsnivå i norske virksomheter. Det er relevant for private som offentlige aktører. Grunnprinsippene for IKT-sikkerhet gir råd for å beskytte informasjonssystemer, data og tjenester mot uautorisert tilgang, skade eller misbruk. \n\nMålet er at enda flere norske bedrifter, organisasjoner, kommuner og etater skal løfte nivået på egen sikkerhet. Årvåkne ansatte er alfa omega for å lykkes med arbeidet. Kurset er gratis i oktober for at enda flere i virksomheter, ikke bare sikkerhetsansvarlige, skal få kunnskap på området. Sikkerhet er et lederansvar, og vi håper at mange ledere benytter denne muligheten til å prioritere arbeidet.  ",
        "int": ""
      },
      "modifier_id": null,
      "month": "10",
      "name": { "no": "NSM grunnprinsipper for IKT-sikkerhet", "int": "" },
      "order": 4,
      "origin_id": null,
      "owner_updated_at": "2022-10-24T11:15:41.000Z",
      "program": { "no": "NSM", "int": "" },
      "recently_added": false,
      "starred": false,
      "updated_at": "2023-02-23T06:34:33.384Z",
      "version": 11,
      "year": "2022"
    },
    {
      "_id": "63f708f9712d220f2efa8426",
      "created_at": "2023-02-23T06:34:33.893Z",
      "disabled": false,
      "diverged_from_master": false,
      "external_unique_id": null,
      "long_description": {
        "no": "Sindre hadde et kurs i Sanity v3 best practices arrangert av utviklerne bak Santity",
        "int": ""
      },
      "modifier_id": null,
      "month": "02",
      "name": { "no": "Day One with Sanity Studio", "int": "" },
      "order": 0,
      "origin_id": null,
      "owner_updated_at": "2023-02-23T06:35:43.000Z",
      "program": { "no": "Sanity.io", "int": "" },
      "recently_added": false,
      "starred": false,
      "updated_at": "2023-02-23T06:35:43.217Z",
      "version": 23,
      "year": "2023",
      "attachments": []
    }
  ],
  "created_at": "2022-04-26T11:07:04.391Z",
  "custom_tag_ids": [],
  "cv_roles": [
    {
      "_id": "626a68448ede140ffbadcf46",
      "created_at": "2022-04-28T10:11:17.092Z",
      "disabled": false,
      "diverged_from_master": false,
      "modifier_id": null,
      "name": { "no": "Sjefsutvikler" },
      "order": null,
      "origin_id": null,
      "owner_updated_at": "2022-09-06T06:57:33.000Z",
      "recently_added": false,
      "starred": true,
      "starred_order": 1,
      "updated_at": "2022-09-06T06:57:33.621Z",
      "version": null,
      "years_of_experience": 5,
      "years_of_experience_offset": 0,
      "project_experiences": [
        {
          "_id": "6267e35b829c4f0fb06f8044",
          "roles": [{ "_id": "626a68458ede140ffbadcf4f" }],
          "diverged_from_master": false
        }
      ]
    },
    {
      "_id": "626a684b8ede141004add0d7",
      "created_at": "2022-04-28T10:11:23.458Z",
      "disabled": false,
      "diverged_from_master": false,
      "modifier_id": null,
      "name": { "no": "Fullstack-utvikler og arkitekt" },
      "order": null,
      "origin_id": null,
      "owner_updated_at": "2022-09-06T06:57:44.000Z",
      "recently_added": false,
      "starred": true,
      "starred_order": 3,
      "updated_at": "2022-11-25T13:06:11.309Z",
      "version": 3,
      "years_of_experience": 0,
      "years_of_experience_offset": 0,
      "project_experiences": [
        {
          "_id": "6267e1ae829c4f0fba6f7f2b",
          "roles": [{ "_id": "626a684b8ede141004add0d8" }],
          "diverged_from_master": false
        }
      ]
    },
    {
      "_id": "62fe3896ba0cad0fd575ba0d",
      "created_at": "2022-08-18T13:03:19.238Z",
      "disabled": false,
      "diverged_from_master": false,
      "modifier_id": null,
      "name": {
        "no": "Data Scientist",
        "dk": "Data Scientist",
        "int": "Data Scientist",
        "fi": "Data Scientist",
        "se": "Data Scientist"
      },
      "order": 3,
      "origin_id": null,
      "owner_updated_at": "2022-09-06T06:57:31.000Z",
      "recently_added": false,
      "starred": true,
      "starred_order": 0,
      "updated_at": "2022-09-06T06:57:31.587Z",
      "version": null,
      "years_of_experience": 1,
      "years_of_experience_offset": 0,
      "project_experiences": [
        {
          "_id": "62fe272b93ed350f83a11789",
          "roles": [{ "_id": "62fe388fd81fb20fa09046fd" }],
          "diverged_from_master": false
        }
      ]
    },
    {
      "_id": "62ff7f6bd270d20fb17750e7",
      "created_at": "2022-08-19T12:17:48.187Z",
      "disabled": false,
      "diverged_from_master": false,
      "modifier_id": null,
      "name": { "no": "Backend-utvikler" },
      "order": 4,
      "origin_id": null,
      "owner_updated_at": "2022-08-19T12:31:58.000Z",
      "recently_added": false,
      "starred": false,
      "starred_order": null,
      "updated_at": "2022-11-25T13:08:59.682Z",
      "version": 2,
      "years_of_experience": 0,
      "years_of_experience_offset": 0,
      "project_experiences": [
        {
          "_id": "62fe38b193ed350f88a119ad",
          "roles": [{ "_id": "62ff78569fb1560f5914d505" }],
          "diverged_from_master": false
        }
      ]
    },
    {
      "_id": "6322d9b96719ed0fabc1fb1a",
      "created_at": "2022-09-15T07:52:26.331Z",
      "disabled": false,
      "diverged_from_master": false,
      "modifier_id": null,
      "name": { "no": "Tech Lead" },
      "order": 5,
      "origin_id": null,
      "owner_updated_at": "2022-09-15T07:53:01.000Z",
      "recently_added": false,
      "starred": false,
      "starred_order": null,
      "updated_at": "2022-09-15T07:53:01.857Z",
      "version": null,
      "years_of_experience": 0,
      "years_of_experience_offset": 0,
      "project_experiences": [
        {
          "_id": "6322d9598c275b0f5be22a5b",
          "roles": [{ "_id": "6322d9b56719ed0fb4c1fa48" }],
          "diverged_from_master": false
        }
      ]
    },
    {
      "_id": "6322d9c46719ed0fa9c1f9ea",
      "created_at": "2022-09-15T07:52:36.707Z",
      "disabled": false,
      "diverged_from_master": false,
      "modifier_id": null,
      "name": { "no": "Scrum master" },
      "order": 6,
      "origin_id": null,
      "owner_updated_at": "2022-09-15T07:52:44.000Z",
      "recently_added": false,
      "starred": false,
      "starred_order": null,
      "updated_at": "2022-11-25T12:58:39.298Z",
      "version": 1,
      "years_of_experience": 0,
      "years_of_experience_offset": 0,
      "project_experiences": [
        {
          "_id": "6322d9598c275b0f5be22a5b",
          "roles": [{ "_id": "6322d9c1711f7f0fb4e11e48" }],
          "diverged_from_master": false
        }
      ]
    },
    {
      "_id": "6374dbb1af19e90fcbf49169",
      "created_at": "2022-11-16T12:46:41.888Z",
      "disabled": false,
      "diverged_from_master": false,
      "modifier_id": null,
      "name": { "no": ".NET-utvikler", "int": ".NET Developer" },
      "order": 7,
      "origin_id": null,
      "owner_updated_at": null,
      "recently_added": false,
      "starred": false,
      "starred_order": null,
      "updated_at": "2022-11-25T12:54:24.884Z",
      "version": 3,
      "years_of_experience": 0,
      "years_of_experience_offset": 0,
      "project_experiences": [
        {
          "_id": "6374d69289dd440fdf9636ad",
          "roles": [{ "_id": "6374dbae89dd440fe196350e" }],
          "diverged_from_master": false
        }
      ]
    },
    {
      "_id": "6374dc35c597c21055866974",
      "created_at": "2022-11-16T12:48:53.930Z",
      "disabled": false,
      "diverged_from_master": false,
      "modifier_id": null,
      "name": { "no": "Frontend-utvikler", "int": "Frontend Developer" },
      "order": 8,
      "origin_id": null,
      "owner_updated_at": null,
      "recently_added": false,
      "starred": false,
      "starred_order": null,
      "updated_at": "2022-11-16T12:48:55.801Z",
      "version": 2,
      "years_of_experience": 0,
      "years_of_experience_offset": 0,
      "project_experiences": [
        {
          "_id": "6374d3f7a09c0f0fe69475a3",
          "roles": [{ "_id": "6374d684af19e90f9df49468" }],
          "diverged_from_master": false
        }
      ]
    },
    {
      "_id": "6380bcb1d8da890fd39e35ff",
      "created_at": "2022-11-25T13:01:37.838Z",
      "disabled": false,
      "diverged_from_master": false,
      "modifier_id": null,
      "name": { "no": "Fullstack-utvikler", "int": "Frontend Developer" },
      "order": 9,
      "origin_id": null,
      "owner_updated_at": null,
      "recently_added": false,
      "starred": false,
      "starred_order": null,
      "updated_at": "2022-11-25T13:03:59.980Z",
      "version": 2,
      "years_of_experience": 1,
      "years_of_experience_offset": 0,
      "project_experiences": [
        {
          "_id": "6267e1f8d9d1d50ffe5bc746",
          "roles": [{ "_id": "626a68488ede14100aadd24c" }],
          "diverged_from_master": false
        },
        {
          "_id": "6267e2a0829c4f0fbf6f7b77",
          "roles": [{ "_id": "6267e2a4f3adf1103a74c3dc" }],
          "diverged_from_master": false
        }
      ]
    },
    {
      "_id": "6380be8b78822d104b660022",
      "created_at": "2022-11-25T13:09:31.719Z",
      "disabled": false,
      "diverged_from_master": false,
      "modifier_id": null,
      "name": {
        "no": "Fullstack-utvikler og tech lead",
        "int": "Frontend Developer"
      },
      "order": 9,
      "origin_id": null,
      "owner_updated_at": null,
      "recently_added": false,
      "starred": false,
      "starred_order": null,
      "updated_at": "2022-11-25T13:09:31.719Z",
      "version": 1,
      "years_of_experience": 0,
      "years_of_experience_offset": 0,
      "project_experiences": [
        {
          "_id": "62fe38b193ed350f88a119ad",
          "roles": [{ "_id": "62ff80a7785f370f4490343d" }],
          "diverged_from_master": false
        }
      ]
    },
    {
      "_id": "63beee1479e1bf0fb54d3c31",
      "created_at": "2023-01-11T17:12:53.020Z",
      "disabled": false,
      "diverged_from_master": false,
      "modifier_id": null,
      "name": {
        "no": "Architect og Fullstack .NET Utvikler",
        "int": "Backend developer",
        "se": "Backend developer",
        "fi": "Backend developer",
        "dk": "Backend developer"
      },
      "order": 10,
      "origin_id": null,
      "owner_updated_at": null,
      "recently_added": false,
      "starred": false,
      "starred_order": null,
      "updated_at": "2023-01-11T17:23:12.965Z",
      "version": 7,
      "years_of_experience": 1,
      "years_of_experience_offset": 0,
      "project_experiences": [
        {
          "_id": "63beed7ff3997c0fabd312fc",
          "roles": [{ "_id": "63beee0e79e1bf0fab4d3e0d" }],
          "diverged_from_master": false
        }
      ]
    }
  ],
  "default": true,
  "educations": [
    {
      "_id": "626fe9759a58e80fcd6d8f75",
      "created_at": "2022-05-02T14:23:49.593Z",
      "degree": {
        "no": "Master i teknologi, IKT: datateknologi (IT)",
        "int": ""
      },
      "description": {
        "no": "Går retningen kunstig intelligens. Har ha@ fag som: Database, Algroritmer og Datastrukturer, Objektorientert programmering, Programvareutvikling, Kommunikasjon Tjenester og nett, Operativsystemer, og flere AI relaterte fag.",
        "int": ""
      },
      "disabled": false,
      "diverged_from_master": false,
      "external_unique_id": null,
      "modifier_id": null,
      "month_from": "08",
      "month_to": "06",
      "order": 0,
      "origin_id": null,
      "owner_updated_at": "2022-09-06T07:01:21.000Z",
      "recently_added": false,
      "school": {
        "no": "NTNU: Norges teknisk-naturvitenskapelige universitet",
        "int": "NTNU: Norwegian University of Science and Technology (NTNU)"
      },
      "starred": true,
      "updated_at": "2022-09-06T07:01:21.367Z",
      "version": 27,
      "year_from": "2017",
      "year_to": "2022",
      "attachments": []
    }
  ],
  "imported_date": null,
  "key_qualifications": [
    {
      "_id": "62693b0d16da930fd5777fb9",
      "created_at": "2022-04-27T12:46:05.854Z",
      "disabled": false,
      "diverged_from_master": false,
      "external_unique_id": null,
      "label": { "no": "Standard - generert", "int": "" },
      "long_description": {
        "no": "\"Det eneste jeg liker mer enn problemer, er kule tekniske løsninger. \"\n\nSindre har en mastergrad fra NTNU innen Datateknologi. Studietiden har gitt ham erfaring med systemutvikling, databaser, algoritmer og datastrukturer, maskinlæring og kunstig intelligens, statistikk og informasjonsgjenfinning. Sindre har også vært aktiv i ulike verv og hatt en rekke relevante sommerjobber som fullstackutvikler. Han er meget god til å tilegne seg kunnskap for å løse problemer med teknologi. Dette har gitt ham en bred innsikt og forståelse i en rekke teknologier og han trives med nye utfordringer.\n\nSindre har  programmert siden han var 16. Han tok kurs og emner på universitetsnivå mens han gikk på videregående for å lære seg programmering. Kunnskapen brukte han til å realisere egne prosjekter, og til verv som utvikler for Fotogjengen på Studentersamfundet i Trondheim og Styremedlem for Vestfold Digitale Ungdom, i tillegg til diverse jobber. \n\nSindre har alltid jobbet med hele stacken. Men han har lyst til å gå enda mer i dybden på backend. Sindres hjertesaker er Clean Code, og Test-driven development.\n\nSindre er selvstendig og strukturert og kan lett ta på seg lederrollen i situasjoner der det er naturlig.",
        "int": ""
      },
      "modifier_id": null,
      "order": 0,
      "origin_id": null,
      "owner_updated_at": "2022-11-29T08:20:45.000Z",
      "recently_added": false,
      "starred": false,
      "tag_line": {},
      "updated_at": "2022-12-02T09:51:07.250Z",
      "version": 272
    }
  ],
  "landline": null,
  "languages": [
    {
      "_id": "62fe26f0812b2b0fa1fd5d8c",
      "created_at": "2022-08-18T11:48:00.965Z",
      "disabled": false,
      "diverged_from_master": false,
      "external_unique_id": null,
      "level": {
        "no": "Avanserte muntlige og skriftlige ferdigheter",
        "int": "Advanced"
      },
      "modifier_id": null,
      "name": { "no": "Norsk", "int": "Norwegian", "se": "Norska" },
      "order": 0,
      "origin_id": null,
      "owner_updated_at": "2022-08-18T11:48:14.000Z",
      "recently_added": false,
      "starred": false,
      "updated_at": "2022-08-18T11:48:14.565Z",
      "version": 5
    },
    {
      "_id": "62fe26ff812b2b0f9ffd5bba",
      "created_at": "2022-08-18T11:48:15.733Z",
      "disabled": false,
      "diverged_from_master": false,
      "external_unique_id": null,
      "level": {
        "no": "Avanserte muntlige og skriftlige ferdigheter",
        "int": "Advanced"
      },
      "modifier_id": null,
      "name": { "no": "Engelsk", "int": "English", "se": "Engelska" },
      "order": 1,
      "origin_id": null,
      "owner_updated_at": "2022-08-18T11:48:31.000Z",
      "recently_added": false,
      "starred": false,
      "updated_at": "2022-08-18T11:48:31.432Z",
      "version": 4
    },
    {
      "_id": "62fe2716ba0cad0fdb75bec5",
      "created_at": "2022-08-18T11:48:38.243Z",
      "disabled": false,
      "diverged_from_master": false,
      "external_unique_id": null,
      "level": {},
      "modifier_id": null,
      "name": {},
      "order": 2,
      "origin_id": null,
      "owner_updated_at": "2022-08-18T11:48:38.000Z",
      "recently_added": false,
      "starred": false,
      "updated_at": "2022-08-18T11:48:38.243Z",
      "version": 1
    }
  ],
  "level": null,
  "modifier_id": null,
  "name_multilang": {},
  "nationality": {},
  "navn": "Sindre Johan Imenes Sivertsen",
  "order": null,
  "owner_updated_at": "2023-02-23T06:35:43.000Z",
  "owner_updated_at_significant": "2022-09-15T07:52:26.000Z",
  "place_of_residence": { "no": "Oslo", "int": "" },
  "positions": [
    {
      "_id": "6316f017321bb70f7c469068",
      "created_at": "2022-09-06T07:00:39.124Z",
      "description": {
        "no": "Funksjonærstilling (20 timer i uken) som utvikler for Fotogjengen. Utvikle en ny nettside for arkivering og fremvisning av bilder tatt i Fotogjengen.",
        "int": ""
      },
      "disabled": false,
      "diverged_from_master": false,
      "external_unique_id": null,
      "modifier_id": null,
      "name": { "no": "Sjefsutvikler for Fotogjengen på Samfundet", "int": "" },
      "order": 0,
      "origin_id": null,
      "owner_updated_at": "2022-09-15T07:49:54.000Z",
      "recently_added": false,
      "starred": false,
      "updated_at": "2022-09-15T07:50:05.102Z",
      "version": 7,
      "year_from": "2018",
      "year_to": "2022"
    },
    {
      "_id": "6322d92df4f5600fbcbd761e",
      "created_at": "2022-09-15T07:50:05.096Z",
      "description": {
        "no": "Har også vært i crew for flere Globelan arrangement:\n\nGame Globelan 2015 - Satte opp, driftet servere og laget en web app for stormskjermen.\n\nGame Globelan 2014 - Satte opp og driftet spillservere.\nKiosk Globelan 2013 - Solgte snop.",
        "int": ""
      },
      "disabled": false,
      "diverged_from_master": false,
      "external_unique_id": null,
      "modifier_id": null,
      "name": { "no": "Styremedlem for Vestfold Digitale Ungdom", "int": "" },
      "order": 1,
      "origin_id": null,
      "owner_updated_at": "2022-09-15T07:50:28.000Z",
      "recently_added": false,
      "starred": false,
      "updated_at": "2022-09-15T07:50:28.790Z",
      "version": 5,
      "year_from": "2015",
      "year_to": "2016"
    }
  ],
  "project_experiences": [
    {
      "_id": "6267e1ae829c4f0fba6f7f2b",
      "area_amt": null,
      "area_unit": null,
      "created_at": "2022-04-26T12:12:30.032Z",
      "customer": { "no": "Cxense", "int": "" },
      "customer_anonymized": {},
      "customer_description": {},
      "customer_selected": "customer",
      "customer_value_proposition": {},
      "description": { "no": "Summer Intern", "int": "" },
      "disabled": false,
      "diverged_from_master": false,
      "exclude_tags": [],
      "expected_roll_off_date": null,
      "extent_hours": null,
      "external_unique_id": null,
      "industry": {},
      "location_country_code": null,
      "long_description": {
        "no": "Cxense som nå heter Piano er et SaaS dataanalyse selskap. De trengte et verktøy for å manuelt samle inn datapunkter for å trene maskinlæringsmodeller til å kategorisere nettartikler. Verktøyet ble en Google Chrome utvidelse som per dags dato har blitt brukt til å klassifisere over 120 000 artikler.",
        "int": ""
      },
      "modifier_id": null,
      "month_from": "6",
      "month_to": "8",
      "order": 9,
      "origin_id": null,
      "owner_updated_at": "2022-09-06T06:56:04.000Z",
      "percent_allocated": null,
      "project_experience_skills": [
        {
          "_id": "62ff6ae8b1aa7c0fa8b758c6",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "Vue.js",
            "int": "Vue.js",
            "se": "Vue.js",
            "fi": "Vue.js",
            "dk": "Vue.js"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6af0b1aa7c0f63b758fd",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "Django",
            "int": "Django",
            "se": "Django",
            "fi": "Django",
            "dk": "Django"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6af66aa92b0f9e26a4ba",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": {
            "no": "Restful API",
            "int": "Restful API",
            "se": "Restful API",
            "fi": "Restful API",
            "dk": "Restful API"
          },
          "total_duration_in_years": 0,
          "version": 2
        },
        {
          "_id": "62ff6afbb1aa7c0fa8b758c9",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "Docker",
            "int": "Docker",
            "se": "Docker",
            "fi": "Docker",
            "dk": "Docker"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6b029fb1560f6914d3ca",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "Kubernetes",
            "int": "Kubernetes",
            "se": "Kubernetes",
            "fi": "Kubernetes",
            "dk": "Kubernetes"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6b0f96e2490fa59f0d33",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 6,
          "proficiency": 0,
          "tags": {
            "no": "Google Cloud Platform",
            "int": "Google Cloud Platform",
            "se": "Google Cloud Platform",
            "fi": "Google Cloud Platform",
            "dk": "Google Cloud Platform"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6b1eb1aa7c0fa5b759a3",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 7,
          "proficiency": 0,
          "tags": {
            "no": "HTML/CSS/JS",
            "int": "HTML/CSS/JS",
            "se": "HTML/CSS/JS",
            "fi": "HTML/CSS/JS",
            "dk": "HTML/CSS/JS"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6b2b1979ba0f938c97c2",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 8,
          "proficiency": 0,
          "tags": {
            "no": "PostgreSQL",
            "int": "PostgreSQL",
            "se": "PostgreSQL",
            "fi": "PostgreSQL",
            "dk": "PostgreSQL"
          },
          "total_duration_in_years": 0,
          "version": 1
        }
      ],
      "project_extent_amt": null,
      "project_extent_currency": null,
      "project_extent_hours": null,
      "project_type": {},
      "recently_added": false,
      "related_work_experience_id": null,
      "roles": [
        {
          "_id": "626a684b8ede141004add0d8",
          "created_at": null,
          "cv_role_id": "626a684b8ede141004add0d7",
          "disabled": false,
          "diverged_from_master": false,
          "long_description": {
            "no": "Sindre jobbet selvstendig med å lage en Chrome extension med søkefunksjon og autocomplete for å knytte en URL opp mot et sett IAB-kategorier, og lagre dette i en database. Applikasjonen snakket med eksterne API for å autentisere brukeren og et eget REST API skrevet i Django. Sindre brukte Vue.js i frontend og docker og et kubernetes-kluster for deployment.\n\nSindre hadde ansvar for alt fra planlegging, design, backend og deploy på egen hånd.",
            "int": ""
          },
          "modifier_id": null,
          "order": 0,
          "origin_id": "626a4c9a8ede141003adcced",
          "recently_added": false,
          "starred": false,
          "summary": {},
          "updated_at": "2022-11-25T13:06:35.632Z",
          "version": 19,
          "name": { "no": "Fullstack-utvikler og arkitekt" }
        }
      ],
      "starred": true,
      "total_extent_amt": null,
      "total_extent_currency": null,
      "total_extent_hours": null,
      "updated_at": "2023-01-31T00:34:29.053Z",
      "version": 70,
      "year_from": "2019",
      "year_to": "2019",
      "images": []
    },
    {
      "_id": "6267e1f8d9d1d50ffe5bc746",
      "area_amt": null,
      "area_unit": null,
      "created_at": "2022-04-26T12:13:45.001Z",
      "customer": { "no": "Capra", "int": "" },
      "customer_anonymized": {},
      "customer_description": {},
      "customer_selected": "customer",
      "customer_value_proposition": {},
      "description": { "no": "Summer Intern", "int": "" },
      "disabled": false,
      "diverged_from_master": false,
      "exclude_tags": [],
      "expected_roll_off_date": null,
      "extent_hours": null,
      "external_unique_id": null,
      "industry": {},
      "location_country_code": null,
      "long_description": {
        "no": "Sindre jobbet som fullstack-utvikler på et greenfield prosjekt. Prosjektet het CardioLearn, som var en ny e-læringsplatform for medisinstudenter på UiO. Teamet skulle lage en MVP som skulle vises for en ny runde med funding. For at infrastrukturen skulle skalere bygget teamet en backend-for-frontend og fulgte Domain Driven design for å kunne trekke ut deler til mikrotjenester i fremtiden.\n\nTeamet besto av fem studenter, én senior arkitekt, én frontender, og én UX-designer som var med for å guide studentene. De fulgte Scrum etter boka med ukeslange sprinter.\n\nProsjektet ble en suksess da MVP-en fikk en ny runde med funding og er i dag en av de større prosjektene til Liflig by Capra.\nhttps://www.capraconsulting.no/dette-har-vi-gjort/cardiolearn/\nhttps://www.uniforum.uio.no/nyheter/2021/09/vil-gjore-undervisningen-pa-det-medisinske-fakulte.html",
        "int": ""
      },
      "modifier_id": null,
      "month_from": "6",
      "month_to": "8",
      "order": 8,
      "origin_id": null,
      "owner_updated_at": "2022-11-25T10:23:20.000Z",
      "percent_allocated": null,
      "project_experience_skills": [
        {
          "_id": "62ff69fd9fb1560f5b14d353",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "Kotlin",
            "int": "Kotlin",
            "se": "Kotlin",
            "fi": "Kotlin",
            "dk": "Kotlin"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6a0596e2490fa19f0dc2",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "http4k",
            "dk": "http4k",
            "int": "http4k",
            "fi": "http4k",
            "se": "http4k"
          },
          "total_duration_in_years": 0,
          "version": 2
        },
        {
          "_id": "62ff6a1596e2490f4b9f0d99",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": {
            "no": "Server as a function",
            "dk": "Server as a function",
            "int": "Server as a function",
            "fi": "Server as a function",
            "se": "Server as a function"
          },
          "total_duration_in_years": 0,
          "version": 2
        },
        {
          "_id": "62ff6a336aa92b0f9726a872",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "HTML/CSS/JS",
            "int": "HTML/CSS/JS",
            "se": "HTML/CSS/JS",
            "fi": "HTML/CSS/JS",
            "dk": "HTML/CSS/JS"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6a3b96e2490fa49f0cf5",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "React",
            "int": "React",
            "se": "React",
            "fi": "React",
            "dk": "React"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6a61b1aa7c0fa4b758bb",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 7,
          "proficiency": 0,
          "tags": {
            "no": "Amazon AWS",
            "int": "Amazon AWS",
            "se": "Amazon AWS",
            "fi": "Amazon AWS",
            "dk": "Amazon AWS"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6a789fb1560f5a14d393",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 8,
          "proficiency": 0,
          "tags": {
            "no": "IaC",
            "int": "IaC",
            "se": "IaC",
            "fi": "IaC",
            "dk": "IaC"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6a931979ba0ff88c987d",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 9,
          "proficiency": 0,
          "tags": {
            "no": "TypeScript",
            "int": "TypeScript",
            "se": "TypeScript",
            "fi": "TypeScript",
            "dk": "TypeScript"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6a9a96e2490fa49f0d01",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 10,
          "proficiency": 0,
          "tags": {
            "no": "Styled Components",
            "int": "Styled Components",
            "se": "Styled Components",
            "fi": "Styled Components",
            "dk": "Styled Components"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6aaeb1aa7c0f81b75a22",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 11,
          "proficiency": 0,
          "tags": {
            "no": "Agile Methodologies",
            "int": "Agile Methodologies",
            "se": "Agile Methodologies",
            "fi": "Agile Methodologies",
            "dk": "Agile Methodologies"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6abe6aa92b0fdb26a4a9",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 12,
          "proficiency": 0,
          "tags": {
            "no": "Scrum",
            "int": "Scrum",
            "se": "Scrum",
            "fi": "Scrum",
            "dk": "Scrum"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6b666aa92b0fdc26a4a7",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 13,
          "proficiency": 0,
          "tags": {
            "no": "DocumentDB",
            "int": "DocumentDB",
            "se": "DocumentDB",
            "fi": "DocumentDB",
            "dk": "DocumentDB"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63809602c9755e0fd6ce3d71",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 14,
          "proficiency": 0,
          "tags": {
            "no": "Docker",
            "int": "Docker",
            "se": "Docker",
            "fi": "Docker",
            "dk": "Docker"
          },
          "total_duration_in_years": 0,
          "version": 1
        }
      ],
      "project_extent_amt": null,
      "project_extent_currency": null,
      "project_extent_hours": null,
      "project_type": {},
      "recently_added": false,
      "related_work_experience_id": null,
      "roles": [
        {
          "_id": "626a68488ede14100aadd24c",
          "created_at": null,
          "cv_role_id": "6380bcb1d8da890fd39e35ff",
          "disabled": false,
          "diverged_from_master": false,
          "long_description": {
            "no": "Sindre var med på store, viktige valg fra starten. Han var en av de som banet vei i backend, hvor de fulgte server-as-a-function prinsipper og brukte Http4K/Kotlin, GraphQL-java-tools og Postgres som en dokumentdatabase. Sindre jobbet tett med seniorarkitekten på teamet, og lærte utrolig mye av han gjennom parprogrammering. Sindre fikk erfaring med å jobbe strukturert med Git i ett smidig team gjennom trunk-based-development og så viktigheten av gjennbrukbare kodemønster på tvers av kodebasen, hvordan jobbe iterativt og bygge abstraksjoner og gjøre refaktoreringer når man ser behov. Testdreven utvikling var også viktig.\n\nI frontend brukte Sindre React/Typescript og Apollo/Graphql. Han ble også kjent med AWS CDK som han benyttet til å sette opp dev-databasen. ",
            "int": ""
          },
          "modifier_id": null,
          "order": 0,
          "origin_id": "626a4c9a8ede141003adccee",
          "recently_added": false,
          "starred": false,
          "summary": {},
          "updated_at": "2022-11-25T13:05:46.617Z",
          "version": 127,
          "name": { "no": "Fullstack-utvikler", "int": "Frontend Developer" }
        }
      ],
      "starred": true,
      "total_extent_amt": null,
      "total_extent_currency": null,
      "total_extent_hours": null,
      "updated_at": "2023-01-31T00:34:29.054Z",
      "version": 220,
      "year_from": "2020",
      "year_to": "2020",
      "images": []
    },
    {
      "_id": "6267e2a0829c4f0fbf6f7b77",
      "area_amt": null,
      "area_unit": null,
      "created_at": "2022-04-26T12:16:32.934Z",
      "customer": {
        "no": "Studentsamskipnaden i Oslo (SiO) ",
        "int": "Studentsamskipnaden i Oslo (SiO) ",
        "se": "Studentsamskipnaden i Oslo (SiO)"
      },
      "customer_anonymized": {},
      "customer_description": {},
      "customer_selected": "customer",
      "customer_value_proposition": {},
      "description": { "no": "Eventkalender ", "int": "" },
      "disabled": false,
      "diverged_from_master": false,
      "exclude_tags": [],
      "expected_roll_off_date": null,
      "extent_hours": null,
      "external_unique_id": null,
      "industry": { "no": "Tjeneste", "int": "Service", "se": "Tjänster" },
      "location_country_code": null,
      "long_description": {
        "no": "SiO er studentsamskipnaden for 28 studiesteder i Osloregionen, og tilbyr produkter og tjenester som gjør studiehverdagen effektiv og stimulerende til 67 000 studenter. En av mulighetene SIO ønsket å utforske var å samle alle sosiale og kulturelle hendelser som berører studenter.\n\nTeamet besto av fem sommerstudenter, én UX-designer og tre utviklere. En del av prosjektet var å kartlegge hva brukeren trengte og hvorden dette skulle løses i løpet av den korte tiden på syv uker. For å oppnå dette hadde teamet tett kommunikasjon med kunden og gjennomførte brukertesting og fokusgrupper med sluttbrukere underveis. Teamet brukte Scrum som arbeidsmetodikk med sprinter på én uke. SiO ble svært fornøyd med løsningen teamet leverte. Løsningen er i dag en sentral del av SiOs hjemmeside https://ny.sio.no/eventkalender.",
        "int": ""
      },
      "modifier_id": null,
      "month_from": "6",
      "month_to": "8",
      "order": 7,
      "origin_id": null,
      "owner_updated_at": "2022-09-15T07:43:59.000Z",
      "percent_allocated": null,
      "project_experience_skills": [
        {
          "_id": "6267e30be47cec107fc5d36b",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "Sanity.io",
            "int": "Sanity.io",
            "se": "Sanity.io",
            "dk": "Sanity.io",
            "fi": "Sanity.io"
          },
          "total_duration_in_years": 0,
          "version": 3
        },
        {
          "_id": "6267e315fb164a1023569347",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "Next.js",
            "int": "Next.js",
            "se": "Next.js",
            "dk": "Next.js",
            "fi": "Next.js"
          },
          "total_duration_in_years": 0,
          "version": 3
        },
        {
          "_id": "6267e319829c4f0fbc6f7f9e",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": {
            "no": "TypeScript",
            "int": "TypeScript",
            "se": "TypeScript",
            "dk": "TypeScript",
            "fi": "TypeScript"
          },
          "total_duration_in_years": 0,
          "version": 3
        },
        {
          "_id": "62694a511878b50ffc93c9b8",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "GitHub",
            "int": "GitHub",
            "se": "GitHub",
            "dk": "GitHub",
            "fi": "GitHub"
          },
          "total_duration_in_years": 0,
          "version": 2
        },
        {
          "_id": "62694a562e46ca0feb6916b9",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "React.js",
            "int": "React.js",
            "se": "React.js",
            "dk": "React.js",
            "fi": "React.js"
          },
          "total_duration_in_years": 0,
          "version": 4
        },
        {
          "_id": "6322cb0c711f7f0fb4e11c7a",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 6,
          "proficiency": 0,
          "tags": {
            "no": "Cypress",
            "int": "Cypress",
            "se": "Cypress",
            "fi": "Cypress",
            "dk": "Cypress"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322cb311f76cc0fa4123518",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 7,
          "proficiency": 0,
          "tags": { "no": "React Testing Library" },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322cb36f4f5600fcabd767b",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 8,
          "proficiency": 0,
          "tags": {
            "no": "TailwindCSS",
            "int": "TailwindCSS",
            "se": "TailwindCSS",
            "fi": "TailwindCSS",
            "dk": "TailwindCSS"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322cb3b1570a00fbe5e97f6",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 9,
          "proficiency": 0,
          "tags": {
            "no": "CI/CD",
            "int": "CI/CD",
            "se": "CI/CD",
            "fi": "CI/CD",
            "dk": "CI/CD"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322cb406719ed0fa8c1f9b0",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 10,
          "proficiency": 0,
          "tags": {
            "no": "Scrum Master",
            "int": "Scrum Master",
            "se": "Scrum Master",
            "fi": "Scrum Master",
            "dk": "Scrum Master"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322cb4c1570a010425e960d",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 11,
          "proficiency": 0,
          "tags": {
            "no": "Brukertesting",
            "int": "User Testing",
            "se": "Användartestning",
            "fi": "User Testing",
            "dk": "User Testing"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322cb51f4f5600fbcbd753e",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 12,
          "proficiency": 0,
          "tags": {
            "no": "Vercel",
            "int": "Vercel",
            "se": "Vercel",
            "fi": "Vercel",
            "dk": "Vercel"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322cb571f76cc100d1234a3",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 13,
          "proficiency": 0,
          "tags": {
            "no": "GitHub Actions",
            "int": "GitHub Actions",
            "se": "GitHub Actions",
            "fi": "GitHub Actions",
            "dk": "GitHub Actions"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322cb5f1570a00f955e95e0",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 14,
          "proficiency": 0,
          "tags": {
            "no": "Notion",
            "int": "Notion",
            "se": "Notion",
            "fi": "Notion",
            "dk": "Notion"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322cb668c275b0f61e2290f",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 15,
          "proficiency": 0,
          "tags": {
            "no": "HTML/CSS/JS",
            "int": "HTML/CSS/JS",
            "se": "HTML/CSS/JS",
            "fi": "HTML/CSS/JS",
            "dk": "HTML/CSS/JS"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6380bd00d8da890fbf9e34c2",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 16,
          "proficiency": 0,
          "tags": {
            "no": "Agile process",
            "int": "Agile process",
            "se": "Agile process",
            "fi": "Agile process",
            "dk": "Agile process"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6380bd0378822d103565fe9b",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 17,
          "proficiency": 0,
          "tags": {
            "no": "Smidig",
            "int": "Agile",
            "se": "Agile",
            "fi": "Agile",
            "dk": "Agile"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6380bd07c9755e0febce3ead",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 18,
          "proficiency": 0,
          "tags": {
            "no": "Scrum",
            "int": "Scrum",
            "se": "Scrum",
            "fi": "Scrum",
            "dk": "Scrum"
          },
          "total_duration_in_years": 0,
          "version": 1
        }
      ],
      "project_extent_amt": null,
      "project_extent_currency": null,
      "project_extent_hours": null,
      "project_type": { "no": "Innbyggertjenester", "int": "" },
      "recently_added": false,
      "related_work_experience_id": null,
      "roles": [
        {
          "_id": "6267e2a4f3adf1103a74c3dc",
          "created_at": "2022-04-26T12:16:36.921Z",
          "cv_role_id": "6380bcb1d8da890fd39e35ff",
          "disabled": false,
          "diverged_from_master": false,
          "long_description": {
            "no": "Sindre jobbet som fullstack-utvikler i et greenfield prosjekt hvor teamet skulle lage en studenteventkalender for SiO. Teamet hadde stort fokus på prototyping, brukertesting og flere designiterasjoner. De var et team på fire (tre utviklere, én UX-designer). Stacken besto av Next.js/Typescript med Sanity CMS for presentering av data og adminpanel.\n\nSindre hadde ansvaret for oppsett av Sanity, oppsettet av Next.js, produksjonssetting av applikasjonen til Vercel, CI/CD med Github Actions, og testing av applikasjonen med hjelp av Cypress og React testing library. I tillegg var han en av pådriverne for ren kode, og satte i gang flere refaktoriseringsprosjekter underveis. Sindre tok også på seg ansvaret som Scrum-master. Han ledet sprintmøter, og dokumenterte mye av prosessen og kommunikasjonen underveis i Notion.",
            "int": ""
          },
          "modifier_id": null,
          "order": 0,
          "origin_id": null,
          "recently_added": false,
          "starred": false,
          "summary": {},
          "updated_at": "2022-11-25T13:02:43.811Z",
          "version": 191,
          "name": { "no": "Fullstack-utvikler", "int": "Frontend Developer" }
        }
      ],
      "starred": true,
      "total_extent_amt": null,
      "total_extent_currency": null,
      "total_extent_hours": null,
      "updated_at": "2023-01-11T17:10:23.379Z",
      "version": 179,
      "year_from": "2021",
      "year_to": "2021",
      "images": []
    },
    {
      "_id": "6267e35b829c4f0fb06f8044",
      "area_amt": null,
      "area_unit": null,
      "created_at": "2022-04-26T12:19:39.933Z",
      "customer": {
        "no": "Studentersamfundet i Trondheim",
        "int": "Studentersamfundet i Trondheim"
      },
      "customer_anonymized": {},
      "customer_description": {},
      "customer_selected": "customer",
      "customer_value_proposition": {},
      "description": { "no": "Fotogjengen", "int": "" },
      "disabled": false,
      "diverged_from_master": false,
      "exclude_tags": [],
      "expected_roll_off_date": null,
      "extent_hours": null,
      "external_unique_id": null,
      "industry": {
        "no": "Offentlig sektor",
        "int": "Governmental",
        "se": "Offentliga"
      },
      "location_country_code": null,
      "long_description": {
        "no": "Fotogjengen har som oppgave å dokumentere alt som skjer på Studentersamfundet i Trondheim. De bruker en nettside for å laste opp og arkivere bildene de tar i tillegg til å vise frem bildene til omverden. Eksterne brukere av siden skal kunne bruke siden til å søke opp bilder på arrangement de har deltatt på. \n\nFra gammelt av hostes nettsiden på fysiske servere på Samfundet som en annen gjeng drifter, men prosjektet er i en migreringsfase for å komme over på Azure.",
        "int": ""
      },
      "modifier_id": null,
      "month_from": "1",
      "month_to": "7",
      "order": 6,
      "origin_id": null,
      "owner_updated_at": "2022-11-25T10:38:30.000Z",
      "percent_allocated": null,
      "project_experience_skills": [
        {
          "_id": "626a68458ede140ffbadcf4b",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "AngularJS",
            "int": "AngularJS",
            "se": "AngularJS",
            "dk": "AngularJS",
            "fi": "AngularJS"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "626a68458ede140ffbadcf4c",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "Restful API",
            "int": "Restful API",
            "dk": "Restful API",
            "fi": "Restful API",
            "se": "Restful API"
          },
          "total_duration_in_years": 0,
          "version": 2
        },
        {
          "_id": "626a68458ede140ffbadcf4d",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": {
            "no": "Django",
            "int": "Django",
            "se": "Django",
            "dk": "Django",
            "fi": "Django"
          },
          "total_duration_in_years": 0,
          "version": 2
        },
        {
          "_id": "626a68458ede140ffbadcf4e",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "Web",
            "dk": "Web",
            "int": "Web",
            "fi": "Web",
            "se": "Web"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6316ee587f4d340fac6d967a",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "Swagger",
            "int": "Swagger",
            "se": "Swagger",
            "fi": "Swagger",
            "dk": "Swagger"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6316ee64321bb70f7b469264",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 6,
          "proficiency": 0,
          "tags": { "no": "traefik" },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6316ee6f0f867e0f5af3aa1b",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 7,
          "proficiency": 0,
          "tags": {
            "no": "React",
            "int": "React",
            "se": "React",
            "fi": "React",
            "dk": "React"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6316ee770f867e0f80f3aaaa",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 8,
          "proficiency": 0,
          "tags": {
            "no": "HTML/CSS/JS",
            "int": "HTML/CSS/JS",
            "se": "HTML/CSS/JS",
            "fi": "HTML/CSS/JS",
            "dk": "HTML/CSS/JS"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6316ee7f0f867e0f85f3ab83",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 9,
          "proficiency": 0,
          "tags": {
            "no": "Kotlin",
            "int": "Kotlin",
            "se": "Kotlin",
            "fi": "Kotlin",
            "dk": "Kotlin"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6316ee8a7f4d3410146d9689",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 10,
          "proficiency": 0,
          "tags": {
            "no": "Komponentdesign",
            "int": "Component design",
            "se": "Component design",
            "fi": "Component design",
            "dk": "Component design"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6316ee93b1b84d0fa16e93ef",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 11,
          "proficiency": 0,
          "tags": {
            "no": "Storybook",
            "int": "Storybook",
            "se": "Storybook",
            "fi": "Storybook",
            "dk": "Storybook"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6316ee9f7f4d3410ad6d9683",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 12,
          "proficiency": 0,
          "tags": {
            "no": "Azure",
            "int": "Azure",
            "se": "Azure",
            "fi": "Azure",
            "dk": "Azure"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6316eea70f867e0f85f3ab8d",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 13,
          "proficiency": 0,
          "tags": {
            "no": "Spring Boot",
            "int": "Spring Boot",
            "se": "Spring Boot",
            "fi": "Spring Boot",
            "dk": "Spring Boot"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6316eeb07f4d3410146d9690",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 14,
          "proficiency": 0,
          "tags": {
            "no": "Linux",
            "int": "Linux",
            "se": "Linux",
            "fi": "Linux",
            "dk": "Linux"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6316eeb5b1b84d0f966e964e",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 15,
          "proficiency": 0,
          "tags": {
            "no": "DNS",
            "int": "DNS",
            "se": "DNS",
            "fi": "DNS",
            "dk": "DNS"
          },
          "total_duration_in_years": 0,
          "version": 1
        }
      ],
      "project_extent_amt": null,
      "project_extent_currency": null,
      "project_extent_hours": null,
      "project_type": { "no": "Nettsider/CMS", "int": "Website/CMS" },
      "recently_added": false,
      "related_work_experience_id": null,
      "roles": [
        {
          "_id": "626a68458ede140ffbadcf4f",
          "created_at": null,
          "cv_role_id": "626a68448ede140ffbadcf46",
          "disabled": false,
          "diverged_from_master": false,
          "long_description": {
            "no": "Da Sindre startet i Fotogjengen bygget den daværende nettsiden på Django, REST og Angular. Sindre fikk etter hvert lederansvar, og under hans ledelse valgte teamet å utvikle en ny side i Kotlin, Spring Boot og React. Sindre tok ledelsen over infrastuktur, backend og database, men jobbet også mye med frontend. Andre teknologier som ble tatt i bruk under prosjekter var: Storybook komponentbibliotek, Docker, Traefik for nettverking, Swagger for selvdokumenterende kode, og Azure Cloud.\n\nPå det største var de et team på fem personer. Sindre brukte mye tid på opplæring av nye medlemmer.",
            "int": ""
          },
          "modifier_id": null,
          "order": 0,
          "origin_id": "626a4c9a8ede141003adccf0",
          "recently_added": false,
          "starred": false,
          "summary": {},
          "updated_at": "2022-12-02T09:54:00.990Z",
          "version": 175,
          "name": { "no": "Sjefsutvikler" }
        }
      ],
      "starred": true,
      "total_extent_amt": null,
      "total_extent_currency": null,
      "total_extent_hours": null,
      "updated_at": "2023-01-31T00:34:29.054Z",
      "version": 165,
      "year_from": "2018",
      "year_to": "2022",
      "images": []
    },
    {
      "_id": "62fe272b93ed350f83a11789",
      "area_amt": null,
      "area_unit": null,
      "created_at": "2022-08-18T11:48:59.168Z",
      "customer": { "no": "Prisguiden.no", "int": "Prisguiden.no" },
      "customer_anonymized": {},
      "customer_description": {},
      "customer_selected": "customer",
      "customer_value_proposition": {},
      "description": { "no": "Masteroppgave", "int": "" },
      "disabled": false,
      "diverged_from_master": false,
      "exclude_tags": [],
      "expected_roll_off_date": null,
      "extent_hours": null,
      "external_unique_id": null,
      "industry": {},
      "location_country_code": null,
      "long_description": {
        "no": "Prisguiden.no er en prissammenligningstjeneste som sammenligner priser mellom norske forhandlere. Sindre og en partner utforsket muligheten til å bruke historisk brukergenererte klikkdata til å predikere fremtidige kjøpstrender hos Prisguiden.no ved hjelp av dype nevrale nettverk. \n\nProblemet var at kjøpsmønstre innen digital handel er et domene som er drevet av veldig mange eksterne variabler og støy. Hypotesen var om et nytt nevralnet av typen Convolutional Autoencoder LSTM kunne forbedre dagens state-of-the-art modeller for kundens domene. Og i tillegg  utforske ulike modelstrukturer for å predikere flere tidsserier samtidig, og om disse alternative modellstrukturene kunne forbedre prediksjonsresultater og være lettere å skalere i produksjon.\n\nKonklusjonen bidro til forskningsfeltet ved å vise til hvilke situasjoner den presenterte modellen utkonkurrerte dagens state-of-the-art modeller. Konklusjonen bekreftet forskning gjort på modelstrukturer, og kritiserer tidligere forskning på LSTM-er.",
        "int": ""
      },
      "modifier_id": null,
      "month_from": "08",
      "month_to": "06",
      "order": 10,
      "origin_id": null,
      "owner_updated_at": "2022-12-12T15:59:19.000Z",
      "percent_allocated": null,
      "project_experience_skills": [
        {
          "_id": "62ff4f320b91930fb1bf0de6",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "Python",
            "int": "Python",
            "se": "Python",
            "fi": "Python",
            "dk": "Python"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff4f3eb4c9860fa749aabb",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "Pandas",
            "int": "Pandas",
            "se": "Pandas",
            "fi": "Pandas",
            "dk": "Pandas"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff4f42b671a40f900dd8d6",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": {
            "no": "NumPy",
            "int": "NumPy",
            "se": "NumPy",
            "fi": "NumPy",
            "dk": "NumPy"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff5c651979ba0fd48c967d",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "TensorFlow",
            "int": "TensorFlow",
            "se": "TensorFlow",
            "fi": "TensorFlow",
            "dk": "TensorFlow"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff5c6b1979ba10488c9683",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "Keras",
            "int": "Keras",
            "se": "Keras",
            "fi": "Keras",
            "dk": "Keras"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff5c9d96e2490f4b9f0bb8",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 6,
          "proficiency": 0,
          "tags": {
            "no": "Pytorch",
            "int": "Pytorch",
            "se": "Pytorch",
            "fi": "Pytorch",
            "dk": "Pytorch"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff5d2e96e2490f4c9f0bb5",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 7,
          "proficiency": 0,
          "tags": {
            "no": "Pytest",
            "int": "Pytest",
            "se": "Pytest",
            "fi": "Pytest",
            "dk": "Pytest"
          },
          "total_duration_in_years": 0,
          "version": 1
        }
      ],
      "project_extent_amt": null,
      "project_extent_currency": null,
      "project_extent_hours": null,
      "project_type": {},
      "recently_added": false,
      "related_work_experience_id": null,
      "roles": [
        {
          "_id": "62fe388fd81fb20fa09046fd",
          "created_at": "2022-08-18T13:03:11.851Z",
          "cv_role_id": "62fe3896ba0cad0fd575ba0d",
          "disabled": false,
          "diverged_from_master": false,
          "long_description": {
            "no": "Sindre jobbet som data engineer og data scientist. Han lagde et modulært rammeverk i Python for å kjøre eksperimenter. Rammeverket var fullstendig konfigurerbart via config-filer. Det håndterte data prosessering, initalisering av modeller, modelltrening, modellevaluering, og fullstendig lagring av resultater for reproduserbarhet.\n\nSindre jobbet med hele stacken. Han var den som hadde ansvar for DevOps, CI/CD og testing rammeverket. Hele prosjektet fulgte strenge guidelines for hvordan kode kunne havne i master.",
            "int": ""
          },
          "modifier_id": null,
          "order": 0,
          "origin_id": null,
          "recently_added": false,
          "starred": false,
          "summary": {},
          "updated_at": "2022-11-25T13:07:50.511Z",
          "version": 168,
          "name": {
            "no": "Data Scientist",
            "dk": "Data Scientist",
            "int": "Data Scientist",
            "fi": "Data Scientist",
            "se": "Data Scientist"
          }
        }
      ],
      "starred": false,
      "total_extent_amt": null,
      "total_extent_currency": null,
      "total_extent_hours": null,
      "updated_at": "2023-01-11T17:10:23.395Z",
      "version": 413,
      "year_from": "2021",
      "year_to": "2022",
      "images": []
    },
    {
      "_id": "62fe38b193ed350f88a119ad",
      "area_amt": null,
      "area_unit": null,
      "created_at": "2022-08-18T13:03:45.513Z",
      "customer": { "no": "Nordic Trustee", "int": "Nordic Trustee" },
      "customer_anonymized": {},
      "customer_description": {},
      "customer_selected": "customer",
      "customer_value_proposition": {},
      "description": { "no": "Kundestyrt prosjekt - Purefolio", "int": "" },
      "disabled": false,
      "diverged_from_master": false,
      "exclude_tags": [],
      "expected_roll_off_date": null,
      "extent_hours": null,
      "external_unique_id": null,
      "industry": { "no": "Privat", "int": "" },
      "location_country_code": null,
      "long_description": {
        "no": "Nordic Trustee AS (tidligere Norsk Tillitsmann AS) er et norsk selskap som har som hovedoppgave å påta seg rollen som tillitsmann i obligasjonslån. De ønsket seg en nettside der man kunne sammenligne ESG-data mellom industrier og land for å hjelpe investorer til å investere i bransjer som er gode på bærekraft.\n\nTeamet bestående av seks NTNU-studenter lastet ned offentlig statistikk og integrerte dette i en Postgres database. Den aggregerte dataen ble eksponert ved et REST API skrevet i .NET CORE. Et React dashboard gav målgruppen mulighet til å sammenligne forskjellige bransjer på tvers av land i ESG metrics.",
        "int": ""
      },
      "modifier_id": null,
      "month_from": "08",
      "month_to": "12",
      "order": 11,
      "origin_id": null,
      "owner_updated_at": "2022-12-12T16:00:34.000Z",
      "percent_allocated": null,
      "project_experience_skills": [
        {
          "_id": "6303936bd5b98e0f4e0072eb",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "Azure",
            "int": "Azure",
            "se": "Azure",
            "fi": "Azure",
            "dk": "Azure"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63039376e0d6a90f95b3e0a5",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "ASP.NET Core",
            "int": "ASP.NET Core",
            "se": "ASP.NET Core",
            "fi": "ASP.NET Core",
            "dk": "ASP.NET Core"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "630393886e90060f916c9261",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": {
            "no": "Docker",
            "int": "Docker",
            "se": "Docker",
            "fi": "Docker",
            "dk": "Docker"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6303938f3eda820fa6b7861d",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "React",
            "int": "React",
            "se": "React",
            "fi": "React",
            "dk": "React"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6303939f6e90060f8a6c937b",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "Styled Components",
            "int": "Styled Components",
            "se": "Styled Components",
            "fi": "Styled Components",
            "dk": "Styled Components"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "630393c76e90060f9c6c91d2",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 6,
          "proficiency": 0,
          "tags": {
            "no": "Cypress",
            "int": "Cypress",
            "se": "Cypress",
            "fi": "Cypress",
            "dk": "Cypress"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "630393d06e90060f966c92be",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 7,
          "proficiency": 0,
          "tags": {
            "no": "PostgreSQL",
            "int": "PostgreSQL",
            "se": "PostgreSQL",
            "fi": "PostgreSQL",
            "dk": "PostgreSQL"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "630393e06e90060f9d6c940c",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 8,
          "proficiency": 0,
          "tags": {
            "no": "GitHub Actions",
            "int": "GitHub Actions",
            "se": "GitHub Actions",
            "fi": "GitHub Actions",
            "dk": "GitHub Actions"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "630393e69a82e60f4f927f62",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 9,
          "proficiency": 0,
          "tags": {
            "no": "HTML/CSS/JS",
            "int": "HTML/CSS/JS",
            "se": "HTML/CSS/JS",
            "fi": "HTML/CSS/JS",
            "dk": "HTML/CSS/JS"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "630393f4d5b98e2d6a006f48",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 10,
          "proficiency": 0,
          "tags": {
            "no": "Tech Lead",
            "int": "Tech Lead",
            "se": "Tech Lead",
            "fi": "Tech Lead",
            "dk": "Tech Lead"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "630393fe9a82e60f54927ab5",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 11,
          "proficiency": 0,
          "tags": {
            "no": "Scrum",
            "int": "Scrum",
            "se": "Scrum",
            "fi": "Scrum",
            "dk": "Scrum"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "630394026e90060f9d6c940f",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 12,
          "proficiency": 0,
          "tags": {
            "no": "Kanban",
            "int": "Kanban",
            "se": "Kanban",
            "fi": "Kanban",
            "dk": "Kanban"
          },
          "total_duration_in_years": 0,
          "version": 1
        }
      ],
      "project_extent_amt": null,
      "project_extent_currency": null,
      "project_extent_hours": null,
      "project_type": {},
      "recently_added": false,
      "related_work_experience_id": null,
      "roles": [
        {
          "_id": "62ff78569fb1560f5914d505",
          "created_at": "2022-08-19T11:47:34.922Z",
          "cv_role_id": "62ff7f6bd270d20fb17750e7",
          "disabled": true,
          "diverged_from_master": false,
          "long_description": {
            "no": "Sindre hadde en stor rolle som backend-utvikler i starten av prosjektet. Han banet vei for resten ved å sette opp ASP.net backend sammen med databasen og puttet alt i docker containere. Han tilrettela slik at de andre kunne begynne å skrive kode.",
            "int": ""
          },
          "modifier_id": null,
          "order": 0,
          "origin_id": null,
          "recently_added": false,
          "starred": false,
          "summary": {},
          "updated_at": "2022-11-25T13:09:05.449Z",
          "version": 66,
          "name": { "no": "Backend-utvikler" }
        },
        {
          "_id": "62ff80a7785f370f4490343d",
          "created_at": "2022-08-19T12:23:03.465Z",
          "cv_role_id": "6380be8b78822d104b660022",
          "disabled": false,
          "diverged_from_master": false,
          "long_description": {
            "no": "Sindre tok rollen som tech lead. Han definerte kodestandarder og Git-konvensjoner teamet skulle følge. Han satte opp Github-repoer og CI/CD-pipelines, React-skjelettet, .NET-prosjektet, Postgres-databasen og Docker-containere slik at de andre på teamet kunne være produktive. Sindre hadde først fokus på .NET i backend, men da det ble tydelig at frontend-gjengen hang etter, byttet han rolle. På frontend tok han ledelse for hvilken retning utviklingen skulle ta. Han tok på seg de største utfordringene i prosjektet og spilte de andre på laget gode ved å være veldig behjelpelig. \n\nSindre hadde alene ansvaret for å produksjonssette prosjektet i Azure.",
            "int": ""
          },
          "modifier_id": null,
          "order": 1,
          "origin_id": null,
          "recently_added": false,
          "starred": false,
          "summary": {},
          "updated_at": "2022-12-12T16:00:34.061Z",
          "version": 291,
          "name": {
            "no": "Fullstack-utvikler og tech lead",
            "int": "Frontend Developer"
          }
        }
      ],
      "starred": false,
      "total_extent_amt": null,
      "total_extent_currency": null,
      "total_extent_hours": null,
      "updated_at": "2023-01-11T17:10:23.402Z",
      "version": 179,
      "year_from": "2021",
      "year_to": "2021",
      "images": []
    },
    {
      "_id": "6322d9598c275b0f5be22a5b",
      "area_amt": null,
      "area_unit": null,
      "created_at": "2022-09-15T07:50:49.487Z",
      "customer": {
        "no": "NoA Ignite",
        "int": "NoA Ignite",
        "se": "NoA Ignite",
        "fi": "NoA Ignite",
        "dk": "NoA Ignite"
      },
      "customer_anonymized": {},
      "customer_description": {},
      "customer_selected": "customer",
      "customer_value_proposition": {},
      "description": { "no": "Insight \u0026 Innovation Toolbox", "int": "" },
      "disabled": false,
      "diverged_from_master": false,
      "exclude_tags": [],
      "expected_roll_off_date": null,
      "extent_hours": null,
      "external_unique_id": null,
      "industry": { "no": "Privat", "int": "" },
      "location_country_code": null,
      "long_description": {
        "no": "Prosjektet innebar utvikling av en digital verktøykasse for NoA Ignites Insight \u0026 Innovation-avdeling. Verktøykassen inneholdt en oversikt over de mest brukte metodene og rammeverkene for avdelingen, med hensikt å brukes både i prosjekter, i forbindelse med onboarding og for å holde seg oppdatert og inspirert til å prøve ny metodikk.\n\nEn MVP av prosjektet var godt i gang og fire nyutdannete utviklere og to UX-designere overtok prosjektet og jobbet videre som et tverrfaglig team. ",
        "int": ""
      },
      "modifier_id": null,
      "month_from": "08",
      "month_to": "09",
      "order": 3,
      "origin_id": null,
      "owner_updated_at": "2022-11-29T10:00:49.000Z",
      "percent_allocated": null,
      "project_experience_skills": [
        {
          "_id": "6322dc9a1f76cc0f3b123653",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "SvelteKit",
            "int": "SvelteKit",
            "se": "SvelteKit",
            "fi": "SvelteKit",
            "dk": "SvelteKit"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322dc9e1f76cc0fde123622",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "Next.js",
            "int": "Next.js",
            "se": "Next.js",
            "fi": "Next.js",
            "dk": "Next.js"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322dca61570a010225e963e",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": {
            "no": "Scrum Master",
            "int": "Scrum Master",
            "se": "Scrum Master",
            "fi": "Scrum Master",
            "dk": "Scrum Master"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322dcae1570a00f965e989d",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "TailwindCSS",
            "int": "TailwindCSS",
            "se": "TailwindCSS",
            "fi": "TailwindCSS",
            "dk": "TailwindCSS"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322dcb16719ed0fb3c1fb81",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "TypeScript",
            "int": "TypeScript",
            "se": "TypeScript",
            "fi": "TypeScript",
            "dk": "TypeScript"
          },
          "total_duration_in_years": 0,
          "version": 1
        }
      ],
      "project_extent_amt": null,
      "project_extent_currency": null,
      "project_extent_hours": null,
      "project_type": {},
      "recently_added": false,
      "related_work_experience_id": null,
      "roles": [
        {
          "_id": "6322d9b56719ed0fb4c1fa48",
          "created_at": "2022-09-15T07:52:21.863Z",
          "cv_role_id": "6322d9b96719ed0fabc1fb1a",
          "disabled": true,
          "diverged_from_master": false,
          "long_description": {
            "no": "Sindre tok på seg rollen som Tech Lead. Han tok hovedansvaret for å migrere dagens løsning fra privat hosting over til NoA Ignites hosting-løsning i Vercel. Han var sentral i valg som ble tatt for teknologiene i prosjektet og brukte tid på å lære opp andre nyansatte i arbeidsmetodikk, Git og Typescript.",
            "int": ""
          },
          "modifier_id": null,
          "order": 0,
          "origin_id": null,
          "recently_added": false,
          "starred": false,
          "summary": {},
          "updated_at": "2022-11-25T12:58:29.276Z",
          "version": 90,
          "name": { "no": "Tech Lead" }
        },
        {
          "_id": "6322d9c1711f7f0fb4e11e48",
          "created_at": "2022-09-15T07:52:33.866Z",
          "cv_role_id": "6322d9c46719ed0fa9c1f9ea",
          "disabled": true,
          "diverged_from_master": false,
          "long_description": {
            "no": "Prosjektet var uten formell struktur, så Sindre tok på seg ansvaret for å kartlegge oppgaver og planlegge sprints sammen med stakeholder. Teamet kjørte ukeslange sprints med daglig standups. ",
            "int": ""
          },
          "modifier_id": null,
          "order": 1,
          "origin_id": null,
          "recently_added": false,
          "starred": false,
          "summary": {},
          "updated_at": "2022-11-29T10:00:49.872Z",
          "version": 84,
          "name": { "no": "Scrum master" }
        }
      ],
      "starred": false,
      "total_extent_amt": null,
      "total_extent_currency": null,
      "total_extent_hours": null,
      "updated_at": "2023-01-11T17:10:23.411Z",
      "version": 111,
      "year_from": "2022",
      "year_to": "2022",
      "images": []
    },
    {
      "_id": "6374d3f7a09c0f0fe69475a3",
      "area_amt": null,
      "area_unit": null,
      "created_at": "2022-11-16T12:13:43.970Z",
      "customer": {
        "no": "NoA Ignite",
        "int": "NoA Ignite",
        "se": "NoA Ignite",
        "fi": "NoA Ignite",
        "dk": "NoA Ignite"
      },
      "customer_anonymized": {},
      "customer_description": {},
      "customer_selected": "customer",
      "customer_value_proposition": {},
      "description": { "no": "NoA Lottery", "int": "" },
      "disabled": false,
      "diverged_from_master": false,
      "exclude_tags": [],
      "expected_roll_off_date": null,
      "extent_hours": null,
      "external_unique_id": null,
      "industry": { "no": "Teknologi", "int": "" },
      "location_country_code": null,
      "long_description": {
        "no": "Avdelingen Platform \u0026 Services i NoA Ignite har utviklet en lotteritjeneste som trekker en heldig vinner hver uke blant alle i avdelingen som har loggført timene sine inneværende uke. \n\nTjenesten ble opprinnelig utviklet av veldig mange utviklere under en pils og programmeringskveld. Infrastrukturen var overkomplisert, koden var rotete, og tjenesten var fryktelig treg.\n\nOppgaven bestod i å ta løsningen tilbake til tegnebrettet for å modernisere tjenesten, gjøre den raskere og lettere å vedlikeholde. Stacken bestod av en Sveltekit frontend, en Sanity database, en Azure meldingsdatabase, en slackbot, og et Azure functions API skrevet i .NET som knyttet alle ressursene sammen.\n\nTeamet bestod av seks personer, og ble ledet av en sertifisert Scrum master.",
        "int": ""
      },
      "modifier_id": null,
      "month_from": "09",
      "month_to": "11",
      "order": 2,
      "origin_id": null,
      "owner_updated_at": "2022-11-16T13:25:47.000Z",
      "percent_allocated": null,
      "project_experience_skills": [
        {
          "_id": "6374e48bc597c21020866cd7",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "SvelteKit",
            "int": "SvelteKit",
            "se": "SvelteKit",
            "fi": "SvelteKit",
            "dk": "SvelteKit"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374e49489dd440fdb963660",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "Cypress",
            "int": "Cypress",
            "se": "Cypress",
            "fi": "Cypress",
            "dk": "Cypress"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374e4a2a09c0f0fe694792f",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": {
            "no": "Azure DevOps",
            "int": "Azure DevOps",
            "se": "Azure DevOps",
            "fi": "Azure DevOps",
            "dk": "Azure DevOps"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374e4bd89dd440fef96375f",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": { "no": "Bicep" },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374e4c16fe7951055095add",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "IaC",
            "int": "IaC",
            "se": "IaC",
            "fi": "IaC",
            "dk": "IaC"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374e4caaf19e90f9bf49243",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 6,
          "proficiency": 0,
          "tags": {
            "no": "TailwindCSS",
            "int": "TailwindCSS",
            "se": "TailwindCSS",
            "fi": "TailwindCSS",
            "dk": "TailwindCSS"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374e4d2a09c0f0fe8947987",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 7,
          "proficiency": 0,
          "tags": {
            "no": "HTML/CSS/JS",
            "int": "HTML/CSS/JS",
            "se": "HTML/CSS/JS",
            "fi": "HTML/CSS/JS",
            "dk": "HTML/CSS/JS"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374e4d56fe795105d095c80",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 8,
          "proficiency": 0,
          "tags": {
            "no": "TypeScript",
            "int": "TypeScript",
            "se": "TypeScript",
            "fi": "TypeScript",
            "dk": "TypeScript"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374e4da89dd440fdd96357a",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 9,
          "proficiency": 0,
          "tags": {
            "no": "Atomic Design",
            "int": "Atomic Design",
            "se": "Atomic Design",
            "fi": "Atomic Design",
            "dk": "Atomic Design"
          },
          "total_duration_in_years": 0,
          "version": 1
        }
      ],
      "project_extent_amt": null,
      "project_extent_currency": null,
      "project_extent_hours": null,
      "project_type": {},
      "recently_added": false,
      "related_work_experience_id": null,
      "roles": [
        {
          "_id": "6374d684af19e90f9df49468",
          "created_at": "2022-11-16T12:24:36.248Z",
          "cv_role_id": "6374dc35c597c21055866974",
          "disabled": false,
          "diverged_from_master": false,
          "long_description": {
            "no": "Under Sindres lead i frontend tok prosjektet i bruk Sveltekit. Sindre fokuserte mest på \"back-of-the-front\" med oppgaver som autentisering mot Microsoft Active Directory, Testing, CI/CD, og kommunikasjon mot backend.",
            "int": ""
          },
          "modifier_id": null,
          "order": 0,
          "origin_id": null,
          "recently_added": false,
          "starred": false,
          "summary": {},
          "updated_at": "2022-11-16T12:54:40.367Z",
          "version": 104,
          "name": { "no": "Frontend-utvikler", "int": "Frontend Developer" }
        }
      ],
      "starred": false,
      "total_extent_amt": null,
      "total_extent_currency": null,
      "total_extent_hours": null,
      "updated_at": "2023-01-11T17:10:23.418Z",
      "version": 208,
      "year_from": "2022",
      "year_to": "2022",
      "images": []
    },
    {
      "_id": "6374d69289dd440fdf9636ad",
      "area_amt": null,
      "area_unit": null,
      "created_at": "2022-11-16T12:24:50.982Z",
      "customer": {
        "no": "NoA Ignite",
        "int": "NoA Ignite",
        "se": "NoA Ignite",
        "fi": "NoA Ignite",
        "dk": "NoA Ignite"
      },
      "customer_anonymized": {},
      "customer_description": {},
      "customer_selected": "customer",
      "customer_value_proposition": {},
      "description": { "no": "NoA fussbot", "int": "" },
      "disabled": false,
      "diverged_from_master": false,
      "exclude_tags": [],
      "expected_roll_off_date": null,
      "extent_hours": null,
      "external_unique_id": null,
      "industry": { "no": "Teknologi", "int": "" },
      "location_country_code": null,
      "long_description": {
        "no": "NoA Ignite har en slack bot for å registrere fussball-matcher på huset. Denne består av et .NET API med en Microsoft SQL database som snakker med et Slack API. ",
        "int": ""
      },
      "modifier_id": null,
      "month_from": "09",
      "month_to": "11",
      "order": 1,
      "origin_id": null,
      "owner_updated_at": "2022-12-12T15:27:49.000Z",
      "percent_allocated": null,
      "project_experience_skills": [
        {
          "_id": "6374dbe3a09c0f0fe6947639",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": ".NET",
            "int": ".NET",
            "se": ".NET",
            "fi": ".NET",
            "dk": ".NET"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374dbeb9d6bae10147d7f33",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "Slack integration",
            "int": "Slack integration",
            "se": "Slack integration",
            "fi": "Slack integration",
            "dk": "Slack integration"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374dbf789dd440ff3963877",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": { "no": "Bicep" },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374dbfcaf19e90fd1f49727",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "IaC",
            "int": "IaC",
            "se": "IaC",
            "fi": "IaC",
            "dk": "IaC"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374dc019d6bae100c7d7f4a",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "Azure",
            "int": "Azure",
            "se": "Azure",
            "fi": "Azure",
            "dk": "Azure"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374dc0eaf19e90f9ff4980a",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 6,
          "proficiency": 0,
          "tags": {
            "no": "Microsoft SQL Server",
            "int": "Microsoft SQL Server",
            "se": "Microsoft SQL Server",
            "fi": "Microsoft SQL Server",
            "dk": "Microsoft SQL Server"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374dc1aa09c0f0fa99477c2",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 7,
          "proficiency": 0,
          "tags": {
            "no": "GitHub Actions",
            "int": "GitHub Actions",
            "se": "GitHub Actions",
            "fi": "GitHub Actions",
            "dk": "GitHub Actions"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374dc23a09c0f0fab94760b",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 8,
          "proficiency": 0,
          "tags": {
            "no": "CI/CD",
            "int": "CI/CD",
            "se": "CI/CD",
            "fi": "CI/CD",
            "dk": "CI/CD"
          },
          "total_duration_in_years": 0,
          "version": 1
        }
      ],
      "project_extent_amt": null,
      "project_extent_currency": null,
      "project_extent_hours": null,
      "project_type": {},
      "recently_added": false,
      "related_work_experience_id": null,
      "roles": [
        {
          "_id": "6374dbae89dd440fe196350e",
          "created_at": "2022-11-16T12:46:38.189Z",
          "cv_role_id": "6374dbb1af19e90fcbf49169",
          "disabled": false,
          "diverged_from_master": false,
          "long_description": {
            "no": "Sindre hadde rollen som .NET-utvikler og tok ansvaret for prosjektet alene. \n\nOppgavene bestod blant annet i å: \n- Definere alle Azure-ressurser som IaC i bicep filer og migrere alle ressurser til en ny Azure tenant.\n- Skrive tester før store refaktoreringer for å forsikre at ingenting brekker.\n- Oppgradere til nyeste versjoner for alle pakker og avhengigheter.\n- Sette opp CI/CD.\n- Vidreutvikle tjenesten.",
            "int": ""
          },
          "modifier_id": null,
          "order": 0,
          "origin_id": null,
          "recently_added": false,
          "starred": false,
          "summary": {},
          "updated_at": "2022-11-25T12:54:21.336Z",
          "version": 29,
          "name": { "no": ".NET-utvikler", "int": ".NET Developer" }
        }
      ],
      "starred": false,
      "total_extent_amt": null,
      "total_extent_currency": null,
      "total_extent_hours": null,
      "updated_at": "2023-01-11T17:10:23.427Z",
      "version": 177,
      "year_from": "2022",
      "year_to": "2022",
      "images": []
    },
    {
      "_id": "63beed7ff3997c0fabd312fc",
      "area_amt": null,
      "area_unit": null,
      "created_at": "2023-01-11T17:10:23.977Z",
      "customer": {
        "no": "Norges Fotballforbund",
        "int": "Norges Fotballforbund",
        "se": "Norges Fotballforbund"
      },
      "customer_anonymized": {},
      "customer_description": {},
      "customer_selected": "customer",
      "customer_value_proposition": {},
      "description": { "no": "tiim.no", "int": "" },
      "disabled": false,
      "diverged_from_master": false,
      "exclude_tags": [],
      "expected_roll_off_date": null,
      "extent_hours": null,
      "external_unique_id": null,
      "industry": { "no": "Organisasjon", "int": "NGO", "se": "Organisation" },
      "location_country_code": null,
      "long_description": {
        "no": "tiim.no skal bli NFFs viktigste digitale kanal for norske fotballtrenere. Gjennom faglig inspirasjon og enklere tilgang til NFFs trenerkurs og videreutdanningstilbud ønsker NFF å inspirere trenere fra barnefotballen og opp til elitenivå. Kursadministrasjon skal også forenkles og bidra til mer effektive prosesser i NFF sentralt og i kretsleddet. NoA Ignites team har jobbet tett sammen med fagmiljøet i NFF for å samle innsikt om trenernes behov fra intervjuer, fokusgrupper og spørreundersøkelser. Vi har kartlagt brukerreisene for kursgjennomføring for alle trinnene i NFFs kursstige på jakt etter områder vi kan forbedre for trenere, kursveileder og administratorer. Vi har designet en merkevare for denne nye tjenesten og designet en første begrenset versjon av løsningen som er under utvikling. Teknisk plattform er Sanity.io som CMS-plattform, med frontend basert på Next.js og Vercel. Vi bygger også mikrotjenester i Azure for å integrere med kursløsningene til Norges Idrettsforbund, slik at brukerne får tilgang til kurskatalog og mulighet for å melde seg på kurs, samt få oversikt over sin egen formelle trenerkompetanse og muligheter for videreutdanning. Innlogging for alle brukere er løst gjennom integrasjon med Idrettens ID (Open ID Connect). NoA Ignite bidrar også med rådgivning knyttet til innholdsstrategi og hvilke roller og prosesser NFF må etablere for å lykkes med å skape ønskede effekter over tid. ",
        "int": ""
      },
      "modifier_id": null,
      "month_from": "01",
      "month_to": "06",
      "order": 0,
      "origin_id": null,
      "owner_updated_at": "2023-02-23T06:34:06.000Z",
      "percent_allocated": null,
      "project_experience_skills": [
        {
          "_id": "63beefac79e1bf0fb74d3d8b",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "TDD (Test-Driven Development)",
            "int": "TDD (Test-Driven Development)",
            "se": "TDD (Test-Driven Development)",
            "fi": "TDD (Test-Driven Development)",
            "dk": "TDD (Test-Driven Development)"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefaff69fb70f61a7d73a",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "Next.js",
            "int": "Next.js",
            "se": "Next.js",
            "fi": "Next.js",
            "dk": "Next.js"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefb1f3997c0fbdd310ea",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": { "no": "Bicep" },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefb379e1bf0fb34d3c50",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "C#",
            "int": "C#",
            "se": "C#",
            "fi": "C#",
            "dk": "C#"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefc1f69fb70f77a7d855",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "CI/CD",
            "int": "CI/CD",
            "se": "CI/CD",
            "fi": "CI/CD",
            "dk": "CI/CD"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefc2ee82020fb9e3725f",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 6,
          "proficiency": 0,
          "tags": {
            "no": "API Management",
            "int": "API Management",
            "se": "API Management",
            "fi": "API Management",
            "dk": "API Management"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefc4ee82020fb5e372e1",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 7,
          "proficiency": 0,
          "tags": {
            "no": "DevOps",
            "int": "DevOps",
            "se": "DevOps",
            "fi": "DevOps",
            "dk": "DevOps"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefc8cb42150f9c2f4450",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 8,
          "proficiency": 0,
          "tags": {
            "no": "Sanity studio",
            "int": "Sanity studio",
            "se": "Sanity studio",
            "fi": "Sanity studio",
            "dk": "Sanity studio"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefcab0b436109fdb5e92",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 9,
          "proficiency": 0,
          "tags": {
            "no": "Azure DevOps",
            "int": "Azure DevOps",
            "se": "Azure DevOps",
            "fi": "Azure DevOps",
            "dk": "Azure DevOps"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefd5ee82020fb5e372e3",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 10,
          "proficiency": 0,
          "tags": {
            "no": ".NET 6.0",
            "int": ".NET 6.0",
            "se": ".NET 6.0",
            "fi": ".NET 6.0",
            "dk": ".NET 6.0"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefd8b0b4360fc0db5d4c",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 11,
          "proficiency": 0,
          "tags": {
            "no": "HTML5/CSS3",
            "int": "HTML5/CSS3",
            "se": "HTML5/CSS3",
            "fi": "HTML5/CSS3",
            "dk": "HTML5/CSS3"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefdbf69fb70f67a7d64e",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 12,
          "proficiency": 0,
          "tags": {
            "no": "SOAP",
            "int": "SOAP",
            "se": "SOAP",
            "fi": "SOAP",
            "dk": "SOAP"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefe0f3997c0fabd31313",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 13,
          "proficiency": 0,
          "tags": {
            "no": "Slack",
            "int": "Slack",
            "se": "Slack",
            "fi": "Slack",
            "dk": "Slack"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefe2ee82020fb3e3717b",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 14,
          "proficiency": 0,
          "tags": {
            "no": "React",
            "int": "React",
            "se": "React",
            "fi": "React",
            "dk": "React"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefe9f3997c0fbbd31074",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 15,
          "proficiency": 0,
          "tags": {
            "no": "Postman",
            "int": "Postman",
            "se": "Postman",
            "fi": "Postman",
            "dk": "Postman"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefebf69fb70f69a7d6ad",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 16,
          "proficiency": 0,
          "tags": {
            "no": "Elasticsearch",
            "int": "Elasticsearch",
            "se": "Elasticsearch",
            "fi": "Elasticsearch",
            "dk": "Elasticsearch"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefedf69fb70f79a7d7d3",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 17,
          "proficiency": 0,
          "tags": {
            "no": "TypeScript",
            "int": "TypeScript",
            "se": "TypeScript",
            "fi": "TypeScript",
            "dk": "TypeScript"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beeff3ee82020fa9e37315",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 18,
          "proficiency": 0,
          "tags": {
            "no": "xUnit",
            "int": "xUnit",
            "se": "xUnit",
            "fi": "xUnit",
            "dk": "xUnit"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beeff6f69fb70f65a7d832",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 19,
          "proficiency": 0,
          "tags": {
            "no": "React Typescript",
            "int": "React Typescript",
            "se": "React Typescript",
            "fi": "React Typescript",
            "dk": "React Typescript"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beeff8f69fb70f69a7d6af",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 20,
          "proficiency": 0,
          "tags": {
            "no": "Azure Service Bus",
            "int": "Azure Service Bus",
            "se": "Azure Service Bus",
            "fi": "Azure Service Bus",
            "dk": "Azure Service Bus"
          },
          "total_duration_in_years": 0,
          "version": 1
        }
      ],
      "project_extent_amt": null,
      "project_extent_currency": null,
      "project_extent_hours": null,
      "project_type": {},
      "recently_added": false,
      "related_work_experience_id": null,
      "roles": [
        {
          "_id": "63beee0e79e1bf0fab4d3e0d",
          "created_at": "2023-01-11T17:12:46.591Z",
          "cv_role_id": "63beee1479e1bf0fb54d3c31",
          "disabled": false,
          "diverged_from_master": false,
          "long_description": {
            "no": "Sindre kom inn litt senere i prosjektet og tok over rollen som backend utvikler. Han fikk ansvaret for hele backend løsningen i .NET og integrasjons API-ene. Han fikk også ansvaret for mikrotjenestene i Azure og CI/CD løsningen i Azure Devops.\n\nI tillegg hjelper Sindre til med frontend utvikling i Next.js og CMS løsningen Sanity ved behov.",
            "int": ""
          },
          "modifier_id": null,
          "order": 0,
          "origin_id": null,
          "recently_added": false,
          "starred": false,
          "summary": {},
          "updated_at": "2023-01-11T17:19:24.968Z",
          "version": 98,
          "name": {
            "no": "Architect og Fullstack .NET Utvikler",
            "int": "Backend developer",
            "se": "Backend developer",
            "fi": "Backend developer",
            "dk": "Backend developer"
          }
        }
      ],
      "starred": true,
      "total_extent_amt": null,
      "total_extent_currency": null,
      "total_extent_hours": null,
      "updated_at": "2023-02-23T06:34:06.420Z",
      "version": 15,
      "year_from": "2022",
      "year_to": "2022",
      "images": []
    }
  ],
  "technologies": [
    {
      "_id": "6267d257d9d1d50ff15bbf65",
      "category": {},
      "created_at": "2022-04-26T11:07:04.381Z",
      "disabled": true,
      "diverged_from_master": false,
      "exclude_tags": [],
      "external_unique_id": null,
      "modifier_id": null,
      "order": null,
      "origin_id": null,
      "owner_updated_at": "2023-01-11T17:20:54.000Z",
      "recently_added": false,
      "starred": false,
      "technology_skills": [
        {
          "_id": "6267e3c7fb164a101a56946b",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "Web",
            "dk": "Web",
            "int": "Web",
            "fi": "Web",
            "se": "Web"
          },
          "total_duration_in_years": 5,
          "version": 2
        },
        {
          "_id": "62ff6a05b1aa7c0fa4b758b0",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "http4k",
            "dk": "http4k",
            "int": "http4k",
            "fi": "http4k",
            "se": "http4k"
          },
          "total_duration_in_years": 0,
          "version": 2
        },
        {
          "_id": "62ff6a169fb1560f5e14d48c",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": {
            "no": "Server as a function",
            "dk": "Server as a function",
            "int": "Server as a function",
            "fi": "Server as a function",
            "se": "Server as a function"
          },
          "total_duration_in_years": 0,
          "version": 2
        },
        {
          "_id": "62ff6a349fb1560f5d14d568",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "HTML/CSS/JS",
            "int": "HTML/CSS/JS",
            "se": "HTML/CSS/JS",
            "fi": "HTML/CSS/JS",
            "dk": "HTML/CSS/JS"
          },
          "total_duration_in_years": 5,
          "version": 1
        },
        {
          "_id": "62ff6a551979ba0fb58c97cb",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "AWS SNS",
            "int": "AWS SNS",
            "se": "AWS SNS",
            "fi": "AWS SNS",
            "dk": "AWS SNS"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "630393f4e0d6a90f87b3e1bf",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 6,
          "proficiency": 0,
          "tags": {
            "no": "Tech Lead",
            "int": "Tech Lead",
            "se": "Tech Lead",
            "fi": "Tech Lead",
            "dk": "Tech Lead"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6316ee65d6ac31106b8f6e4a",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 7,
          "proficiency": 0,
          "tags": { "no": "traefik" },
          "total_duration_in_years": 5,
          "version": 1
        },
        {
          "_id": "6316eeb6b1b84d0f956e9444",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 8,
          "proficiency": 0,
          "tags": {
            "no": "DNS",
            "int": "DNS",
            "se": "DNS",
            "fi": "DNS",
            "dk": "DNS"
          },
          "total_duration_in_years": 5,
          "version": 1
        },
        {
          "_id": "6322cb32f4f5600fc7bd749b",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 9,
          "proficiency": 0,
          "tags": { "no": "React Testing Library" },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322cb4c8c275b0f58e22bc5",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 10,
          "proficiency": 0,
          "tags": {
            "no": "Brukertesting",
            "int": "User Testing",
            "se": "Användartestning",
            "fi": "User Testing",
            "dk": "User Testing"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6322dc9a8c275b0f59e22b7e",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 11,
          "proficiency": 0,
          "tags": {
            "no": "SvelteKit",
            "int": "SvelteKit",
            "se": "SvelteKit",
            "fi": "SvelteKit",
            "dk": "SvelteKit"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefc8f69fb70f5fa7da28",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 13,
          "proficiency": 0,
          "tags": {
            "no": "Sanity studio",
            "int": "Sanity studio",
            "se": "Sanity studio",
            "fi": "Sanity studio",
            "dk": "Sanity studio"
          },
          "total_duration_in_years": 1,
          "version": 2
        },
        {
          "_id": "63beefd5f3997c0fa7d311b0",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 14,
          "proficiency": 0,
          "tags": {
            "no": ".NET 6.0",
            "int": ".NET 6.0",
            "se": ".NET 6.0",
            "fi": ".NET 6.0",
            "dk": ".NET 6.0"
          },
          "total_duration_in_years": 1,
          "version": 2
        },
        {
          "_id": "63beeff6ee82020fbde37194",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 15,
          "proficiency": 0,
          "tags": {
            "no": "React Typescript",
            "int": "React Typescript",
            "se": "React Typescript",
            "fi": "React Typescript",
            "dk": "React Typescript"
          },
          "total_duration_in_years": 1,
          "version": 2
        }
      ],
      "uncategorized": true,
      "updated_at": "2023-01-12T00:33:37.598Z",
      "version": 2
    },
    {
      "_id": "6267e30bf3adf1103a74c3e8",
      "category": {
        "no": "Teknologi",
        "int": "Technology",
        "se": "Teknik",
        "dk": "Technology",
        "fi": "Technology"
      },
      "created_at": "2022-04-26T12:18:19.994Z",
      "disabled": false,
      "diverged_from_master": false,
      "exclude_tags": [],
      "external_unique_id": null,
      "modifier_id": null,
      "order": 1,
      "origin_id": null,
      "owner_updated_at": "2023-01-11T17:20:56.000Z",
      "recently_added": false,
      "starred": false,
      "technology_skills": [
        {
          "_id": "6267e315fb164a10245699f6",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "Next.js",
            "int": "Next.js",
            "se": "Next.js",
            "dk": "Next.js",
            "fi": "Next.js"
          },
          "total_duration_in_years": 1,
          "version": 4
        },
        {
          "_id": "6267e319e47cec0fbdc5d230",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "TypeScript",
            "int": "TypeScript",
            "se": "TypeScript",
            "dk": "TypeScript",
            "fi": "TypeScript"
          },
          "total_duration_in_years": 1,
          "version": 3
        },
        {
          "_id": "6267e3b1d9d1d50fff5bbcc8",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": {
            "no": "AngularJS",
            "int": "AngularJS",
            "se": "AngularJS",
            "dk": "AngularJS",
            "fi": "AngularJS"
          },
          "total_duration_in_years": 5,
          "version": 2
        },
        {
          "_id": "6267e3b7fb164a101456977b",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "Restful API",
            "int": "Restful API",
            "dk": "Restful API",
            "fi": "Restful API",
            "se": "Restful API"
          },
          "total_duration_in_years": 5,
          "version": 3
        },
        {
          "_id": "6267e3bce47cec0fe9c5d0fd",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "Django",
            "int": "Django",
            "se": "Django",
            "dk": "Django",
            "fi": "Django"
          },
          "total_duration_in_years": 5,
          "version": 3
        },
        {
          "_id": "62694a510032620fe70aff58",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 6,
          "proficiency": 0,
          "tags": {
            "no": "GitHub",
            "int": "GitHub",
            "se": "GitHub",
            "dk": "GitHub",
            "fi": "GitHub"
          },
          "total_duration_in_years": 0,
          "version": 2
        },
        {
          "_id": "62694a5616da930fd57787b6",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 7,
          "proficiency": 0,
          "tags": {
            "no": "React.js",
            "int": "React.js",
            "se": "React.js",
            "dk": "React.js",
            "fi": "React.js"
          },
          "total_duration_in_years": 0,
          "version": 4
        },
        {
          "_id": "62ff4f32b4c9860fab49ad03",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 8,
          "proficiency": 0,
          "tags": {
            "no": "Python",
            "int": "Python",
            "se": "Python",
            "fi": "Python",
            "dk": "Python"
          },
          "total_duration_in_years": 1,
          "version": 1
        },
        {
          "_id": "62ff4f3f843d6f0f8ac40fe9",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 9,
          "proficiency": 0,
          "tags": {
            "no": "Pandas",
            "int": "Pandas",
            "se": "Pandas",
            "fi": "Pandas",
            "dk": "Pandas"
          },
          "total_duration_in_years": 1,
          "version": 1
        },
        {
          "_id": "62ff59f2ec5f3a0f8f364abf",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 10,
          "proficiency": 0,
          "tags": {
            "no": "NumPy",
            "int": "NumPy",
            "se": "NumPy",
            "fi": "NumPy",
            "dk": "NumPy"
          },
          "total_duration_in_years": 1,
          "version": 1
        },
        {
          "_id": "62ff5c4f1979ba10708c9682",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 11,
          "proficiency": 0,
          "tags": {
            "no": "TensorFlow",
            "int": "TensorFlow",
            "se": "TensorFlow",
            "fi": "TensorFlow",
            "dk": "TensorFlow"
          },
          "total_duration_in_years": 1,
          "version": 1
        },
        {
          "_id": "62ff5c6c96e2490fa49f0ba2",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 12,
          "proficiency": 0,
          "tags": {
            "no": "Keras",
            "int": "Keras",
            "se": "Keras",
            "fi": "Keras",
            "dk": "Keras"
          },
          "total_duration_in_years": 1,
          "version": 1
        },
        {
          "_id": "62ff5c9eb1aa7c0fa7b75784",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 13,
          "proficiency": 0,
          "tags": {
            "no": "Pytorch",
            "int": "Pytorch",
            "se": "Pytorch",
            "fi": "Pytorch",
            "dk": "Pytorch"
          },
          "total_duration_in_years": 1,
          "version": 1
        },
        {
          "_id": "62ff5d2e96e2490fa19f0bac",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 14,
          "proficiency": 0,
          "tags": {
            "no": "Pytest",
            "int": "Pytest",
            "se": "Pytest",
            "fi": "Pytest",
            "dk": "Pytest"
          },
          "total_duration_in_years": 1,
          "version": 1
        },
        {
          "_id": "62ff6a4096e2490fa19f0dca",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 15,
          "proficiency": 0,
          "tags": {
            "no": "React",
            "int": "React",
            "se": "React",
            "fi": "React",
            "dk": "React"
          },
          "total_duration_in_years": 5,
          "version": 1
        },
        {
          "_id": "62ff6a67b1aa7c0fa5b758f0",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 16,
          "proficiency": 0,
          "tags": {
            "no": "Amazon AWS",
            "int": "Amazon AWS",
            "se": "Amazon AWS",
            "fi": "Amazon AWS",
            "dk": "Amazon AWS"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6a9b1979ba0f938c97b3",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 17,
          "proficiency": 0,
          "tags": {
            "no": "Styled Components",
            "int": "Styled Components",
            "se": "Styled Components",
            "fi": "Styled Components",
            "dk": "Styled Components"
          },
          "total_duration_in_years": 1,
          "version": 1
        },
        {
          "_id": "62ff6ae81979ba0fd48c97d5",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 18,
          "proficiency": 0,
          "tags": {
            "no": "Vue.js",
            "int": "Vue.js",
            "se": "Vue.js",
            "fi": "Vue.js",
            "dk": "Vue.js"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6afc1979ba0fd58c985d",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 20,
          "proficiency": 0,
          "tags": {
            "no": "Docker",
            "int": "Docker",
            "se": "Docker",
            "fi": "Docker",
            "dk": "Docker"
          },
          "total_duration_in_years": 1,
          "version": 1
        },
        {
          "_id": "62ff6b029fb1560f5914d3e0",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 21,
          "proficiency": 0,
          "tags": {
            "no": "Kubernetes",
            "int": "Kubernetes",
            "se": "Kubernetes",
            "fi": "Kubernetes",
            "dk": "Kubernetes"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6b141979ba10708c97bb",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 22,
          "proficiency": 0,
          "tags": {
            "no": "Google Cloud Platform",
            "int": "Google Cloud Platform",
            "se": "Google Cloud Platform",
            "fi": "Google Cloud Platform",
            "dk": "Google Cloud Platform"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6b2c9fb1560f5d14d57e",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 23,
          "proficiency": 0,
          "tags": {
            "no": "PostgreSQL",
            "int": "PostgreSQL",
            "se": "PostgreSQL",
            "fi": "PostgreSQL",
            "dk": "PostgreSQL"
          },
          "total_duration_in_years": 1,
          "version": 1
        },
        {
          "_id": "62ff6b66b1aa7c0fa7b75906",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 24,
          "proficiency": 0,
          "tags": {
            "no": "DocumentDB",
            "int": "DocumentDB",
            "se": "DocumentDB",
            "fi": "DocumentDB",
            "dk": "DocumentDB"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6303936ce0d6a90f81b3e108",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 25,
          "proficiency": 0,
          "tags": {
            "no": "Azure",
            "int": "Azure",
            "se": "Azure",
            "fi": "Azure",
            "dk": "Azure"
          },
          "total_duration_in_years": 5,
          "version": 1
        },
        {
          "_id": "630393846755e00f94ad1a3e",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 26,
          "proficiency": 0,
          "tags": {
            "no": "ASP.NET Core",
            "int": "ASP.NET Core",
            "se": "ASP.NET Core",
            "fi": "ASP.NET Core",
            "dk": "ASP.NET Core"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "630393c9d5b98e0f79007345",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 27,
          "proficiency": 0,
          "tags": {
            "no": "Cypress",
            "int": "Cypress",
            "se": "Cypress",
            "fi": "Cypress",
            "dk": "Cypress"
          },
          "total_duration_in_years": 1,
          "version": 1
        },
        {
          "_id": "6316ee5c0f867e0f94f3a8f0",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 28,
          "proficiency": 0,
          "tags": {
            "no": "Swagger",
            "int": "Swagger",
            "se": "Swagger",
            "fi": "Swagger",
            "dk": "Swagger"
          },
          "total_duration_in_years": 5,
          "version": 1
        },
        {
          "_id": "6316ee96d6ac31106b8f6e54",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 29,
          "proficiency": 0,
          "tags": {
            "no": "Storybook",
            "int": "Storybook",
            "se": "Storybook",
            "fi": "Storybook",
            "dk": "Storybook"
          },
          "total_duration_in_years": 5,
          "version": 1
        },
        {
          "_id": "6316eeaa321bb7104f4690b3",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 30,
          "proficiency": 0,
          "tags": {
            "no": "Spring Boot",
            "int": "Spring Boot",
            "se": "Spring Boot",
            "fi": "Spring Boot",
            "dk": "Spring Boot"
          },
          "total_duration_in_years": 5,
          "version": 1
        },
        {
          "_id": "6322cb36711f7f0fc3e11ba3",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 31,
          "proficiency": 0,
          "tags": {
            "no": "TailwindCSS",
            "int": "TailwindCSS",
            "se": "TailwindCSS",
            "fi": "TailwindCSS",
            "dk": "TailwindCSS"
          },
          "total_duration_in_years": 1,
          "version": 2
        },
        {
          "_id": "6374dbe389dd440fdf963724",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 32,
          "proficiency": 0,
          "tags": {
            "no": ".NET",
            "int": ".NET",
            "se": ".NET",
            "fi": ".NET",
            "dk": ".NET"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374dbeb6fe7953960094c3e",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 33,
          "proficiency": 0,
          "tags": {
            "no": "Slack integration",
            "int": "Slack integration",
            "se": "Slack integration",
            "fi": "Slack integration",
            "dk": "Slack integration"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374dc0e9d6bae10187d7fe7",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 34,
          "proficiency": 0,
          "tags": {
            "no": "Microsoft SQL Server",
            "int": "Microsoft SQL Server",
            "se": "Microsoft SQL Server",
            "fi": "Microsoft SQL Server",
            "dk": "Microsoft SQL Server"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefd879e1bf0fad4d3d3e",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 35,
          "proficiency": 0,
          "tags": {
            "no": "HTML5/CSS3",
            "int": "HTML5/CSS3",
            "se": "HTML5/CSS3",
            "fi": "HTML5/CSS3",
            "dk": "HTML5/CSS3"
          },
          "total_duration_in_years": 1,
          "version": 2
        },
        {
          "_id": "63beefeb79e1bf0fc24d3c0f",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 36,
          "proficiency": 0,
          "tags": {
            "no": "Elasticsearch",
            "int": "Elasticsearch",
            "se": "Elasticsearch",
            "fi": "Elasticsearch",
            "dk": "Elasticsearch"
          },
          "total_duration_in_years": 1,
          "version": 2
        },
        {
          "_id": "63beeff3b0b4360fc4db5d29",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 37,
          "proficiency": 0,
          "tags": {
            "no": "xUnit",
            "int": "xUnit",
            "se": "xUnit",
            "fi": "xUnit",
            "dk": "xUnit"
          },
          "total_duration_in_years": 1,
          "version": 2
        },
        {
          "_id": "63beeff8f3997c0fbfd3115d",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 38,
          "proficiency": 0,
          "tags": {
            "no": "Azure Service Bus",
            "int": "Azure Service Bus",
            "se": "Azure Service Bus",
            "fi": "Azure Service Bus",
            "dk": "Azure Service Bus"
          },
          "total_duration_in_years": 1,
          "version": 2
        }
      ],
      "uncategorized": false,
      "updated_at": "2023-01-12T00:33:38.666Z",
      "version": 3
    },
    {
      "_id": "6267e30cfb164a102056947c",
      "category": {
        "no": "Plattform \u0026 infrastruktur",
        "int": "Platforms \u0026 Infrastructure",
        "se": "Plattform",
        "dk": "Platforms \u0026 Infrastructure",
        "fi": "Platforms \u0026 Infrastructure"
      },
      "created_at": "2022-04-26T12:18:20.644Z",
      "disabled": false,
      "diverged_from_master": false,
      "exclude_tags": [],
      "external_unique_id": null,
      "modifier_id": null,
      "order": 2,
      "origin_id": null,
      "owner_updated_at": "2023-01-11T17:20:29.000Z",
      "recently_added": false,
      "starred": false,
      "technology_skills": [
        {
          "_id": "6267e311e47cec100ec5d219",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "Sanity.io",
            "int": "Sanity.io",
            "se": "Sanity.io",
            "dk": "Sanity.io",
            "fi": "Sanity.io"
          },
          "total_duration_in_years": 0,
          "version": 3
        },
        {
          "_id": "630393843eda820fa2b783c3",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "ASP.NET Core",
            "int": "ASP.NET Core",
            "se": "ASP.NET Core",
            "fi": "ASP.NET Core",
            "dk": "ASP.NET Core"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6316eeb07f4d3410686d972d",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": {
            "no": "Linux",
            "int": "Linux",
            "se": "Linux",
            "fi": "Linux",
            "dk": "Linux"
          },
          "total_duration_in_years": 5,
          "version": 1
        },
        {
          "_id": "6322cb51f4f5600fc0bd76aa",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "Vercel",
            "int": "Vercel",
            "se": "Vercel",
            "fi": "Vercel",
            "dk": "Vercel"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374e4a789dd440ff19636f8",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "Azure DevOps",
            "int": "Azure DevOps",
            "se": "Azure DevOps",
            "fi": "Azure DevOps",
            "dk": "Azure DevOps"
          },
          "total_duration_in_years": 1,
          "version": 2
        },
        {
          "_id": "63beefdd79e1bf0fb34d3c53",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 6,
          "proficiency": 0,
          "tags": {
            "no": "SOAP",
            "int": "SOAP",
            "se": "SOAP",
            "fi": "SOAP",
            "dk": "SOAP"
          },
          "total_duration_in_years": 1,
          "version": 2
        },
        {
          "_id": "6422c2fb468d6c4584537ede",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 8,
          "proficiency": 0,
          "tags": { "no": "Bicep" },
          "total_duration_in_years": 1,
          "version": 1
        }
      ],
      "uncategorized": false,
      "updated_at": "2023-03-28T10:35:39.565Z",
      "version": 5
    },
    {
      "_id": "62ff69fdb1aa7c0fa3b758bf",
      "category": {
        "no": "Språk \u0026 rammeverk",
        "int": "Languages \u0026 Frameworks",
        "dk": "Languages \u0026 Frameworks",
        "fi": "Languages \u0026 Frameworks",
        "se": "Languages \u0026 Frameworks"
      },
      "created_at": "2022-08-19T10:46:21.192Z",
      "disabled": false,
      "diverged_from_master": false,
      "exclude_tags": [],
      "external_unique_id": null,
      "modifier_id": null,
      "order": 3,
      "origin_id": null,
      "owner_updated_at": "2023-01-11T17:19:53.000Z",
      "recently_added": false,
      "starred": false,
      "technology_skills": [
        {
          "_id": "62ff69fe1979ba0f948c9804",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "Kotlin",
            "int": "Kotlin",
            "se": "Kotlin",
            "fi": "Kotlin",
            "dk": "Kotlin"
          },
          "total_duration_in_years": 5,
          "version": 1
        },
        {
          "_id": "63039393d5b98e0f4d00749f",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "React",
            "int": "React",
            "se": "React",
            "fi": "React",
            "dk": "React"
          },
          "total_duration_in_years": 5,
          "version": 1
        },
        {
          "_id": "630393c96755e00fa1ad19e2",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": {
            "no": "Cypress",
            "int": "Cypress",
            "se": "Cypress",
            "fi": "Cypress",
            "dk": "Cypress"
          },
          "total_duration_in_years": 1,
          "version": 1
        },
        {
          "_id": "63beefb8cb42150fca2f43e4",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "C#",
            "int": "C#",
            "se": "C#",
            "fi": "C#",
            "dk": "C#"
          },
          "total_duration_in_years": 1,
          "version": 2
        }
      ],
      "uncategorized": false,
      "updated_at": "2023-01-11T17:19:53.116Z",
      "version": 3
    },
    {
      "_id": "62ff6a611979ba0f938c97ad",
      "category": {
        "no": "Verktøy",
        "int": "Tools",
        "se": "Verktyg",
        "dk": "Tools",
        "fi": "Tools"
      },
      "created_at": "2022-08-19T10:48:01.163Z",
      "disabled": false,
      "diverged_from_master": false,
      "exclude_tags": [],
      "external_unique_id": null,
      "modifier_id": null,
      "order": 4,
      "origin_id": null,
      "owner_updated_at": "2023-01-11T17:20:41.000Z",
      "recently_added": false,
      "starred": false,
      "technology_skills": [
        {
          "_id": "62ff6ab4b1aa7c0fa7b758f8",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "Agile Methodologies",
            "int": "Agile Methodologies",
            "se": "Agile Methodologies",
            "fi": "Agile Methodologies",
            "dk": "Agile Methodologies"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "62ff6abfb1aa7c0fa8b758c0",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "Scrum",
            "int": "Scrum",
            "se": "Scrum",
            "fi": "Scrum",
            "dk": "Scrum"
          },
          "total_duration_in_years": 1,
          "version": 1
        },
        {
          "_id": "630393e0e0d6a90f94b3e20c",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": {
            "no": "GitHub Actions",
            "int": "GitHub Actions",
            "se": "GitHub Actions",
            "fi": "GitHub Actions",
            "dk": "GitHub Actions"
          },
          "total_duration_in_years": 1,
          "version": 1
        },
        {
          "_id": "63039402d5b98e0fb800760b",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "Kanban",
            "int": "Kanban",
            "se": "Kanban",
            "fi": "Kanban",
            "dk": "Kanban"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6316ee5cb1b84d0f9a6e92dc",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "Swagger",
            "int": "Swagger",
            "se": "Swagger",
            "fi": "Swagger",
            "dk": "Swagger"
          },
          "total_duration_in_years": 5,
          "version": 1
        },
        {
          "_id": "6316ee96321bb70f82468f4b",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 6,
          "proficiency": 0,
          "tags": {
            "no": "Storybook",
            "int": "Storybook",
            "se": "Storybook",
            "fi": "Storybook",
            "dk": "Storybook"
          },
          "total_duration_in_years": 5,
          "version": 1
        },
        {
          "_id": "6316eeaa321bb71032469179",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 7,
          "proficiency": 0,
          "tags": {
            "no": "Spring Boot",
            "int": "Spring Boot",
            "se": "Spring Boot",
            "fi": "Spring Boot",
            "dk": "Spring Boot"
          },
          "total_duration_in_years": 5,
          "version": 1
        },
        {
          "_id": "6322cb5f1570a00fbf5e95a5",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 8,
          "proficiency": 0,
          "tags": {
            "no": "Notion",
            "int": "Notion",
            "se": "Notion",
            "fi": "Notion",
            "dk": "Notion"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374e4a7a09c0f0fab94772b",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 9,
          "proficiency": 0,
          "tags": {
            "no": "Azure DevOps",
            "int": "Azure DevOps",
            "se": "Azure DevOps",
            "fi": "Azure DevOps",
            "dk": "Azure DevOps"
          },
          "total_duration_in_years": 1,
          "version": 2
        },
        {
          "_id": "63beefc2cb42150f9a2f45d3",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 10,
          "proficiency": 0,
          "tags": {
            "no": "API Management",
            "int": "API Management",
            "se": "API Management",
            "fi": "API Management",
            "dk": "API Management"
          },
          "total_duration_in_years": 1,
          "version": 2
        },
        {
          "_id": "63beefe0ee82020fa3e37168",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 11,
          "proficiency": 0,
          "tags": {
            "no": "Slack",
            "int": "Slack",
            "se": "Slack",
            "fi": "Slack",
            "dk": "Slack"
          },
          "total_duration_in_years": 1,
          "version": 2
        },
        {
          "_id": "63beefe979e1bf0fab4d3e18",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 12,
          "proficiency": 0,
          "tags": {
            "no": "Postman",
            "int": "Postman",
            "se": "Postman",
            "fi": "Postman",
            "dk": "Postman"
          },
          "total_duration_in_years": 1,
          "version": 2
        }
      ],
      "uncategorized": false,
      "updated_at": "2023-01-12T00:33:39.397Z",
      "version": 3
    },
    {
      "_id": "62ff6a781979ba0fd58c984b",
      "category": {
        "no": "Prosess \u0026 metodikk",
        "int": "Methodologies",
        "se": "Metodik",
        "dk": "Methodologies",
        "fi": "Methodologies"
      },
      "created_at": "2022-08-19T10:48:24.188Z",
      "disabled": true,
      "diverged_from_master": false,
      "exclude_tags": [],
      "external_unique_id": null,
      "modifier_id": null,
      "order": 5,
      "origin_id": null,
      "owner_updated_at": "2023-01-11T17:20:04.000Z",
      "recently_added": false,
      "starred": false,
      "technology_skills": [
        {
          "_id": "62ff6a791979ba0ff88c987a",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "IaC",
            "int": "IaC",
            "se": "IaC",
            "fi": "IaC",
            "dk": "IaC"
          },
          "total_duration_in_years": 1,
          "version": 2
        },
        {
          "_id": "6322cb3c6719ed0f9fc1f8d6",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 2,
          "proficiency": 0,
          "tags": {
            "no": "CI/CD",
            "int": "CI/CD",
            "se": "CI/CD",
            "fi": "CI/CD",
            "dk": "CI/CD"
          },
          "total_duration_in_years": 1,
          "version": 2
        },
        {
          "_id": "6322cb40f4f5600fc6bd73fa",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 3,
          "proficiency": 0,
          "tags": {
            "no": "Scrum Master",
            "int": "Scrum Master",
            "se": "Scrum Master",
            "fi": "Scrum Master",
            "dk": "Scrum Master"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6374e4dac597c21020866cdf",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 4,
          "proficiency": 0,
          "tags": {
            "no": "Atomic Design",
            "int": "Atomic Design",
            "se": "Atomic Design",
            "fi": "Atomic Design",
            "dk": "Atomic Design"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6380bd0078822d104d65fe74",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 5,
          "proficiency": 0,
          "tags": {
            "no": "Agile process",
            "int": "Agile process",
            "se": "Agile process",
            "fi": "Agile process",
            "dk": "Agile process"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "6380bd034f3efe10093142dd",
          "base_duration_in_years": 0,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 6,
          "proficiency": 0,
          "tags": {
            "no": "Smidig",
            "int": "Agile",
            "se": "Agile",
            "fi": "Agile",
            "dk": "Agile"
          },
          "total_duration_in_years": 0,
          "version": 1
        },
        {
          "_id": "63beefacee82020fbde37192",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 7,
          "proficiency": 0,
          "tags": {
            "no": "TDD (Test-Driven Development)",
            "int": "TDD (Test-Driven Development)",
            "se": "TDD (Test-Driven Development)",
            "fi": "TDD (Test-Driven Development)",
            "dk": "TDD (Test-Driven Development)"
          },
          "total_duration_in_years": 1,
          "version": 2
        },
        {
          "_id": "63beefc479e1bf0faf4d3c57",
          "base_duration_in_years": 1,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 8,
          "proficiency": 0,
          "tags": {
            "no": "DevOps",
            "int": "DevOps",
            "se": "DevOps",
            "fi": "DevOps",
            "dk": "DevOps"
          },
          "total_duration_in_years": 1,
          "version": 2
        }
      ],
      "uncategorized": false,
      "updated_at": "2023-01-12T00:33:40.051Z",
      "version": 2
    },
    {
      "_id": "6316ee8ab1b84d0f9a6e92e2",
      "category": {
        "no": "Fagområder \u0026 nøkkelkompetanse",
        "int": "Practices"
      },
      "created_at": "2022-09-06T06:54:02.647Z",
      "disabled": true,
      "diverged_from_master": false,
      "exclude_tags": [],
      "external_unique_id": null,
      "modifier_id": null,
      "order": 6,
      "origin_id": null,
      "owner_updated_at": "2022-09-06T06:54:04.000Z",
      "recently_added": false,
      "starred": false,
      "technology_skills": [
        {
          "_id": "6316ee8c321bb71078468fcb",
          "base_duration_in_years": 5,
          "modifier_id": null,
          "offset_duration_in_years": 0,
          "order": 1,
          "proficiency": 0,
          "tags": {
            "no": "Komponentdesign",
            "int": "Component design",
            "se": "Component design",
            "fi": "Component design",
            "dk": "Component design"
          },
          "total_duration_in_years": 5,
          "version": 1
        }
      ],
      "uncategorized": false,
      "updated_at": "2022-09-06T06:54:04.873Z",
      "version": 1
    }
  ],
  "telefon": "96518405",
  "tilbud_id": null,
  "title": { "no": "Junior Developer", "int": "" },
  "twitter": null,
  "updated_at": "2023-03-28T10:40:09.981Z",
  "version": 9,
  "work_experiences": [
    {
      "_id": "6267e183e47cec100ec5d17f",
      "created_at": "2022-04-26T12:11:47.393Z",
      "description": { "no": "Summer Intern", "int": "" },
      "disabled": false,
      "diverged_from_master": false,
      "employer": { "no": "Cxense", "int": "" },
      "external_unique_id": null,
      "long_description": {
        "no": "Utviklet, og produksjonsatte et verktøy for å samle merkede datapunkter for å trene maskinlæringsmodeller. Verktøyet har til nå blitt brukt til å klassifisere over 120 000 artikler.\n\nJeg laget en chrome extension med søkefunksjon og autocomplete for å knytte en URL opp mot ett sett IAB kategorier, og lagre dette i en database. Applikasjonen snakket med et eksterne API for å autentisere brukeren og et eget REST API skrevet i Django. Jeg brukte Vue.js i frontend. Docker og et kubernetes kluster for deployment.\n\nJeg gjorde alt fra planlegging, design, backend og deploy på egenhånd.",
        "int": ""
      },
      "modifier_id": null,
      "month_from": "6",
      "month_to": "8",
      "order": 3,
      "origin_id": null,
      "owner_updated_at": null,
      "recently_added": false,
      "starred": false,
      "updated_at": "2022-09-16T10:56:15.960Z",
      "version": 12,
      "year_from": "2019",
      "year_to": "2019"
    },
    {
      "_id": "6267e1dfe47cec0fe9c5d0d3",
      "created_at": "2022-04-26T12:13:19.955Z",
      "description": { "no": "Summer Intern", "int": "" },
      "disabled": false,
      "diverged_from_master": false,
      "employer": { "no": "Capra", "int": "" },
      "external_unique_id": null,
      "long_description": {},
      "modifier_id": null,
      "month_from": "6",
      "month_to": "8",
      "order": 2,
      "origin_id": null,
      "owner_updated_at": null,
      "recently_added": false,
      "starred": false,
      "updated_at": "2022-09-16T10:56:16.006Z",
      "version": 11,
      "year_from": "2020",
      "year_to": "2020"
    },
    {
      "_id": "6267e27df3adf1100e74cf05",
      "created_at": "2022-04-26T12:15:57.964Z",
      "description": { "no": "Summer Intern", "int": "" },
      "disabled": false,
      "diverged_from_master": false,
      "employer": { "no": "NoA Ignite", "int": "" },
      "external_unique_id": null,
      "long_description": {},
      "modifier_id": null,
      "month_from": "6",
      "month_to": "8",
      "order": 1,
      "origin_id": null,
      "owner_updated_at": null,
      "recently_added": false,
      "starred": false,
      "updated_at": "2022-09-16T10:56:16.033Z",
      "version": 10,
      "year_from": "2021",
      "year_to": "2021"
    },
    {
      "_id": "6324564f0ebd4f0f4845cfa6",
      "created_at": "2022-09-16T10:56:15.955Z",
      "description": { "no": "Junior Developer", "int": "" },
      "disabled": false,
      "diverged_from_master": false,
      "employer": { "no": "Noa Ignite", "int": "" },
      "external_unique_id": null,
      "long_description": {
        "no": "Sindre jobber som Junior Developer i avdelingen Platform And Services",
        "int": ""
      },
      "modifier_id": null,
      "month_from": "08",
      "month_to": "",
      "order": 0,
      "origin_id": null,
      "owner_updated_at": "2022-09-16T10:57:06.000Z",
      "recently_added": false,
      "starred": false,
      "updated_at": "2022-09-16T10:57:06.728Z",
      "version": 12,
      "year_from": "2022",
      "year_to": ""
    }
  ],
  "name": "Sindre Johan Imenes Sivertsen",
  "user_id": "6267d257d9d1d50ff15bbf63",
  "company_id": "531470a12f274fc51d000001",
  "external_unique_id": null,
  "email": "sindre.sivertsen@noaignite.com",
  "country_code": "no",
  "language_code": "no",
  "language_codes": ["no", "int", "dk", "fi", "se"],
  "proposal": null,
  "custom_tags": [],
  "updated_ago": "N/A",
  "template_document_type": "doc",
  "default_word_template_id": "6267ee5dd9d1d50ff15bc253",
  "default_ppt_template_id": null,
  "certifications": [],
  "highlighted_roles": [
    {
      "_id": "626a68448ede140ffbadcf46",
      "created_at": "2022-04-28T10:11:17.092Z",
      "disabled": false,
      "diverged_from_master": false,
      "modifier_id": null,
      "name": { "no": "Sjefsutvikler" },
      "order": 1,
      "origin_id": null,
      "owner_updated_at": "2022-09-06T06:57:33.000Z",
      "recently_added": false,
      "starred": true,
      "starred_order": 1,
      "updated_at": "2022-09-06T06:57:33.621Z",
      "version": null,
      "years_of_experience": 5,
      "years_of_experience_offset": 0,
      "project_experiences": [
        {
          "_id": "6267e35b829c4f0fb06f8044",
          "roles": [{ "_id": "626a68458ede140ffbadcf4f" }],
          "diverged_from_master": false
        }
      ]
    },
    {
      "_id": "626a684b8ede141004add0d7",
      "created_at": "2022-04-28T10:11:23.458Z",
      "disabled": false,
      "diverged_from_master": false,
      "modifier_id": null,
      "name": { "no": "Fullstack-utvikler og arkitekt" },
      "order": 3,
      "origin_id": null,
      "owner_updated_at": "2022-09-06T06:57:44.000Z",
      "recently_added": false,
      "starred": true,
      "starred_order": 3,
      "updated_at": "2022-11-25T13:06:11.309Z",
      "version": 3,
      "years_of_experience": 0,
      "years_of_experience_offset": 0,
      "project_experiences": [
        {
          "_id": "6267e1ae829c4f0fba6f7f2b",
          "roles": [{ "_id": "626a684b8ede141004add0d8" }],
          "diverged_from_master": false
        }
      ]
    },
    {
      "_id": "62fe3896ba0cad0fd575ba0d",
      "created_at": "2022-08-18T13:03:19.238Z",
      "disabled": false,
      "diverged_from_master": false,
      "modifier_id": null,
      "name": {
        "no": "Data Scientist",
        "dk": "Data Scientist",
        "int": "Data Scientist",
        "fi": "Data Scientist",
        "se": "Data Scientist"
      },
      "order": 0,
      "origin_id": null,
      "owner_updated_at": "2022-09-06T06:57:31.000Z",
      "recently_added": false,
      "starred": true,
      "starred_order": 0,
      "updated_at": "2022-09-06T06:57:31.587Z",
      "version": null,
      "years_of_experience": 1,
      "years_of_experience_offset": 0,
      "project_experiences": [
        {
          "_id": "62fe272b93ed350f83a11789",
          "roles": [{ "_id": "62fe388fd81fb20fa09046fd" }],
          "diverged_from_master": false
        }
      ]
    }
  ],
  "image": {
    "url": "https://cvpartner-images.s3.eu-west-1.amazonaws.com/uploads/production/bruker/image/6267d257d9d1d50ff15bbf63/Sindre_Sivertsen.jpeg?X-Amz-Expires=1200\u0026X-Amz-Date=20230403T105102Z\u0026X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIHcd9tej6sVvfWUXoYBaedrndmf%2B4lmVetmJTLe9ueiHAiAYkT3k7X6Hzd94mwl%2BBsYTy7phlGvOb3SmIel8D9S5Ziq4BQjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDU3MTU4MDAxMDEzMiIMdMsqWjD5y34uHcBMKowFTv1X4kQ%2FyTXxycRV1ISFiXXT6ZV6Lv9qVwDSWbrnfVEuK6I5CJsGksdCJJpVmLu%2BTd8C0Nl1kl3I6WrYgtd4u%2ByG5%2B8u6DcQaxMEFnY0%2BAXb%2Fe%2FxO8IKl8wscGwTP7XzaqDW%2BZprWWG5kM8kUc8QNhfaBxCMmwpnOfPeuKet0KK6fIX6w5qjEICJIUg1JPhJ8GkSUYFmUbG9bcD6MV3kSOWZtSYRQjJg%2FtLSUfV0yVzFj7VxZ7CxbEMMr3YPDULLW6ZoHTLIKwlaSmT4CnRKaHL8TQQlzvJfGPR9SowbgmVxTGrIKGnZtrd6h8O2AMtuNdkxrexCSswe9jdvJX%2FcPkMQhYHhYFDdtv95UqM8sNHVVS6QCM%2FKItpLW2p1k8eEUGcm1YuslQNR1FScj9tOSHA5NbTqURmtxZFXqHAaO9zcJQdt9R%2BoMIQBYMR2cv0Z0heQHUMVPJhh%2F%2BHpXExzDJ65wc9b4rY56c5UioTkiRmhWRW0QOdcfB9TnmCm5gWuW5gsMpL1u5C4wPaBgM6SpvwXz8PFwOG3lRFsxYFW4imXZ%2B1v1fJ1ycxN4w6IN%2Bii0Wz1KD%2FJeWaaNdKEizDpfqdR8KppIMXlu1VXwkN45%2BrUgZGTRF49x%2BNlPNYLHYUzSBnYp5vRdzCETKdrOCrX3wtc7CySHADf%2FMmsROelNCMcv5fQV9fgdLfg6lEaKusLvZ%2BWx1kb7MdmOOFuZVIHh1RjuTNsy6h4fp4dXySaPKUF3oOZ%2BVdWBgMW4WvmhQloZhnNOKGz3qsh1OUqvc6B66g2Q2F0fd3SmGBOQbzDm2gygrToK4C%2BsbH27ITl2L6DSZ%2BPn%2Bdhvki4OQTEVaQwNN6%2BQK9NmC8ZkAHqlDCdoqqhBjqyARBipZe4Ii5Crpe288VadWnry7CuI257EzJK8IgNTuenzUvPnVM0u7F5RuwjzV%2BlX2APaA9DLPUAYCdpY2VbjsjHC7fdZqOb0pjRNHFyTn5pNq%2FHvEYi3Dc0oCWquq9C6eUu%2F1852u4gHyeCa9Xn10ftSMi1Gxq%2FmiItF9mL93WB22Tal63X7AOyZaJg4Un34jiI7OFWEPfQtceP2eO3WNM0QAQPrz8nc1gwF7KH7%2BkYB%2Bw%3D\u0026X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=ASIAYKFGSZ2KKYAO323P%2F20230403%2Feu-west-1%2Fs3%2Faws4_request\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=3392791fbaa66d78a0978e52f72024d1be4a335d6923f3bccaf9b0c585ae62bc",
    "thumb": {
      "url": "https://cvpartner-images.s3.eu-west-1.amazonaws.com/uploads/production/bruker/image/6267d257d9d1d50ff15bbf63/thumb_Sindre_Sivertsen.jpeg?X-Amz-Expires=1200\u0026X-Amz-Date=20230403T105102Z\u0026X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIHcd9tej6sVvfWUXoYBaedrndmf%2B4lmVetmJTLe9ueiHAiAYkT3k7X6Hzd94mwl%2BBsYTy7phlGvOb3SmIel8D9S5Ziq4BQjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDU3MTU4MDAxMDEzMiIMdMsqWjD5y34uHcBMKowFTv1X4kQ%2FyTXxycRV1ISFiXXT6ZV6Lv9qVwDSWbrnfVEuK6I5CJsGksdCJJpVmLu%2BTd8C0Nl1kl3I6WrYgtd4u%2ByG5%2B8u6DcQaxMEFnY0%2BAXb%2Fe%2FxO8IKl8wscGwTP7XzaqDW%2BZprWWG5kM8kUc8QNhfaBxCMmwpnOfPeuKet0KK6fIX6w5qjEICJIUg1JPhJ8GkSUYFmUbG9bcD6MV3kSOWZtSYRQjJg%2FtLSUfV0yVzFj7VxZ7CxbEMMr3YPDULLW6ZoHTLIKwlaSmT4CnRKaHL8TQQlzvJfGPR9SowbgmVxTGrIKGnZtrd6h8O2AMtuNdkxrexCSswe9jdvJX%2FcPkMQhYHhYFDdtv95UqM8sNHVVS6QCM%2FKItpLW2p1k8eEUGcm1YuslQNR1FScj9tOSHA5NbTqURmtxZFXqHAaO9zcJQdt9R%2BoMIQBYMR2cv0Z0heQHUMVPJhh%2F%2BHpXExzDJ65wc9b4rY56c5UioTkiRmhWRW0QOdcfB9TnmCm5gWuW5gsMpL1u5C4wPaBgM6SpvwXz8PFwOG3lRFsxYFW4imXZ%2B1v1fJ1ycxN4w6IN%2Bii0Wz1KD%2FJeWaaNdKEizDpfqdR8KppIMXlu1VXwkN45%2BrUgZGTRF49x%2BNlPNYLHYUzSBnYp5vRdzCETKdrOCrX3wtc7CySHADf%2FMmsROelNCMcv5fQV9fgdLfg6lEaKusLvZ%2BWx1kb7MdmOOFuZVIHh1RjuTNsy6h4fp4dXySaPKUF3oOZ%2BVdWBgMW4WvmhQloZhnNOKGz3qsh1OUqvc6B66g2Q2F0fd3SmGBOQbzDm2gygrToK4C%2BsbH27ITl2L6DSZ%2BPn%2Bdhvki4OQTEVaQwNN6%2BQK9NmC8ZkAHqlDCdoqqhBjqyARBipZe4Ii5Crpe288VadWnry7CuI257EzJK8IgNTuenzUvPnVM0u7F5RuwjzV%2BlX2APaA9DLPUAYCdpY2VbjsjHC7fdZqOb0pjRNHFyTn5pNq%2FHvEYi3Dc0oCWquq9C6eUu%2F1852u4gHyeCa9Xn10ftSMi1Gxq%2FmiItF9mL93WB22Tal63X7AOyZaJg4Un34jiI7OFWEPfQtceP2eO3WNM0QAQPrz8nc1gwF7KH7%2BkYB%2Bw%3D\u0026X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=ASIAYKFGSZ2KKYAO323P%2F20230403%2Feu-west-1%2Fs3%2Faws4_request\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=484e753d24daa23c6e00ae7aa42ee10faf1c012aef5d601fbc3583f4cdd39845"
    },
    "fit_thumb": {
      "url": "https://cvpartner-images.s3.eu-west-1.amazonaws.com/uploads/production/bruker/image/6267d257d9d1d50ff15bbf63/fit_thumb_Sindre_Sivertsen.jpeg?X-Amz-Expires=1200\u0026X-Amz-Date=20230403T105102Z\u0026X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIHcd9tej6sVvfWUXoYBaedrndmf%2B4lmVetmJTLe9ueiHAiAYkT3k7X6Hzd94mwl%2BBsYTy7phlGvOb3SmIel8D9S5Ziq4BQjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDU3MTU4MDAxMDEzMiIMdMsqWjD5y34uHcBMKowFTv1X4kQ%2FyTXxycRV1ISFiXXT6ZV6Lv9qVwDSWbrnfVEuK6I5CJsGksdCJJpVmLu%2BTd8C0Nl1kl3I6WrYgtd4u%2ByG5%2B8u6DcQaxMEFnY0%2BAXb%2Fe%2FxO8IKl8wscGwTP7XzaqDW%2BZprWWG5kM8kUc8QNhfaBxCMmwpnOfPeuKet0KK6fIX6w5qjEICJIUg1JPhJ8GkSUYFmUbG9bcD6MV3kSOWZtSYRQjJg%2FtLSUfV0yVzFj7VxZ7CxbEMMr3YPDULLW6ZoHTLIKwlaSmT4CnRKaHL8TQQlzvJfGPR9SowbgmVxTGrIKGnZtrd6h8O2AMtuNdkxrexCSswe9jdvJX%2FcPkMQhYHhYFDdtv95UqM8sNHVVS6QCM%2FKItpLW2p1k8eEUGcm1YuslQNR1FScj9tOSHA5NbTqURmtxZFXqHAaO9zcJQdt9R%2BoMIQBYMR2cv0Z0heQHUMVPJhh%2F%2BHpXExzDJ65wc9b4rY56c5UioTkiRmhWRW0QOdcfB9TnmCm5gWuW5gsMpL1u5C4wPaBgM6SpvwXz8PFwOG3lRFsxYFW4imXZ%2B1v1fJ1ycxN4w6IN%2Bii0Wz1KD%2FJeWaaNdKEizDpfqdR8KppIMXlu1VXwkN45%2BrUgZGTRF49x%2BNlPNYLHYUzSBnYp5vRdzCETKdrOCrX3wtc7CySHADf%2FMmsROelNCMcv5fQV9fgdLfg6lEaKusLvZ%2BWx1kb7MdmOOFuZVIHh1RjuTNsy6h4fp4dXySaPKUF3oOZ%2BVdWBgMW4WvmhQloZhnNOKGz3qsh1OUqvc6B66g2Q2F0fd3SmGBOQbzDm2gygrToK4C%2BsbH27ITl2L6DSZ%2BPn%2Bdhvki4OQTEVaQwNN6%2BQK9NmC8ZkAHqlDCdoqqhBjqyARBipZe4Ii5Crpe288VadWnry7CuI257EzJK8IgNTuenzUvPnVM0u7F5RuwjzV%2BlX2APaA9DLPUAYCdpY2VbjsjHC7fdZqOb0pjRNHFyTn5pNq%2FHvEYi3Dc0oCWquq9C6eUu%2F1852u4gHyeCa9Xn10ftSMi1Gxq%2FmiItF9mL93WB22Tal63X7AOyZaJg4Un34jiI7OFWEPfQtceP2eO3WNM0QAQPrz8nc1gwF7KH7%2BkYB%2Bw%3D\u0026X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=ASIAYKFGSZ2KKYAO323P%2F20230403%2Feu-west-1%2Fs3%2Faws4_request\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=0441961dea1ef879d2bdfa73b3d17de7988c4226f33da64401f6ec89635a8a46"
    },
    "large": {
      "url": "https://cvpartner-images.s3.eu-west-1.amazonaws.com/uploads/production/bruker/image/6267d257d9d1d50ff15bbf63/large_Sindre_Sivertsen.jpeg?X-Amz-Expires=1200\u0026X-Amz-Date=20230403T105102Z\u0026X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIHcd9tej6sVvfWUXoYBaedrndmf%2B4lmVetmJTLe9ueiHAiAYkT3k7X6Hzd94mwl%2BBsYTy7phlGvOb3SmIel8D9S5Ziq4BQjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDU3MTU4MDAxMDEzMiIMdMsqWjD5y34uHcBMKowFTv1X4kQ%2FyTXxycRV1ISFiXXT6ZV6Lv9qVwDSWbrnfVEuK6I5CJsGksdCJJpVmLu%2BTd8C0Nl1kl3I6WrYgtd4u%2ByG5%2B8u6DcQaxMEFnY0%2BAXb%2Fe%2FxO8IKl8wscGwTP7XzaqDW%2BZprWWG5kM8kUc8QNhfaBxCMmwpnOfPeuKet0KK6fIX6w5qjEICJIUg1JPhJ8GkSUYFmUbG9bcD6MV3kSOWZtSYRQjJg%2FtLSUfV0yVzFj7VxZ7CxbEMMr3YPDULLW6ZoHTLIKwlaSmT4CnRKaHL8TQQlzvJfGPR9SowbgmVxTGrIKGnZtrd6h8O2AMtuNdkxrexCSswe9jdvJX%2FcPkMQhYHhYFDdtv95UqM8sNHVVS6QCM%2FKItpLW2p1k8eEUGcm1YuslQNR1FScj9tOSHA5NbTqURmtxZFXqHAaO9zcJQdt9R%2BoMIQBYMR2cv0Z0heQHUMVPJhh%2F%2BHpXExzDJ65wc9b4rY56c5UioTkiRmhWRW0QOdcfB9TnmCm5gWuW5gsMpL1u5C4wPaBgM6SpvwXz8PFwOG3lRFsxYFW4imXZ%2B1v1fJ1ycxN4w6IN%2Bii0Wz1KD%2FJeWaaNdKEizDpfqdR8KppIMXlu1VXwkN45%2BrUgZGTRF49x%2BNlPNYLHYUzSBnYp5vRdzCETKdrOCrX3wtc7CySHADf%2FMmsROelNCMcv5fQV9fgdLfg6lEaKusLvZ%2BWx1kb7MdmOOFuZVIHh1RjuTNsy6h4fp4dXySaPKUF3oOZ%2BVdWBgMW4WvmhQloZhnNOKGz3qsh1OUqvc6B66g2Q2F0fd3SmGBOQbzDm2gygrToK4C%2BsbH27ITl2L6DSZ%2BPn%2Bdhvki4OQTEVaQwNN6%2BQK9NmC8ZkAHqlDCdoqqhBjqyARBipZe4Ii5Crpe288VadWnry7CuI257EzJK8IgNTuenzUvPnVM0u7F5RuwjzV%2BlX2APaA9DLPUAYCdpY2VbjsjHC7fdZqOb0pjRNHFyTn5pNq%2FHvEYi3Dc0oCWquq9C6eUu%2F1852u4gHyeCa9Xn10ftSMi1Gxq%2FmiItF9mL93WB22Tal63X7AOyZaJg4Un34jiI7OFWEPfQtceP2eO3WNM0QAQPrz8nc1gwF7KH7%2BkYB%2Bw%3D\u0026X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=ASIAYKFGSZ2KKYAO323P%2F20230403%2Feu-west-1%2Fs3%2Faws4_request\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=266933921f0819d308bf0006e56c38879f9f5b7e3fc8e83cb3cd0cbac9cc7861"
    },
    "small_thumb": {
      "url": "https://cvpartner-images.s3.eu-west-1.amazonaws.com/uploads/production/bruker/image/6267d257d9d1d50ff15bbf63/small_thumb_Sindre_Sivertsen.jpeg?X-Amz-Expires=1200\u0026X-Amz-Date=20230403T105102Z\u0026X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIHcd9tej6sVvfWUXoYBaedrndmf%2B4lmVetmJTLe9ueiHAiAYkT3k7X6Hzd94mwl%2BBsYTy7phlGvOb3SmIel8D9S5Ziq4BQjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDU3MTU4MDAxMDEzMiIMdMsqWjD5y34uHcBMKowFTv1X4kQ%2FyTXxycRV1ISFiXXT6ZV6Lv9qVwDSWbrnfVEuK6I5CJsGksdCJJpVmLu%2BTd8C0Nl1kl3I6WrYgtd4u%2ByG5%2B8u6DcQaxMEFnY0%2BAXb%2Fe%2FxO8IKl8wscGwTP7XzaqDW%2BZprWWG5kM8kUc8QNhfaBxCMmwpnOfPeuKet0KK6fIX6w5qjEICJIUg1JPhJ8GkSUYFmUbG9bcD6MV3kSOWZtSYRQjJg%2FtLSUfV0yVzFj7VxZ7CxbEMMr3YPDULLW6ZoHTLIKwlaSmT4CnRKaHL8TQQlzvJfGPR9SowbgmVxTGrIKGnZtrd6h8O2AMtuNdkxrexCSswe9jdvJX%2FcPkMQhYHhYFDdtv95UqM8sNHVVS6QCM%2FKItpLW2p1k8eEUGcm1YuslQNR1FScj9tOSHA5NbTqURmtxZFXqHAaO9zcJQdt9R%2BoMIQBYMR2cv0Z0heQHUMVPJhh%2F%2BHpXExzDJ65wc9b4rY56c5UioTkiRmhWRW0QOdcfB9TnmCm5gWuW5gsMpL1u5C4wPaBgM6SpvwXz8PFwOG3lRFsxYFW4imXZ%2B1v1fJ1ycxN4w6IN%2Bii0Wz1KD%2FJeWaaNdKEizDpfqdR8KppIMXlu1VXwkN45%2BrUgZGTRF49x%2BNlPNYLHYUzSBnYp5vRdzCETKdrOCrX3wtc7CySHADf%2FMmsROelNCMcv5fQV9fgdLfg6lEaKusLvZ%2BWx1kb7MdmOOFuZVIHh1RjuTNsy6h4fp4dXySaPKUF3oOZ%2BVdWBgMW4WvmhQloZhnNOKGz3qsh1OUqvc6B66g2Q2F0fd3SmGBOQbzDm2gygrToK4C%2BsbH27ITl2L6DSZ%2BPn%2Bdhvki4OQTEVaQwNN6%2BQK9NmC8ZkAHqlDCdoqqhBjqyARBipZe4Ii5Crpe288VadWnry7CuI257EzJK8IgNTuenzUvPnVM0u7F5RuwjzV%2BlX2APaA9DLPUAYCdpY2VbjsjHC7fdZqOb0pjRNHFyTn5pNq%2FHvEYi3Dc0oCWquq9C6eUu%2F1852u4gHyeCa9Xn10ftSMi1Gxq%2FmiItF9mL93WB22Tal63X7AOyZaJg4Un34jiI7OFWEPfQtceP2eO3WNM0QAQPrz8nc1gwF7KH7%2BkYB%2Bw%3D\u0026X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=ASIAYKFGSZ2KKYAO323P%2F20230403%2Feu-west-1%2Fs3%2Faws4_request\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=4fd264214c13ca3b2a4fedc73821940e7ccae800b32bf8bca554359853592a32"
    }
  },
  "can_write": false
}

*/
// /**
//  * Extracts work roles from json data
//  * @param {*} jsonData
//  * @returns work roles and metadata
//  */
function extractRoles(role) {
  console.log("role", role);
  return {
    referenceId: role._id,
    cvRoleId: role.cv_role_id,
    longRoleDescription: role.long_description.no,
    roleTitle: role.name.no,
  };
}

// function extractRoles(role) {
//   const { long_description, name } = role;
//   return {
//     roleTitle: name.no,
//     longDescription: long_description.no,
//   };
// }

function extractPersonalInformation(jsonData) {
  if (!jsonData) return {};
  const { name, email, phone, address, small_thumb, user_id } = jsonData;
  return {
    name,
    email,
    phone,
    address,
    small_thumb,
    user_id,
  };
}

function project_experiences(jsonData) {
  return jsonData.project_experiences.map((project) => {
    const {
      description,
      customer,
      long_description,
      project_experience_skills,
      year_from,
      year_to,
      roles,
    } = project;

    const experience_skills = project_experience_skills.map((skill) => {
      const { tags } = skill;
      return { skill: tags.no };
    });
    return {
      projectTitle: description.no,
      customer: customer.no,
      longJobDescription: long_description.no,
      experience_skills,
      yearFrom: year_from,
      yearTo: year_to,
      roles: roles.map((role) => extractRoles(role)),
    };
  });
}

function extractPositions(jsonData) {
  return jsonData.positions.map((position) => {
    const { description, name, year_from, year_to } = position;
    return {
      positionTitle: name.no,
      description: description.no,
      yearFrom: year_from,
      yearTo: year_to,
    };
  });
}

/**
 * Extracts personal summary from json data
 * @param {*} jsonData
 * @returns
 */
function extractPersonalSummary(jsonData) {
  return jsonData["key_qualifications"].map((summary) => {
    return {
      personalSummary: summary.long_description.no,
    };
  });
}

/**
 * Extract courses like diplomas or certificates
 * @param {*} jsonData
 * @returns
 */
function extractCourses(jsonData) {
  return jsonData.courses.map((course) => {
    const { name, year, month, program, long_description } = course;
    return {
      courseTitle: name.no,
      month,
      year,
      program: program.no,
      longDescription: long_description.no,
    };
  });
}

function extractEducation(jsonData) {
  return jsonData.educations.map((education) => {
    const { degree, description, school, year_from, year_to } = education;
    return {
      degree: degree.no,
      description: description.no,
      school: school.no,
      yearStarted: year_from,
      yearEnded: year_to,
    };
  });
}

function cleanUpJsonData(jsonData) {
  const personalInfo = extractPersonalInformation(jsonData);
  console.log("personalInfo", personalInfo);

  const projectExperiences = project_experiences(jsonData);
  console.log("projectExperiences", projectExperiences);

  const positions = extractPositions(jsonData);
  console.log("positions", positions);

  const personalSummary = extractPersonalSummary(jsonData);
  console.log("personalSummary", personalSummary);

  // const roles = extractRoles(jsonData);
  // console.log("roles", roles);

  const courses = extractCourses(jsonData);
  console.log("courses", courses);

  const education = extractEducation(jsonData);
  console.log("education", education);

  const cleaned = {
    personalInfo,
    personalSummary,
    positions,
    projectExperiences,
    education,
    courses,
  };
  console.log(cleaned);
}
