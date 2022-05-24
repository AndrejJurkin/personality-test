export default function getAbsoluteUrl(relativeUrl) {
  return `${process.env.BASE_URL}${
    relativeUrl.startsWith("/") ? "" : "/"
  }${relativeUrl}`;
}
