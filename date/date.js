dayjs().locale("fr");
console.log(dayjs().format("DD - MM - YYYY"));
console.log(dayjs().add(8, "day").format());
console.log(dayjs().subtract(1, "month").format());
console.log(dayjs().format("dddd"));
