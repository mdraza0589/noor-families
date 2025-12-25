// src/data/familyData.js

export const familyPassword = "1122";

const DEFAULT_IMAGE =
    "https://cdn.pixabay.com/photo/2021/08/17/20/16/man-6554120_1280.jpg";

const Image6 = "/images/image-6.png";
const Image7 = "/images/ammi.png";
const Image1 = "/images/image-1.png";
const child1 = "/images/image-4.png"



const aizah_Profile = '/gallery/profileImage/aizah.jpg'
const dilshad_Profile = '/gallery/profileImage/dilshad.jpg'
const jugnu_Profile = '/gallery/profileImage/jugnu.jpg'
const raza_Profile = '/gallery/profileImage/raza.jpg'
const shad_Profile = '/gallery/profileImage/shad.jpg'
const tahira_Profile = '/gallery/profileImage/tahira.jpg'
const ahamad_Profile = '/gallery/profileImage/ahamad.png'
const mashuk_Profile = '/gallery/profileImage/mashuk.jpg'
const mutabbar_Profile = '/gallery/profileImage/mutabbar.jpg'
const washuk_Profile = '/gallery/profileImage/washuk.png'
const murtuja_Profile = '/gallery/profileImage/murtuja.png'
const sahib_Profile = '/gallery/profileImage/sahib.png'
const tahsin_Profile = '/gallery/profileImage/tahsin.png'
const mosahid_Profile = '/gallery/profileImage/mosahid.png'
const wasim_Profile = '/gallery/profileImage/wasim.png'
const suhail_Profile = '/gallery/profileImage/suhail.png'
const zeeshan_Profile = '/gallery/profileImage/zeeshan.png'
const anwar_Profile = '/gallery/profileImage/anwar.png'
const rahat_Profile = '/gallery/profileImage/rahat.png'
const aman_Profile = '/gallery/profileImage/aman.png'
const asif_Profile = '/gallery/profileImage/asif.png'




