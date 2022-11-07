import axios from "axios";
import { env } from "../config/env.js";

export async function getAccountIds() {
  try {
    const { data } = await axios.get(`${env.SBDD_API_URL}/api/account/all`)
    return data.accountIds;
  } catch(error) {
    console.error(error)
    return []
  }
}