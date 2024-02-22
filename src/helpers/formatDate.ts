export function formatDate(dateString: string, isArabic?: boolean): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = new Date(dateString).toLocaleDateString(
    `${isArabic ? "ar-eg" : "en-US"}`,
    options
  );
  return formattedDate;
}

export function formatDate_2(inputDate: string, isArabic?: boolean): string {
  const parsedDate = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = parsedDate.toLocaleDateString(
    `${isArabic ? "ar-eg" : "en-US"}`,
    options
  );
  return formattedDate;
}

export function formatDate_3(inputDate: string, isArabic?: boolean): string {
  const date = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  return new Intl.DateTimeFormat(
    `${isArabic ? "ar-eg" : "en-US"}`,
    options
  ).format(date);
}