export const family = {
    familyName: "The Noor Family",

    /* ===================== PARENTS ===================== */
    parents: {
        father: {
            id: "parent-shaikh-ali-ullah",
            name: "Shaikh Ali Ullah",
            role: "Father",
            image: "/images/abba.jpg",
            personalInfo: {
                dob: "1958-04-12",
                bloodGroup: "B+",
                education: "High School",
                father: "Late Shaikh Mohammad Ismail",
                mother: "Late Sultana Begum",
                occupation: "Farmer",
                hobbies: ["Gardening", "Reading", "Morning Walk"],
                favoriteColor: "White",
                favoriteFood: "Dal Chawal",
                visitedPlaces: ["Bhopal", "Indore", "Delhi"],
                phone: "9XXXXXXXXX",
                about:
                    "A disciplined, hardworking man who built the family with honesty and strong values.",
            },
        },

        mother: {
            id: "parent-sadrun-nisha",
            name: "Sadrun Nisha",
            role: "Mother",
            image: Image7,
            personalInfo: {
                dob: "1962-09-18",
                bloodGroup: "O+",
                education: "Primary Education",
                father: "Late Mohammad Hussain",
                mother: "Late Fatima Begum",
                occupation: "Homemaker",
                hobbies: ["Cooking", "Prayer", "Teaching children"],
                favoriteColor: "Green",
                favoriteFood: "Biryani",
                visitedPlaces: ["Saudi"],
                phone: "9XXXXXXXXX",
                about:
                    "The emotional pillar of the family, loving, patient, and deeply caring.",
            },
        },
    },

    /* ===================== SIBLINGS (11) ===================== */
    siblings: [
        /* 1. MURTUJA ALI */
        {
            id: "sibling-murtuja-ali",
            name: "Murtuja Ali",
            image: murtuja_Profile,
            isMarried: true,
            personalInfo: {
                dob: "-- -- ----",
                bloodGroup: "O+",
                education: "Graduate",
                father: "Shaikh Ali Ullah",
                mother: "Sadrun Nisha",
                occupation: "Shopkeeper",
                hobbies: ["Traveling", "Social Work"],
                favoriteColor: "Blue",
                favoriteFood: "Paneer Curry",
                visitedPlaces: ["Mumbai", "Delhi"],
                phone: "9XXXXXXXXX",
                about: "Eldest sibling, responsible and respected by all.",
            },
            spouse: {
                name: "Fargab aara",
                image: Image1,
                personalInfo: {
                    dob: "-- -- ----",
                    bloodGroup: "B+",
                    education: "Graduate",
                    father: "--",
                    mother: "--",
                    occupation: "Homemaker",
                    hobbies: ["Cooking", "Stitching"],
                    favoriteColor: "Pink",
                    favoriteFood: "Chicken Curry",
                    visitedPlaces: ["Delhi", "Agra"],
                    phone: "",
                    about: "Caring and supportive wife.",
                },
            },
            children: [

                {
                    id: "child-sahib-musarraf",
                    name: "Sahib Musarraf",
                    image: sahib_Profile,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "06-02-1999",
                        bloodGroup: "O+",
                        education: "Masters (MCA)",
                        father: "Murtuja Ali",
                        mother: "Fargab aara",
                        occupation: "Job in Haidrabad",
                        hobbies: ["Cycling", "Games", "Football"],
                        favoriteColor: "Black",
                        favoriteFood: "Biryani",
                        visitedPlaces: ["Delhi", "Mumbai", "Haidrabad", "Bilashpur", "Bhilai"],
                        phone: "",
                        about: "Calm and intelligent.",
                    },
                    children: [],
                },
                {
                    id: "child-sadaf-chandani",
                    name: "Sadaf Chandani",
                    image: Image6,
                    isMarried: true,
                    personalInfo: {
                        dob: "17-12-2001",
                        bloodGroup: "A+",
                        education: "Graduate",
                        father: "Murtuja Ali",
                        mother: "Fargab aara",
                        occupation: "Homemaker",
                        hobbies: ["Photography", "Cooking"],
                        favoriteColor: "Pink",
                        favoriteFood: "Pasta",
                        visitedPlaces: ["Indore"],
                        phone: "",
                        about: "Creative and family-oriented.",
                    },
                    spouse: {
                        name: "Rahil",
                        image: DEFAULT_IMAGE,
                        personalInfo: {
                            dob: "13-01-1992",
                            bloodGroup: "B+",
                            education: "Graduate",
                            father: "--",
                            mother: "--",
                            occupation: "Private Job",
                            hobbies: ["Driving", "Reading"],
                            favoriteColor: "Black",
                            favoriteFood: "Chicken Curry",
                            visitedPlaces: ["Qatar"],
                            phone: "",
                            about: "Supportive and caring husband.",
                        },
                    },
                    children: [
                        {
                            id: "child-ayaan-rahil",
                            name: "Aizah Fatima",
                            image: aizah_Profile,
                            isMarried: false,
                            spouse: null,
                            personalInfo: {
                                dob: "18-09-2025",
                                bloodGroup: "B+",
                                education: "Playschool",
                                father: "Rahil Khan",
                                mother: "Sadaf Chandani",
                                occupation: "Child",
                                hobbies: ["Toys"],
                                favoriteColor: "Yellow",
                                favoriteFood: "Milk",
                                visitedPlaces: ["Bishrampur"],
                                phone: "",
                                about: "Beloved first child of Sadaf.",
                            },
                            children: [],
                        },
                    ],
                },
                {
                    id: "child-dilshad-raza",
                    name: "Dilshad Raza",
                    image: dilshad_Profile,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "26-05-2007",
                        bloodGroup: "B+",
                        education: "School",
                        father: "Murtuja Ali",
                        mother: "Fargab aara",
                        occupation: "Student",
                        hobbies: ["Cricket", "Drawing"],
                        favoriteColor: "Red",
                        favoriteFood: "Pizza",
                        visitedPlaces: ["Delhi", "Mumbai"],
                        phone: "",
                        about: "Energetic and creative.",
                    },
                    children: [],
                },
            ],
        },

        /* 2. mutabbar ALI */
        {
            id: "sibling-mutabbar-ali",
            name: "Mutabbar Ali",
            image: mutabbar_Profile,
            isMarried: true,
            personalInfo: {
                dob: "1984-06-18",
                bloodGroup: "O+",
                education: "Graduate",
                father: "Shaikh Ali Ullah",
                mother: "Sadrun Nisha",
                occupation: "Siddiqui Cloth Store Sarbhoka.",
                hobbies: ["Business", "Helping People"],
                favoriteColor: "Brown",
                favoriteFood: "Biryani",
                visitedPlaces: ["Delhi", "Mumbai"],
                phone: "9XXXXXXXXX",
                about: "Hardworking and practical.",
            },
            spouse: {
                name: "Mrs. mutabbar Ali",
                image: DEFAULT_IMAGE,
                personalInfo: {
                    dob: "1988-02-10",
                    bloodGroup: "A+",
                    education: "Graduate",
                    father: "Mohammad Aslam",
                    mother: "Razia Begum",
                    occupation: "Homemaker",
                    hobbies: ["Cooking"],
                    favoriteColor: "Green",
                    favoriteFood: "Dal Rice",
                    visitedPlaces: ["Jharkhand"],
                    phone: "",
                    about: "Simple and caring.",
                },
            },
            children: [
                {
                    id: "child-kadir-ali",
                    name: "Kadir Ali",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "2009-01-12",
                        bloodGroup: "B+",
                        education: "School",
                        father: "mutabbar Ali",
                        mother: "Mrs. mutabbar Ali",
                        occupation: "Student",
                        hobbies: ["Cricket"],
                        favoriteColor: "Blue",
                        favoriteFood: "Rice",
                        visitedPlaces: ["Bhopal"],
                        phone: "",
                        about: "Active and sporty."
                    },
                    children: []
                },
                {
                    id: "child-alfia-perveen",
                    name: "Alfiya Perveen",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "2011-05-09",
                        bloodGroup: "O+",
                        education: "School",
                        father: "mutabbar Ali",
                        mother: "Mrs. mutabbar Ali",
                        occupation: "Student",
                        hobbies: ["Drawing"],
                        favoriteColor: "Pink",
                        favoriteFood: "Pulao",
                        visitedPlaces: ["Bhopal"],
                        phone: "",
                        about: "Creative and gentle."
                    },
                    children: []
                },
                {
                    id: "child-afsha-perveen",
                    name: "Afsha Perveen",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "2013-08-21",
                        bloodGroup: "A+",
                        education: "School",
                        father: "mutabbar Ali",
                        mother: "Mrs. mutabbar Ali",
                        occupation: "Student",
                        hobbies: ["Storytelling"],
                        favoriteColor: "Purple",
                        favoriteFood: "Noodles",
                        visitedPlaces: ["Bhopal"],
                        phone: "",
                        about: "Cheerful and expressive."
                    },
                    children: []
                },
                {
                    id: "child-armaan-ali",
                    name: "Armaan Ali",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "2016-11-03",
                        bloodGroup: "B+",
                        education: "School",
                        father: "mutabbar Ali",
                        mother: "Mrs. mutabbar Ali",
                        occupation: "Student",
                        hobbies: ["Playing"],
                        favoriteColor: "Red",
                        favoriteFood: "Biscuits",
                        visitedPlaces: ["Bhopal"],
                        phone: "",
                        about: "Youngest and playful."
                    },
                    children: []
                },
            ],
        },

        /* 3. MASHUK ALI */
        {
            id: "sibling-mashuk-ali",
            name: "Mashuk Ali",
            image: mashuk_Profile,
            isMarried: true,
            personalInfo: {
                dob: "17-12-1984",
                bloodGroup: "A+",
                education: "Graduate",
                father: "Shaikh Ali Ullah",
                mother: "Sadrun Nisha",
                occupation: "Private Job",
                hobbies: ["Reading", "Walking"],
                favoriteColor: "Grey",
                favoriteFood: "Chicken Biryani",
                visitedPlaces: ["Gujrat", "Bhilai", "Raipur"],
                phone: "9XXXXXXXXX",
                about: "Quiet and thoughtful.",
            },
            spouse: {
                name: "Sayera Bano",
                image: Image1,
                personalInfo: {
                    dob: "09-10-1995",
                    bloodGroup: "B+",
                    education: "Shooling",
                    father: "--",
                    mother: "--",
                    occupation: "Homemaker",
                    hobbies: ["Cooking", "Walking"],
                    favoriteColor: "Blue",
                    favoriteFood: "Biryani",
                    visitedPlaces: ["Bhilai", "Jharkhand", "GM Complex"],
                    phone: "",
                    about: "Supportive partner.",
                },
            },
            children: [
                {
                    id: "child-faizal-ali",
                    name: "Faizal Ali",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "08-11-2010",
                        bloodGroup: "B+",
                        education: "School",
                        father: "Mashuk Ali",
                        mother: "Tamanna Khatun",
                        occupation: "Student",
                        hobbies: ["Cricket", "Driving"],
                        favoriteColor: "Blue",
                        favoriteFood: "Rice",
                        visitedPlaces: ["Bhilai", "Jharkhand", "Ambikapur"],
                        phone: "",
                        about: "Active and friendly."
                    },
                    children: []
                },
                {
                    id: "child-shad-ali",
                    name: "Shad Ali",
                    image: shad_Profile,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "07-09-2012",
                        bloodGroup: "O+",
                        education: "School",
                        father: "Mashuk Ali",
                        mother: "Tamanna Khatun",
                        occupation: "Student",
                        hobbies: ["Drawing", "Chess", "Run"],
                        favoriteColor: "Green",
                        favoriteFood: "Paneer",
                        visitedPlaces: ["Bhilai", "Jharkhand", "Ambikapur"],
                        phone: "",
                        about: "Creative and calm."
                    },
                    children: []
                },
                {
                    id: "child-ayyub-raza",
                    name: "Ayyub Raza",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "2013-12-02",
                        bloodGroup: "A+",
                        education: "School",
                        father: "Mashuk Ali",
                        mother: "Sayera Bano",
                        occupation: "Student",
                        hobbies: ["Walking"],
                        favoriteColor: "Red",
                        favoriteFood: "Rice",
                        visitedPlaces: ["Bhilai"],
                        phone: "",
                        about: "Cheerful and playful."
                    },
                    children: []
                },
                {
                    id: "child-tahira-siddiqui",
                    name: "Tahira Siddiqui",
                    image: tahira_Profile,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "2016-08-18",
                        bloodGroup: "B+",
                        education: "School",
                        father: "Mashuk Ali",
                        mother: "Sayera Bano",
                        occupation: "Child",
                        hobbies: ["Sleeping"],
                        favoriteColor: "Pink",
                        favoriteFood: "Milk",
                        visitedPlaces: ["Sarbhoka"],
                        phone: "",
                        about: "Soft-spoken and sweet."
                    },
                    children: []
                },
            ],
        },

        /* 4. WASHUK ALI */
        {
            id: "sibling-washuk-ali",
            name: "Washuk Ali",
            image: washuk_Profile,
            isMarried: true,
            personalInfo: {
                dob: "01-01-1981",
                bloodGroup: "B+",
                education: "Schooling",
                father: "Shaikh Ali Ullah",
                mother: "Sadrun Nisha",
                occupation: "Transport Manager",
                hobbies: ["Drinving", "Walking"],
                favoriteColor: "Navy Blue",
                favoriteFood: "Chicken Curry",
                visitedPlaces: ["Indore", "Bhilai", "Raipur", "Bilashpur"],
                phone: "9XXXXXXXXX",
                about: "Active and energetic.",
            },
            spouse: {
                name: "Ronak Aara",
                image: Image1,
                personalInfo: {
                    dob: "22-05-1987",
                    bloodGroup: "O+",
                    education: "School Pass Out",
                    father: "--",
                    mother: "--",
                    occupation: "Homemaker",
                    hobbies: ["Cooking", "Walking"],
                    favoriteColor: "Green",
                    favoriteFood: "Pulao Chicken",
                    visitedPlaces: ["Ambikapur", "Jharkhand"],
                    phone: "",
                    about: "Polite and supportive.",
                },
            },
            children: [
                {
                    id: "child-hasnain-raza",
                    name: "Hasnain Raza",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "03-07-2009",
                        bloodGroup: "B+",
                        education: "School",
                        father: "Washuk Ali",
                        mother: "Ronak Aara",
                        occupation: "Student",
                        hobbies: ["Cricket", "Badminton"],
                        favoriteColor: "Blue",
                        favoriteFood: "Rice",
                        visitedPlaces: ["Tara", "Jharkhand"],
                        phone: "",
                        about: "Sporty and confident."
                    },
                    children: []
                },
                {
                    id: "child-akif-raza",
                    name: "Aakib Raza",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "20-04-2013",
                        bloodGroup: "O+",
                        education: "School",
                        father: "Washuk Ali",
                        mother: "Ronak Aara",
                        occupation: "Student",
                        hobbies: ["Cycling", "Cricket"],
                        favoriteColor: "Black",
                        favoriteFood: "Pani Puri",
                        visitedPlaces: ["Nagpur", "Tara", "Ambikapur"],
                        phone: "",
                        about: "Quiet and smart."
                    },
                    children: []
                },
                {
                    id: "child-sakif-raza",
                    name: "Shakib Raza",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "27-12-2017",
                        bloodGroup: "A+",
                        education: "School",
                        father: "Washuk Ali",
                        mother: "Ronak Aara",
                        occupation: "Student",
                        hobbies: ["Drawing"],
                        favoriteColor: "Green",
                        favoriteFood: "Roti Sabji",
                        visitedPlaces: ["Nagpur", "Tara"],
                        phone: "",
                        about: "Creative and shy."
                    },
                    children: []
                },
                {
                    id: "child-umul-vara",
                    name: "Umul Vara",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "03-07-2006",
                        bloodGroup: "B+",
                        education: "School",
                        father: "Washuk Ali",
                        mother: "Ronak Aara",
                        occupation: "Student",
                        hobbies: ["Coloring", "Cooking"],
                        favoriteColor: "Blue",
                        favoriteFood: "Baigan",
                        visitedPlaces: ["Nagpur", "Tara"],
                        phone: "",
                        about: "Sweet and cheerful."
                    },
                    children: []
                },
            ],
        },

        /* 5. KAISAR ALI */
        {
            id: "sibling-kaisar-ali",
            name: "Kaisar Ali",
            image: "",
            isMarried: true,
            personalInfo: {
                dob: "",
                bloodGroup: "",
                education: "Hafiz",
                father: "Shaikh Ali Ullah",
                mother: "Sadrun Nisha",
                occupation: "",
                hobbies: [],
                favoriteColor: "",
                favoriteFood: "",
                visitedPlaces: [],
                phone: "9XXXXXXXXX",
                about: "Friendly and outgoing.",
            },
            spouse: {
                name: "Trannum Praveen",
                image: Image1,
                personalInfo: {
                    dob: "01-01-1986",
                    bloodGroup: "B+",
                    education: "Graduate",
                    father: "",
                    mother: "",
                    occupation: "Homemaker",
                    hobbies: ["Cooking"],
                    favoriteColor: "Blue",
                    favoriteFood: "Veg Curry",
                    visitedPlaces: ["Indore"],
                    phone: "",
                    about: "Kind and supportive.",
                },
            },
            children: [
                {
                    id: "child-aman",
                    name: "Siftain Raza (Aman)",
                    image: aman_Profile,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "13-10-2005",
                        bloodGroup: "B+",
                        education: "Work",
                        father: "Kaisar Ali",
                        mother: "Trannum Praveen",
                        occupation: "Graduate",
                        hobbies: ["Football"],
                        favoriteColor: "Blue",
                        favoriteFood: "Roti Chicken",
                        visitedPlaces: ["Bhopal", "Jharkhand", "Mumbai"],
                        phone: "",
                        about: "Energetic and playful.",
                    },
                    children: [],
                },
                {
                    id: "child-nurien",
                    name: "Nurien",
                    image: Image6,
                    isMarried: true,
                    personalInfo: {
                        dob: "14-03-2003",
                        bloodGroup: "A+",
                        education: "Graduate",
                        father: "Kaisar Ali",
                        mother: "Trannum Praveen",
                        occupation: "HomeMaker",
                        hobbies: ["Drawing", "Walking"],
                        favoriteColor: "Blue",
                        favoriteFood: "Biryani",
                        visitedPlaces: ["Jharkhand", "Ambikapur"],
                        phone: "",
                        about: "Sweet and gentle.",
                    },
                    children: [],
                    spouse: {
                        name: "Asif Raza",
                        image: asif_Profile,
                        personalInfo: {
                            dob: "",
                            bloodGroup: "",
                            education: "Graduate",
                            father: "",
                            mother: "",
                            occupation: "Private Job",
                            hobbies: ["Reading", "Travel"],
                            favoriteColor: "Green",
                            favoriteFood: "Chicken Biryani",
                            visitedPlaces: ["Indore", "Bhopal"],
                            phone: "",
                            about: "Hardworking and caring.",
                        },
                    },
                },
            ],
        },

        /* 6. AHAMAD RAZA */
        {
            id: "sibling-ahamad-raza",
            name: "Ahamad Raza",
            image: ahamad_Profile,
            isMarried: true,
            personalInfo: {
                dob: "",
                bloodGroup: "B+",
                education: "Graduate",
                father: "Shaikh Ali Ullah",
                mother: "Sadrun Nisha",
                occupation: "ShopKeeper",
                hobbies: ["Work in Shop"],
                favoriteColor: "Green",
                favoriteFood: "Non veg Thali",
                visitedPlaces: ["Saudi Arab", "Mumbai", "Agra"],
                phone: "9XXXXXXXXX",
                about: "Helpful and calm.",
            },
            spouse: {
                name: "Sahana Khatun",
                image: Image1,
                personalInfo: {
                    dob: "",
                    bloodGroup: "O+",
                    education: "Graduate",
                    father: "Harun Khan",
                    mother: "",
                    occupation: "Homemaker",
                    hobbies: ["Cooking"],
                    favoriteColor: "Blue",
                    favoriteFood: "Dal Rice",
                    visitedPlaces: [],
                    phone: "",
                    about: "Gentle and caring.",
                },
            },

            children: [
                {
                    id: "child-ahad",
                    name: "Ahad",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "2016-04-09",
                        bloodGroup: "B+",
                        education: "School",
                        father: "Ahamad Raza",
                        mother: "Mrs. Ahamad Raza",
                        occupation: "Student",
                        hobbies: ["Cricket"],
                        favoriteColor: "Blue",
                        favoriteFood: "Rice",
                        visitedPlaces: ["Bhopal"],
                        phone: "",
                        about: "Active and confident."
                    },
                    children: []
                },
                {
                    id: "child-samad",
                    name: "Samad",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "2018-07-12",
                        bloodGroup: "O+",
                        education: "School",
                        father: "Ahamad Raza",
                        mother: "Mrs. Ahamad Raza",
                        occupation: "Student",
                        hobbies: ["Drawing"],
                        favoriteColor: "Green",
                        favoriteFood: "Milk",
                        visitedPlaces: ["Bhopal"],
                        phone: "",
                        about: "Calm and creative."
                    },
                    children: []
                },
                {
                    id: "child-akif",
                    name: "Akif",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "2020-01-20",
                        bloodGroup: "A+",
                        education: "School",
                        father: "Ahamad Raza",
                        mother: "Mrs. Ahamad Raza",
                        occupation: "Student",
                        hobbies: ["Playing"],
                        favoriteColor: "Red",
                        favoriteFood: "Biscuits",
                        visitedPlaces: ["Bhopal"],
                        phone: "",
                        about: "Playful and cheerful."
                    },
                    children: []
                },
                {
                    id: "child-taiyab",
                    name: "Taiyab",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "2022-09-02",
                        bloodGroup: "B+",
                        education: "School",
                        father: "Ahamad Raza",
                        mother: "Mrs. Ahamad Raza",
                        occupation: "Student",
                        hobbies: ["Toys"],
                        favoriteColor: "Yellow",
                        favoriteFood: "Milk",
                        visitedPlaces: ["Bhopal"],
                        phone: "",
                        about: "Youngest and adorable."
                    },
                    children: []
                },
            ],
        },

        /* 7. MOHAMMAD RAZA (UNMARRIED) */
        {
            id: "sibling-mohammad-raza",
            name: "Mohammad Raza",
            image: raza_Profile,
            isMarried: false,
            spouse: null,
            personalInfo: {
                dob: "02-02-2002",
                bloodGroup: "O+",
                education: "B.Tech",
                father: "Shaikh Ali Ullah",
                mother: "Sadrun Nisha",
                occupation: "Software Engineer",
                hobbies: ["Coding", "Teaching", "Learning new technologies"],
                favoriteColor: "Black",
                favoriteFood: "Chicken Biryani",
                visitedPlaces: ["Bhopal", "Kolkatta", "Indore", "Agra", "Roorkee"],
                phone: "9XXXXXXXXX",
                about:
                    "Calm and keep learning.",
            },
            children: [],
        },

        /* 8. NOORI LAKA */
        {
            id: "sibling-noori-laka",
            name: "Noori Laka",
            image: Image6,
            isMarried: true,
            personalInfo: {
                dob: "02-10-2000",
                bloodGroup: "O+",
                education: "Graduate",
                father: "Shaikh Ali Ullah",
                mother: "Sadrun Nisha",
                occupation: "Homemaker",
                hobbies: ["Designing", "Cooking"],
                favoriteColor: "Purple",
                favoriteFood: "Pulao",
                visitedPlaces: ["Jharkhand", "Korba"],
                phone: "9XXXXXXXXX",
                about: "Creative and graceful.",
            },
            spouse: {
                name: "Wasim Khan",
                image: wasim_Profile,
                personalInfo: {
                    dob: "",
                    bloodGroup: "B+",
                    education: "Graduate",
                    father: "",
                    mother: "",
                    occupation: "Business",
                    hobbies: ["Travel"],
                    favoriteColor: "Black",
                    favoriteFood: "Chicken Curry",
                    visitedPlaces: ["Indore"],
                    phone: "",
                    about: "Supportive partner.",
                },
            },
            children: [
                {
                    id: "child-hamza-ali",
                    name: "Hamza Ali",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "25-12-2021",
                        bloodGroup: "B+",
                        education: "School",
                        father: "Wasim Khan",
                        mother: "Noori Laka",
                        occupation: "Student",
                        hobbies: ["Football"],
                        favoriteColor: "Blue",
                        favoriteFood: "Rice",
                        visitedPlaces: ["Korba"],
                        phone: "",
                        about: "Energetic and playful.",
                    },
                    children: [],
                },
                {
                    id: "child-saiyad-raza",
                    name: "Aariz Khan",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "13-11-2022",
                        bloodGroup: "O+",
                        education: "School",
                        father: "Wasim Khan",
                        mother: "Noori Laka",
                        occupation: "Student",
                        hobbies: ["Toys"],
                        favoriteColor: "Yellow",
                        favoriteFood: "Milk",
                        visitedPlaces: [],
                        phone: "",
                        about: "Youngest and adorable.",
                    },
                    children: [],
                },
            ],
        },

        /* 9. NOORI CHAMAN */
        {
            id: "sibling-noori-chaman",
            name: "Noori Chaman",
            image: Image6,
            isMarried: true,
            personalInfo: {
                dob: "14-02-1994",
                bloodGroup: "O+",
                education: "Graduate",
                father: "Shaikh Ali Ullah",
                mother: "Sadrun Nisha",
                occupation: "Homemaker",
                hobbies: ["Painting", "Cooking"],
                favoriteColor: "Sky Blue",
                favoriteFood: "Veg Biryani",
                visitedPlaces: ["Jharkhand"],
                phone: "9XXXXXXXXX",
                about: "Soft-spoken and loving.",
            },
            children: [
                {
                    id: "child-arhan-khan",
                    name: "Arhan Khan",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "",
                        bloodGroup: "B+",
                        education: "School",
                        father: "",
                        mother: "Noori Chaman",
                        occupation: "Student",
                        hobbies: ["Playing", "Drowing"],
                        favoriteColor: "Blue",
                        favoriteFood: "Milk",
                        visitedPlaces: ["Ambikapur", "Korba"],
                        phone: "",
                        about: "Cute and playful.",
                    },
                    children: [],
                },
            ],
        },

        /* 10. DILRUBA */
        {
            id: "sibling-dilruba",
            name: "Dilruba Khatun",
            image: Image6,
            isMarried: true,
            personalInfo: {
                dob: "01-01-1983",
                bloodGroup: "A+",
                education: "School pass",
                father: "Shaikh Ali Ullah",
                mother: "Sadrun Nisha",
                occupation: "Homemaker",
                hobbies: ["Singing", "Decorating", "Home Management"],
                favoriteColor: "Red",
                favoriteFood: "Rice",
                visitedPlaces: ["Chattishgarh", "Jharkhand"],
                phone: "9XXXXXXXXX",
                about: "Cheerful, artistic, and very caring by nature. Brings positivity to the family.",
            },

            spouse: {
                name: "Shaikh Suhail Ahamad",
                image: suhail_Profile,
                personalInfo: {
                    dob: "01-01-1981",
                    bloodGroup: "B+",
                    education: "Graduate",
                    father: "Mohammad Shahid",
                    mother: "Rashida Khan",
                    occupation: "Private Job",
                    hobbies: ["Fitness", "Morning Walk"],
                    favoriteColor: "Black",
                    favoriteFood: "Chicken Curry",
                    visitedPlaces: ["Bhopal", "Indore"],
                    phone: "",
                    about: "Disciplined, hardworking, and supportive life partner.",
                },
            },

            children: [

                {
                    id: "child-dilruba-mosahid-raza",
                    name: "Mosahid Raza",
                    image: mosahid_Profile,
                    isMarried: true,
                    personalInfo: {
                        dob: "12-08-1998",
                        bloodGroup: "O+",
                        education: "Graduate",
                        father: "Mr. Shaikh Suhail Ahamad",
                        mother: "Dilruba Khatun",
                        occupation: "Job",
                        hobbies: ["Drawing", "Playing with toys"],
                        favoriteColor: "Green",
                        favoriteFood: "Biryani",
                        visitedPlaces: ["Delhi", "Saudi Arab", "Qatar", "Chhattishgarh"],
                        phone: "",
                        about: "Quiet, polite, and loving child.",
                    },

                    spouse: {
                        name: "Aasma Khatun",
                        image: Image6,
                        personalInfo: {
                            dob: "2002-08-16",
                            bloodGroup: "A+",
                            education: "",
                            father: "",
                            mother: "Saima Khan",
                            occupation: "Private Job",
                            hobbies: ["Listening to Music", "Cooking"],
                            favoriteColor: "Pink",
                            favoriteFood: "Veg Curry",
                            visitedPlaces: ["JH"],
                            phone: "",
                            about: "Kind-hearted and supportive wife.",
                        },
                    },

                    children: [
                        {
                            id: "grandchild-mosahid-sara-ali",
                            name: "Mariyam Siddiqui",
                            image: child1,
                            isMarried: false,
                            spouse: null,
                            personalInfo: {
                                dob: "02-01-2024",
                                bloodGroup: "A+",
                                education: "Playschool",
                                father: "Mosahid Raza",
                                mother: "Aasma Khatun",
                                occupation: "Child",
                                hobbies: ["Coloring", "Playing"],
                                favoriteColor: "Blue",
                                favoriteFood: "Milk",
                                visitedPlaces: ["JH"],
                                phone: "",
                                about: "Cheerful and playful little girl.",
                            },
                            children: [],
                        },

                        {
                            id: "grandchild-mosahid-noor-jahan",
                            name: "Mohammad Adib",
                            image: DEFAULT_IMAGE,
                            isMarried: false,
                            spouse: null,
                            personalInfo: {
                                dob: "28-11-2025",
                                bloodGroup: "B+",
                                education: "Playschool",
                                father: "Mosahid Raza",
                                mother: "Aasma khatun",
                                occupation: "Child",
                                hobbies: ["Playing with toys"],
                                favoriteColor: "Yellow",
                                favoriteFood: "Milk",
                                visitedPlaces: ["JH"],
                                phone: "",
                                about: "Youngest joy of the family.",
                            },
                            children: [],
                        },
                    ],
                },

                {
                    id: "child-dilruba-tahsin-raza",
                    name: "Tahsin Raza",
                    image: tahsin_Profile,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "07-06-1999",
                        bloodGroup: "O+",
                        education: "B.Tech",
                        father: "Shaikh Suhail Ahamad",
                        mother: "Dilruba Khatun",
                        occupation: "Mechanical Engineer",
                        hobbies: ["Drawing", "Playing"],
                        favoriteColor: "Blue",
                        favoriteFood: "Rice",
                        visitedPlaces: ["Pune", "Mumbai", "Bhopal", "Chattishgarh"],
                        phone: "",
                        about: "Smart, active, and curious child.",
                    },
                    children: [],
                },


                {
                    id: "child-dilruba-nausin",
                    name: "Nausin Ladli",
                    image: Image6,
                    isMarried: true,
                    personalInfo: {
                        dob: "10-05-2000",
                        bloodGroup: "B+",
                        education: "Gradute",
                        father: "Shaikh Suhail Ahamad",
                        mother: "Dilruba Khatun",
                        occupation: "HomeMaker",
                        hobbies: ["Playing", "Reading"],
                        favoriteColor: "Purple",
                        favoriteFood: "Biryani",
                        visitedPlaces: ["JH", "CG", "UP"],
                        phone: "",
                        about: "Playful and adorable.",
                    },
                    spouse: {
                        name: "Anwar khan",
                        image: anwar_Profile,
                        personalInfo: {
                            dob: "1999-11-30",
                            bloodGroup: "A+",
                            education: "Graduate",
                            father: "Mohammad Aftab",
                            mother: "Shabana Khan",
                            occupation: "Homemaker",
                            hobbies: ["Cooking", "Gardening"],
                            favoriteColor: "Purple",
                            favoriteFood: "Vegetable Curry",
                            visitedPlaces: ["Bhopal"],
                            phone: "",
                            about: "Gentle and caring.",
                        },
                    },
                    children: [
                        {
                            id: "grandchild-nausin-areeb",
                            name: "Arshlan khan",
                            image: DEFAULT_IMAGE,
                            isMarried: true,
                            spouse: null,
                            personalInfo: {
                                dob: "21-08-2025",
                                bloodGroup: "O+",
                                education: "Infant",
                                father: "Anwar khan",
                                mother: "Mrs. Nausin Ladli",
                                occupation: "Child",
                                hobbies: ["Smiling"],
                                favoriteColor: "Blue",
                                favoriteFood: "Milk",
                                visitedPlaces: ["JH"],
                                phone: "",
                                about: "Happy and calm baby.",
                            },
                            children: [],
                        },
                        {
                            id: "grandchild-nausin-zoya",
                            name: "Azlan khan",
                            image: DEFAULT_IMAGE,
                            isMarried: false,
                            spouse: null,
                            personalInfo: {
                                dob: "26-02-2024",
                                bloodGroup: "A+",
                                education: "Infant",
                                father: "Anwar khan",
                                mother: "Nausin Ladli",
                                occupation: "Child",
                                hobbies: ["Sleeping"],
                                favoriteColor: "Pink",
                                favoriteFood: "Milk",
                                visitedPlaces: ["Jh"],
                                phone: "",
                                about: "Newest blessing of the family.",
                            },
                            children: [],
                        },
                    ],
                },

                {
                    id: "child-dilruba-jugnu",
                    name: "Jugnu Vahdat",
                    image: jugnu_Profile,
                    isMarried: true,
                    personalInfo: {
                        dob: "25-04-2003",
                        bloodGroup: "B+",
                        education: "Graduate",
                        father: "Shaikh Suhail Ahamad",
                        mother: "Dilruba Khatun",
                        occupation: "HomeMaker",
                        hobbies: [""],
                        favoriteColor: "Yellow",
                        favoriteFood: "Milk",
                        visitedPlaces: ["Aurangabad", "JH", "CG"],
                        phone: "",
                        about: "Joyful and energetic.",
                    },
                    children: [],
                    spouse: {
                        name: "Mohammad Zeeshan Khan",
                        image: zeeshan_Profile,
                        personalInfo: {
                            dob: "1998-04-25",
                            bloodGroup: "O+",
                            education: "Graduate",
                            father: "Mohammad Rizwan",
                            mother: "Sabiha Khan",
                            occupation: "Private Job",
                            hobbies: ["Sports", "Music"],
                            favoriteColor: "Blue",
                            favoriteFood: "Paneer Butter Masala",
                            visitedPlaces: ["Bhopal", "Indore"],
                            phone: "",
                            about: "Supportive and kind-hearted.",
                        },
                    },
                },


            ],
        },

        /* 11. MAHELAKA */
        {
            id: "sibling-mahelaka",
            name: "Mahelaka",
            image: Image6,
            isMarried: true,
            personalInfo: {
                dob: "--",
                bloodGroup: "O+",
                education: "Graduate",
                father: "Shaikh Ali Ullah",
                mother: "Sadrun Nisha",
                occupation: "HomeMaker",
                hobbies: ["Cooking", "Reading"],
                favoriteColor: "Yellow",
                favoriteFood: "Pulao",
                visitedPlaces: ["Mumbai", "Delhi", "JH"],
                phone: "9XXXXXXXXX",
                about: "Youngest sibling, creative and ambitious.",
            },

            spouse: {
                name: "Rahat Hussain",
                image: rahat_Profile,
                personalInfo: {
                    dob: "--",
                    bloodGroup: "B+",
                    education: "Graduate",
                    father: "Mohammad Saif",
                    mother: "Nida Khan",
                    occupation: "Student",
                    hobbies: ["Reading"],
                    favoriteColor: "Blue",
                    favoriteFood: "Rice",
                    visitedPlaces: ["Bhopal"],
                    phone: "",
                    about: "Supportive and understanding.",
                },
            },
            children: [
                {
                    id: "child-taha-hussain",
                    name: "Taha Hussain",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "2020-04-12",
                        bloodGroup: "B+",
                        education: "School",
                        father: "Mr. Mahelaka",
                        mother: "Mahelaka",
                        occupation: "Student",
                        hobbies: ["Toys"],
                        favoriteColor: "Blue",
                        favoriteFood: "Milk",
                        visitedPlaces: ["Bhopal"],
                        phone: "",
                        about: "Playful and smart."
                    },
                    children: []
                },
                {
                    id: "child-fiza-bano",
                    name: "Fiza Bano",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "2022-06-18",
                        bloodGroup: "O+",
                        education: "School",
                        father: "Mr. Mahelaka",
                        mother: "Mahelaka",
                        occupation: "Student",
                        hobbies: ["Drawing"],
                        favoriteColor: "Pink",
                        favoriteFood: "Milk",
                        visitedPlaces: ["Bhopal"],
                        phone: "",
                        about: "Sweet and calm."
                    },
                    children: []
                },
                {
                    id: "child-taslim-raza",
                    name: "Taslim Raza",
                    image: DEFAULT_IMAGE,
                    isMarried: false,
                    spouse: null,
                    personalInfo: {
                        dob: "2023-10-01",
                        bloodGroup: "A+",
                        education: "School",
                        father: "Mr. Mahelaka",
                        mother: "Mahelaka",
                        occupation: "Student",
                        hobbies: ["Playing"],
                        favoriteColor: "Yellow",
                        favoriteFood: "Milk",
                        visitedPlaces: ["Bhopal"],
                        phone: "",
                        about: "Youngest joy."
                    },
                    children: []
                },
            ],
        },
    ],
};

