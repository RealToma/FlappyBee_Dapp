export const shortAddress = (address: any) => {
  return address?.slice(0, 6) + "..." + address?.slice(-4);
};

export const sortAllTimeScores = (dataScores: any) => {
  let tempData = dataScores.sort((a: any, b: any) => b.score - a.score);
  return tempData.slice(0, 10);
};

const get24hData = (dataScores: any) => {
  const currentTime = new Date();
  const currentTotalSeconds = Math.floor(currentTime.getTime() / 1000);
  console.log(currentTotalSeconds);

  const timeOnedayBefore = currentTotalSeconds - 1 * 24 * 60 * 60;
  let temp24hData = [];
  for (var i = 0; i < dataScores.length; i++) {
    let dateEachTime = new Date(dataScores[i].timePlayed);
    let eachTotalSeconds = Math.floor(dateEachTime.getTime() / 1000);
    if (timeOnedayBefore < eachTotalSeconds) {
      temp24hData.push(dataScores[i]);
    }
  }

  console.log(temp24hData);
  return temp24hData;
};

export const sort24hScores = (dataScores: any) => {
  let data24hBefore: any = get24hData(dataScores);
  data24hBefore.sort((a: any, b: any) => b.score - a.score);

  return data24hBefore.slice(0, 10);
};
