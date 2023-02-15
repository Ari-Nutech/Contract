const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const formatPrice = (price: any) => {
  return formatter.format(price);
};

function getDeltaTimeFromNow(date: string) {
  return new Intl.DateTimeFormat().format(new Date(date));
}

function formatDate(date: any) {
  if (date) {
    return new Intl.DateTimeFormat().format(new Date(date));
  }
}

function formatDateDash(date: any) {
  function checkTime(i: any) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  if (date) {
    var newDate = new Date(date);
    var y = newDate.getFullYear();
    var m = newDate.getMonth() + 1;
    var d = newDate.getDate();
    // add a zero in front of numbers<10
    m = checkTime(m);
    d = checkTime(d);
    return y + "-" + m + "-" + d;
  }
}

function formatDateTime(date: any) {
  if (date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    }).format(new Date(date));
  }
}

function getDeltaDate(date: string, delta: number) {
  let tempDate = new Date(date);
  tempDate.setDate(tempDate.getDate() + delta);
  return tempDate;
}

function validURL(str: string) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

export {
  getDeltaTimeFromNow,
  formatDate,
  formatPrice,
  getDeltaDate,
  formatDateTime,
  formatDateDash,
  validURL,
};
