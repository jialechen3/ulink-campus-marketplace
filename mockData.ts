import { User, Product } from './types';

export const MOCK_USERS: User[] = [
  {
    "id": "27e58cc7-285d-40d4-bcbe-acee8649eac9",
    "email": "riley_smith84@stanforduniversity.edu",
    "name": "Riley Smith",
    "handle": "riley_smith84",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_smith84",
    "collegeId": "1",
    "isOnboarded": true,
    "joined": "2025-10-26T14:53:08.754458",
    "listingsCount": 4,
    "followersCount": 33,
    "followingCount": 30
  },
  {
    "id": "4b49b4b8-941a-40cf-b424-ad1401c57826",
    "email": "jordan_rodriguez27@stanforduniversity.edu",
    "name": "Jordan Rodriguez",
    "handle": "jordan_rodriguez27",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_rodriguez27",
    "collegeId": "1",
    "isOnboarded": true,
    "joined": "2025-07-20T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 23,
    "followingCount": 27
  },
  {
    "id": "467cf28d-9191-423f-b0aa-6f3e20f27da3",
    "email": "riley_brown61@stanforduniversity.edu",
    "name": "Riley Brown",
    "handle": "riley_brown61",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_brown61",
    "collegeId": "1",
    "isOnboarded": true,
    "joined": "2025-05-15T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 37,
    "followingCount": 49
  },
  {
    "id": "d2350728-3060-4409-af97-36e04693ef70",
    "email": "riley_jones17@harvarduniversity.edu",
    "name": "Riley Jones",
    "handle": "riley_jones17",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_jones17",
    "collegeId": "2",
    "isOnboarded": true,
    "joined": "2025-07-04T14:53:08.754458",
    "listingsCount": 4,
    "followersCount": 45,
    "followingCount": 15
  },
  {
    "id": "37e912d4-2879-4b45-9011-49af112d0709",
    "email": "chris_williams73@harvarduniversity.edu",
    "name": "Chris Williams",
    "handle": "chris_williams73",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_williams73",
    "collegeId": "2",
    "isOnboarded": true,
    "joined": "2025-09-15T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 32,
    "followingCount": 30
  },
  {
    "id": "b00eb511-de35-40c9-8fde-915f00d23606",
    "email": "casey_johnson78@harvarduniversity.edu",
    "name": "Casey Johnson",
    "handle": "casey_johnson78",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_johnson78",
    "collegeId": "2",
    "isOnboarded": true,
    "joined": "2025-10-25T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 43,
    "followingCount": 23
  },
  {
    "id": "6142f2f9-d69b-49b3-97de-e03ce201fc46",
    "email": "sam_johnson40@ucberkeley.edu",
    "name": "Sam Johnson",
    "handle": "sam_johnson40",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_johnson40",
    "collegeId": "3",
    "isOnboarded": true,
    "joined": "2025-06-25T14:53:08.754458",
    "listingsCount": 4,
    "followersCount": 15,
    "followingCount": 31
  },
  {
    "id": "50153ac8-1f93-4a89-83cf-72d8c6cc9738",
    "email": "taylor_brown30@ucberkeley.edu",
    "name": "Taylor Brown",
    "handle": "taylor_brown30",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_brown30",
    "collegeId": "3",
    "isOnboarded": true,
    "joined": "2025-10-10T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 16,
    "followingCount": 37
  },
  {
    "id": "986ff05e-8df2-4732-823a-96bba40605c2",
    "email": "taylor_williams86@ucberkeley.edu",
    "name": "Taylor Williams",
    "handle": "taylor_williams86",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_williams86",
    "collegeId": "3",
    "isOnboarded": true,
    "joined": "2026-01-11T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 19,
    "followingCount": 31
  },
  {
    "id": "840e159f-6c5c-480b-aaff-60b43cc5c37e",
    "email": "alex_johnson23@nyu.edu",
    "name": "Alex Johnson",
    "handle": "alex_johnson23",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_johnson23",
    "collegeId": "4",
    "isOnboarded": true,
    "joined": "2025-11-23T14:53:08.754458",
    "listingsCount": 4,
    "followersCount": 30,
    "followingCount": 44
  },
  {
    "id": "261c6f05-78f6-4ca1-9dfb-4a30455e441e",
    "email": "sam_martinez94@nyu.edu",
    "name": "Sam Martinez",
    "handle": "sam_martinez94",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_martinez94",
    "collegeId": "4",
    "isOnboarded": true,
    "joined": "2025-11-11T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 36,
    "followingCount": 12
  },
  {
    "id": "8bb5aba5-53b4-45b8-9a83-c8be5d79be05",
    "email": "taylor_johnson93@nyu.edu",
    "name": "Taylor Johnson",
    "handle": "taylor_johnson93",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_johnson93",
    "collegeId": "4",
    "isOnboarded": true,
    "joined": "2025-02-27T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 15,
    "followingCount": 13
  },
  {
    "id": "1f2513e4-28d4-4f81-b59c-fb97fe61c3a7",
    "email": "jamie_johnson93@mit.edu",
    "name": "Jamie Johnson",
    "handle": "jamie_johnson93",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson93",
    "collegeId": "5",
    "isOnboarded": true,
    "joined": "2025-09-05T14:53:08.754458",
    "listingsCount": 4,
    "followersCount": 32,
    "followingCount": 40
  },
  {
    "id": "ee4a42c5-9fc0-43ab-b0b7-712fbbcc53a8",
    "email": "riley_martinez22@mit.edu",
    "name": "Riley Martinez",
    "handle": "riley_martinez22",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_martinez22",
    "collegeId": "5",
    "isOnboarded": true,
    "joined": "2025-10-10T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 9,
    "followingCount": 31
  },
  {
    "id": "442ef41b-da73-480b-a1e1-a1ddd02edeb8",
    "email": "jordan_smith78@mit.edu",
    "name": "Jordan Smith",
    "handle": "jordan_smith78",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_smith78",
    "collegeId": "5",
    "isOnboarded": true,
    "joined": "2025-08-03T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 34,
    "followingCount": 23
  },
  {
    "id": "0e414c18-2c6d-4a38-913a-b3672d3fdd37",
    "email": "jamie_miller95@ucla.edu",
    "name": "Jamie Miller",
    "handle": "jamie_miller95",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_miller95",
    "collegeId": "6",
    "isOnboarded": true,
    "joined": "2025-10-11T14:53:08.754458",
    "listingsCount": 4,
    "followersCount": 22,
    "followingCount": 47
  },
  {
    "id": "04a108fe-63f9-48f8-9be8-31de8998aa18",
    "email": "jamie_johnson89@ucla.edu",
    "name": "Jamie Johnson",
    "handle": "jamie_johnson89",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson89",
    "collegeId": "6",
    "isOnboarded": true,
    "joined": "2025-03-12T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 23,
    "followingCount": 35
  },
  {
    "id": "8c0e3839-ae60-4275-ad07-2b0e0784a4a0",
    "email": "jamie_miller71@ucla.edu",
    "name": "Jamie Miller",
    "handle": "jamie_miller71",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_miller71",
    "collegeId": "6",
    "isOnboarded": true,
    "joined": "2025-10-16T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 29,
    "followingCount": 13
  },
  {
    "id": "6db0cd70-bcdd-4670-8f52-b82d6581aa21",
    "email": "jordan_williams34@sunystonybrook.edu",
    "name": "Jordan Williams",
    "handle": "jordan_williams34",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_williams34",
    "collegeId": "suny-1",
    "isOnboarded": true,
    "joined": "2025-10-22T14:53:08.754458",
    "listingsCount": 4,
    "followersCount": 7,
    "followingCount": 26
  },
  {
    "id": "c58ba22d-b16f-473f-8802-ccc8a724dbc2",
    "email": "casey_davis31@sunystonybrook.edu",
    "name": "Casey Davis",
    "handle": "casey_davis31",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_davis31",
    "collegeId": "suny-1",
    "isOnboarded": true,
    "joined": "2025-10-01T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 8,
    "followingCount": 18
  },
  {
    "id": "b724d384-3dcd-4b4d-8270-bfac4f610305",
    "email": "jordan_jones27@sunystonybrook.edu",
    "name": "Jordan Jones",
    "handle": "jordan_jones27",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_jones27",
    "collegeId": "suny-1",
    "isOnboarded": true,
    "joined": "2025-09-08T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 27,
    "followingCount": 5
  },
  {
    "id": "2c97eff4-17ec-428f-867e-3c660d86fdcf",
    "email": "jordan_rodriguez15@universityatbuffalo.edu",
    "name": "Jordan Rodriguez",
    "handle": "jordan_rodriguez15",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_rodriguez15",
    "collegeId": "suny-2",
    "isOnboarded": true,
    "joined": "2025-12-05T14:53:08.754458",
    "listingsCount": 4,
    "followersCount": 20,
    "followingCount": 46
  },
  {
    "id": "7e54077d-4f6f-4fc7-8f5f-5a3cedc9c494",
    "email": "taylor_garcia74@universityatbuffalo.edu",
    "name": "Taylor Garcia",
    "handle": "taylor_garcia74",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_garcia74",
    "collegeId": "suny-2",
    "isOnboarded": true,
    "joined": "2025-10-24T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 22,
    "followingCount": 11
  },
  {
    "id": "9b85007d-a3b0-4ed9-b47c-5d841f87b0c5",
    "email": "jamie_jones32@universityatbuffalo.edu",
    "name": "Jamie Jones",
    "handle": "jamie_jones32",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_jones32",
    "collegeId": "suny-2",
    "isOnboarded": true,
    "joined": "2025-09-04T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 18,
    "followingCount": 41
  },
  {
    "id": "a5c6bdd0-4cf9-428d-8efa-eb4824b933f5",
    "email": "riley_rodriguez50@sunyalbany.edu",
    "name": "Riley Rodriguez",
    "handle": "riley_rodriguez50",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_rodriguez50",
    "collegeId": "suny-3",
    "isOnboarded": true,
    "joined": "2025-11-04T14:53:08.754458",
    "listingsCount": 4,
    "followersCount": 33,
    "followingCount": 8
  },
  {
    "id": "2c8ad647-b7c0-47d2-88ce-ffa79b62f0fb",
    "email": "alex_smith30@sunyalbany.edu",
    "name": "Alex Smith",
    "handle": "alex_smith30",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_smith30",
    "collegeId": "suny-3",
    "isOnboarded": true,
    "joined": "2025-06-21T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 44,
    "followingCount": 17
  },
  {
    "id": "f38f7be0-9389-498f-905a-3419836887a2",
    "email": "chris_smith93@sunyalbany.edu",
    "name": "Chris Smith",
    "handle": "chris_smith93",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_smith93",
    "collegeId": "suny-3",
    "isOnboarded": true,
    "joined": "2026-01-10T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 7,
    "followingCount": 14
  },
  {
    "id": "08ad1cd9-6984-4e19-8e67-db9fc195042d",
    "email": "morgan_williams99@sunybinghamton.edu",
    "name": "Morgan Williams",
    "handle": "morgan_williams99",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_williams99",
    "collegeId": "suny-4",
    "isOnboarded": true,
    "joined": "2025-06-22T14:53:08.754458",
    "listingsCount": 4,
    "followersCount": 12,
    "followingCount": 6
  },
  {
    "id": "2f3f7bae-3e2a-4d2c-b432-78d44377240f",
    "email": "taylor_davis50@sunybinghamton.edu",
    "name": "Taylor Davis",
    "handle": "taylor_davis50",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_davis50",
    "collegeId": "suny-4",
    "isOnboarded": true,
    "joined": "2025-05-06T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 38,
    "followingCount": 49
  },
  {
    "id": "39f56fe4-5449-4164-b274-ea63d0f13f16",
    "email": "casey_rodriguez98@sunybinghamton.edu",
    "name": "Casey Rodriguez",
    "handle": "casey_rodriguez98",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_rodriguez98",
    "collegeId": "suny-4",
    "isOnboarded": true,
    "joined": "2025-03-02T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 7,
    "followingCount": 35
  },
  {
    "id": "d6bf6d78-a3b8-40e3-9395-bc682ce1cd26",
    "email": "morgan_rodriguez28@sunyoswego.edu",
    "name": "Morgan Rodriguez",
    "handle": "morgan_rodriguez28",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_rodriguez28",
    "collegeId": "suny-5",
    "isOnboarded": true,
    "joined": "2025-09-18T14:53:08.754458",
    "listingsCount": 4,
    "followersCount": 44,
    "followingCount": 33
  },
  {
    "id": "d21d4630-b20d-4ba4-ad27-f73d9b31bdba",
    "email": "pat_rodriguez63@sunyoswego.edu",
    "name": "Pat Rodriguez",
    "handle": "pat_rodriguez63",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_rodriguez63",
    "collegeId": "suny-5",
    "isOnboarded": true,
    "joined": "2025-09-27T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 8,
    "followingCount": 45
  },
  {
    "id": "e65fab57-2c03-44a0-9a44-ad54f4aae627",
    "email": "pat_brown52@sunyoswego.edu",
    "name": "Pat Brown",
    "handle": "pat_brown52",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_brown52",
    "collegeId": "suny-5",
    "isOnboarded": true,
    "joined": "2025-03-05T14:53:08.754458",
    "listingsCount": 3,
    "followersCount": 42,
    "followingCount": 45
  },
  {
    "id": "2d997670-2fa6-4548-8ea1-65a999f796cb",
    "email": "morgan_johnson26@sunygeneseo.edu",
    "name": "Morgan Johnson",
    "handle": "morgan_johnson26",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_johnson26",
    "collegeId": "suny-6",
    "isOnboarded": true,
    "joined": "2025-08-19T14:53:08.756050",
    "listingsCount": 4,
    "followersCount": 44,
    "followingCount": 17
  },
  {
    "id": "70d2f90a-4798-48b6-8249-c6b55280f9fc",
    "email": "casey_johnson90@sunygeneseo.edu",
    "name": "Casey Johnson",
    "handle": "casey_johnson90",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_johnson90",
    "collegeId": "suny-6",
    "isOnboarded": true,
    "joined": "2025-06-11T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 46,
    "followingCount": 7
  },
  {
    "id": "3cec1795-fd6a-4bbe-92b4-30ae215a2d45",
    "email": "casey_williams46@sunygeneseo.edu",
    "name": "Casey Williams",
    "handle": "casey_williams46",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_williams46",
    "collegeId": "suny-6",
    "isOnboarded": true,
    "joined": "2025-06-30T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 7,
    "followingCount": 36
  },
  {
    "id": "410a5143-8fe2-47d6-86bf-dbc6421d9e5f",
    "email": "chris_smith21@sunycortland.edu",
    "name": "Chris Smith",
    "handle": "chris_smith21",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_smith21",
    "collegeId": "suny-7",
    "isOnboarded": true,
    "joined": "2025-08-28T14:53:08.756050",
    "listingsCount": 4,
    "followersCount": 20,
    "followingCount": 32
  },
  {
    "id": "c97eef85-4c8f-40d2-9730-4ef76d7696ac",
    "email": "jordan_davis85@sunycortland.edu",
    "name": "Jordan Davis",
    "handle": "jordan_davis85",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_davis85",
    "collegeId": "suny-7",
    "isOnboarded": true,
    "joined": "2025-08-17T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 20,
    "followingCount": 22
  },
  {
    "id": "c30cab1c-b373-49db-a6f8-563c33d1cc9a",
    "email": "casey_martinez38@sunycortland.edu",
    "name": "Casey Martinez",
    "handle": "casey_martinez38",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_martinez38",
    "collegeId": "suny-7",
    "isOnboarded": true,
    "joined": "2025-02-21T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 30,
    "followingCount": 44
  },
  {
    "id": "9147992b-10b5-4488-98e1-ad6d7bb09a43",
    "email": "pat_martinez62@sunynewpaltz.edu",
    "name": "Pat Martinez",
    "handle": "pat_martinez62",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_martinez62",
    "collegeId": "suny-8",
    "isOnboarded": true,
    "joined": "2025-12-09T14:53:08.756050",
    "listingsCount": 4,
    "followersCount": 45,
    "followingCount": 15
  },
  {
    "id": "47a1f763-b5b9-4b09-82ee-ff9b95d61546",
    "email": "sam_brown33@sunynewpaltz.edu",
    "name": "Sam Brown",
    "handle": "sam_brown33",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_brown33",
    "collegeId": "suny-8",
    "isOnboarded": true,
    "joined": "2025-06-12T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 5,
    "followingCount": 23
  },
  {
    "id": "5233ee2d-7a98-468b-810e-cbb020f05ddf",
    "email": "taylor_miller41@sunynewpaltz.edu",
    "name": "Taylor Miller",
    "handle": "taylor_miller41",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_miller41",
    "collegeId": "suny-8",
    "isOnboarded": true,
    "joined": "2025-12-21T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 34,
    "followingCount": 10
  },
  {
    "id": "f95bb518-b52f-494a-b3e0-c43524e88bdb",
    "email": "jordan_williams58@fashioninstituteoftechnology.edu",
    "name": "Jordan Williams",
    "handle": "jordan_williams58",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_williams58",
    "collegeId": "suny-9",
    "isOnboarded": true,
    "joined": "2026-01-04T14:53:08.756050",
    "listingsCount": 4,
    "followersCount": 35,
    "followingCount": 24
  },
  {
    "id": "4109f42e-33c8-4ec7-9068-5e5a1c246022",
    "email": "sam_rodriguez97@fashioninstituteoftechnology.edu",
    "name": "Sam Rodriguez",
    "handle": "sam_rodriguez97",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_rodriguez97",
    "collegeId": "suny-9",
    "isOnboarded": true,
    "joined": "2025-02-11T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 7,
    "followingCount": 17
  },
  {
    "id": "6ea78b44-58a5-4a74-b53b-34eb2d6b8ca7",
    "email": "morgan_davis45@fashioninstituteoftechnology.edu",
    "name": "Morgan Davis",
    "handle": "morgan_davis45",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_davis45",
    "collegeId": "suny-9",
    "isOnboarded": true,
    "joined": "2025-09-23T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 13,
    "followingCount": 13
  },
  {
    "id": "27c2bae8-3567-477b-beb4-5fc80a65c6b6",
    "email": "riley_smith94@sunyfarmingdale.edu",
    "name": "Riley Smith",
    "handle": "riley_smith94",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_smith94",
    "collegeId": "suny-10",
    "isOnboarded": true,
    "joined": "2025-07-18T14:53:08.756050",
    "listingsCount": 4,
    "followersCount": 43,
    "followingCount": 36
  },
  {
    "id": "85e89fbf-aa0f-4f06-9e52-6a57aed66fdb",
    "email": "chris_garcia12@sunyfarmingdale.edu",
    "name": "Chris Garcia",
    "handle": "chris_garcia12",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_garcia12",
    "collegeId": "suny-10",
    "isOnboarded": true,
    "joined": "2025-05-14T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 25,
    "followingCount": 32
  },
  {
    "id": "3d1346e1-9c94-4354-8ea8-060bdbf5c2f9",
    "email": "casey_johnson66@sunyfarmingdale.edu",
    "name": "Casey Johnson",
    "handle": "casey_johnson66",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_johnson66",
    "collegeId": "suny-10",
    "isOnboarded": true,
    "joined": "2025-09-20T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 30,
    "followingCount": 24
  },
  {
    "id": "786287e1-bda2-4f1e-9bb9-32dd02e3fc34",
    "email": "sam_miller32@universityofsoutherncalifornia.edu",
    "name": "Sam Miller",
    "handle": "sam_miller32",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_miller32",
    "collegeId": "la-1",
    "isOnboarded": true,
    "joined": "2025-12-22T14:53:08.756050",
    "listingsCount": 4,
    "followersCount": 42,
    "followingCount": 30
  },
  {
    "id": "b20aba05-9ca8-4c47-88eb-c175f5085b2f",
    "email": "alex_garcia78@universityofsoutherncalifornia.edu",
    "name": "Alex Garcia",
    "handle": "alex_garcia78",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_garcia78",
    "collegeId": "la-1",
    "isOnboarded": true,
    "joined": "2025-11-18T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 38,
    "followingCount": 49
  },
  {
    "id": "aa2d7c68-7588-40d6-8381-8b025b39b919",
    "email": "casey_brown16@universityofsoutherncalifornia.edu",
    "name": "Casey Brown",
    "handle": "casey_brown16",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_brown16",
    "collegeId": "la-1",
    "isOnboarded": true,
    "joined": "2025-08-06T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 6,
    "followingCount": 17
  },
  {
    "id": "9dd08ae6-ba79-4747-9658-05de99d049ab",
    "email": "jamie_brown82@caltech.edu",
    "name": "Jamie Brown",
    "handle": "jamie_brown82",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_brown82",
    "collegeId": "la-2",
    "isOnboarded": true,
    "joined": "2025-08-27T14:53:08.756050",
    "listingsCount": 4,
    "followersCount": 37,
    "followingCount": 46
  },
  {
    "id": "40562dc4-4628-4056-8c1c-31303ecc325c",
    "email": "casey_smith95@caltech.edu",
    "name": "Casey Smith",
    "handle": "casey_smith95",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_smith95",
    "collegeId": "la-2",
    "isOnboarded": true,
    "joined": "2025-04-16T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 11,
    "followingCount": 30
  },
  {
    "id": "916f8769-c129-4dbc-8d38-750992f00299",
    "email": "jamie_rodriguez56@caltech.edu",
    "name": "Jamie Rodriguez",
    "handle": "jamie_rodriguez56",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_rodriguez56",
    "collegeId": "la-2",
    "isOnboarded": true,
    "joined": "2025-03-20T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 28,
    "followingCount": 33
  },
  {
    "id": "eb8c9774-2ae5-4eef-9439-42c36e5c6919",
    "email": "riley_smith93@loyolamarymountuniversity.edu",
    "name": "Riley Smith",
    "handle": "riley_smith93",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_smith93",
    "collegeId": "la-3",
    "isOnboarded": true,
    "joined": "2025-06-25T14:53:08.756050",
    "listingsCount": 4,
    "followersCount": 5,
    "followingCount": 42
  },
  {
    "id": "1afb16c5-fe3c-47aa-8ebb-0b8159615e65",
    "email": "taylor_williams98@loyolamarymountuniversity.edu",
    "name": "Taylor Williams",
    "handle": "taylor_williams98",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_williams98",
    "collegeId": "la-3",
    "isOnboarded": true,
    "joined": "2025-07-05T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 15,
    "followingCount": 6
  },
  {
    "id": "48bd511c-5e79-4c1f-be00-382f90c8f279",
    "email": "jamie_johnson57@loyolamarymountuniversity.edu",
    "name": "Jamie Johnson",
    "handle": "jamie_johnson57",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson57",
    "collegeId": "la-3",
    "isOnboarded": true,
    "joined": "2025-04-27T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 47,
    "followingCount": 35
  },
  {
    "id": "6f214e30-6a18-47c6-b8ad-78508abfa7a9",
    "email": "chris_smith76@csun.edu",
    "name": "Chris Smith",
    "handle": "chris_smith76",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_smith76",
    "collegeId": "la-4",
    "isOnboarded": true,
    "joined": "2025-03-28T14:53:08.756050",
    "listingsCount": 4,
    "followersCount": 40,
    "followingCount": 18
  },
  {
    "id": "58c120f4-7446-4774-a509-29da14904068",
    "email": "jordan_garcia45@csun.edu",
    "name": "Jordan Garcia",
    "handle": "jordan_garcia45",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_garcia45",
    "collegeId": "la-4",
    "isOnboarded": true,
    "joined": "2025-03-01T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 14,
    "followingCount": 42
  },
  {
    "id": "f4340942-45b8-48ff-bc2b-70fcc4ed46f9",
    "email": "jamie_brown68@csun.edu",
    "name": "Jamie Brown",
    "handle": "jamie_brown68",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_brown68",
    "collegeId": "la-4",
    "isOnboarded": true,
    "joined": "2025-11-02T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 12,
    "followingCount": 5
  },
  {
    "id": "85e6a02c-575b-4b78-90c2-f01c3c78d0d8",
    "email": "sam_williams51@csulosangeles.edu",
    "name": "Sam Williams",
    "handle": "sam_williams51",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_williams51",
    "collegeId": "la-5",
    "isOnboarded": true,
    "joined": "2025-02-23T14:53:08.756050",
    "listingsCount": 4,
    "followersCount": 42,
    "followingCount": 36
  },
  {
    "id": "fda4fc22-fc53-47fc-98a9-e99a5df60be4",
    "email": "jordan_johnson57@csulosangeles.edu",
    "name": "Jordan Johnson",
    "handle": "jordan_johnson57",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_johnson57",
    "collegeId": "la-5",
    "isOnboarded": true,
    "joined": "2025-12-27T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 16,
    "followingCount": 44
  },
  {
    "id": "a5bca4e1-7797-4c24-9d5f-edf01ad3c4ff",
    "email": "casey_rodriguez11@csulosangeles.edu",
    "name": "Casey Rodriguez",
    "handle": "casey_rodriguez11",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_rodriguez11",
    "collegeId": "la-5",
    "isOnboarded": true,
    "joined": "2025-07-31T14:53:08.756050",
    "listingsCount": 3,
    "followersCount": 21,
    "followingCount": 17
  },
  {
    "id": "582c9eb6-5606-4ce0-bf63-23f24d15192d",
    "email": "jamie_rodriguez95@pepperdineuniversity.edu",
    "name": "Jamie Rodriguez",
    "handle": "jamie_rodriguez95",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_rodriguez95",
    "collegeId": "la-6",
    "isOnboarded": true,
    "joined": "2025-07-21T14:53:08.757055",
    "listingsCount": 4,
    "followersCount": 43,
    "followingCount": 34
  },
  {
    "id": "002c8661-4902-4e3f-940d-aed23bac87b6",
    "email": "riley_miller39@pepperdineuniversity.edu",
    "name": "Riley Miller",
    "handle": "riley_miller39",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_miller39",
    "collegeId": "la-6",
    "isOnboarded": true,
    "joined": "2025-04-11T14:53:08.757055",
    "listingsCount": 3,
    "followersCount": 21,
    "followingCount": 35
  },
  {
    "id": "c7045a9d-0119-43ca-95eb-4c3f0c6ee640",
    "email": "pat_smith38@pepperdineuniversity.edu",
    "name": "Pat Smith",
    "handle": "pat_smith38",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_smith38",
    "collegeId": "la-6",
    "isOnboarded": true,
    "joined": "2025-12-08T14:53:08.757055",
    "listingsCount": 3,
    "followersCount": 16,
    "followingCount": 31
  },
  {
    "id": "c493220d-7ee0-40f7-b125-559ca10eb30b",
    "email": "casey_brown90@occidentalcollege.edu",
    "name": "Casey Brown",
    "handle": "casey_brown90",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_brown90",
    "collegeId": "la-7",
    "isOnboarded": true,
    "joined": "2025-08-15T14:53:08.757055",
    "listingsCount": 4,
    "followersCount": 40,
    "followingCount": 5
  },
  {
    "id": "276943b7-69fb-4071-af4b-786e16cee335",
    "email": "alex_garcia13@occidentalcollege.edu",
    "name": "Alex Garcia",
    "handle": "alex_garcia13",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_garcia13",
    "collegeId": "la-7",
    "isOnboarded": true,
    "joined": "2025-03-17T14:53:08.757055",
    "listingsCount": 3,
    "followersCount": 36,
    "followingCount": 43
  },
  {
    "id": "de5fb11c-056c-46b4-81c9-afa7614b26c0",
    "email": "chris_miller53@occidentalcollege.edu",
    "name": "Chris Miller",
    "handle": "chris_miller53",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_miller53",
    "collegeId": "la-7",
    "isOnboarded": true,
    "joined": "2025-09-01T14:53:08.757055",
    "listingsCount": 3,
    "followersCount": 48,
    "followingCount": 11
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    "id": "3c71c4e9-66f6-416f-b332-89ecdae88410",
    "name": "Introduction to Algorithms (CLRS) 4th Ed",
    "price": "$83",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "The silver bible of CS. Barely used, perfect condition.",
    "sellerId": "467cf28d-9191-423f-b0aa-6f3e20f27da3",
    "sellerName": "Riley Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_brown61",
    "condition": "Good",
    "collegeId": "1",
    "created_at": "2026-01-26T14:53:08.754458"
  },
  {
    "id": "6075a63e-e6e8-44ba-8cc8-917047b31a2c",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$33",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "27e58cc7-285d-40d4-bcbe-acee8649eac9",
    "sellerName": "Riley Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_smith84",
    "condition": "Good",
    "collegeId": "1",
    "created_at": "2026-02-01T14:53:08.754458"
  },
  {
    "id": "df3874b4-1960-4144-a40c-a31590a1c8dc",
    "name": "Dorm Sized Mini Fridge",
    "price": "$56",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Keeps everything very cold. Clean and functional. Moving out so must go.",
    "sellerId": "27e58cc7-285d-40d4-bcbe-acee8649eac9",
    "sellerName": "Riley Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_smith84",
    "condition": "Like New",
    "collegeId": "1",
    "created_at": "2026-02-06T14:53:08.754458"
  },
  {
    "id": "c53c775a-10c1-4f42-a88f-19f89f7c5a04",
    "name": "Dell UltraSharp 27 Monitor",
    "price": "$201",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for a dual monitor setup. No dead pixels, works perfectly.",
    "sellerId": "27e58cc7-285d-40d4-bcbe-acee8649eac9",
    "sellerName": "Riley Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_smith84",
    "condition": "Fair",
    "collegeId": "1",
    "created_at": "2026-01-30T14:53:08.754458"
  },
  {
    "id": "799405a8-522e-438e-8354-11bf2bfc3e23",
    "name": "Ergonomic Office Chair",
    "price": "$78",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1505797149-43c0ec70297f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Adjustable height and lumbar support. Crucial for long study sessions.",
    "sellerId": "4b49b4b8-941a-40cf-b424-ad1401c57826",
    "sellerName": "Jordan Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_rodriguez27",
    "condition": "New",
    "collegeId": "1",
    "created_at": "2026-02-07T14:53:08.754458"
  },
  {
    "id": "77dcd59e-f764-4ea9-b284-8768e7e2db31",
    "name": "Psychology: Themes and Variations",
    "price": "$41",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Used for one semester. Some highlighting in the first few chapters.",
    "sellerId": "467cf28d-9191-423f-b0aa-6f3e20f27da3",
    "sellerName": "Riley Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_brown61",
    "condition": "Like New",
    "collegeId": "1",
    "created_at": "2026-01-25T14:53:08.754458"
  },
  {
    "id": "c2d7ae78-6be6-4a5f-aa03-8cba959af43e",
    "name": "Dorm Sized Mini Fridge",
    "price": "$88",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Keeps everything very cold. Clean and functional. Moving out so must go.",
    "sellerId": "4b49b4b8-941a-40cf-b424-ad1401c57826",
    "sellerName": "Jordan Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_rodriguez27",
    "condition": "Like New",
    "collegeId": "1",
    "created_at": "2026-01-13T14:53:08.754458"
  },
  {
    "id": "e0aad6d1-5261-46f4-816d-4c6fd6715d86",
    "name": "Patagonia Better Sweater Fleece",
    "price": "$79",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very cozy and breathable. Great for layering in the library.",
    "sellerId": "467cf28d-9191-423f-b0aa-6f3e20f27da3",
    "sellerName": "Riley Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_brown61",
    "condition": "New",
    "collegeId": "1",
    "created_at": "2026-01-19T14:53:08.754458"
  },
  {
    "id": "be58613b-8f7f-4e7a-a135-4721c61d0a6c",
    "name": "Calculus: Early Transcendentals 9th Ed",
    "price": "$44",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1543004629-14207021ce0e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Slightly worn cover, but no highlights inside. Essential for STEM majors.",
    "sellerId": "27e58cc7-285d-40d4-bcbe-acee8649eac9",
    "sellerName": "Riley Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_smith84",
    "condition": "Good",
    "collegeId": "1",
    "created_at": "2026-02-06T14:53:08.754458"
  },
  {
    "id": "8508e2e2-9503-43f4-af49-479c922ce687",
    "name": "Road Bike (54cm Frame)",
    "price": "$396",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Fast and reliable for commuting to class. Recently tuned up.",
    "sellerId": "4b49b4b8-941a-40cf-b424-ad1401c57826",
    "sellerName": "Jordan Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_rodriguez27",
    "condition": "New",
    "collegeId": "1",
    "created_at": "2026-01-30T14:53:08.754458"
  },
  {
    "id": "8a5518dd-9381-421c-8bf3-ea15b93f7e02",
    "name": "Dell UltraSharp 27 Monitor",
    "price": "$220",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for a dual monitor setup. No dead pixels, works perfectly.",
    "sellerId": "d2350728-3060-4409-af97-36e04693ef70",
    "sellerName": "Riley Jones",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_jones17",
    "condition": "Fair",
    "collegeId": "2",
    "created_at": "2026-01-28T14:53:08.754458"
  },
  {
    "id": "d48c2bfb-ae41-4197-9820-923e0eb2344b",
    "name": "Introduction to Algorithms (CLRS) 4th Ed",
    "price": "$73",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "The silver bible of CS. Barely used, perfect condition.",
    "sellerId": "d2350728-3060-4409-af97-36e04693ef70",
    "sellerName": "Riley Jones",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_jones17",
    "condition": "Good",
    "collegeId": "2",
    "created_at": "2026-02-05T14:53:08.754458"
  },
  {
    "id": "269539c6-026c-4449-a2f4-9372435bd324",
    "name": "Patagonia Better Sweater Fleece",
    "price": "$64",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very cozy and breathable. Great for layering in the library.",
    "sellerId": "b00eb511-de35-40c9-8fde-915f00d23606",
    "sellerName": "Casey Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_johnson78",
    "condition": "Fair",
    "collegeId": "2",
    "created_at": "2026-02-01T14:53:08.754458"
  },
  {
    "id": "7d4d99e2-2049-4751-9cb2-ef03a603cd54",
    "name": "Patagonia Better Sweater Fleece",
    "price": "$81",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very cozy and breathable. Great for layering in the library.",
    "sellerId": "b00eb511-de35-40c9-8fde-915f00d23606",
    "sellerName": "Casey Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_johnson78",
    "condition": "Like New",
    "collegeId": "2",
    "created_at": "2026-01-22T14:53:08.754458"
  },
  {
    "id": "ad0c084c-d9f7-4b62-a911-c8542eb27ee6",
    "name": "Yoga Mat and Blocks",
    "price": "$26",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "High grip mat, barely used. Great for stress relief.",
    "sellerId": "b00eb511-de35-40c9-8fde-915f00d23606",
    "sellerName": "Casey Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_johnson78",
    "condition": "New",
    "collegeId": "2",
    "created_at": "2026-02-09T14:53:08.754458"
  },
  {
    "id": "ec5c876c-4cd7-44ad-978c-5020ca5323c1",
    "name": "Levi's 501 Original Jeans",
    "price": "$46",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Classic fit, high quality denim. Like new condition.",
    "sellerId": "37e912d4-2879-4b45-9011-49af112d0709",
    "sellerName": "Chris Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_williams73",
    "condition": "Fair",
    "collegeId": "2",
    "created_at": "2026-01-18T14:53:08.754458"
  },
  {
    "id": "45a47ff9-d89c-4596-a7fe-04361035881e",
    "name": "Introduction to Algorithms (CLRS) 4th Ed",
    "price": "$97",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "The silver bible of CS. Barely used, perfect condition.",
    "sellerId": "37e912d4-2879-4b45-9011-49af112d0709",
    "sellerName": "Chris Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_williams73",
    "condition": "Like New",
    "collegeId": "2",
    "created_at": "2026-01-21T14:53:08.754458"
  },
  {
    "id": "aec9eaa2-a614-4d52-acf4-502db70b142b",
    "name": "MacBook Air M2",
    "price": "$1020",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "d2350728-3060-4409-af97-36e04693ef70",
    "sellerName": "Riley Jones",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_jones17",
    "condition": "New",
    "collegeId": "2",
    "created_at": "2026-02-02T14:53:08.754458"
  },
  {
    "id": "ed4319c4-253e-4ca6-af58-80957e6511ce",
    "name": "TI-84 Plus CE Graphing Calculator",
    "price": "$66",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Essential for math and science classes. Color screen, excellent condition.",
    "sellerId": "37e912d4-2879-4b45-9011-49af112d0709",
    "sellerName": "Chris Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_williams73",
    "condition": "Good",
    "collegeId": "2",
    "created_at": "2026-01-28T14:53:08.754458"
  },
  {
    "id": "4b4794c2-c2b4-4978-8eb8-1d1357eed5c3",
    "name": "Introduction to Algorithms (CLRS) 4th Ed",
    "price": "$79",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "The silver bible of CS. Barely used, perfect condition.",
    "sellerId": "d2350728-3060-4409-af97-36e04693ef70",
    "sellerName": "Riley Jones",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_jones17",
    "condition": "New",
    "collegeId": "2",
    "created_at": "2026-02-05T14:53:08.754458"
  },
  {
    "id": "bc8f358d-b6c4-4719-a4ef-abb7d568a107",
    "name": "Yoga Mat and Blocks",
    "price": "$25",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "High grip mat, barely used. Great for stress relief.",
    "sellerId": "6142f2f9-d69b-49b3-97de-e03ce201fc46",
    "sellerName": "Sam Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_johnson40",
    "condition": "New",
    "collegeId": "3",
    "created_at": "2026-01-15T14:53:08.754458"
  },
  {
    "id": "50431ee9-0f62-4baa-af42-75549c873204",
    "name": "Cozy Area Rug (5x7)",
    "price": "$49",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1562512120-68199342713f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Soft and clean. Adds a lot of warmth to a dorm room.",
    "sellerId": "986ff05e-8df2-4732-823a-96bba40605c2",
    "sellerName": "Taylor Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_williams86",
    "condition": "New",
    "collegeId": "3",
    "created_at": "2026-02-01T14:53:08.754458"
  },
  {
    "id": "a2f1ba5f-afec-40cb-b66a-ee8f0280bea1",
    "name": "UC Berkeley Hoodie",
    "price": "$28",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Super soft and comfortable. Perfect for representing school spirit.",
    "sellerId": "50153ac8-1f93-4a89-83cf-72d8c6cc9738",
    "sellerName": "Taylor Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_brown30",
    "condition": "Good",
    "collegeId": "3",
    "created_at": "2026-01-30T14:53:08.754458"
  },
  {
    "id": "7126ba9a-5f37-4aa3-a2e9-70317e49008c",
    "name": "Cozy Area Rug (5x7)",
    "price": "$57",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1562512120-68199342713f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Soft and clean. Adds a lot of warmth to a dorm room.",
    "sellerId": "50153ac8-1f93-4a89-83cf-72d8c6cc9738",
    "sellerName": "Taylor Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_brown30",
    "condition": "Like New",
    "collegeId": "3",
    "created_at": "2026-01-15T14:53:08.754458"
  },
  {
    "id": "b63905cc-85ac-4905-a30d-f49786d58309",
    "name": "North Face Nuptse Jacket",
    "price": "$162",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very warm for winter. Excellent condition, no tears or stains.",
    "sellerId": "6142f2f9-d69b-49b3-97de-e03ce201fc46",
    "sellerName": "Sam Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_johnson40",
    "condition": "New",
    "collegeId": "3",
    "created_at": "2026-01-25T14:53:08.754458"
  },
  {
    "id": "f7d7dd1a-2501-42e3-a166-31dadcc748ad",
    "name": "Ergonomic Office Chair",
    "price": "$87",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1505797149-43c0ec70297f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Adjustable height and lumbar support. Crucial for long study sessions.",
    "sellerId": "986ff05e-8df2-4732-823a-96bba40605c2",
    "sellerName": "Taylor Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_williams86",
    "condition": "Good",
    "collegeId": "3",
    "created_at": "2026-02-03T14:53:08.754458"
  },
  {
    "id": "49ae14da-ed47-4a37-9d79-408e1e78fe07",
    "name": "Dell UltraSharp 27 Monitor",
    "price": "$228",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for a dual monitor setup. No dead pixels, works perfectly.",
    "sellerId": "50153ac8-1f93-4a89-83cf-72d8c6cc9738",
    "sellerName": "Taylor Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_brown30",
    "condition": "Fair",
    "collegeId": "3",
    "created_at": "2026-02-09T14:53:08.754458"
  },
  {
    "id": "221d1001-1022-4769-952f-eed6d8e9a81b",
    "name": "Calculus: Early Transcendentals 9th Ed",
    "price": "$42",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1543004629-14207021ce0e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Slightly worn cover, but no highlights inside. Essential for STEM majors.",
    "sellerId": "50153ac8-1f93-4a89-83cf-72d8c6cc9738",
    "sellerName": "Taylor Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_brown30",
    "condition": "New",
    "collegeId": "3",
    "created_at": "2026-01-13T14:53:08.754458"
  },
  {
    "id": "69b2ef07-f45b-47e4-a94a-c4ac9379ffec",
    "name": "TI-84 Plus CE Graphing Calculator",
    "price": "$77",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Essential for math and science classes. Color screen, excellent condition.",
    "sellerId": "986ff05e-8df2-4732-823a-96bba40605c2",
    "sellerName": "Taylor Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_williams86",
    "condition": "Like New",
    "collegeId": "3",
    "created_at": "2026-02-09T14:53:08.754458"
  },
  {
    "id": "46b44f7c-695b-4a23-b135-e72396a14d1d",
    "name": "Dorm Sized Mini Fridge",
    "price": "$60",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Keeps everything very cold. Clean and functional. Moving out so must go.",
    "sellerId": "50153ac8-1f93-4a89-83cf-72d8c6cc9738",
    "sellerName": "Taylor Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_brown30",
    "condition": "Like New",
    "collegeId": "3",
    "created_at": "2026-01-31T14:53:08.754458"
  },
  {
    "id": "3396522b-e585-4e7b-8c89-2be2247558c0",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$42",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "8bb5aba5-53b4-45b8-9a83-c8be5d79be05",
    "sellerName": "Taylor Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_johnson93",
    "condition": "Good",
    "collegeId": "4",
    "created_at": "2026-02-08T14:53:08.754458"
  },
  {
    "id": "d68b907b-a0c9-4ab8-989a-f40397121f9b",
    "name": "Nike Air Force 1s (Size 10)",
    "price": "$56",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Classic white sneakers. Worn a few times, still look very fresh.",
    "sellerId": "840e159f-6c5c-480b-aaff-60b43cc5c37e",
    "sellerName": "Alex Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_johnson23",
    "condition": "Fair",
    "collegeId": "4",
    "created_at": "2026-02-02T14:53:08.754458"
  },
  {
    "id": "b3163eda-ed30-4253-8d5a-f2a2b90f84b5",
    "name": "Campbell Biology 12th Edition",
    "price": "$81",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Brand new, never opened. Dropped the class so I don't need it.",
    "sellerId": "8bb5aba5-53b4-45b8-9a83-c8be5d79be05",
    "sellerName": "Taylor Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_johnson93",
    "condition": "Fair",
    "collegeId": "4",
    "created_at": "2026-01-11T14:53:08.754458"
  },
  {
    "id": "16a79a72-6c93-4764-953a-a8ef9ba81f26",
    "name": "Levi's 501 Original Jeans",
    "price": "$50",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Classic fit, high quality denim. Like new condition.",
    "sellerId": "261c6f05-78f6-4ca1-9dfb-4a30455e441e",
    "sellerName": "Sam Martinez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_martinez94",
    "condition": "Good",
    "collegeId": "4",
    "created_at": "2026-01-20T14:53:08.754458"
  },
  {
    "id": "142a6159-d0b4-476c-b43c-ad4d9c075b1e",
    "name": "Dell UltraSharp 27 Monitor",
    "price": "$195",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for a dual monitor setup. No dead pixels, works perfectly.",
    "sellerId": "8bb5aba5-53b4-45b8-9a83-c8be5d79be05",
    "sellerName": "Taylor Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_johnson93",
    "condition": "Like New",
    "collegeId": "4",
    "created_at": "2026-01-13T14:53:08.754458"
  },
  {
    "id": "6e38b271-103a-44b0-b30d-4c015ce3c282",
    "name": "TI-84 Plus CE Graphing Calculator",
    "price": "$79",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Essential for math and science classes. Color screen, excellent condition.",
    "sellerId": "840e159f-6c5c-480b-aaff-60b43cc5c37e",
    "sellerName": "Alex Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_johnson23",
    "condition": "Like New",
    "collegeId": "4",
    "created_at": "2026-01-30T14:53:08.754458"
  },
  {
    "id": "9525d5ad-1f1e-4ceb-972d-8e01563431d2",
    "name": "Cozy Area Rug (5x7)",
    "price": "$41",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1562512120-68199342713f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Soft and clean. Adds a lot of warmth to a dorm room.",
    "sellerId": "840e159f-6c5c-480b-aaff-60b43cc5c37e",
    "sellerName": "Alex Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_johnson23",
    "condition": "Like New",
    "collegeId": "4",
    "created_at": "2026-01-28T14:53:08.754458"
  },
  {
    "id": "baf25002-06b3-400c-96d3-27c516949566",
    "name": "Nike Air Force 1s (Size 10)",
    "price": "$57",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Classic white sneakers. Worn a few times, still look very fresh.",
    "sellerId": "840e159f-6c5c-480b-aaff-60b43cc5c37e",
    "sellerName": "Alex Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_johnson23",
    "condition": "Good",
    "collegeId": "4",
    "created_at": "2026-01-29T14:53:08.754458"
  },
  {
    "id": "aacb477a-026f-46f9-aec0-7c7f9e7e07f1",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$36",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "8bb5aba5-53b4-45b8-9a83-c8be5d79be05",
    "sellerName": "Taylor Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_johnson93",
    "condition": "Good",
    "collegeId": "4",
    "created_at": "2026-02-07T14:53:08.754458"
  },
  {
    "id": "2ce1bbb6-0f56-4a48-8cbb-b5b768ec4a87",
    "name": "MacBook Air M2",
    "price": "$801",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "840e159f-6c5c-480b-aaff-60b43cc5c37e",
    "sellerName": "Alex Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_johnson23",
    "condition": "New",
    "collegeId": "4",
    "created_at": "2026-02-04T14:53:08.754458"
  },
  {
    "id": "736e5322-9d43-43ea-9cb2-750aeed1b01e",
    "name": "MacBook Air M2",
    "price": "$986",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "1f2513e4-28d4-4f81-b59c-fb97fe61c3a7",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson93",
    "condition": "Good",
    "collegeId": "5",
    "created_at": "2026-01-14T14:53:08.754458"
  },
  {
    "id": "bf9cdda4-5286-4afd-a734-3f9d80e45041",
    "name": "Dorm Sized Mini Fridge",
    "price": "$68",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Keeps everything very cold. Clean and functional. Moving out so must go.",
    "sellerId": "1f2513e4-28d4-4f81-b59c-fb97fe61c3a7",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson93",
    "condition": "Like New",
    "collegeId": "5",
    "created_at": "2026-01-28T14:53:08.754458"
  },
  {
    "id": "b408ef51-3c4b-473c-8716-1f8d60e5e356",
    "name": "Cozy Area Rug (5x7)",
    "price": "$58",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1562512120-68199342713f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Soft and clean. Adds a lot of warmth to a dorm room.",
    "sellerId": "ee4a42c5-9fc0-43ab-b0b7-712fbbcc53a8",
    "sellerName": "Riley Martinez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_martinez22",
    "condition": "Good",
    "collegeId": "5",
    "created_at": "2026-01-27T14:53:08.754458"
  },
  {
    "id": "1e9e6954-d833-4653-a88b-4874d58bdcd6",
    "name": "Organic Chemistry 8th Edition - Klein",
    "price": "$57",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1532187875605-186e6af8e37c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Includes the solutions manual. Very helpful for Pre-med students.",
    "sellerId": "1f2513e4-28d4-4f81-b59c-fb97fe61c3a7",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson93",
    "condition": "Fair",
    "collegeId": "5",
    "created_at": "2026-02-04T14:53:08.754458"
  },
  {
    "id": "bf418fa4-ba66-487a-99e7-5cb84d5aacf3",
    "name": "Campbell Biology 12th Edition",
    "price": "$74",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Brand new, never opened. Dropped the class so I don't need it.",
    "sellerId": "1f2513e4-28d4-4f81-b59c-fb97fe61c3a7",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson93",
    "condition": "New",
    "collegeId": "5",
    "created_at": "2026-01-16T14:53:08.754458"
  },
  {
    "id": "048664d5-2798-4b14-8f0e-14c429261987",
    "name": "Calculus: Early Transcendentals 9th Ed",
    "price": "$58",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1543004629-14207021ce0e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Slightly worn cover, but no highlights inside. Essential for STEM majors.",
    "sellerId": "442ef41b-da73-480b-a1e1-a1ddd02edeb8",
    "sellerName": "Jordan Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_smith78",
    "condition": "Good",
    "collegeId": "5",
    "created_at": "2026-01-20T14:53:08.754458"
  },
  {
    "id": "6fa539b2-5dc8-4017-9989-ef9cbd31f6ac",
    "name": "Wilson Tennis Racket",
    "price": "$47",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1617083281297-af33e8bf8939?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Lightweight and powerful. Includes a cover and some tennis balls.",
    "sellerId": "1f2513e4-28d4-4f81-b59c-fb97fe61c3a7",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson93",
    "condition": "Fair",
    "collegeId": "5",
    "created_at": "2026-01-15T14:53:08.754458"
  },
  {
    "id": "d0fc0f6f-9af5-4c51-9944-c3ee9efab991",
    "name": "IKEA Malm Desk",
    "price": "$47",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1518455027359-f3f816b1a238?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "White desk, very sturdy. A few minor scratches on the surface.",
    "sellerId": "1f2513e4-28d4-4f81-b59c-fb97fe61c3a7",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson93",
    "condition": "Like New",
    "collegeId": "5",
    "created_at": "2026-01-17T14:53:08.754458"
  },
  {
    "id": "2f7ed637-3d67-429b-88a0-c03b99023ed2",
    "name": "Ergonomic Office Chair",
    "price": "$114",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1505797149-43c0ec70297f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Adjustable height and lumbar support. Crucial for long study sessions.",
    "sellerId": "442ef41b-da73-480b-a1e1-a1ddd02edeb8",
    "sellerName": "Jordan Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_smith78",
    "condition": "New",
    "collegeId": "5",
    "created_at": "2026-01-11T14:53:08.754458"
  },
  {
    "id": "bc614b14-024f-44e8-b2b4-158b7b87d442",
    "name": "Cozy Area Rug (5x7)",
    "price": "$38",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1562512120-68199342713f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Soft and clean. Adds a lot of warmth to a dorm room.",
    "sellerId": "ee4a42c5-9fc0-43ab-b0b7-712fbbcc53a8",
    "sellerName": "Riley Martinez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_martinez22",
    "condition": "Like New",
    "collegeId": "5",
    "created_at": "2026-02-01T14:53:08.754458"
  },
  {
    "id": "d26f85f6-4d68-4ce1-af8c-268a271c96b7",
    "name": "MacBook Air M2",
    "price": "$807",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "0e414c18-2c6d-4a38-913a-b3672d3fdd37",
    "sellerName": "Jamie Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_miller95",
    "condition": "Good",
    "collegeId": "6",
    "created_at": "2026-01-30T14:53:08.754458"
  },
  {
    "id": "5be21705-09d2-431a-a709-1311b407a4ce",
    "name": "Ergonomic Office Chair",
    "price": "$70",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1505797149-43c0ec70297f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Adjustable height and lumbar support. Crucial for long study sessions.",
    "sellerId": "04a108fe-63f9-48f8-9be8-31de8998aa18",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson89",
    "condition": "New",
    "collegeId": "6",
    "created_at": "2026-01-23T14:53:08.754458"
  },
  {
    "id": "d0b13861-e31f-4785-bcd6-d5f605effd4e",
    "name": "Sony WH-1000XM4 Headphones",
    "price": "$202",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Industry-leading noise canceling. Like new, barely used.",
    "sellerId": "0e414c18-2c6d-4a38-913a-b3672d3fdd37",
    "sellerName": "Jamie Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_miller95",
    "condition": "Fair",
    "collegeId": "6",
    "created_at": "2026-01-26T14:53:08.754458"
  },
  {
    "id": "d066066e-2145-4a50-bace-c4ea666e4bd2",
    "name": "Patagonia Better Sweater Fleece",
    "price": "$67",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very cozy and breathable. Great for layering in the library.",
    "sellerId": "8c0e3839-ae60-4275-ad07-2b0e0784a4a0",
    "sellerName": "Jamie Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_miller71",
    "condition": "Like New",
    "collegeId": "6",
    "created_at": "2026-02-09T14:53:08.754458"
  },
  {
    "id": "fdaf7cdc-d44a-4305-bf43-58c082922488",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$52",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "04a108fe-63f9-48f8-9be8-31de8998aa18",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson89",
    "condition": "Good",
    "collegeId": "6",
    "created_at": "2026-01-25T14:53:08.754458"
  },
  {
    "id": "6a9db0d2-6044-4d68-8daf-85c6069121ff",
    "name": "Yoga Mat and Blocks",
    "price": "$23",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "High grip mat, barely used. Great for stress relief.",
    "sellerId": "8c0e3839-ae60-4275-ad07-2b0e0784a4a0",
    "sellerName": "Jamie Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_miller71",
    "condition": "Like New",
    "collegeId": "6",
    "created_at": "2026-02-09T14:53:08.754458"
  },
  {
    "id": "41d70d59-e9be-49cd-b8d4-0cdb74b92371",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$31",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "04a108fe-63f9-48f8-9be8-31de8998aa18",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson89",
    "condition": "Fair",
    "collegeId": "6",
    "created_at": "2026-02-06T14:53:08.754458"
  },
  {
    "id": "1cad5172-d0fa-44ea-9475-6cbe1791e2f8",
    "name": "IKEA Malm Desk",
    "price": "$46",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1518455027359-f3f816b1a238?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "White desk, very sturdy. A few minor scratches on the surface.",
    "sellerId": "04a108fe-63f9-48f8-9be8-31de8998aa18",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson89",
    "condition": "Good",
    "collegeId": "6",
    "created_at": "2026-01-23T14:53:08.754458"
  },
  {
    "id": "8a1d9725-b9ff-4314-a5b9-cf5470ed2ca2",
    "name": "Introduction to Algorithms (CLRS) 4th Ed",
    "price": "$80",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "The silver bible of CS. Barely used, perfect condition.",
    "sellerId": "0e414c18-2c6d-4a38-913a-b3672d3fdd37",
    "sellerName": "Jamie Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_miller95",
    "condition": "Good",
    "collegeId": "6",
    "created_at": "2026-02-01T14:53:08.754458"
  },
  {
    "id": "97b26f0f-b2e4-4852-907f-9903b2b51854",
    "name": "Sony WH-1000XM4 Headphones",
    "price": "$239",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Industry-leading noise canceling. Like new, barely used.",
    "sellerId": "04a108fe-63f9-48f8-9be8-31de8998aa18",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson89",
    "condition": "New",
    "collegeId": "6",
    "created_at": "2026-01-17T14:53:08.754458"
  },
  {
    "id": "713d0d22-464a-4b48-a048-80fa0a7bbfb0",
    "name": "Cozy Area Rug (5x7)",
    "price": "$46",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1562512120-68199342713f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Soft and clean. Adds a lot of warmth to a dorm room.",
    "sellerId": "c58ba22d-b16f-473f-8802-ccc8a724dbc2",
    "sellerName": "Casey Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_davis31",
    "condition": "Good",
    "collegeId": "suny-1",
    "created_at": "2026-02-05T14:53:08.754458"
  },
  {
    "id": "9b85f068-2dcf-4e7a-87bb-11e92e6d7c95",
    "name": "Floor Lamp with LED Bulbs",
    "price": "$15",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1555854817-5b2247a8175f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Bright lighting for the whole room. Modern design.",
    "sellerId": "6db0cd70-bcdd-4670-8f52-b82d6581aa21",
    "sellerName": "Jordan Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_williams34",
    "condition": "New",
    "collegeId": "suny-1",
    "created_at": "2026-02-06T14:53:08.754458"
  },
  {
    "id": "0624f33d-ce39-45f9-acd3-0e75a53d405d",
    "name": "Floor Lamp with LED Bulbs",
    "price": "$27",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1555854817-5b2247a8175f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Bright lighting for the whole room. Modern design.",
    "sellerId": "b724d384-3dcd-4b4d-8270-bfac4f610305",
    "sellerName": "Jordan Jones",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_jones27",
    "condition": "New",
    "collegeId": "suny-1",
    "created_at": "2026-01-28T14:53:08.754458"
  },
  {
    "id": "a43bcc1e-48bc-477c-b7cd-db34169037a2",
    "name": "Ergonomic Office Chair",
    "price": "$90",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1505797149-43c0ec70297f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Adjustable height and lumbar support. Crucial for long study sessions.",
    "sellerId": "6db0cd70-bcdd-4670-8f52-b82d6581aa21",
    "sellerName": "Jordan Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_williams34",
    "condition": "New",
    "collegeId": "suny-1",
    "created_at": "2026-01-23T14:53:08.754458"
  },
  {
    "id": "5113d6ef-0ebd-420b-9aa2-6ae50af5f68a",
    "name": "Psychology: Themes and Variations",
    "price": "$46",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Used for one semester. Some highlighting in the first few chapters.",
    "sellerId": "6db0cd70-bcdd-4670-8f52-b82d6581aa21",
    "sellerName": "Jordan Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_williams34",
    "condition": "Like New",
    "collegeId": "suny-1",
    "created_at": "2026-01-18T14:53:08.754458"
  },
  {
    "id": "1d569cee-47bf-4758-b585-5410b3f4b3ad",
    "name": "IKEA Malm Desk",
    "price": "$79",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1518455027359-f3f816b1a238?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "White desk, very sturdy. A few minor scratches on the surface.",
    "sellerId": "c58ba22d-b16f-473f-8802-ccc8a724dbc2",
    "sellerName": "Casey Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_davis31",
    "condition": "New",
    "collegeId": "suny-1",
    "created_at": "2026-02-08T14:53:08.754458"
  },
  {
    "id": "fa207d1c-c4b6-4730-a5b3-2a9192fee286",
    "name": "Campbell Biology 12th Edition",
    "price": "$88",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Brand new, never opened. Dropped the class so I don't need it.",
    "sellerId": "6db0cd70-bcdd-4670-8f52-b82d6581aa21",
    "sellerName": "Jordan Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_williams34",
    "condition": "New",
    "collegeId": "suny-1",
    "created_at": "2026-02-03T14:53:08.754458"
  },
  {
    "id": "3008a1d4-9050-4621-9adc-ff712de13962",
    "name": "Calculus: Early Transcendentals 9th Ed",
    "price": "$62",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1543004629-14207021ce0e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Slightly worn cover, but no highlights inside. Essential for STEM majors.",
    "sellerId": "b724d384-3dcd-4b4d-8270-bfac4f610305",
    "sellerName": "Jordan Jones",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_jones27",
    "condition": "Fair",
    "collegeId": "suny-1",
    "created_at": "2026-01-11T14:53:08.754458"
  },
  {
    "id": "a660f727-e959-4814-8b83-4b92813670d2",
    "name": "Yoga Mat and Blocks",
    "price": "$22",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "High grip mat, barely used. Great for stress relief.",
    "sellerId": "6db0cd70-bcdd-4670-8f52-b82d6581aa21",
    "sellerName": "Jordan Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_williams34",
    "condition": "Fair",
    "collegeId": "suny-1",
    "created_at": "2026-02-06T14:53:08.754458"
  },
  {
    "id": "6bb6e592-e967-494a-919a-2349ce1a53da",
    "name": "IKEA Malm Desk",
    "price": "$69",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1518455027359-f3f816b1a238?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "White desk, very sturdy. A few minor scratches on the surface.",
    "sellerId": "c58ba22d-b16f-473f-8802-ccc8a724dbc2",
    "sellerName": "Casey Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_davis31",
    "condition": "New",
    "collegeId": "suny-1",
    "created_at": "2026-01-26T14:53:08.754458"
  },
  {
    "id": "b06ea6a7-5cac-479e-b26f-cd371d3bfec2",
    "name": "Floor Lamp with LED Bulbs",
    "price": "$26",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1555854817-5b2247a8175f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Bright lighting for the whole room. Modern design.",
    "sellerId": "7e54077d-4f6f-4fc7-8f5f-5a3cedc9c494",
    "sellerName": "Taylor Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_garcia74",
    "condition": "Like New",
    "collegeId": "suny-2",
    "created_at": "2026-02-05T14:53:08.754458"
  },
  {
    "id": "7350e57f-5871-434f-bb5f-83a75ca4599f",
    "name": "Organic Chemistry 8th Edition - Klein",
    "price": "$78",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1532187875605-186e6af8e37c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Includes the solutions manual. Very helpful for Pre-med students.",
    "sellerId": "7e54077d-4f6f-4fc7-8f5f-5a3cedc9c494",
    "sellerName": "Taylor Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_garcia74",
    "condition": "Fair",
    "collegeId": "suny-2",
    "created_at": "2026-02-06T14:53:08.754458"
  },
  {
    "id": "8a0e1352-81c0-4804-b9ba-310d71aa1bcf",
    "name": "Road Bike (54cm Frame)",
    "price": "$373",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Fast and reliable for commuting to class. Recently tuned up.",
    "sellerId": "9b85007d-a3b0-4ed9-b47c-5d841f87b0c5",
    "sellerName": "Jamie Jones",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_jones32",
    "condition": "New",
    "collegeId": "suny-2",
    "created_at": "2026-01-12T14:53:08.754458"
  },
  {
    "id": "6c494139-cd1e-45a2-b1e8-418b0aca6141",
    "name": "Wilson Tennis Racket",
    "price": "$73",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1617083281297-af33e8bf8939?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Lightweight and powerful. Includes a cover and some tennis balls.",
    "sellerId": "9b85007d-a3b0-4ed9-b47c-5d841f87b0c5",
    "sellerName": "Jamie Jones",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_jones32",
    "condition": "New",
    "collegeId": "suny-2",
    "created_at": "2026-01-20T14:53:08.754458"
  },
  {
    "id": "584bf226-d4c9-4611-b4d1-4fc0b77e8960",
    "name": "Dell UltraSharp 27 Monitor",
    "price": "$165",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for a dual monitor setup. No dead pixels, works perfectly.",
    "sellerId": "7e54077d-4f6f-4fc7-8f5f-5a3cedc9c494",
    "sellerName": "Taylor Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_garcia74",
    "condition": "Like New",
    "collegeId": "suny-2",
    "created_at": "2026-02-09T14:53:08.754458"
  },
  {
    "id": "5f546a46-4e9d-43e6-b56b-d82f6706a052",
    "name": "Sony WH-1000XM4 Headphones",
    "price": "$196",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Industry-leading noise canceling. Like new, barely used.",
    "sellerId": "7e54077d-4f6f-4fc7-8f5f-5a3cedc9c494",
    "sellerName": "Taylor Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_garcia74",
    "condition": "New",
    "collegeId": "suny-2",
    "created_at": "2026-01-20T14:53:08.754458"
  },
  {
    "id": "54901871-8661-4fbd-8040-ab33bae92b3b",
    "name": "Dorm Sized Mini Fridge",
    "price": "$77",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Keeps everything very cold. Clean and functional. Moving out so must go.",
    "sellerId": "7e54077d-4f6f-4fc7-8f5f-5a3cedc9c494",
    "sellerName": "Taylor Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_garcia74",
    "condition": "New",
    "collegeId": "suny-2",
    "created_at": "2026-01-16T14:53:08.754458"
  },
  {
    "id": "b7d733e0-50aa-4050-ac02-17706e5bfb86",
    "name": "University at Buffalo Hoodie",
    "price": "$20",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Super soft and comfortable. Perfect for representing school spirit.",
    "sellerId": "2c97eff4-17ec-428f-867e-3c660d86fdcf",
    "sellerName": "Jordan Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_rodriguez15",
    "condition": "Good",
    "collegeId": "suny-2",
    "created_at": "2026-01-18T14:53:08.754458"
  },
  {
    "id": "3a35f570-9ff6-4543-bb6d-ea79b348adad",
    "name": "Campbell Biology 12th Edition",
    "price": "$63",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Brand new, never opened. Dropped the class so I don't need it.",
    "sellerId": "7e54077d-4f6f-4fc7-8f5f-5a3cedc9c494",
    "sellerName": "Taylor Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_garcia74",
    "condition": "Good",
    "collegeId": "suny-2",
    "created_at": "2026-01-12T14:53:08.754458"
  },
  {
    "id": "cb4439f6-b2b8-479a-99e8-1949ed913e46",
    "name": "University at Buffalo Hoodie",
    "price": "$26",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Super soft and comfortable. Perfect for representing school spirit.",
    "sellerId": "2c97eff4-17ec-428f-867e-3c660d86fdcf",
    "sellerName": "Jordan Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_rodriguez15",
    "condition": "Like New",
    "collegeId": "suny-2",
    "created_at": "2026-01-18T14:53:08.754458"
  },
  {
    "id": "45624d4d-a6d8-4570-89ae-e8bf951a95e2",
    "name": "Sony WH-1000XM4 Headphones",
    "price": "$220",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Industry-leading noise canceling. Like new, barely used.",
    "sellerId": "2c8ad647-b7c0-47d2-88ce-ffa79b62f0fb",
    "sellerName": "Alex Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_smith30",
    "condition": "Fair",
    "collegeId": "suny-3",
    "created_at": "2026-01-19T14:53:08.754458"
  },
  {
    "id": "d3588f2d-b80b-494e-9173-70395396d0da",
    "name": "MacBook Air M2",
    "price": "$951",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "f38f7be0-9389-498f-905a-3419836887a2",
    "sellerName": "Chris Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_smith93",
    "condition": "New",
    "collegeId": "suny-3",
    "created_at": "2026-02-10T14:53:08.754458"
  },
  {
    "id": "1b4ee4ee-2290-457c-8d74-441c64138792",
    "name": "Levi's 501 Original Jeans",
    "price": "$48",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Classic fit, high quality denim. Like new condition.",
    "sellerId": "2c8ad647-b7c0-47d2-88ce-ffa79b62f0fb",
    "sellerName": "Alex Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_smith30",
    "condition": "Good",
    "collegeId": "suny-3",
    "created_at": "2026-01-20T14:53:08.754458"
  },
  {
    "id": "715dc1cd-67bd-49f3-8613-824a980c4f9b",
    "name": "Skateboard with Bearings",
    "price": "$60",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Good pop, clean deck. Perfect for getting around campus.",
    "sellerId": "2c8ad647-b7c0-47d2-88ce-ffa79b62f0fb",
    "sellerName": "Alex Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_smith30",
    "condition": "Fair",
    "collegeId": "suny-3",
    "created_at": "2026-02-09T14:53:08.754458"
  },
  {
    "id": "608a14c5-3189-4ddf-9ce6-d72074ad296e",
    "name": "North Face Nuptse Jacket",
    "price": "$170",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very warm for winter. Excellent condition, no tears or stains.",
    "sellerId": "a5c6bdd0-4cf9-428d-8efa-eb4824b933f5",
    "sellerName": "Riley Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_rodriguez50",
    "condition": "Like New",
    "collegeId": "suny-3",
    "created_at": "2026-01-16T14:53:08.754458"
  },
  {
    "id": "93210709-edab-4762-9f16-6661d4020416",
    "name": "Calculus: Early Transcendentals 9th Ed",
    "price": "$50",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1543004629-14207021ce0e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Slightly worn cover, but no highlights inside. Essential for STEM majors.",
    "sellerId": "f38f7be0-9389-498f-905a-3419836887a2",
    "sellerName": "Chris Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_smith93",
    "condition": "New",
    "collegeId": "suny-3",
    "created_at": "2026-01-29T14:53:08.754458"
  },
  {
    "id": "71b82338-68fa-47e6-ba92-0a90c2fc976e",
    "name": "Yoga Mat and Blocks",
    "price": "$38",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "High grip mat, barely used. Great for stress relief.",
    "sellerId": "a5c6bdd0-4cf9-428d-8efa-eb4824b933f5",
    "sellerName": "Riley Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_rodriguez50",
    "condition": "New",
    "collegeId": "suny-3",
    "created_at": "2026-01-21T14:53:08.754458"
  },
  {
    "id": "c9e160fc-ab27-499c-b491-1a974d8209ea",
    "name": "iPad Pro 11-inch",
    "price": "$548",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for note-taking. Battery health is 95%.",
    "sellerId": "f38f7be0-9389-498f-905a-3419836887a2",
    "sellerName": "Chris Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_smith93",
    "condition": "New",
    "collegeId": "suny-3",
    "created_at": "2026-02-05T14:53:08.754458"
  },
  {
    "id": "191b200a-1605-4386-9939-814fc526a705",
    "name": "IKEA Malm Desk",
    "price": "$66",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1518455027359-f3f816b1a238?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "White desk, very sturdy. A few minor scratches on the surface.",
    "sellerId": "a5c6bdd0-4cf9-428d-8efa-eb4824b933f5",
    "sellerName": "Riley Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_rodriguez50",
    "condition": "New",
    "collegeId": "suny-3",
    "created_at": "2026-01-28T14:53:08.754458"
  },
  {
    "id": "ea7dd47d-181d-4568-9fb8-0670b7e0b41f",
    "name": "Yoga Mat and Blocks",
    "price": "$35",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "High grip mat, barely used. Great for stress relief.",
    "sellerId": "a5c6bdd0-4cf9-428d-8efa-eb4824b933f5",
    "sellerName": "Riley Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_rodriguez50",
    "condition": "Like New",
    "collegeId": "suny-3",
    "created_at": "2026-01-29T14:53:08.754458"
  },
  {
    "id": "fc3ae00a-a00a-4334-ad58-50f9a4df38c5",
    "name": "Sony WH-1000XM4 Headphones",
    "price": "$223",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Industry-leading noise canceling. Like new, barely used.",
    "sellerId": "39f56fe4-5449-4164-b274-ea63d0f13f16",
    "sellerName": "Casey Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_rodriguez98",
    "condition": "Like New",
    "collegeId": "suny-4",
    "created_at": "2026-02-05T14:53:08.754458"
  },
  {
    "id": "dbbdc4f6-f118-4167-98fd-7d54b056d5a3",
    "name": "Floor Lamp with LED Bulbs",
    "price": "$21",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1555854817-5b2247a8175f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Bright lighting for the whole room. Modern design.",
    "sellerId": "2f3f7bae-3e2a-4d2c-b432-78d44377240f",
    "sellerName": "Taylor Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_davis50",
    "condition": "New",
    "collegeId": "suny-4",
    "created_at": "2026-01-24T14:53:08.754458"
  },
  {
    "id": "81566147-da73-421e-bcc0-e19531a85683",
    "name": "TI-84 Plus CE Graphing Calculator",
    "price": "$64",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Essential for math and science classes. Color screen, excellent condition.",
    "sellerId": "39f56fe4-5449-4164-b274-ea63d0f13f16",
    "sellerName": "Casey Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_rodriguez98",
    "condition": "Good",
    "collegeId": "suny-4",
    "created_at": "2026-02-08T14:53:08.754458"
  },
  {
    "id": "c803b82d-e1e8-49a0-ae9e-59a006884ed0",
    "name": "MacBook Air M2",
    "price": "$854",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "2f3f7bae-3e2a-4d2c-b432-78d44377240f",
    "sellerName": "Taylor Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_davis50",
    "condition": "Good",
    "collegeId": "suny-4",
    "created_at": "2026-02-10T14:53:08.754458"
  },
  {
    "id": "97736a6a-7150-4ddd-b1d6-6d0ed1f9206e",
    "name": "Dell UltraSharp 27 Monitor",
    "price": "$230",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for a dual monitor setup. No dead pixels, works perfectly.",
    "sellerId": "08ad1cd9-6984-4e19-8e67-db9fc195042d",
    "sellerName": "Morgan Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_williams99",
    "condition": "Like New",
    "collegeId": "suny-4",
    "created_at": "2026-02-03T14:53:08.754458"
  },
  {
    "id": "20706414-7956-4162-820e-0fb3ed9aae4f",
    "name": "Dorm Sized Mini Fridge",
    "price": "$57",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Keeps everything very cold. Clean and functional. Moving out so must go.",
    "sellerId": "2f3f7bae-3e2a-4d2c-b432-78d44377240f",
    "sellerName": "Taylor Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_davis50",
    "condition": "Like New",
    "collegeId": "suny-4",
    "created_at": "2026-01-12T14:53:08.754458"
  },
  {
    "id": "fa721333-7cc3-4bd1-8940-bf9d0c080541",
    "name": "Yoga Mat and Blocks",
    "price": "$20",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "High grip mat, barely used. Great for stress relief.",
    "sellerId": "2f3f7bae-3e2a-4d2c-b432-78d44377240f",
    "sellerName": "Taylor Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_davis50",
    "condition": "New",
    "collegeId": "suny-4",
    "created_at": "2026-01-24T14:53:08.754458"
  },
  {
    "id": "1e892564-2f5a-4fdc-b9db-58b2bb8f02a4",
    "name": "MacBook Air M2",
    "price": "$840",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "08ad1cd9-6984-4e19-8e67-db9fc195042d",
    "sellerName": "Morgan Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_williams99",
    "condition": "Good",
    "collegeId": "suny-4",
    "created_at": "2026-01-17T14:53:08.754458"
  },
  {
    "id": "2e11f803-5f0a-4b02-9c27-01a84dd16f0c",
    "name": "Organic Chemistry 8th Edition - Klein",
    "price": "$70",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1532187875605-186e6af8e37c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Includes the solutions manual. Very helpful for Pre-med students.",
    "sellerId": "39f56fe4-5449-4164-b274-ea63d0f13f16",
    "sellerName": "Casey Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_rodriguez98",
    "condition": "Like New",
    "collegeId": "suny-4",
    "created_at": "2026-02-08T14:53:08.754458"
  },
  {
    "id": "49506806-69d0-473a-84ca-6dfdc85a9885",
    "name": "Introduction to Algorithms (CLRS) 4th Ed",
    "price": "$83",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "The silver bible of CS. Barely used, perfect condition.",
    "sellerId": "08ad1cd9-6984-4e19-8e67-db9fc195042d",
    "sellerName": "Morgan Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_williams99",
    "condition": "New",
    "collegeId": "suny-4",
    "created_at": "2026-01-19T14:53:08.754458"
  },
  {
    "id": "66635b3d-e114-4191-8387-aa81d9a27935",
    "name": "Road Bike (54cm Frame)",
    "price": "$232",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Fast and reliable for commuting to class. Recently tuned up.",
    "sellerId": "d6bf6d78-a3b8-40e3-9395-bc682ce1cd26",
    "sellerName": "Morgan Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_rodriguez28",
    "condition": "New",
    "collegeId": "suny-5",
    "created_at": "2026-01-20T14:53:08.754458"
  },
  {
    "id": "aa43d752-77cc-4fea-a9a3-ce946416cfff",
    "name": "Floor Lamp with LED Bulbs",
    "price": "$19",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1555854817-5b2247a8175f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Bright lighting for the whole room. Modern design.",
    "sellerId": "e65fab57-2c03-44a0-9a44-ad54f4aae627",
    "sellerName": "Pat Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_brown52",
    "condition": "Like New",
    "collegeId": "suny-5",
    "created_at": "2026-02-05T14:53:08.754458"
  },
  {
    "id": "2a3e9c70-9574-4543-a156-6b74926ccf90",
    "name": "Cozy Area Rug (5x7)",
    "price": "$31",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1562512120-68199342713f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Soft and clean. Adds a lot of warmth to a dorm room.",
    "sellerId": "d21d4630-b20d-4ba4-ad27-f73d9b31bdba",
    "sellerName": "Pat Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_rodriguez63",
    "condition": "New",
    "collegeId": "suny-5",
    "created_at": "2026-02-06T14:53:08.754458"
  },
  {
    "id": "ffd633d1-a9e3-42c3-9a18-52da1de94bfc",
    "name": "Floor Lamp with LED Bulbs",
    "price": "$20",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1555854817-5b2247a8175f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Bright lighting for the whole room. Modern design.",
    "sellerId": "d21d4630-b20d-4ba4-ad27-f73d9b31bdba",
    "sellerName": "Pat Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_rodriguez63",
    "condition": "Good",
    "collegeId": "suny-5",
    "created_at": "2026-01-24T14:53:08.754458"
  },
  {
    "id": "a58482db-6ab1-4ff2-9034-d0099cfab216",
    "name": "Psychology: Themes and Variations",
    "price": "$47",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Used for one semester. Some highlighting in the first few chapters.",
    "sellerId": "d21d4630-b20d-4ba4-ad27-f73d9b31bdba",
    "sellerName": "Pat Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_rodriguez63",
    "condition": "Like New",
    "collegeId": "suny-5",
    "created_at": "2026-02-02T14:53:08.754458"
  },
  {
    "id": "bbb2a266-8c65-49a6-b785-8c6bda8a9508",
    "name": "Road Bike (54cm Frame)",
    "price": "$304",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Fast and reliable for commuting to class. Recently tuned up.",
    "sellerId": "d6bf6d78-a3b8-40e3-9395-bc682ce1cd26",
    "sellerName": "Morgan Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_rodriguez28",
    "condition": "New",
    "collegeId": "suny-5",
    "created_at": "2026-02-07T14:53:08.754458"
  },
  {
    "id": "76725c79-962c-4896-ad1e-b3f7ced31588",
    "name": "Organic Chemistry 8th Edition - Klein",
    "price": "$75",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1532187875605-186e6af8e37c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Includes the solutions manual. Very helpful for Pre-med students.",
    "sellerId": "e65fab57-2c03-44a0-9a44-ad54f4aae627",
    "sellerName": "Pat Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_brown52",
    "condition": "New",
    "collegeId": "suny-5",
    "created_at": "2026-02-06T14:53:08.754458"
  },
  {
    "id": "de4c6b81-14f6-4b40-bb4f-34b69202bf32",
    "name": "Psychology: Themes and Variations",
    "price": "$33",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Used for one semester. Some highlighting in the first few chapters.",
    "sellerId": "e65fab57-2c03-44a0-9a44-ad54f4aae627",
    "sellerName": "Pat Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_brown52",
    "condition": "Good",
    "collegeId": "suny-5",
    "created_at": "2026-01-25T14:53:08.756050"
  },
  {
    "id": "3ff7e51f-185b-4c9d-83a1-143073322ce2",
    "name": "Yoga Mat and Blocks",
    "price": "$28",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "High grip mat, barely used. Great for stress relief.",
    "sellerId": "d6bf6d78-a3b8-40e3-9395-bc682ce1cd26",
    "sellerName": "Morgan Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_rodriguez28",
    "condition": "Like New",
    "collegeId": "suny-5",
    "created_at": "2026-02-04T14:53:08.756050"
  },
  {
    "id": "0415a275-69c7-480e-8306-13b72e80136d",
    "name": "iPad Pro 11-inch",
    "price": "$550",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for note-taking. Battery health is 95%.",
    "sellerId": "d6bf6d78-a3b8-40e3-9395-bc682ce1cd26",
    "sellerName": "Morgan Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_rodriguez28",
    "condition": "Like New",
    "collegeId": "suny-5",
    "created_at": "2026-01-15T14:53:08.756050"
  },
  {
    "id": "51554d45-3f33-4f58-99ae-d605e799f24f",
    "name": "TI-84 Plus CE Graphing Calculator",
    "price": "$68",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Essential for math and science classes. Color screen, excellent condition.",
    "sellerId": "3cec1795-fd6a-4bbe-92b4-30ae215a2d45",
    "sellerName": "Casey Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_williams46",
    "condition": "New",
    "collegeId": "suny-6",
    "created_at": "2026-01-27T14:53:08.756050"
  },
  {
    "id": "5114b100-ed34-434a-aee4-cd93ca589d47",
    "name": "North Face Nuptse Jacket",
    "price": "$149",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very warm for winter. Excellent condition, no tears or stains.",
    "sellerId": "70d2f90a-4798-48b6-8249-c6b55280f9fc",
    "sellerName": "Casey Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_johnson90",
    "condition": "Fair",
    "collegeId": "suny-6",
    "created_at": "2026-01-22T14:53:08.756050"
  },
  {
    "id": "e6728dcc-9ec6-42cb-9de1-5c69ded62c3e",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$57",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "2d997670-2fa6-4548-8ea1-65a999f796cb",
    "sellerName": "Morgan Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_johnson26",
    "condition": "Good",
    "collegeId": "suny-6",
    "created_at": "2026-01-16T14:53:08.756050"
  },
  {
    "id": "a5d9bed2-8fdd-45ae-a06f-e4a9749ad32c",
    "name": "Campbell Biology 12th Edition",
    "price": "$73",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Brand new, never opened. Dropped the class so I don't need it.",
    "sellerId": "3cec1795-fd6a-4bbe-92b4-30ae215a2d45",
    "sellerName": "Casey Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_williams46",
    "condition": "Good",
    "collegeId": "suny-6",
    "created_at": "2026-01-23T14:53:08.756050"
  },
  {
    "id": "3d80cd36-87b5-485d-a35d-cb3afe1f1617",
    "name": "MacBook Air M2",
    "price": "$880",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "70d2f90a-4798-48b6-8249-c6b55280f9fc",
    "sellerName": "Casey Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_johnson90",
    "condition": "Good",
    "collegeId": "suny-6",
    "created_at": "2026-02-01T14:53:08.756050"
  },
  {
    "id": "8ccece93-ce99-45f7-a3bb-48b241d7797d",
    "name": "TI-84 Plus CE Graphing Calculator",
    "price": "$73",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Essential for math and science classes. Color screen, excellent condition.",
    "sellerId": "2d997670-2fa6-4548-8ea1-65a999f796cb",
    "sellerName": "Morgan Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_johnson26",
    "condition": "Good",
    "collegeId": "suny-6",
    "created_at": "2026-01-22T14:53:08.756050"
  },
  {
    "id": "d8ab7dab-2a1d-432d-ba65-e75c23b03d5d",
    "name": "North Face Nuptse Jacket",
    "price": "$171",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very warm for winter. Excellent condition, no tears or stains.",
    "sellerId": "2d997670-2fa6-4548-8ea1-65a999f796cb",
    "sellerName": "Morgan Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_johnson26",
    "condition": "New",
    "collegeId": "suny-6",
    "created_at": "2026-02-06T14:53:08.756050"
  },
  {
    "id": "b001e047-b7ac-49ab-85a1-b4c61be3af0c",
    "name": "Introduction to Algorithms (CLRS) 4th Ed",
    "price": "$77",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "The silver bible of CS. Barely used, perfect condition.",
    "sellerId": "2d997670-2fa6-4548-8ea1-65a999f796cb",
    "sellerName": "Morgan Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_johnson26",
    "condition": "Fair",
    "collegeId": "suny-6",
    "created_at": "2026-02-10T14:53:08.756050"
  },
  {
    "id": "d3a8ea9b-867f-4a9b-95e3-c6d0f4b87d9a",
    "name": "Patagonia Better Sweater Fleece",
    "price": "$87",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very cozy and breathable. Great for layering in the library.",
    "sellerId": "3cec1795-fd6a-4bbe-92b4-30ae215a2d45",
    "sellerName": "Casey Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_williams46",
    "condition": "Fair",
    "collegeId": "suny-6",
    "created_at": "2026-02-01T14:53:08.756050"
  },
  {
    "id": "a4433439-a4f8-4925-ab50-63f4cb75c1a3",
    "name": "Cozy Area Rug (5x7)",
    "price": "$38",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1562512120-68199342713f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Soft and clean. Adds a lot of warmth to a dorm room.",
    "sellerId": "2d997670-2fa6-4548-8ea1-65a999f796cb",
    "sellerName": "Morgan Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_johnson26",
    "condition": "Good",
    "collegeId": "suny-6",
    "created_at": "2026-02-02T14:53:08.756050"
  },
  {
    "id": "2fe2a753-ba03-4cd6-a386-5015e6222853",
    "name": "Organic Chemistry 8th Edition - Klein",
    "price": "$74",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1532187875605-186e6af8e37c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Includes the solutions manual. Very helpful for Pre-med students.",
    "sellerId": "c30cab1c-b373-49db-a6f8-563c33d1cc9a",
    "sellerName": "Casey Martinez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_martinez38",
    "condition": "New",
    "collegeId": "suny-7",
    "created_at": "2026-01-25T14:53:08.756050"
  },
  {
    "id": "0dd87242-2522-470d-ae7d-6b9cdf3c879d",
    "name": "TI-84 Plus CE Graphing Calculator",
    "price": "$61",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Essential for math and science classes. Color screen, excellent condition.",
    "sellerId": "c30cab1c-b373-49db-a6f8-563c33d1cc9a",
    "sellerName": "Casey Martinez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_martinez38",
    "condition": "Like New",
    "collegeId": "suny-7",
    "created_at": "2026-02-01T14:53:08.756050"
  },
  {
    "id": "e46f9b3d-f9a3-4dcf-8a17-505ca6c0bff6",
    "name": "Calculus: Early Transcendentals 9th Ed",
    "price": "$70",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1543004629-14207021ce0e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Slightly worn cover, but no highlights inside. Essential for STEM majors.",
    "sellerId": "410a5143-8fe2-47d6-86bf-dbc6421d9e5f",
    "sellerName": "Chris Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_smith21",
    "condition": "New",
    "collegeId": "suny-7",
    "created_at": "2026-02-10T14:53:08.756050"
  },
  {
    "id": "5760aac9-b800-42cb-82ed-84b8e6872e24",
    "name": "Road Bike (54cm Frame)",
    "price": "$223",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Fast and reliable for commuting to class. Recently tuned up.",
    "sellerId": "c97eef85-4c8f-40d2-9730-4ef76d7696ac",
    "sellerName": "Jordan Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_davis85",
    "condition": "Fair",
    "collegeId": "suny-7",
    "created_at": "2026-02-10T14:53:08.756050"
  },
  {
    "id": "f43e0018-3b3f-436a-8f11-0bf1dd24fc35",
    "name": "MacBook Air M2",
    "price": "$828",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "c97eef85-4c8f-40d2-9730-4ef76d7696ac",
    "sellerName": "Jordan Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_davis85",
    "condition": "Good",
    "collegeId": "suny-7",
    "created_at": "2026-01-24T14:53:08.756050"
  },
  {
    "id": "fd7bca93-43bb-4466-805a-3a49a415bacc",
    "name": "Calculus: Early Transcendentals 9th Ed",
    "price": "$66",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1543004629-14207021ce0e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Slightly worn cover, but no highlights inside. Essential for STEM majors.",
    "sellerId": "410a5143-8fe2-47d6-86bf-dbc6421d9e5f",
    "sellerName": "Chris Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_smith21",
    "condition": "New",
    "collegeId": "suny-7",
    "created_at": "2026-02-10T14:53:08.756050"
  },
  {
    "id": "572137b8-4667-45e6-a3fb-ac03c94bab33",
    "name": "Dell UltraSharp 27 Monitor",
    "price": "$179",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for a dual monitor setup. No dead pixels, works perfectly.",
    "sellerId": "c30cab1c-b373-49db-a6f8-563c33d1cc9a",
    "sellerName": "Casey Martinez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_martinez38",
    "condition": "Fair",
    "collegeId": "suny-7",
    "created_at": "2026-02-04T14:53:08.756050"
  },
  {
    "id": "4b641e48-912f-4c57-9e78-601391871494",
    "name": "TI-84 Plus CE Graphing Calculator",
    "price": "$80",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Essential for math and science classes. Color screen, excellent condition.",
    "sellerId": "c30cab1c-b373-49db-a6f8-563c33d1cc9a",
    "sellerName": "Casey Martinez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_martinez38",
    "condition": "Like New",
    "collegeId": "suny-7",
    "created_at": "2026-01-24T14:53:08.756050"
  },
  {
    "id": "aafe2d00-9d99-488d-ae6e-0b2a5b61442b",
    "name": "MacBook Air M2",
    "price": "$870",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "c97eef85-4c8f-40d2-9730-4ef76d7696ac",
    "sellerName": "Jordan Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_davis85",
    "condition": "Fair",
    "collegeId": "suny-7",
    "created_at": "2026-01-27T14:53:08.756050"
  },
  {
    "id": "ec23f23d-7a02-4619-83bd-7b4573eed39a",
    "name": "IKEA Malm Desk",
    "price": "$77",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1518455027359-f3f816b1a238?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "White desk, very sturdy. A few minor scratches on the surface.",
    "sellerId": "c97eef85-4c8f-40d2-9730-4ef76d7696ac",
    "sellerName": "Jordan Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_davis85",
    "condition": "Fair",
    "collegeId": "suny-7",
    "created_at": "2026-01-12T14:53:08.756050"
  },
  {
    "id": "ac8b2b6e-8f7b-4ed3-b7a2-d84311b60928",
    "name": "Wilson Tennis Racket",
    "price": "$45",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1617083281297-af33e8bf8939?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Lightweight and powerful. Includes a cover and some tennis balls.",
    "sellerId": "47a1f763-b5b9-4b09-82ee-ff9b95d61546",
    "sellerName": "Sam Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_brown33",
    "condition": "Like New",
    "collegeId": "suny-8",
    "created_at": "2026-01-24T14:53:08.756050"
  },
  {
    "id": "6300b1e1-28a7-484c-99d8-e565a9c7bc9c",
    "name": "MacBook Air M2",
    "price": "$916",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "47a1f763-b5b9-4b09-82ee-ff9b95d61546",
    "sellerName": "Sam Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_brown33",
    "condition": "Good",
    "collegeId": "suny-8",
    "created_at": "2026-01-14T14:53:08.756050"
  },
  {
    "id": "a4f23d91-c191-428b-804b-524ffedeb9c1",
    "name": "Floor Lamp with LED Bulbs",
    "price": "$19",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1555854817-5b2247a8175f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Bright lighting for the whole room. Modern design.",
    "sellerId": "5233ee2d-7a98-468b-810e-cbb020f05ddf",
    "sellerName": "Taylor Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_miller41",
    "condition": "Like New",
    "collegeId": "suny-8",
    "created_at": "2026-01-12T14:53:08.756050"
  },
  {
    "id": "8cae1f2e-97ce-4c4d-9b80-8516a02d97d4",
    "name": "North Face Nuptse Jacket",
    "price": "$149",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very warm for winter. Excellent condition, no tears or stains.",
    "sellerId": "47a1f763-b5b9-4b09-82ee-ff9b95d61546",
    "sellerName": "Sam Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_brown33",
    "condition": "Like New",
    "collegeId": "suny-8",
    "created_at": "2026-01-18T14:53:08.756050"
  },
  {
    "id": "2a049e8a-a3f8-4bfb-afa1-1a33c8d75448",
    "name": "IKEA Malm Desk",
    "price": "$63",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1518455027359-f3f816b1a238?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "White desk, very sturdy. A few minor scratches on the surface.",
    "sellerId": "9147992b-10b5-4488-98e1-ad6d7bb09a43",
    "sellerName": "Pat Martinez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_martinez62",
    "condition": "Good",
    "collegeId": "suny-8",
    "created_at": "2026-01-25T14:53:08.756050"
  },
  {
    "id": "274b3418-0a8c-4742-b134-b312efa2036e",
    "name": "Organic Chemistry 8th Edition - Klein",
    "price": "$65",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1532187875605-186e6af8e37c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Includes the solutions manual. Very helpful for Pre-med students.",
    "sellerId": "47a1f763-b5b9-4b09-82ee-ff9b95d61546",
    "sellerName": "Sam Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_brown33",
    "condition": "Fair",
    "collegeId": "suny-8",
    "created_at": "2026-01-12T14:53:08.756050"
  },
  {
    "id": "b7fa4503-fb7e-4402-9cc5-86fa7aeee383",
    "name": "Organic Chemistry 8th Edition - Klein",
    "price": "$64",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1532187875605-186e6af8e37c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Includes the solutions manual. Very helpful for Pre-med students.",
    "sellerId": "5233ee2d-7a98-468b-810e-cbb020f05ddf",
    "sellerName": "Taylor Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_miller41",
    "condition": "Like New",
    "collegeId": "suny-8",
    "created_at": "2026-02-03T14:53:08.756050"
  },
  {
    "id": "859b3ef8-c89c-42c7-bb6b-950489bb70dd",
    "name": "Psychology: Themes and Variations",
    "price": "$37",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Used for one semester. Some highlighting in the first few chapters.",
    "sellerId": "9147992b-10b5-4488-98e1-ad6d7bb09a43",
    "sellerName": "Pat Martinez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_martinez62",
    "condition": "New",
    "collegeId": "suny-8",
    "created_at": "2026-01-19T14:53:08.756050"
  },
  {
    "id": "e3c6ce15-55f4-4617-8c15-67283f4e921c",
    "name": "Introduction to Algorithms (CLRS) 4th Ed",
    "price": "$99",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "The silver bible of CS. Barely used, perfect condition.",
    "sellerId": "9147992b-10b5-4488-98e1-ad6d7bb09a43",
    "sellerName": "Pat Martinez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_martinez62",
    "condition": "New",
    "collegeId": "suny-8",
    "created_at": "2026-02-05T14:53:08.756050"
  },
  {
    "id": "412453a7-2614-4918-bb73-4cc702327972",
    "name": "Organic Chemistry 8th Edition - Klein",
    "price": "$78",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1532187875605-186e6af8e37c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Includes the solutions manual. Very helpful for Pre-med students.",
    "sellerId": "9147992b-10b5-4488-98e1-ad6d7bb09a43",
    "sellerName": "Pat Martinez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_martinez62",
    "condition": "New",
    "collegeId": "suny-8",
    "created_at": "2026-02-01T14:53:08.756050"
  },
  {
    "id": "a1cce1d9-458c-428f-91fc-276416a303b6",
    "name": "Skateboard with Bearings",
    "price": "$42",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Good pop, clean deck. Perfect for getting around campus.",
    "sellerId": "4109f42e-33c8-4ec7-9068-5e5a1c246022",
    "sellerName": "Sam Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_rodriguez97",
    "condition": "Good",
    "collegeId": "suny-9",
    "created_at": "2026-02-02T14:53:08.756050"
  },
  {
    "id": "87b52c44-261f-4f8a-9c93-bd0eaee62a53",
    "name": "Introduction to Algorithms (CLRS) 4th Ed",
    "price": "$85",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "The silver bible of CS. Barely used, perfect condition.",
    "sellerId": "4109f42e-33c8-4ec7-9068-5e5a1c246022",
    "sellerName": "Sam Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_rodriguez97",
    "condition": "New",
    "collegeId": "suny-9",
    "created_at": "2026-01-19T14:53:08.756050"
  },
  {
    "id": "14b25163-35f8-44a1-8edb-31fac5019fa0",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$44",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "6ea78b44-58a5-4a74-b53b-34eb2d6b8ca7",
    "sellerName": "Morgan Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_davis45",
    "condition": "Good",
    "collegeId": "suny-9",
    "created_at": "2026-01-30T14:53:08.756050"
  },
  {
    "id": "6b7c8d17-f8c1-4949-a951-4541facd7ae9",
    "name": "Introduction to Algorithms (CLRS) 4th Ed",
    "price": "$95",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "The silver bible of CS. Barely used, perfect condition.",
    "sellerId": "f95bb518-b52f-494a-b3e0-c43524e88bdb",
    "sellerName": "Jordan Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_williams58",
    "condition": "New",
    "collegeId": "suny-9",
    "created_at": "2026-01-22T14:53:08.756050"
  },
  {
    "id": "5f797051-8920-433e-86f4-f3f5b226f4ee",
    "name": "Ergonomic Office Chair",
    "price": "$74",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1505797149-43c0ec70297f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Adjustable height and lumbar support. Crucial for long study sessions.",
    "sellerId": "6ea78b44-58a5-4a74-b53b-34eb2d6b8ca7",
    "sellerName": "Morgan Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_davis45",
    "condition": "New",
    "collegeId": "suny-9",
    "created_at": "2026-01-19T14:53:08.756050"
  },
  {
    "id": "11e2a6dd-2849-4b79-b558-777f6a55eeb9",
    "name": "Calculus: Early Transcendentals 9th Ed",
    "price": "$49",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1543004629-14207021ce0e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Slightly worn cover, but no highlights inside. Essential for STEM majors.",
    "sellerId": "6ea78b44-58a5-4a74-b53b-34eb2d6b8ca7",
    "sellerName": "Morgan Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_davis45",
    "condition": "Like New",
    "collegeId": "suny-9",
    "created_at": "2026-01-29T14:53:08.756050"
  },
  {
    "id": "09f85bc5-d346-4990-b9db-225a74d02b95",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$53",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "6ea78b44-58a5-4a74-b53b-34eb2d6b8ca7",
    "sellerName": "Morgan Davis",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan_davis45",
    "condition": "New",
    "collegeId": "suny-9",
    "created_at": "2026-01-24T14:53:08.756050"
  },
  {
    "id": "b2242dbc-51e4-4f2c-a4ce-5033298ee0c5",
    "name": "Cozy Area Rug (5x7)",
    "price": "$36",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1562512120-68199342713f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Soft and clean. Adds a lot of warmth to a dorm room.",
    "sellerId": "f95bb518-b52f-494a-b3e0-c43524e88bdb",
    "sellerName": "Jordan Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_williams58",
    "condition": "Good",
    "collegeId": "suny-9",
    "created_at": "2026-01-24T14:53:08.756050"
  },
  {
    "id": "1084a0e6-cc46-4679-97f2-0c789b5987b1",
    "name": "Yoga Mat and Blocks",
    "price": "$21",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "High grip mat, barely used. Great for stress relief.",
    "sellerId": "4109f42e-33c8-4ec7-9068-5e5a1c246022",
    "sellerName": "Sam Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_rodriguez97",
    "condition": "New",
    "collegeId": "suny-9",
    "created_at": "2026-01-29T14:53:08.756050"
  },
  {
    "id": "0c7fb568-5b79-4af2-a089-a6add362de5c",
    "name": "Road Bike (54cm Frame)",
    "price": "$314",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Fast and reliable for commuting to class. Recently tuned up.",
    "sellerId": "4109f42e-33c8-4ec7-9068-5e5a1c246022",
    "sellerName": "Sam Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_rodriguez97",
    "condition": "Like New",
    "collegeId": "suny-9",
    "created_at": "2026-02-09T14:53:08.756050"
  },
  {
    "id": "8e75def2-1275-404a-b142-b9e351dd46bf",
    "name": "North Face Nuptse Jacket",
    "price": "$128",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very warm for winter. Excellent condition, no tears or stains.",
    "sellerId": "85e89fbf-aa0f-4f06-9e52-6a57aed66fdb",
    "sellerName": "Chris Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_garcia12",
    "condition": "Fair",
    "collegeId": "suny-10",
    "created_at": "2026-02-04T14:53:08.756050"
  },
  {
    "id": "e6389703-d3fc-47e7-99da-736035c9f455",
    "name": "Dell UltraSharp 27 Monitor",
    "price": "$214",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for a dual monitor setup. No dead pixels, works perfectly.",
    "sellerId": "27c2bae8-3567-477b-beb4-5fc80a65c6b6",
    "sellerName": "Riley Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_smith94",
    "condition": "Good",
    "collegeId": "suny-10",
    "created_at": "2026-01-13T14:53:08.756050"
  },
  {
    "id": "14e512d6-ef3f-4464-afb8-492458802a58",
    "name": "Dell UltraSharp 27 Monitor",
    "price": "$161",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for a dual monitor setup. No dead pixels, works perfectly.",
    "sellerId": "85e89fbf-aa0f-4f06-9e52-6a57aed66fdb",
    "sellerName": "Chris Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_garcia12",
    "condition": "Good",
    "collegeId": "suny-10",
    "created_at": "2026-01-25T14:53:08.756050"
  },
  {
    "id": "01e7b9be-744c-4ded-afee-44825435a2f3",
    "name": "Patagonia Better Sweater Fleece",
    "price": "$75",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very cozy and breathable. Great for layering in the library.",
    "sellerId": "27c2bae8-3567-477b-beb4-5fc80a65c6b6",
    "sellerName": "Riley Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_smith94",
    "condition": "Good",
    "collegeId": "suny-10",
    "created_at": "2026-01-20T14:53:08.756050"
  },
  {
    "id": "85207a10-26ae-4bae-bc9e-815ec4663d8a",
    "name": "Dorm Sized Mini Fridge",
    "price": "$67",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Keeps everything very cold. Clean and functional. Moving out so must go.",
    "sellerId": "3d1346e1-9c94-4354-8ea8-060bdbf5c2f9",
    "sellerName": "Casey Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_johnson66",
    "condition": "New",
    "collegeId": "suny-10",
    "created_at": "2026-01-16T14:53:08.756050"
  },
  {
    "id": "22bff10a-84ef-4d0c-95f2-41cf296dbc07",
    "name": "Wilson Tennis Racket",
    "price": "$75",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1617083281297-af33e8bf8939?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Lightweight and powerful. Includes a cover and some tennis balls.",
    "sellerId": "3d1346e1-9c94-4354-8ea8-060bdbf5c2f9",
    "sellerName": "Casey Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_johnson66",
    "condition": "Good",
    "collegeId": "suny-10",
    "created_at": "2026-01-31T14:53:08.756050"
  },
  {
    "id": "46248925-a62c-45de-945d-49f43ad723ce",
    "name": "Levi's 501 Original Jeans",
    "price": "$39",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Classic fit, high quality denim. Like new condition.",
    "sellerId": "27c2bae8-3567-477b-beb4-5fc80a65c6b6",
    "sellerName": "Riley Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_smith94",
    "condition": "New",
    "collegeId": "suny-10",
    "created_at": "2026-01-11T14:53:08.756050"
  },
  {
    "id": "e9829696-9f74-46d1-b4ec-7a0ad8f168f7",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$32",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "85e89fbf-aa0f-4f06-9e52-6a57aed66fdb",
    "sellerName": "Chris Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_garcia12",
    "condition": "Fair",
    "collegeId": "suny-10",
    "created_at": "2026-02-06T14:53:08.756050"
  },
  {
    "id": "974b2c1e-bb38-4483-be24-ddba1b0c943d",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$40",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "3d1346e1-9c94-4354-8ea8-060bdbf5c2f9",
    "sellerName": "Casey Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_johnson66",
    "condition": "Good",
    "collegeId": "suny-10",
    "created_at": "2026-01-19T14:53:08.756050"
  },
  {
    "id": "bce4a4af-2b60-4e1f-afd9-282fafa07177",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$49",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "3d1346e1-9c94-4354-8ea8-060bdbf5c2f9",
    "sellerName": "Casey Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_johnson66",
    "condition": "Fair",
    "collegeId": "suny-10",
    "created_at": "2026-01-24T14:53:08.756050"
  },
  {
    "id": "830651b3-e02f-402b-92cc-eb7d4e2f6682",
    "name": "iPad Pro 11-inch",
    "price": "$591",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for note-taking. Battery health is 95%.",
    "sellerId": "b20aba05-9ca8-4c47-88eb-c175f5085b2f",
    "sellerName": "Alex Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_garcia78",
    "condition": "Like New",
    "collegeId": "la-1",
    "created_at": "2026-02-03T14:53:08.756050"
  },
  {
    "id": "14d3627b-2852-4942-8707-03f2cbb2b91f",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$49",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "b20aba05-9ca8-4c47-88eb-c175f5085b2f",
    "sellerName": "Alex Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_garcia78",
    "condition": "Like New",
    "collegeId": "la-1",
    "created_at": "2026-02-10T14:53:08.756050"
  },
  {
    "id": "d762c45a-e6f1-47bc-8aa6-cd1bf42b8746",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$41",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "b20aba05-9ca8-4c47-88eb-c175f5085b2f",
    "sellerName": "Alex Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_garcia78",
    "condition": "Good",
    "collegeId": "la-1",
    "created_at": "2026-02-09T14:53:08.756050"
  },
  {
    "id": "7c562135-be24-4928-8be2-7159fe09d223",
    "name": "Wilson Tennis Racket",
    "price": "$66",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1617083281297-af33e8bf8939?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Lightweight and powerful. Includes a cover and some tennis balls.",
    "sellerId": "786287e1-bda2-4f1e-9bb9-32dd02e3fc34",
    "sellerName": "Sam Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_miller32",
    "condition": "Good",
    "collegeId": "la-1",
    "created_at": "2026-01-13T14:53:08.756050"
  },
  {
    "id": "b8047200-77ad-4240-885c-9d43e5b5cda7",
    "name": "North Face Nuptse Jacket",
    "price": "$194",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very warm for winter. Excellent condition, no tears or stains.",
    "sellerId": "aa2d7c68-7588-40d6-8381-8b025b39b919",
    "sellerName": "Casey Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_brown16",
    "condition": "Good",
    "collegeId": "la-1",
    "created_at": "2026-01-12T14:53:08.756050"
  },
  {
    "id": "959819c6-618f-4881-8f84-ac67bc3282db",
    "name": "Calculus: Early Transcendentals 9th Ed",
    "price": "$62",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1543004629-14207021ce0e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Slightly worn cover, but no highlights inside. Essential for STEM majors.",
    "sellerId": "786287e1-bda2-4f1e-9bb9-32dd02e3fc34",
    "sellerName": "Sam Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_miller32",
    "condition": "Good",
    "collegeId": "la-1",
    "created_at": "2026-02-01T14:53:08.756050"
  },
  {
    "id": "7b06a796-3a33-41ff-935c-99fb822857af",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$48",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "aa2d7c68-7588-40d6-8381-8b025b39b919",
    "sellerName": "Casey Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_brown16",
    "condition": "Fair",
    "collegeId": "la-1",
    "created_at": "2026-01-27T14:53:08.756050"
  },
  {
    "id": "33541a40-643e-4f5c-8c47-8dc9b2a0aa24",
    "name": "Wilson Tennis Racket",
    "price": "$72",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1617083281297-af33e8bf8939?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Lightweight and powerful. Includes a cover and some tennis balls.",
    "sellerId": "aa2d7c68-7588-40d6-8381-8b025b39b919",
    "sellerName": "Casey Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_brown16",
    "condition": "New",
    "collegeId": "la-1",
    "created_at": "2026-02-08T14:53:08.756050"
  },
  {
    "id": "6ab7a2ac-bbe4-4ad7-8e91-608f280ade22",
    "name": "Floor Lamp with LED Bulbs",
    "price": "$21",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1555854817-5b2247a8175f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Bright lighting for the whole room. Modern design.",
    "sellerId": "b20aba05-9ca8-4c47-88eb-c175f5085b2f",
    "sellerName": "Alex Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_garcia78",
    "condition": "New",
    "collegeId": "la-1",
    "created_at": "2026-01-26T14:53:08.756050"
  },
  {
    "id": "8aa50a7c-7581-4fa9-a923-37fa80d21c14",
    "name": "TI-84 Plus CE Graphing Calculator",
    "price": "$73",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Essential for math and science classes. Color screen, excellent condition.",
    "sellerId": "aa2d7c68-7588-40d6-8381-8b025b39b919",
    "sellerName": "Casey Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_brown16",
    "condition": "New",
    "collegeId": "la-1",
    "created_at": "2026-01-13T14:53:08.756050"
  },
  {
    "id": "d1b6c06b-cf22-4aa8-8594-d8a08561f923",
    "name": "Calculus: Early Transcendentals 9th Ed",
    "price": "$70",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1543004629-14207021ce0e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Slightly worn cover, but no highlights inside. Essential for STEM majors.",
    "sellerId": "40562dc4-4628-4056-8c1c-31303ecc325c",
    "sellerName": "Casey Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_smith95",
    "condition": "Like New",
    "collegeId": "la-2",
    "created_at": "2026-01-16T14:53:08.756050"
  },
  {
    "id": "e5b619ea-b4bf-4b99-a02a-a109ded77610",
    "name": "Patagonia Better Sweater Fleece",
    "price": "$76",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very cozy and breathable. Great for layering in the library.",
    "sellerId": "916f8769-c129-4dbc-8d38-750992f00299",
    "sellerName": "Jamie Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_rodriguez56",
    "condition": "Fair",
    "collegeId": "la-2",
    "created_at": "2026-01-28T14:53:08.756050"
  },
  {
    "id": "c96879b3-250d-447a-ac91-26c8d2f8964c",
    "name": "Organic Chemistry 8th Edition - Klein",
    "price": "$59",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1532187875605-186e6af8e37c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Includes the solutions manual. Very helpful for Pre-med students.",
    "sellerId": "916f8769-c129-4dbc-8d38-750992f00299",
    "sellerName": "Jamie Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_rodriguez56",
    "condition": "Fair",
    "collegeId": "la-2",
    "created_at": "2026-01-23T14:53:08.756050"
  },
  {
    "id": "fa3f0cf1-d3af-4f49-be65-28cef0e64483",
    "name": "Nike Air Force 1s (Size 10)",
    "price": "$72",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Classic white sneakers. Worn a few times, still look very fresh.",
    "sellerId": "916f8769-c129-4dbc-8d38-750992f00299",
    "sellerName": "Jamie Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_rodriguez56",
    "condition": "New",
    "collegeId": "la-2",
    "created_at": "2026-01-27T14:53:08.756050"
  },
  {
    "id": "9d1b7463-7e88-46d6-b6cc-459a2f7d1aee",
    "name": "Skateboard with Bearings",
    "price": "$54",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Good pop, clean deck. Perfect for getting around campus.",
    "sellerId": "916f8769-c129-4dbc-8d38-750992f00299",
    "sellerName": "Jamie Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_rodriguez56",
    "condition": "Good",
    "collegeId": "la-2",
    "created_at": "2026-02-03T14:53:08.756050"
  },
  {
    "id": "096bdfb8-4b71-4ec1-a808-8f4d5b3ad7a1",
    "name": "Patagonia Better Sweater Fleece",
    "price": "$64",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very cozy and breathable. Great for layering in the library.",
    "sellerId": "916f8769-c129-4dbc-8d38-750992f00299",
    "sellerName": "Jamie Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_rodriguez56",
    "condition": "Good",
    "collegeId": "la-2",
    "created_at": "2026-01-28T14:53:08.756050"
  },
  {
    "id": "9152b6c7-0b8c-4996-a889-96c872d82d7b",
    "name": "Caltech Hoodie",
    "price": "$25",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Super soft and comfortable. Perfect for representing school spirit.",
    "sellerId": "916f8769-c129-4dbc-8d38-750992f00299",
    "sellerName": "Jamie Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_rodriguez56",
    "condition": "Like New",
    "collegeId": "la-2",
    "created_at": "2026-02-05T14:53:08.756050"
  },
  {
    "id": "5f89123e-89b4-4dec-95bc-38dcd92a3c9d",
    "name": "Road Bike (54cm Frame)",
    "price": "$338",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Fast and reliable for commuting to class. Recently tuned up.",
    "sellerId": "9dd08ae6-ba79-4747-9658-05de99d049ab",
    "sellerName": "Jamie Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_brown82",
    "condition": "Like New",
    "collegeId": "la-2",
    "created_at": "2026-02-02T14:53:08.756050"
  },
  {
    "id": "061d8b33-824a-4e0a-bca7-107f419bc354",
    "name": "Yoga Mat and Blocks",
    "price": "$29",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "High grip mat, barely used. Great for stress relief.",
    "sellerId": "40562dc4-4628-4056-8c1c-31303ecc325c",
    "sellerName": "Casey Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_smith95",
    "condition": "Good",
    "collegeId": "la-2",
    "created_at": "2026-01-27T14:53:08.756050"
  },
  {
    "id": "02d01957-922c-484a-9353-7512e69d0f75",
    "name": "IKEA Malm Desk",
    "price": "$52",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1518455027359-f3f816b1a238?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "White desk, very sturdy. A few minor scratches on the surface.",
    "sellerId": "9dd08ae6-ba79-4747-9658-05de99d049ab",
    "sellerName": "Jamie Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_brown82",
    "condition": "Good",
    "collegeId": "la-2",
    "created_at": "2026-01-28T14:53:08.756050"
  },
  {
    "id": "c234b520-acfb-4178-9a99-28f75178c07e",
    "name": "Road Bike (54cm Frame)",
    "price": "$325",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Fast and reliable for commuting to class. Recently tuned up.",
    "sellerId": "1afb16c5-fe3c-47aa-8ebb-0b8159615e65",
    "sellerName": "Taylor Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_williams98",
    "condition": "Good",
    "collegeId": "la-3",
    "created_at": "2026-02-04T14:53:08.756050"
  },
  {
    "id": "369b061d-3013-4fc9-ae48-d6111fd9a83f",
    "name": "Nike Air Force 1s (Size 10)",
    "price": "$51",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Classic white sneakers. Worn a few times, still look very fresh.",
    "sellerId": "eb8c9774-2ae5-4eef-9439-42c36e5c6919",
    "sellerName": "Riley Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_smith93",
    "condition": "Fair",
    "collegeId": "la-3",
    "created_at": "2026-01-17T14:53:08.756050"
  },
  {
    "id": "9f9f95cf-d999-48c6-8769-410e359c3d1b",
    "name": "Nike Air Force 1s (Size 10)",
    "price": "$63",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Classic white sneakers. Worn a few times, still look very fresh.",
    "sellerId": "48bd511c-5e79-4c1f-be00-382f90c8f279",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson57",
    "condition": "New",
    "collegeId": "la-3",
    "created_at": "2026-01-24T14:53:08.756050"
  },
  {
    "id": "315dca95-4962-4d2e-b796-f78f23917cfb",
    "name": "Loyola Marymount University Hoodie",
    "price": "$31",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Super soft and comfortable. Perfect for representing school spirit.",
    "sellerId": "1afb16c5-fe3c-47aa-8ebb-0b8159615e65",
    "sellerName": "Taylor Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_williams98",
    "condition": "Like New",
    "collegeId": "la-3",
    "created_at": "2026-01-16T14:53:08.756050"
  },
  {
    "id": "5a1522a8-49b6-4031-9fd0-3fca7129de9f",
    "name": "Calculus: Early Transcendentals 9th Ed",
    "price": "$64",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1543004629-14207021ce0e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Slightly worn cover, but no highlights inside. Essential for STEM majors.",
    "sellerId": "1afb16c5-fe3c-47aa-8ebb-0b8159615e65",
    "sellerName": "Taylor Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_williams98",
    "condition": "Like New",
    "collegeId": "la-3",
    "created_at": "2026-01-17T14:53:08.756050"
  },
  {
    "id": "844a17cf-cdcf-4abf-afe8-a49aa92dd397",
    "name": "Levi's 501 Original Jeans",
    "price": "$47",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Classic fit, high quality denim. Like new condition.",
    "sellerId": "48bd511c-5e79-4c1f-be00-382f90c8f279",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson57",
    "condition": "Fair",
    "collegeId": "la-3",
    "created_at": "2026-01-11T14:53:08.756050"
  },
  {
    "id": "6ede5c4f-985d-45af-8ef7-65e7756f874e",
    "name": "Dorm Sized Mini Fridge",
    "price": "$61",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Keeps everything very cold. Clean and functional. Moving out so must go.",
    "sellerId": "eb8c9774-2ae5-4eef-9439-42c36e5c6919",
    "sellerName": "Riley Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_smith93",
    "condition": "Fair",
    "collegeId": "la-3",
    "created_at": "2026-01-30T14:53:08.756050"
  },
  {
    "id": "eea36335-734c-4c77-b3d1-a9579b0f8f3b",
    "name": "Road Bike (54cm Frame)",
    "price": "$295",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Fast and reliable for commuting to class. Recently tuned up.",
    "sellerId": "48bd511c-5e79-4c1f-be00-382f90c8f279",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson57",
    "condition": "Like New",
    "collegeId": "la-3",
    "created_at": "2026-02-01T14:53:08.756050"
  },
  {
    "id": "a4435c81-52c5-4ce5-ae12-bfc8687d7540",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$49",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "48bd511c-5e79-4c1f-be00-382f90c8f279",
    "sellerName": "Jamie Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_johnson57",
    "condition": "Fair",
    "collegeId": "la-3",
    "created_at": "2026-01-21T14:53:08.756050"
  },
  {
    "id": "2872127a-1d3d-4c3c-bb6a-c3c76a56c24b",
    "name": "Psychology: Themes and Variations",
    "price": "$31",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Used for one semester. Some highlighting in the first few chapters.",
    "sellerId": "1afb16c5-fe3c-47aa-8ebb-0b8159615e65",
    "sellerName": "Taylor Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor_williams98",
    "condition": "Fair",
    "collegeId": "la-3",
    "created_at": "2026-01-19T14:53:08.756050"
  },
  {
    "id": "6efbc9c2-ccf5-4d18-aa18-2abb52e82ca9",
    "name": "Psychology: Themes and Variations",
    "price": "$50",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Used for one semester. Some highlighting in the first few chapters.",
    "sellerId": "f4340942-45b8-48ff-bc2b-70fcc4ed46f9",
    "sellerName": "Jamie Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_brown68",
    "condition": "Good",
    "collegeId": "la-4",
    "created_at": "2026-01-20T14:53:08.756050"
  },
  {
    "id": "1bd93e15-9446-445c-8658-30ac98936d52",
    "name": "Levi's 501 Original Jeans",
    "price": "$39",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Classic fit, high quality denim. Like new condition.",
    "sellerId": "f4340942-45b8-48ff-bc2b-70fcc4ed46f9",
    "sellerName": "Jamie Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_brown68",
    "condition": "Fair",
    "collegeId": "la-4",
    "created_at": "2026-01-18T14:53:08.756050"
  },
  {
    "id": "e3cc5a92-2ca7-491e-9a54-46ca2ff940cf",
    "name": "Road Bike (54cm Frame)",
    "price": "$297",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Fast and reliable for commuting to class. Recently tuned up.",
    "sellerId": "f4340942-45b8-48ff-bc2b-70fcc4ed46f9",
    "sellerName": "Jamie Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_brown68",
    "condition": "Like New",
    "collegeId": "la-4",
    "created_at": "2026-01-26T14:53:08.756050"
  },
  {
    "id": "f58e8865-da0b-4dba-83aa-35020896e63f",
    "name": "North Face Nuptse Jacket",
    "price": "$154",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very warm for winter. Excellent condition, no tears or stains.",
    "sellerId": "f4340942-45b8-48ff-bc2b-70fcc4ed46f9",
    "sellerName": "Jamie Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_brown68",
    "condition": "Fair",
    "collegeId": "la-4",
    "created_at": "2026-01-30T14:53:08.756050"
  },
  {
    "id": "3605f6ab-0b50-43c8-88d0-7b51c8ccb94a",
    "name": "Dorm Sized Mini Fridge",
    "price": "$85",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Keeps everything very cold. Clean and functional. Moving out so must go.",
    "sellerId": "6f214e30-6a18-47c6-b8ad-78508abfa7a9",
    "sellerName": "Chris Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_smith76",
    "condition": "New",
    "collegeId": "la-4",
    "created_at": "2026-02-01T14:53:08.756050"
  },
  {
    "id": "c97f0caa-313c-445a-a403-a317da78f20c",
    "name": "Dumbbell Set (20 lbs)",
    "price": "$38",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Cast iron weights. Perfect for a quick workout in the room.",
    "sellerId": "f4340942-45b8-48ff-bc2b-70fcc4ed46f9",
    "sellerName": "Jamie Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_brown68",
    "condition": "Like New",
    "collegeId": "la-4",
    "created_at": "2026-01-18T14:53:08.756050"
  },
  {
    "id": "6660e5c1-bdb5-40ad-a7ac-c2c5176727fa",
    "name": "Sony WH-1000XM4 Headphones",
    "price": "$198",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Industry-leading noise canceling. Like new, barely used.",
    "sellerId": "f4340942-45b8-48ff-bc2b-70fcc4ed46f9",
    "sellerName": "Jamie Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_brown68",
    "condition": "Good",
    "collegeId": "la-4",
    "created_at": "2026-01-23T14:53:08.756050"
  },
  {
    "id": "f17dfeec-d4a3-4b7d-885a-4f0917991e50",
    "name": "MacBook Air M2",
    "price": "$800",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "6f214e30-6a18-47c6-b8ad-78508abfa7a9",
    "sellerName": "Chris Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_smith76",
    "condition": "Like New",
    "collegeId": "la-4",
    "created_at": "2026-01-16T14:53:08.756050"
  },
  {
    "id": "ca26cadf-91fc-4266-ac89-50a11020d427",
    "name": "MacBook Air M2",
    "price": "$866",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "58c120f4-7446-4774-a509-29da14904068",
    "sellerName": "Jordan Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_garcia45",
    "condition": "Like New",
    "collegeId": "la-4",
    "created_at": "2026-01-27T14:53:08.756050"
  },
  {
    "id": "59d3523a-b7b0-4864-ac51-efed68fe1ff5",
    "name": "Dorm Sized Mini Fridge",
    "price": "$55",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Keeps everything very cold. Clean and functional. Moving out so must go.",
    "sellerId": "6f214e30-6a18-47c6-b8ad-78508abfa7a9",
    "sellerName": "Chris Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_smith76",
    "condition": "Like New",
    "collegeId": "la-4",
    "created_at": "2026-01-31T14:53:08.756050"
  },
  {
    "id": "abdc407b-362e-4aa4-a0c3-489347316024",
    "name": "Introduction to Algorithms (CLRS) 4th Ed",
    "price": "$80",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "The silver bible of CS. Barely used, perfect condition.",
    "sellerId": "a5bca4e1-7797-4c24-9d5f-edf01ad3c4ff",
    "sellerName": "Casey Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_rodriguez11",
    "condition": "Like New",
    "collegeId": "la-5",
    "created_at": "2026-01-11T14:53:08.756050"
  },
  {
    "id": "d7f53197-7d97-4ece-8f51-cb27a53b8bae",
    "name": "Skateboard with Bearings",
    "price": "$43",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Good pop, clean deck. Perfect for getting around campus.",
    "sellerId": "fda4fc22-fc53-47fc-98a9-e99a5df60be4",
    "sellerName": "Jordan Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_johnson57",
    "condition": "Good",
    "collegeId": "la-5",
    "created_at": "2026-01-15T14:53:08.757055"
  },
  {
    "id": "90632413-f7cc-434f-b308-24db26d40d87",
    "name": "CSU Los Angeles Hoodie",
    "price": "$34",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Super soft and comfortable. Perfect for representing school spirit.",
    "sellerId": "a5bca4e1-7797-4c24-9d5f-edf01ad3c4ff",
    "sellerName": "Casey Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_rodriguez11",
    "condition": "Like New",
    "collegeId": "la-5",
    "created_at": "2026-02-04T14:53:08.757055"
  },
  {
    "id": "df89df68-e034-46d1-b1fb-a29307fba57b",
    "name": "Calculus: Early Transcendentals 9th Ed",
    "price": "$60",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1543004629-14207021ce0e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Slightly worn cover, but no highlights inside. Essential for STEM majors.",
    "sellerId": "85e6a02c-575b-4b78-90c2-f01c3c78d0d8",
    "sellerName": "Sam Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_williams51",
    "condition": "Fair",
    "collegeId": "la-5",
    "created_at": "2026-02-02T14:53:08.757055"
  },
  {
    "id": "6236a3db-1f9e-4f04-a67f-623ae96c2923",
    "name": "Dell UltraSharp 27 Monitor",
    "price": "$165",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for a dual monitor setup. No dead pixels, works perfectly.",
    "sellerId": "a5bca4e1-7797-4c24-9d5f-edf01ad3c4ff",
    "sellerName": "Casey Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_rodriguez11",
    "condition": "Good",
    "collegeId": "la-5",
    "created_at": "2026-02-08T14:53:08.757055"
  },
  {
    "id": "46c34a7a-ae57-4f8d-9289-eb9ca888e526",
    "name": "MacBook Air M2",
    "price": "$863",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "85e6a02c-575b-4b78-90c2-f01c3c78d0d8",
    "sellerName": "Sam Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_williams51",
    "condition": "Fair",
    "collegeId": "la-5",
    "created_at": "2026-01-11T14:53:08.757055"
  },
  {
    "id": "1846ea4e-5ddf-434f-bb58-d61e52dbd81f",
    "name": "Organic Chemistry 8th Edition - Klein",
    "price": "$75",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1532187875605-186e6af8e37c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Includes the solutions manual. Very helpful for Pre-med students.",
    "sellerId": "a5bca4e1-7797-4c24-9d5f-edf01ad3c4ff",
    "sellerName": "Casey Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_rodriguez11",
    "condition": "Like New",
    "collegeId": "la-5",
    "created_at": "2026-02-09T14:53:08.757055"
  },
  {
    "id": "fb8be2ea-1944-4e44-b749-f8b01ddbeb89",
    "name": "CSU Los Angeles Hoodie",
    "price": "$29",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Super soft and comfortable. Perfect for representing school spirit.",
    "sellerId": "85e6a02c-575b-4b78-90c2-f01c3c78d0d8",
    "sellerName": "Sam Williams",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=sam_williams51",
    "condition": "New",
    "collegeId": "la-5",
    "created_at": "2026-02-02T14:53:08.757055"
  },
  {
    "id": "d8c70005-0fe1-440c-a165-37b77d2a51e8",
    "name": "Cozy Area Rug (5x7)",
    "price": "$50",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1562512120-68199342713f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Soft and clean. Adds a lot of warmth to a dorm room.",
    "sellerId": "fda4fc22-fc53-47fc-98a9-e99a5df60be4",
    "sellerName": "Jordan Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_johnson57",
    "condition": "Like New",
    "collegeId": "la-5",
    "created_at": "2026-01-15T14:53:08.757055"
  },
  {
    "id": "1250e93c-9676-408d-a523-cc458a93d22c",
    "name": "Psychology: Themes and Variations",
    "price": "$31",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Used for one semester. Some highlighting in the first few chapters.",
    "sellerId": "fda4fc22-fc53-47fc-98a9-e99a5df60be4",
    "sellerName": "Jordan Johnson",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan_johnson57",
    "condition": "New",
    "collegeId": "la-5",
    "created_at": "2026-02-07T14:53:08.757055"
  },
  {
    "id": "57d840b5-0654-4961-89d0-180d0a0deae3",
    "name": "Ergonomic Office Chair",
    "price": "$81",
    "category": "Furniture",
    "images": [
      "https://images.unsplash.com/photo-1505797149-43c0ec70297f?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Adjustable height and lumbar support. Crucial for long study sessions.",
    "sellerId": "002c8661-4902-4e3f-940d-aed23bac87b6",
    "sellerName": "Riley Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_miller39",
    "condition": "New",
    "collegeId": "la-6",
    "created_at": "2026-01-16T14:53:08.757055"
  },
  {
    "id": "15f258d3-29a8-4813-9ac5-e3877cd8b8bc",
    "name": "Nike Air Force 1s (Size 10)",
    "price": "$73",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Classic white sneakers. Worn a few times, still look very fresh.",
    "sellerId": "c7045a9d-0119-43ca-95eb-4c3f0c6ee640",
    "sellerName": "Pat Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_smith38",
    "condition": "Fair",
    "collegeId": "la-6",
    "created_at": "2026-02-10T14:53:08.757055"
  },
  {
    "id": "2f070ee7-aa33-4742-8a4e-64e008a90f41",
    "name": "North Face Nuptse Jacket",
    "price": "$150",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very warm for winter. Excellent condition, no tears or stains.",
    "sellerId": "002c8661-4902-4e3f-940d-aed23bac87b6",
    "sellerName": "Riley Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_miller39",
    "condition": "Fair",
    "collegeId": "la-6",
    "created_at": "2026-01-23T14:53:08.757055"
  },
  {
    "id": "bd266d47-34b1-419a-87c0-9ee0c51cce30",
    "name": "Dell UltraSharp 27 Monitor",
    "price": "$174",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for a dual monitor setup. No dead pixels, works perfectly.",
    "sellerId": "002c8661-4902-4e3f-940d-aed23bac87b6",
    "sellerName": "Riley Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_miller39",
    "condition": "Good",
    "collegeId": "la-6",
    "created_at": "2026-01-12T14:53:08.757055"
  },
  {
    "id": "0b0973c0-2552-4e86-8045-b8f9d61432d7",
    "name": "Dell UltraSharp 27 Monitor",
    "price": "$203",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Perfect for a dual monitor setup. No dead pixels, works perfectly.",
    "sellerId": "c7045a9d-0119-43ca-95eb-4c3f0c6ee640",
    "sellerName": "Pat Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_smith38",
    "condition": "New",
    "collegeId": "la-6",
    "created_at": "2026-01-29T14:53:08.757055"
  },
  {
    "id": "4e437db1-98f3-4b79-bc22-0c1dcc326d2f",
    "name": "Road Bike (54cm Frame)",
    "price": "$381",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Fast and reliable for commuting to class. Recently tuned up.",
    "sellerId": "582c9eb6-5606-4ce0-bf63-23f24d15192d",
    "sellerName": "Jamie Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_rodriguez95",
    "condition": "Fair",
    "collegeId": "la-6",
    "created_at": "2026-01-27T14:53:08.757055"
  },
  {
    "id": "8db80d7d-3712-41e7-9006-6c207eddc465",
    "name": "Organic Chemistry 8th Edition - Klein",
    "price": "$83",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1532187875605-186e6af8e37c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Includes the solutions manual. Very helpful for Pre-med students.",
    "sellerId": "c7045a9d-0119-43ca-95eb-4c3f0c6ee640",
    "sellerName": "Pat Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_smith38",
    "condition": "New",
    "collegeId": "la-6",
    "created_at": "2026-01-14T14:53:08.757055"
  },
  {
    "id": "2592bd83-a17e-4098-bdca-975cfcc635f6",
    "name": "Introduction to Algorithms (CLRS) 4th Ed",
    "price": "$78",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "The silver bible of CS. Barely used, perfect condition.",
    "sellerId": "002c8661-4902-4e3f-940d-aed23bac87b6",
    "sellerName": "Riley Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=riley_miller39",
    "condition": "Good",
    "collegeId": "la-6",
    "created_at": "2026-01-14T14:53:08.757055"
  },
  {
    "id": "45b19415-7a4c-43b0-bf54-0f12e16b08e0",
    "name": "Pepperdine University Hoodie",
    "price": "$27",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Super soft and comfortable. Perfect for representing school spirit.",
    "sellerId": "582c9eb6-5606-4ce0-bf63-23f24d15192d",
    "sellerName": "Jamie Rodriguez",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie_rodriguez95",
    "condition": "Good",
    "collegeId": "la-6",
    "created_at": "2026-01-19T14:53:08.757055"
  },
  {
    "id": "f3639894-3569-49ad-a740-ba95233f1b1f",
    "name": "MacBook Air M2",
    "price": "$831",
    "category": "Electronics",
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Great condition, used for two semesters. Includes charger and original box.",
    "sellerId": "c7045a9d-0119-43ca-95eb-4c3f0c6ee640",
    "sellerName": "Pat Smith",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=pat_smith38",
    "condition": "New",
    "collegeId": "la-6",
    "created_at": "2026-01-27T14:53:08.757055"
  },
  {
    "id": "7d4f410d-ef29-4bf1-8a3a-c1c461ec7e08",
    "name": "Organic Chemistry 8th Edition - Klein",
    "price": "$61",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1532187875605-186e6af8e37c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Includes the solutions manual. Very helpful for Pre-med students.",
    "sellerId": "276943b7-69fb-4071-af4b-786e16cee335",
    "sellerName": "Alex Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_garcia13",
    "condition": "New",
    "collegeId": "la-7",
    "created_at": "2026-02-01T14:53:08.757055"
  },
  {
    "id": "0205147f-77f3-43e9-ab4f-032c7044db1c",
    "name": "Road Bike (54cm Frame)",
    "price": "$353",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Fast and reliable for commuting to class. Recently tuned up.",
    "sellerId": "276943b7-69fb-4071-af4b-786e16cee335",
    "sellerName": "Alex Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_garcia13",
    "condition": "New",
    "collegeId": "la-7",
    "created_at": "2026-01-12T14:53:08.757055"
  },
  {
    "id": "331e01d7-6de6-48dd-88c8-427fef7acdf6",
    "name": "Introduction to Algorithms (CLRS) 4th Ed",
    "price": "$80",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "The silver bible of CS. Barely used, perfect condition.",
    "sellerId": "de5fb11c-056c-46b4-81c9-afa7614b26c0",
    "sellerName": "Chris Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_miller53",
    "condition": "Fair",
    "collegeId": "la-7",
    "created_at": "2026-02-07T14:53:08.757055"
  },
  {
    "id": "98489e15-d5bf-451c-a098-13d10d095b69",
    "name": "Nike Air Force 1s (Size 10)",
    "price": "$50",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Classic white sneakers. Worn a few times, still look very fresh.",
    "sellerId": "de5fb11c-056c-46b4-81c9-afa7614b26c0",
    "sellerName": "Chris Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_miller53",
    "condition": "Good",
    "collegeId": "la-7",
    "created_at": "2026-01-19T14:53:08.757055"
  },
  {
    "id": "28e6a220-2121-4829-8bf1-c5702c0c8620",
    "name": "Occidental College Hoodie",
    "price": "$26",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Super soft and comfortable. Perfect for representing school spirit.",
    "sellerId": "de5fb11c-056c-46b4-81c9-afa7614b26c0",
    "sellerName": "Chris Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_miller53",
    "condition": "Fair",
    "collegeId": "la-7",
    "created_at": "2026-01-25T14:53:08.757055"
  },
  {
    "id": "928a532f-4926-4571-99ef-12d519aed73b",
    "name": "Calculus: Early Transcendentals 9th Ed",
    "price": "$45",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1543004629-14207021ce0e?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Slightly worn cover, but no highlights inside. Essential for STEM majors.",
    "sellerId": "de5fb11c-056c-46b4-81c9-afa7614b26c0",
    "sellerName": "Chris Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_miller53",
    "condition": "Fair",
    "collegeId": "la-7",
    "created_at": "2026-02-08T14:53:08.757055"
  },
  {
    "id": "86317453-2a22-4094-ab7e-d1edf1602216",
    "name": "Yoga Mat and Blocks",
    "price": "$31",
    "category": "Sports",
    "images": [
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "High grip mat, barely used. Great for stress relief.",
    "sellerId": "c493220d-7ee0-40f7-b125-559ca10eb30b",
    "sellerName": "Casey Brown",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=casey_brown90",
    "condition": "Fair",
    "collegeId": "la-7",
    "created_at": "2026-01-23T14:53:08.757055"
  },
  {
    "id": "82c4cc18-8139-440e-82ef-18c4f1a2f74d",
    "name": "Campbell Biology 12th Edition",
    "price": "$68",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Brand new, never opened. Dropped the class so I don't need it.",
    "sellerId": "276943b7-69fb-4071-af4b-786e16cee335",
    "sellerName": "Alex Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_garcia13",
    "condition": "Like New",
    "collegeId": "la-7",
    "created_at": "2026-01-15T14:53:08.757055"
  },
  {
    "id": "befb3234-d00e-4415-b447-733a021e79e2",
    "name": "Patagonia Better Sweater Fleece",
    "price": "$87",
    "category": "Clothing",
    "images": [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Very cozy and breathable. Great for layering in the library.",
    "sellerId": "276943b7-69fb-4071-af4b-786e16cee335",
    "sellerName": "Alex Garcia",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_garcia13",
    "condition": "Fair",
    "collegeId": "la-7",
    "created_at": "2026-01-11T14:53:08.757055"
  },
  {
    "id": "5f5ddad6-4a31-4544-9dd9-59729c6afdcb",
    "name": "Organic Chemistry 8th Edition - Klein",
    "price": "$56",
    "category": "Books",
    "images": [
      "https://images.unsplash.com/photo-1532187875605-186e6af8e37c?auto=format&fit=crop&q=80&w=800"
    ],
    "description": "Includes the solutions manual. Very helpful for Pre-med students.",
    "sellerId": "de5fb11c-056c-46b4-81c9-afa7614b26c0",
    "sellerName": "Chris Miller",
    "sellerAvatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=chris_miller53",
    "condition": "New",
    "collegeId": "la-7",
    "created_at": "2026-02-03T14:53:08.757055"
  }
];