import axios from "axios";


export const getBTCPrice = async () => {
  try {
    const { data } = await axios.get(
      `https://mempool.space/api/v1/prices`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

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


export const getTickBalance = async (address: String, tick: String) => {
  try {
    const { data } = await axios.get(
      `https://open-api.unisat.io/v1/indexer/address/${address}/brc20/${tick}/info`,
      {
          headers: {
            "content-type": "application/json",
             'Authorization': 'Bearer 91a92639f53107efdd998e7d79ee815137fe8b1679a02b48088f50814ebe462a'
          },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};