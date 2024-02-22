function transformNumtoLabel(num: number, locale: string | string[]): string {
  const enOrdinals = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eighth",
    "Ninth",
    "Tenth",
    "Eleventh",
    "Twelfth",
    "Thirteenth",
    "Fourteenth",
    "Fifteenth",
    "Sixteenth",
    "Seventeenth",
    "Eighteenth",
    "Nineteenth",
    "Twentieth",
  ];

  const frOrdinals = [
    "Premier",
    "Deuxième",
    "Troisième",
    "Quatrième",
    "Cinquième",
    "Sixième",
    "Septième",
    "Huitième",
    "Neuvième",
    "Dixième",
    "Onzième",
    "Douzième",
    "Treizième",
    "Quatorzième",
    "Quinzième",
    "Seizième",
    "Dix-septième",
    "Dix-huitième",
    "Dix-neuvième",
    "Vingtième",
  ];

  const arOrdinals = [
    "الأول",
    "الثاني",
    "الثالث",
    "الرابع",
    "الخامس",
    "السادس",
    "السابع",
    "الثامن",
    "التاسع",
    "العاشر",
    "الحادي عشر",
    "الثاني عشر",
    "الثالث عشر",
    "الرابع عشر",
    "الخامس عشر",
    "السادس عشر",
    "السابع عشر",
    "الثامن عشر",
    "التاسع عشر",
    "العشرون",
  ];

  switch (locale) {
    case "en":
      return enOrdinals[num - 1] || `${num}th`;
    case "fr":
      return frOrdinals[num - 1] || `${num}ème`;
    case "ar":
      return arOrdinals[num - 1] || `${num}`;
    default:
      return `${num}th`;
  }
}

export default transformNumtoLabel;