// ================= IMAGE PATHS =================

const All1 = "/gallery/All/abbaAmmi.jpg";
const All2 = "/gallery/All/brother1.jpg";
const All3 = "/gallery/All/brother2.jpg";
const All4 = "/gallery/All/murtuja1.jpg";
const All5 = "/gallery/All/raza1.jpg";
const All6 = "/gallery/All/raza2.jpg";
const All7 = "/gallery/All/amritdhara1.jpg";
const All8 = "/gallery/All/bhopal1.jpg";

const children1 = "/gallery/child/child.jpg";
const children2 = "/gallery/child/child1.jpg";
const children3 = "/gallery/child/child2.jpg";
const children4 = "/gallery/child/child3.jpg";
const children5 = "/gallery/child/child4.jpg";
const children6 = "/gallery/child/child5.jpg";
const children7 = "/gallery/child/child6.jpg";
const children8 = "/gallery/child/child7.jpg";
const children9 = "/gallery/child/child8.jpg";
const children10 = "/gallery/child/child9.jpg";
const children11 = "/gallery/child/child10.jpg";
const children12 = "/gallery/child/child11.jpg";
const children13 = "/gallery/child/child12.jpg";
const children14 = "/gallery/child/child13.jpg";
const children15 = "/gallery/child/child14.jpg";
const children16 = "/gallery/child/child15.jpg";
const children17 = "/gallery/child/child16.jpg";
const children18 = "/gallery/child/child17.jpg";
const children19 = "/gallery/child/child18.jpg";
const children20 = "/gallery/child/child19.jpg";
const children21 = "/gallery/child/child20.jpg";
const children22 = "/gallery/child/child21.jpg";

