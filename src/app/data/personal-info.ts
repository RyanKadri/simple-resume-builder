import { PersonalData } from "../types/types";

let confidentialPart = { }
if(typeof process !== "undefined" && process.env.CONFIDENTIAL_MODE) {
    confidentialPart = require("./personal/confidential").confidential
}

export const personal: PersonalData = {
    name: "Ryan Kadri",
    profession: "Software Developer",
    email: "mailto:ryankadri1@gmail.com",
    github: "https://github.com/ryankadri",
    ...confidentialPart
}