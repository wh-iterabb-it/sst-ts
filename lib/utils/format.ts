/**
 * toHHMMSS
 * turns an amount of seconds into days, hours, minutes seconds
 * @param {number} inctime - an amount of seconds to be formatted
 * @return {string} 'dd:hh:mm:ss' days, hours, minutes seconds returned as a string
 */
function toDDHHMMSS(inctime: number): string {
  let time = inctime;
  const days = Math.floor(time / 86400);
  time -= days * 86400;
  const hours = Math.floor(time / 3600);
  time -= hours * 3600;
  const minutes = Math.floor(time / 60);
  time -= minutes * 60;
  const seconds = Math.floor(time % 60);
  return `${days.toString().padStart(2, "0")}:${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

/**
 * toHHMMSS
 * turns an amount of seconds into hours, minutes seconds
 * @param {number} inctime - an amount of seconds to be formatted
 * @return {string} 'hh:mm:ss' hours, minutes seconds returned as a string
 */
function toHHMMSS(inctime: number): string {
  let time = inctime;
  const hours = Math.floor(time / 3600);
  time -= hours * 3600;
  const minutes = Math.floor(time / 60);
  time -= minutes * 60;
  const seconds = Math.floor(time % 60);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

/**
 * formatMoney
 * description: this will return a string, formatted $xx.xx for a given int
 * @param {number} money - the incomming money
 **/
function formatMoney(money: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(money);
}

export { toDDHHMMSS, toHHMMSS, formatMoney };