const function1 = "/gallery/functions/func1.jpg";
const function2 = "/gallery/functions/func2.jpg";
// const function3 = "/gallery/functions/func3.jpg";
const function4 = "/gallery/functions/func4.jpg";
const function5 = "/gallery/functions/func5.jpg";
const function6 = "/gallery/functions/func6.jpg";
const function7 = "/gallery/functions/func7.jpg";
const function8 = "/gallery/functions/func8.jpg";

const video1 = '/gallery/video/video1.mp4'
const video2 = '/gallery/video/video2.mp4'
const video3 = '/gallery/video/video3.mp4'
const video4 = '/gallery/video/video4.mp4'

// ================= FAMILY GALLERY DATA =================
export const familyGallery = {
    categories: [
        {
            id: "family-functions",
            title: "Family Functions",
            description: "Weddings, functions, and special occasions",
            media: [
                { id: "func-1", type: "image", src: function1, title: "Wedding Celebration", year: 2022 },
                { id: "func-2", type: "image", src: function2, title: "Mehndi Night", year: 2022 },
                // { id: "func-4", type: "image", src: function3, title: "Family Gathering", year: 2022 },
                { id: "func-5", type: "image", src: function4, title: "Reception Moments", year: 2022 },
                { id: "func-6", type: "image", src: function5, title: "Celebration Time", year: 2022 },
                { id: "func-7", type: "image", src: function6, title: "Special Occasion", year: 2022 },
                { id: "func-8", type: "image", src: function7, title: "Memorable Day", year: 2022 },
                { id: "func-9", type: "image", src: function8, title: "Memorable Day", year: 2022 },
                // { id: "func-3", type: "video", src: video2, title: "Nikah Ceremony", year: 2022 },
            ],
        },

        {
            id: "all-memories",
            title: "All Memories",
            description: "Beautiful moments from different times",
            media: [
                { id: "all-1", type: "image", src: All1, title: "Family Time", year: 2021 },
                { id: "all-2", type: "image", src: All2, title: "Brothers", year: 2020 },
                { id: "all-3", type: "image", src: All3, title: "Togetherness", year: 2020 },
                { id: "all-4", type: "image", src: All4, title: "Murtuja", year: 2020 },
                { id: "all-5", type: "image", src: All5, title: "Raza", year: 2020 },
                { id: "all-6", type: "image", src: All6, title: "Moments", year: 2020 },
                { id: "all-7", type: "image", src: All7, title: "Moments", year: 2020 },
                { id: "all-8", type: "image", src: All8, title: "Moments", year: 2020 },
                // { id: "all-9", type: "video", src: video1, title: "Funny", year: 2022 },
                // { id: "all-11", type: "video", src: video4, title: "Taj-ul Bhopal", year: 2022 },

            ],
        },

        // ================= CHILDREN SECTION =================
        {
            id: "children-memories",
            title: "Children",
            description: "Smiles, innocence, and joyful moments",
            media: [
                { id: "child-1", type: "image", src: children1, title: "Ahad" },
                { id: "child-2", type: "image", src: children2, title: "Happy Moment" },
                { id: "child-3", type: "image", src: children3, title: "Fazal" },
                { id: "child-4", type: "image", src: children4, title: "Jhumka" },
                { id: "child-5", type: "image", src: children5, title: "Jhumka Smile" },
                { id: "child-6", type: "image", src: children6, title: "Samad" },
                { id: "child-7", type: "image", src: children7, title: "Samad Fun" },
                { id: "child-8", type: "image", src: children8, title: "Samad Play" },
                { id: "child-9", type: "image", src: children9, title: "Child Moment" },
                { id: "child-10", type: "image", src: children10, title: "Child Smile" },
                { id: "child-11", type: "image", src: children11, title: "Cute Pose" },
                { id: "child-12", type: "image", src: children12, title: "Fun Time" },
                { id: "child-13", type: "image", src: children13, title: "Play Time" },
                { id: "child-14", type: "image", src: children14, title: "Lovely Moment" },
                { id: "child-15", type: "image", src: children15, title: "Sweet Smile" },
                { id: "child-16", type: "image", src: children16, title: "Happy Day" },
                { id: "child-17", type: "image", src: children17, title: "Fun Click" },
                { id: "child-18", type: "image", src: children18, title: "Cute Shot" },
                { id: "child-19", type: "image", src: children19, title: "Joy Moment" },
                { id: "child-20", type: "image", src: children20, title: "Smile Shot" },
                { id: "child-21", type: "image", src: children21, title: "Playful Mood" },
                { id: "child-22", type: "image", src: children22, title: "Memory" },
                // { id: "child-23", type: "video", src: video3, title: "Arif Raza", year: 2022 },
            ],
        },
    ],

    // ================= MEMBER-WISE MEDIA =================
    memberGallery: [
        {
            memberId: "sibling-murtuja-ali",
            memberName: "Murtuja Ali",
            media: [
                { id: "murtuja-1", type: "image", src: "/images/image-6.png", title: "With Family" },
                { id: "murtuja-2", type: "image", src: "/images/image-6.png", title: "Function Day" },
            ],
        },

        {
            memberId: "sibling-mutabbar-ali",
            memberName: "mutabbar Ali",
            media: [
                { id: "mutabbar-1", type: "image", src: "/images/image-6.png", title: "Shop Opening" },
            ],
        },

        {
            memberId: "sibling-mohammad-raza",
            memberName: "Mohammad Raza",
            media: [
                { id: "raza-1", type: "image", src: "/images/image-6.png", title: "Work Setup" },
                // { id: "raza-2", type: "video", src: "/gallery/video/eid.mp4", title: "Coding Time" },
            ],
        },

        {
            memberId: "parent-shaikh-ali-ullah",
            memberName: "Shaikh Ali Ullah",
            media: [
                { id: "father-1", type: "image", src: "/images/image-6.png", title: "At Farm" },
            ],
        },

        {
            memberId: "parent-sadrun-nisha",
            memberName: "Sadrun Nisha",
            media: [
                { id: "mother-1", type: "image", src: "/images/image-6.png", title: "Family Gathering" },
            ],
        },
    ],
};





// git lfs track "*.mp4"
// git add.gitattributes
// git commit - m "Track mp4 with LFS"
