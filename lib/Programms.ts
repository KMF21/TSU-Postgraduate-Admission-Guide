// app/data/programmes.ts

export type Programme = {
  id: string;
  faculty: string;
  department: string;
  programmeName: string;
  degreeType:
    | "PGD"
    | "MSc"
    | "M.A"
    | "M.Ed"
    | "PhD"
    | "MPhil"
    | "MBA"
    | "MPH";
  shortDescription?: string;
};

export const programmes: Programme[] = [
  // FACULTY OF AGRICULTURE
  // Department of Agronomy
  {
    id: "pgd-agronomy",
    faculty: "Agriculture",
    department: "Agronomy",
    programmeName: "PGD Agronomy",
    degreeType: "PGD",
    shortDescription: "Foundational postgraduate knowledge in Agronomy."
  },
  {
    id: "msc-agronomy-plant-breeding",
    faculty: "Agriculture",
    department: "Agronomy",
    programmeName: "MSc Agronomy/Plant Breeding",
    degreeType: "MSc",
    shortDescription: "Advanced study in Agronomy with focus on Plant Breeding."
  },
  {
    id: "phd-agronomy-plant-breeding",
    faculty: "Agriculture",
    department: "Agronomy",
    programmeName: "PhD Agronomy/Plant Breeding",
    degreeType: "PhD",
    shortDescription: "Research-focused programme in Agronomy and Plant Breeding."
  },

  // Department of Agric. Economics and Extension
  {
    id: "pgd-agric-econ-extension",
    faculty: "Agriculture",
    department: "Agric Economics & Extension",
    programmeName: "PGD Agric Economics & Extension",
    degreeType: "PGD",
    shortDescription: "Postgraduate Diploma in Agricultural Economics & Extension."
  },
  {
    id: "msc-agric-econ",
    faculty: "Agriculture",
    department: "Agric Economics & Extension",
    programmeName: "MSc Agric Economics",
    degreeType: "MSc",
    shortDescription: "Advanced study in Agricultural Economics."
  },
  {
    id: "msc-agric-extension",
    faculty: "Agriculture",
    department: "Agric Economics & Extension",
    programmeName: "MSc Agric Extension",
    degreeType: "MSc",
    shortDescription: "Advanced study in Agricultural Extension."
  },
  {
    id: "phd-agric-econ",
    faculty: "Agriculture",
    department: "Agric Economics & Extension",
    programmeName: "PhD Agric Economics",
    degreeType: "PhD",
    shortDescription: "Research-focused programme in Agricultural Economics."
  },
  {
    id: "phd-agric-extension",
    faculty: "Agriculture",
    department: "Agric Economics & Extension",
    programmeName: "PhD Agric Extension",
    degreeType: "PhD",
    shortDescription: "Research-focused programme in Agricultural Extension."
  },

  // Department of Animal Science
  {
    id: "pgd-animal-production",
    faculty: "Agriculture",
    department: "Animal Science",
    programmeName: "PGD Animal Production",
    degreeType: "PGD",
    shortDescription: "Foundational knowledge in Animal Production."
  },
  {
    id: "msc-animal-science",
    faculty: "Agriculture",
    department: "Animal Science",
    programmeName: "MSc Animal Science",
    degreeType: "MSc",
    shortDescription: "Advanced study in Animal Science."
  },
  {
    id: "phd-animal-science",
    faculty: "Agriculture",
    department: "Animal Science",
    programmeName: "PhD Animal Science",
    degreeType: "PhD",
    shortDescription: "Research-focused programme in Animal Science."
  },
  {
    id: "msc-animal-prod-health",
    faculty: "Agriculture",
    department: "Animal Science",
    programmeName: "MSc Animal Production and Health",
    degreeType: "MSc",
    shortDescription: "Advanced study in Animal Production and Health."
  },
  {
    id: "phd-animal-prod-health",
    faculty: "Agriculture",
    department: "Animal Science",
    programmeName: "PhD Animal Production and Health",
    degreeType: "PhD",
    shortDescription: "Research-focused programme in Animal Production and Health."
  },

  // FACULTY OF ARTS
  // Department of Arabic Language
  {
    id: "pgd-arabic",
    faculty: "Arts",
    department: "Arabic Language",
    programmeName: "PGD Arabic Language",
    degreeType: "PGD",
    shortDescription: "Foundational postgraduate knowledge in Arabic Language."
  },
  {
    id: "ma-arabic-lang-literature",
    faculty: "Arts",
    department: "Arabic Language",
    programmeName: "M.A Arabic Language & Literature",
    degreeType: "M.A",
    shortDescription: "Advanced study in Arabic Language and Literature."
  },
  {
    id: "phd-arabic",
    faculty: "Arts",
    department: "Arabic Language",
    programmeName: "PhD Arabic Language",
    degreeType: "PhD",
    shortDescription: "Research-focused programme in Arabic Language."
  },

  // Department of Christian Religious Studies
  {
    id: "pgd-church-history-religion",
    faculty: "Arts",
    department: "Christian Religious Studies",
    programmeName: "PGD in Church History, Religion & Society, ATR & New Testament Studies",
    degreeType: "PGD",
    shortDescription: "Postgraduate Diploma in Christian Religious Studies."
  },
  {
    id: "ma-church-history",
    faculty: "Arts",
    department: "Christian Religious Studies",
    programmeName: "M.A Church History",
    degreeType: "M.A",
    shortDescription: "Advanced study in Church History."
  },
  {
    id: "ma-religion-society",
    faculty: "Arts",
    department: "Christian Religious Studies",
    programmeName: "M.A Religion and Society",
    degreeType: "M.A",
    shortDescription: "Advanced study in Religion and Society."
  },
  {
    id: "ma-african-tradition-religion",
    faculty: "Arts",
    department: "Christian Religious Studies",
    programmeName: "M.A African Traditional Religion",
    degreeType: "M.A",
    shortDescription: "Advanced study in African Traditional Religion."
  },
  {
    id: "ma-new-testament-studies",
    faculty: "Arts",
    department: "Christian Religious Studies",
    programmeName: "M.A New Testament Studies",
    degreeType: "M.A",
    shortDescription: "Advanced study in New Testament Studies."
  },
  {
    id: "phd-new-testament-studies",
    faculty: "Arts",
    department: "Christian Religious Studies",
    programmeName: "PhD New Testament Studies",
    degreeType: "PhD",
    shortDescription: "Research-focused programme in New Testament Studies."
  },
  {
    id: "phd-church-history",
    faculty: "Arts",
    department: "Christian Religious Studies",
    programmeName: "PhD Church History",
    degreeType: "PhD",
    shortDescription: "Research-focused programme in Church History."
  },
  {
    id: "phd-religion-society",
    faculty: "Arts",
    department: "Christian Religious Studies",
    programmeName: "PhD Religion & Society",
    degreeType: "PhD",
    shortDescription: "Research-focused programme in Religion & Society."
  },
  {
    id: "phd-african-tradition-religion",
    faculty: "Arts",
    department: "Christian Religious Studies",
    programmeName: "PhD African Traditional Religion",
    degreeType: "PhD",
    shortDescription: "Research-focused programme in African Traditional Religion."
  },
  {
    id: "ma-comparative-religion",
    faculty: "Arts",
    department: "Christian Religious Studies",
    programmeName: "M.A Comparative Religion",
    degreeType: "M.A",
    shortDescription: "Advanced study in Comparative Religion."
  },
  {
    id: "phd-comparative-religion",
    faculty: "Arts",
    department: "Christian Religious Studies",
    programmeName: "PhD Comparative Religion",
    degreeType: "PhD",
    shortDescription: "Research-focused programme in Comparative Religion."
  },
  {
    id: "ma-interaction-religion",
    faculty: "Arts",
    department: "Christian Religious Studies",
    programmeName: "M.A Interaction of Religion",
    degreeType: "M.A",
    shortDescription: "Advanced study in Interaction of Religion."
  },
  {
    id: "phd-interaction-religion",
    faculty: "Arts",
    department: "Christian Religious Studies",
    programmeName: "PhD Interaction of Religion",
    degreeType: "PhD",
    shortDescription: "Research-focused programme in Interaction of Religion."
  },


  // app/data/programmes.ts (continuation)

// FACULTY OF ARTS (continued)
// Department of English and Literary Studies
{
  id: "ma-literature-english",
  faculty: "Arts",
  department: "English and Literary Studies",
  programmeName: "M.A Literature in English",
  degreeType: "M.A",
  shortDescription: "Advanced study in English Literature."
},
{
  id: "ma-english-language",
  faculty: "Arts",
  department: "English and Literary Studies",
  programmeName: "M.A English Language",
  degreeType: "M.A",
  shortDescription: "Advanced study in English Language."
},
{
  id: "phd-literature",
  faculty: "Arts",
  department: "English and Literary Studies",
  programmeName: "PhD Literature",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in English Literature."
},
{
  id: "phd-english-language",
  faculty: "Arts",
  department: "English and Literary Studies",
  programmeName: "PhD English Language",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in English Language."
},

// Department of History
{
  id: "pgd-peace-conflict-studiess",
  faculty: "Arts",
  department: "History",
  programmeName: "PGD Peace and Conflict Studies",
  degreeType: "PGD",
  shortDescription: "Foundational knowledge in Peace and Conflict Studies."
},
{
  id: "pgd-international-relations",
  faculty: "Arts",
  department: "History",
  programmeName: "PGD International Relations and Strategic Studies",
  degreeType: "PGD",
  shortDescription: "Foundational knowledge in International Relations."
},
{
  id: "ma-history",
  faculty: "Arts",
  department: "History",
  programmeName: "M.A History",
  degreeType: "M.A",
  shortDescription: "Advanced study in History."
},
{
  id: "phd-history",
  faculty: "Arts",
  department: "History",
  programmeName: "PhD History",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in History."
},

// Department of Islamic Studies
{
  id: "pgd-islamic-studies",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "PGD Islamic Studies",
  degreeType: "PGD",
  shortDescription: "Foundational postgraduate knowledge in Islamic Studies."
},
{
  id: "pgd-quranic-science",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "PGD Quranic Science",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Quranic Science."
},
{
  id: "pgd-hadith-science",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "PGD in Hadith Science",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Hadith Science."
},
{
  id: "pgd-islamic-jurisprudence",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "PGD Islamic Jurisprudence",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Islamic Jurisprudence."
},
{
  id: "pgd-islamic-political-thought",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "PGD Islamic Political Thought",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Islamic Political Thought."
},
{
  id: "pgd-contemporary-daawah",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "PGD Contemporary Daawah Methodology",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Contemporary Daawah Methodology."
},
{
  id: "ma-ulumul-quran",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "M.A Ulumul Qur’an",
  degreeType: "M.A",
  shortDescription: "Advanced study in Ulumul Qur’an."
},
{
  id: "ma-hadith-science",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "M.A Hadith Science",
  degreeType: "M.A",
  shortDescription: "Advanced study in Hadith Science."
},
{
  id: "ma-fiqh-usulul-fiqh",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "M.A Fiqh and Usulul Fiqh (Islamic Jurisprudence)",
  degreeType: "M.A",
  shortDescription: "Advanced study in Fiqh and Usulul Fiqh."
},
{
  id: "ma-islamic-history-civilisation",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "M.A Islamic History and Civilisation",
  degreeType: "M.A",
  shortDescription: "Advanced study in Islamic History and Civilisation."
},
{
  id: "ma-islamic-political-thought",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "M.A Islamic Political Thought and Administration",
  degreeType: "M.A",
  shortDescription: "Advanced study in Islamic Political Thought and Administration."
},
{
  id: "ma-islam-contemporary-science",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "M.A Islam and Contemporary Science",
  degreeType: "M.A",
  shortDescription: "Advanced study in Islam and Contemporary Science."
},
{
  id: "phd-ulumul-quran-science",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "PhD Ulumul Qur’an Science",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Ulumul Qur’an Science."
},
{
  id: "phd-hadith-science",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "PhD Hadith Science",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Hadith Science."
},
{
  id: "phd-fiqh",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "PhD Fiqh (Islamic Jurisprudence)",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Fiqh (Islamic Jurisprudence)."
},
{
  id: "phd-islamic-history-civilisation",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "PhD Islamic History and Civilisation",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Islamic History and Civilisation."
},
{
  id: "phd-islamic-political-thought",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "PhD Islamic Political Thought and Administration",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Islamic Political Thought and Administration."
},
{
  id: "phd-islam-contemporary-studies",
  faculty: "Arts",
  department: "Islamic Studies",
  programmeName: "PhD Islam and Contemporary Studies",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Islam and Contemporary Studies."
},

// Department of Language and Linguistics
{
  id: "pgd-hausa",
  faculty: "Arts",
  department: "Language and Linguistics",
  programmeName: "PGD Hausa",
  degreeType: "PGD",
  shortDescription: "Foundational knowledge in Hausa Language and Culture."
},
{
  id: "ma-hausa-literature",
  faculty: "Arts",
  department: "Language and Linguistics",
  programmeName: "M.A Hausa Literature",
  degreeType: "M.A",
  shortDescription: "Advanced study in Hausa Literature."
},
{
  id: "ma-hausa-culture",
  faculty: "Arts",
  department: "Language and Linguistics",
  programmeName: "M.A Hausa Culture",
  degreeType: "M.A",
  shortDescription: "Advanced study in Hausa Culture."
},
{
  id: "ma-hausa-language",
  faculty: "Arts",
  department: "Language and Linguistics",
  programmeName: "M.A Hausa Language",
  degreeType: "M.A",
  shortDescription: "Advanced study in Hausa Language."
},
{
  id: "phd-hausa",
  faculty: "Arts",
  department: "Language and Linguistics",
  programmeName: "PhD Hausa",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Hausa Language and Culture."
},
{
  id: "ma-french-african-literature",
  faculty: "Arts",
  department: "Language and Linguistics",
  programmeName: "M.A French (African Literature)",
  degreeType: "M.A",
  shortDescription: "Advanced study in French Literature in Africa."
},
{
  id: "ma-linguistics",
  faculty: "Arts",
  department: "Language and Linguistics",
  programmeName: "M.A Linguistics",
  degreeType: "M.A",
  shortDescription: "Advanced study in Linguistics."
},
{
  id: "phd-linguistics",
  faculty: "Arts",
  department: "Language and Linguistics",
  programmeName: "PhD Linguistics",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Linguistics."
},

// Institute of Peace Studies and Conflict Management
{
  id: "pgd-peace-security",
  faculty: "Institute of Peace Studies",
  department: "Peace Studies & Conflict Management",
  programmeName: "PGD Peace and Security Studies",
  degreeType: "PGD",
  shortDescription: "Foundational knowledge in Peace and Security Studies."
},
{
  id: "pgd-peace-conflict-resolution",
  faculty: "Institute of Peace Studies",
  department: "Peace Studies & Conflict Management",
  programmeName: "PGD Peace and Conflicts Resolution Studies",
  degreeType: "PGD",
  shortDescription: "Foundational knowledge in Peace and Conflict Resolution."
},
{
  id: "ma-peace-security",
  faculty: "Institute of Peace Studies",
  department: "Peace Studies & Conflict Management",
  programmeName: "M.A Peace and Security Studies",
  degreeType: "M.A",
  shortDescription: "Advanced study in Peace and Security Studies."
},
{
  id: "ma-peace-conflict-resolution",
  faculty: "Institute of Peace Studies",
  department: "Peace Studies & Conflict Management",
  programmeName: "M.A Peace and Conflicts Resolution Studies",
  degreeType: "M.A",
  shortDescription: "Advanced study in Peace and Conflict Resolution."
},
{
  id: "phd-peace-security",
  faculty: "Institute of Peace Studies",
  department: "Peace Studies & Conflict Management",
  programmeName: "PhD Peace and Security Studies",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Peace and Security Studies."
},
{
  id: "phd-peace-conflict-resolution",
  faculty: "Institute of Peace Studies",
  department: "Peace Studies & Conflict Management",
  programmeName: "PhD Peace and Conflicts Resolution Studies",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Peace and Conflict Resolution."
},

// app/data/programmes.ts (continuation)

// FACULTY OF EDUCATION
// Department of Arts Education
{
  id: "med-social-studies",
  faculty: "Education",
  department: "Arts Education",
  programmeName: "M.Ed Social Studies",
  degreeType: "M.Ed",
  shortDescription: "Advanced study in Social Studies Education."
},
{
  id: "med-language-arts",
  faculty: "Education",
  department: "Arts Education",
  programmeName: "M.Ed Language Arts Education",
  degreeType: "M.Ed",
  shortDescription: "Advanced study in Language Arts Education."
},
{
  id: "med-history-education",
  faculty: "Education",
  department: "Arts Education",
  programmeName: "M.Ed History Education",
  degreeType: "M.Ed",
  shortDescription: "Advanced study in History Education."
},
{
  id: "med-crs-education",
  faculty: "Education",
  department: "Arts Education",
  programmeName: "M.Ed CRS Education",
  degreeType: "M.Ed",
  shortDescription: "Advanced study in Christian Religious Studies Education."
},
{
  id: "med-hausa-education",
  faculty: "Education",
  department: "Arts Education",
  programmeName: "M.Ed Hausa Education",
  degreeType: "M.Ed",
  shortDescription: "Advanced study in Hausa Education."
},
{
  id: "med-irs-education",
  faculty: "Education",
  department: "Arts Education",
  programmeName: "M.Ed IRS Education",
  degreeType: "M.Ed",
  shortDescription: "Advanced study in Islamic Religious Studies Education."
},
{
  id: "phd-hausa-arts-education",
  faculty: "Education",
  department: "Arts Education",
  programmeName: "PhD Hausa Arts Education",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Hausa Arts Education."
},
{
  id: "phd-crs-education",
  faculty: "Education",
  department: "Arts Education",
  programmeName: "PhD CRS Education",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in CRS Education."
},
{
  id: "phd-irs-education",
  faculty: "Education",
  department: "Arts Education",
  programmeName: "PhD IRS Education",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in IRS Education."
},
{
  id: "phd-language-arts-education",
  faculty: "Education",
  department: "Arts Education",
  programmeName: "PhD Language Arts Education",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Language Arts Education."
},
{
  id: "phd-history-education",
  faculty: "Education",
  department: "Arts Education",
  programmeName: "PhD History Education",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in History Education."
},

// Department of Educational Foundations
{
  id: "pgd-education",
  faculty: "Education",
  department: "Educational Foundations",
  programmeName: "PGD Education",
  degreeType: "PGD",
  shortDescription: "Foundational postgraduate diploma in Education."
},
{
  id: "pgd-education-mgt",
  faculty: "Education",
  department: "Educational Foundations",
  programmeName: "PGD Education Mgt",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Education Management."
},
{
  id: "med-curriculum-instruction",
  faculty: "Education",
  department: "Educational Foundations",
  programmeName: "M.Ed Curriculum and Instructions",
  degreeType: "M.Ed",
  shortDescription: "Advanced study in Curriculum and Instruction."
},
{
  id: "med-administration-planning",
  faculty: "Education",
  department: "Educational Foundations",
  programmeName: "M.Ed Administration and Planning",
  degreeType: "M.Ed",
  shortDescription: "Advanced study in Educational Administration and Planning."
},
{
  id: "med-measurement-evaluation",
  faculty: "Education",
  department: "Educational Foundations",
  programmeName: "M.Ed Measurement and Evaluation",
  degreeType: "M.Ed",
  shortDescription: "Advanced study in Educational Measurement and Evaluation."
},
{
  id: "phd-administration-planning",
  faculty: "Education",
  department: "Educational Foundations",
  programmeName: "PhD Administration and Planning",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Administration and Planning."
},
{
  id: "phd-measurement-evaluation",
  faculty: "Education",
  department: "Educational Foundations",
  programmeName: "PhD Measurement and Evaluation",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Measurement and Evaluation."
},
{
  id: "phd-curriculum-instruction",
  faculty: "Education",
  department: "Educational Foundations",
  programmeName: "PhD Curriculum and Instruction",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Curriculum and Instruction."
},

// Department of Guidance & Counselling
{
  id: "pgd-guidance-counselling",
  faculty: "Education",
  department: "Guidance & Counselling",
  programmeName: "PGD Education",
  degreeType: "PGD",
  shortDescription: "Foundational postgraduate diploma in Guidance and Counselling."
},
{
  id: "med-guidance-counselling",
  faculty: "Education",
  department: "Guidance & Counselling",
  programmeName: "M.Ed Guidance and Counselling",
  degreeType: "M.Ed",
  shortDescription: "Advanced study in Guidance and Counselling."
},
{
  id: "med-educational-psychology",
  faculty: "Education",
  department: "Guidance & Counselling",
  programmeName: "M.Ed Educational Psychology",
  degreeType: "M.Ed",
  shortDescription: "Advanced study in Educational Psychology."
},
{
  id: "phd-guidance-counselling",
  faculty: "Education",
  department: "Guidance & Counselling",
  programmeName: "PhD Guidance and Counselling",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Guidance and Counselling."
},
{
  id: "phd-educational-psychology",
  faculty: "Education",
  department: "Guidance & Counselling",
  programmeName: "PhD Educational Psychology",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Educational Psychology."
},

// Department of Human Kinetics and Health Education
{
  id: "pgd-public-health-education",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "PGD Public Health Education",
  degreeType: "PGD",
  shortDescription: "Foundational knowledge in Public Health Education."
},
{
  id: "pgd-sports-admin-management",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "PGD Sports Administration and Management",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Sports Administration and Management."
},
{
  id: "pgd-sport-psychology",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "PGD Sport Psychology",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Sport Psychology."
},
{
  id: "pgd-exercise-physiology",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "PGD Exercise Physiology",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Exercise Physiology."
},
{
  id: "pgd-recreation-leisure-tourism",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "PGD Recreation, Leisure and Tourism",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Recreation, Leisure, and Tourism."
},
{
  id: "msc-public-health-education",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "MSc(Ed) Public Health Education",
  degreeType: "MSc",
  shortDescription: "Advanced study in Public Health Education."
},
{
  id: "msc-sports-admin-management",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "MSc(Ed) Sports Administration and Management",
  degreeType: "MSc",
  shortDescription: "Advanced study in Sports Administration and Management."
},
{
  id: "msc-sports-psychology",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "MSc(Ed) Sports Psychology",
  degreeType: "MSc",
  shortDescription: "Advanced study in Sports Psychology."
},
{
  id: "msc-exercise-physiology",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "MSc(Ed) Exercise Physiology",
  degreeType: "MSc",
  shortDescription: "Advanced study in Exercise Physiology."
},
{
  id: "msc-recreation-leisure-tourism",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "MSc(Ed) Recreation, Leisure and Tourism",
  degreeType: "MSc",
  shortDescription: "Advanced study in Recreation, Leisure, and Tourism."
},
{
  id: "mph-public-health",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "MPH in Public Health",
  degreeType: "MPH",
  shortDescription: "Advanced professional study in Public Health."
},
{
  id: "mph-sports-admin-management",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "M.Phil Sports Administration and Management",
  degreeType: "MPhil",
  shortDescription: "Research-focused programme in Sports Administration and Management."
},
{
  id: "phd-public-health-education",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "PhD Public Health Education",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Public Health Education."
},
{
  id: "phd-sports-admin-management",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "PhD Sports Administration and Management",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Sports Administration and Management."
},
{
  id: "phd-sports-psychology",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "PhD Sports Psychology",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Sports Psychology."
},
{
  id: "phd-exercise-physiology",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "PhD Exercise Physiology",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Exercise Physiology."
},
{
  id: "phd-recreation-leisure-tourism",
  faculty: "Education",
  department: "Human Kinetics and Health Education",
  programmeName: "PhD Recreation, Leisure and Tourism",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Recreation, Leisure, and Tourism."
},
// app/data/programmes.ts (continuation)

// FACULTY OF SCIENCE
// Department of Biological Sciences
{
  id: "pgd-epidemiology-communicable-diseases",
  faculty: "Science",
  department: "Biological Sciences",
  programmeName: "PGD Epidemiology & Control of Communicable Diseases",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Epidemiology & Control of Communicable Diseases."
},
{
  id: "msc-applied-parasitology",
  faculty: "Science",
  department: "Biological Sciences",
  programmeName: "MSc Applied Parasitology",
  degreeType: "MSc",
  shortDescription: "Advanced study in Applied Parasitology."
},
{
  id: "msc-ecology-conservation",
  faculty: "Science",
  department: "Biological Sciences",
  programmeName: "MSc Ecology & Conservation",
  degreeType: "MSc",
  shortDescription: "Advanced study in Ecology and Conservation."
},
{
  id: "msc-public-health-parasitology",
  faculty: "Science",
  department: "Biological Sciences",
  programmeName: "MSc Public Health Parasitology",
  degreeType: "MSc",
  shortDescription: "Advanced study in Public Health Parasitology."
},
{
  id: "phd-applied-parasitology",
  faculty: "Science",
  department: "Biological Sciences",
  programmeName: "PhD Applied Parasitology",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Applied Parasitology."
},
{
  id: "phd-public-health-parasitology",
  faculty: "Science",
  department: "Biological Sciences",
  programmeName: "PhD Public Health Parasitology",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Public Health Parasitology."
},
{
  id: "phd-ecology-conservation",
  faculty: "Science",
  department: "Biological Sciences",
  programmeName: "PhD Ecology and Conservation",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Ecology and Conservation."
},

// Department of Mathematical Sciences
{
  id: "pgd-statistics",
  faculty: "Science",
  department: "Mathematical Sciences",
  programmeName: "PGD Statistics",
  degreeType: "PGD",
  shortDescription: "Foundational postgraduate diploma in Statistics."
},
{
  id: "msc-statistics",
  faculty: "Science",
  department: "Mathematical Sciences",
  programmeName: "MSc Statistics",
  degreeType: "MSc",
  shortDescription: "Advanced study in Statistics."
},
{
  id: "phd-statistics",
  faculty: "Science",
  department: "Mathematical Sciences",
  programmeName: "PhD Statistics",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Statistics."
},
{
  id: "pgd-mathematics",
  faculty: "Science",
  department: "Mathematical Sciences",
  programmeName: "PGD Mathematics",
  degreeType: "PGD",
  shortDescription: "Foundational postgraduate diploma in Mathematics."
},
{
  id: "msc-mathematics",
  faculty: "Science",
  department: "Mathematical Sciences",
  programmeName: "MSc Mathematics",
  degreeType: "MSc",
  shortDescription: "Advanced study in Mathematics."
},
{
  id: "phd-mathematics",
  faculty: "Science",
  department: "Mathematical Sciences",
  programmeName: "PhD Mathematics",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Mathematics."
},
{
  id: "pgd-computer-science",
  faculty: "Science",
  department: "Mathematical Sciences",
  programmeName: "PGD Computer Science",
  degreeType: "PGD",
  shortDescription: "Foundational postgraduate diploma in Computer Science."
},
{
  id: "msc-computer-science",
  faculty: "Science",
  department: "Mathematical Sciences",
  programmeName: "MSc Computer Science",
  degreeType: "MSc",
  shortDescription: "Advanced study in Computer Science."
},
{
  id: "phd-computer-science",
  faculty: "Science",
  department: "Mathematical Sciences",
  programmeName: "PhD Computer Science",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Computer Science."
},

// Department of Chemical Sciences
{
  id: "pgd-chemistry",
  faculty: "Science",
  department: "Chemical Sciences",
  programmeName: "PGD Chemistry",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Chemistry."
},
{
  id: "msc-analytical-chemistry",
  faculty: "Science",
  department: "Chemical Sciences",
  programmeName: "MSc Analytical Chemistry",
  degreeType: "MSc",
  shortDescription: "Advanced study in Analytical Chemistry."
},
{
  id: "msc-environmental-chemistry",
  faculty: "Science",
  department: "Chemical Sciences",
  programmeName: "MSc Environmental Chemistry",
  degreeType: "MSc",
  shortDescription: "Advanced study in Environmental Chemistry."
},
{
  id: "msc-organic-chemistry",
  faculty: "Science",
  department: "Chemical Sciences",
  programmeName: "MSc Organic Chemistry",
  degreeType: "MSc",
  shortDescription: "Advanced study in Organic Chemistry."
},
{
  id: "msc-physical-chemistry",
  faculty: "Science",
  department: "Chemical Sciences",
  programmeName: "MSc Physical Chemistry",
  degreeType: "MSc",
  shortDescription: "Advanced study in Physical Chemistry."
},
{
  id: "phd-environmental-chemistry",
  faculty: "Science",
  department: "Chemical Sciences",
  programmeName: "PhD Environmental Chemistry",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Environmental Chemistry."
},
{
  id: "phd-inorganic-chemistry",
  faculty: "Science",
  department: "Chemical Sciences",
  programmeName: "PhD Inorganic Chemistry",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Inorganic Chemistry."
},
{
  id: "phd-organic-chemistry",
  faculty: "Science",
  department: "Chemical Sciences",
  programmeName: "PhD Organic Chemistry",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Organic Chemistry."
},
{
  id: "phd-physical-chemistry",
  faculty: "Science",
  department: "Chemical Sciences",
  programmeName: "PhD Physical Chemistry",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Physical Chemistry."
},

// Department of Physics
{
  id: "pgd-physics",
  faculty: "Science",
  department: "Physics",
  programmeName: "PGD Physics",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Physics."
},
{
  id: "msc-geophysics",
  faculty: "Science",
  department: "Physics",
  programmeName: "MSc Geophysics",
  degreeType: "MSc",
  shortDescription: "Advanced study in Geophysics."
},
{
  id: "msc-solid-state-physics",
  faculty: "Science",
  department: "Physics",
  programmeName: "MSc Solid State Physics & Material Science",
  degreeType: "MSc",
  shortDescription: "Advanced study in Solid State Physics and Material Science."
},
{
  id: "phd-solid-state-physics",
  faculty: "Science",
  department: "Physics",
  programmeName: "PhD Solid State Physics and Material Science",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Solid State Physics and Material Science."
},
// app/data/programmes.ts (continuation)

// FACULTY OF MANAGEMENT SCIENCES
// Department of Accounting
{
  id: "pgd-accounting-finance",
  faculty: "Management Sciences",
  department: "Accounting",
  programmeName: "PGD Accounting and Finance",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Accounting and Finance."
},
{
  id: "msc-accounting",
  faculty: "Management Sciences",
  department: "Accounting",
  programmeName: "MSc Accounting",
  degreeType: "MSc",
  shortDescription: "Advanced study in Accounting."
},
{
  id: "phd-accounting",
  faculty: "Management Sciences",
  department: "Accounting",
  programmeName: "PhD Accounting",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Accounting."
},

// Department of Business Administration
{
  id: "pgd-management",
  faculty: "Management Sciences",
  department: "Business Administration",
  programmeName: "PGD Management",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Management."
},
{
  id: "msc-business-admin",
  faculty: "Management Sciences",
  department: "Business Administration",
  programmeName: "MSc Business Administration",
  degreeType: "MSc",
  shortDescription: "Advanced study in Business Administration."
},
{
  id: "mba-business-admin",
  faculty: "Management Sciences",
  department: "Business Administration",
  programmeName: "MBA Business Administration",
  degreeType: "MBA",
  shortDescription: "Master of Business Administration programme."
},
{
  id: "phd-business-admin",
  faculty: "Management Sciences",
  department: "Business Administration",
  programmeName: "PhD Business Administration",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Business Administration."
},
{
  id: "mphil-business-admin",
  faculty: "Management Sciences",
  department: "Business Administration",
  programmeName: "MPhil Business Administration",
  degreeType: "MPhil",
  shortDescription: "Research-focused programme in Business Administration."
},

// Department of Public Administration
{
  id: "pgd-public-administration",
  faculty: "Management Sciences",
  department: "Public Administration",
  programmeName: "PGD Public Administration",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Public Administration."
},
{
  id: "mpa-public-administration",
  faculty: "Management Sciences",
  department: "Public Administration",
  programmeName: "M.A Public Administration",
  degreeType: "M.A",
  shortDescription: "Master of Public Administration programme."
},
{
  id: "msc-public-administration",
  faculty: "Management Sciences",
  department: "Public Administration",
  programmeName: "MSc Public Administration",
  degreeType: "MSc",
  shortDescription: "Advanced study in Public Administration."
},
{
  id: "phd-public-administration",
  faculty: "Management Sciences",
  department: "Public Administration",
  programmeName: "PhD Public Administration",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Public Administration."
},
{
  id: "mphil-public-administration",
  faculty: "Management Sciences",
  department: "Public Administration",
  programmeName: "MPhil Public Administration",
  degreeType: "MPhil",
  shortDescription: "Research-focused programme in Public Administration."
},

// FACULTY OF SOCIAL SCIENCES
// Department of Economics
{
  id: "pgd-economics",
  faculty: "Social Sciences",
  department: "Economics",
  programmeName: "PGD Economics",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Economics."
},
{
  id: "pgd-health-economics",
  faculty: "Social Sciences",
  department: "Economics",
  programmeName: "PGD Health Economics",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Health Economics."
},
{
  id: "msc-economics",
  faculty: "Social Sciences",
  department: "Economics",
  programmeName: "MSc Economics",
  degreeType: "MSc",
  shortDescription: "Advanced study in Economics."
},
{
  id: "msc-health-economics",
  faculty: "Social Sciences",
  department: "Economics",
  programmeName: "MSc Health Economics",
  degreeType: "MSc",
  shortDescription: "Advanced study in Health Economics."
},
{
  id: "phd-economics",
  faculty: "Social Sciences",
  department: "Economics",
  programmeName: "PhD Economics",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Economics."
},

// Department of Geography
{
  id: "pgd-environmental-management",
  faculty: "Social Sciences",
  department: "Geography",
  programmeName: "PGD Environmental Management",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Environmental Management."
},
{
  id: "msc-environmental-resource-management",
  faculty: "Social Sciences",
  department: "Geography",
  programmeName: "MSc Environmental Resource and Management",
  degreeType: "MSc",
  shortDescription: "Advanced study in Environmental Resource and Management."
},
{
  id: "phd-environmental-management",
  faculty: "Social Sciences",
  department: "Geography",
  programmeName: "PhD Environmental Management",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Environmental Management."
},
{
  id: "phd-geography",
  faculty: "Social Sciences",
  department: "Geography",
  programmeName: "PhD Geography",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Geography."
},

// Department of Tourism
{
  id: "pgd-event-hospitality-management",
  faculty: "Social Sciences",
  department: "Tourism",
  programmeName: "PGD Event and Hospitality Management",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Event and Hospitality Management."
},
{
  id: "pgd-recreation-tourism-management",
  faculty: "Social Sciences",
  department: "Tourism",
  programmeName: "PGD Recreation and Tourism Management",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Recreation and Tourism Management."
},
{
  id: "msc-event-hospitality-management",
  faculty: "Social Sciences",
  department: "Tourism",
  programmeName: "MSc Event and Hospitality Management",
  degreeType: "MSc",
  shortDescription: "Advanced study in Event and Hospitality Management."
},
{
  id: "msc-recreation-tourism-management",
  faculty: "Social Sciences",
  department: "Tourism",
  programmeName: "MSc Recreation and Tourism Management",
  degreeType: "MSc",
  shortDescription: "Advanced study in Recreation and Tourism Management."
},

// Department of Political Science & International Relations
{
  id: "pgd-political-science",
  faculty: "Social Sciences",
  department: "Political Science & International Relations",
  programmeName: "PGD Political Science",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Political Science."
},
{
  id: "msc-political-science",
  faculty: "Social Sciences",
  department: "Political Science & International Relations",
  programmeName: "MSc Political Science",
  degreeType: "MSc",
  shortDescription: "Advanced study in Political Science."
},
{
  id: "phd-political-science",
  faculty: "Social Sciences",
  department: "Political Science & International Relations",
  programmeName: "PhD Political Science",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Political Science."
},

// Department of Sociology
{
  id: "pgd-sociology",
  faculty: "Social Sciences",
  department: "Sociology",
  programmeName: "PGD Sociology",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Sociology."
},
{
  id: "msc-sociology",
  faculty: "Social Sciences",
  department: "Sociology",
  programmeName: "MSc Sociology",
  degreeType: "MSc",
  shortDescription: "Advanced study in Sociology."
},
{
  id: "phd-sociology",
  faculty: "Social Sciences",
  department: "Sociology",
  programmeName: "PhD Sociology",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Sociology."
},

// Department of Peace Studies & Conflict Resolution
{
  id: "pgd-peace-conflict-studies",
  faculty: "Social Sciences",
  department: "Peace Studies & Conflict Resolution",
  programmeName: "PGD Peace and Conflict Studies",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Peace and Conflict Studies."
},
{
  id: "msc-peace-conflict-resolution",
  faculty: "Social Sciences",
  department: "Peace Studies & Conflict Resolution",
  programmeName: "MSc Peace & Conflict Resolution",
  degreeType: "MSc",
  shortDescription: "Advanced study in Peace and Conflict Resolution."
},
{
  id: "msc-peace-security-studies",
  faculty: "Social Sciences",
  department: "Peace Studies & Conflict Resolution",
  programmeName: "MSc Peace and Security Studies",
  degreeType: "MSc",
  shortDescription: "Advanced study in Peace and Security Studies."
},
{
  id: "msc-human-security-counter-terrorism",
  faculty: "Social Sciences",
  department: "Peace Studies & Conflict Resolution",
  programmeName: "MSc Human Security and Counter Terrorism",
  degreeType: "MSc",
  shortDescription: "Advanced study in Human Security and Counter Terrorism."
},
{
  id: "phd-peace-security-studies",
  faculty: "Social Sciences",
  department: "Peace Studies & Conflict Resolution",
  programmeName: "PhD Peace and Security Studies",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Peace and Security Studies."
},
{
  id: "phd-peace-conflict-resolution",
  faculty: "Social Sciences",
  department: "Peace Studies & Conflict Resolution",
  programmeName: "PhD Peace & Conflict Resolution",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Peace & Conflict Resolution."
},
{
  id: "phd-human-security-counter-terrorism",
  faculty: "Social Sciences",
  department: "Peace Studies & Conflict Resolution",
  programmeName: "PhD Human Security and Counter Terrorism",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Human Security and Counter Terrorism."
},
// app/data/programmes.ts (continuation)

// FACULTY OF MEDIA AND COMMUNICATION STUDIES
// Department of Mass Communication
{
  id: "pgd-mass-communication",
  faculty: "Media and Communication Studies",
  department: "Mass Communication",
  programmeName: "PGD Mass Communication",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Mass Communication."
},
{
  id: "msc-mass-communication",
  faculty: "Media and Communication Studies",
  department: "Mass Communication",
  programmeName: "MSc Mass Communication",
  degreeType: "MSc",
  shortDescription: "Advanced study in Mass Communication."
},
{
  id: "phd-mass-communication",
  faculty: "Media and Communication Studies",
  department: "Mass Communication",
  programmeName: "PhD Mass Communication",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Mass Communication."
},

// FACULTY OF ENGINEERING
// Department of Agricultural & Bio-Resources Engineering
{
  id: "pgd-farm-power-machinery-engineering",
  faculty: "Engineering",
  department: "Agricultural & Bio-Resources Engineering",
  programmeName: "PGD Farm Power in Machinery Engineering",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Farm Power and Machinery Engineering."
},
{
  id: "msc-farm-power-machinery-engineering",
  faculty: "Engineering",
  department: "Agricultural & Bio-Resources Engineering",
  programmeName: "MSc Farm Power in Machinery Engineering",
  degreeType: "MSc",
  shortDescription: "Advanced study in Farm Power and Machinery Engineering."
},
{
  id: "msc-soil-water-resources-engineering",
  faculty: "Engineering",
  department: "Agricultural & Bio-Resources Engineering",
  programmeName: "MSc Soil and Water Resources Engineering",
  degreeType: "MSc",
  shortDescription: "Advanced study in Soil and Water Resources Engineering."
},
{
  id: "phd-soil-water-resources-engineering",
  faculty: "Engineering",
  department: "Agricultural & Bio-Resources Engineering",
  programmeName: "PhD Soil and Water Resources Engineering",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Soil and Water Resources Engineering."
},
{
  id: "phd-farm-power-mechanical-engineering",
  faculty: "Engineering",
  department: "Agricultural & Bio-Resources Engineering",
  programmeName: "PhD Farm Power in Mechanical Engineering",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Farm Power and Mechanical Engineering."
},

// Department of Civil Engineering
{
  id: "pgd-civil-engineering",
  faculty: "Engineering",
  department: "Civil Engineering",
  programmeName: "PGD Civil Engineering",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Civil Engineering."
},
{
  id: "meng-environmental-engineering",
  faculty: "Engineering",
  department: "Civil Engineering",
  programmeName: "M.Eng Environmental Engineering",
  degreeType: "MSc",
  shortDescription: "Master’s in Environmental Engineering."
},
{
  id: "meng-water-resources-engineering",
  faculty: "Engineering",
  department: "Civil Engineering",
  programmeName: "M.Eng Water Resources Engineering",
  degreeType: "MSc",
  shortDescription: "Master’s in Water Resources Engineering."
},
{
  id: "phd-environmental-engineering",
  faculty: "Engineering",
  department: "Civil Engineering",
  programmeName: "PhD Environmental Engineering",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Environmental Engineering."
},
{
  id: "phd-water-resources-engineering",
  faculty: "Engineering",
  department: "Civil Engineering",
  programmeName: "PhD Water Resources Engineering",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Water Resources Engineering."
},

// Department of Mechanical Engineering
{
  id: "pgd-mechanical-engineering",
  faculty: "Engineering",
  department: "Mechanical Engineering",
  programmeName: "PGD Mechanical Engineering",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Mechanical Engineering."
},
{
  id: "meng-metallurgical-materials-engineering",
  faculty: "Engineering",
  department: "Mechanical Engineering",
  programmeName: "M.Eng Metallurgical & Materials Engineering",
  degreeType: "MSc",
  shortDescription: "Master’s in Metallurgical and Materials Engineering."
},
{
  id: "meng-production-engineering",
  faculty: "Engineering",
  department: "Mechanical Engineering",
  programmeName: "M.Eng Production Engineering",
  degreeType: "MSc",
  shortDescription: "Master’s in Production Engineering."
},
{
  id: "phd-production-engineering",
  faculty: "Engineering",
  department: "Mechanical Engineering",
  programmeName: "PhD Production Engineering",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Production Engineering."
},
{
  id: "phd-metallurgical-materials-engineering",
  faculty: "Engineering",
  department: "Mechanical Engineering",
  programmeName: "PhD Metallurgical & Materials Engineering",
  degreeType: "PhD",
  shortDescription: "Research-focused programme in Metallurgical and Materials Engineering."
},

// FACULTY OF HEALTH SCIENCES
// Department of Environmental Health Sciences
{
  id: "pgd-environmental-health-sciences",
  faculty: "Health Sciences",
  department: "Environmental Health Sciences",
  programmeName: "PGD Environmental Health Sciences",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Environmental Health Sciences."
},
{
  id: "msc-environmental-health-sciences",
  faculty: "Health Sciences",
  department: "Environmental Health Sciences",
  programmeName: "MSc Environmental Health Sciences",
  degreeType: "MSc",
  shortDescription: "Advanced study in Environmental Health Sciences."
},
{
  id: "mph-public-health",
  faculty: "Health Sciences",
  department: "Environmental Health Sciences",
  programmeName: "MPH Public Health",
  degreeType: "MPH",
  shortDescription: "Master of Public Health programme."
},
{
  id: "msc-public-health",
  faculty: "Health Sciences",
  department: "Environmental Health Sciences",
  programmeName: "MSc Public Health",
  degreeType: "MSc",
  shortDescription: "Advanced study in Public Health."
},
{
  id: "pgd-public-health",
  faculty: "Health Sciences",
  department: "Environmental Health Sciences",
  programmeName: "PGD Public Health",
  degreeType: "PGD",
  shortDescription: "Postgraduate Diploma in Public Health."
}


];
