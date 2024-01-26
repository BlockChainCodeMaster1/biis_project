import axios from "axios";


export const getFeeRate = async () => {
  try {
    const { data } = await axios.get(
      `https://mempool.space/api/v1/fees/recommended`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBalance = async (address: String) => {
  try {
    const { data } = await axios.get(
      `https://mempool.space/api/address/` + address
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTotalData = async () => {
  try {
    const { data } = await axios.get(`/api/getTotalData`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRank = async (startTime: Number, endTime: Number) => {
  try {
    const { data } = await axios.get(`/api/getRank/${startTime}/${endTime}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getInviteRank = async (day: Number) => {
  try {
    const { data } = await axios.get(`/api/getInviteRank/${day}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLucky = async (startTime: Number, endTime: Number) => {
  try {
    const { data } = await axios.get(`/api/getLucky/${startTime}/${endTime}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLuckyRank = async (day: Number) => {
  try {
    const { data } = await axios.get(`/api/getLuckyRank/${day}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLuckyRankReward = async (day: Number) => {
  try {
    const { data } = await axios.get(`/api/getLuckyRankReward/${day}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDataByAddress = async (address: String) => {
  try {
    const { data } = await axios.get(`/api/getDataByAddress/` + address);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFloorDataByAddress = async (address: String) => {
  try {
    const { data } = await axios.get(`/api/getFloorDataByAddress/` + address);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getInviteDataByAddress = async (address: String) => {
  try {
    const { data } = await axios.get(`/api/getInviteDataByAddress/` + address);
    return data;
  } catch (error) {
    console.log(error);
  }
};